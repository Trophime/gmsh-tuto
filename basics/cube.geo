Include "square.geo";

// extrude
out[] = Extrude {0, 0, dz} {Surface{1};};

// In this last extrusion command we retrieved the volume number programatically
// by using the return value (a list) of the Extrude command. This list contains
// the "top" of the extruded surface (in out[0]), the newly created volume (in
// out[1]) and the ids of the lateral surfaces (in out[2], out[3], ...)

// see http://gmsh.info/doc/texinfo/gmsh.html#Expressions
For i In {0 : #out[]-1}
   Printf("Out[%g]=%g", i, out[i]);
EndFor

Physical Surface("Bottom") = {out[0]};
Physical Surface("Other") = {out[2], out[3], out[4], out[5]};
Physical Volume("Cube") = {out[1]};
