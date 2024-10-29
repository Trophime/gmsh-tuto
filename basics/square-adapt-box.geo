Merge "square.geo";

// We could also use a `Box' field to impose a step change in element sizes
// inside a box
Field[1] = Box;
Field[1].VIn = lc / 15;
Field[1].VOut = lc;
Field[1].XMin = -0.7;
Field[1].XMax = 0.7;
Field[1].YMin = -0.7;
Field[1].YMax = 0.7;
Field[1].ZMin = -1;
Field[1].ZMax = -1;
Field[1].Thickness = 0.3;

Background Field = 1;

