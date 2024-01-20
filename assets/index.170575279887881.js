import{_ as e,u as a,A as t,k as i,m as s,V as o,l as n,p as r,a as c,o as l,X as p,Y as d,b as m}from"./index.1705752798878.js";import{g as u}from"./index.1705752798878114.js";import{l as y,M as f}from"./mapconfig.1705752798878.js";const w={name:"map",components:{},setup(){const e=a();t();const c=i({});return s((async()=>{!async function(e){const[a,t,i,s,o,n,r,c,l,p,d]=await y(["esri/Map","esri/views/SceneView","esri/layers/FeatureLayer","esri/core/reactiveUtils","esri/widgets/Expand","esri/Camera","esri/widgets/Home","esri/widgets/Fullscreen","esri/widgets/LayerList","esri/widgets/Legend","esri/geometry/SpatialReference"],{url:f.jsapiurl,css:f.jscssurl}),m=new a({basemap:"terrain",ground:{surfaceColor:"#021425"}}),u=new i({url:e.featurelayerurl});m.add(u);const w=new t({spatialReference:d.WebMercator,container:"viewDiv_layerlist",map:m});w.ui.empty("top-left"),w.ui.empty("top-right"),w.ui.empty("bottom-left"),w.ui.empty("bottom-right");const g=new l({container:document.createElement("div"),id:"featurelayer_maplayerlist",view:w,listItemCreatedFunction:async function(e){e.item.actionsSections=[[{title:"Go to full extent",className:"esri-icon-zoom-out-fixed",id:"full-extent"}],[{title:"Increase opacity",className:"esri-icon-up",id:"increase-opacity"},{title:"Decrease opacity",className:"esri-icon-down",id:"decrease-opacity"}]]}});g.on("trigger-action",(e=>{const a=e.item.layer,t=e.action.id;"full-extent"===t?w.goTo(a.fullExtent):"increase-opacity"===t?a.opacity<1&&(a.opacity+=.25):"decrease-opacity"===t&&a.opacity>0&&(a.opacity-=.25)}));const v=new o({id:"featurelayer_maplayerlistExpand",view:w,content:g.domNode,expandIconClass:"esri-icon-layers",expandTooltip:"LayerList",group:"top-left"});w.ui.add(v,"top-left");const x=new n({fov:e.camera.fov,heading:e.camera.heading,position:{x:e.camera.position.x,y:e.camera.position.y,z:e.camera.position.z,spatialReference:{wkid:3857}},tilt:e.camera.tilt});s.once((()=>!0===(null==w?void 0:w.stationary))).then((()=>{w.goTo(x,e.cameraoptions)})),s.on((()=>w),"click",(e=>{console.log("Click event emitted: ",e),console.log("view camera: ",w.camera)}))}(await u())})),o((()=>{})),n((()=>e.state.tagsViewRoutes.isTagsViewCurrenFull)),{...r(c)}}},g={class:"home-container"},v=[(e=>(p("data-v-3b96ad5c"),e=e(),d(),e))((()=>m("div",{id:"viewDiv_layerlist"},null,-1)))];const x=e(w,[["render",function(e,a,t,i,s,o){return l(),c("div",g,v)}],["__scopeId","data-v-3b96ad5c"]]);export{x as default};
