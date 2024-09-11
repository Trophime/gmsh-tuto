---
# You can also start simply with 'default'
theme: seriph
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://cover.sli.dev
# some information about your slides (markdown enabled)
title: Welcome to Slidev
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
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

# Table of contents

<Toc v-click minDepth="1" maxDepth="2"></Toc>

---


# Installation

* System Package
* Python env
* Container
  * Docker
  * Singularity

For this tutorial,  we recommend to use the python virtual environment.


---
layout: image-right
image: https://cover.sli.dev
---
# GUI

* Presentation
* Built-In Geometry kernel
* OCC Geometry kernel

---

# TUI

* Presentation
* Built-In Geometry kernel
* OCC Geometry kernel


---

# API

* Python
* C++

[Documentation](https://gmsh.info/doc/texinfo/gmsh.html#Gmsh-application-programming-interface) ·   [Tutorials](https://gitlab.onelab.info/gmsh/gmsh/-/tree/gmsh_4_13_1/tutorials/python) ·  [Examples](https://gitlab.onelab.info/gmsh/gmsh/-/tree/gmsh_4_13_1/examples/api)


---
layout: center
class: text-center
---

# Learn More

[Documentation](https://gmsh.info/#Documentation) · [GitLab](https://gitlab.onelab.info/gmsh/gmsh/) · [Tutorials](https://gmsh.info/doc/texinfo/gmsh.html#Gmsh-tutorial)

<PoweredBySlidev mt-10 />
