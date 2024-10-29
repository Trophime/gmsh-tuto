import{_ as e}from"./slidev/CodeBlockWrapper.vue_vue_type_script_setup_true_lang-DTbbl6rH.js";import{o as n,c as r,k,e as i,aa as s,l as p,m as d,q as g,s as E,B as h}from"./modules/vue-BhY7NQZO.js";import{_ as C}from"./slidev/two-cols.vue_vue_type_script_setup_true_lang-BjECM78y.js";import{u as y,f as o}from"./slidev/context-BJXroG1n.js";import"./modules/unplugin-icons-CnBI-Eyy.js";import"./index-kzbTCur2.js";import"./modules/shiki-DvrlRKrx.js";const D="/gmsh-tuto/img/square-adapt-point.png",N={__name:"slides.md__slidev_54",setup(B){const{$slidev:c,$nav:u,$clicksContext:a,$clicks:m,$page:f,$renderContext:_,$frontmatter:t}=y();return a.setup(),(A,l)=>{const F=e;return n(),r(C,g(E(h(o)(h(t),53))),{right:k(x=>l[1]||(l[1]=[i("img",{src:D},null,-1)])),default:k(()=>[l[2]||(l[2]=i("h1",null,"Adapt Mesh",-1)),l[3]||(l[3]=i("ul",null,[i("li",null,[s("Refine Mesh "),i("ul",null,[i("li",null,[s("globaly: Use "),i("code",null,"Modules/Mesh/Refine by splitting")]),i("li",null,[i("strong",null,"local"),s(" : Use "),i("code",null,"Field"),s(" plugins")])])])],-1)),p(F,d({},{ranges:[]}),{default:k(()=>l[0]||(l[0]=[i("pre",{class:"shiki shiki-themes catppuccin-frappe min-light slidev-code",style:{"--shiki-dark":"#c6d0f5","--shiki-light":"#24292eff","--shiki-dark-bg":"#303446","--shiki-light-bg":"#ffffff"}},[i("code",{class:"language-gmsh"},[i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}},"Merge "),i("span",{style:{"--shiki-dark":"#A6D189","--shiki-light":"#22863A"}},'"square.geo"'),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#24292EFF"}},";")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#737994","--shiki-dark-font-style":"italic","--shiki-light":"#C2C3C5","--shiki-light-font-style":"inherit"}},"// Distance Field")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#CA9EE6","--shiki-light":"#D32F2F"}},"Field"),i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}},"[1] "),i("span",{style:{"--shiki-dark":"#81C8BE","--shiki-light":"#D32F2F"}},"="),i("span",{style:{"--shiki-dark":"#CA9EE6","--shiki-light":"#D32F2F"}}," Distance"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#24292EFF"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#CA9EE6","--shiki-light":"#D32F2F"}},"Field"),i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}},"[1]"),i("span",{style:{"--shiki-dark":"#81C8BE","--shiki-light":"#24292EFF"}},"."),i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}},"PointsList "),i("span",{style:{"--shiki-dark":"#81C8BE","--shiki-light":"#D32F2F"}},"="),i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}}," {1}"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#24292EFF"}},";")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#CA9EE6","--shiki-light":"#D32F2F"}},"Field"),i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}},"[2] "),i("span",{style:{"--shiki-dark":"#81C8BE","--shiki-light":"#D32F2F"}},"="),i("span",{style:{"--shiki-dark":"#CA9EE6","--shiki-light":"#D32F2F"}}," Threshold"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#24292EFF"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#CA9EE6","--shiki-light":"#D32F2F"}},"Field"),i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}},"[2]"),i("span",{style:{"--shiki-dark":"#81C8BE","--shiki-light":"#24292EFF"}},"."),i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}},"InField "),i("span",{style:{"--shiki-dark":"#81C8BE","--shiki-light":"#D32F2F"}},"="),i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}}," 1"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#24292EFF"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#CA9EE6","--shiki-light":"#D32F2F"}},"Field"),i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}},"[2]"),i("span",{style:{"--shiki-dark":"#81C8BE","--shiki-light":"#24292EFF"}},"."),i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}},"SizeMin "),i("span",{style:{"--shiki-dark":"#81C8BE","--shiki-light":"#D32F2F"}},"="),i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}}," lc "),i("span",{style:{"--shiki-dark":"#81C8BE","--shiki-light":"#D32F2F"}},"/"),i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}}," 30"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#24292EFF"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#CA9EE6","--shiki-light":"#D32F2F"}},"Field"),i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}},"[2]"),i("span",{style:{"--shiki-dark":"#81C8BE","--shiki-light":"#24292EFF"}},"."),i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}},"SizeMax "),i("span",{style:{"--shiki-dark":"#81C8BE","--shiki-light":"#D32F2F"}},"="),i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}}," lc"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#24292EFF"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#CA9EE6","--shiki-light":"#D32F2F"}},"Field"),i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}},"[2]"),i("span",{style:{"--shiki-dark":"#81C8BE","--shiki-light":"#24292EFF"}},"."),i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}},"DistMin "),i("span",{style:{"--shiki-dark":"#81C8BE","--shiki-light":"#D32F2F"}},"="),i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}}," 0"),i("span",{style:{"--shiki-dark":"#81C8BE","--shiki-light":"#24292EFF"}},"."),i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}},"15"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#24292EFF"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#CA9EE6","--shiki-light":"#D32F2F"}},"Field"),i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}},"[2]"),i("span",{style:{"--shiki-dark":"#81C8BE","--shiki-light":"#24292EFF"}},"."),i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}},"DistMax "),i("span",{style:{"--shiki-dark":"#81C8BE","--shiki-light":"#D32F2F"}},"="),i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}}," 0"),i("span",{style:{"--shiki-dark":"#81C8BE","--shiki-light":"#24292EFF"}},"."),i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}},"5"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#24292EFF"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}},"Background "),i("span",{style:{"--shiki-dark":"#CA9EE6","--shiki-light":"#D32F2F"}},"Field"),i("span",{style:{"--shiki-dark":"#81C8BE","--shiki-light":"#D32F2F"}}," ="),i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}}," 2"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#24292EFF"}},";")])])],-1)])),_:1},16)]),_:1},16)}}};export{N as default};
