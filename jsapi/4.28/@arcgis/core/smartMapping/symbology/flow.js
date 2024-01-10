/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import r from"../../Color.js";import{i as s}from"../../chunks/typedArrayUtil.js";import{sequentialLightSchemes as t,sequentialDarkSchemes as o}from"./color.js";import{c as e}from"../../chunks/colors2.js";import{c as i,g as m,a as p,f as a,b as n}from"../../chunks/symbologyUtils.js";import"../../chunks/colorUtils.js";import"../../chunks/mathUtils.js";import"../../chunks/vec3.js";import"../../chunks/vec3f64.js";import"../../chunks/common.js";import"../../chunks/ensureType.js";import"../../chunks/Logger.js";import"../../config.js";import"../../core/lang.js";import"../../chunks/utils17.js";import"../../chunks/screenUtils.js";import"../../chunks/utils2.js";import"../../chunks/date.js";import"../../chunks/jsonMap.js";import"../../chunks/locale.js";import"../../chunks/handleUtils.js";import"../../chunks/timeZoneUtils.js";import"../../chunks/datetime.js";import"../../layers/support/fieldUtils.js";import"../../core/Error.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../core/accessorSupport/decorators/subclass.js";import"../../chunks/metadata.js";import"../../chunks/utils.js";import"../../chunks/tracking.js";import"../../core/accessorSupport/decorators/property.js";import"../../chunks/ObjectPool.js";import"../../chunks/ObservableBase.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../chunks/PooledArray.js";import"../../core/promiseUtils.js";import"../../chunks/time.js";import"../../core/sql.js";import"../../intl.js";import"../../chunks/messages.js";import"../../request.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../core/JSONSupport.js";import"../../chunks/tslib.es6.js";import"../../chunks/assets.js";import"../../chunks/arcadeOnDemand.js";import"../../geometry.js";import"../../geometry/Extent.js";import"../../geometry/Geometry.js";import"../../chunks/reader.js";import"../../geometry/SpatialReference.js";import"../../chunks/unitUtils.js";import"../../chunks/Ellipsoid.js";import"../../chunks/writer.js";import"../../geometry/Point.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/support/webMercatorUtils.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/Axis.js";import"../../chunks/extentUtils.js";import"../../chunks/aaBoundingRect.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";import"../../chunks/basemapUtils.js";import"../../Basemap.js";import"../../core/Collection.js";import"../../core/Evented.js";import"../../chunks/shared.js";import"../../chunks/SimpleObservable.js";import"../../chunks/collectionUtils.js";import"../../core/Loadable.js";import"../../core/Promise.js";import"../../chunks/loadAll.js";import"../../chunks/asyncUtils.js";import"../../portal/Portal.js";import"../../portal/PortalGroup.js";import"../../portal/PortalQueryParams.js";import"../../portal/PortalQueryResult.js";import"../../portal/PortalUser.js";import"../../portal/PortalFolder.js";import"../../portal/PortalItem.js";import"../../portal/PortalItemResource.js";import"../../portal/PortalRating.js";import"../../support/BasemapStyle.js";import"../../chunks/writeUtils.js";import"../../chunks/layerUtils2.js";import"../../chunks/utils3.js";import"../../chunks/mat4.js";const c={color:"#4c64c9",density:.8,layerEffect:"drop-shadow(1px, 1px, 3px, rgba(0,0,0,0.75))"},l={color:"#00ffff",density:.8,layerEffect:"bloom(1.4, 0.6px, 0)"},u={flowSpeed:10,trailLength:100,trailWidth:1,trailCap:"butt",minSize:1,maxSize:4},j={flowSpeed:3,trailLength:.7,trailWidth:8,trailCap:"butt",minSize:4,maxSize:16},h=i({themeDictionary:{"flow-line":{name:"flow-line",label:"TODO",description:"TODO",schemes:{default:{light:{common:{...u,...c},primary:"seq-lines-purple-brown",secondary:[...t,...o].filter((r=>"seq-lines-purple-brown"!==r))},dark:{common:{...u,...l},primary:"seq-mentone-beach",secondary:[...o,...t].filter((r=>"seq-mentone-beach"!==r))}}}},"wave-front":{name:"wave-front",label:"TODO",description:"TODO",schemes:{default:{light:{common:{...j,...c},primary:"seq-lines-purple-brown",secondary:[...t,...o].filter((r=>"seq-lines-purple-brown"!==r))},dark:{common:{...j,...l},primary:"seq-mentone-beach",secondary:[...o,...t].filter((r=>"seq-mentone-beach"!==r))}}}}}});function k(r){return m(h,r)}function d(r){const t=r.theme||"flow-line",o=p({basemap:r.basemap,basemapTheme:r.basemapTheme,theme:h.get(t)});if(!o)return;const{schemesInfo:e,basemapId:i,basemapTheme:m}=o,a=e.common,n={...r,basemap:i};return{primaryScheme:g(n,e.primary,a),secondarySchemes:e.secondary.map((r=>g(n,r,a))).filter(s),basemapId:i,basemapTheme:m}}function y(r){return a(r.name,d(r))}function f(r){return n(r.includedTags,r.excludedTags,d(r))}function b(s){if(!s)return;const t={...s};return t.colors=t.colors.map((s=>new r(s))),t.tags=[...t.tags],t.color&&(t.color=new r(t.color)),t}function g(s,t,o){const i=s.theme||"flow-line",m=e[t];if(!m)return;const p=m.stops;return{id:`${i}/${s.basemap}/${t}`,name:m.name,tags:[...m.tags],theme:i,color:new r(o.color),colors:p.map((s=>new r(s))),density:o.density,flowSpeed:o.flowSpeed,trailLength:"wave-front"===i&&s.hasSizeVariable?2*o.trailLength:o.trailLength,trailWidth:o.trailWidth,trailCap:o.trailCap,layerEffect:o.layerEffect,minSize:o.minSize,maxSize:o.maxSize,minOpacity:.25,maxOpacity:1}}export{b as cloneScheme,y as getSchemeByName,d as getSchemes,f as getSchemesByTag,k as getThemes};
