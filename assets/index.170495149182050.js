import{_ as e,u as s,A as a,k as n,m as o,V as r,l as c,p as i,a as t,o as l,X as u,Y as p,b as m}from"./index.1704951491820.js";import{l as d,M as f}from"./mapconfig.1704951491820.js";const v={name:"map",components:{},setup(){const e=s();a();const t=n({});return o((()=>{!async function(){const[e,s,a]=await d(["esri/Map","esri/views/SceneView","esri/geometry/SpatialReference"],{url:f.jsapiurl,css:f.jscssurl}),n=new e({basemap:"oceans",ground:{surfaceColor:"#021425"}}),o=new s({spatialReference:a.WebMercator,container:"viewDiv_oceans",map:n});o.on("click",(e=>{console.log(e),console.log(o.camera)}))}()})),r((()=>{})),c((()=>e.state.tagsViewRoutes.isTagsViewCurrenFull)),{...i(t)}}},w={class:"home-container"},g=[(e=>(u("data-v-275d885e"),e=e(),p(),e))((()=>m("div",{id:"viewDiv_oceans"},null,-1)))];const _=e(v,[["render",function(e,s,a,n,o,r){return l(),t("div",w,g)}],["__scopeId","data-v-275d885e"]]);export{_ as default};
