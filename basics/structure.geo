//https://chi-tech.github.io/d4/db9/_gmsh_example_01.html

pitch = 0.0126;
circle_r = 0.0108/2;
bottom_left_circle = pitch/2;

Point(1) = {0, 0, 0};
Point(2) = {pitch, 0, 0};
Point(3) = {pitch, pitch, 0};
Point(4) = {0, pitch, 0};
//
// Outer Box domain
//
Line(1) = {1, 2};
Line(2) = {2, 3};
Line(3) = {3, 4};
Line(4) = {4, 1};

// Points that make up the circle
Point(5) = {bottom_left_circle,bottom_left_circle,0.0};
Point(6) = {bottom_left_circle-circle_r*Cos(Pi/4.)/2.,bottom_left_circle+circle_r*Cos(Pi/4.)/2.,0.0};
Point(7) = {bottom_left_circle-circle_r*Cos(Pi/4.)/2.,bottom_left_circle-circle_r*Cos(Pi/4.)/2.,0.0};
Point(8) = {bottom_left_circle+circle_r*Cos(Pi/4.)/2.,bottom_left_circle-circle_r*Cos(Pi/4.)/2.,0.0};
Point(9) = {bottom_left_circle+circle_r*Cos(Pi/4.)/2.,bottom_left_circle+circle_r*Cos(Pi/4.)/2.,0.0};

// Curves that connect points defining circle
Circle(5) = {6,5,7};
Circle(6) = {7,5,8};
Circle(7) = {8,5,9};
Circle(8) = {9,5,6};
// specify closed loop to make surface
Curve Loop(1) = {-5,-8,-7,-6};
Surface(1) = {1};

// break area outside circle into four surfaces
// First define lines, the line loops, then the
// surfaces
Line(9) = {1,7};
Line(10) = {8,2};
Line(11) = {9,3};
Line(12) = {6,4};

Curve Loop(3) = {9,6,10,-1};
Curve Loop(4) = {-10,7,11,-2};
Curve Loop(5) = {-11,8,12,-3};
Curve Loop(6) = {-12,5,-9,-4};

Surface(2) = {3};
Surface(3) = {4};
Surface(4) = {5};
Surface(5) = {6};Translate{ pitch, 0.0, 0.0} { Duplicata{Surface{1};}  }
Translate{ 0.0, pitch, 0.0} { Duplicata{Surface{1};}  }
Translate{ pitch, pitch, 0.0} { Duplicata{Surface{1};}  }

Translate{ pitch, 0.0, 0.0} { Duplicata{Surface{2};}  }
Translate{ 0.0, pitch, 0.0} { Duplicata{Surface{2};}  }
Translate{ pitch, pitch, 0.0} { Duplicata{Surface{2};}  }

Translate{ pitch, 0.0, 0.0} { Duplicata{Surface{3};}  }
Translate{ 0.0, pitch, 0.0} { Duplicata{Surface{3};}  }
Translate{ pitch, pitch, 0.0} { Duplicata{Surface{3};}  }

Translate{ pitch, 0.0, 0.0} { Duplicata{Surface{4};}  }
Translate{ 0.0, pitch, 0.0} { Duplicata{Surface{4};}  }
Translate{ pitch, pitch, 0.0} { Duplicata{Surface{4};}  }

Translate{ pitch, 0.0, 0.0} { Duplicata{Surface{5};}  }
Translate{ 0.0, pitch, 0.0} { Duplicata{Surface{5};}  }
Translate{ pitch, pitch, 0.0} { Duplicata{Surface{5};}  }
Coherence;

Point(104) = {0, 4*pitch, 0};
Point(105) = {pitch, 4*pitch, 0};
Point(106) = {2*pitch, 4*pitch, 0};
Point(107) = {4*pitch, 4*pitch, 0};

Point(108) = {4*pitch , 2*pitch, 0};
Point(109) = {4*pitch , pitch, 0};
Point(110) = {4*pitch , 0, 0};


Line(77) = {103,104};
Line(78) = {104,105};
Line(79) = {105,81};

Line(80) = {105,106};
Line(81) = {106,92};

Line(82) = {106,107};
Line(83) = {107,108};
Line(84) = {108,92};

Line(85) = {108,109};
Line(86) = {109,70};

Line(87) = {109,110};
Line(88) = {110,59};

Curve Loop(100) = {77,78,79,-65};
Curve Loop(101) = {81,-70,-79,80};
Curve Loop(102) = {82,83,84,-81};
Curve Loop(103) = {85,86,-56,-84};
Curve Loop(104) = {87,88,-46,-86};

Surface(100) = {100};
Surface(101) = {101};
Surface(102) = {102};
Surface(103) = {103};
Surface(104) = {104};

