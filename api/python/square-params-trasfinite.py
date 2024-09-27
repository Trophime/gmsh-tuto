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
parser.add_argument('-quad', action='store_true')  # on/off flag
parser.add_argument('-nopopup', action='store_true')  # on/off flag
args = parser.parse_args()
print(args)

Lx = args.Lx
Ly = args.Ly
lc = args.lc

p1 = gmsh.model.geo.addPoint(-Lx, -Ly, 0, lc)
p2 = gmsh.model.geo.addPoint(Lx, -Ly, 0, lc)
p3 = gmsh.model.geo.addPoint(Lx, Ly, 0, lc)
p4 = gmsh.model.geo.addPoint(-Lx, Ly, 0, lc)
print(f'Points: {p1}, {p2}, {p3}, {p4}')

# Lines
l1 = gmsh.model.geo.addLine(p1, p2)
l2 = gmsh.model.geo.addLine(p2, p3)
l3 = gmsh.model.geo.addLine(p3, p4)
l4 = gmsh.model.geo.addLine(p4, p1)

loop = gmsh.model.geo.addCurveLoop([l1, l2, l3, l4])
gmsh.model.geo.addPlaneSurface([loop], 1)
gmsh.model.geo.synchronize()


gmsh.model.addPhysicalGroup(1, [l1], name="Ox")
gmsh.model.addPhysicalGroup(1, [l2, l3, l4], name="others")
gmsh.model.addPhysicalGroup(2, [1], name="Top")

for c in gmsh.model.getEntities(1):
    print(f'transfinite line: {c[1]}')
    gmsh.model.geo.mesh.setTransfiniteCurve(c[1], 20, "Bump", 0.2)
gmsh.model.mesh.setTransfiniteSurface(1)

if args.quad:
    gmsh.model.geo.mesh.setRecombine(2, 1)

# Before meshing, the CAD entities must
# be synchronized with the Gmsh model.
gmsh.model.geo.synchronize()
    
# generate a 2D mesh...
gmsh.option.setNumber("Mesh.Smoothing", 100)
gmsh.model.mesh.generate(2)
gmsh.write("t1.msh")

# To visualize the model we can run the graphical user interface with
if not args.nopopup:
    gmsh.fltk.run()

gmsh.finalize()
