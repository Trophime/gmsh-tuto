Include "square-params.geo";
Include "macro.geo";
Delete Physicals;
Delete{ Surface{1};}

// Add parameters
Lc_h = DefineNumber[ 0.1, Name "Parameters/Lc_h" ];
R = DefineNumber[ 0.05, Name "Parameters/R" ];

Nx = DefineNumber[ 1, Name "Parameters/Nx" ];
Ny = DefineNumber[ 1, Name "Parameters/Ny" ];

// create holes
t = 0;
loop [] = {};
For i In {1:Nx}
    x0 = -Lx + i * 2*Lx/(Nx+1);
    For j In {1:Ny}
    	y0 = -Ly + j * 2*Ly/(Ny+1);
	Call CHole;
    EndFor
EndFor

// create square with a hole
Plane Surface(1) = {1, -loop[]};

// create square with a hole
Plane Surface(2) = {1, -loop[]};

Physical Surface("Trou") = {2};
