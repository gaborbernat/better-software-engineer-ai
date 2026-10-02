import{C as e,S as t,T as n,V as r,_ as i,b as a,bt as o,g as s,gt as c,m as l,y as u,z as d}from"../modules/shiki-DPa-EJu9.js";import{u as f}from"./utils-BOoD4j4e.js";import{x as p}from"../modules/vue-BFqZiZj7.js";import{b as m,bt as h}from"../index-CELK4tmB.js";import{t as g}from"./NoteDisplay-DfkDaX1y.js";var _={id:`page-root`},v={class:`m-4`},y={class:`mb-10`},b={class:`text-4xl font-bold mt-2`},x={class:`opacity-50`},S={class:`text-lg`},C={class:`font-bold flex gap-2`},w={class:`opacity-50`},T={key:0,class:`border-main mb-8`},E=n({__name:`print`,setup(n){let{slides:E,total:D}=m();p(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),h({title:`Notes - ${f.title}`});let O=s(()=>E.value.map(e=>e.meta?.slide).filter(e=>e!==void 0&&e.noteHTML!==``));return(n,s)=>(d(),a(`div`,_,[i(`div`,v,[i(`div`,y,[i(`h1`,b,o(c(f).title),1),i(`div`,x,o(new Date().toLocaleString()),1)]),(d(!0),a(l,null,r(O.value,(n,r)=>(d(),a(`div`,{key:r,class:`flex flex-col gap-4 break-inside-avoid-page`},[i(`div`,null,[i(`h2`,S,[i(`div`,C,[i(`div`,w,o(n?.no)+`/`+o(c(D)),1),t(` `+o(n?.title)+` `,1),s[0]||=i(`div`,{class:`flex-auto`},null,-1)])]),e(g,{"note-html":n.noteHTML,class:`max-w-full`},null,8,[`note-html`])]),r<O.value.length-1?(d(),a(`hr`,T)):u(`v-if`,!0)]))),128))])]))}});export{E as default};