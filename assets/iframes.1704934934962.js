import{_ as e,d as a,j as s,u as i,k as t,c as r,m as n,l as o,p as m,Q as f,v as l,a as d,b as g,x as u,C as c,G as h,o as p}from"./index.1704934934962.js";const w=a({name:"layoutIfameView",setup(){const e=s(),a=i(),f=t({iframeLoading:!0,iframeUrl:""}),l=()=>{f.iframeUrl=e.meta.isLink,h((()=>{f.iframeLoading=!0;const e=document.getElementById("iframe");if(!e)return!1;e.onload=()=>{f.iframeLoading=!1}}))},d=r((()=>{let{isTagsview:e}=a.state.themeConfig.themeConfig,{isTagsViewCurrenFull:s}=a.state.tagsViewRoutes;return s?"1px":e?"85px":"51px"}));return n((()=>{l()})),o((()=>e.path),(()=>{l()})),{setIframeHeight:d,...m(f)}}}),x=["src"];const L=e(w,[["render",function(e,a,s,i,t,r){const n=f("loading");return l((p(),d("div",{class:"layout-view-bg-white flex mt1",style:c({height:`calc(100vh - ${e.setIframeHeight}`,border:"none"})},[l(g("iframe",{src:e.iframeUrl,frameborder:"0",height:"100%",width:"100%",id:"iframe"},null,8,x),[[u,!e.iframeLoading]])],4)),[[n,e.iframeLoading]])}]]);export{L as default};
