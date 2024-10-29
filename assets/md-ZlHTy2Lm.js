import{_ as e}from"./slidev/CodeBlockWrapper.vue_vue_type_script_setup_true_lang-DTbbl6rH.js";import{o as n,c as r,k as h,e as i,aa as s,l as p,m as d,q as g,s as E,B as l}from"./modules/vue-BhY7NQZO.js";import{_ as C}from"./slidev/two-cols.vue_vue_type_script_setup_true_lang-BjECM78y.js";import{u as y,f as D}from"./slidev/context-BJXroG1n.js";import"./modules/unplugin-icons-CnBI-Eyy.js";import"./index-kzbTCur2.js";import"./modules/shiki-DvrlRKrx.js";const B="/gmsh-tuto/img/square-adapt-box.png",N={__name:"slides.md__slidev_56",setup(o){const{$slidev:c,$nav:u,$clicksContext:a,$clicks:m,$page:f,$renderContext:A,$frontmatter:t}=y();return a.setup(),(_,k)=>{const F=e;return n(),r(C,g(E(l(D)(l(t),55))),{right:h(x=>k[1]||(k[1]=[i("img",{src:B},null,-1)])),default:h(()=>[k[2]||(k[2]=i("h1",null,"Adapt Mesh",-1)),k[3]||(k[3]=i("ul",null,[i("li",null,[s("Refine Mesh "),i("ul",null,[i("li",null,[s("globaly: Use "),i("code",null,"Modules/Mesh/Refine by splitting")]),i("li",null,[i("strong",null,"local"),s(" : Use "),i("code",null,"Field"),s(" plugins")])])])],-1)),p(F,d({},{ranges:[]}),{default:h(()=>k[0]||(k[0]=[i("pre",{class:"shiki shiki-themes catppuccin-frappe min-light slidev-code",style:{"--shiki-dark":"#c6d0f5","--shiki-light":"#24292eff","--shiki-dark-bg":"#303446","--shiki-light-bg":"#ffffff"}},[i("code",{class:"language-gmsh"},[i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}},"Merge "),i("span",{style:{"--shiki-dark":"#A6D189","--shiki-light":"#22863A"}},'"square.geo"'),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#24292EFF"}},";")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#737994","--shiki-dark-font-style":"italic","--shiki-light":"#C2C3C5","--shiki-light-font-style":"inherit"}},"// `Box' field to impose element sizes inside a box")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#CA9EE6","--shiki-light":"#D32F2F"}},"Field"),i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}},"[1] "),i("span",{style:{"--shiki-dark":"#81C8BE","--shiki-light":"#D32F2F"}},"="),i("span",{style:{"--shiki-dark":"#CA9EE6","--shiki-light":"#D32F2F"}}," Box"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#24292EFF"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#CA9EE6","--shiki-light":"#D32F2F"}},"Field"),i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}},"[1]"),i("span",{style:{"--shiki-dark":"#81C8BE","--shiki-light":"#24292EFF"}},"."),i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}},"VIn "),i("span",{style:{"--shiki-dark":"#81C8BE","--shiki-light":"#D32F2F"}},"="),i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}}," lc "),i("span",{style:{"--shiki-dark":"#81C8BE","--shiki-light":"#D32F2F"}},"/"),i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}}," 15"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#24292EFF"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#CA9EE6","--shiki-light":"#D32F2F"}},"Field"),i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}},"[1]"),i("span",{style:{"--shiki-dark":"#81C8BE","--shiki-light":"#24292EFF"}},"."),i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}},"VOut "),i("span",{style:{"--shiki-dark":"#81C8BE","--shiki-light":"#D32F2F"}},"="),i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}}," lc"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#24292EFF"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#CA9EE6","--shiki-light":"#D32F2F"}},"Field"),i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}},"[1]"),i("span",{style:{"--shiki-dark":"#81C8BE","--shiki-light":"#24292EFF"}},"."),i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}},"XMin "),i("span",{style:{"--shiki-dark":"#81C8BE","--shiki-light":"#D32F2F"}},"="),i("span",{style:{"--shiki-dark":"#81C8BE","--shiki-light":"#D32F2F"}}," -"),i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}},"0"),i("span",{style:{"--shiki-dark":"#81C8BE","--shiki-light":"#24292EFF"}},"."),i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}},"7"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#24292EFF"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#CA9EE6","--shiki-light":"#D32F2F"}},"Field"),i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}},"[1]"),i("span",{style:{"--shiki-dark":"#81C8BE","--shiki-light":"#24292EFF"}},"."),i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}},"XMax "),i("span",{style:{"--shiki-dark":"#81C8BE","--shiki-light":"#D32F2F"}},"="),i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}}," 0"),i("span",{style:{"--shiki-dark":"#81C8BE","--shiki-light":"#24292EFF"}},"."),i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}},"7"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#24292EFF"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#CA9EE6","--shiki-light":"#D32F2F"}},"Field"),i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}},"[1]"),i("span",{style:{"--shiki-dark":"#81C8BE","--shiki-light":"#24292EFF"}},"."),i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}},"YMin "),i("span",{style:{"--shiki-dark":"#81C8BE","--shiki-light":"#D32F2F"}},"="),i("span",{style:{"--shiki-dark":"#81C8BE","--shiki-light":"#D32F2F"}}," -"),i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}},"0"),i("span",{style:{"--shiki-dark":"#81C8BE","--shiki-light":"#24292EFF"}},"."),i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}},"7"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#24292EFF"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#CA9EE6","--shiki-light":"#D32F2F"}},"Field"),i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}},"[1]"),i("span",{style:{"--shiki-dark":"#81C8BE","--shiki-light":"#24292EFF"}},"."),i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}},"YMax "),i("span",{style:{"--shiki-dark":"#81C8BE","--shiki-light":"#D32F2F"}},"="),i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}}," 0"),i("span",{style:{"--shiki-dark":"#81C8BE","--shiki-light":"#24292EFF"}},"."),i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}},"7"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#24292EFF"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#CA9EE6","--shiki-light":"#D32F2F"}},"Field"),i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}},"[1]"),i("span",{style:{"--shiki-dark":"#81C8BE","--shiki-light":"#24292EFF"}},"."),i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}},"ZMin "),i("span",{style:{"--shiki-dark":"#81C8BE","--shiki-light":"#D32F2F"}},"="),i("span",{style:{"--shiki-dark":"#81C8BE","--shiki-light":"#D32F2F"}}," -"),i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}},"1"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#24292EFF"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#CA9EE6","--shiki-light":"#D32F2F"}},"Field"),i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}},"[1]"),i("span",{style:{"--shiki-dark":"#81C8BE","--shiki-light":"#24292EFF"}},"."),i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}},"ZMax "),i("span",{style:{"--shiki-dark":"#81C8BE","--shiki-light":"#D32F2F"}},"="),i("span",{style:{"--shiki-dark":"#81C8BE","--shiki-light":"#D32F2F"}}," -"),i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}},"1"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#24292EFF"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#CA9EE6","--shiki-light":"#D32F2F"}},"Field"),i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}},"[1]"),i("span",{style:{"--shiki-dark":"#81C8BE","--shiki-light":"#24292EFF"}},"."),i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}},"Thickness "),i("span",{style:{"--shiki-dark":"#81C8BE","--shiki-light":"#D32F2F"}},"="),i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}}," 0"),i("span",{style:{"--shiki-dark":"#81C8BE","--shiki-light":"#24292EFF"}},"."),i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}},"1"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#24292EFF"}},";")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}},"Background "),i("span",{style:{"--shiki-dark":"#CA9EE6","--shiki-light":"#D32F2F"}},"Field"),i("span",{style:{"--shiki-dark":"#81C8BE","--shiki-light":"#D32F2F"}}," ="),i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}}," 1"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#24292EFF"}},";")])])],-1)])),_:1},16)]),_:1},16)}}};export{N as default};
