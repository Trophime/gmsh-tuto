import gmsh
import sys

gmsh.initialize()
gmsh.model.add("square")

# define params
Lc = 1e-1
Lx = 1
Ly = 1

# create surface
s = gmsh.model.occ.addRectangle(-Lx, -Ly, 0, 2*Lx, 2*Ly)
print(f's={s}', flush=True)

# Force synchro
gmsh.model.occ.synchronize()

# Enumerate enties
for dim in range(3):
    print(f'entities(dim={dim})={ gmsh.model.getEntities(dim)}', flush=True)

    print(f'boundary: {gmsh.model.getBoundary([(2,s)])}', flush=True)
for (dim, tag) in gmsh.model.getBoundary([(2,s)]):
    otype = gmsh.model.getType(dim, abs(tag))
    print(f'dim: {dim}, tag:{tag}, otype: {otype}')

# Select entities with boundingbox
eps = 1.e-3
selected = gmsh.model.getEntitiesInBoundingBox(-Lx-eps, -Ly-eps, -eps, Lx+eps, -Ly+eps, eps, 1)
print(f'selected: {selected}')
ps = gmsh.model.addPhysicalGroup(1, [tag for (dim, tag) in selected])
gmsh.model.setPhysicalName(1, ps, "My Line")

# Physical Surface
ps = gmsh.model.addPhysicalGroup(2, [s])
gmsh.model.setPhysicalName(2, ps, "My surface")

gmsh.model.mesh.generate(2)
gmsh.write("square.msh")

if '-nopopup' not in sys.argv:
    gmsh.fltk.run()

