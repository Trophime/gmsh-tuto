import{d as l,t as u,O as c,E as m,G as i,o as p,b as f,i as d,B as t}from"../modules/vue-CexduF6I.js";import{u as _}from"./context-Cd-9EkpC.js";import{c as v}from"./DrawingPreview.vue_vue_type_script_setup_true_lang-DNYnnumT.js";import"../index-8D3Iie-j.js";import"../modules/shiki-C9g29tnl.js";const k=l({__name:"DrawingLayer",setup(g){const{drauu:e,drawingEnabled:o,loadCanvas:s}=v(),r=_().$scale,n=u();return c(()=>{e.mount(n.value,n.value.parentElement),m(r,a=>e.options.coordinateScale=1/a,{immediate:!0}),s()}),i(()=>{e.unmount()}),(a,w)=>(p(),f("svg",{ref_key:"svg",ref:n,class:d(["w-full h-full absolute top-0",{"pointer-events-none":!t(o),"touch-none":t(o)}])},null,2))}});export{k as default};