/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import r from"../../core/Accessor.js";import{property as s}from"../../core/accessorSupport/decorators/property.js";import"../../chunks/ensureType.js";import"../../chunks/typedArrayUtil.js";import{subclass as o}from"../../core/accessorSupport/decorators/subclass.js";import"../../core/Handles.js";import"../../chunks/Logger.js";import"../../config.js";import"../../core/lang.js";import"../../chunks/maybe.js";import"../../chunks/metadata.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/ObjectPool.js";import"../../chunks/ObservableBase.js";import"../../chunks/tracking.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../chunks/PooledArray.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../chunks/time.js";let e=class extends r{constructor(t){super(t),this.average=null,this.bins=null,this.max=null,this.min=null}get binRange(){const{bins:t}=this;return t&&t.length>1?t[t.length-1].maxValue-t[0].minValue:0}set labelFormatFunction(t){this._set("labelFormatFunction",t)}get range(){const{max:t,min:r}=this;return null!=t&&null!=r?t-r:0}get state(){const{bins:t,range:r}=this;return r>0&&t?.length?"ready":"disabled"}};t([s()],e.prototype,"average",void 0),t([s()],e.prototype,"bins",void 0),t([s({readOnly:!0})],e.prototype,"binRange",null),t([s()],e.prototype,"labelFormatFunction",null),t([s()],e.prototype,"max",void 0),t([s()],e.prototype,"min",void 0),t([s({readOnly:!0})],e.prototype,"range",null),t([s({readOnly:!0})],e.prototype,"state",null),e=t([o("esri.widgets.Histogram.HistogramViewModel")],e);const n=e;export{n as default};
