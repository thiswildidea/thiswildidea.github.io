import{_ as e,u as a,A as s,k as o,m as t,V as n,l as r,p as c,a as i,o as l,X as p,Y as u,b as m}from"./index.1704951491820.js";import{l as v,M as f}from"./mapconfig.1704951491820.js";const d={name:"map",components:{},setup(){const e=a();s();const i=o({});return t((()=>{!async function(){const[e,a,s]=await v(["esri/Map","esri/views/SceneView","esri/geometry/SpatialReference"],{url:f.jsapiurl,css:f.jscssurl}),o=new e({basemap:"topo-vector",ground:{surfaceColor:"#021425"}}),t=new a({spatialReference:s.WebMercator,container:"viewDiv_topovector",map:o});t.on("click",(e=>{console.log(e),console.log(t.camera)}))}()})),n((()=>{})),r((()=>e.state.tagsViewRoutes.isTagsViewCurrenFull)),{...c(i)}}},w={class:"home-container"},g=[(e=>(p("data-v-f97ea224"),e=e(),u(),e))((()=>m("div",{id:"viewDiv_topovector"},null,-1)))];const _=e(d,[["render",function(e,a,s,o,t,n){return l(),i("div",w,g)}],["__scopeId","data-v-f97ea224"]]);export{_ as default};
