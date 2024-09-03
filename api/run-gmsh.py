import gmsh
import sys

gmsh.initialize()

if '-nopopup' not in sys.argv:
    gmsh.fltk.run()

