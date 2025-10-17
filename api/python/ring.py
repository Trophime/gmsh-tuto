import argparse

import gmsh
import math

gmsh.initialize()
gmsh.model.add("ring")


parser = argparse.ArgumentParser(add_help=False)
parser.add_argument("-fillet", action="store_true")  # on/off flag
parser.add_argument("-mesh", action="store_true")  # on/off flag
parser.add_argument("-nopopup", action="store_true")  # on/off flag
args = parser.parse_args()
print(args)

# load ring data
r1 = 19.3
r2 = 30.7
h = 20

n = 4  # number of slit
r_slit = (24.2 + 25.1) / 2.0  # radius of slit
e_slit = 25.1 - 24.2  # radial width of slit
angular_length = 30 * math.pi / 180.0
# angular length of slit

theta = 2 * math.pi / n

# cylinder
int = gmsh.model.occ.addCylinder(0, 0, 0.0, 0, 0, h, r1)
ext = gmsh.model.occ.addCylinder(0, 0, 0.0, 0, 0, h, r2)
print(int, ext, flush=True)
outDimTags, outDimTagsMap = gmsh.model.occ.cut(
    [(3, ext)], [(3, int)], removeObject=True, removeTool=True
)
cyl = outDimTags
print(f"cyl={cyl}: outDimTags={outDimTags}, outDimTagsMap={outDimTagsMap}")
gmsh.model.occ.synchronize()

# slit
slit_int = gmsh.model.occ.addCylinder(
    0, 0, -h / 4.0, 0.0, 0.0, 2 * h, r_slit - e_slit / 2.0, tag=-1, angle=angular_length
)
slit_ext = gmsh.model.occ.addCylinder(
    0, 0, -h / 4.0, 0.0, 0.0, 2 * h, r_slit + e_slit / 2.0, tag=-1, angle=angular_length
)
outDimTags, outDimTagsMap = gmsh.model.occ.cut(
    [(3, slit_ext)], [(3, slit_int)], removeObject=True, removeTool=True
)
slit = outDimTags
print("slit:", slit, flush=True)
gmsh.model.occ.synchronize()


# rotate slit
gmsh.model.occ.rotate(slit, 0, 0, 0, 0, 0, 1, -angular_length / 2)

# create fillets
if args.fillet:
    fillet_0 = gmsh.model.occ.addCylinder(
        r_slit, 0, -h / 4.0, 0.0, 0.0, 2 * h, e_slit / 2.0
    )
    print("fillet_0:", fillet_0, flush=True)
    gmsh.model.occ.rotate([(3, fillet_0)], 0, 0, 0, 0, 0, 1, -angular_length / 2)
    out = gmsh.model.occ.copy([(3, fillet_0)])
    fillet_1 = out[0][1]
    print("fillet_1:", fillet_1, flush=True)
    gmsh.model.occ.rotate([(3, fillet_1)], 0, 0, 0, 0, 0, 1, angular_length)
    gmsh.model.occ.synchronize()

    # slit + fillets
    outDimTags, outDimTagsMap = gmsh.model.occ.fuse(
        slit, [(3, fillet_0), (3, fillet_1)], removeObject=True, removeTool=True
    )
    cslit = outDimTags
    print(f"cslit={cslit}: outDimTags={outDimTags}, outDimTagsMap={outDimTagsMap}")
    gmsh.model.occ.synchronize()
    slit = cslit

slits = []
for i in range(n):
    out = gmsh.model.occ.copy(slit)
    print(i, out)
    gmsh.model.occ.rotate(out, 0, 0, 0, 0, 0, 1, i * theta)
    slits.append(out[0])
print("slits:", slits)

# create ring
outDimTags, outDimTagsMap = gmsh.model.occ.cut(
    cyl, slits, removeObject=True, removeTool=True
)
ring = outDimTags
print("ring:", ring, flush=True)
gmsh.model.occ.synchronize()

# Force synchro
gmsh.model.occ.synchronize()

# Get Physicals
gmsh.model.addPhysicalGroup(3, ring[0], name="Ring")
bcs = {}

boundaries = gmsh.model.getBoundary(
    ring, combined=False, oriented=False, recursive=False
)
print(f"Volume_id: {ring[0][1]} - Boundaries= {len(boundaries)}")
bcs[ring[0][1]] = [e[1] for e in boundaries]
bcs[ring[0][1]].sort()
print(f"bcs[{ring[0][1]}]: {bcs[ring[0][1]]}", flush=True)
print(f"bctype[{ring[0][1]}]: {[gmsh.model.getType(2, bc) for bc in bcs[ring[0][1]]]}")

if args.mesh:
    # Mesh size
    # for all points
    lc = abs(r2 - r1) / 3.0
    print(f"lc (all)={lc}")

    gmsh.model.mesh.setSize(gmsh.model.getEntities(0), lc)
    ids = gmsh.model.getBoundary(ring, combined=False, oriented=False, recursive=True)

    # generate a 3D mesh...
    gmsh.model.mesh.generate(3)
    gmsh.write("ring.msh")

if not args.nopopup:
    gmsh.fltk.run()
