import{_ as a,u as e,A as s,k as o,m as r,V as c,l as n,p as t,a as i,o as l,X as u,Y as p,b as m}from"./index.1704951491820.js";import{l as v,M as d}from"./mapconfig.1704951491820.js";const g={name:"map",components:{},setup(){const a=e();s();const i=o({});return r((()=>{!async function(){const[a,e,s]=await v(["esri/Map","esri/views/SceneView","esri/geometry/SpatialReference"],{url:d.jsapiurl,css:d.jscssurl}),o=new a({basemap:"gray-vector",ground:{surfaceColor:"#021425"}}),r=new e({spatialReference:s.WebMercator,container:"viewDiv_grayvector",map:o});r.on("click",(a=>{console.log(a),console.log(r.camera)}))}()})),c((()=>{})),n((()=>a.state.tagsViewRoutes.isTagsViewCurrenFull)),{...t(i)}}},f={class:"home-container"},w=[(a=>(u("data-v-c0591cc0"),a=a(),p(),a))((()=>m("div",{id:"viewDiv_grayvector"},null,-1)))];const y=a(g,[["render",function(a,e,s,o,r,c){return l(),i("div",f,w)}],["__scopeId","data-v-c0591cc0"]]);export{y as default};
