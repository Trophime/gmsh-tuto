"""
from Gmsh Python tutorial 1

Use built-in kernel API functions have the `gmsh.model.geo' prefix.
"""

import gmsh
import sys

gmsh.initialize()
gmsh.model.add("square")

import argparse
parser = argparse.ArgumentParser(add_help=False)
parser.add_argument('-lc', help="mesh characteristic length", type=float, default=0.1)
parser.add_argument('-Lx', help="Length along OX", type=float, default=0.25)
parser.add_argument('-Ly', help="Length along OY", type=float, default=0.25)
parser.add_argument('-nopopup', action='store_true')  # on/off flag
args = parser.parse_args()
print(args)

Lx = args.Lx
Ly = args.Ly
lc = args.lc

p1 = gmsh.model.geo.addPoint(-Lx, -Ly, 0, lc, 1)
p2 = gmsh.model.geo.addPoint(Lx, -Ly, 0, lc, 2)
p3 = gmsh.model.geo.addPoint(Lx, Ly, 0, lc, 3)
p4 = gmsh.model.geo.addPoint(-Lx, Ly, 0, lc)

# Lines
gmsh.model.geo.addLine(p1, p2, 1)
gmsh.model.geo.addLine(p3, p2, 2)
gmsh.model.geo.addLine(p3, p4, 3)
gmsh.model.geo.addLine(p4, p1, p4)

gmsh.model.geo.addCurveLoop([4, 1, -2, 3], 1)

gmsh.model.geo.addPlaneSurface([1], 1)

# Before meshing, the CAD entities must
# be synchronized with the Gmsh model.
gmsh.model.geo.synchronize()

gmsh.model.addPhysicalGroup(1, [1], name="Ox")
gmsh.model.addPhysicalGroup(1, [2, 3, 4], name="others")
gmsh.model.addPhysicalGroup(2, [1], name="Top")

# generate a 2D mesh...
gmsh.model.mesh.generate(2)
gmsh.model.mesh.setSize(gmsh.model.getEntities(0), args.lc)
gmsh.write("t1.msh")

# To visualize the model we can run the graphical user interface with
if not args.nopopup:
    gmsh.fltk.run()

gmsh.finalize()
