import{d as l,q as u,O as c,E as m,G as i,o as p,b as f,i as d,B as t}from"../modules/vue-BHZ9NcXQ.js";import{u as _}from"./context-Bwd9oa0Y.js";import{c as v}from"./DrawingPreview.vue_vue_type_script_setup_true_lang-CQD7phSl.js";import"../index-w7x1gf8a.js";import"../modules/shiki-CfaJpVwv.js";const k=l({__name:"DrawingLayer",setup(g){const{drauu:e,drawingEnabled:o,loadCanvas:s}=v(),r=_().$scale,n=u();return c(()=>{e.mount(n.value,n.value.parentElement),m(r,a=>e.options.coordinateScale=1/a,{immediate:!0}),s()}),i(()=>{e.unmount()}),(a,w)=>(p(),f("svg",{ref_key:"svg",ref:n,class:d(["w-full h-full absolute top-0",{"pointer-events-none":!t(o),"touch-none":t(o)}])},null,2))}});export{k as default};