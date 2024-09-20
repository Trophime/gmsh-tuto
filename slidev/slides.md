---
# You can also start simply with 'default'
theme: seriph
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://cover.sli.dev
# some information about your slides (markdown enabled)
title: Gmsh Tutorial
info: |
  ## Slidev Starter Template
  a guide to start with Gmsh.
# apply unocss classes to the current slide
class: text-center
# https://sli.dev/features/drawing
drawings:
  persist: false
# slide transition: https://sli.dev/guide/animations.html#slide-transitions
transition: slide-left
# enable MDC Syntax: https://sli.dev/features/mdc
mdc: true
---

# Welcome to Gmsh Tutorial

Presentation slides for Gmsh beginners

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Press Space for next page <carbon:arrow-right class="inline"/>
  </span>
</div>

<div class="abs-br m-6 flex gap-2">
  <button @click="$slidev.nav.openInEditor()" title="Open in Editor" class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon:edit />
  </button>
  <a href="https://github.com/slidevjs/slidev" target="_blank" alt="GitHub" title="Open in GitHub"
    class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>

<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->

---
transition: fade-out
---

# What is Gmsh?

Gmsh is an open source 3D finite element mesh generator with:

- 📝 **build-in CAD engine** 
- 🎨 **Post-processor**


Gmsh can be controlled from:

- 🧑‍ **GUI** - a graphical user interface
- 🤹 **TUI** - the command line, using text files written in Gmsh's own scripting language (.geo files),
- 🎥 **API** - for C++, C, Python, Julia and Fortran
<br>
<br>

