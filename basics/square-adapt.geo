Merge "square.geo";

// Distance Field
Field[1] = Distance;
Field[1].PointsList = {1};

Field[2] = Threshold;
Field[2].InField = 1;
Field[2].SizeMin = lc / 30;
Field[2].SizeMax = lc;
Field[2].DistMin = 0.15;
Field[2].DistMax = 0.5;
Background Field = 2;

