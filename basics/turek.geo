SetFactory("Built-in");

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

// if X is given, compute intersection of flag and pole
// eps = X - Cos(alpha)*R

// create flag
// if X is given, need to change flag
p1=newp; Point(p1) = {X, -Ly/2, 0, Lc_pole};
p2=newp; Point(p2) = {X+Lx, -Ly/2, 0, Lc_flag};
p3=newp; Point(p3) = {X+Lx, 0, 0, Lc_tail};
p4=newp; Point(p4) = {X+Lx, Ly/2, 0, Lc_flag};
p5=newp; Point(p5) = {X, Ly/2, 0, Lc_pole};


l1=newl; Line(l1) = {p1, p2};
l2=newl; Line(l2) = {p2, p3};
l3=newl; Line(l3) = {p3, p4};
l4=newl; Line(l4) = {p4, p5};
l5=newl; Line(l5) = {p5, p1};

loopflag = newl; Curve Loop(loopflag) = {l1, l2, l3, l4, l5};
flag = news; Plane Surface(flag) = {loopflag};

// create tail
p=newp; Point(p) = {X+Lx+Ltail, 0, 0, Lc_tail};
tail=newl; Line(tail) = {p3, p};
looptail = newl; Curve Loop(looptail) = {tail, -tail};

// create pole
pc=newp; Point(pc) = {-R, 0, 0, Lc_pole};
c1=newl; Circle(c1) = {p5, O, pc};
c2=newl; Circle(c2) = {pc, O, p1};

looppole = newl; Curve Loop(looppole) = {c1, c2, -l5};
//pole = news; Plane Surface(pole) = {looppole};

// create channel
pc1=newp; Point(pc1) = {cX, -cLy/2, 0, Lc_channel};
pc2=newp; Point(pc2) = {cX+cLx, -cLy/2, 0, Lc_channel};
pc3=newp; Point(pc3) = {cX+cLx, cLy/2, 0, Lc_channel};
pc4=newp; Point(pc4) = {cX, cLy/2, 0, Lc_channel};

lc1=newl; Line(lc1) = {pc1, pc2};
lc2=newl; Line(lc2) = {pc2, pc3};
lc3=newl; Line(lc3) = {pc3, pc4};
lc4=newl; Line(lc4) = {pc4, pc1};

loopchannel = newl; Curve Loop(loopchannel) = {lc1, lc2, lc3, lc4};
//loophole = newl; Curve Loop(loophole) = {l1, l2, l3, l4, c1, c2, -l5};
channel = news; Plane Surface(channel) = {loopchannel, -loopflag, -looppole, -looptail};

Physical Surface("solid") = {flag};
Physical Line("tail") = {tail};
Physical Surface("fluid") = {channel};