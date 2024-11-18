import gmsh
import sys
import math

gmsh.initialize()
gmsh.model.add("helix")

r1 = 19.3
r2 = 24.2
dz = 2*150
cut = 2
eps = 2
nturns = 7
pitch = 18.03646917296748


# create spline
npts = 60
r = r1 + (r2-r1) /2.
h = pitch * nturns

# define shape to extrude along spline
s = gmsh.model.occ.addRectangle(r1-eps, -cut/2., 0, r2-r1+2*eps, cut)
gmsh.model.occ.rotate([(2, s)], 0, 0, 0, 1, 0, 0, math.pi / 2.)
print(f's={s}')
gmsh.model.occ.synchronize()

# points = []
sections = []
for i in range(npts+1):
    theta = i * 2*math.pi*nturns/npts
    z = -h/2. + i * h/npts
    p = gmsh.model.occ.addPoint(r * math.cos(theta), r * math.sin(theta), z)
    # points.append(p)

    ov = gmsh.model.occ.copy([(2, s)])
    gmsh.model.occ.rotate(ov, 0, 0, 0, 0, 0, 1, theta)
    gmsh.model.occ.translate(ov, 0, 0, z)
    gmsh.model.occ.synchronize()
    print(f'theta={theta}, ov={ov}')
    sections.append(ov[0][1])

print(f'sections: {sections}')
hcut = gmsh.model.occ.addThruSections(sections, makeSolid=True, makeRuled=True, continuity="G1", parametrization="IsoParametric", smoothing = False)

print(f'hcut={hcut}', flush=True)
gmsh.model.occ.synchronize()

gmsh.model.occ.remove([(2, s)])

# create cylinder
cint = gmsh.model.occ.addCylinder(0, 0, -dz/2., 0, 0, dz, r1)
cext = gmsh.model.occ.addCylinder(0, 0, -dz/2., 0, 0, dz, r2)
outDimTags, outDimTagsMap = gmsh.model.occ.cut([(3, cext)], [(3, cint)], removeObject=True, removeTool=True)
cyl = outDimTags[0]
print(f'cyl={cyl}')

outDimTags, outDimTagsMap = gmsh.model.occ.fragment([cyl], hcut, removeObject=True, removeTool=True)
gmsh.model.occ.synchronize()
print(outDimTags, outDimTagsMap)

# outDimTagsMap contains the parent-child relationships for all the input entities:
print("before/after fragment relations:")
for e in zip([cyl] + hcut, outDimTagsMap):
    print("parent " + str(e[0]) + " -> child " + str(e[1]))    
cyl_children_id = [ dimtag[1] for dimtag in outDimTagsMap[0]]
print(f'cyl_children_id: {cyl_children_id}')    

entities = gmsh.model.getEntities(3)
print(f'entities: {entities}')
volume_ids = []
for id in entities:
    print(f'id: {id}')
    if not id[1] in cyl_children_id:
        gmsh.model.occ.remove([id])
        print(f'remove id: {id}')
    else:
        volume_ids.append(id[1])


# Force synchro
gmsh.model.occ.synchronize()

bcs = {}
for i in volume_ids:
    boundaries = gmsh.model.getBoundary([(3, i)], combined=False, oriented = False, recursive = False)
    print(f'Volume_id: {i} - Boundaries= {len(boundaries)}')
    bcs[i] = [e[1] for e in boundaries]
    bcs[i].sort()
print(f'bcs: {bcs}', flush=True)

# Get interface BC
interface = list(set(bcs[1]) & set(bcs[2]))
print(f'interface_ids: Boundaries= {len(interface)}')

# For Cu volume, get Plane and Cylinder surface
bcs_type = {}
for vol in volume_ids:
    bcs_type[vol] = {}
    for i in bcs[vol]:
        if not i in interface:
            btype = gmsh.model.getType(2, i)
            if btype in bcs_type[vol]:
                bcs_type[vol][btype].append(i)
            else:
                bcs_type[vol][btype] = [i]
print(f'bcs_type={bcs_type}')
        
# Force synchro
gmsh.model.occ.synchronize()

# Get Boundaries

if '-nopopup' not in sys.argv:
    gmsh.fltk.run()
