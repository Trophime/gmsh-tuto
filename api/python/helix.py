import gmsh
import sys
import math

gmsh.initialize()
gmsh.model.add("helix")

import argparse
parser = argparse.ArgumentParser(add_help=False)
parser.add_argument('-start', action='store_true')  # on/off flag
parser.add_argument('-mesh', action='store_true')  # on/off flag
parser.add_argument('-nopopup', action='store_true')  # on/off flag
args = parser.parse_args()
print(args)

# load helix data
r1 = 19.3
r2 = 24.2
dz = 2*150
cut = 0.2
eps = 2
nturns = 1
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
gmsh.model.occ.remove([(2, s)], True)
gmsh.model.occ.remove([(2, s) for s in sections], True)

# Force synchro
gmsh.model.occ.synchronize()


# create cylinder
cint = gmsh.model.occ.addCylinder(0, 0, -dz/2., 0, 0, dz, r1)
cext = gmsh.model.occ.addCylinder(0, 0, -dz/2., 0, 0, dz, r2)
outDimTags, outDimTagsMap = gmsh.model.occ.cut([(3, cext)], [(3, cint)], removeObject=True, removeTool=True)
cyl = outDimTags[0]
print(f'cyl={cyl}: outDimTags={outDimTags}, outDimTagsMap={outDimTagsMap}')
gmsh.model.occ.synchronize()

# add hole for EDM wire
if args.start:
    print('add start hole')
    d = 1.6 # from 1.6 to 2 depending on the helix
    start = gmsh.model.occ.addCylinder(r1-4*eps, 0, 0, r2-r1+2*4*eps, 0, 0, d/2.)
    print(f'start={start}')
    gmsh.model.occ.translate([(3, start)], 0, 0, -h/2.-cut/2. +d/2.25)
    #gmsh.model.occ.synchronize()

    outDimTags, outDimTagsMap = gmsh.model.occ.fragment(hcut, [(3, start)], removeObject=True, removeTool=True)
    print(f'hcut fragment: outDimTags={outDimTags}, outDimTagsMap={outDimTagsMap}')
    outDimTags, outDimTagsMap = gmsh.model.occ.fuse([outDimTags[0]], [outDimTags[i] for i in range(1,len(outDimTags))], removeObject=True, removeTool=True)
    ncut = outDimTags[0]
    print(f'ncut={ncut}: outDimTags={outDimTags}, outDimTagsMap={outDimTagsMap}')
    gmsh.model.occ.synchronize()

    # gmsh.model.occ.remove(hcut, True)
    # gmsh.model.occ.synchronize()
    hcut = [ncut]
    hcut_bbox = gmsh.model.occ.getBoundingBox(3, ncut[1])
    print(f'hcut_box: {hcut_bbox}')
    
# fragment
outDimTags, outDimTagsMap = gmsh.model.occ.fragment([cyl], hcut, removeObject=True, removeTool=True)
print(f'fragment: outDimTags={outDimTags}, outDimTagsMap={outDimTagsMap}')
gmsh.model.occ.synchronize()

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
        gmsh.model.occ.remove([id], True)
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

# Get Physicals
gmsh.model.addPhysicalGroup(3, [volume_ids[0]], name="Cu")
gmsh.model.addPhysicalGroup(3, [volume_ids[1]], name="Glue")

# Get Boundaries from interface
gmsh.model.addPhysicalGroup(2, interface, name="Interface")

# Get boundary from bcs_type
bbox = gmsh.model.occ.getBoundingBox(3, volume_ids[0])
zmin = bbox[2]
zmax = bbox[5]

# for V0/V1
V0 = gmsh.model.getEntitiesInBoundingBox(-r2-eps, -r2-eps, zmin-eps, r2+eps, r2+eps, zmin+eps, 2)
print(f'V0={V0}')
gmsh.model.addPhysicalGroup(2, [tag for (dim,tag) in V0], name="V0")
V1 = gmsh.model.getEntitiesInBoundingBox(-r2-eps, -r2-eps, zmax-eps, r2+eps, r2+eps, zmax+eps, 2)
print(f'V1={V1}')
gmsh.model.addPhysicalGroup(2, [tag for (dim,tag) in V1], name="V1")

# for rint:
rint = gmsh.model.getEntitiesInBoundingBox(-r1-eps, -r1-eps, zmin-eps, r1+eps, r1+eps, zmax+eps, 2)
print(f'rint={rint}')
gmsh.model.addPhysicalGroup(2, [tag for (dim, tag) in rint if tag in bcs[volume_ids[0]] and tag in bcs_type[volume_ids[0]]['Cylinder']], name="Rint")
gmsh.model.addPhysicalGroup(2, [tag for (dim, tag) in rint if tag in bcs[volume_ids[1]] and tag in bcs_type[volume_ids[1]]['Cylinder']], name="iRint")

# for rext
# id that are nor in V0/1 nor in rint
gmsh.model.addPhysicalGroup(2, [tag for tag in bcs[volume_ids[0]] if not (2, tag) in rint and not (2, tag) in V0+V1 and not tag in interface], name="Rext")
gmsh.model.addPhysicalGroup(2, [tag for tag in bcs[volume_ids[1]] if not (2, tag) in rint and not (2, tag) in V0+V1 and not tag in interface], name="iRext")

if args.mesh:
    # Mesh size
    # for all points in Cu
    # for all points in Glue
    lc = abs(r2-r1)/3.
    lc_glue = lc/4. #cut/2.
    print(f'lc (all)={lc}')
    print(f'lc (glue)={lc_glue}')

    gmsh.model.mesh.setSize(gmsh.model.getEntities(0), lc)
    ids = gmsh.model.getBoundary([(3, volume_ids[1])], combined=False, oriented=False, recursive=True)
    gmsh.model.mesh.setSize(ids, lc_glue)

    # if args.start:
    #     gmsh.model.mesh.field.add("Box", 1)
    #     gmsh.model.mesh.field.setNumber(1, "VIn", lc / 4.)
    #     gmsh.model.mesh.field.setNumber(1, "VOut", lc)
    #     gmsh.model.mesh.field.setNumber(1, "XMin", hcut_bbox[0])
    #     gmsh.model.mesh.field.setNumber(1, "YMin", hcut_bbox[1])
    #     gmsh.model.mesh.field.setNumber(1, "ZMin", hcut_bbox[2])
    #     gmsh.model.mesh.field.setNumber(1, "XMax", hcut_bbox[3])
    #     gmsh.model.mesh.field.setNumber(1, "YMax", hcut_bbox[4])
    #     gmsh.model.mesh.field.setNumber(1, "ZMax", hcut_bbox[5])
    #     gmsh.model.mesh.field.setNumber(1, "Thickness", cut/10.)
    #     gmsh.model.mesh.field.setAsBackgroundMesh(1)

    # generate a 3D mesh...
    gmsh.model.mesh.generate(3)
    gmsh.write("helix.msh")

if not args.nopopup:
    gmsh.fltk.run()
