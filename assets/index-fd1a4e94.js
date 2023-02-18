import{j as p,c as L,a as P,b as S,t as A,u as g,O as y,N as v,R as i,r as I,P as w,B as O,d as k,e as l,f as x}from"./vendor-b2d02dd1.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))d(o);new MutationObserver(o=>{for(const t of o)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&d(c)}).observe(document,{childList:!0,subtree:!0});function s(o){const t={};return o.integrity&&(t.integrity=o.integrity),o.referrerpolicy&&(t.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?t.credentials="include":o.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function d(o){if(o.ep)return;o.ep=!0;const t=s(o);fetch(o.href,t)}})();const J=p.Fragment,e=p.jsx,h=p.jsxs,T="modulepreload",z=function(n){return"/"+n},_={},u=function(r,s,d){if(!s||s.length===0)return r();const o=document.getElementsByTagName("link");return Promise.all(s.map(t=>{if(t=z(t),t in _)return;_[t]=!0;const c=t.endsWith(".css"),R=c?'[rel="stylesheet"]':"";if(!!d)for(let m=o.length-1;m>=0;m--){const f=o[m];if(f.href===t&&(!c||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${t}"]${R}`))return;const a=document.createElement("link");if(a.rel=c?"stylesheet":T,c||(a.as="script",a.crossOrigin=""),a.href=t,document.head.appendChild(a),c)return new Promise((m,f)=>{a.addEventListener("load",m),a.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${t}`)))})})).then(()=>r())},E=L({name:"user",initialState:{isLoggedIn:!1},reducers:{setisLoggedIn:(n,r)=>{n.isLoggedIn=r.payload}}}),{setisLoggedIn:Q}=E.actions,N=E.reducer,V=P({user:N}),C=S({reducer:V,devTools:!1,middleware:[A]}),D=()=>g(r=>{var s;return(s=r==null?void 0:r.user)==null?void 0:s.isLoggedIn})?e(y,{}):e(v,{to:"/auth"}),b=()=>g(r=>{var s;return(s=r==null?void 0:r.user)==null?void 0:s.isLoggedIn})?e(v,{to:"/works"}):e(y,{}),j=i.createContext(),B=({children:n})=>(I.useEffect(()=>{window.addEventListener("mousemove",r=>{const s=r.clientY,d=r.clientX,o=document.querySelector("#cursor");o.style=`top: ${s-20}px; left: ${d-20}px`;const t=r.target;window.getComputedStyle(t).getPropertyValue("cursor")==="pointer"?o.src="/icons/diamond-cursor-clicked.svg":o.src="/icons/diamond-cursor-notclicked.svg"})},[]),h(j.Provider,{value:{},children:[e("img",{src:"/icons/diamond-cursor-notclicked.svg",className:"w-[2vw] fixed z-[999] -top-10 -left-10 right-0 pointer-events-none",id:"cursor"}),n]})),F=i.lazy(()=>u(()=>import("./Home-39f6ca78.js"),["assets/Home-39f6ca78.js","assets/vendor-b2d02dd1.js","assets/Footer-c7959f92.js","assets/intro-bg-mobile-16985807.js"])),$=i.lazy(()=>u(()=>import("./HomeAlternative-32dd400f.js"),["assets/HomeAlternative-32dd400f.js","assets/vendor-b2d02dd1.js","assets/Footer-c7959f92.js","assets/intro-bg-mobile-16985807.js"])),q=i.lazy(()=>u(()=>import("./SayHi-8e2860f2.js"),["assets/SayHi-8e2860f2.js","assets/vendor-b2d02dd1.js","assets/Footer-c7959f92.js"])),H=i.lazy(()=>u(()=>import("./NotFound-162a4188.js"),["assets/NotFound-162a4188.js","assets/vendor-b2d02dd1.js"])),U=i.lazy(()=>u(()=>import("./Authentication-15eb4fa0.js"),["assets/Authentication-15eb4fa0.js","assets/vendor-b2d02dd1.js","assets/Footer-c7959f92.js"])),W=i.lazy(()=>u(()=>import("./Works-6bc45cc9.js"),["assets/Works-6bc45cc9.js","assets/Portfolio-caf679a0.js","assets/Footer-c7959f92.js","assets/vendor-b2d02dd1.js"])),X=i.lazy(()=>u(()=>import("./FunStuff-4b5ebeb4.js"),["assets/FunStuff-4b5ebeb4.js","assets/Portfolio-caf679a0.js","assets/Footer-c7959f92.js","assets/vendor-b2d02dd1.js"])),Y=i.lazy(()=>u(()=>import("./Resume-bd1ef972.js"),["assets/Resume-bd1ef972.js","assets/vendor-b2d02dd1.js"])),K=()=>{const n=r=>e(i.Suspense,{fallback:e("div",{className:"w-full h-screen bg-white"}),children:e(r,{})});return e(B,{children:e(w,{store:C,children:e(O,{children:h(k,{children:[e(l,{index:!0,element:n(F)}),e(l,{path:"/home-alternative",element:n($)}),e(l,{path:"say-hi",element:n(q)}),e(l,{path:"resume",element:n(Y)}),e(l,{element:e(b,{}),children:e(l,{path:"auth",element:n(U)})}),h(l,{element:e(D,{}),children:[e(l,{path:"works",element:n(W)}),e(l,{path:"fun-stuff",element:n(X)})]}),e(l,{path:"*",element:n(H)})]})})})})};x.createRoot(document.getElementById("root")).render(e(i.StrictMode,{children:e(K,{})}));export{J as F,h as a,e as j,Q as s};