Read more about [Gmsh](https://gmsh.info/)

A nice [introduction](https://bthierry.pages.math.cnrs.fr/tutorial/gmsh/)

<!--
You can have `style` tag in markdown to override the style for the current page.
Learn more: https://sli.dev/features/slide-scope-style
-->

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

<!--
Here is another comment.
-->

---
hideInToc: true
---

# Table of contents

<Toc v-click minDepth="1" maxDepth="2"></Toc>

---


# Installation

* System Package

```bash
sudo apt update
sudo apt install gmsh libgmsh-dev python3-gmsh [libgmsh-dev libfltk1.3-dev] 
```

* Python env

```bash
python3 -m venv --system-site-packages gmsh-env
source ./gmsh-env/bin/activate
python3 -m pip install gmsh
```

* Container
  * Docker

```bash
xhost +local:root
docker run -it --rm  --name gmsh -e DISPLAY -v /tmp/.X11-unix:/tmp/.X11-unix trophime/gmsh:4.13.1
```

  * Singularity
```bash
singularity pull gmsh-4.13.sif
singularity shell --nv gmsh-4.13.sif
```

For this tutorial, we recommend to use the python virtual environment.


---
layout: two-cols
---
# GUI

* Main Options
* Custom Options

::right::


---
layout: two-cols
level: 2
---

# Build-In Kernel

<!--
<Tweet id="1390115482657726468" scale="0.65" />
<Youtube id="nkuawZkiu1w" scale="0.7" />
-->

Workflow:

* create Points,
* create Lines,
* define Curve Loops (aka surface boundaries)
* create surfaces
* define Surface Loops (aka volume boundaries)
* create volume
* create Physicals

::right::
<Youtube id="nkuawZkiu1w" />


---
layout: two-cols
level: 3
---

# Cube with Hole

* Start from a **square**
  * Select **Built-In kernel** ,
  * Create **Points**,
  * Create **Lines**,
  * Define **Curve Loop**
  * Create **Surface**
* View geometrical entities
* Save the geometry as geo file

::right::



---
layout: two-cols
level: 3
hideInToc: true
---

# Cube with Hole

* Edit geo file content
* Add params
* Use TUI mode

```bash
gmsh [-2] square.geo
```

::right::

```gmsh {-|1|3-4|8-11|13-16|18-19|20-22|all}
SetFactory("Built-in");

Lc = DefineNumber[ 0.1, Name "Parameters/Lc" ];
Lx = DefineNumber[ 0.25, Name "Parameters/Lx" ];
Ly = DefineNumber[ 0.25, Name "Parameters/Ly" ];

// create square
Point(1) = {-Lx, -Ly, 0, Lc};
Point(2) = {Lx, -Ly, 0, Lc};
Point(3) = {Lx, Ly, 0, Lc};
Point(4) = {-Lx, Ly, 0, Lc};

Line(1) = {1, 2};
Line(2) = {2, 3};
Line(3) = {3, 4};
Line(4) = {4, 1};

Curve Loop(1) = {1:4};
Plane Surface(1) = {1};

Physical Surface("Top") = {1};
Physical Curve("Ox") = {1};
```

---
layout: two-cols
level: 3
hideInToc: true
---

# Cube with Hole

* Start from a **square**
* Extrude the **square** 

* Extrude command returns a list: 
  * the "top" of the extruded surface (in out\[0\]), 
  * the newly created volume (in out\[1\]) 
  * the ids of the lateral surfaces (in out\[2\], ...)

Your turn...

::right::

```gmsh {1|5|11-14}
Include "square.geo";

// extrude
Lz = DefineNumber[ 0.25, Name "Parameters/Lz" ];
out[] = Extrude {0, 0, Lz} {Surface{1};};

// see http://gmsh.info/doc/texinfo/gmsh.html#Expressions
For i In {0 : #out[]-1}
   Printf("Out[%g]=%g", i, out[i]);
EndFor

Physical Surface("Bottom") = {out[0]};
Physical Surface("Other") = {out[2:5]};
Physical Volume("Cube") = {out[1]};
```

---
layout: two-cols
level: 3
hideInToc: true
---

# An error occured
 
What to do?

* Display message
* Edit script
* Reload script

::right::



---
layout: two-cols
level: 3
hideInToc: true
---

# Cube with Hole

* start from a **square**
* define a circular **hole**
  * radius
  * Lc_h

Note the sign of the Curve Loop defining the surface

::right::

```gmsh {4-22, maxHeight:'100px'}
Include "square.geo";

// Add parameters
Lc_h = DefineNumber[ 0.1, Name "Parameters/Lc_h" ];
R = DefineNumber[ 0.05, Name "Parameters/R" ];

// create a Disk
O=newp; Point(O) = {0,0,0,Lc};

p5=newp; Point(p5) = { R,  0, 0, Lc_h};
p6=newp; Point(p6) = { 0,  R, 0, Lc_h};
p7=newp; Point(p7) = {-R,  0, 0, Lc_h};
p8=newp; Point(p8) = { 0, -R, 0, Lc_h};

c5=newl; Circle(c5) = {p5,O,p6};
c6=newl; Circle(c6) = {p6,O,p7};
c7=newl; Circle(c7) = {p7,O,p8};
c8=newl; Circle(c8) = {p8,O,p5};

// create square with a hole
Curve Loop(2) = {c5:c8};
Plane Surface(1) = {1, -2};
```
---
layout: two-cols
level: 3
hideInToc: true
---

# Cube with Hole

* create a macro for **hole**

::right::

```gmsh
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
```


---
layout: two-cols
level: 3
hideInToc: true
---

# Cube with Hole

* create a macro for **hole**
* call the macro

::right::

```gmsh {9}
...

// Add parameters
Lc_h = DefineNumber[ 0.1, Name "Parameters/Lc_h" ];
R = DefineNumber[ 0.05, Name "Parameters/R" ];

// create a Disk
x0 = 0; y0 = 0;
Call CHole;

// create square with a hole
Plane Surface(2) = {1, -loop[]};
```

---
layout: two-cols
level: 3
---

# Cube with Holes

* for loop to create the **holes**

::right::

```gmsh {13-21}
Include "square.geo";

// create a Disk
Macro CHole
      ...

// Add parameters
Lc_h = DefineNumber[ 0.1, Name "Parameters/Lc_h" ];
R = DefineNumber[ 0.05, Name "Parameters/R" ];

// create holes
loop [] = {};
For i In {1:Nx}
    x0 = -Lx + i * 2*Lx/(Nx+1);
    For j In {1:Ny}
    	y0 = -Ly + j * 2*Ly/(Ny+1);
	Call CHole;
    EndFor
EndFor

// create square with a hole
Plane Surface(1) = {1, -loop[]};
```

---
layout: two-cols
level: 2
---

# OCC Geometry kernel

workflow:
* Create base objects
* Perform boolean operations
* Get id for geom entities
* Save to CAD format

::right::

<Youtube id="dywdlaaE1U8" />

<!--
<iframe width="960" height="569" src="https://www.youtube.com/embed/dywdlaaE1U8" title="Constructive solid geometry in Gmsh 3.0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
-->

---
layout: two-cols
level: 3
---

# Cube with hole

* Select Occ kernel
* Create a cube
* Create a cylinder
  * center of the first circular face
  * the vector defining its axis
  * its radius
  * eventualy, the angular opening
* Move the cylinder
* Perform the boolean op

::right::

```gmsh
Box ( expression ) = { x0, y0, z0, Lx, Ly, Lz };
```

```gmsh
Cylinder ( expression ) = { cx, cy, cz, nx, ny, nz, r };
```

Translate all elementary entities in transform-list.

```gmsh
Translate { dx, dy, dz } { transform-list }
```

Subtract the tool from the object. 

```
BooleanDifference { boolean-list } { boolean-list }
```

---
layout: two-cols
level: 3
hideInToc: true
---

# Cube with hole

* Rewrite cube with hole
  * Create a cube
  * Create a cylinder
    * center of the first circular face
    * the vector defining its axis
    * its radius
    * eventualy, the angular opening
  * Move the cylinder
  * Perform the boolean op

::right::

```gmsh
SetFactory("OpenCASCADE");
Box(1) = {-0.5,-0.5,-0.5, 1,1, 1};
Cylinder(2) = {0,0,0, 0,0,2, 0.25};

Translate {0, 0., -1} { Volume {2}; }
BooleanDifference { Volume {1}; } { Volume {2}; }

Recursive Delete { Volume {1, 2}; }
```


---
layout: two-cols
level: 3
hideInToc: true
---

# Cube with holes

* Your turn: 
  * Rewrite cube with holes
  * Use
    * Parameters
    * Macro for Holes

<img src="/img/cube-trous.png" />

::right::

```gmsh
...
```

---
level: 3
layout: image-right
image: /img/t13_data.png
backgroundSize: 90% 60%
hideInToc: true
---

# Load CAD geometry

* from command line

```bash
gmsh file.stp
```

* from geo file

```gmsh
Merge "file.stp";
```

* Save CAD geometry
  * only when using OCC kernel

```gmsh
Save "file.brep";
```

!!!STL format can be loaded but not converted to other CAD format!!!

<Comp src="/img/t13_data.png" width=80 />


---

# API

* Python
* C++

[Documentation](https://gmsh.info/doc/texinfo/gmsh.html#Gmsh-application-programming-interface) ·   [Tutorials](https://gitlab.onelab.info/gmsh/gmsh/-/tree/gmsh_4_13_1/tutorials/python) ·  [Examples](https://gitlab.onelab.info/gmsh/gmsh/-/tree/gmsh_4_13_1/examples/api)

---
layout: two-cols
level: 2
---
# Python API

* start gmsh
* cube example

::right::

```python
import gmsh
import sys

gmsh.initialize()

if '-nopopup' not in sys.argv:
    gmsh.fltk.run()
```

```python
gmsh.model.add("square")

Lc = 1e-1
Lx = Ly = 1

# define points
p1 = gmsh.model.geo.addPoint(-Lx, -Ly, 0, Lc)
...

# create lines
gmsh.model.geo.addLine(p1, p2, 1)
...

# create surface
gmsh.model.geo.addCurveLoop([1, 2, 3, 4], 1)
gmsh.model.geo.addPlaneSurface([1], 1)

# Force synchro
gmsh.model.geo.synchronize()
```

---
layout: two-cols
level: 3
hideInToc: true
---

# Cube with holes

* rewrite using OCC api

---
layout: two-cols
level: 3
hideInToc: true
---

# A thermal fin

* use of fragment boolean operation
* how to get geometric entities ?
* how to run feelp ?

::right::


---
layout: two-cols
level: 2
---
# C++ API (For the brave)

* cube example with OCC kernel

```cpp
#include <set>
#include <gmsh.h>
int main(int argc, char **argv)
{
  gmsh::initialize();

  gmsh::model::add("square");
  gmsh::model::geo::addPoint(.1, 0, 0, lc, 2);
  
  roundedRadius = 0;
  tag = -1;
  gmsh::model::geo::addRectangle(-0.5, -0.5, -0.5, 1, 1, tag, roundedRadius);

  gmsh::model::geo::synchronize();
  gmsh::model::addPhysicalGroup(2, {1}, -1, "My surface");

  std::set<std::string> args(argv, argv + argc);
  if(!args.count("-nopopup")) gmsh::fltk::run();
  
  gmsh::finalize();
  return 0;
}
```

::right::

---
hideInToc: true
---

# To compile the examples

```bash
g++ -c test.cpp -I/usr/include/gmsh
g++ test.o -lgmsh -o test.exe
```

---
layout: two-cols
---

# Meshing

* Structured Mesh
* Unstructed Mesh

* Mesh from command line
* Convert Mesh

---
layout: two-cols
level: 2
hideInToc: true
---

# Structured Mesh
---
layout: two-cols
level: 2
hideInToc: true
---

# UnStructured Mesh
---
layout: two-cols
level: 2
hideInToc: true
---

# Quad Mesh

---
layout: two-cols
---

# Adapt Mesh

---
layout: two-cols
---
# Moving Mesh

---
layout: center
class: text-center
---

# Learn More

[Documentation](https://gmsh.info/#Documentation) · [GitLab](https://gitlab.onelab.info/gmsh/gmsh/) · [Tutorials](https://gmsh.info/doc/texinfo/gmsh.html#Gmsh-tutorial)

<PoweredBySlidev mt-10 />
