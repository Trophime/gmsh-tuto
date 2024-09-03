// use bottom up approach
SetFactory("Built-in");

// Add parameters
Lc = DefineNumber[ 0.1, Name "Parameters/Lc" ];
Lx = DefineNumber[ 0.25, Name "Parameters/Lx" ];
Ly = DefineNumber[ 0.25, Name "Parameters/Ly" ];

Lc_h = DefineNumber[ 0.1, Name "Parameters/Lc_h" ];
R = DefineNumber[ 0.05, Name "Parameters/R" ];

// create square
Point(1) = {-Lx, -Ly, 0, Lc};
Point(2) = {Lx, -Ly, 0, Lc};
Point(3) = {Lx, Ly, 0, Lc};
Point(4) = {-Lx, Ly, 0, Lc};

// create Lines and Contour -aka Curve Loop
Line(1) = {1, 2};
Line(2) = {2, 3};
Line(3) = {3, 4};
Line(4) = {4, 1};

// create a Disk
O=newp; Point(O) = {0,0,0,Lc};

p5=newp; Point(p5) = { R,  0, 0, Lc_h};
p6=newp; Point(p6) = { 0,  R, 0, Lc_h};
p7=newp; Point(p7) = {-R,  0, 0, Lc_h};
p8=newp; Point(p8) = { 0, -R, 0, Lc_h};

c5=newl; Circle(c5) = {p5,O,p6};
c6=newl; Circle(c6) = {p6,O,p7};
c7=newl; Circle(c7) = {p7,O,p8};
c8=newl; Circle(c8) = {p8,O,p5};

// create square with a hole
Curve Loop(1) = {1:4};
Curve Loop(2) = {c5:c8};
Plane Surface(1) = {1, -2};

Physical Surface("Top") = {1};
Physical Curve("Ox") = {1};
