import argparse
import sys

import gmsh


def main():
    """Thermal fin: a central Post with N pairs of Fins.

    Each Fin level is defined by a single shape crossing the Post.

    In 2D, Post and Fins are rectangles.
    In 3D, the Post (root) and the Fins are either boxes or cylinders (y is the Post axis):
      Post box: square section w x w,  Post cylinder: diameter w
      Fin box:  square plate of side w + 2L,  Fin cylinder: disk of radius w/2 + L

    Physicals (dim = 2 or 3):
      dim:     Post, Fin_1, ..., Fin_N (all parts of a fin level share a physical)
      dim - 1: Gamma_root (bottom of the Post), Gamma_ext (rest of the outer boundary)
    """
    parser = argparse.ArgumentParser()
    parser.add_argument("--dim", help="geometry dimension", type=int, choices=[2, 3], default=2)
    parser.add_argument(
        "--root", help="post shape (3D only)", choices=["box", "cylinder"], default="box"
    )
    parser.add_argument(
        "--fin", help="fin shape (3D only)", choices=["box", "cylinder"], default="box"
    )
    parser.add_argument("--N", help="number of fin levels", type=int, default=4)
    parser.add_argument("--L", help="fin length", type=float, default=2.5)
    parser.add_argument("--t", help="fin thickness", type=float, default=0.25)
    parser.add_argument("--d", help="distance between fins", type=float, default=0.75)
    parser.add_argument("--width", help="post width", type=float, default=1.0)
    parser.add_argument("--lc", help="mesh size", type=float, default=0.1)
    parser.add_argument("--mesh", help="activate mesh mode", action="store_true")
    parser.add_argument("--view", help="activate view mode", action="store_true")
    parser.add_argument("--debug", help="activate debug mode", action="store_true")

    args = parser.parse_args()
    dim = args.dim
    N = args.N
    L = args.L
    t = args.t
    d = args.d
    w = args.width
    lc = args.lc

    # init gmsh
    gmsh.initialize()

    # add a model
    gmsh.model.add("thermalfin-v2")

    # create the post: centered on x=0 (and z=0), root at y=0, top aligned with Fin_N
    H = N * (d + t)
    if dim == 2:
        post = gmsh.model.occ.addRectangle(-w / 2.0, 0, 0, w, H)
    elif args.root == "box":
        post = gmsh.model.occ.addBox(-w / 2.0, 0, -w / 2.0, w, H, w)
    else:
        post = gmsh.model.occ.addCylinder(0, 0, 0, 0, H, 0, w / 2.0)

    # create the fins: a single shape crossing the post defines fin i (1..N),
    # which lies in [d + (i-1)*(d+t), i*(d+t)]
    fins = {}
    for i in range(1, N + 1):
        y = d + (i - 1) * (d + t)
        if dim == 2:
            fins[i] = gmsh.model.occ.addRectangle(-w / 2.0 - L, y, 0, w + 2 * L, t)
        elif args.fin == "box":
            fins[i] = gmsh.model.occ.addBox(
                -w / 2.0 - L, y, -w / 2.0 - L, w + 2 * L, t, w + 2 * L
            )
        else:
            fins[i] = gmsh.model.occ.addCylinder(0, y, 0, 0, t, 0, w / 2.0 + L)
    gmsh.model.occ.synchronize()

    # boolean operation: fragment the post with the fins to get a conformal domain
    # each fin is split into the part overlapping the post and the outer part(s)
    tools = [(dim, fins[i]) for i in range(1, N + 1)]
    ov, ovv = gmsh.model.occ.fragment([(dim, post)], tools)
    gmsh.model.occ.synchronize()

    if args.debug:
        print("before/after fragment relations:")
        for e in zip([(2, post)] + tools, ovv):
            print("parent " + str(e[0]) + " -> child " + str(e[1]))

    # retrieve the new entity tags from the parent-child relationships
    # the parts shared by the post and a fin belong to the post
    post_tags = [tag for _, tag in ovv[0]]
    fin_tags = {}
    for i in range(1, N + 1):
        fin_tags[i] = [tag for _, tag in ovv[i] if tag not in post_tags]

    # create physical groups for surfaces (2D) or volumes (3D)
    ps = gmsh.model.addPhysicalGroup(dim, post_tags)
    gmsh.model.setPhysicalName(dim, ps, name="Post")
    for i in range(1, N + 1):
        ps = gmsh.model.addPhysicalGroup(dim, fin_tags[i])
        gmsh.model.setPhysicalName(dim, ps, name=f"Fin_{i}")

    # outer boundary of the whole domain
    boundary = gmsh.model.getBoundary(ov, combined=True, oriented=False, recursive=False)
    boundary = [abs(tag) for _, tag in boundary]

    # Gamma_root: bottom of the post (lines in 2D, surfaces in 3D)
    eps = 1.0e-6
    zmax = 0 if dim == 2 else w / 2.0
    _ov = gmsh.model.getEntitiesInBoundingBox(
        -w / 2.0 - eps, -eps, -zmax - eps, w / 2.0 + eps, eps, zmax + eps, dim - 1
    )
    root = [tag for _, tag in _ov if tag in boundary]
    ext = [tag for tag in boundary if tag not in root]
    if args.debug:
        print(f"Gamma_root: {root}")
        print(f"Gamma_ext: {ext}")

    # create physical groups for lines (2D) or surfaces (3D)
    ps = gmsh.model.addPhysicalGroup(dim - 1, root)
    gmsh.model.setPhysicalName(dim - 1, ps, name="Gamma_root")
    ps = gmsh.model.addPhysicalGroup(dim - 1, ext)
    gmsh.model.setPhysicalName(dim - 1, ps, name="Gamma_ext")

    if args.mesh:
        # set mesh characteristic size
        gmsh.model.mesh.setSize(gmsh.model.getEntities(0), lc)

        # We can then generate a 2D or 3D mesh...
        gmsh.model.mesh.generate(dim)

        # ... and save it to disk
        if dim == 2:
            gmsh.write("thermalfin-v2.msh")
        else:
            gmsh.write(f"thermalfin-v2-{args.root}-{args.fin}.msh")

    # to view the model
    if args.view:
        gmsh.fltk.run()

    # need to end gmsh
    gmsh.finalize()

    return 0


if __name__ == "__main__":
    sys.exit(main())
