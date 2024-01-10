/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{_ as e}from"./tslib.es6.js";import t from"../core/Accessor.js";import{i as r}from"./typedArrayUtil.js";import{isAborted as o,throwIfAborted as i}from"../core/promiseUtils.js";import{property as s}from"../core/accessorSupport/decorators/property.js";import"./ensureType.js";import{subclass as n}from"../core/accessorSupport/decorators/subclass.js";import{d as a}from"./handleUtils.js";import{r as p,a as d}from"./maybe.js";import{U as c}from"./UpdatingHandles.js";import{E as m}from"./EdgeWorkerHandle.js";import{c as l}from"./vec3f64.js";import{W as j}from"./WorkerHandle.js";import{h as u}from"./sphere.js";import{d as y}from"./snappingUtils.js";import{E as h}from"./EdgeSnappingCandidate.js";import{V as g}from"./VertexSnappingCandidate.js";import"../core/Handles.js";import"./Logger.js";import"../config.js";import"../core/lang.js";import"./metadata.js";import"./utils.js";import"./ObjectPool.js";import"./ObservableBase.js";import"./tracking.js";import"../core/scheduling.js";import"./nextTick.js";import"./PooledArray.js";import"./time.js";import"../core/Error.js";import"../core/reactiveUtils.js";import"./asyncUtils.js";import"../core/Collection.js";import"../core/Evented.js";import"./shared.js";import"./SimpleObservable.js";import"./workerHelper.js";import"./InterleavedLayout.js";import"./BufferView.js";import"./vec2.js";import"./common.js";import"./vec3.js";import"./vec4.js";import"./types.js";import"./Util.js";import"./vec2f64.js";import"./vec4f64.js";import"./edgeProcessing.js";import"./deduplicate.js";import"./mathUtils.js";import"./Indices.js";import"./VertexAttribute.js";import"./glUtil.js";import"./enums3.js";import"./VertexElementDescriptor.js";import"../core/workers/workers.js";import"../core/workers/Connection.js";import"./Queue.js";import"../core/workers/RemoteClient.js";import"../kernel.js";import"../core/urlUtils.js";import"../core/JSONSupport.js";import"../request.js";import"./assets.js";import"../intl.js";import"./date.js";import"./jsonMap.js";import"./locale.js";import"./timeZoneUtils.js";import"./datetime.js";import"./messages.js";import"./mat4.js";import"./Axis.js";import"./vector.js";import"./ByteSizeUnit.js";import"./mat3f64.js";import"./mat4f64.js";import"./quatf64.js";import"../core/sql.js";import"./timeUtils.js";import"./dehydratedPoint.js";import"../rest/support/Query.js";import"../geometry.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"./reader.js";import"../geometry/SpatialReference.js";import"./unitUtils.js";import"./Ellipsoid.js";import"./writer.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"../geometry/Multipoint.js";import"./zmUtils.js";import"../geometry/Polygon.js";import"./extentUtils.js";import"./aaBoundingRect.js";import"../geometry/Polyline.js";import"./typeUtils.js";import"../geometry/support/jsonUtils.js";import"../TimeExtent.js";import"./enumeration.js";import"./DataLayerSource.js";import"../layers/support/Field.js";import"./domains.js";import"../layers/support/CodedValueDomain.js";import"../layers/support/Domain.js";import"../layers/support/InheritedDomain.js";import"../layers/support/RangeDomain.js";import"./fieldType.js";import"./FullTextSearch.js";import"../core/Clonable.js";import"./QuantizationParameters.js";import"../rest/support/StatisticDefinition.js";import"./InputManager.js";import"./PropertiesPool.js";import"../core/signal.js";import"./keybindings.js";import"./elevationInfoUtils.js";import"./unitConversionUtils.js";import"./lengthUtils.js";import"./constraints.js";import"./plane.js";import"./mathUtils2.js";import"./geometry2dUtils.js";import"./LineSnappingHint.js";import"./PointSnappingHint.js";let f=class extends t{constructor(e){super(e),this.availability=0,this._ids=new Set}destroy(){this._workerHandle.destroy(),this._workerHandle=null}initialize(){this._workerHandle=new w(this.schedule,{fetchAllEdgeLocations:(e,t)=>this._fetchAllEdgeLocations(e,t)})}async fetchCandidates(e,t){const r=e.coordinateHelper,{point:o}=e,i=v;this.renderCoordsHelper.toRenderCoords(o,r.spatialReference,i);const s=e.distance,n="number"==typeof s?s:s.distance,a=await this._workerHandle.invoke({bounds:u(i[0],i[1],i[2],n),returnEdge:e.returnEdge,returnVertex:"none"!==e.vertexMode},t);return a.candidates.sort(((e,t)=>e.distance-t.distance)),a.candidates.map((e=>this._convertCandidate(r,e)))}async add(e,t){this._ids.add(e.id),await this._workerHandle.invokeMethod("add",e,t)}async remove(e,t){this._ids.delete(e.id),await this._workerHandle.invokeMethod("remove",e,t)}_convertCandidate(e,t){switch(t.type){case"edge":return new h({objectId:t.objectId,targetPoint:this._convertRenderCoordinate(e,t.target),edgeStart:this._convertRenderCoordinate(e,t.start),edgeEnd:this._convertRenderCoordinate(e,t.end),isDraped:!1});case"vertex":return new g({objectId:t.objectId,targetPoint:this._convertRenderCoordinate(e,t.target),isDraped:!1})}}_convertRenderCoordinate({spatialReference:e},t){const r=l();return this.renderCoordsHelper.fromRenderCoords(t,r,e),y(r)}async _fetchAllEdgeLocations(e,t){const r=[],o=[];for(const{id:i,uid:s}of e.components)this._ids.has(i)&&r.push((async()=>{const e=await this.fetchEdgeLocations(i,t.signal),r=e.locations.buffer;return o.push(r),{id:i,uid:s,objectIds:e.objectIds,locations:r,origin:e.origin,type:e.type}})());return{result:{components:(await Promise.all(r)).filter((({id:e})=>this._ids.has(e)))},transferList:o}}};e([s({constructOnly:!0})],f.prototype,"renderCoordsHelper",void 0),e([s({constructOnly:!0})],f.prototype,"fetchEdgeLocations",void 0),e([s({constructOnly:!0})],f.prototype,"schedule",void 0),e([s({readOnly:!0})],f.prototype,"availability",void 0),f=e([n("esri.views.interactive.snapping.featureSources.sceneLayerSource.SceneLayerSnappingSourceWorker")],f);class w extends j{constructor(e,t){super("SceneLayerSnappingSourceWorker","fetchCandidates",{},e,{strategy:"dedicated",client:t})}}const v=l();let S=class extends t{get updating(){return this._updatingHandles.updating}constructor(e){super(e),this.availability=1,this._updatingHandles=new c,this._abortController=new AbortController}destroy(){this._tracker=p(this._tracker),this._abortController=d(this._abortController),this._updatingHandles.destroy()}initialize(){const{view:e}=this,t=e.resourceController;this._edgeWorker=new m(_(t)),this._workerHandle=new f({renderCoordsHelper:this.view.renderCoordsHelper,schedule:_(t),fetchEdgeLocations:async(e,t)=>{if(null==this._tracker)throw new Error("tracker-not-initialized");return this._tracker.fetchEdgeLocations(e,this._edgeWorker,t)}}),this._updatingHandles.addPromise(this._setupLayerView()),this.addHandles([a(this._workerHandle),a(this._edgeWorker)])}async fetchCandidates(e,t){return this._workerHandle.fetchCandidates(e,t)}refresh(){}async _setupLayerView(){if(this.destroyed)return;const e=this._abortController?.signal,t=await this.getLayerView();null==t||o(e)||(this._tracker=t.trackSnappingSources({add:(t,r)=>{this._updatingHandles.addPromise(this._workerHandle.add({id:t,bounds:r},e))},remove:t=>{this._updatingHandles.addPromise(this._workerHandle.remove({id:t},e))}}))}};function _(e){return t=>e.immediate.schedule(t)}e([s({constructOnly:!0})],S.prototype,"getLayerView",void 0),e([s({constructOnly:!0})],S.prototype,"view",void 0),e([s({readOnly:!0})],S.prototype,"updating",null),e([s({readOnly:!0})],S.prototype,"availability",void 0),S=e([n("esri.views.interactive.snapping.featureSources.I3SSnappingSource")],S);let b=class extends t{get updating(){return this._i3sSources.some((e=>e.updating))}constructor(e){super(e),this.availability=1,this._i3sSources=[]}destroy(){this._i3sSources.forEach((e=>e.destroy())),this._i3sSources.length=0}initialize(){const{view:e}=this,t=this.layerSource.layer;this._i3sSources="building-scene"===t.type?this._getBuildingSceneI3SSources(e,t):[this._getSceneLayerI3SSource(e,t)]}async fetchCandidates(e,t){const r=await Promise.all(this._i3sSources.map((r=>r.fetchCandidates(e,t))));return i(t),r.flat()}refresh(){this._i3sSources.forEach((e=>e.refresh()))}_getBuildingSceneI3SSources(e,t){return t.allSublayers.toArray().map((r=>"building-component"===r.type?new S({getLayerView:async()=>(await e.whenLayerView(t)).whenSublayerView(r),view:e}):null)).filter(r)}_getSceneLayerI3SSource(e,t){return new S({getLayerView:async()=>{const r=await e.whenLayerView(t);return"scene-layer-graphics-3d"===r.type?void 0:r},view:e})}};e([s({constructOnly:!0})],b.prototype,"layerSource",void 0),e([s({constructOnly:!0})],b.prototype,"view",void 0),e([s({readOnly:!0})],b.prototype,"updating",null),e([s({readOnly:!0})],b.prototype,"availability",void 0),b=e([n("esri.views.interactive.snapping.featureSources.SceneLayerSnappingSource")],b);export{b as SceneLayerSnappingSource};
