/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{_ as t}from"../../../chunks/tslib.es6.js";import{property as r}from"../../../core/accessorSupport/decorators/property.js";import"../../../chunks/ensureType.js";import"../../../chunks/typedArrayUtil.js";import{r as e}from"../../../chunks/reader.js";import{subclass as o}from"../../../core/accessorSupport/decorators/subclass.js";import{w as i}from"../../../chunks/writer.js";import s from"./Input.js";import"../../../chunks/Logger.js";import"../../../config.js";import"../../../core/lang.js";import"../../../chunks/utils.js";import"../../../chunks/handleUtils.js";import"../../../chunks/metadata.js";import"../../../core/Error.js";import"../../../chunks/tracking.js";import"../../../core/JSONSupport.js";import"../../../core/Accessor.js";import"../../../core/Handles.js";import"../../../chunks/maybe.js";import"../../../chunks/ObjectPool.js";import"../../../chunks/ObservableBase.js";import"../../../core/scheduling.js";import"../../../chunks/nextTick.js";import"../../../chunks/PooledArray.js";import"../../../core/promiseUtils.js";import"../../../chunks/time.js";var n;function p(t){return null!=t?t:null}function m(t){return null!=t?t:null}let u=n=class extends s{constructor(t){super(t),this.max=null,this.min=null,this.timeResolution="minutes",this.type="time-picker"}readMax(t,r){return p(r.max)}writeMax(t,r){r.max=m(t)}readMin(t,r){return p(r.min)}writeMin(t,r){r.min=m(t)}readTimeResolution(t,r){return p(r.timeResolution)}writeTimeResolution(t,r){r.timeResolution=m(t)}clone(){return new n({max:this.max,min:this.min,timeResolution:this.timeResolution})}};t([r({type:String,json:{type:String,write:!0}})],u.prototype,"max",void 0),t([e("max")],u.prototype,"readMax",null),t([i("max")],u.prototype,"writeMax",null),t([r({type:String,json:{type:String,write:!0}})],u.prototype,"min",void 0),t([e("min")],u.prototype,"readMin",null),t([i("min")],u.prototype,"writeMin",null),t([r({type:String,json:{type:String,write:!0}})],u.prototype,"timeResolution",void 0),t([e("timeResolution")],u.prototype,"readTimeResolution",null),t([i("timeResolution")],u.prototype,"writeTimeResolution",null),t([r({type:["time-picker"],json:{read:!1,write:!0}})],u.prototype,"type",void 0),u=n=t([o("esri.form.elements.inputs.TimePickerInput")],u);const l=u;export{l as default};
