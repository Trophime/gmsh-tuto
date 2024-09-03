// use bottom up approach
SetFactory("Built-in");

// Add parameters
Lc = DefineNumber[ 0.1, Name "Parameters/Lc" ];
Lx = DefineNumber[ 0.5, Name "Parameters/Lx" ];
Ly = DefineNumber[ 0.5, Name "Parameters/Ly" ];

Nx = DefineNumber[ 4, Name "Parameters/Nx" ];
Ny = DefineNumber[ 4, Name "Parameters/Ny" ];
Lc_h = DefineNumber[ 0.05, Name "Parameters/Lc_h" ];
R = DefineNumber[ 0.05, Name "Parameters/R" ];

// create a Disk
Macro CHole
      O=newp; Point(O) = {x0,y0,0,Lc};

      p5=newp; Point(p5) = { x0+R,  y0,  0, Lc_h};
      p6=newp; Point(p6) = { x0,  y0+R, 0, Lc_h};
      p7=newp; Point(p7) = { x0-R, y0,  0, Lc_h};
      p8=newp; Point(p8) = { x0, y0-R,  0, Lc_h};

      c5=newl; Circle(c5) = {p5,O,p6};
      c6=newl; Circle(c6) = {p6,O,p7};
      c7=newl; Circle(c7) = {p7,O,p8};
      c8=newl; Circle(c8) = {p8,O,p5};

      loop[t] = newl;
      Curve Loop(loop[t]) = {c5:c8};
      t += 1;

      Return

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

      
// create square with Nx * Ny holes
t= 0;
loop [] = {};
For i In {1:Nx}
    x0 = -Lx + i * 2*Lx/(Nx+1);
    For j In {1:Ny}
    	y0 = -Ly + j * 2*Ly/(Ny+1);
	Call CHole;
    EndFor
EndFor

// see http://gmsh.info/doc/texinfo/gmsh.html#Expressions
For i In {0 : #loop[]-1}
   Printf("Loop[%g]=%g", i, loop[i]);
EndFor
    
Plane Surface(1) = {1, -loop[]};

Physical Surface("Top") = {1};
Physical Curve("Ox") = {1};
