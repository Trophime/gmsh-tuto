import{Q as w,R as A}from"../modules/unplugin-icons-BnRfKHjN.js";import{d as E,p as I,M as B,D as y,K as N,z as v,aE as q,o as c,e as _,a as M,B as u,c as C,g as V,n as z,i as D}from"../modules/vue-D5pbhIO4.js";import{ag as K,C as R,ah as $,ai as Q,q as k}from"../index-DAVlqTHP.js";import{u as U}from"./context-Bv--8oq-.js";const W=["title"],O=E({__name:"CodeBlockWrapper",props:{ranges:{type:Array,default:()=>[]},finally:{type:[String,Number],default:"last"},startLine:{type:Number,default:1},lines:{type:Boolean,default:k.lineNumbers},at:{type:[String,Number],default:"+1"},maxHeight:{type:String,default:void 0}},setup(S){const e=S,{$clicksContext:a}=U(),s=I(),d=K();B(()=>{a.unregister(d)}),y(()=>{var t;(t=s.value)==null||t.classList.toggle("slidev-code-line-numbers",e.lines)}),N(()=>{var r;if(!a||!((r=e.ranges)!=null&&r.length))return;const t=a.calculateSince(e.at,e.ranges.length-1);a.register(d,t);const o=v(()=>t?Math.max(0,a.current-t.start+1):R),n=v(()=>e.finally==="last"?e.ranges.at(-1):e.finally.toString());y(()=>{if(!s.value)return;let i=e.ranges[o.value]??n.value;const g=i==="hide";s.value.classList.toggle($,g),g&&(i=e.ranges[o.value+1]??n.value);const h=s.value.querySelector(".shiki"),m=Array.from(h.querySelectorAll("code > .line")),H=m.length;if(Q(i,H,e.startLine,l=>[m[l]]),e.maxHeight){const l=Array.from(h.querySelectorAll(".line.highlighted"));l.reduce((f,L)=>L.offsetHeight+f,0)>s.value.offsetHeight?l[0].scrollIntoView({behavior:"smooth",block:"start"}):l.length>0&&l[Math.round((l.length-1)/2)].scrollIntoView({behavior:"smooth",block:"center"})}})});const{copied:p,copy:b}=q();function x(){var o,n;const t=(n=(o=s.value)==null?void 0:o.querySelector(".slidev-code"))==null?void 0:n.textContent;t&&b(t)}return(t,o)=>{const n=w,r=A;return c(),_("div",{ref_key:"el",ref:s,class:D(["slidev-code-wrapper relative group",{"slidev-code-line-numbers":e.lines}]),style:z({"max-height":e.maxHeight,"overflow-y":e.maxHeight?"scroll":void 0,"--start":e.startLine})},[M(t.$slots,"default"),u(k).codeCopy?(c(),_("button",{key:0,class:"slidev-code-copy absolute top-0 right-0 transition opacity-0 group-hover:opacity-20 hover:!opacity-100",title:u(p)?"Copied":"Copy",onClick:o[0]||(o[0]=i=>x())},[u(p)?(c(),C(n,{key:0,class:"p-2 w-8 h-8"})):(c(),C(r,{key:1,class:"p-2 w-8 h-8"}))],8,W)):V("",!0)],6)}}});export{O as _};
