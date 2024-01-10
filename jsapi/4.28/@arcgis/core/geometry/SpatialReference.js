/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{_ as t}from"../chunks/tslib.es6.js";import{JSONSupport as e}from"../core/JSONSupport.js";import{clone as r}from"../core/lang.js";import{W as i,a as s,P as o,i as n,b as l,c as a,d as p,g as c,e as u,f as m}from"../chunks/unitUtils.js";import{I as d}from"../chunks/ensureType.js";import{property as k}from"../core/accessorSupport/decorators/property.js";import{subclass as h}from"../core/accessorSupport/decorators/subclass.js";import{w as y}from"../chunks/writer.js";import"../core/Accessor.js";import"../chunks/typedArrayUtil.js";import"../core/Handles.js";import"../chunks/Logger.js";import"../config.js";import"../chunks/maybe.js";import"../chunks/metadata.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/ObjectPool.js";import"../chunks/ObservableBase.js";import"../chunks/tracking.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../chunks/PooledArray.js";import"../core/promiseUtils.js";import"../core/Error.js";import"../chunks/time.js";import"../chunks/jsonMap.js";import"../chunks/Ellipsoid.js";import"../chunks/assets.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";var w;let j=w=class extends e{static fromJSON(t){if(!t)return null;if(t.wkid){if(102100===t.wkid)return w.WebMercator;if(4326===t.wkid)return w.WGS84}const e=new w;return e.read(t),e}constructor(t){super(t),this.latestWkid=null,this.wkid=null,this.wkt=null,this.wkt2=null,this.vcsWkid=null,this.latestVcsWkid=null,this.imageCoordinateSystem=null}normalizeCtorArgs(t){return t&&"object"==typeof t?t:{["string"==typeof t?"wkt":"wkid"]:t}}get isWGS84(){return n(this)}get isWebMercator(){return l(this)}get isGeographic(){return a(this)}get isWrappable(){return p(this)}get metersPerUnit(){return c(this)}get unit(){return u(this)||(this.isGeographic?"degrees":null)}writeWkt(t,e){this.wkid||(e.wkt=t)}clone(){if(this===w.WGS84)return w.WGS84;if(this===w.WebMercator)return w.WebMercator;const t=new w;return null!=this.wkid?(t.wkid=this.wkid,null!=this.latestWkid&&(t.latestWkid=this.latestWkid),null!=this.vcsWkid&&(t.vcsWkid=this.vcsWkid),null!=this.latestVcsWkid&&(t.latestVcsWkid=this.latestVcsWkid)):(null!=this.wkt&&(t.wkt=this.wkt),null!=this.wkt2&&(t.wkt2=this.wkt2)),this.imageCoordinateSystem&&(t.imageCoordinateSystem=r(this.imageCoordinateSystem)),t}equals(t){if(null==t)return!1;if(this.imageCoordinateSystem||t.imageCoordinateSystem){if(null==this.imageCoordinateSystem||null==t.imageCoordinateSystem)return!1;const{id:e,referenceServiceName:r}=t.imageCoordinateSystem,{geodataXform:i}=t.imageCoordinateSystem,s=this.imageCoordinateSystem;return null==e||i?JSON.stringify(s)===JSON.stringify(t.imageCoordinateSystem):r?s.id===e&&s.referenceServiceName===r:s.id===e}return m(this,t)}toJSON(t){return this.write(void 0,t)}};j.GCS_NAD_1927=null,j.WGS84=null,j.WebMercator=null,j.PlateCarree=null,t([k({readOnly:!0})],j.prototype,"isWGS84",null),t([k({readOnly:!0})],j.prototype,"isWebMercator",null),t([k({readOnly:!0})],j.prototype,"isGeographic",null),t([k({readOnly:!0})],j.prototype,"isWrappable",null),t([k({type:d,json:{write:!0}})],j.prototype,"latestWkid",void 0),t([k({readOnly:!0})],j.prototype,"metersPerUnit",null),t([k({readOnly:!0})],j.prototype,"unit",null),t([k({type:d,json:{write:!0,origins:{"web-scene":{write:{overridePolicy(){return{isRequired:null==this.wkt}}}}}}})],j.prototype,"wkid",void 0),t([k({type:String,json:{origins:{"web-scene":{write:{overridePolicy(){return{isRequired:null==this.wkid}}}}}}})],j.prototype,"wkt",void 0),t([y("wkt"),y("web-scene","wkt")],j.prototype,"writeWkt",null),t([k({type:String,json:{write:!1}})],j.prototype,"wkt2",void 0),t([k({type:d,json:{write:!0}})],j.prototype,"vcsWkid",void 0),t([k({type:d,json:{write:!0}})],j.prototype,"latestVcsWkid",void 0),t([k()],j.prototype,"imageCoordinateSystem",void 0),j=w=t([h("esri.geometry.SpatialReference")],j),j.prototype.toJSON.isDefaultToJSON=!0,j.GCS_NAD_1927=new j({wkid:4267,wkt:'GEOGCS["GCS_North_American_1927",DATUM["D_North_American_1927",SPHEROID["Clarke_1866",6378206.4,294.9786982]],PRIMEM["Greenwich",0.0],UNIT["Degree",0.0174532925199433]]'}),j.WGS84=new j(i),j.WebMercator=new j(s),j.PlateCarree=new j(o),Object.freeze&&(Object.freeze(j.GCS_NAD_1927),Object.freeze(j.WGS84),Object.freeze(j.WebMercator));const S=j;export{S as default};
