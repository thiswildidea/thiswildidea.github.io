import{_ as a,u as e,A as s,k as o,m as r,V as n,l as t,p as c,a as i,o as l,X as m,Y as p,b as u}from"./index.1705987989573.js";import{c as d}from"./index.1705987989573112.js";import{l as f,M as v}from"./mapconfig.1705987989573.js";const w={name:"map",components:{},setup(){const a=e();s();const i=o({});return r((async()=>{!async function(a){const[e,s,o]=await f(["esri/Map","esri/views/SceneView","esri/geometry/SpatialReference"],{url:v.jsapiurl,css:v.jscssurl}),r=new e({basemap:a.basemap,ground:{surfaceColor:a.surfaceColor}}),n=new s({spatialReference:o.WebMercator,container:"viewDiv_basemap_grayvector",map:r});n.on("click",(a=>{console.log(a),console.log(n.camera)}))}(await d())})),n((()=>{})),t((()=>a.state.tagsViewRoutes.isTagsViewCurrenFull)),{...c(i)}}},g={class:"home-container"},b=[(a=>(m("data-v-ae21b490"),a=a(),p(),a))((()=>u("div",{id:"viewDiv_basemap_grayvector"},null,-1)))];const _=a(w,[["render",function(a,e,s,o,r,n){return l(),i("div",g,b)}],["__scopeId","data-v-ae21b490"]]);export{_ as default};
