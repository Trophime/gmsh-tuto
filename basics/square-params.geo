SetFactory("Built-in");

Lc = DefineNumber[ 0.1, Name "Parameters/Lc" ];
Lx = DefineNumber[ 0.25, Name "Parameters/Lx" ];
Ly = DefineNumber[ 0.25, Name "Parameters/Ly" ];

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

Curve Loop(1) = {1:4};
Plane Surface(1) = {1};

Physical Surface("Top") = {1};
Physical Curve("Ox") = {1};
