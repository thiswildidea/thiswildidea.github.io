import{_ as e,d as t,j as a,u as s,k as i,c as n,l as r,p as u,a as o,b as l,t as c,C as h,o as f}from"./index.1704809839420.js";const g=t({name:"layoutLinkView",setup(){const e=a(),t=s(),o=i({currentRouteMeta:{}}),l=n((()=>{let{isTagsview:e}=t.state.themeConfig.themeConfig;return e?"114px":"80px"}));return r((()=>e.path),(()=>{o.currentRouteMeta=e.meta}),{immediate:!0}),{setLinkHeight:l,...u(o)}}}),m=["href"];const k=e(g,[["render",function(e,t,a,s,i,n){return f(),o("div",{class:"layout-view-bg-white flex layout-view-link",style:h({height:`calc(100vh - ${e.setLinkHeight}`})},[l("a",{href:e.currentRouteMeta.isLink,target:"_blank",rel:"opener",class:"flex-margin"},c(e.$t(e.currentRouteMeta.title))+"："+c(e.currentRouteMeta.isLink),9,m)],4)}]]);export{k as default};
