import{_ as e}from"./slidev/CodeBlockWrapper.vue_vue_type_script_setup_true_lang-D5u3Kks6.js";import{o as r,c as p,k,e as i,l as d,m as g,aa as s,q as y,s as F,B as a}from"./modules/vue-BEEdIMGZ.js";import{_ as C}from"./slidev/two-cols.vue_vue_type_script_setup_true_lang-C7LnKkmR.js";import{u as B,f as E}from"./slidev/context-D-isSlv2.js";import"./modules/unplugin-icons-CzD3oWz4.js";import"./index-CbZeDAqn.js";import"./modules/shiki-BgRh0Lhs.js";const G={__name:"slides.md__slidev_41",setup(D){const{$slidev:o,$nav:c,$clicksContext:l,$clicks:A,$page:m,$renderContext:f,$frontmatter:t}=B();return l.setup(),(u,h)=>{const n=e;return r(),p(C,y(F(a(E)(a(t),40))),{default:k(()=>[h[1]||(h[1]=i("h1",null,"Mesh using Gmsh API",-1)),d(n,g({},{ranges:[]}),{default:k(()=>h[0]||(h[0]=[i("pre",{class:"shiki shiki-themes catppuccin-frappe min-light slidev-code",style:{"--shiki-dark":"#c6d0f5","--shiki-light":"#24292eff","--shiki-dark-bg":"#303446","--shiki-light-bg":"#ffffff"}},[i("code",{class:"language-python"},[i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#CA9EE6","--shiki-light":"#D32F2F"}},"import"),i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}}," gmsh")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#CA9EE6","--shiki-light":"#D32F2F"}},"import"),i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}}," sys")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}},"gmsh"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},"."),i("span",{style:{"--shiki-dark":"#8CAAEE","--shiki-light":"#6F42C1"}},"initialize"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},"()")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}},"gmsh"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},"."),i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}},"model"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},"."),i("span",{style:{"--shiki-dark":"#8CAAEE","--shiki-light":"#6F42C1"}},"add"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},"("),i("span",{style:{"--shiki-dark":"#A6D189","--shiki-light":"#22863A"}},'"square"'),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},")")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#CA9EE6","--shiki-light":"#D32F2F"}},"import"),i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}}," argparse")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}},"parser "),i("span",{style:{"--shiki-dark":"#81C8BE","--shiki-light":"#D32F2F"}},"="),i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}}," argparse"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},"."),i("span",{style:{"--shiki-dark":"#8CAAEE","--shiki-light":"#6F42C1"}},"ArgumentParser"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},"("),i("span",{style:{"--shiki-dark":"#EA999C","--shiki-dark-font-style":"italic","--shiki-light":"#212121","--shiki-light-font-style":"inherit"}},"add_help"),i("span",{style:{"--shiki-dark":"#81C8BE","--shiki-light":"#D32F2F"}},"="),i("span",{style:{"--shiki-dark":"#CA9EE6","--shiki-light":"#1976D2"}},"False"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}},"parser"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},"."),i("span",{style:{"--shiki-dark":"#8CAAEE","--shiki-light":"#6F42C1"}},"add_argument"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},"("),i("span",{style:{"--shiki-dark":"#A6D189","--shiki-light":"#22863A"}},"'-lc'"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},","),i("span",{style:{"--shiki-dark":"#EA999C","--shiki-dark-font-style":"italic","--shiki-light":"#212121","--shiki-light-font-style":"inherit"}}," help"),i("span",{style:{"--shiki-dark":"#81C8BE","--shiki-light":"#D32F2F"}},"="),i("span",{style:{"--shiki-dark":"#A6D189","--shiki-light":"#22863A"}},'"mesh characteristic length"'),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},","),i("span",{style:{"--shiki-dark":"#EA999C","--shiki-dark-font-style":"italic","--shiki-light":"#212121","--shiki-light-font-style":"inherit"}}," type"),i("span",{style:{"--shiki-dark":"#81C8BE","--shiki-light":"#D32F2F"}},"="),i("span",{style:{"--shiki-dark":"#EF9F76","--shiki-dark-font-style":"italic","--shiki-light":"#1976D2","--shiki-light-font-style":"inherit"}},"float"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},","),i("span",{style:{"--shiki-dark":"#EA999C","--shiki-dark-font-style":"italic","--shiki-light":"#212121","--shiki-light-font-style":"inherit"}}," default"),i("span",{style:{"--shiki-dark":"#81C8BE","--shiki-light":"#D32F2F"}},"="),i("span",{style:{"--shiki-dark":"#EF9F76","--shiki-light":"#1976D2"}},"0.1"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}},"parser"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},"."),i("span",{style:{"--shiki-dark":"#8CAAEE","--shiki-light":"#6F42C1"}},"add_argument"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},"("),i("span",{style:{"--shiki-dark":"#A6D189","--shiki-light":"#22863A"}},"'-Lx'"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},","),i("span",{style:{"--shiki-dark":"#EA999C","--shiki-dark-font-style":"italic","--shiki-light":"#212121","--shiki-light-font-style":"inherit"}}," help"),i("span",{style:{"--shiki-dark":"#81C8BE","--shiki-light":"#D32F2F"}},"="),i("span",{style:{"--shiki-dark":"#A6D189","--shiki-light":"#22863A"}},'"Length along OX"'),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},","),i("span",{style:{"--shiki-dark":"#EA999C","--shiki-dark-font-style":"italic","--shiki-light":"#212121","--shiki-light-font-style":"inherit"}}," type"),i("span",{style:{"--shiki-dark":"#81C8BE","--shiki-light":"#D32F2F"}},"="),i("span",{style:{"--shiki-dark":"#EF9F76","--shiki-dark-font-style":"italic","--shiki-light":"#1976D2","--shiki-light-font-style":"inherit"}},"float"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},","),i("span",{style:{"--shiki-dark":"#EA999C","--shiki-dark-font-style":"italic","--shiki-light":"#212121","--shiki-light-font-style":"inherit"}}," default"),i("span",{style:{"--shiki-dark":"#81C8BE","--shiki-light":"#D32F2F"}},"="),i("span",{style:{"--shiki-dark":"#EF9F76","--shiki-light":"#1976D2"}},"0.25"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}},"parser"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},"."),i("span",{style:{"--shiki-dark":"#8CAAEE","--shiki-light":"#6F42C1"}},"add_argument"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},"("),i("span",{style:{"--shiki-dark":"#A6D189","--shiki-light":"#22863A"}},"'-Ly'"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},","),i("span",{style:{"--shiki-dark":"#EA999C","--shiki-dark-font-style":"italic","--shiki-light":"#212121","--shiki-light-font-style":"inherit"}}," help"),i("span",{style:{"--shiki-dark":"#81C8BE","--shiki-light":"#D32F2F"}},"="),i("span",{style:{"--shiki-dark":"#A6D189","--shiki-light":"#22863A"}},'"Length along OY"'),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},","),i("span",{style:{"--shiki-dark":"#EA999C","--shiki-dark-font-style":"italic","--shiki-light":"#212121","--shiki-light-font-style":"inherit"}}," type"),i("span",{style:{"--shiki-dark":"#81C8BE","--shiki-light":"#D32F2F"}},"="),i("span",{style:{"--shiki-dark":"#EF9F76","--shiki-dark-font-style":"italic","--shiki-light":"#1976D2","--shiki-light-font-style":"inherit"}},"float"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},","),i("span",{style:{"--shiki-dark":"#EA999C","--shiki-dark-font-style":"italic","--shiki-light":"#212121","--shiki-light-font-style":"inherit"}}," default"),i("span",{style:{"--shiki-dark":"#81C8BE","--shiki-light":"#D32F2F"}},"="),i("span",{style:{"--shiki-dark":"#EF9F76","--shiki-light":"#1976D2"}},"0.25"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}},"parser"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},"."),i("span",{style:{"--shiki-dark":"#8CAAEE","--shiki-light":"#6F42C1"}},"add_argument"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},"("),i("span",{style:{"--shiki-dark":"#A6D189","--shiki-light":"#22863A"}},"'-nopopup'"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},","),i("span",{style:{"--shiki-dark":"#EA999C","--shiki-dark-font-style":"italic","--shiki-light":"#212121","--shiki-light-font-style":"inherit"}}," action"),i("span",{style:{"--shiki-dark":"#81C8BE","--shiki-light":"#D32F2F"}},"="),i("span",{style:{"--shiki-dark":"#A6D189","--shiki-light":"#22863A"}},"'store_true'"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},")"),i("span",{style:{"--shiki-dark":"#737994","--shiki-dark-font-style":"italic","--shiki-light":"#C2C3C5","--shiki-light-font-style":"inherit"}},"  # on/off flag")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}},"args "),i("span",{style:{"--shiki-dark":"#81C8BE","--shiki-light":"#D32F2F"}},"="),i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}}," parser"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},"."),i("span",{style:{"--shiki-dark":"#8CAAEE","--shiki-light":"#6F42C1"}},"parse_args"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},"()")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}},"Lx "),i("span",{style:{"--shiki-dark":"#81C8BE","--shiki-light":"#D32F2F"}},"="),i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}}," args"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},"."),i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}},"Lx")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}},"Ly "),i("span",{style:{"--shiki-dark":"#81C8BE","--shiki-light":"#D32F2F"}},"="),i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}}," args"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},"."),i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}},"Ly")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}},"lc "),i("span",{style:{"--shiki-dark":"#81C8BE","--shiki-light":"#D32F2F"}},"="),i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}}," args"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},"."),i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}},"lc")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}},"p1 "),i("span",{style:{"--shiki-dark":"#81C8BE","--shiki-light":"#D32F2F"}},"="),i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}}," gmsh"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},"."),i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}},"model"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},"."),i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}},"geo"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},"."),i("span",{style:{"--shiki-dark":"#8CAAEE","--shiki-light":"#6F42C1"}},"addPoint"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},"("),i("span",{style:{"--shiki-dark":"#81C8BE","--shiki-light":"#D32F2F"}},"-"),i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#212121"}},"Lx"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},","),i("span",{style:{"--shiki-dark":"#81C8BE","--shiki-light":"#D32F2F"}}," -"),i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#212121"}},"Ly"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},","),i("span",{style:{"--shiki-dark":"#EF9F76","--shiki-light":"#1976D2"}}," 0"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},","),i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#212121"}}," lc"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},","),i("span",{style:{"--shiki-dark":"#EF9F76","--shiki-light":"#1976D2"}}," 1"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}},"p2 "),i("span",{style:{"--shiki-dark":"#81C8BE","--shiki-light":"#D32F2F"}},"="),i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}}," gmsh"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},"."),i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}},"model"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},"."),i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}},"geo"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},"."),i("span",{style:{"--shiki-dark":"#8CAAEE","--shiki-light":"#6F42C1"}},"addPoint"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},"("),i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#212121"}},"Lx"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},","),i("span",{style:{"--shiki-dark":"#81C8BE","--shiki-light":"#D32F2F"}}," -"),i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#212121"}},"Ly"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},","),i("span",{style:{"--shiki-dark":"#EF9F76","--shiki-light":"#1976D2"}}," 0"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},","),i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#212121"}}," lc"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},","),i("span",{style:{"--shiki-dark":"#EF9F76","--shiki-light":"#1976D2"}}," 2"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}},"p3 "),i("span",{style:{"--shiki-dark":"#81C8BE","--shiki-light":"#D32F2F"}},"="),i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}}," gmsh"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},"."),i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}},"model"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},"."),i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}},"geo"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},"."),i("span",{style:{"--shiki-dark":"#8CAAEE","--shiki-light":"#6F42C1"}},"addPoint"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},"("),i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#212121"}},"Lx"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},","),i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#212121"}}," Ly"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},","),i("span",{style:{"--shiki-dark":"#EF9F76","--shiki-light":"#1976D2"}}," 0"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},","),i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#212121"}}," lc"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},","),i("span",{style:{"--shiki-dark":"#EF9F76","--shiki-light":"#1976D2"}}," 3"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}},"p4 "),i("span",{style:{"--shiki-dark":"#81C8BE","--shiki-light":"#D32F2F"}},"="),i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}}," gmsh"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},"."),i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}},"model"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},"."),i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}},"geo"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},"."),i("span",{style:{"--shiki-dark":"#8CAAEE","--shiki-light":"#6F42C1"}},"addPoint"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},"("),i("span",{style:{"--shiki-dark":"#81C8BE","--shiki-light":"#D32F2F"}},"-"),i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#212121"}},"Lx"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},","),i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#212121"}}," Ly"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},","),i("span",{style:{"--shiki-dark":"#EF9F76","--shiki-light":"#1976D2"}}," 0"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},","),i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#212121"}}," lc"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},")")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#737994","--shiki-dark-font-style":"italic","--shiki-light":"#C2C3C5","--shiki-light-font-style":"inherit"}},"# Lines")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}},"gmsh"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},"."),i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}},"model"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},"."),i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}},"geo"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},"."),i("span",{style:{"--shiki-dark":"#8CAAEE","--shiki-light":"#6F42C1"}},"addLine"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},"("),i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#212121"}},"p1"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},","),i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#212121"}}," p2"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},","),i("span",{style:{"--shiki-dark":"#EF9F76","--shiki-light":"#1976D2"}}," 1"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}},"gmsh"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},"."),i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}},"model"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},"."),i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}},"geo"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},"."),i("span",{style:{"--shiki-dark":"#8CAAEE","--shiki-light":"#6F42C1"}},"addLine"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},"("),i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#212121"}},"p3"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},","),i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#212121"}}," p2"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},","),i("span",{style:{"--shiki-dark":"#EF9F76","--shiki-light":"#1976D2"}}," 2"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}},"gmsh"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},"."),i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}},"model"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},"."),i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}},"geo"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},"."),i("span",{style:{"--shiki-dark":"#8CAAEE","--shiki-light":"#6F42C1"}},"addLine"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},"("),i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#212121"}},"p3"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},","),i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#212121"}}," p4"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},","),i("span",{style:{"--shiki-dark":"#EF9F76","--shiki-light":"#1976D2"}}," 3"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}},"gmsh"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},"."),i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}},"model"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},"."),i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}},"geo"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},"."),i("span",{style:{"--shiki-dark":"#8CAAEE","--shiki-light":"#6F42C1"}},"addLine"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},"("),i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#212121"}},"p4"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},","),i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#212121"}}," p1"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},","),i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#212121"}}," p4"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},")")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}},"gmsh"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},"."),i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}},"model"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},"."),i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}},"geo"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},"."),i("span",{style:{"--shiki-dark":"#8CAAEE","--shiki-light":"#6F42C1"}},"addCurveLoop"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},"(["),i("span",{style:{"--shiki-dark":"#EF9F76","--shiki-light":"#1976D2"}},"4"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},","),i("span",{style:{"--shiki-dark":"#EF9F76","--shiki-light":"#1976D2"}}," 1"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},","),i("span",{style:{"--shiki-dark":"#81C8BE","--shiki-light":"#D32F2F"}}," -"),i("span",{style:{"--shiki-dark":"#EF9F76","--shiki-light":"#1976D2"}},"2"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},","),i("span",{style:{"--shiki-dark":"#EF9F76","--shiki-light":"#1976D2"}}," 3"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},"],"),i("span",{style:{"--shiki-dark":"#EF9F76","--shiki-light":"#1976D2"}}," 1"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},")")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}},"gmsh"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},"."),i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}},"model"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},"."),i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}},"geo"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},"."),i("span",{style:{"--shiki-dark":"#8CAAEE","--shiki-light":"#6F42C1"}},"addPlaneSurface"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},"(["),i("span",{style:{"--shiki-dark":"#EF9F76","--shiki-light":"#1976D2"}},"1"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},"],"),i("span",{style:{"--shiki-dark":"#EF9F76","--shiki-light":"#1976D2"}}," 1"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}},"gmsh"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},"."),i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}},"model"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},"."),i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}},"geo"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},"."),i("span",{style:{"--shiki-dark":"#8CAAEE","--shiki-light":"#6F42C1"}},"synchronize"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},"()")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}},"gmsh"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},"."),i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}},"model"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},"."),i("span",{style:{"--shiki-dark":"#8CAAEE","--shiki-light":"#6F42C1"}},"addPhysicalGroup"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},"("),i("span",{style:{"--shiki-dark":"#EF9F76","--shiki-light":"#1976D2"}},"1"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},","),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}}," ["),i("span",{style:{"--shiki-dark":"#EF9F76","--shiki-light":"#1976D2"}},"1"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},"],"),i("span",{style:{"--shiki-dark":"#EA999C","--shiki-dark-font-style":"italic","--shiki-light":"#212121","--shiki-light-font-style":"inherit"}}," name"),i("span",{style:{"--shiki-dark":"#81C8BE","--shiki-light":"#D32F2F"}},"="),i("span",{style:{"--shiki-dark":"#A6D189","--shiki-light":"#22863A"}},'"Ox"'),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}},"gmsh"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},"."),i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}},"model"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},"."),i("span",{style:{"--shiki-dark":"#8CAAEE","--shiki-light":"#6F42C1"}},"addPhysicalGroup"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},"("),i("span",{style:{"--shiki-dark":"#EF9F76","--shiki-light":"#1976D2"}},"1"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},","),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}}," ["),i("span",{style:{"--shiki-dark":"#EF9F76","--shiki-light":"#1976D2"}},"2"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},","),i("span",{style:{"--shiki-dark":"#EF9F76","--shiki-light":"#1976D2"}}," 3"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},","),i("span",{style:{"--shiki-dark":"#EF9F76","--shiki-light":"#1976D2"}}," 4"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},"],"),i("span",{style:{"--shiki-dark":"#EA999C","--shiki-dark-font-style":"italic","--shiki-light":"#212121","--shiki-light-font-style":"inherit"}}," name"),i("span",{style:{"--shiki-dark":"#81C8BE","--shiki-light":"#D32F2F"}},"="),i("span",{style:{"--shiki-dark":"#A6D189","--shiki-light":"#22863A"}},'"others"'),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}},"gmsh"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},"."),i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}},"model"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},"."),i("span",{style:{"--shiki-dark":"#8CAAEE","--shiki-light":"#6F42C1"}},"addPhysicalGroup"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},"("),i("span",{style:{"--shiki-dark":"#EF9F76","--shiki-light":"#1976D2"}},"2"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},","),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}}," ["),i("span",{style:{"--shiki-dark":"#EF9F76","--shiki-light":"#1976D2"}},"1"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},"],"),i("span",{style:{"--shiki-dark":"#EA999C","--shiki-dark-font-style":"italic","--shiki-light":"#212121","--shiki-light-font-style":"inherit"}}," name"),i("span",{style:{"--shiki-dark":"#81C8BE","--shiki-light":"#D32F2F"}},"="),i("span",{style:{"--shiki-dark":"#A6D189","--shiki-light":"#22863A"}},'"Top"'),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},")")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}},"gmsh"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},"."),i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}},"model"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},"."),i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}},"mesh"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},"."),i("span",{style:{"--shiki-dark":"#8CAAEE","--shiki-light":"#6F42C1"}},"generate"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},"("),i("span",{style:{"--shiki-dark":"#EF9F76","--shiki-light":"#1976D2"}},"2"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},")")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}},"gmsh"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},"."),i("span",{style:{"--shiki-dark":"#8CAAEE","--shiki-light":"#6F42C1"}},"write"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},"("),i("span",{style:{"--shiki-dark":"#A6D189","--shiki-light":"#22863A"}},'"t1.msh"'),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},")")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#CA9EE6","--shiki-light":"#D32F2F"}},"if"),i("span",{style:{"--shiki-dark":"#CA9EE6","--shiki-light":"#D32F2F"}}," not"),i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}}," args"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},"."),i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}},"nopopup"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},":")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}},"    gmsh"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},"."),i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}},"fltk"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},"."),i("span",{style:{"--shiki-dark":"#8CAAEE","--shiki-light":"#6F42C1"}},"run"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},"()")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}},"gmsh"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},"."),i("span",{style:{"--shiki-dark":"#8CAAEE","--shiki-light":"#6F42C1"}},"finalize"),i("span",{style:{"--shiki-dark":"#949CBB","--shiki-light":"#212121"}},"()")])])],-1)])),_:1},16)]),_:1},16)}}};export{G as default};