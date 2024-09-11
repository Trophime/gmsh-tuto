# Welcome to Gmsh Tutorial slides!

To start the slide show:

- `npm install`
- `npm run dev`
- visit <http://localhost:3030>

Edit the [slides.md](./slides.md) to see the changes.

The slides are build with [Slidev](https://sli.dev/).

To preview your changes in vscode, you  can run the following command in a Terminal:

- `npm exec slidev -- --port 3030 "slides.md"`

To export the slides, for instance:

- `npm  i -D playwright-chromium`
- `npm exec slidev -- export --format pptx`

[NOTE]
====
Prefer chromium over firefox since Tweet feature is not rendered in firefox

```
chromium --incognito http://localhost:3030/
```
====