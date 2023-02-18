import{a as e,j as l,F as b}from"./index-8c00e51e.js";import{I as g,L as k,H as y,F as I}from"./Footer-ef1dd290.js";import{r as x,g as C}from"./vendor-b2d02dd1.js";const j=({title:a="",categories:s=[],thumbnail:o="",thumbnailHover:f="",onClick:d=()=>{},titleColor:u})=>{const[t,m]=x.useState({backgroundImage:`url(${o})`}),[r,c]=x.useState(!1);return e("div",{style:t,className:"xl:h-[15vw] lg:h-[15vw] md:h-60 h-40 xs:h-28 xl:rounded-[0.4vw] rounded-md  cursor-pointer bg-no-repeat bg-cover bg-center transition-all flex items-end ",onMouseEnter:()=>{m({backgroundImage:`url(${f})`}),c(!0)},onMouseLeave:()=>{m({backgroundImage:`url(${o})`}),c(!1)},onClick:d,children:l("div",{className:`text-center leading-tight w-full px-3 py-4 transition-all text-default-dark ${r?"opacity-100":"opacity-0"}`,style:{color:u},children:[e("h2",{className:"font-bold text-[1vw]",children:a}),e("p",{className:"font-light text-[0.8vw]",children:s.join(", ")})]})},a)},M=({src:a})=>{const s=x.useRef();return e("div",{className:"relative lg:p-20 md:p-5 sm:p-5",children:l("video",{ref:s,width:"320",height:"240",controls:!0,className:" w-full",children:[e("source",{src:a,type:"video/mp4"}),"Your browser does not support the video tag."]})})},S=({children:a,className:s="",...o})=>e("div",{...o,className:` pt-10 pb-10 ${s}`,children:a}),p=({open:a=!1,onClose:s=()=>{},children:o})=>e(b,{children:l("div",{className:"fixed inset-0 z-10 overflow-y-auto",children:[e("div",{className:"fixed inset-0 w-full h-full bg-default-dark opacity-90",onClick:()=>s()}),e("div",{className:"flex items-center min-h-screen",children:e("div",{className:"relative w-full flex",children:o})})]})});p.Card=({children:a})=>e("div",{className:"relative w-full p-4 mx-auto bg-white rounded-md shadow-lg",children:a});const H=p,P=({open:a,onClose:s=()=>{},next:o=()=>{},prev:f=()=>{},images:d=[],videos:u=[],title:t="",description:m="",role:r=[],deliverable:c=[],team:w=[],created:v="",disabled:h})=>e(H,{open:a,onClose:s,children:l("div",{className:"flex lg:h-[92vh] md:h-[90vh] w-full lg:overflow-hidden lg:flex-row md:flex-col sm:flex-col lg:m-[2vw] md:m-5 sm:m-5 ",children:[l("div",{className:" bg-white lg:p-[5vw] md:p-10 sm:p-10 w-full md:overflow-y-auto sm:overflow-y-auto  no-scrollbar  md:flex md:flex-col sm:flex sm:flex-col lg:mr-[2vw] h-full",children:[e("div",{className:"mb-10 lg:hidden",children:e(g,{name:"close",className:"cursor-pointer transition-all ml-auto w-[20px]",onClick:s,hoverIcon:"close-hover"})}),l("div",{className:"mb-5 block lg:hidden md:overflow-y-auto sm:overflow-y-auto no-scrollbar",children:[e("h2",{className:"text-default-dark font-medium xl:leading-[2.5vw] xl:text-[2.5vw] lg:text-[2.5vw] md:text-2xl sm:text-xl xl:mb-[2vw] mb-3 sm:mb-3",children:t}),e("p",{className:"text-default-dark font-light xl:leading-[1.65vw] xl:text-[1vw] sm:text-xs",children:m})]}),l("div",{className:"w-full flex lg:flex-row flex-col xl:gap-[3vw] gap-10 lg:overflow-hidden h-full md:overflow-y-auto sm:overflow-y-auto  no-scrollbar",children:[l("div",{className:"lg:w-2/3 md:w-full lg:overflow-y-auto bg-white no-scrollbar",children:[d.map(n=>e("img",{src:n,alt:"Product Image",className:"w-full"},n)),u.map(n=>e(M,{src:n},n))]}),l("div",{className:"lg:w-1/3 md:w-full  flex flex-col",children:[l("div",{className:"flex-1 lg:overflow-y-auto no-scrollbar",children:[l("div",{className:"lg:block hidden",children:[e("h2",{className:"text-default-dark font-medium xl:leading-[2.5vw] xl:text-[2.5vw] lg:text-[2.5vw] md:text-2xl sm:text-xl xl:mb-[2vw] mb-10 sm:mb-3",children:t}),e("p",{className:"text-default-dark font-light xl:leading-[1.6vw] xl:text-[1vw] sm:text-xs",children:m})]}),l("div",{className:"mt-16",children:[e("p",{className:"text-default-pink leading-normal xl:text-[1.3vw] text-lg",children:"deliverables"}),e("p",{className:"text-default-dark font-light  xl:leading-[1.65vw] xl:text-[1vw] sm:text-xs",children:c.join(", ")})]}),l("div",{className:"mt-10",children:[e("p",{className:"text-default-pink leading-normal xl:text-[1.3vw] text-lg",children:"role"}),e("p",{className:"text-default-dark font-light  xl:leading-[1.65vw] xl:text-[1vw] sm:text-xs",children:r.join(", ")})]}),l("div",{className:"mt-10",children:[e("p",{className:"text-default-pink leading-normal xl:text-[1.3vw] text-lg",children:"team"}),w.length>0?w.map(n=>l("p",{className:"text-default-dark font-light  xl:leading-[1.65vw] xl:text-[1vw] sm:text-xs",children:[n.role,": ",n.name]})):e("p",{className:"text-default-dark font-light  xl:leading-[1.65vw] xl:text-[1vw] sm:text-xs",children:"N/A"})]})]}),e("div",{className:"mt-5 text-right",children:l("p",{className:"text-default-pink xl:text-[0.8vw] text-sm group cursor-pointer relative inline-block link link-default leading-normal",children:["created in ",v]})})]})]})]}),l("div",{className:" p-5  md:p-10  sm:p-10  lg:w-[10vw] lg:px-[1vw] w-full flex flex-col justify-between items-center lg:bg-transparent md:bg-white sm:bg-white",children:[e("div",{className:"md:hidden sm:hidden lg:block",children:e(g,{name:"close",className:"cursor-pointer transition-all w-[20px] lg:w-[1.3vw]",onClick:s,hoverIcon:"close-hover"})}),e("div",{className:"md:hidden sm:hidden lg:block",children:e(g,{name:"scroll",hoverIcon:"scroll-hover",className:"w-[40px] lg:w-[2.8vw] "})}),l("div",{className:"flex justify-between w-full ",children:[e(g,{name:"arrow-left",hoverIcon:"arrow-left-hover",className:"lg:w-[1.3vw] w-[20px]",onClick:()=>{h!=="prev"&&f()},disabled:h==="prev"}),e(g,{name:"arrow-right",hoverIcon:"arrow-right-hover",className:"lg:w-[1.3vw] w-[20px] ",disabled:h==="next",onClick:()=>{h!=="next"&&o()}})]})]})]})}),L=({title:a="",icon:s="",banner:o="",description:f="",data:d=[]})=>{const u=C(),[t,m]=x.useState(),[r,c]=x.useState(),[w,v]=x.useState(),h=()=>{c(r+1)},n=()=>{c(r-1)};return x.useEffect(()=>{r>=0?(r<d.length&&m(d[r]),r===0?v("prev"):r===d.length-1?v("next"):v()):m(),console.log(r,d.length)},[r]),l(k,{className:"flex flex-col justify-between items-center sm:h-screen",border:!0,children:[l("div",{className:"h-[85%]",children:[e(y,{nav:!0,className:""}),l(S,{className:"sm:p-5 sm:pt-10 lg:pt-[4vw] sm:flex sm:flex-col h-full",children:[l("div",{className:"grid grid-cols-2 xl:gap-[4vw] gap-16 items-center mb-4 lg:mb-[2.5vw] ",children:[e("div",{className:"sm:hidden relative",children:e("img",{src:o,alt:"Banner",className:"w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"})}),l("div",{className:"sm:col-span-2",children:[l("div",{className:"flex items-center xl:mb-[1.2vw] lg:mb-4 mb-3",children:[e("h2",{className:"text-default-dark font-[500] leading-normal xl:text-[3vw] lg:text-[3vw] md:text-[3vw] sm:text-xl",children:a}),e(g,{className:"xl:w-[2.5vw] w-14 sm:w-5 ml-2",name:s})]}),e("p",{className:"text-default-dark font-light lg:leading-[1.8] xl:leading-normal md:leading-[1.5] leading-5 xl:text-[1vw] lg:text-[1.1vw] md:text-[1.5vw] sm:text-xs ",children:f})]})]}),e("div",{className:"grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 sm:gap-4 xl:gap-[2vw] overflow-y-auto ",children:d.map((i,N)=>e(j,{title:i.title,categories:i.categories,thumbnail:i.thumbnail,thumbnailHover:i.thumbnail_hover,titleColor:i.title_color,onClick:()=>{c(N)}},i.title))})]})]}),e(I,{showCopyright:!0,left:{name:"go back",onClick:()=>u("/say-hi")},right:{name:"see my resume",onClick:()=>{const i=document.createElement("a");i.href="/resume",i.target="_blank",i.click()}}}),t&&e(P,{open:t,onClose:()=>{c()},next:h,prev:n,images:t.images,videos:t.videos,title:t.title,description:t.description,role:t.role,team:t.team,deliverable:t.deliverable,created:t.created,disabled:w})]})};export{L as P};