/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{e,a as r,c as t}from"./euclideanAreaMeasurementUtils.js";import"../geometry.js";import{a as s}from"./unitFormatUtils.js";import{geodesicArea as o}from"../geometry/geometryEngine.js";import{s as n}from"./vec3.js";import{c as a}from"./vec3f64.js";import{a as u}from"./projectBuffer.js";import{geodesicAreas as i}from"../geometry/support/geodesicUtils.js";import{g as m}from"./automaticLengthMeasurementUtils.js";import c from"../geometry/SpatialReference.js";const f=a();function p(e){return s(Math.abs(i([e],"square-meters")[0]),"square-meters")}function l(e){try{return s(Math.abs(o(e,"square-meters")),"square-meters")}catch(e){return null}}function g(e){const r=[];return function({hasZ:e,spatialReference:r,rings:t},s,o=0){const a=u(r);if(null==a)return!1;const i=e?e=>e:e=>n(f,e[0],e[1],o);for(const e of t){const r=[];for(const t of e){const e=[0,0,o];a(i(t),0,e,0),r.push(e)}s.push(r)}return!0}(e,r)?s(Math.abs(i([{type:"polygon",rings:r,spatialReference:c.WGS84}],"square-meters")[0]),"square-meters"):null}function j(s,o,n=t()){if("on-the-ground"===o){const r=function(e){const{spatialReference:r}=e;return m(r,p,l,g,e)}(s);return null!=r?r:e(s,n)}return r(s,n)}function h(e,r=t()){return j(e,"on-the-ground",r)}export{j as a,h as b};
