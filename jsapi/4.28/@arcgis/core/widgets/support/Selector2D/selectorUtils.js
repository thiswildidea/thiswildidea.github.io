/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{whenOrAbort as e,ignoreAbortErrors as s}from"../../../core/promiseUtils.js";import{getDisplayFieldName as t}from"../../../layers/support/fieldUtils.js";import{b as r,a as o,c as i,d as n}from"../../../chunks/layerUtils2.js";import{c as a,a as c}from"../../../chunks/drapedUtils.js";import{i as l}from"../../../chunks/layerViewUtils.js";import"../../../chunks/handleUtils.js";import"../../../core/Error.js";import"../../../core/lang.js";import"../../../chunks/typedArrayUtil.js";import"../../../chunks/Logger.js";import"../../../config.js";import"../../../chunks/maybe.js";import"../../../core/Accessor.js";import"../../../core/Handles.js";import"../../../core/accessorSupport/decorators/subclass.js";import"../../../chunks/metadata.js";import"../../../chunks/utils.js";import"../../../chunks/tracking.js";import"../../../chunks/ensureType.js";import"../../../core/accessorSupport/decorators/property.js";import"../../../chunks/ObjectPool.js";import"../../../chunks/ObservableBase.js";import"../../../core/scheduling.js";import"../../../chunks/nextTick.js";import"../../../chunks/PooledArray.js";import"../../../chunks/time.js";import"../../../core/sql.js";import"../../../intl.js";import"../../../chunks/date.js";import"../../../chunks/jsonMap.js";import"../../../chunks/locale.js";import"../../../chunks/timeZoneUtils.js";import"../../../chunks/datetime.js";import"../../../chunks/messages.js";import"../../../request.js";import"../../../kernel.js";import"../../../core/urlUtils.js";import"../../../core/JSONSupport.js";import"../../../chunks/tslib.es6.js";import"../../../chunks/assets.js";import"../../../chunks/mathUtils.js";import"../../../chunks/vec3.js";import"../../../chunks/vec3f64.js";import"../../../chunks/common.js";import"../../../chunks/arcadeOnDemand.js";import"../../../geometry.js";import"../../../geometry/Extent.js";import"../../../geometry/Geometry.js";import"../../../chunks/reader.js";import"../../../geometry/SpatialReference.js";import"../../../chunks/unitUtils.js";import"../../../chunks/Ellipsoid.js";import"../../../chunks/writer.js";import"../../../geometry/Point.js";import"../../../core/accessorSupport/decorators/cast.js";import"../../../geometry/support/webMercatorUtils.js";import"../../../geometry/Multipoint.js";import"../../../chunks/zmUtils.js";import"../../../geometry/Polygon.js";import"../../../chunks/Axis.js";import"../../../chunks/extentUtils.js";import"../../../chunks/aaBoundingRect.js";import"../../../geometry/Polyline.js";import"../../../chunks/typeUtils.js";import"../../../geometry/support/jsonUtils.js";async function p(){return import("../../../chunks/geometryEngineJSON.js").then((e=>e.g))}async function u(){return p().then((({contains:e,intersects:s,overlaps:t,simplify:r})=>({contains:e,intersects:s,overlaps:t,simplify:r})))}async function m(s){const{currentSelection:t,options:a,selector:c,signal:p,sources:u,view:m}=s;if(!u?.length)return{added:[],removed:[]};const{layers:f,layerViews:g,graphicsLayers:k}=function(e){const s=[],t=[],a=[];return e.forEach((e=>{r(e)?s.push(e):o(e)&&e.layers?.length?s.push(...e.layers.toArray()):i(e)&&e.sublayers?.length?a.push(...e.sublayers.toArray()):n(e)?a.push(e):l(e)&&t.push(e)})),{layers:s,layerViews:t,graphicsLayers:a}}(u),v=(await e(Promise.all([j(c,f,m,p),d(c,g,m,p),y(c,k,a,m)]),p)).flat();if(!t)return{added:v,removed:[]};const w=v.filter((e=>h(t.toArray(),e))),U=t.filter((e=>h(v,e))).toArray();return t.removeMany(U),t.addMany(w),{added:w,removed:U}}const y=async(e,s,t,r)=>v({candidates:s.flatMap((e=>e.graphics.toArray()))??[],selector:e,options:t,view:r}),j=async(e,t,r,o)=>{const i=await s(g({selector:e,signal:o,layers:t,view:r}));return i?i.filter((e=>"fulfilled"===e.status)).flatMap((e=>e.value)):[]},d=async(e,t,r,o)=>{const i=await s(f({selector:e,signal:o,layerViews:t,view:r}));return i?i.filter((e=>"fulfilled"===e.status)).flatMap((e=>e.value)):[]};function h(e,s){const t=e.includes(s),r=s.getObjectId(),o=null!=r,i=e.some((e=>{const t=s.layer===e.layer,i=o&&e.getObjectId()===r,n=s.uid===e.uid;return t&&(i||n)}));return!t&&!i}async function f(s){const{layerViews:t,selector:r,signal:o,view:i}=s;return e(Promise.allSettled(t.map((async e=>{const s=e.createQuery(),{outFields:t,geometry:n}=k(r,e.layer,i);return s.outFields=t,s.geometry=n,s.returnGeometry=!0,s.outSpatialReference=i.spatialReference,e.queryFeatures(s,{signal:o}).then((({features:e})=>e))}))),o)}async function g(s){const{layers:t,selector:r,signal:o,view:i}=s;return e(Promise.allSettled(t.map((async e=>e.queryFeatures(function(e,s,t,r){const{outFields:o,geometry:i}=k(s,t,r);return e.outFields=o,e.geometry=i,e.returnGeometry=!0,e.outSpatialReference=r.spatialReference,e}(e.createQuery(),r,e,i),{signal:o}).then((({features:e})=>e))))),o)}function k(e,s,r){const o="displayField"in s?s.displayField:null,i=t({displayField:o,fields:s.fields}),n=[s.objectIdField];null!=i&&s.fieldsIndex.has(i)&&n.push(i);const l="renderer"in s?a({renderer:s.renderer}):0;return{geometry:"point"===e.type?c(e,l,r):e,outFields:n}}async function v(e){const{selector:s,candidates:t,options:r,view:o}=e;if(!t?.length||!s||!r)return[];const{overlaps:i,intersects:n,contains:a}=r,{spatialReference:c}=o,l=s,p=await u();return t.filter((e=>{const s=e.geometry,t=i&&p.overlaps(c,l,s),r=n&&p.intersects(c,l,s),o=a&&p.contains(c,l,s);return t||r||o}))}export{u as getGeometryEngineOperations,k as getQueryOptionsFromLayer,f as getSelectionFromFeatureLayerViews,g as getSelectionFromFeatureLayers,m as getSelectionFromGeometry,v as getSelectionFromGeometryEngine,p as importGeometryEngine};
