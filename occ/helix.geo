// -----------------------------------------------------------------------------
//
//  Gmsh GEO tutorial 19
//
//  Thrusections, fillets, pipes, mesh size from curvature
//
// -----------------------------------------------------------------------------

SetFactory("OpenCASCADE");

r1 = 19.3;
r2 = 24.2;
dz = 2*150;
cut = 0.2;
eps = 2;
nturns = 7;
pitch = 18.03646917296748;

// We define the shape we would like to extrude along the spline:
s=news; Rectangle(s) = {r1-eps, -cut/2., 0, r2-r1+2*eps, cut};
Rotate {{1, 0, 0}, {0, 0, 0}, Pi/2} { Surface{s}; }
Printf('Scut=%g', s);

// OpenCASCADE also allows general extrusions along a smooth path.
// Let's first define a spline curve:
npts = 60;
r = r1 + (r2-r1) /2.;
h = pitch * nturns;
points = {};
sections = {};
For i In {0 : npts}
  theta = i * 2*Pi*nturns/npts;
  Printf("helix[%g]: theta=%g", i, theta);
  p = newp; Point(p) = {r * Cos(theta), r * Sin(theta), -h/2. + i * h/npts};
  points[i] = p;
  ns() = Rotate {{0, 0, 1}, {0, 0, 0}, theta} { Duplicata{Surface{s};} };
  nns() = Translate {0, 0, -h/2. + i * h/npts} { Surface{ns()}; };
  sections[i] = nns;
EndFor


hcut = news; Ruled ThruSections(hcut) = {sections[]};
Printf('hcut=%g', hcut);
Delete { Surface{sections[]}; }

int = news; Cylinder(int) = {0, 0, -dz/2., 0, 0, dz, r1};
ext = news; Cylinder(ext) = {0, 0, -dz/2., 0, 0, dz, r2};
cyl = BooleanDifference { Volume{ext}; } { Volume{int}; };
Recursive Delete { Volume {ext, int}; }

helix() = BooleanFragments{ Volume{cyl}; Delete;} { Volume{hcut}; Delete; };
For i In {0 : #helix()-1}
   Printf("helix[%g]=%g", i, helix(i));
EndFor
Recursive Delete { Volume{helix(2), helix(3)};}
Recursive Delete { Surface{s};}

// We delete the source surface, and increase the number of sub-edges for a
// nicer display of the geometry:
// Delete{ Point{points}; }
Geometry.NumSubEdges = 1000;

// We can activate the calculation of mesh element sizes based on curvature
// (here with a target of 20 elements per 2*Pi radians):
Mesh.MeshSizeFromCurvature = 20;

// We can constraint the min and max element sizes to stay within reasonnable
// values (see `t10.geo' for more details):
Mesh.MeshSizeMin = 0.1;
Mesh.MeshSizeMax = 1;


Physical Volume("Cu") = {helix(0)};
// Physical Volume("Glue") = {helix(1)};

f() = Abs(Boundary{ Volume{helix(0)}; });
For i In {0 : #f()-1}
   Printf("helix[%g]=%g", i, f(i));
EndFor

Physical Surface("Rint") = {15, 16, 36, 55, 74, 93, 112, 131}; 
Physical Surface("Rext") = {2, 12, 26, 45, 65, 83, 103, 121}; 
Physical Surface("V0") = {14};
Physical Surface("V1") = {133};
Physical Surface("Interface") = {3:11, 13, 17:25, 27:35, 37:44, 46:54, 56:64, 66:73, 75:82, 84:92, 94:102, 104:111, 113:120, 122:130, 132, 134:141};
