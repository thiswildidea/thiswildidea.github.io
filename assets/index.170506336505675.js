import{at as e,_ as a,u as t,A as i,k as s,m as o,V as n,l as r,p as c,a as l,o as d,X as p,Y as m,b as u}from"./index.1705063365056.js";import{l as y,M as f}from"./mapconfig.1705063365056.js";const g={name:"map",components:{},setup(){const a=t();i();const l=s({});return o((async()=>{!async function(e){const[a,t,i,s,o,n,r,c,l,d,p]=await y(["esri/Map","esri/views/SceneView","esri/layers/FeatureLayer","esri/core/reactiveUtils","esri/widgets/Expand","esri/Camera","esri/widgets/Home","esri/widgets/Fullscreen","esri/widgets/LayerList","esri/widgets/Legend","esri/geometry/SpatialReference"],{url:f.jsapiurl,css:f.jscssurl}),m=new a({basemap:"terrain",ground:{surfaceColor:"#021425"}}),u=new i({url:e.featurelayerurl});m.add(u);const g=new t({spatialReference:p.WebMercator,container:"viewDiv_layerlist",map:m});g.ui.empty("top-left"),g.ui.empty("top-right"),g.ui.empty("bottom-left"),g.ui.empty("bottom-right");const w=new l({container:document.createElement("div"),id:"featurelayer_maplayerlist",view:g,listItemCreatedFunction:async function(e){e.item.actionsSections=[[{title:"Go to full extent",className:"esri-icon-zoom-out-fixed",id:"full-extent"}],[{title:"Increase opacity",className:"esri-icon-up",id:"increase-opacity"},{title:"Decrease opacity",className:"esri-icon-down",id:"decrease-opacity"}]]}});w.on("trigger-action",(e=>{const a=e.item.layer,t=e.action.id;"full-extent"===t?g.goTo(a.fullExtent):"increase-opacity"===t?a.opacity<1&&(a.opacity+=.25):"decrease-opacity"===t&&a.opacity>0&&(a.opacity-=.25)}));const v=new o({id:"featurelayer_maplayerlistExpand",view:g,content:w.domNode,expandIconClass:"esri-icon-layers",expandTooltip:"LayerList",group:"top-left"});g.ui.add(v,"top-left");const x=new n({fov:e.camera.fov,heading:e.camera.heading,position:{x:e.camera.position.x,y:e.camera.position.y,z:e.camera.position.z,spatialReference:{wkid:3857}},tilt:e.camera.tilt});s.once((()=>!0===(null==g?void 0:g.stationary))).then((()=>{g.goTo(x,e.cameraoptions)})),s.on((()=>g),"click",(e=>{console.log("Click event emitted: ",e),console.log("view camera: ",g.camera)}))}(await e({url:"/config/widgets/layerlist.json",method:"get"}))})),n((()=>{})),r((()=>a.state.tagsViewRoutes.isTagsViewCurrenFull)),{...c(l)}}},w={class:"home-container"},v=[(e=>(p("data-v-3b96ad5c"),e=e(),m(),e))((()=>u("div",{id:"viewDiv_layerlist"},null,-1)))];const x=a(g,[["render",function(e,a,t,i,s,o){return d(),l("div",w,v)}],["__scopeId","data-v-3b96ad5c"]]);export{x as default};
