#include <set>
#include <gmsh.h>
int main(int argc, char **argv)
{
  gmsh::initialize();
  
  std::set<std::string> args(argv, argv + argc);
  if(!args.count("-nopopup")) gmsh::fltk::run();
  
  gmsh::finalize();
  return 0;
}

