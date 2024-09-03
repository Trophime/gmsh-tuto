import gmsh
import sys

gmsh.initialize()
gmsh.model.add("square")

# define params
Lc = 1e-1
Lx = 1
Ly = 1

# define points
p1 = gmsh.model.geo.addPoint(-Lx, -Ly, 0, Lc)
p2 = gmsh.model.geo.addPoint( Lx, -Ly, 0, Lc)
p3 = gmsh.model.geo.addPoint( Lx,  Ly, 0, Lc)
p4 = gmsh.model.geo.addPoint(-Lx,  Ly, 0, Lc)

# create lines
gmsh.model.geo.addLine(p1, p2, 1)
gmsh.model.geo.addLine(p2, p3, 2)
gmsh.model.geo.addLine(p3, p4, 3)
gmsh.model.geo.addLine(p4, p1, 4)

# create surface
gmsh.model.geo.addCurveLoop([1, 2, 3, 4], 1)
gmsh.model.geo.addPlaneSurface([1], 1)

# Force synchro
gmsh.model.geo.synchronize()

# Physical line with an string id
ps = gmsh.model.addPhysicalGroup(1, [1])
gmsh.model.setPhysicalName(1, ps, "My line")

# Physical line with an id
ps = gmsh.model.addPhysicalGroup(1, [2, 3, 4], 5)

# Physical Surface
ps = gmsh.model.addPhysicalGroup(2, [1])
gmsh.model.setPhysicalName(2, ps, "My surface")

gmsh.model.mesh.generate(2)
gmsh.write("square.msh")

if '-nopopup' not in sys.argv:
    gmsh.fltk.run()

