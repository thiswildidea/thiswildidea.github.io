import{_ as a,u as s,A as e,k as r,m as o,V as n,l as i,p as t,a as c,o as l,X as m,Y as p,b as u}from"./index.1705987989573.js";import{g as d}from"./index.1705987989573112.js";import{l as f,M as g}from"./mapconfig.1705987989573.js";const w={name:"map",components:{},setup(){const a=s();e();const c=r({});return o((async()=>{!async function(a){const[s,e,r]=await f(["esri/Map","esri/views/SceneView","esri/geometry/SpatialReference"],{url:g.jsapiurl,css:g.jscssurl}),o=new s({basemap:a.basemap,ground:{surfaceColor:a.surfaceColor}}),n=new e({spatialReference:r.WebMercator,container:"viewDiv_basemap_darkgray",map:o});n.on("click",(a=>{console.log(a),console.log(n.camera)}))}(await d())})),n((()=>{})),i((()=>a.state.tagsViewRoutes.isTagsViewCurrenFull)),{...t(c)}}},v={class:"home-container"},_=[(a=>(m("data-v-ea607f20"),a=a(),p(),a))((()=>u("div",{id:"viewDiv_basemap_darkgray"},null,-1)))];const b=a(w,[["render",function(a,s,e,r,o,n){return l(),c("div",v,_)}],["__scopeId","data-v-ea607f20"]]);export{b as default};
