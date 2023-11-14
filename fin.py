import argparse
import gmsh
import sys


def main():
    """Console script for python_magnetgeo."""
    parser = argparse.ArgumentParser()
    parser.add_argument("--lc", help="load mesh size from file", type=float, default=1.e-2)
    parser.add_argument("--mesh", help="activate mesh mode", action="store_true")
    parser.add_argument("--fragment", help="activate fragment", action="store_true")
    parser.add_argument("--view", help="activate view mode", action="store_true")
    parser.add_argument("--debug", help="activate debug mode", action="store_true")


    args = parser.parse_args()
    lc = args.lc

    # init gmsh 
    gmsh.initialize()

    # add a model
    gmsh.model.add("fin")

    x0 = .2
    y0 = 0
    z0 = 0
    dx = .1
    dy = .3
    _id = gmsh.model.occ.addRectangle(x0, y0, z0, dx, dy)
    gmsh.model.occ.synchronize()

    # create a branch
    _id_branch = gmsh.model.occ.addRectangle(x0+dx, y0+dy/2., z0, 6*dx, dy/8.)
    # _id_branch = gmsh.model.occ.addRectangle(-x0+dx, y0+dy/2., z0, 6*dx, dy/8.)
    gmsh.model.occ.synchronize()

    if args.fragment:
        ov, ovv = gmsh.model.occ.fragment(
            [(2, _id)], [(2, i) for i in [_id_branch]]
        )
        # ov contains all the generated entities of the same dimension as the input
        # entities:
        print("fragment produced volumes:")
        for e in ov:
            print(e)

        # ovv contains the parent-child relationships for all the input entities:
        print("before/after fragment relations:")
        for e in zip([(2, _id)] + [(2, _id_branch)], ovv):
            print("parent " + str(e[0]) + " -> child " + str(e[1]))

        gmsh.model.occ.synchronize()

    # select 0 for nodes, 1 for lines
    select = 1
    eps = 1.e-3
    xmin = x0 - eps
    ymin = y0 -eps
    zmin = z0 -eps
    xmax = x0 + eps
    ymax = y0 + dy + eps
    zmax = z0 + eps
    _ov = gmsh.model.getEntitiesInBoundingBox(xmin, ymin, zmin, xmax, ymax, zmax, select)
    print(f'_ov={_ov}')

    # create a physical group for surface _id
    ps = gmsh.model.addPhysicalGroup(2, [_id])
    gmsh.model.setPhysicalName(2, ps, name="My surface")
    ps = gmsh.model.addPhysicalGroup(2, [_id_branch])
    gmsh.model.setPhysicalName(2, ps, name="My branch")
    ps = gmsh.model.addPhysicalGroup(1, [id for dim,id in _ov])
    gmsh.model.setPhysicalName(1, ps, name="My line")

    if args.mesh:
        MeshAlgo2D = {
            "MeshAdapt": 1,
            "Automatic": 2,
            "Initial": 3,
            "Delaunay": 5,
            "Frontal-Delaunay": 6,
            "BAMG": 7,
        }
        
        # Meshing algorithms can changed globally using options:
        gmsh.option.setNumber("Mesh.Algorithm", MeshAlgo2D["Frontal-Delaunay"])  # Frontal-Delaunay for 2D meshes

        # They can also be set for individual surfaces, e.g. for using `MeshAdapt' on
        # surface 1:
        gmsh.model.mesh.setAlgorithm(2, _id, MeshAlgo2D["MeshAdapt"])

        # set mesh characteristic size
        gmsh.model.mesh.setSize(gmsh.model.getEntities(0), lc)

        # We can then generate a 2D mesh...
        gmsh.model.mesh.generate(2)

        # ... and save it to disk
        gmsh.write("fin.msh")

    # to view the model
    if args.view:
        gmsh.fltk.run()

    # need to end gmsh
    gmsh.finalize()

    return 0


if __name__ == "__main__":
    sys.exit(main())
