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
