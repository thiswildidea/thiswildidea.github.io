/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{_ as e}from"../../../chunks/tslib.es6.js";import{d as t}from"../../../core/Accessor.js";import r from"../../../core/Evented.js";import{L as n}from"../../../chunks/Logger.js";import{property as o}from"../../../core/accessorSupport/decorators/property.js";import"../../../chunks/ensureType.js";import"../../../chunks/typedArrayUtil.js";import{subclass as s}from"../../../core/accessorSupport/decorators/subclass.js";import i from"../../../webscene/VirtualLighting.js";import"../../../core/Handles.js";import"../../../chunks/maybe.js";import"../../../chunks/metadata.js";import"../../../core/lang.js";import"../../../chunks/utils.js";import"../../../chunks/handleUtils.js";import"../../../chunks/ObjectPool.js";import"../../../chunks/ObservableBase.js";import"../../../chunks/tracking.js";import"../../../core/scheduling.js";import"../../../chunks/nextTick.js";import"../../../chunks/PooledArray.js";import"../../../core/promiseUtils.js";import"../../../core/Error.js";import"../../../config.js";import"../../../chunks/time.js";import"../../../core/JSONSupport.js";var a;const c="esri.views.3d.environment.VirtualLighting",l=n.getLogger(c);let p=a=class extends(r.EventedMixin(i)){constructor(e){super(e),this.cameraTrackingEnabled=!0}get ambientOcclusionEnabled(){return t(l,"ambientOcclusionEnabled",{replacement:"ambient occlusion is automatically shown and this property has no effect",version:"4.27"}),this._get("ambientOcclusionEnabled")??!1}set ambientOcclusionEnabled(e){t(l,"ambientOcclusionEnabled",{replacement:"ambient occlusion is automatically shown and this property has no effect",version:"4.27"}),this._set("ambientOcclusionEnabled",e)}get waterReflectionEnabled(){return t(l,"waterReflectionEnabled",{replacement:"water reflections are automatically shown and this property has no effect",version:"4.27"}),this._get("waterReflectionEnabled")??!1}set waterReflectionEnabled(e){t(l,"waterReflectionEnabled",{replacement:"water reflections are automatically shown and this property has no effect",version:"4.27"}),this._set("waterReflectionEnabled",e)}clone(){return new a({...this.cloneConstructProperties(),cameraTrackingEnabled:this.cameraTrackingEnabled})}static fromWebsceneLighting(e){return new a(e.cloneConstructProperties())}cloneWithWebsceneLighting(e){const t=this.clone();return t.directShadowsEnabled=e.directShadowsEnabled,t}cloneNonPersistentConstructProperties(){return{cameraTrackingEnabled:this.cameraTrackingEnabled}}};e([o({type:Boolean})],p.prototype,"ambientOcclusionEnabled",null),e([o({type:Boolean})],p.prototype,"waterReflectionEnabled",null),e([o({type:Boolean})],p.prototype,"cameraTrackingEnabled",void 0),p=a=e([s(c)],p);const m=p;export{m as default};
