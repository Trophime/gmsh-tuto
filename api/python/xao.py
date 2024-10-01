import gmsh
import sys

gmsh.initialize()
gmsh.model.add("Helix")

# load xao
gmsh.model.occ.synchronize()

import argparse
parser = argparse.ArgumentParser(add_help=False)
parser.add_argument('-nopopup', action='store_true')  # on/off flag
args = parser.parse_args()

gmsh.merge('HL-31_H1.xao')
for dim in range(3):
    print(f'PhysicalGroups: dim[{dim}]')
    groups = gmsh.model.getPhysicalGroups(dim)
    for gdim, gtag in groups:
        print(f'{gmsh.model.getPhysicalName(gdim, gtag)}: id={gtag}')

# if 3D groups are empty, error message

# To visualize the model we can run the graphical user interface with
if not args.nopopup:
    gmsh.fltk.run()
