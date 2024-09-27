import{_ as m}from"./CodeBlockWrapper.vue_vue_type_script_setup_true_lang-CoBv8XqN.js";import{d as c,z as y,o as g,b as v,e as s,f as C,i as _,h as b,r as A,c as B,k as n,l as o,m as f,aa as $,q as S,s as F,B as p}from"../modules/vue-BvyrywCt.js";import{u as D,f as E}from"./context-B5dGC9F7.js";import"../modules/unplugin-icons-B--ErOWZ.js";import"../index-Cb_YF6e9.js";import"../modules/shiki-DQ5gN0gd.js";function h(e){return e.startsWith("/")?"/gmsh-tuto/"+e.slice(1):e}function w(e,l=!1,r="cover"){const t=e&&(e[0]==="#"||e.startsWith("rgb")),a={background:t?e:void 0,color:e&&!t?"white":void 0,backgroundImage:t?void 0:e?l?`linear-gradient(#0005, #0008), url(${h(e)})`:`url("${h(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:r};return a.background||delete a.background,a}const x={class:"grid grid-cols-2 w-full h-full auto-rows-fr"},z=c({__name:"image-right",props:{image:{type:String},class:{type:String},backgroundSize:{type:String,default:"cover"}},setup(e){const l=e,r=y(()=>w(l.image,!1,l.backgroundSize));return(t,a)=>(g(),v("div",x,[s("div",{class:_(["slidev-layout default",l.class])},[C(t.$slots,"default")],2),s("div",{class:"w-full h-full",style:b(r.value)},null,4)]))}}),M={__name:"slides.md__slidev_24",setup(e){const{$slidev:l,$nav:r,$clicksContext:t,$clicks:a,$page:P,$renderContext:N,$frontmatter:k}=D();return t.setup(),(T,i)=>{const d=m,u=A("Comp");return g(),B(z,S(F(p(E)(p(k),23))),{default:n(()=>[i[3]||(i[3]=s("h1",null,"Load CAD geometry",-1)),i[4]||(i[4]=s("ul",null,[s("li",null,"from command line")],-1)),o(d,f({},{ranges:[]}),{default:n(()=>i[0]||(i[0]=[s("pre",{class:"shiki shiki-themes catppuccin-frappe min-light slidev-code",style:{"--shiki-dark":"#c6d0f5","--shiki-light":"#24292eff","--shiki-dark-bg":"#303446","--shiki-light-bg":"#ffffff"}},[s("code",{class:"language-bash"},[s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#8CAAEE","--shiki-dark-font-style":"italic","--shiki-light":"#6F42C1","--shiki-light-font-style":"inherit"}},"gmsh"),s("span",{style:{"--shiki-dark":"#A6D189","--shiki-light":"#2B5581"}}," file.stp")])])],-1)])),_:1},16),i[5]||(i[5]=s("ul",null,[s("li",null,"from geo file")],-1)),o(d,f({},{ranges:[]}),{default:n(()=>i[1]||(i[1]=[s("pre",{class:"shiki shiki-themes catppuccin-frappe min-light slidev-code",style:{"--shiki-dark":"#c6d0f5","--shiki-light":"#24292eff","--shiki-dark-bg":"#303446","--shiki-light-bg":"#ffffff"}},[s("code",{class:"language-gmsh"},[s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}},"Merge "),s("span",{style:{"--shiki-dark":"#A6D189","--shiki-light":"#22863A"}},'"file.stp"'),s("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#24292EFF"}},";")])])],-1)])),_:1},16),i[6]||(i[6]=s("ul",null,[s("li",null,[$("Save CAD geometry "),s("ul",null,[s("li",null,"only when using OCC kernel")])])],-1)),o(d,f({},{ranges:[]}),{default:n(()=>i[2]||(i[2]=[s("pre",{class:"shiki shiki-themes catppuccin-frappe min-light slidev-code",style:{"--shiki-dark":"#c6d0f5","--shiki-light":"#24292eff","--shiki-dark-bg":"#303446","--shiki-light-bg":"#ffffff"}},[s("code",{class:"language-gmsh"},[s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#CA9EE6","--shiki-light":"#D32F2F"}},"Save"),s("span",{style:{"--shiki-dark":"#A6D189","--shiki-light":"#22863A"}},' "file.brep"'),s("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#24292EFF"}},";")])])],-1)])),_:1},16),i[7]||(i[7]=s("p",null,"!!!STL format can be loaded but not converted to other CAD format!!!",-1)),o(u,{src:"/img/t13_data.png",width:"80"})]),_:1},16)}}};export{M as default};