import argparse
import sys

import gmsh


def main():
    """Thermal fin: a central Post with N pairs of Fins.

    Physicals:
      surfaces: Post, Fin_1, ..., Fin_N (left and right fins of a level share a physical)
      lines:    Gamma_root (bottom of the Post), Gamma_ext (rest of the outer boundary)
    """
    parser = argparse.ArgumentParser()
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
    N = args.N
    L = args.L
    t = args.t
    d = args.d
    w = args.width
    lc = args.lc

    # init gmsh
    gmsh.initialize()

    # add a model
    gmsh.model.add("thermalfin")

    # create the post: centered on x=0, root at y=0, top aligned with Fin_N
    H = N * (d + t)
    post = gmsh.model.occ.addRectangle(-w / 2.0, 0, 0, w, H)

    # create the fins: fin i (1..N) lies in [d + (i-1)*(d+t), i*(d+t)]
    fins = {}
    for i in range(1, N + 1):
        y = d + (i - 1) * (d + t)
        left = gmsh.model.occ.addRectangle(-w / 2.0 - L, y, 0, L, t)
        right = gmsh.model.occ.addRectangle(w / 2.0, y, 0, L, t)
        fins[i] = [left, right]
    gmsh.model.occ.synchronize()

    # boolean operation: fragment the post with the fins to get a conformal domain
    tools = [(2, tag) for i in range(1, N + 1) for tag in fins[i]]
    ov, ovv = gmsh.model.occ.fragment([(2, post)], tools)
    gmsh.model.occ.synchronize()

    if args.debug:
        print("before/after fragment relations:")
        for e in zip([(2, post)] + tools, ovv):
            print("parent " + str(e[0]) + " -> child " + str(e[1]))

    # retrieve the new surface tags from the parent-child relationships
    post_tags = [tag for dim, tag in ovv[0]]
    fin_tags = {}
    k = 1
    for i in range(1, N + 1):
        fin_tags[i] = []
        for _ in fins[i]:
            fin_tags[i] += [tag for dim, tag in ovv[k]]
            k += 1

    # create physical groups for surfaces
    ps = gmsh.model.addPhysicalGroup(2, post_tags)
    gmsh.model.setPhysicalName(2, ps, name="Post")
    for i in range(1, N + 1):
        ps = gmsh.model.addPhysicalGroup(2, fin_tags[i])
        gmsh.model.setPhysicalName(2, ps, name=f"Fin_{i}")

    # outer boundary of the whole domain
    boundary = gmsh.model.getBoundary(ov, combined=True, oriented=False, recursive=False)
    boundary = [abs(tag) for dim, tag in boundary]

    # Gamma_root: bottom of the post (select 1 for lines)
    eps = 1.0e-6
    _ov = gmsh.model.getEntitiesInBoundingBox(
        -w / 2.0 - eps, -eps, -eps, w / 2.0 + eps, eps, eps, 1
    )
    root = [tag for dim, tag in _ov if tag in boundary]
    ext = [tag for tag in boundary if tag not in root]
    if args.debug:
        print(f"Gamma_root: {root}")
        print(f"Gamma_ext: {ext}")

    # create physical groups for lines
    ps = gmsh.model.addPhysicalGroup(1, root)
    gmsh.model.setPhysicalName(1, ps, name="Gamma_root")
    ps = gmsh.model.addPhysicalGroup(1, ext)
    gmsh.model.setPhysicalName(1, ps, name="Gamma_ext")

    if args.mesh:
        # set mesh characteristic size
        gmsh.model.mesh.setSize(gmsh.model.getEntities(0), lc)

        # We can then generate a 2D mesh...
        gmsh.model.mesh.generate(2)

        # ... and save it to disk
        gmsh.write("thermalfin.msh")

    # to view the model
    if args.view:
        gmsh.fltk.run()

    # need to end gmsh
    gmsh.finalize()

    return 0


if __name__ == "__main__":
    sys.exit(main())
