/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{_ as s}from"./chunks/tslib.es6.js";import r from"./Basemap.js";import t from"./Ground.js";import o from"./core/Accessor.js";import{C as e}from"./chunks/CollectionFlattener.js";import i from"./core/Evented.js";import{d as a}from"./chunks/maybe.js";import{property as p}from"./core/accessorSupport/decorators/property.js";import{cast as l}from"./core/accessorSupport/decorators/cast.js";import"./chunks/typedArrayUtil.js";import{subclass as m}from"./core/accessorSupport/decorators/subclass.js";import{i as n}from"./chunks/editableLayers.js";import{c,d as u,e as j}from"./chunks/basemapUtils.js";import{c as h}from"./chunks/collectionUtils2.js";import{L as d}from"./chunks/Logger.js";import{j as y}from"./chunks/ensureType.js";import{LayersMixin as k}from"./support/LayersMixin.js";import{TablesMixin as g}from"./support/TablesMixin.js";import"./request.js";import"./config.js";import"./core/lang.js";import"./kernel.js";import"./core/urlUtils.js";import"./core/Error.js";import"./core/JSONSupport.js";import"./chunks/utils.js";import"./chunks/handleUtils.js";import"./core/Handles.js";import"./chunks/metadata.js";import"./chunks/ObjectPool.js";import"./chunks/ObservableBase.js";import"./chunks/tracking.js";import"./core/scheduling.js";import"./chunks/nextTick.js";import"./chunks/PooledArray.js";import"./core/promiseUtils.js";import"./chunks/time.js";import"./core/Collection.js";import"./chunks/shared.js";import"./chunks/SimpleObservable.js";import"./chunks/collectionUtils.js";import"./core/Loadable.js";import"./core/Promise.js";import"./chunks/loadAll.js";import"./chunks/asyncUtils.js";import"./chunks/writer.js";import"./geometry/SpatialReference.js";import"./chunks/unitUtils.js";import"./chunks/jsonMap.js";import"./chunks/Ellipsoid.js";import"./chunks/assets.js";import"./portal/Portal.js";import"./chunks/reader.js";import"./geometry/Extent.js";import"./geometry/Geometry.js";import"./geometry/Point.js";import"./geometry/support/webMercatorUtils.js";import"./chunks/locale.js";import"./portal/PortalGroup.js";import"./portal/PortalQueryParams.js";import"./portal/PortalQueryResult.js";import"./portal/PortalUser.js";import"./portal/PortalFolder.js";import"./portal/PortalItem.js";import"./portal/PortalItemResource.js";import"./portal/PortalRating.js";import"./chunks/messages.js";import"./support/BasemapStyle.js";import"./chunks/writeUtils.js";import"./chunks/layerUtils2.js";import"./Color.js";import"./chunks/colorUtils.js";import"./chunks/mathUtils.js";import"./chunks/vec3.js";import"./chunks/vec3f64.js";import"./chunks/common.js";import"./chunks/compilerUtils.js";import"./chunks/enumeration.js";import"./chunks/opacityUtils.js";import"./chunks/infoFor3D.js";import"./chunks/utils3.js";import"./chunks/screenUtils.js";import"./chunks/mat4.js";import"./layers/Layer.js";import"./geometry.js";import"./geometry/Multipoint.js";import"./chunks/zmUtils.js";import"./geometry/Polygon.js";import"./chunks/Axis.js";import"./chunks/extentUtils.js";import"./chunks/aaBoundingRect.js";import"./geometry/Polyline.js";import"./chunks/typeUtils.js";import"./geometry/support/jsonUtils.js";import"./core/Identifiable.js";const b={"world-elevation":{id:"worldElevation",url:"//elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/Terrain3D/ImageServer",layerType:"ArcGISTiledElevationServiceLayer"},"world-topobathymetry":{id:"worldTopoBathymetry",url:"//elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/TopoBathy3D/ImageServer",layerType:"ArcGISTiledElevationServiceLayer"}};let f=class extends(g(k(i.EventedMixin(o)))){constructor(s){super(s),this.allLayers=new e({getCollections:()=>[this.basemap?.baseLayers,this.ground?.layers,this.layers,this.basemap?.referenceLayers],getChildrenFunction:s=>"layers"in s?s.layers:null}),this.allTables=h(this),this.basemap=null,this.editableLayers=new e({getCollections:()=>[this.allLayers],itemFilterFunction:n}),this.ground=new t,this._basemapCache=c()}destroy(){u(this._basemapCache),this._basemapCache=null,this.allLayers.destroy(),this.allTables.destroy(),this.editableLayers.destroy(),this.basemap=a(this.basemap),a(this.ground),this._set("ground",null)}castBasemap(s){return j(s,this._basemapCache)}castGround(s){const r=function(s){let r=null;return"string"==typeof s?s in b?r=new t({resourceInfo:{data:{layers:[b[s]]}}}):d.getLogger("esri.support.groundUtils").warn(`Unable to find ground definition for: ${s}. Try "world-elevation"`):r=y(t,s),r}(s);return r??this._get("ground")}findLayerById(s){return this.allLayers.find((r=>r.id===s))}findTableById(s){return this.allTables.find((r=>r.id===s))}};s([p({readOnly:!0,dependsOn:[]})],f.prototype,"allLayers",void 0),s([p({readOnly:!0})],f.prototype,"allTables",void 0),s([p({type:r,json:{read:{source:"baseMap"},write:{target:"baseMap"}}})],f.prototype,"basemap",void 0),s([l("basemap")],f.prototype,"castBasemap",null),s([p({readOnly:!0})],f.prototype,"editableLayers",void 0),s([p({type:t,nonNullable:!0})],f.prototype,"ground",void 0),s([l("ground")],f.prototype,"castGround",null),f=s([m("esri.Map")],f);const v=f;export{v as default};
