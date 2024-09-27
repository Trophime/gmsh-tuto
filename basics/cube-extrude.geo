Merge "square-transfinite-line.geo";
Recombine Surface{1};

Lz = 1;
out[] = Extrude {0,0,Lz} {Surface{1}; Layers{ {8,2}, {0.25,1} }; Recombine;};
//out[] = Extrude {0,0,Lz} {Surface{1}; Layers{10}; Recombine;};

// see http://gmsh.info/doc/texinfo/gmsh.html#Expressions
For i In {0 : #out[]-1}
   Printf("Out[%g]=%g", i, out[i]);
EndFor

Physical Volume("cube") = {out[1]};