Physical Line(0) = {1,32,88};
Physical Line(1) = {87,85,83};
Physical Line(2) = {78,80,82};
Physical Line(3) = {4,76,77};
Physical Surface(0) = {1,13,18,23};
Physical Surface(1) = {2,3,4,5,28,42,57,71,37,52,66,77,33,47,61,72,100,101,102,103,104};// bottom left cell
Transfinite Line {5, 7} = 10 Using Progression 1;
Transfinite Line {6, 8} = 10 Using Progression 1;
//
Transfinite Line {9, 10} = 15 Using Progression 1;
Transfinite Line {6, 1} = 10 Using Progression 1;
//
Transfinite Line {10, 11} = 15 Using Progression 1;
Transfinite Line {7, 2} = 10 Using Progression 1;
//
Transfinite Line {12, 11} = 15 Using Progression 1;
Transfinite Line {3, 8} = 10 Using Progression 1;
//
Transfinite Line {12, 9} = 15 Using Progression 1;
Transfinite Line {4, 5} = 10 Using Progression 1;
//
Transfinite Surface {1};
Transfinite Surface {2};
Transfinite Surface {3};
Transfinite Surface {4};
Transfinite Surface {5};


// bottom right cell
Transfinite Line {14, 16} = 10 Using Progression 1;
Transfinite Line {17, 15} = 10 Using Progression 1;
//
Transfinite Line {29, 31} = 15 Using Progression 1;
Transfinite Line {17, 32} = 10 Using Progression 1;
//
Transfinite Line {31, 45} = 15 Using Progression 1;
Transfinite Line {16, 46} = 10 Using Progression 1;
//
Transfinite Line {45, 60} = 15 Using Progression 1;
Transfinite Line {15, 41} = 10 Using Progression 1;
//
Transfinite Line {60, 29} = 15 Using Progression 1;
Transfinite Line {2, 14} = 10 Using Progression 1;
//
Transfinite Surface {28};
Transfinite Surface {42};
Transfinite Surface {57};
Transfinite Surface {71};
Transfinite Surface {13};

// top right cell
Transfinite Line {24, 26} = 10 Using Progression 1;
Transfinite Line {25, 27} = 10 Using Progression 1;
//
Transfinite Line {38, 40} = 15 Using Progression 1;
Transfinite Line {27, 41} = 10 Using Progression 1;
//
Transfinite Line {40, 55} = 15 Using Progression 1;
Transfinite Line {26, 56} = 10 Using Progression 1;
//
Transfinite Line {55, 69} = 15 Using Progression 1;
Transfinite Line {25, 70} = 10 Using Progression 1;
//
Transfinite Line {69, 38} = 15 Using Progression 1;
Transfinite Line {51, 24} = 10 Using Progression 1;
//
Transfinite Surface {37};
Transfinite Surface {52};
Transfinite Surface {66};
Transfinite Surface {77};
Transfinite Surface {23};

// top left cell
Transfinite Line {19, 21} = 10 Using Progression 1;
Transfinite Line {20, 22} = 10 Using Progression 1;
//
Transfinite Line {34, 36} = 15 Using Progression 1;
Transfinite Line {22, 3} = 10 Using Progression 1;
//
Transfinite Line {36, 50} = 15 Using Progression 1;
Transfinite Line {21, 51} = 10 Using Progression 1;
//
Transfinite Line {50, 64} = 15 Using Progression 1;
Transfinite Line {20, 65} = 10 Using Progression 1;
//
Transfinite Line {64, 34} = 15 Using Progression 1;
Transfinite Line {19, 76} = 10 Using Progression 1;
//
Transfinite Surface {33};
Transfinite Surface {47};
Transfinite Surface {61};
Transfinite Surface {72};
Transfinite Surface {18};


//outside region

Transfinite Line {65, 78} = 10 Using Progression 1;
Transfinite Line {-77, 79} = 20 Using Progression 0.85;
//
Transfinite Line {70, 80} = 10 Using Progression 1;
Transfinite Line {79, 81} = 20 Using Progression 0.85;
//
Transfinite Line {81, 83} = 20 Using Progression 0.85;
Transfinite Line {-82, 84} = 20 Using Progression 0.85;
//
Transfinite Line {84, 86} = 20 Using Progression 0.85;
Transfinite Line {56, 85} = 10 Using Progression 1;
//
Transfinite Line {86, 88} = 20 Using Progression 0.85;
Transfinite Line {46, 87} = 10 Using Progression 1;

Transfinite Surface {100};
Transfinite Surface {101};
Transfinite Surface {102};
Transfinite Surface {103};
Transfinite Surface {104};

Recombine Surface "*";