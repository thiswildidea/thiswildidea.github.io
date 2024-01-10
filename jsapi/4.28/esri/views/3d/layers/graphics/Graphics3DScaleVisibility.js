// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/tslib.es6 ../../../../core/Accessor ../../../../core/Logger ../../../../core/accessorSupport/decorators/property ../../../../core/accessorSupport/ensureType ../../../../core/arrayUtils ../../../../core/has ../../../../core/accessorSupport/decorators/subclass ../../../../core/support/UpdatingHandles ../../../../geometry/projection/projectBoundingRect ../../../../geometry/support/aaBoundingRect ./enums ../../../support/layerViewUtils ../../../support/Scheduler".split(" "),
function(d,e,x,y,f,B,C,D,z,A,p,q,g,r,t){const u=y.getLogger("esri.views.3d.layers.graphics.Graphics3DScaleVisibility");d.Graphics3DScaleVisibility=class extends x{constructor(a){super(a);this._layerScaleRangeVisibilityQuery=this._scaleRangeActive=!1;this._extent=null;this._updatingHandles=new A.UpdatingHandles;this.basemapTerrain=this.graphicsCore=this.queryGraphicUIDsInExtent=this.layer=this.graphicsCoreOwner=null;this.layerScaleEnabled=!0;this.suspended=!1;this._dirty=!0}initialize(){this.updateScaleRangeActive();
this.addHandles(this.graphicsCoreOwner.view.resourceController.scheduler.registerTask(t.TaskPriority.SCALE_VISIBILITY,this));this._updatingHandles.add(()=>this.layer.effectiveScaleRange,()=>this.layerMinMaxScaleChangeHandler())}destroy(){this._updatingHandles.destroy();this.removeHandles();this._dirty=!1;this.basemapTerrain=this.graphicsCore=this.queryGraphicUIDsInExtent=this.layer=this.graphicsCoreOwner=this._extent=null}get updating(){return this._dirty||this._updatingHandles.updating}_setDirty(){this._dirty=
!0}setExtent(a){const b=this.graphicsCoreOwner.view.spatialReference,c=this.graphicsCoreOwner.view.basemapTerrain.spatialReference;if(b===c)this._extent=a??null;else{const h=q.create();p.projectBoundingRect(a,b,h,c)?this._extent=h:this._extent=null}this._setDirty()}scaleRangeActive(){return this._scaleRangeActive}updateScaleRangeActive(){var a=this.layer,b=a.effectiveScaleRange;b=this.layerScaleEnabled&&null!=b&&(0<b.minScale||0<b.maxScale);a.labelingInfo&&!b&&(b=a.labelingInfo.some(c=>c&&(0<(c.minScale??
0)||0<(c.maxScale??0))));a=this._scaleRangeActive!==b;(this._scaleRangeActive=b)&&!this.hasHandles("terrain-events")&&this.basemapTerrain?(this.addHandles(this.basemapTerrain.on("scale-change",c=>this._scaleUpdateHandler(c)),"terrain-events"),this.layerScaleEnabled&&this.addHandles(this.basemapTerrain.on("tiles-visibility-changed",()=>this._setDirty()),"terrain-events")):!b&&this.hasHandles("terrain-events")&&this.removeHandles("terrain-events");return a}get running(){return!(!this.graphicsCoreOwner.view.basemapTerrain||
!this.updating)}runTask(a){const b=this.graphicsCoreOwner.view.basemapTerrain;if(this._extent&&b&&b.ready&&this._scaleRangeActive&&this.layerScaleEnabled){if(this._layerScaleRangeVisibilityQuery)return t.Task.YIELD;this._layerScaleRangeVisibilityQuery=!0;const {minScale:c,maxScale:h}=this.layer.effectiveScaleRange;b.queryVisibleScaleRange(this._extent,c,h,l=>this._finishUpdate(l))}else this._finishUpdate(!0);a.madeProgress()}_finishUpdate(a){this._layerScaleRangeVisibilityQuery=!1;this._set("suspended",
!a);this._dirty=!1}_visibleAtLayerScale(a){const b=this.layer.effectiveScaleRange;return!this.layerScaleEnabled||r.scaleBoundsPredicate(a,b.minScale||0,b.maxScale||0)}_visibleAtLabelScale(a,b){return r.scaleBoundsPredicate(a,b.minScale||0,b.maxScale||0)}_graphicScale(a){let b;null!=a.centroid?b=a.centroid:null!=a.graphic.geometry&&"point"===a.graphic.geometry.type&&(b=a.graphic.geometry);return b?this.graphicsCoreOwner.view.basemapTerrain?this.graphicsCoreOwner.view.basemapTerrain.getScale(b):1:null}_graphicVisible(a){if(!this.layerScaleEnabled)return!0;
a=this._graphicScale(a);return this._visibleAtLayerScale(a)}updateVisibility(a){if(this._scaleRangeActive){const b=this._graphicVisible(a);return a.setVisibilityFlag(g.VisibilityGroup.GRAPHIC,g.VisibilityFlag.SCALE_RANGE,b)}return!1}updateGraphicLabelScaleVisibility(a){if(!this._scaleRangeActive||!a.labelLayers||0===a.labelLayers.length)return!1;const b=this._graphicScale(a);if(a=this._updateLabelScaleVisibility(a,b))this.graphicsCoreOwner.view.deconflictor.setDirty(),this.graphicsCoreOwner.view.labeler.setDirty();
return a}_updateLabelScaleVisibility(a,b){if(!a.labelLayers||0===a.labelLayers.length)return!1;const c=a.labelLayers[0]._labelClass;return null!=c?.minScale&&null!=c.maxScale&&(b=this._visibleAtLabelScale(b,c),a.setVisibilityFlag(g.VisibilityGroup.LABEL,g.VisibilityFlag.SCALE_RANGE,b))?!0:!1}_scaleUpdateHandler(a){this._setDirty();if(this.graphicsCore.visible){var b=a.extent,c=a.scale,h=this._visibleAtLayerScale(c),l=!1,n=this.graphicsCoreOwner.view.spatialReference;a=a.spatialReference;if(null==
a)u.error("scaleUpdate: Internal error, no SpatialReference given for tiles");else{var v=!a.equals(n);v&&!p.projectBoundingRect(b,a,w,n)?u.error("scaleUpdate: Internal error, cannot project AABR from "+a+" to wkid "+n):(this.queryGraphicUIDsInExtent(v?w:b,n,k=>{k=this.graphicsCore.getGraphics3DGraphicById(k);if(null!=k){var m=k.centroid;null!=m&&(b[0]>m.x||b[1]>m.y||b[2]<m.x||b[3]<m.y)||(k.setVisibilityFlag(g.VisibilityGroup.GRAPHIC,g.VisibilityFlag.SCALE_RANGE,h)&&(l=!0),this._updateLabelScaleVisibility(k,
c)&&(l=!0))}}),l&&(this.graphicsCoreOwner.view.deconflictor.setDirty(),this.graphicsCoreOwner.view.labeler.setDirty()))}}}layerMinMaxScaleChangeHandler(){this.updateScaleRangeActive()&&!this._scaleRangeActive?this.graphicsCore.modifyGraphics3DGraphicVisibilities(a=>a.setVisibilityFlag(g.VisibilityGroup.GRAPHIC,g.VisibilityFlag.SCALE_RANGE,!0)):this._scaleRangeActive&&this.graphicsCore.updateAllGraphicsVisibility();this._setDirty()}};e.__decorate([f.property()],d.Graphics3DScaleVisibility.prototype,
"graphicsCoreOwner",void 0);e.__decorate([f.property()],d.Graphics3DScaleVisibility.prototype,"layer",void 0);e.__decorate([f.property()],d.Graphics3DScaleVisibility.prototype,"queryGraphicUIDsInExtent",void 0);e.__decorate([f.property()],d.Graphics3DScaleVisibility.prototype,"graphicsCore",void 0);e.__decorate([f.property()],d.Graphics3DScaleVisibility.prototype,"basemapTerrain",void 0);e.__decorate([f.property({constructOnly:!0})],d.Graphics3DScaleVisibility.prototype,"layerScaleEnabled",void 0);
e.__decorate([f.property({readOnly:!0})],d.Graphics3DScaleVisibility.prototype,"suspended",void 0);e.__decorate([f.property({readOnly:!0})],d.Graphics3DScaleVisibility.prototype,"updating",null);e.__decorate([f.property()],d.Graphics3DScaleVisibility.prototype,"_dirty",void 0);d.Graphics3DScaleVisibility=e.__decorate([z.subclass("esri.views.3d.layers.graphics.Graphics3DScaleVisibility")],d.Graphics3DScaleVisibility);const w=q.create();Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});