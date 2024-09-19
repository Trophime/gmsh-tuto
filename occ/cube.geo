SetFactory("OpenCASCADE");
Box(1) = {0,0,0, 1,1, 1};
Mesh.MeshSizeMin = 1;
Mesh.MeshSizeMax = 1;

Translate {0, 0.05, 0} { Volume {1}; }
