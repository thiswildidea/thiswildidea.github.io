/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{_ as r}from"../chunks/tslib.es6.js";import{JSONSupport as o}from"../core/JSONSupport.js";import{property as s}from"../core/accessorSupport/decorators/property.js";import"../chunks/ensureType.js";import"../chunks/typedArrayUtil.js";import{subclass as t}from"../core/accessorSupport/decorators/subclass.js";import e from"../layers/support/FacilityLayerInfo.js";import p from"../layers/support/LevelLayerInfo.js";import i from"../layers/support/SiteLayerInfo.js";import"../core/Accessor.js";import"../core/Handles.js";import"../chunks/Logger.js";import"../config.js";import"../core/lang.js";import"../chunks/maybe.js";import"../chunks/metadata.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/ObjectPool.js";import"../chunks/ObservableBase.js";import"../chunks/tracking.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../chunks/PooledArray.js";import"../core/promiseUtils.js";import"../core/Error.js";import"../chunks/time.js";let c=class extends o{constructor(r){super(r),this.levelLayer=null,this.facilityLayer=null,this.siteLayer=null}};r([s({type:p,json:{write:!0}})],c.prototype,"levelLayer",void 0),r([s({type:e,json:{write:!0}})],c.prototype,"facilityLayer",void 0),r([s({type:i,json:{write:!0}})],c.prototype,"siteLayer",void 0),c=r([t("esri.support.MapFloorInfo")],c);const m=c;export{m as default};
