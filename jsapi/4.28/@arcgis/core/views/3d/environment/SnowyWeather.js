/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{_ as o}from"../../../chunks/tslib.es6.js";import{JSONSupport as r}from"../../../core/JSONSupport.js";import{property as s}from"../../../core/accessorSupport/decorators/property.js";import"../../../chunks/ensureType.js";import"../../../chunks/typedArrayUtil.js";import{e}from"../../../chunks/enumeration.js";import{subclass as t}from"../../../core/accessorSupport/decorators/subclass.js";import"../../../core/Accessor.js";import"../../../core/Handles.js";import"../../../chunks/Logger.js";import"../../../config.js";import"../../../core/lang.js";import"../../../chunks/maybe.js";import"../../../chunks/metadata.js";import"../../../chunks/utils.js";import"../../../chunks/handleUtils.js";import"../../../chunks/ObjectPool.js";import"../../../chunks/ObservableBase.js";import"../../../chunks/tracking.js";import"../../../core/scheduling.js";import"../../../chunks/nextTick.js";import"../../../chunks/PooledArray.js";import"../../../core/promiseUtils.js";import"../../../core/Error.js";import"../../../chunks/time.js";import"../../../chunks/jsonMap.js";var i;let n=i=class extends r{constructor(o){super(o),this.type="snowy",this.cloudCover=.5,this.precipitation=.5,this.snowCover="disabled"}clone(){return new i({cloudCover:this.cloudCover,precipitation:this.precipitation,snowCover:this.snowCover})}};o([e({snowy:"snowy"})],n.prototype,"type",void 0),o([s({type:Number,nonNullable:!0,range:{min:0,max:1},json:{write:!0}})],n.prototype,"cloudCover",void 0),o([s({type:Number,nonNullable:!0,range:{min:0,max:1},json:{write:!0}})],n.prototype,"precipitation",void 0),o([s({type:["enabled","disabled"],nonNullable:!0,json:{write:!0}})],n.prototype,"snowCover",void 0),n=i=o([t("esri.views.3d.environment.SnowyWeather")],n);const p=n;export{p as default};
