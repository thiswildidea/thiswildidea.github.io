import{_ as e,u as a,A as i,k as t,m as o,V as s,l as n,p as r,a as c,o as l,X as d,Y as p,b as m}from"./index.1704982031072.js";import{a as u}from"./index.1704982031072101.js";import{l as y,M as w}from"./mapconfig.1704982031072.js";const f={name:"map",components:{},setup(){const e=a();i();const c=t({});return o((async()=>{!async function(e){const[a,i,t,o,s,n,r,c,l]=await y(["esri/Map","esri/views/SceneView","esri/layers/GeoJSONLayer","esri/core/reactiveUtils","esri/widgets/Expand","esri/Camera","esri/widgets/LayerList","esri/widgets/Legend","esri/geometry/SpatialReference"],{url:w.jsapiurl,css:w.jscssurl}),d=new a({basemap:"satellite",ground:{surfaceColor:"#021425"}}),p=new t({url:e.geojsonLayer.url,popupTemplate:e.geojsonLayer.template,renderer:e.geojsonLayer.renderer});d.add(p);const m=new i({spatialReference:l.WebMercator,container:"viewDiv_geojson",map:d}),u=new r({container:document.createElement("div"),id:"maplayerlist",view:m,listItemCreatedFunction:async function(e){e.item.actionsSections=[[{title:"Go to full extent",className:"esri-icon-zoom-out-fixed",id:"full-extent"}],[{title:"Increase opacity",className:"esri-icon-up",id:"increase-opacity"},{title:"Decrease opacity",className:"esri-icon-down",id:"decrease-opacity"}]]}});u.on("trigger-action",(e=>{const a=e.item.layer,i=e.action.id;"full-extent"===i?m.goTo(a.fullExtent):"increase-opacity"===i?a.opacity<1&&(a.opacity+=.25):"decrease-opacity"===i&&a.opacity>0&&(a.opacity-=.25)}));const f=new s({id:"layerlistonly",view:m,content:u.domNode,expandIconClass:"esri-icon-layers",expandTooltip:"LayerList",group:"top-left"});m.ui.add(f,"top-left");const g=new c({view:m});m.ui.add(g,"top-left"),new n({fov:e.camera.fov,heading:e.camera.heading,position:{x:e.camera.position.x,y:e.camera.position.y,z:e.camera.position.z,spatialReference:{wkid:3857}},tilt:e.camera.tilt}),o.once((()=>!0===(null==m?void 0:m.stationary))).then((()=>{})),o.on((()=>m),"click",(e=>{console.log("Click event emitted: ",e),console.log("view camera: ",m.camera)}))}(await u())})),s((()=>{})),n((()=>e.state.tagsViewRoutes.isTagsViewCurrenFull)),{...r(c)}}},g={class:"home-container"},v=[(e=>(d("data-v-9d9e8de2"),e=e(),p(),e))((()=>m("div",{id:"viewDiv_geojson"},null,-1)))];const x=e(f,[["render",function(e,a,i,t,o,s){return l(),c("div",g,v)}],["__scopeId","data-v-9d9e8de2"]]);export{x as default};
