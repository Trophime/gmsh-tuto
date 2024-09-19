SetFactory("OpenCASCADE");
Box(1) = {0,0,0, 1,1, 1};
Mesh.MeshSizeMin = 1;
Mesh.MeshSizeMax = 1;

Cylinder(2) = {0,0,0, 0,0,2, 0.25};

Translate {-0.5, -0.5, -0.5} { Volume {1}; }
Translate {0, 0., -1} { Volume {2}; }

BooleanDifference { Volume {1}; } { Volume {2}; }

Recursive Delete { Volume {1, 2}; }