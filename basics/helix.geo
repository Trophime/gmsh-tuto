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
cut = 1;
eps = 2;
nturns = 7;
pitch = 18.03646917296748;

// We define the shape we would like to extrude along the spline (a disk):
s=news; Rectangle(s) = {r1-eps, -cut/2., 0, r2-r1+2*eps, cut};
Rotate {{1, 0, 0}, {0, 0, 0}, Pi/2} { Surface{s}; }

// OpenCASCADE also allows general extrusions along a smooth path.
// Let's first define a spline curve:
npts = 60;
r = r1 + (r2-r1) /2.;
h = pitch * nturns;
points = {};
sections = {};
For i In {0 : npts}
  theta = i * 2*Pi*nturns/npts;
  Printf("helix[%g]=%g", i, theta);
  p = newp; Point(p) = {r * Cos(theta), r * Sin(theta), -h + i * h/npts};
  points[i] = p;
  ns() = Rotate {{0, 0, 1}, {0, 0, 0}, theta} { Duplicata{Surface{s};} };
  nns() = Translate {0, 0, -h + i * h/npts} { Surface{ns()}; };
  sections[i] = nns;
EndFor

/*************
// not working properly
l=newl; Spline(l) = {points[]};
// A wire is like a curve loop, but open:
w = newl; Wire(w) = {l};
// We extrude the disk along the spline to create a pipe:
Extrude { Surface{s}; } Using Wire {w}
***/

hcut = news; Ruled ThruSections(hcut) = {sections[]};
Printf('hcut=%g', hcut);
Delete { Surface{sections[]}; }

int = news; Cylinder(int) = {0, 0, -dz/2., 0, 0, dz, r1};
ext = news; Cylinder(ext) = {0, 0, -dz/2., 0, 0, dz, r2};
cyl = BooleanDifference { Volume{ext}; } { Volume{int}; };
Recursive Delete { Volume {ext, int}; }

helix() = BooleanFragments{ Volume{cyl}; Delete;} { Volume{hcut}; Delete; };
//Recursive Delete { Volume {helix}; }
For i In {0 : #helix()-1}
   Printf("helix[%g]=%g", i, helix(i));
EndFor
Delete { Volume{helix(2), helix(3)};}

// We delete the source surface, and increase the number of sub-edges for a
// nicer display of the geometry:
// Delete{ Point{points}; }
Geometry.NumSubEdges = 1000;

// We can activate the calculation of mesh element sizes based on curvature
// (here with a target of 20 elements per 2*Pi radians):
Mesh.MeshSizeFromCurvature = 20;

// We can constraint the min and max element sizes to stay within reasonnable
// values (see `t10.geo' for more details):
Mesh.MeshSizeMin = 1;
Mesh.MeshSizeMax = 10;


Physical Volume("Cu") = {helix(0)};
// Physical Volume("Glue") = {helix(1)};

f() = Abs(Boundary{ Volume{helix(0)}; });
Physical Surface("Bord") = {f()};