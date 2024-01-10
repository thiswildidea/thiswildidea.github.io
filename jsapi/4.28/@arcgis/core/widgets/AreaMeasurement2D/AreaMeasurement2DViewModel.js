/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{_ as e}from"../../chunks/tslib.es6.js";import{watch as t,initial as s,whenOnce as r}from"../../core/reactiveUtils.js";import{x as i,G as o}from"../../chunks/unitUtils.js";import{property as n}from"../../core/accessorSupport/decorators/property.js";import"../../chunks/ensureType.js";import"../../chunks/typedArrayUtil.js";import{subclass as m}from"../../core/accessorSupport/decorators/subclass.js";import{isLoaded as a,project as p,load as l}from"../../geometry/projection.js";import{d as c}from"../../chunks/defaultUnit.js";import"../../geometry.js";import u from"../../Graphic.js";import"../../intl.js";import"../../symbols.js";import{e as h,d as j,B as d}from"../../chunks/colorUtils2.js";import{d as y}from"../../chunks/maybe.js";import{f as k,p as f,m as v,e as b,b as g}from"../../chunks/unitFormatUtils.js";import{geodesicDensify as w,planarLength as S,simplify as _,geodesicLength as D,geodesicArea as L,planarArea as U}from"../../geometry/geometryEngine.js";import{isSupported as M,geodesicDensify as C,geodesicLengths as A,geodesicAreas as T}from"../../geometry/support/geodesicUtils.js";import x from"../../layers/GraphicsLayer.js";import{V as P}from"../../chunks/ViewingMode.js";import I from"../../views/draw/Draw.js";import{I as G,c as O,a as q,d as E}from"../../chunks/dragEventPipeline.js";import{G as R}from"../../chunks/GraphicManipulator.js";import{f as F}from"../../chunks/messages.js";import{o as V}from"../../chunks/locale.js";import B from"../../geometry/Point.js";import z from"../../symbols/SimpleFillSymbol.js";import H from"../../symbols/SimpleLineSymbol.js";import W from"../../symbols/TextSymbol.js";import Q from"../../symbols/Font.js";import N from"../../symbols/SimpleMarkerSymbol.js";import J from"../../geometry/Polyline.js";import Z from"../../geometry/SpatialReference.js";import K from"../../geometry/Polygon.js";import{I as X}from"../../chunks/InteractiveToolViewModel.js";import"../../chunks/asyncUtils.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/Logger.js";import"../../config.js";import"../../core/lang.js";import"../../chunks/metadata.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/ObjectPool.js";import"../../chunks/ObservableBase.js";import"../../chunks/tracking.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../chunks/PooledArray.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../chunks/time.js";import"../../core/Collection.js";import"../../core/Evented.js";import"../../chunks/shared.js";import"../../chunks/SimpleObservable.js";import"../../chunks/jsonMap.js";import"../../chunks/Ellipsoid.js";import"../../chunks/assets.js";import"../../request.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../core/JSONSupport.js";import"../../chunks/vec3f64.js";import"../../geometry/Extent.js";import"../../geometry/Geometry.js";import"../../chunks/reader.js";import"../../chunks/writer.js";import"../../geometry/support/webMercatorUtils.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../chunks/projectBuffer.js";import"../../chunks/mathUtils.js";import"../../chunks/vec3.js";import"../../chunks/common.js";import"../../chunks/geodesicConstants.js";import"../../geometry/support/GeographicTransformation.js";import"../../geometry/support/GeographicTransformationStep.js";import"../../chunks/zscale.js";import"../../chunks/Axis.js";import"../../chunks/extentUtils.js";import"../../chunks/aaBoundingRect.js";import"../../chunks/getDefaultUnitForView.js";import"../../portal/Portal.js";import"../../core/Loadable.js";import"../../core/Promise.js";import"../../portal/PortalGroup.js";import"../../portal/PortalQueryParams.js";import"../../portal/PortalQueryResult.js";import"../../portal/PortalUser.js";import"../../portal/PortalFolder.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";import"../../PopupTemplate.js";import"../../core/Clonable.js";import"../../layers/support/fieldUtils.js";import"../../core/sql.js";import"../../chunks/date.js";import"../../chunks/timeZoneUtils.js";import"../../chunks/datetime.js";import"../../chunks/arcadeOnDemand.js";import"../../popup/content.js";import"../../popup/content/AttachmentsContent.js";import"../../popup/content/Content.js";import"../../popup/content/CustomContent.js";import"../../popup/content/ExpressionContent.js";import"../../popup/ElementExpressionInfo.js";import"../../popup/content/FieldsContent.js";import"../../popup/FieldInfo.js";import"../../chunks/enumeration.js";import"../../popup/support/FieldInfoFormat.js";import"../../popup/content/MediaContent.js";import"../../popup/content/BarChartMediaInfo.js";import"../../popup/content/mixins/ChartMediaInfo.js";import"../../popup/content/mixins/MediaInfo.js";import"../../popup/content/support/ChartMediaInfoValue.js";import"../../Color.js";import"../../chunks/colorUtils.js";import"../../popup/content/support/ChartMediaInfoValueSeries.js";import"../../chunks/chartMediaInfoUtils.js";import"../../popup/content/ColumnChartMediaInfo.js";import"../../popup/content/ImageMediaInfo.js";import"../../popup/content/support/ImageMediaInfoValue.js";import"../../popup/content/LineChartMediaInfo.js";import"../../popup/content/PieChartMediaInfo.js";import"../../popup/content/RelationshipContent.js";import"../../popup/support/RelatedRecordsInfoFieldOrder.js";import"../../popup/content/TextContent.js";import"../../popup/ExpressionInfo.js";import"../../popup/LayerOptions.js";import"../../popup/RelatedRecordsInfo.js";import"../../support/actions/ActionBase.js";import"../../core/Identifiable.js";import"../../support/actions/ActionButton.js";import"../../support/actions/ActionToggle.js";import"../../symbols/CIMSymbol.js";import"../../symbols/Symbol.js";import"../../symbols/ExtrudeSymbol3DLayer.js";import"../../symbols/Symbol3DLayer.js";import"../../chunks/utils4.js";import"../../symbols/edges/Edges3D.js";import"../../chunks/screenUtils.js";import"../../chunks/materialUtils.js";import"../../chunks/opacityUtils.js";import"../../symbols/edges/SketchEdges3D.js";import"../../symbols/edges/SolidEdges3D.js";import"../../chunks/Symbol3DMaterial.js";import"../../symbols/FillSymbol.js";import"../../symbols/LineSymbol.js";import"../../symbols/LineSymbolMarker.js";import"../../chunks/lineMarkers.js";import"../../symbols/FillSymbol3DLayer.js";import"../../symbols/patterns/LineStylePattern3D.js";import"../../symbols/patterns/StylePattern3D.js";import"../../chunks/utils5.js";import"../../chunks/colors.js";import"../../chunks/symbolLayerUtils3D.js";import"../../chunks/aaBoundingBox.js";import"../../symbols/IconSymbol3DLayer.js";import"../../chunks/persistableUrlUtils.js";import"../../chunks/Symbol3DAnchorPosition2D.js";import"../../symbols/LabelSymbol3D.js";import"../../symbols/Symbol3D.js";import"../../chunks/collectionUtils.js";import"../../symbols/LineSymbol3DLayer.js";import"../../symbols/LineStyleMarker3D.js";import"../../symbols/ObjectSymbol3DLayer.js";import"../../symbols/PathSymbol3DLayer.js";import"../../symbols/TextSymbol3DLayer.js";import"../../symbols/WaterSymbol3DLayer.js";import"../../symbols/support/StyleOrigin.js";import"../../chunks/Thumbnail.js";import"../../chunks/calloutUtils.js";import"../../symbols/callouts/Callout3D.js";import"../../symbols/callouts/LineCallout3D.js";import"../../symbols/support/Symbol3DVerticalOffset.js";import"../../symbols/LineSymbol3D.js";import"../../symbols/MarkerSymbol.js";import"../../symbols/MeshSymbol3D.js";import"../../symbols/PictureFillSymbol.js";import"../../chunks/urlUtils.js";import"../../symbols/PictureMarkerSymbol.js";import"../../symbols/PointSymbol3D.js";import"../../symbols/PolygonSymbol3D.js";import"../../symbols/WebStyleSymbol.js";import"../../chunks/vec4.js";import"../../chunks/vec4f64.js";import"../../chunks/ByteSizeUnit.js";import"../../chunks/Cyclical.js";import"../../chunks/geometryEngineBase.js";import"../../chunks/_commonjsHelpers.js";import"../../chunks/hydrated.js";import"../../chunks/GraphicsCollection.js";import"../../layers/Layer.js";import"../../layers/mixins/BlendLayer.js";import"../../chunks/jsonUtils.js";import"../../chunks/parser.js";import"../../chunks/utils3.js";import"../../chunks/mat4.js";import"../../layers/mixins/ScaleRangeLayer.js";import"../../chunks/ElevationInfo.js";import"../../chunks/unitConversionUtils.js";import"../../chunks/lengthUtils.js";import"../../views/draw/MultipointDrawAction.js";import"../../views/draw/DrawAction.js";import"../../chunks/dehydratedPoint.js";import"../../chunks/SnappingVisualizer2D.js";import"../../chunks/vec2.js";import"../../chunks/vec2f64.js";import"../../chunks/enums.js";import"../../chunks/Settings.js";import"../../chunks/SnappingContext.js";import"../../chunks/IntersectionSnappingHint.js";import"../../chunks/LineSnappingHint.js";import"../../chunks/PointSnappingHint.js";import"../../chunks/EditGeometryOperations.js";import"../../chunks/plane.js";import"../../chunks/vector.js";import"../../chunks/mat3f64.js";import"../../chunks/mat4f64.js";import"../../chunks/quatf64.js";import"../../chunks/mathUtils2.js";import"../../chunks/geometry2dUtils.js";import"../../chunks/SnappingOperation.js";import"../../chunks/Scheduler.js";import"../../core/signal.js";import"../../chunks/debugFlags.js";import"../../chunks/RenderState.js";import"../../chunks/DrawEvents.js";import"../../chunks/InputManager.js";import"../../chunks/Queue.js";import"../../chunks/PropertiesPool.js";import"../../chunks/keybindings.js";import"../../chunks/screenUtils2.js";import"../../views/draw/PointDrawAction.js";import"../../chunks/DrawTool.js";import"../../chunks/elevationInfoUtils.js";import"../../chunks/drawSurfaces.js";import"../../chunks/diffUtils.js";import"../../chunks/UpdatingHandles.js";import"../../chunks/dehydratedFeatureComparison.js";import"../../chunks/snappingUtils.js";import"../../chunks/timeUtils.js";import"../../rest/support/Query.js";import"../../TimeExtent.js";import"../../chunks/DataLayerSource.js";import"../../layers/support/Field.js";import"../../chunks/domains.js";import"../../layers/support/CodedValueDomain.js";import"../../layers/support/Domain.js";import"../../layers/support/InheritedDomain.js";import"../../layers/support/RangeDomain.js";import"../../chunks/fieldType.js";import"../../chunks/FullTextSearch.js";import"../../chunks/QuantizationParameters.js";import"../../rest/support/StatisticDefinition.js";import"../../views/interactive/sketch/SketchLabelOptions.js";import"../../views/interactive/sketch/SketchTooltipOptions.js";import"../../chunks/SnappingDragPipelineStep.js";import"../../chunks/hydratedFeatures.js";import"../../chunks/interfaces5.js";import"../../chunks/interfaces6.js";import"../../chunks/drawUtils.js";import"../../views/draw/PolygonDrawAction.js";import"../../views/draw/PolylineDrawAction.js";import"../../views/draw/SegmentDrawAction.js";import"../../chunks/surfaceCoordinateSystems.js";import"../../chunks/mat2d.js";import"../../chunks/mat2df64.js";import"../../chunks/quat.js";import"../../chunks/projectPointToVector.js";import"../../chunks/defaults.js";import"../../chunks/defaultsJSON.js";import"../../chunks/drapedUtils.js";const Y=1e5;let $=class extends G{constructor(e){super(e),this._drawActive=!1,this._measurementLayer=new x({internal:!0,listMode:"hide",visible:!1}),this._manipulatorLayer=new x({internal:!0,listMode:"hide",visible:!1}),this._vertices=[],this.geodesicDistanceThreshold=1e5,this.measurement=null,this.measurementLabel=null}initialize(){F("esri/core/t9n/Units").then((e=>{this.messages=e})),this.addHandles(V((async()=>{this.messages=await F("esri/core/t9n/Units")})));const e=this.view;this._draw=new I({view:e}),e.map.addMany([this._measurementLayer,this._manipulatorLayer]),e.focus(),this.addHandles([t((()=>[this.unit,this.geodesicDistanceThreshold,this.messages]),(()=>{this._updateGraphics()}),s),t((()=>[this.view.effectiveTheme.accentColor,this.view.effectiveTheme.textColor]),(()=>{if(!this._vertices.length)return;const e=this._vertices.map((({coord:e})=>e));for(const{handle:e}of this._vertices)e.remove();this._vertices=[],this._measurementLayer.removeAll(),this._manipulatorLayer.removeAll(),this.manipulators.removeAll(),this._updateSketch(e)}))])}destroy(){const{map:e}=this.view;this._draw.view=null,this._draw=y(this._draw),e.removeMany([this._measurementLayer,this._manipulatorLayer]),this._measurementLayer.removeAll(),this._manipulatorLayer.removeAll(),this._set("measurement",null),this._set("measurementLabel",null),this._measurementLayer=y(this._measurementLayer),this._manipulatorLayer=y(this._manipulatorLayer),this._resetVertices()}get cursor(){return this._drawActive?"crosshair":null}set editable(e){this._set("editable",e),e||this._draw.reset()}onActivate(){this._drawActive||0!==this._vertices.length||this._startSketch()}onShow(){this._measurementLayer.visible=!0,this._manipulatorLayer.visible=!0}onHide(){this._measurementLayer.visible=!1,this._manipulatorLayer.visible=!1}reset(){this.manipulators.removeAll(),this._resetVertices(),this._measurementLayer.removeAll(),this._manipulatorLayer.removeAll(),this._set("measurement",null),this._set("measurementLabel",null),this._draw.reset(),this._drawActive=!1}_resetVertices(){for(const{handle:e}of this._vertices)e.remove();this._vertices=[]}_startSketch(){this._drawActive=!0;const e=this._draw.create("polyline",{mode:"click"});e.on(["vertex-add","vertex-update","vertex-remove","cursor-update","undo","redo"],(e=>this._updateSketch(e.vertices))),e.on("draw-complete",(()=>this._stopSketch()))}_stopSketch(){if(this._vertices.length<3)return this.reset(),void this._startSketch();this.manipulators.forEach((({manipulator:e})=>{e.interactive=!0})),this._drawActive=!1,this.finishToolCreation()}_updateSketch(e){const t=this.view.spatialReference;if(t&&(!te(t)||a())){for(;this._vertices.length>e.length;){const{handle:e,manipulator:t}=this._vertices.pop();e.remove(),this.manipulators.remove(t)}for(let s=this._vertices.length;s<e.length;s++){const[r,i]=e[s],o=ee(new B({x:r,y:i,spatialReference:t}),this.view,this._manipulatorLayer);this.manipulators.add(o);const n=O(o,((e,t)=>{t.next(q(this.view)).next(E(e.graphic,P.Local)).next((()=>{const t=e.graphic.geometry;this._vertices[s].coord=[t.x,t.y],this._updateGraphics()}))}));this._vertices.push({manipulator:o,coord:[r,i],handle:n})}if(this._vertices.length){const s=this._vertices.length-1,r=this._vertices[s],[i,o]=e[s];r.coord[0]===i&&r.coord[1]===o||(r.coord=[i,o],r.manipulator.graphic.geometry=new B({x:i,y:o,spatialReference:t}));const n=this._drawActive?this._vertices[s].manipulator:null;this.manipulators.forEach((({manipulator:e})=>{e.interactive=null==n||e!==n}))}this._updateGraphics()}}_updateGraphics(){if(this._vertices.length<2)return void this._measurementLayer.removeAll();const e=function(e,t,s){if(2===e.length){const r=new J({paths:e,spatialReference:t});let i;if(t?.isGeographic)if(M(t))i=C(r,Y);else{const e=p(r,Z.WGS84),s=C(e,Y);i=p(s,t)}else if(t?.isWebMercator)i=w(r,Y,"meters");else if(S(r,"meters")>=s){const e=p(r,Z.WGS84),s=C(e,Y);i=p(s,t)}else i=r;return{measurement:null,fillGeometry:null,outlineGeometry:i}}e.push(e[0]);const r=new J({paths:[e],spatialReference:t}),i=new K({rings:[e],spatialReference:t});let o,n,m=null,a=null;if(t?.isGeographic)if(M(t)){if(m=C(r,Y),a=C(i,Y),a=_(a),!a)return null;o=A([r],"meters")[0],n=T([a],"square-meters")[0]}else{const e=Z.WGS84,s=p(r,e),l=p(i,e);if(m=C(s,Y),a=C(l,Y),a=_(a),!a)return null;o=A([s],"meters")[0],n=T([a],"square-meters")[0],m=p(m,t),a=p(a,t)}else if(t?.isWebMercator){if(m=w(r,Y,"meters"),a=w(i,Y,"meters"),a=_(a),!a)return null;o=D(r,"meters"),n=L(a,"square-meters")}else{const e=S(r,"meters");if(e>=s){const e=Z.WGS84,s=p(r,e),l=p(i,e);if(m=C(s,Y),a=C(l,Y),a=_(a),!a)return null;o=A([s],"meters")[0],n=T([a],"square-meters")[0],m=p(m,t),a=p(a,t)}else{if(m=r,a=_(i),!a)return null;o=e,n=U(a,"square-meters")}}return{measurement:{geometry:a,area:n,perimeter:o},fillGeometry:a,outlineGeometry:m}}(this._vertices.map((({coord:e})=>e)),this.view.spatialReference,this.geodesicDistanceThreshold);if(!e)return;const{measurement:t,fillGeometry:s,outlineGeometry:r}=e;this._set("measurement",t);const o=t?function(e,t,s){if(!t||!e)return null;const r={area:null,perimeter:null},{area:o,perimeter:n}=t;switch(s){case"metric":r.area=v(e,o,"square-meters");break;case"imperial":r.area=f(e,o,"square-meters");break;default:{const t=i(o,"square-meters",s);r.area=k(e,t,s);break}}const m=function(e){switch(e){case"metric":case"ares":case"hectares":return"metric";case"imperial":case"acres":return"imperial";case"square-inches":return"inches";case"square-feet":return"feet";case"square-yards":return"yards";case"square-miles":return"miles";case"square-us-feet":return"us-feet";case"square-meters":return"meters";case"square-kilometers":return"kilometers";case"square-millimeters":return"millimeters";case"square-centimeters":return"centimeters";case"square-decimeters":return"decimeters";default:return null}}(s);if(m)switch(m){case"metric":r.perimeter=g(e,n,"meters");break;case"imperial":r.perimeter=b(e,n,"meters");break;default:{const t=i(n,"meters",m);r.perimeter=k(e,t,m);break}}else r.perimeter="";return r}(this.messages,t,this.unit):null;if(this._set("measurementLabel",o),!s&&!r)return;let n,m,a;const{graphics:l}=this._measurementLayer,c=3===l.length,{effectiveTheme:y}=this.view;c?(n=l.at(0),m=l.at(1),a=l.at(2)):(n=new u({symbol:new z({color:h(y.accentColor,.3),outline:null})}),m=new u({symbol:new H({color:y.accentColor,width:2})}),a=new u({symbol:new W({color:y.textColor,font:new Q({size:14,family:"sans-serif"}),haloColor:h(j(y.textColor,d.Low),.5),haloSize:2})}),l.removeAll(),l.addMany([n,m,a])),n.geometry=s,m.geometry=r,a.geometry=s?.centroid,a.symbol.text=o?.area??""}};function ee(e,t,s){const r={style:"circle",color:h(t.effectiveTheme.accentColor,.5),outline:{type:"simple-line",width:0}},i=new N({...r,size:8}),o=new N({...r,size:12}),n=new u({geometry:e,symbol:i});return new R({view:t,layer:s,graphic:n,focusedSymbol:o})}function te(e){if(!e)return!1;const{isGeographic:t,isWebMercator:s,isWGS84:r}=e;return t&&!r&&!M(e)||!t&&!s}e([n()],$.prototype,"_drawActive",void 0),e([n({readOnly:!0})],$.prototype,"cursor",null),e([n({value:!0})],$.prototype,"editable",null),e([n({type:Number})],$.prototype,"geodesicDistanceThreshold",void 0),e([n({readOnly:!0})],$.prototype,"measurement",void 0),e([n({readOnly:!0})],$.prototype,"measurementLabel",void 0),e([n()],$.prototype,"messages",void 0),e([n()],$.prototype,"unit",void 0),e([n({constructOnly:!0})],$.prototype,"view",void 0),$=e([m("esri.widgets.AreaMeasurement2D.AreaMeasurement2DTool")],$);let se=class extends X{constructor(e){super(e),this.supportedViewType="2d",this.unsupportedErrorMessage="AreaMeasurement2DViewModel is only supported in 2D views.",this.geodesicDistanceThreshold=1e5}initialize(){this.addHandles([t((()=>this.view?.spatialReference),(()=>this.clear())),t((()=>this.unit),(e=>{null!=this.tool&&(this.tool.unit=e)}),s),t((()=>this.geodesicDistanceThreshold),(e=>{null!=this.tool&&(this.tool.geodesicDistanceThreshold=e)}),s)])}get measurement(){return null!=this.tool?this.tool.measurement:null}get measurementLabel(){return null!=this.tool?this.tool.measurementLabel:null}get state(){return this.disabled||null==this.view||null==this.view.spatialReference?"disabled":this.tool?.measurement?this.tool.active?"measuring":"measured":"ready"}get unit(){return this._validateUnit(this.defaultUnit)}set unit(e){this._overrideIfSome("unit",this._validateUnit(e))}get unitOptions(){return o}set unitOptions(e){this._overrideIfSome("unitOptions",this._validateUnits(e))}async start(){const e=this.view;null!=e&&(await r((()=>e.ready)),te(e.spatialReference)&&await l()),this.createTool({interactive:!0})}clear(){this.removeTool()}constructTool(){return new $({view:this.view,visible:this.visible,geodesicDistanceThreshold:this.geodesicDistanceThreshold,unit:this.unit})}_validateUnit(e){const{unitOptions:t,defaultUnit:s}=this;return null!=e&&t.includes(e)?e:t.includes(s)?s:t.length>0?t[0]:s}_validateUnits(e){if(null==e)return[];const t=e.filter((e=>o.includes(e)));return 0===t.length?o.slice():t}};e([n(c)],se.prototype,"defaultUnit",void 0),e([n({type:Number})],se.prototype,"geodesicDistanceThreshold",void 0),e([n({readOnly:!0})],se.prototype,"measurement",null),e([n({readOnly:!0})],se.prototype,"measurementLabel",null),e([n({readOnly:!0})],se.prototype,"state",null),e([n({type:String})],se.prototype,"unit",null),e([n({type:[String]})],se.prototype,"unitOptions",null),se=e([m("esri.widgets.AreaMeasurement2D.AreaMeasurement2DViewModel")],se);const re=se;export{re as default};
