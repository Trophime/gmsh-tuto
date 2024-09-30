import gmsh
import sys

gmsh.initialize()
gmsh.model.add("square")

import argparse
parser = argparse.ArgumentParser(add_help=False)
parser.add_argument('-lc', help="mesh characteristic length", type=float, default=0.1)
parser.add_argument('-Lx', help="Length along OX", type=float, default=0.25)
parser.add_argument('-Ly', help="Length along OY", type=float, default=0.25)
parser.add_argument('-eps', help="tolerance", type=float, default=1.e-5)
parser.add_argument('-bump', action='store_true')  # on/off flag
parser.add_argument('-quad', action='store_true')  # on/off flag
parser.add_argument('-nopopup', action='store_true')  # on/off flag
args = parser.parse_args()
print(args)

Lx = args.Lx
Ly = args.Ly
lc = args.lc
eps =args.eps

s = gmsh.model.occ.addRectangle(-Lx, -Ly, 0, 2*Lx, 2*Ly)
gmsh.model.occ.synchronize()

boundaries = gmsh.model.getBoundary([(2, s)], False, False)
p0 = gmsh.model.occ.addPoint(-Lx-eps, -Ly-eps, -eps)
p1 = gmsh.model.occ.addPoint(Lx+eps, -Ly+eps, eps)
ox =  gmsh.model.getEntitiesInBoundingBox(-Lx-eps, -Ly-eps, -eps, Lx+eps, -Ly+eps, eps)
print(ox)

gmsh.model.addPhysicalGroup(1, [id for (dim, id) in ox if dim==1], name="Ox")
gmsh.model.addPhysicalGroup(2, [s], name="Top")

for c in boundaries:
    gmsh.model.mesh.setTransfiniteCurve(c[1], 20)
    if args.bump:
        gmsh.model.mesh.setTransfiniteCurve(c[1], 20, "Bump", 0.2)
    gmsh.model.mesh.setTransfiniteSurface(s)

if args.quad:
    gmsh.model.mesh.setRecombine(2, s)

# generate a 2D mesh...
gmsh.model.mesh.generate(2)
gmsh.write("t1.msh")

# To visualize the model we can run the graphical user interface with
if not args.nopopup:
    gmsh.fltk.run()
