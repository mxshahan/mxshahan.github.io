import{j as l,a as e}from"./index-8c00e51e.js";import{r as s,g as o,L as r}from"./vendor-b2d02dd1.js";import{L as d,H as c,F as m}from"./Footer-ef1dd290.js";import{H as x,P as p,I as g,a as u}from"./intro-bg-mobile-56c6084f.js";const b=()=>{const[a,i]=s.useState(!0),t=o();return s.useEffect(()=>{setTimeout(()=>{i(!1)},3e3)},[]),s.useEffect(()=>{const n=r.loadAnimation({container:document.querySelector("#hello"),animationData:x,renderer:"svg",loop:!0,autoplay:!0});return()=>{n.destroy()}}),l(d,{border:!0,className:" flex flex-col justify-between relative",children:[e(c,{className:`z-[999] ${a?"fixed":""}`}),e(p,{className:`${a?"opacity-100":"opacity-0 invisible transition-all duration-300"}`}),!a&&l("div",{className:"grid grid-cols-12 items-center justify-between xl:px-[5vw] xl:pb-[7vw] lg:px-20 md:px-0 sm:px-0 py-20 ",children:[e("div",{className:"xl:col-span-1 hidden xl:block"}),e("div",{className:"xl:col-span-4 lg:col-span-4 md:col-span-4 lg:block sm:hidden",children:e("div",{id:"hello",className:"xl:w-2/3 lg:w-4/5 md:w-full"})}),e("div",{className:"xl:col-span-6 lg:col-span-8 sm:col-span-12 md:col-span-8",children:l("div",{className:"relative w-full",children:[e("img",{src:g,className:"sm:hidden md:hidden lg:block w-full md:scale-105"}),e("img",{src:u,className:"lg:hidden sm:block md:block "}),l("div",{className:"absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full xxl:p-[15%] xl:p-[15%] lg:p-[15%] md:p-[15%]  md:px-[12%] xs:p-[15%] px-14 transition-all",children:[e("h2",{className:"text-default-dark font-bold lg:text-[2.7vw] md:text-[4vw] text-[5.5vw] xs:text-[5vw] xs:mb-3 md:mb-[5%] mb-6 ",children:"I’m Angella Tham —"}),l("p",{className:"font-light lg:leading-[1.8vw] md:leading-relaxed  sm:leading-normal transition-all lg:text-[1vw] md:text-sm text-xs xs:text-xs ",children:["A designer, illustrator, and doodler with 5+ years experience living in the big apple. Currently working my magic @ ",e("a",{href:"#",className:"link link-default",children:"EVERTRUE"})]})]})]})}),e("div",{className:"xl:col-span-1 hidden block"})]}),e(m,{left:{name:"say hi",onClick:()=>t("/say-hi")},right:{name:"see my design",onClick:()=>t("/works")},animatedCharacter:!0})]})};export{b as default};
