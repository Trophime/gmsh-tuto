Include "square-params.geo";
Include "macro.geo";
Delete Physicals;
Delete{ Surface{1};}

// Add parameters
Lc_h = DefineNumber[ 0.1, Name "Parameters/Lc_h" ];
R = DefineNumber[ 0.05, Name "Parameters/R" ];

// create a Disk
t = 0;
x0 = 0; y0 = 0;
Call CHole;

// create square with a hole
Plane Surface(2) = {1, -loop[]};

Physical Surface("Trou") = {2};
