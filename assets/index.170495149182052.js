import{_ as e,u as a,A as s,k as t,m as n,V as o,l as i,p as r,a as c,o as l,X as u,Y as p,b as m}from"./index.1704951491820.js";import{l as d,M as f}from"./mapconfig.1704951491820.js";const v={name:"map",components:{},setup(){const e=a();s();const c=t({});return n((()=>{!async function(){const[e,a,s]=await d(["esri/Map","esri/views/SceneView","esri/geometry/SpatialReference"],{url:f.jsapiurl,css:f.jscssurl}),t=new e({basemap:"satellite",ground:{surfaceColor:"#021425"}}),n=new a({spatialReference:s.WebMercator,container:"viewDiv_satellite",map:t});n.on("click",(e=>{console.log(e),console.log(n.camera)}))}()})),o((()=>{})),i((()=>e.state.tagsViewRoutes.isTagsViewCurrenFull)),{...r(c)}}},w={class:"home-container"},g=[(e=>(u("data-v-a26e63dc"),e=e(),p(),e))((()=>m("div",{id:"viewDiv_satellite"},null,-1)))];const _=e(v,[["render",function(e,a,s,t,n,o){return l(),c("div",w,g)}],["__scopeId","data-v-a26e63dc"]]);export{_ as default};
