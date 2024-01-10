/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{id as e}from"../kernel.js";import t from"../request.js";import r from"../core/Error.js";import{J as i}from"../chunks/jsonMap.js";import{p as o,c as s,d as a}from"../chunks/screenUtils.js";import{normalize as n,dataComponents as l}from"../core/urlUtils.js";import p from"../geometry/Polygon.js";import{collectLabelingFields as m}from"../layers/support/fieldUtils.js";import{g as c}from"../chunks/floorFilterUtils.js";import{d as u,e as y,f as d,c as f,h as b}from"../chunks/visualVariableUtils.js";import{a as h,g}from"../chunks/utils6.js";import{s as j,e as S}from"../chunks/submitJob.js";import{t as w,a as x}from"../chunks/layoutTemplate.js";import I from"./support/PrintTemplate.js";import"../chunks/typedArrayUtil.js";import"../config.js";import"../core/lang.js";import"../chunks/Logger.js";import"../core/JSONSupport.js";import"../chunks/tslib.es6.js";import"../core/Accessor.js";import"../core/Handles.js";import"../chunks/maybe.js";import"../core/accessorSupport/decorators/subclass.js";import"../chunks/metadata.js";import"../chunks/utils.js";import"../chunks/handleUtils.js";import"../chunks/tracking.js";import"../chunks/ensureType.js";import"../core/accessorSupport/decorators/property.js";import"../chunks/ObjectPool.js";import"../chunks/ObservableBase.js";import"../core/scheduling.js";import"../chunks/nextTick.js";import"../chunks/PooledArray.js";import"../core/promiseUtils.js";import"../chunks/time.js";import"../chunks/writer.js";import"../geometry/Extent.js";import"../geometry/Geometry.js";import"../chunks/reader.js";import"../geometry/SpatialReference.js";import"../chunks/unitUtils.js";import"../chunks/Ellipsoid.js";import"../chunks/assets.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"../chunks/Axis.js";import"../chunks/extentUtils.js";import"../chunks/aaBoundingRect.js";import"../chunks/mathUtils.js";import"../chunks/vec3.js";import"../chunks/vec3f64.js";import"../chunks/common.js";import"../chunks/zmUtils.js";import"../core/sql.js";import"../intl.js";import"../chunks/date.js";import"../chunks/locale.js";import"../chunks/timeZoneUtils.js";import"../chunks/datetime.js";import"../chunks/messages.js";import"../chunks/arcadeOnDemand.js";import"../geometry.js";import"../geometry/Multipoint.js";import"../geometry/Polyline.js";import"../chunks/typeUtils.js";import"../geometry/support/jsonUtils.js";import"../Color.js";import"../chunks/colorUtils.js";import"../Graphic.js";import"../PopupTemplate.js";import"../core/Clonable.js";import"../core/Collection.js";import"../core/Evented.js";import"../chunks/shared.js";import"../chunks/SimpleObservable.js";import"../popup/content.js";import"../popup/content/AttachmentsContent.js";import"../popup/content/Content.js";import"../popup/content/CustomContent.js";import"../popup/content/ExpressionContent.js";import"../popup/ElementExpressionInfo.js";import"../popup/content/FieldsContent.js";import"../popup/FieldInfo.js";import"../chunks/enumeration.js";import"../popup/support/FieldInfoFormat.js";import"../popup/content/MediaContent.js";import"../popup/content/BarChartMediaInfo.js";import"../popup/content/mixins/ChartMediaInfo.js";import"../popup/content/mixins/MediaInfo.js";import"../popup/content/support/ChartMediaInfoValue.js";import"../popup/content/support/ChartMediaInfoValueSeries.js";import"../chunks/chartMediaInfoUtils.js";import"../popup/content/ColumnChartMediaInfo.js";import"../popup/content/ImageMediaInfo.js";import"../popup/content/support/ImageMediaInfoValue.js";import"../popup/content/LineChartMediaInfo.js";import"../popup/content/PieChartMediaInfo.js";import"../popup/content/RelationshipContent.js";import"../popup/support/RelatedRecordsInfoFieldOrder.js";import"../popup/content/TextContent.js";import"../popup/ExpressionInfo.js";import"../popup/LayerOptions.js";import"../popup/RelatedRecordsInfo.js";import"../support/actions/ActionBase.js";import"../core/Identifiable.js";import"../support/actions/ActionButton.js";import"../support/actions/ActionToggle.js";import"../symbols.js";import"../symbols/CIMSymbol.js";import"../symbols/Symbol.js";import"../symbols/ExtrudeSymbol3DLayer.js";import"../symbols/Symbol3DLayer.js";import"../chunks/utils4.js";import"../symbols/edges/Edges3D.js";import"../chunks/materialUtils.js";import"../chunks/opacityUtils.js";import"../symbols/edges/SketchEdges3D.js";import"../symbols/edges/SolidEdges3D.js";import"../chunks/Symbol3DMaterial.js";import"../symbols/FillSymbol.js";import"../symbols/SimpleLineSymbol.js";import"../symbols/LineSymbol.js";import"../symbols/LineSymbolMarker.js";import"../chunks/lineMarkers.js";import"../symbols/FillSymbol3DLayer.js";import"../symbols/patterns/LineStylePattern3D.js";import"../symbols/patterns/StylePattern3D.js";import"../chunks/utils5.js";import"../chunks/colors.js";import"../chunks/symbolLayerUtils3D.js";import"../chunks/aaBoundingBox.js";import"../symbols/Font.js";import"../symbols/IconSymbol3DLayer.js";import"../chunks/persistableUrlUtils.js";import"../chunks/Symbol3DAnchorPosition2D.js";import"../symbols/LabelSymbol3D.js";import"../symbols/Symbol3D.js";import"../chunks/collectionUtils.js";import"../portal/Portal.js";import"../core/Loadable.js";import"../core/Promise.js";import"../portal/PortalGroup.js";import"../portal/PortalQueryParams.js";import"../portal/PortalQueryResult.js";import"../portal/PortalUser.js";import"../portal/PortalFolder.js";import"../symbols/LineSymbol3DLayer.js";import"../symbols/LineStyleMarker3D.js";import"../symbols/ObjectSymbol3DLayer.js";import"../symbols/PathSymbol3DLayer.js";import"../symbols/TextSymbol3DLayer.js";import"../symbols/WaterSymbol3DLayer.js";import"../symbols/support/StyleOrigin.js";import"../chunks/Thumbnail.js";import"../chunks/calloutUtils.js";import"../symbols/callouts/Callout3D.js";import"../symbols/callouts/LineCallout3D.js";import"../symbols/support/Symbol3DVerticalOffset.js";import"../symbols/LineSymbol3D.js";import"../symbols/MarkerSymbol.js";import"../symbols/MeshSymbol3D.js";import"../symbols/PictureFillSymbol.js";import"../chunks/urlUtils.js";import"../symbols/PictureMarkerSymbol.js";import"../symbols/PointSymbol3D.js";import"../symbols/PolygonSymbol3D.js";import"../core/reactiveUtils.js";import"../chunks/asyncUtils.js";import"../symbols/SimpleFillSymbol.js";import"../symbols/SimpleMarkerSymbol.js";import"../symbols/TextSymbol.js";import"../symbols/WebStyleSymbol.js";import"../chunks/compilerUtils.js";import"../chunks/lengthUtils.js";import"./geoprocessor/GPOptions.js";import"./support/JobInfo.js";import"../geometry/support/normalizeUtils.js";import"../chunks/normalizeUtilsCommon.js";import"../chunks/simplify.js";import"../chunks/utils7.js";import"../layers/support/Field.js";import"../chunks/domains.js";import"../layers/support/CodedValueDomain.js";import"../layers/support/Domain.js";import"../layers/support/InheritedDomain.js";import"../layers/support/RangeDomain.js";import"../chunks/fieldType.js";import"../layers/support/MapImage.js";import"./support/DataFile.js";import"./support/FeatureSet.js";import"./support/LinearUnit.js";import"./support/ParameterValue.js";import"./support/RasterData.js";import"./support/GPMessage.js";import"../portal/PortalItem.js";import"../portal/PortalItemResource.js";import"../portal/PortalRating.js";const D="simple-marker",v="picture-marker",L="simple-line",k="simple-fill",P="shield-label-symbol",T="text";function M(e,t){const{graphic:r,renderer:i,symbol:s}=t,a=s.type;if(a===T||a===P||!("visualVariables"in i)||!i.visualVariables)return;const n=i.getVisualVariablesForType("size"),l=i.getVisualVariablesForType("color"),p=i.getVisualVariablesForType("opacity"),m=i.getVisualVariablesForType("rotation"),c=n[0],b=l[0],h=p[0],g=m[0];if(c){const t=a===D?s.style:null,i=u(c,r,{shape:t});null!=i&&(a===D?e.size=o(i):a===v?(e.width=o(i),e.height=o(i)):a===L?e.width=o(i):e.outline&&(e.outline.width=o(i)))}if(b){const t=y(b,r);(t&&a===D||a===L||a===k)&&(e.color=t?t.toJSON():void 0)}if(h){const t=d(h,r);null!=t&&e.color&&(e.color[3]=Math.round(255*t))}g&&(e.angle=-f(i,r))}function E(e){return"bing-maps"===e?.type}function V(e){return e&&"blendMode"in e&&"effect"in e}function O(e){return"csv"===e?.type}function U(e){return"esri.views.2d.layers.GroupLayerView2D"===e?.declaredClass}function F(e){const t=e.layer;if(V(t)){const r=t.blendMode;if((!r||"normal"===r)&&(t.effect||"featureEffect"in e&&e.featureEffect))return!0}return!1}const A=new i({"Attribute List Letter ANSI A Landscape":"attribute-list-letter-ansi-a-landscape","Attribute List Letter ANSI A Portrait":"attribute-list-letter-ansi-a-portrait","Attribute List With Group Letter ANSI A Landscape":"attribute-list-with-group-letter-ansi-a-landscape","Attribute List With Group Letter ANSI A Portrait":"attribute-list-with-group-letter-ansi-a-portrait","Page per Feature Letter ANSI A Landscape":"page-per-feature-letter-ansi-a-landscape","Page per Feature Letter ANSI A Portrait":"page-per-feature-letter-ansi-a-portrait"});A.fromJSON.bind(A);const C=A.toJSON.bind(A),R={Feet:"ft",Kilometers:"km",Meters:"m",Miles:"mi"},N=new i({esriFeet:"Feet",esriKilometers:"Kilometers",esriMeters:"Meters",esriMiles:"Miles"}),J=new i({esriExecutionTypeSynchronous:"sync",esriExecutionTypeAsynchronous:"async"}),G=new Map;async function z(e,r,i){const o=$(e);let s=G.get(o);return Promise.resolve().then((()=>s?{data:s.gpMetadata}:(s={gpServerUrl:o,is11xService:!1,legendLayerNameMap:{},legendLayers:[]},t(o,h({f:"json"},i))))).then((e=>(s.gpMetadata=e.data,s.cimVersion=s.gpMetadata.cimVersion,s.is11xService=!!s.cimVersion,G.set(o,s),B(r,s)))).then((t=>{const o=fe(s);let a;const n=e=>"sync"===o?e.results?.[0]?.value:a.fetchResultData("Output_File",null,i).then((e=>e.value));return"async"===o?j(e,t,void 0,i).then((e=>(a=e,e.waitForJobCompletion({interval:r.updateDelay}).then(n)))):S(e,t,void 0,i).then(n)}))}async function _(e){const t=$(e);return fe(G.get(t))}async function B(t,i){i=i||{is11xService:!1,legendLayerNameMap:{},legendLayers:[]};const o=t.template||new I;null==o.showLabels&&(o.showLabels=!0);const s=o.exportOptions;let a;const n=w(o.layout);if(s&&(a={dpi:s.dpi},"map_only"===n.toLowerCase()||""===n)){const e=s.width,t=s.height;a.outputSize=null!=e&&null!=t?[e,t]:void 0}const l=o.layoutOptions;let p;if(l){let e,t;"Miles"===l.scalebarUnit||"Kilometers"===l.scalebarUnit?(e="Kilometers",t="Miles"):"Meters"!==l.scalebarUnit&&"Feet"!==l.scalebarUnit||(e="Meters",t="Feet"),p={titleText:l.titleText,authorText:l.authorText,copyrightText:l.copyrightText,customTextElements:l.customTextElements,elementOverrides:l.elementOverrides,scaleBarOptions:{metricUnit:N.toJSON(e),metricLabel:e?R[e]:void 0,nonMetricUnit:N.toJSON(t),nonMetricLabel:t?R[t]:void 0}}}let m=null;l?.legendLayers&&(m=l.legendLayers.map((e=>{const t=e.layerId;i.legendLayerNameMap[t]=e.title;const r={id:t};return e.subLayerIds&&(r.subLayerIds=e.subLayerIds),r})));const c=await async function(e,t,r){const i=e.view;let o=i.spatialReference;const s={operationalLayers:await W(i,t,r)};t.includeTables&&(s.tables=await async function(e){const t=[],r=[];for(const t of e.map.allTables)"feature"!==t.type||t.loaded||r.push(t.load());r.length&&await Promise.allSettled(r);for(const r of e.map.allTables)if("feature"===r.type&&r.loaded&&r.isTable&&"feature-layer"===r.source?.type){const e={id:(i=r.write()).id,title:i.title,customParameters:i.customParameters,layerDefinition:{definitionExpression:i.layerDefinition?.definitionExpression},url:i.url};ce(e,r),t.push(e)}var i;return t.length?t:void 0}(i));let a=r.ssExtent||e.extent||i.extent;if(o&&o.isWrappable&&(a=a.clone()._normalize(!0),o=a.spatialReference),s.mapOptions={extent:a&&a.toJSON(),spatialReference:o&&o.toJSON(),showAttribution:t.attributionVisible},r.ssExtent=null,i.background&&(s.background=i.background.toJSON()),i.rotation&&(s.mapOptions.rotation=-i.rotation),t.scalePreserved&&(s.mapOptions.scale=t.outScale||i.scale),null!=i.timeExtent){const e=null!=i.timeExtent.start?i.timeExtent.start.getTime():null,t=null!=i.timeExtent.end?i.timeExtent.end.getTime():null;s.mapOptions.time=[e,t]}return t.reportOptions&&(s.reportOptions=t.reportOptions),s}(t,o,i);if(c.operationalLayers){const e=new RegExp("[\\u4E00-\\u9FFF\\u0E00-\\u0E7F\\u0900-\\u097F\\u3040-\\u309F\\u30A0-\\u30FF\\u31F0-\\u31FF]"),t=/[\u0600-\u06FF]/,o=r=>{const i=r.text,o=r.font,s=o?.family?.toLowerCase();i&&o&&("arial"===s||"arial unicode ms"===s)&&(o.family=e.test(i)?"Arial Unicode MS":"Arial","normal"!==o.style&&t.test(i)&&(o.family="Arial Unicode MS"))},s=()=>{throw new r("print:cim-symbol-unsupported","CIMSymbol is not supported by a print service published from ArcMap")};c.operationalLayers.forEach((e=>{e.featureCollection?.layers?e.featureCollection.layers.forEach((e=>{if(e.layerDefinition?.drawingInfo?.renderer?.symbol){const t=e.layerDefinition.drawingInfo.renderer;"esriTS"===t.symbol.type?o(t.symbol):"CIMSymbolReference"!==t.symbol.type||i.is11xService||s()}e.featureSet?.features&&e.featureSet.features.forEach((e=>{e.symbol&&("esriTS"===e.symbol.type?o(e.symbol):"CIMSymbolReference"!==e.symbol.type||i.is11xService||s())}))})):!i.is11xService&&e.layerDefinition?.drawingInfo?.renderer&&JSON.stringify(e.layerDefinition.drawingInfo.renderer).includes('"type":"CIMSymbolReference"')&&s()}))}t.outSpatialReference&&(c.mapOptions.spatialReference=t.outSpatialReference.toJSON()),Object.assign(c,{exportOptions:a,layoutOptions:p||{}}),Object.assign(c.layoutOptions,{legendOptions:{operationalLayers:null!=m?m:i.legendLayers.slice()}}),i.legendLayers.length=0,G.set(i.gpServerUrl,i);const u={Web_Map_as_JSON:JSON.stringify(c),Format:x(o.format),Layout_Template:n,Layout_Item_ID:void 0,Report_Template:C(o.report),Report_Item_ID:void 0};if(o.layoutItem){delete u.Layout_Template;const t=o.layoutItem;await t.load(),"public"!==t.access&&e&&await e.getCredential(i.gpServerUrl),u.Layout_Item_ID=JSON.stringify({id:t.id})}if(o.reportItem){delete u.Report_Template;const t=o.reportItem;await t.load(),"public"!==t.access&&e&&await e.getCredential(i.gpServerUrl),u.Report_Item_ID=JSON.stringify({id:t.id})}return t.extraParameters&&Object.assign(u,t.extraParameters),u}function $(e){let t=e;const r=t.lastIndexOf("/GPServer/");return r>0&&(t=t.slice(0,r+9)),t}async function W(e,t,r){const i=[],o={layerView:null,printTemplate:t,view:e};let s=0;t.scalePreserved&&(s=t.outScale||e.scale);const a=function(e,t){const r=e.allLayerViews.items;if(t===e.scale)return r.filter((e=>!e.suspended));const i=new Array;for(const e of r)U(e.parent)&&!i.includes(e.parent)||!e.visible||t&&"isVisibleAtScale"in e&&!e.isVisibleAtScale(t)||i.push(e);return i}(e,s);for(const e of a){const t=e.layer;if(!t.loaded||"group"===t?.type)continue;let s;o.layerView=e,s=F(e)?await oe(t,o,r):E(t)?q(t):O(t)?await K(t,o,r):"feature"===t?.type?await H(t,o,r):"geojson"===t?.type?await Z(t,o,r):"graphics"===t?.type?await X(t,o,r):"imagery"===t?.type?Y(t,r):"imagery-tile"===t?.type?await ee(t,o,r):"kml"===t?.type?await te(t,o,r):"map-image"===t?.type?re(t,o,r):"map-notes"===t?.type?await ie(o,r):"open-street-map"===t?.type?{type:"OpenStreetMap"}:"stream"===t?.type?await se(t,o,r):"tile"===t?.type?ae(t,r):"vector-tile"===t?.type?await ne(t,o,r):"web-tile"===t?.type?le(t):"wms"===t?.type?pe(t,r):"wmts"===t?.type?me(t):await oe(t,o,r),s&&(Array.isArray(s)?i.push(...s):(s.id=t.id,s.title=r.legendLayerNameMap[t.id]||t.title,s.opacity=t.opacity,s.minScale=t.minScale||0,s.maxScale=t.maxScale||0,V(t)&&t.blendMode&&"normal"!==t.blendMode&&(s.blendMode=t.blendMode),i.push(s)))}if(s&&i.forEach((e=>{e.minScale=0,e.maxScale=0})),e.graphics&&e.graphics.length){const o=await Q(null,e.graphics,t,r);o&&i.push(o)}return i}function q(e){return{culture:e.culture,key:e.key,type:"BingMaps"+("aerial"===e.style?"Aerial":"hybrid"===e.style?"Hybrid":"Road")}}async function K(e,t,r){e.legendEnabled&&r.legendLayers.push({id:e.id});const i=t.layerView,o=t.printTemplate;let s;return!r.is11xService||i.filter?Q(e,await de(i),o,r):(s={type:"CSV"},e.write(s,{origin:"web-map"}),delete s.popupInfo,delete s.layerType,s.showLabels=o.showLabels&&e.labelsVisible,s)}async function Q(e,t,r,i){let o;const s={layerDefinition:{name:"polygonLayer",geometryType:"esriGeometryPolygon",drawingInfo:{renderer:null}},featureSet:{geometryType:"esriGeometryPolygon",features:[]}},a={layerDefinition:{name:"polylineLayer",geometryType:"esriGeometryPolyline",drawingInfo:{renderer:null}},featureSet:{geometryType:"esriGeometryPolyline",features:[]}},n={layerDefinition:{name:"pointLayer",geometryType:"esriGeometryPoint",drawingInfo:{renderer:null}},featureSet:{geometryType:"esriGeometryPoint",features:[]}},l={layerDefinition:{name:"multipointLayer",geometryType:"esriGeometryMultipoint",drawingInfo:{renderer:null}},featureSet:{geometryType:"esriGeometryMultipoint",features:[]}},c={layerDefinition:{name:"pointLayer",geometryType:"esriGeometryPoint",drawingInfo:{renderer:null}},featureSet:{geometryType:"esriGeometryPoint",features:[]}};if(c.layerDefinition.name="textLayer",delete c.layerDefinition.drawingInfo,e){if("esri.layers.FeatureLayer"===e.declaredClass||"esri.layers.StreamLayer"===e.declaredClass?s.layerDefinition.name=a.layerDefinition.name=n.layerDefinition.name=l.layerDefinition.name=i.legendLayerNameMap[e.id]||e.get("arcgisProps.title")||e.title:"esri.layers.GraphicsLayer"===e.declaredClass&&(t=e.graphics.items),e.renderer){const t=e.renderer.toJSON(),r=s.layerDefinition.drawingInfo;r&&(r.renderer=t);const i=a.layerDefinition.drawingInfo;i&&(i.renderer=t);const o=n.layerDefinition.drawingInfo;o&&(o.renderer=t);const p=l.layerDefinition.drawingInfo;p&&(p.renderer=t)}if(r.showLabels&&e.labelsVisible&&"function"==typeof e.write){const t=e.write({},{origin:"web-map"}),r=t.layerDefinition?.drawingInfo?.labelingInfo;if(r){o=!0;const e=s.layerDefinition.drawingInfo;e&&(e.labelingInfo=r);const t=a.layerDefinition.drawingInfo;t&&(t.labelingInfo=r);const i=n.layerDefinition.drawingInfo;i&&(i.labelingInfo=r);const p=l.layerDefinition.drawingInfo;p&&(p.labelingInfo=r)}}}let u;e?.renderer||o||(delete s.layerDefinition.drawingInfo,delete a.layerDefinition.drawingInfo,delete n.layerDefinition.drawingInfo,delete l.layerDefinition.drawingInfo);const y=e?.fieldsIndex,d=e?.renderer;if(y){const t=new Set;o&&await m(t,e),d&&"function"==typeof d.collectRequiredFields&&await d.collectRequiredFields(t,y),u=Array.from(t);const r=y.fields.map((e=>e.toJSON()));s.layerDefinition.fields=r,a.layerDefinition.fields=r,n.layerDefinition.fields=r,l.layerDefinition.fields=r}const f=t?.length;let b;for(let o=0;o<f;o++){const m=t[o]||t.at(o);if(!1===m.visible||!m.geometry)continue;if(b=m.toJSON(),b.hasOwnProperty("popupTemplate")&&delete b.popupTemplate,b.geometry?.z&&delete b.geometry.z,b.symbol?.outline&&"esriCLS"===b.symbol.outline.type&&!i.is11xService)continue;!i.is11xService&&b.symbol?.outline?.color?.[3]&&(b.symbol.outline.color[3]=255);const y=e?.renderer&&("valueExpression"in e.renderer&&e.renderer.valueExpression||"hasVisualVariables"in e.renderer&&e.renderer.hasVisualVariables());if(!b.symbol&&e?.renderer&&y&&!i.is11xService){const t=e.renderer,r=await t.getSymbolAsync(m);if(!r)continue;b.symbol=r.toJSON(),"hasVisualVariables"in t&&t.hasVisualVariables()&&M(b.symbol,{renderer:t,graphic:m,symbol:r})}if(b.symbol&&(b.symbol.angle||delete b.symbol.angle,be(b.symbol)?b.symbol=await ue(b.symbol,i):b.symbol.text&&delete b.attributes),(!r||!r.forceFeatureAttributes)&&u?.length){const e={};u.forEach((t=>{b.attributes?.hasOwnProperty(t)&&(e[t]=b.attributes[t])})),b.attributes=e}"polygon"===m.geometry.type?s.featureSet.features.push(b):"polyline"===m.geometry.type?a.featureSet.features.push(b):"point"===m.geometry.type?b.symbol?.text?c.featureSet.features.push(b):n.featureSet.features.push(b):"multipoint"===m.geometry.type?l.featureSet.features.push(b):"extent"===m.geometry.type&&(b.geometry=p.fromExtent(m.geometry).toJSON(),s.featureSet.features.push(b))}const h=[s,a,l,n,c].filter((e=>e.featureSet.features.length>0));for(const e of h){const t=e.featureSet.features.every((e=>e.symbol));!t||r&&r.forceFeatureAttributes||e.featureSet.features.forEach((e=>{delete e.attributes})),t&&delete e.layerDefinition.drawingInfo,e.layerDefinition.drawingInfo?.renderer&&await ye(e.layerDefinition.drawingInfo.renderer,i)}return h.length?{featureCollection:{layers:h},showLabels:o}:null}async function H(e,t,r){let i;const o=e.renderer,s=parseFloat(r.cimVersion);if("binning"===e.featureReduction?.type||"cluster"===e.featureReduction?.type&&(!r.is11xService||s<2.9)||"pie-chart"===o?.type||"dot-density"===o?.type&&(!r.is11xService||s<2.6))return oe(e,t,r);e.legendEnabled&&r.legendLayers.push({id:e.id});const a=t.layerView,{printTemplate:n,view:l}=t,p=o&&("valueExpression"in o&&o.valueExpression||"hasVisualVariables"in o&&o.hasVisualVariables()),m="feature-layer"!==e.source?.type&&"ogc-feature"!==e.source?.type;if(!r.is11xService&&p||a.filter||m||!o||"field"in o&&null!=o.field&&("string"!=typeof o.field||!e.getField(o.field))){const t=await de(a);i=await Q(e,t,n,r)}else{if(i={id:(u=e.write()).id,title:u.title,opacity:u.opacity,minScale:u.minScale,maxScale:u.maxScale,url:u.url,layerType:u.layerType,customParameters:u.customParameters,layerDefinition:u.layerDefinition,charts:n.includeCharts?u.charts:void 0},i.showLabels=n.showLabels&&e.labelsVisible,ce(i,e),i.layerDefinition?.drawingInfo?.renderer&&(delete i.layerDefinition.minScale,delete i.layerDefinition.maxScale,await ye(i.layerDefinition.drawingInfo.renderer,r),"visualVariables"in o&&o.visualVariables&&o.visualVariables[0])){const e=o.visualVariables[0];if("size"===e.type&&e.maxSize&&"number"!=typeof e.maxSize&&e.minSize&&"number"!=typeof e.minSize){const t=b(e,l.scale);i.layerDefinition.drawingInfo.renderer.visualVariables[0].minSize=t.minSize,i.layerDefinition.drawingInfo.renderer.visualVariables[0].maxSize=t.maxSize}}const t=c(a);t&&(i.layerDefinition||(i.layerDefinition={}),i.layerDefinition.definitionExpression=i.layerDefinition.definitionExpression?`(${i.layerDefinition.definitionExpression}) AND (${t})`:t)}var u;return i}async function Z(e,t,r){return"binning"===e.featureReduction?.type||"cluster"===e.featureReduction?.type?oe(e,t,r):(e.legendEnabled&&r.legendLayers.push({id:e.id}),Q(e,await de(t.layerView),t.printTemplate,r))}async function X(e,{printTemplate:t},r){return Q(e,null,t,r)}function Y(e,t){e.legendEnabled&&t.legendLayers.push({id:e.id});const r={layerType:(i=e.write()).layerType,customParameters:i.customParameters};var i;if(r.bandIds=e.bandIds,r.compressionQuality=e.compressionQuality,r.format=e.format,r.interpolation=e.interpolation,(e.mosaicRule||e.definitionExpression)&&(r.mosaicRule=e.exportImageServiceParameters.mosaicRule.toJSON()),e.rasterFunction||e.renderer)if(t.is11xService)e.rasterFunction&&(r.renderingRule=e.rasterFunction.toJSON()),e.renderer&&(r.layerDefinition=r.layerDefinition||{},r.layerDefinition.drawingInfo=r.layerDefinition.drawingInfo||{},r.layerDefinition.drawingInfo.renderer=e.renderer.toJSON());else{const t=e.exportImageServiceParameters.combineRendererWithRenderingRule();t&&(r.renderingRule=t.toJSON())}return ce(r,e),r}async function ee(e,t,r){if("flow"===e.renderer?.type)return oe(e,t,r);e.legendEnabled&&r.legendLayers.push({id:e.id});const i={bandIds:(o=e.write()||{}).bandIds,customParameters:o.customParameters,interpolation:o.interpolation,layerDefinition:o.layerDefinition};var o;return i.layerType="ArcGISImageServiceLayer",ce(i,e),i}async function te(e,t,r){const i=t.printTemplate;if(r.is11xService){const t={type:"kml"};return e.write(t,{origin:"web-map"}),delete t.layerType,t.url=n(e.url),t}{const o=[],s=t.layerView;s.allVisibleMapImages.forEach(((t,r)=>{const i={id:`${e.id}_image${r}`,type:"image",title:e.id,minScale:e.minScale||0,maxScale:e.maxScale||0,opacity:e.opacity,extent:t.extent};"data:image/png;base64,"===t.href.substr(0,22)?i.imageData=t.href.substr(22):i.url=t.href,o.push(i)}));const a=[...s.allVisiblePoints.items,...s.allVisiblePolylines.items,...s.allVisiblePolygons.items],n={id:e.id,...await Q(null,a,i,r)};return o.push(n),o}}function re(e,{view:t},r){let i;const o={id:e.id,subLayerIds:[]};let s=[];const a=t.scale,n=e=>{const t=0===a,r=0===e.minScale||a<=e.minScale,i=0===e.maxScale||a>=e.maxScale;if(e.visible&&(t||r&&i))if(e.sublayers)e.sublayers.forEach(n);else{const t=e.toExportImageJSON(),r={id:e.id,name:e.title,layerDefinition:{drawingInfo:t.drawingInfo,definitionExpression:t.definitionExpression,source:t.source}};s.unshift(r),o.subLayerIds.push(e.id)}};var l;return e.sublayers&&e.sublayers.forEach(n),s.length&&(s=s.map((({id:e,name:t,layerDefinition:r})=>({id:e,name:t,layerDefinition:r}))),i={layerType:(l=e.write()).layerType,customParameters:l.customParameters},i.layers=s,i.visibleLayers=e.capabilities?.exportMap?.supportsDynamicLayers?void 0:o.subLayerIds,ce(i,e),e.legendEnabled&&r.legendLayers.push(o)),i}async function ie({layerView:e,printTemplate:t},r){const i=[],o=e.layer;if(null!=o.featureCollections)for(const e of o.featureCollections){const o=await Q(e,e.source,t,r);o&&i.push(...o.featureCollection.layers)}else if(null!=o.sublayers)for(const e of o.sublayers){const o=await Q(null,e.graphics,t,r);o&&i.push(...o.featureCollection.layers)}return{featureCollection:{layers:i}}}async function oe(e,{printTemplate:t,view:r},i){const o={type:"image"},a={format:"png",ignoreBackground:!0,layers:[e],rotation:0},n=i.ssExtent||r.extent.clone();let p=96,m=!0,c=!0;if(t.exportOptions){const e=t.exportOptions;null!=e.dpi&&e.dpi>0&&(p=e.dpi),null!=e.width&&e.width>0&&(m=e.width%2==r.width%2),null!=e.height&&e.height>0&&(c=e.height%2==r.height%2)}if("map-only"===t.layout&&t.scalePreserved&&(!t.outScale||t.outScale===r.scale)&&96===p&&(!m||!c)&&(a.area={x:0,y:0,width:r.width,height:r.height},m||(a.area.width-=1),c||(a.area.height-=1),!i.ssExtent)){const e=r.toMap(s(a.area.width,a.area.height));n.ymin=e.y,n.xmax=e.x,i.ssExtent=n}o.extent=n.clone()._normalize(!0).toJSON();const u=await r.takeScreenshot(a);return o.imageData=l(u.dataUrl)?.data,o}async function se(e,{layerView:t,printTemplate:r},i){return e.legendEnabled&&i.legendLayers.push({id:e.id}),Q(e,await de(t),r,i)}function ae(e,t){e.legendEnabled&&t.legendLayers.push({id:e.id});const r={layerType:(i=e.write()).layerType,customParameters:i.customParameters};var i;return ce(r,e),r}async function ne(e,t,r){if(r.is11xService&&e.serviceUrl&&e.styleUrl){const t=g(e.styleUrl,e.apiKey),i=g(e.serviceUrl,e.apiKey);if(!t&&!i||"2.1.0"!==r.cimVersion){const r={type:"VectorTileLayer"};return r.styleUrl=n(e.styleUrl),r.token=t,i!==t&&(r.additionalTokens=[{url:e.serviceUrl,token:i}]),r}}return oe(e,t,r)}function le(e){const t=e.urlTemplate?.replace(/\${/g,"{"),r={type:"WebTiledLayer",urlTemplate:t,credits:e.copyright};return e.subDomains&&e.subDomains.length>0&&(r.subDomains=e.subDomains),r}function pe(e,t){let r;const i=[],o=e=>{e.visible&&(e.sublayers?e.sublayers.forEach(o):e.name&&i.unshift(e.name))};return e.sublayers&&e.sublayers.forEach(o),i.length&&(e.legendEnabled&&t.legendLayers.push({id:e.id,subLayerIds:i}),r={type:"wms",customLayerParameters:e.customLayerParameters,customParameters:e.customParameters,transparentBackground:e.imageTransparency,visibleLayers:i,url:n(e.url),version:e.version}),r}function me(e){const t=e.activeLayer;return{type:"wmts",customLayerParameters:e.customLayerParameters,customParameters:e.customParameters,format:t.imageFormat,layer:t.id,style:t.styleId,tileMatrixSet:t.tileMatrixSetId,url:n(e.url)}}function ce(e,t){t.url&&(e.url=n(e.url||t.url),e.token=g(e.url,t.apiKey))}async function ue(e,r){r.canvas||(r.canvas=document.createElement("canvas"));const i=1024;r.canvas.width=i,r.canvas.height=i;const s=r.canvas.getContext("2d");let n,l;if(e.path){const t=new Path2D(e.path);t.closePath(),s.fillStyle=Array.isArray(e.color)?`rgba(${e.color[0]},${e.color[1]},${e.color[2]},${e.color[3]/255})`:"rgb(0,0,0)",s.fill(t);const r=function(e,t=15){const r=e.canvas.width,i=e.canvas.height,o=e.getImageData(0,0,r,i).data;let s,a,n,l,p,m;e:for(a=i;a--;)for(s=r;s--;)if(o[4*(r*a+s)+3]>t){m=a;break e}if(!m)return null;e:for(s=r;s--;)for(a=m+1;a--;)if(o[4*(r*a+s)+3]>t){p=s;break e}e:for(s=0;s<=p;++s)for(a=m+1;a--;)if(o[4*(r*a+s)+3]>t){n=s;break e}e:for(a=0;a<=m;++a)for(s=n;s<=p;++s)if(o[4*(r*a+s)+3]>t){l=a;break e}return{x:n,y:l,width:p-n,height:m-l}}(s);if(!r)return null;s.clearRect(0,0,i,i);const o=a(e.size)/Math.max(r.width,r.height);s.scale(o,o);const p=i/o,m=p/2-r.width/2-r.x,c=p/2-r.height/2-r.y;if(s.translate(m,c),Array.isArray(e.color)&&s.fill(t),e.outline?.width&&Array.isArray(e.outline.color)){const i=e.outline;s.lineWidth=a(i.width)/o,s.lineJoin="round",s.strokeStyle=`rgba(${i.color[0]},${i.color[1]},${i.color[2]},${i.color[3]/255})`,s.stroke(t),r.width+=s.lineWidth,r.height+=s.lineWidth}r.width*=o,r.height*=o;const u=s.getImageData(512-r.width/2,512-r.height/2,Math.ceil(r.width),Math.ceil(r.height));n=u.width,l=u.height,s.canvas.width=n,s.canvas.height=l,s.putImageData(u,0,0)}else{const r="image/svg+xml"===e.contentType?"data:image/svg+xml;base64,"+e.imageData:e.url,i=(await t(r,{responseType:"image"})).data;n=a(e.width),l=a(e.height),s.canvas.width=n,s.canvas.height=l,s.drawImage(i,0,0,s.canvas.width,s.canvas.height)}return{type:"esriPMS",imageData:s.canvas.toDataURL("image/png").substr(22),angle:e.angle,contentType:"image/png",height:o(l),width:o(n),xoffset:e.xoffset,yoffset:e.yoffset}}async function ye(e,t){const r=e.type;if("simple"===r&&be(e.symbol))e.symbol=await ue(e.symbol,t);else if("uniqueValue"===r||"classBreaks"===r){be(e.defaultSymbol)&&(e.defaultSymbol=await ue(e.defaultSymbol,t));const i=e["uniqueValue"===r?"uniqueValueInfos":"classBreakInfos"];if(i)for(const e of i)be(e.symbol)&&(e.symbol=await ue(e.symbol,t))}}async function de(e){return e.queryFeatures(e.createQuery()).then((e=>e.features))}function fe(e){return e.gpMetadata?.executionType?J.fromJSON(e.gpMetadata.executionType):"sync"}function be(e){return e&&(e.path||"image/svg+xml"===e.contentType||e.url?.endsWith(".svg"))}export{z as execute,B as getGpPrintParams,$ as getGpServerUrl,_ as getMode,G as printCacheMap};
