// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("require exports ../../request ../../core/Error ../../layers/support/featureQueryAll ../../portal/PortalItem ../../rest/support/FeatureSet".split(" "),function(p,l,q,r,t,m,u){async function n(a,b){return"Utility Network Layer"===a?({default:a}=await new Promise((d,e)=>p(["../UtilityNetwork"],h=>d(Object.freeze(Object.defineProperty({__proto__:null,default:h},Symbol.toStringTag,{value:"Module"}))),e)),new a({layerUrl:b})):null}l.getFeaturesFromLayers=async function(a,b){const d=a.layers,e=a.layerInfos,
h=a.returnGeometry||!1,g=a.outSpatialReference;await Promise.all(d.map(async c=>{await c.load()}));return(await Promise.all(d.map(async c=>{var k=e.find(v=>v.layerUrl===c.parsedUrl?.path);if(!k?.objectIds?.length)return{layer:c,featureSet:void 0};const f=c.createQuery();f.returnGeometry=h;f.outFields=k.outFields||["*"];f.outSpatialReference=g;f.gdbVersion=c.gdbVersion;f.objectIds=k.objectIds;b&&(f.where="1\x3d1");k=u.fromJSON(await t.queryAllJSON(c,f));return{layer:c,featureSet:k}}))).filter(c=>void 0!==
c.featureSet)};l.getObjectIdsFromElements=function(a,b){const d=[],e=new Map;for(const g of b){b=a.getLayerIdBySourceId(g.networkSourceId);if(null==b)continue;let c=e.get(b);void 0===c&&(c=[]);c.push(g.objectId);e.set(b,c)}const h=a.featureServiceUrl;e.forEach((g,c)=>d.push({layerUrl:`${h}/${c}`,objectIds:g}));return d};l.networkFromPortalItem=async function(a){a="portalItem"in a?a:{portalItem:a};!a.portalItem||a.portalItem instanceof m||(a={...a,portalItem:new m(a.portalItem)});a=a.portalItem;await a.load();
if("Feature Service"!==a.type)throw new r("portal:unknown-item-type","Unknown item type '${type}'",{type:a.type});a=a.url;var b=await q(a,{responseType:"json",query:{f:"json"}});return b.data.type?.includes("Network Layer")?n(b.data.type,a):b.data.layers&&(b=b.data.layers.find(d=>d.type.includes("Network Layer")))?n(b.type,`${a}/${b.id}`):null};Object.defineProperty(l,Symbol.toStringTag,{value:"Module"})});