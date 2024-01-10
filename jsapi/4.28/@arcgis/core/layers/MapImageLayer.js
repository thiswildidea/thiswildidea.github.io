/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{_ as s}from"../chunks/tslib.es6.js";import r from"../request.js";import t from"../TimeExtent.js";import o from"../core/Error.js";import{l as e}from"../chunks/loadAll.js";import{M as i}from"../chunks/MultiOriginJSONSupport.js";import{throwIfAbortError as p,isAbortError as m}from"../core/promiseUtils.js";import{property as n}from"../core/accessorSupport/decorators/property.js";import{I as a}from"../chunks/ensureType.js";import"../chunks/typedArrayUtil.js";import{r as l}from"../chunks/reader.js";import{subclass as u}from"../core/accessorSupport/decorators/subclass.js";import{w as c}from"../chunks/writer.js";import{n as j,O as h}from"../core/Accessor.js";import y from"../geometry/Extent.js";import{g as d}from"../chunks/scaleUtils.js";import{U as b}from"../chunks/unitUtils.js";import k from"./Layer.js";import{APIKeyMixin as f}from"./mixins/APIKeyMixin.js";import{ArcGISMapService as g}from"./mixins/ArcGISMapService.js";import{A as S}from"../chunks/ArcGISService.js";import{BlendLayer as U}from"./mixins/BlendLayer.js";import{CustomParametersMixin as v}from"./mixins/CustomParametersMixin.js";import{OperationalLayer as x}from"./mixins/OperationalLayer.js";import{PortalLayer as I}from"./mixins/PortalLayer.js";import{RefreshableLayer as L}from"./mixins/RefreshableLayer.js";import{ScaleRangeLayer as C}from"./mixins/ScaleRangeLayer.js";import{SublayersOwner as P}from"./mixins/SublayersOwner.js";import{TemporalLayer as M}from"./mixins/TemporalLayer.js";import{u as D}from"../chunks/commonProperties2.js";import{E as R}from"../chunks/ExportImageParameters.js";import{a as T}from"../chunks/imageBitmapUtils.js";import O from"./support/Sublayer.js";import{s as F}from"../chunks/sublayerUtils.js";import{s as V}from"../chunks/versionUtils.js";import{t as E}from"../chunks/timeZoneUtils.js";import"../config.js";import"../core/lang.js";import"../kernel.js";import"../core/urlUtils.js";import"../core/JSONSupport.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/Logger.js";import"../core/Handles.js";import"../chunks/maybe.js";import"../chunks/metadata.js";import"../chunks/ObjectPool.js";import"../chunks/ObservableBase.js";import"../chunks/tracking.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../chunks/PooledArray.js";import"../chunks/time.js";import"../chunks/timeUtils.js";import"../chunks/date.js";import"../chunks/jsonMap.js";import"../chunks/locale.js";import"../chunks/datetime.js";import"../chunks/asyncUtils.js";import"../core/Collection.js";import"../core/Evented.js";import"../chunks/shared.js";import"../chunks/SimpleObservable.js";import"../core/Loadable.js";import"../core/Promise.js";import"../geometry/Geometry.js";import"../geometry/SpatialReference.js";import"../chunks/Ellipsoid.js";import"../chunks/assets.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"../chunks/mathUtils.js";import"../chunks/vec3.js";import"../chunks/vec3f64.js";import"../chunks/common.js";import"../geometry.js";import"../geometry/Multipoint.js";import"../chunks/zmUtils.js";import"../geometry/Polygon.js";import"../chunks/Axis.js";import"../chunks/extentUtils.js";import"../chunks/aaBoundingRect.js";import"../geometry/Polyline.js";import"../chunks/typeUtils.js";import"../geometry/support/jsonUtils.js";import"../core/Identifiable.js";import"../chunks/Version.js";import"../chunks/arcgisLayerUrl.js";import"../chunks/persistableUrlUtils.js";import"../chunks/portalItemUtils.js";import"../geometry/projection.js";import"../chunks/projectBuffer.js";import"../chunks/geodesicConstants.js";import"../geometry/support/GeographicTransformation.js";import"../geometry/support/GeographicTransformationStep.js";import"../chunks/zscale.js";import"../chunks/jsonUtils.js";import"../chunks/parser.js";import"../chunks/colorUtils.js";import"../chunks/utils3.js";import"../chunks/screenUtils.js";import"../chunks/mat4.js";import"../chunks/_commonjsHelpers.js";import"../chunks/layerContainerType.js";import"../support/timeUtils.js";import"../chunks/ElevationInfo.js";import"./support/fieldUtils.js";import"../core/sql.js";import"../intl.js";import"../chunks/messages.js";import"../chunks/arcadeOnDemand.js";import"../chunks/unitConversionUtils.js";import"../chunks/lengthUtils.js";import"../chunks/opacityUtils.js";import"../chunks/layerUtils2.js";import"../portal/Portal.js";import"../portal/PortalGroup.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../portal/PortalItem.js";import"../portal/PortalItemResource.js";import"../portal/PortalRating.js";import"../chunks/CollectionFlattener.js";import"../core/reactiveUtils.js";import"../TimeInterval.js";import"../core/Clonable.js";import"../chunks/enumeration.js";import"./support/TimeInfo.js";import"../chunks/floorFilterUtils.js";import"../PopupTemplate.js";import"../popup/content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/Content.js";import"../popup/content/CustomContent.js";import"../popup/content/ExpressionContent.js";import"../popup/ElementExpressionInfo.js";import"../popup/content/FieldsContent.js";import"../popup/FieldInfo.js";import"../popup/support/FieldInfoFormat.js";import"../popup/content/MediaContent.js";import"../popup/content/BarChartMediaInfo.js";import"../popup/content/mixins/ChartMediaInfo.js";import"../popup/content/mixins/MediaInfo.js";import"../popup/content/support/ChartMediaInfoValue.js";import"../Color.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"../chunks/chartMediaInfoUtils.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/RelationshipContent.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../popup/content/TextContent.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/RelatedRecordsInfo.js";import"../support/actions/ActionBase.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"../renderers/ClassBreaksRenderer.js";import"../symbols.js";import"../symbols/CIMSymbol.js";import"../symbols/Symbol.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/Symbol3DLayer.js";import"../chunks/utils4.js";import"../symbols/edges/Edges3D.js";import"../chunks/materialUtils.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"../chunks/Symbol3DMaterial.js";import"../symbols/FillSymbol.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"../chunks/lineMarkers.js";import"../symbols/FillSymbol3DLayer.js";import"../symbols/patterns/LineStylePattern3D.js";import"../symbols/patterns/StylePattern3D.js";import"../chunks/utils5.js";import"../chunks/colors.js";import"../chunks/symbolLayerUtils3D.js";import"../chunks/aaBoundingBox.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"../chunks/Symbol3DAnchorPosition2D.js";import"../symbols/LabelSymbol3D.js";import"../symbols/Symbol3D.js";import"../chunks/collectionUtils.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/LineStyleMarker3D.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"../symbols/support/StyleOrigin.js";import"../chunks/Thumbnail.js";import"../chunks/calloutUtils.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../symbols/support/Symbol3DVerticalOffset.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../symbols/PictureFillSymbol.js";import"../chunks/urlUtils.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"../renderers/Renderer.js";import"../renderers/support/AuthoringInfo.js";import"../renderers/support/AuthoringInfoVisualVariable.js";import"../chunks/colorRamps.js";import"../rest/support/AlgorithmicColorRamp.js";import"../rest/support/ColorRamp.js";import"../rest/support/MultipartColorRamp.js";import"../renderers/mixins/VisualVariablesMixin.js";import"../renderers/visualVariables/ColorVariable.js";import"../renderers/visualVariables/VisualVariable.js";import"../chunks/LegendOptions.js";import"../renderers/visualVariables/support/ColorStop.js";import"../renderers/visualVariables/OpacityVariable.js";import"../renderers/visualVariables/support/OpacityStop.js";import"../renderers/visualVariables/RotationVariable.js";import"../renderers/visualVariables/SizeVariable.js";import"../renderers/visualVariables/support/SizeStop.js";import"../chunks/visualVariableUtils.js";import"../Graphic.js";import"../chunks/compilerUtils.js";import"../renderers/support/ClassBreakInfo.js";import"../chunks/commonProperties.js";import"../symbols/support/jsonUtils.js";import"../renderers/DictionaryRenderer.js";import"../chunks/DictionaryLoader.js";import"../chunks/LRUCache.js";import"../chunks/MemCache.js";import"./support/FieldsIndex.js";import"../chunks/UnknownTimeZone.js";import"../renderers/DotDensityRenderer.js";import"../renderers/support/AttributeColorInfo.js";import"../renderers/HeatmapRenderer.js";import"../renderers/support/HeatmapColorStop.js";import"../chunks/heatmapUtils.js";import"../chunks/vec4.js";import"../chunks/vec4f64.js";import"../renderers/PieChartRenderer.js";import"../renderers/SimpleRenderer.js";import"../renderers/UniqueValueRenderer.js";import"../chunks/diffUtils.js";import"../renderers/support/UniqueValue.js";import"../renderers/support/UniqueValueClass.js";import"../renderers/support/UniqueValueGroup.js";import"../renderers/support/UniqueValueInfo.js";import"../chunks/styleUtils.js";import"../renderers/support/jsonUtils.js";import"../chunks/QueryTask.js";import"../chunks/infoFor3D.js";import"../chunks/DataLayerSource.js";import"./support/Field.js";import"../chunks/domains.js";import"./support/CodedValueDomain.js";import"./support/Domain.js";import"./support/InheritedDomain.js";import"./support/RangeDomain.js";import"../chunks/fieldType.js";import"../chunks/utils6.js";import"../chunks/executeForIds.js";import"../chunks/query.js";import"../geometry/support/normalizeUtils.js";import"../chunks/normalizeUtilsCommon.js";import"../chunks/simplify.js";import"../chunks/utils7.js";import"../chunks/urlUtils2.js";import"../chunks/pbfQueryUtils.js";import"../chunks/pbf.js";import"../chunks/OptimizedGeometry.js";import"../chunks/OptimizedFeature.js";import"../chunks/OptimizedFeatureSet.js";import"../chunks/queryZScale.js";import"../rest/support/Query.js";import"../chunks/FullTextSearch.js";import"../chunks/QuantizationParameters.js";import"../rest/support/StatisticDefinition.js";import"../chunks/executeForExtent.js";import"../chunks/executeQueryJSON.js";import"../rest/support/FeatureSet.js";import"../chunks/executeQueryPBF.js";import"../chunks/featureConversionUtils.js";import"./support/FeatureType.js";import"./support/FeatureTemplate.js";import"./support/LabelClass.js";import"../chunks/labelUtils.js";import"../chunks/defaults.js";import"../chunks/defaultsJSON.js";import"../chunks/labelingInfo.js";import"./support/LayerFloorInfo.js";import"../chunks/serviceCapabilitiesUtils.js";import"../chunks/jsonUtils2.js";import"../rest/support/AttachmentQuery.js";import"../support/popupUtils.js";let w=class extends(U(M(C(P(g(S(x(I(i(L(f(v(k))))))))))))){constructor(...s){super(...s),this.dateFieldsTimeZone=null,this.datesInUnknownTimezone=!1,this.dpi=96,this.gdbVersion=null,this.imageFormat="png24",this.imageMaxHeight=2048,this.imageMaxWidth=2048,this.imageTransparency=!0,this.isReference=null,this.labelsVisible=!1,this.operationalLayerType="ArcGISMapServiceLayer",this.preferredTimeZone=null,this.sourceJSON=null,this.sublayers=null,this.type="map-image",this.url=null}normalizeCtorArgs(s,r){return"string"==typeof s?{url:s,...r}:s}load(s){const r=null!=s?s.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},s).catch(p).then((()=>this._fetchService(r)))),Promise.resolve(this)}readImageFormat(s,r){const t=r.supportedImageFormatTypes;return t&&t.includes("PNG32")?"png32":"png24"}writeSublayers(s,r,t,o){if(!this.loaded||!s)return;const e=s.slice().reverse().flatten((({sublayers:s})=>s&&s.toArray().reverse())).toArray();let i=!1;if(this.capabilities&&this.capabilities.operations.supportsExportMap&&this.capabilities.exportMap?.supportsDynamicLayers){const s=j(o.origin);if(s===h.PORTAL_ITEM){const s=this.createSublayersForOrigin("service").sublayers;i=F(e,s,h.SERVICE)}else if(s>h.PORTAL_ITEM){const s=this.createSublayersForOrigin("portal-item");i=F(e,s.sublayers,j(s.origin))}}const p=[],m={writeSublayerStructure:i,...o};let n=i;e.forEach((s=>{const r=s.write({},m);p.push(r),n=n||"user"===s.originOf("visible")})),p.some((s=>Object.keys(s).length>1))&&(r.layers=p),n&&(r.visibleLayers=e.filter((s=>s.visible)).map((s=>s.id)))}createExportImageParameters(s,r,t,o){const e=o?.pixelRatio||1;s&&this.version>=10&&(s=s.clone().shiftCentralMeridian());const i=new R({layer:this,floors:o?.floors,scale:d({extent:s,width:r})*e}),p=i.toJSON();i.destroy();const m=!o?.rotation||this.version<10.3?{}:{rotation:-o.rotation},n=s?.spatialReference,a=b(n);p.dpi*=e;const l={};if(o?.timeExtent){const{start:s,end:r}=o.timeExtent.toJSON();l.time=s&&r&&s===r?""+s:`${s??"null"},${r??"null"}`}else this.timeInfo&&!this.timeInfo.hasLiveData&&(l.time="null,null");return{bbox:s&&s.xmin+","+s.ymin+","+s.xmax+","+s.ymax,bboxSR:a,imageSR:a,size:r+","+t,...p,...m,...l}}async fetchImage(s,r,t,o){const{data:e}=await this._fetchImage("image",s,r,t,o);return e}async fetchImageBitmap(s,r,t,o){const{data:e,url:i}=await this._fetchImage("blob",s,r,t,o);return T(e,i,o?.signal)}async fetchRecomputedExtents(s={}){const o={...s,query:{returnUpdates:!0,f:"json",...this.customParameters,token:this.apiKey}},{data:e}=await r(this.url,o),{extent:i,fullExtent:p,timeExtent:m}=e,n=i||p;return{fullExtent:n&&y.fromJSON(n),timeExtent:m&&t.fromJSON({start:m[0],end:m[1]})}}loadAll(){return e(this,(s=>{s(this.allSublayers)}))}serviceSupportsSpatialReference(s){return V(this,s)}async _fetchImage(s,t,e,i,p){const n={responseType:s,signal:p?.signal??null,query:{...this.parsedUrl.query,...this.createExportImageParameters(t,e,i,p),f:"image",...this.refreshParameters,...this.customParameters,token:this.apiKey}},a=this.parsedUrl.path+"/export";if(null!=n.query?.dynamicLayers&&!this.capabilities?.exportMap?.supportsDynamicLayers)throw new o("mapimagelayer:dynamiclayer-not-supported",`service ${this.url} doesn't support dynamic layers, which is required to be able to change the sublayer's order, rendering, labeling or source.`,{query:n.query});try{const{data:s}=await r(a,n);return{data:s,url:a}}catch(s){if(m(s))throw s;throw new o("mapimagelayer:image-fetch-error",`Unable to load image: ${a}`,{error:s})}}async _fetchService(s){if(this.sourceJSON)return void this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl});const{data:t,ssl:o}=await r(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters,token:this.apiKey},signal:s});o&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=t,this.read(t,{origin:"service",url:this.parsedUrl})}};s([n(E("dateFieldsTimeReference"))],w.prototype,"dateFieldsTimeZone",void 0),s([n({type:Boolean})],w.prototype,"datesInUnknownTimezone",void 0),s([n()],w.prototype,"dpi",void 0),s([n()],w.prototype,"gdbVersion",void 0),s([n()],w.prototype,"imageFormat",void 0),s([l("imageFormat",["supportedImageFormatTypes"])],w.prototype,"readImageFormat",null),s([n({json:{origins:{service:{read:{source:"maxImageHeight"}}}}})],w.prototype,"imageMaxHeight",void 0),s([n({json:{origins:{service:{read:{source:"maxImageWidth"}}}}})],w.prototype,"imageMaxWidth",void 0),s([n()],w.prototype,"imageTransparency",void 0),s([n({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],w.prototype,"isReference",void 0),s([n({json:{read:!1,write:!1}})],w.prototype,"labelsVisible",void 0),s([n({type:["ArcGISMapServiceLayer"]})],w.prototype,"operationalLayerType",void 0),s([n({json:{read:!1,write:!1}})],w.prototype,"popupEnabled",void 0),s([n(E("preferredTimeReference"))],w.prototype,"preferredTimeZone",void 0),s([n()],w.prototype,"sourceJSON",void 0),s([n({json:{write:{ignoreOrigin:!0}}})],w.prototype,"sublayers",void 0),s([c("sublayers",{layers:{type:[O]},visibleLayers:{type:[a]}})],w.prototype,"writeSublayers",null),s([n({type:["show","hide","hide-children"]})],w.prototype,"listMode",void 0),s([n({json:{read:!1},readOnly:!0,value:"map-image"})],w.prototype,"type",void 0),s([n(D)],w.prototype,"url",void 0),w=s([u("esri.layers.MapImageLayer")],w);const A=w;export{A as default};
