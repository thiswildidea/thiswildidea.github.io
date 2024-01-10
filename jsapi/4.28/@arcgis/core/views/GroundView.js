/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{_ as t}from"../chunks/tslib.es6.js";import e from"../core/Accessor.js";import s from"../core/Collection.js";import{when as r,watch as o,sync as i}from"../core/reactiveUtils.js";import{property as n}from"../core/accessorSupport/decorators/property.js";import"../chunks/ensureType.js";import"../chunks/typedArrayUtil.js";import{subclass as p}from"../core/accessorSupport/decorators/subclass.js";import{t as a}from"../chunks/cameraUtils.js";import m from"../core/Evented.js";import{L as c}from"../chunks/Logger.js";import u from"../geometry/SpatialReference.js";import{t as l}from"../chunks/aaBoundingRect.js";import{d as h}from"../geometry/Extent.js";import{updateGeometryElevation as j}from"../layers/support/ElevationSampler.js";import{e as d}from"../chunks/TerrainConst.js";import"../core/Handles.js";import"../chunks/maybe.js";import"../chunks/metadata.js";import"../core/lang.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/ObjectPool.js";import"../chunks/ObservableBase.js";import"../chunks/tracking.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../chunks/PooledArray.js";import"../core/promiseUtils.js";import"../core/Error.js";import"../config.js";import"../chunks/time.js";import"../chunks/shared.js";import"../chunks/SimpleObservable.js";import"../chunks/asyncUtils.js";import"../Camera.js";import"../core/Clonable.js";import"../chunks/Cyclical.js";import"../chunks/mathUtils.js";import"../chunks/vec3.js";import"../chunks/vec3f64.js";import"../chunks/common.js";import"../core/JSONSupport.js";import"../core/accessorSupport/decorators/cast.js";import"../chunks/reader.js";import"../chunks/writer.js";import"../geometry/Point.js";import"../geometry/Geometry.js";import"../chunks/unitUtils.js";import"../chunks/jsonMap.js";import"../chunks/Ellipsoid.js";import"../chunks/assets.js";import"../request.js";import"../kernel.js";import"../core/urlUtils.js";import"../geometry/support/webMercatorUtils.js";import"../geometry/projection.js";import"../geometry/Multipoint.js";import"../chunks/zmUtils.js";import"../geometry/Polygon.js";import"../chunks/Axis.js";import"../chunks/extentUtils.js";import"../geometry/Polyline.js";import"../chunks/projectBuffer.js";import"../chunks/geodesicConstants.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/support/GeographicTransformationStep.js";import"../chunks/zscale.js";import"../chunks/projectPointToVector.js";import"../chunks/projectPointToVectorWithEngine.js";import"../chunks/dehydratedPoint.js";import"../chunks/projectVectorToPoint.js";import"../chunks/projectVectorToVector.js";import"../chunks/ViewingMode.js";import"../chunks/Intersector2.js";import"../chunks/mat4.js";import"../chunks/mat4f64.js";import"../chunks/vec4.js";import"../chunks/vec4f64.js";import"../chunks/vector.js";import"../chunks/ByteSizeUnit.js";import"../chunks/mat3f64.js";import"../chunks/quatf64.js";import"../chunks/vec2f64.js";import"../chunks/boundedPlane.js";import"../chunks/lineSegment.js";import"../chunks/plane.js";import"../chunks/mathUtils2.js";import"../chunks/verticalOffsetUtils.js";import"../chunks/mat3.js";import"../chunks/sphere.js";import"../chunks/orientedBoundingBox.js";import"../chunks/quat.js";import"../chunks/aaBoundingBox.js";import"../chunks/Attribute.js";import"../chunks/earthUtils.js";import"../chunks/ElevationProvider.js";import"../chunks/dehydratedFeatureUtils.js";import"../chunks/spatialReferenceSupport.js";import"../geometry.js";import"../chunks/typeUtils.js";import"../geometry/support/jsonUtils.js";import"../layers/support/LOD.js";import"../layers/support/TileInfo.js";import"../chunks/TileKey.js";let y=class extends m.EventedAccessor{constructor(t){super(t),this.demResolution={min:-1,max:-1},this.noDataValue=d}initialize(){this.view.basemapTerrain.on("elevation-change",(()=>this.emit("changed",{})))}get extent(){const t=this.view.basemapTerrain;if(null==t?.extent||null==t.spatialReference)return null;const e=l(t.extent,t.spatialReference);return e.zmin=t.visibleElevationBounds.min,e.zmax=t.visibleElevationBounds.max,e}get spatialReference(){return this.view.basemapTerrain?.spatialReference??u.WGS84}elevationAt(t,e){if(null==this.extent||!h(this.extent,t,e)){const s=null!=this.extent?`${this.extent.xmin}, ${this.extent.ymin}, ${this.extent.xmax}, ${this.extent.ymax}`:null;return c.getLogger(this).warn("#elevationAt()",`Point used to sample elevation (${t}, ${e}) is outside of the sampler extent (${s})`),this.noDataValue}return this.view.elevationProvider?.getElevation(t,e,0,this.spatialReference,"ground")??this.noDataValue}queryElevation(t){return j(t.clone(),this)}};t([n({readOnly:!0})],y.prototype,"demResolution",void 0),t([n({readOnly:!0})],y.prototype,"extent",null),t([n({readOnly:!0})],y.prototype,"noDataValue",void 0),t([n()],y.prototype,"spatialReference",null),t([n({constructOnly:!0})],y.prototype,"view",void 0),y=t([p("esri.views.support.GroundViewElevationSampler")],y);const k=y;let g=class extends e{constructor(t){super(t),this.view=null,this.layerViews=new s}initialize(){this.addHandles(r((()=>this.view?.map?.ground),(t=>t.load()))),this.addHandles(this.layerViews.on("after-changes",(()=>this._layerViewsAfterChangesHandler())))}destroy(){this._set("view",null);for(const t of this.layerViews)t.destroy();this.layerViews.length=0}get elevationSampler(){return this.view?"2d"===this.view.type?null:this.view.ready&&this.view.basemapTerrain&&this.view.basemapTerrain.ready?new k({view:this.view}):null:null}get extent(){const t=this.view;return t&&"2d"!==t.type&&t.ready?a(t,t.state.camera,t.pointsOfInterest.centerOnSurfaceFrequent.renderLocation):null}get updating(){return!this.suspended&&this.layerViews.some((t=>t.updating))}get suspended(){return!this.view||this.view.suspended}_layerViewsAfterChangesHandler(){this.removeHandles("updating"),this.addHandles(this.layerViews.map((t=>o((()=>t.updating),(()=>this._updateUpdating()),i))).toArray(),"updating"),this._updateUpdating()}_updateUpdating(){this.notifyChange("updating")}};t([n({readOnly:!0})],g.prototype,"elevationSampler",null),t([n({readOnly:!0})],g.prototype,"extent",null),t([n({type:Boolean,readOnly:!0})],g.prototype,"updating",null),t([n({constructOnly:!0})],g.prototype,"view",void 0),t([n({type:s,readOnly:!0})],g.prototype,"layerViews",void 0),t([n({readOnly:!0})],g.prototype,"suspended",null),g=t([p("esri.views.GroundView")],g);const v=g;export{v as default};
