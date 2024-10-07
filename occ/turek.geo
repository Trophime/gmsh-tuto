SetFactory("OpenCASCADE");

R = DefineNumber[ 1, Name "Parameters/R" ];
Lc_channel = DefineNumber[ 1, Name "Parameters/cL" ];
cX = DefineNumber[ -2, Name "Parameters/cX" ];
cLx = DefineNumber[ 30, Name "Parameters/cLx" ];
cLy = DefineNumber[ 10, Name "Parameters/cLy" ];

// X = DefineNumber[ 0.1, Name "Parameters/X" ];
Lc_flag = DefineNumber[ 0.1, Name "Parameters/Lc_flag" ];
Lx = DefineNumber[ 1, Name "Parameters/Lx" ];
Ly = DefineNumber[ 0.1, Name "Parameters/Ly" ];
Ltail = DefineNumber[ 2, Name "Parameters/Lx_tail" ];
Lc_tail = DefineNumber[ 0.01, Name "Parameters/Lc_tail" ];
Lc_pole = DefineNumber[ 0.05, Name "Parameters/Lc_pole" ];

O=newp; Point(O) = {0, 0, 0, Lc_pole};

// Compute X
alpha = Asin(Ly/2./ R);
X = R * Cos(alpha);

// create flag
flag = news; Rectangle(flag) = {X, -Ly/2., 0, Lx, Ly};

// create tail
p3=newp; Point(p3) = {X+Lx, 0, 0, Lc_tail};
p=newp; Point(p) = {X+Lx+Ltail, 0, 0, Lc_tail};
tail=newl; Line(tail) = {p3, p};
looptail = newl; Curve Loop(looptail) = {tail, -tail};

// create pole
pole = news; Disk(pole) = {0, 0, 0, R};

// create channel
channel = news; Rectangle(channel) = {cX, -cLy/2., 0, cLx, cLy};

MeshSize{ PointsOf{ Surface{channel}; } } = Lc_channel;
MeshSize{ PointsOf{ Surface{pole}; } } = Lc_pole;
MeshSize{ PointsOf{ Surface{flag}; } } = Lc_flag;
MeshSize{ PointsOf{ Line{tail}; } } = Lc_tail;

domain() = BooleanFragments{ Surface{channel}; Delete;} { Surface{pole, flag}; Delete; };
For i In {0 : #domain()-1}
   Printf("domain[%g]=%g", i, domain(i));
EndFor

sdomain() = BooleanFragments{ Surface{domain()}; Delete;} { Line{tail}; Delete; };
For i In {0 : #domain()-1}
   Printf("domain[%g]=%g", i, domain(i));
EndFor
solid = domain[3];
fluid = domain[1];

Physical Surface("solid") = {flag};
Physical Line("tail") = {tail};
Physical Surface("fluid") = {fluid};
