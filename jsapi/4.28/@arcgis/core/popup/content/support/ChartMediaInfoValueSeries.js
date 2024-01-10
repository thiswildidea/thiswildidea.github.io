/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{_ as o}from"../../../chunks/tslib.es6.js";import s from"../../../core/Accessor.js";import{property as r}from"../../../core/accessorSupport/decorators/property.js";import"../../../chunks/ensureType.js";import"../../../chunks/typedArrayUtil.js";import{subclass as t}from"../../../core/accessorSupport/decorators/subclass.js";import"../../../core/Handles.js";import"../../../chunks/Logger.js";import"../../../config.js";import"../../../core/lang.js";import"../../../chunks/maybe.js";import"../../../chunks/metadata.js";import"../../../chunks/utils.js";import"../../../chunks/handleUtils.js";import"../../../chunks/ObjectPool.js";import"../../../chunks/ObservableBase.js";import"../../../chunks/tracking.js";import"../../../core/scheduling.js";import"../../../chunks/nextTick.js";import"../../../chunks/PooledArray.js";import"../../../core/promiseUtils.js";import"../../../core/Error.js";import"../../../chunks/time.js";var e;let i=e=class extends s{constructor(o){super(o),this.color=null,this.fieldName=null,this.tooltip=null,this.value=null}clone(){return new e({fieldName:this.fieldName,tooltip:this.tooltip,value:this.value})}};o([r()],i.prototype,"color",void 0),o([r()],i.prototype,"fieldName",void 0),o([r()],i.prototype,"tooltip",void 0),o([r()],i.prototype,"value",void 0),i=e=o([t("esri.popup.content.support.ChartMediaInfoValueSeries")],i);const p=i;export{p as default};
