/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import o from"../../Graphic.js";import s from"../../PopupTemplate.js";import{symbolTypes as e}from"../../symbols.js";import{ClonableMixin as r}from"../../core/Clonable.js";import{JSONSupport as i}from"../../core/JSONSupport.js";import{property as p}from"../../core/accessorSupport/decorators/property.js";import"../../chunks/ensureType.js";import"../../chunks/typedArrayUtil.js";import{r as l}from"../../chunks/reader.js";import{subclass as m}from"../../core/accessorSupport/decorators/subclass.js";import{w as n}from"../../chunks/writer.js";import a from"../../geometry/Polygon.js";import{g as c,s as u,t as j,f as y}from"../../chunks/utils12.js";import{e as b}from"../../chunks/networkEnums.js";import"../../geometry.js";import"../../geometry/Extent.js";import"../../chunks/Logger.js";import"../../config.js";import"../../core/lang.js";import"../../geometry/Geometry.js";import"../../geometry/SpatialReference.js";import"../../chunks/unitUtils.js";import"../../chunks/jsonMap.js";import"../../chunks/Ellipsoid.js";import"../../chunks/assets.js";import"../../request.js";import"../../kernel.js";import"../../core/urlUtils.js";import"../../core/Error.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../chunks/metadata.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/ObjectPool.js";import"../../chunks/ObservableBase.js";import"../../chunks/tracking.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../chunks/PooledArray.js";import"../../core/promiseUtils.js";import"../../chunks/time.js";import"../../geometry/Point.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/support/webMercatorUtils.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polyline.js";import"../../chunks/extentUtils.js";import"../../chunks/aaBoundingRect.js";import"../../chunks/mathUtils.js";import"../../chunks/vec3.js";import"../../chunks/vec3f64.js";import"../../chunks/common.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";import"../../chunks/Axis.js";import"../../core/Collection.js";import"../../core/Evented.js";import"../../chunks/shared.js";import"../../chunks/SimpleObservable.js";import"../../layers/support/fieldUtils.js";import"../../core/sql.js";import"../../intl.js";import"../../chunks/date.js";import"../../chunks/locale.js";import"../../chunks/timeZoneUtils.js";import"../../chunks/datetime.js";import"../../chunks/messages.js";import"../../chunks/arcadeOnDemand.js";import"../../popup/content.js";import"../../popup/content/AttachmentsContent.js";import"../../popup/content/Content.js";import"../../popup/content/CustomContent.js";import"../../popup/content/ExpressionContent.js";import"../../popup/ElementExpressionInfo.js";import"../../popup/content/FieldsContent.js";import"../../popup/FieldInfo.js";import"../../chunks/enumeration.js";import"../../popup/support/FieldInfoFormat.js";import"../../popup/content/MediaContent.js";import"../../popup/content/BarChartMediaInfo.js";import"../../popup/content/mixins/ChartMediaInfo.js";import"../../popup/content/mixins/MediaInfo.js";import"../../popup/content/support/ChartMediaInfoValue.js";import"../../Color.js";import"../../chunks/colorUtils.js";import"../../popup/content/support/ChartMediaInfoValueSeries.js";import"../../chunks/chartMediaInfoUtils.js";import"../../popup/content/ColumnChartMediaInfo.js";import"../../popup/content/ImageMediaInfo.js";import"../../popup/content/support/ImageMediaInfoValue.js";import"../../popup/content/LineChartMediaInfo.js";import"../../popup/content/PieChartMediaInfo.js";import"../../popup/content/RelationshipContent.js";import"../../popup/support/RelatedRecordsInfoFieldOrder.js";import"../../popup/content/TextContent.js";import"../../popup/ExpressionInfo.js";import"../../popup/LayerOptions.js";import"../../popup/RelatedRecordsInfo.js";import"../../support/actions/ActionBase.js";import"../../core/Identifiable.js";import"../../support/actions/ActionButton.js";import"../../support/actions/ActionToggle.js";import"../../symbols/CIMSymbol.js";import"../../symbols/Symbol.js";import"../../symbols/ExtrudeSymbol3DLayer.js";import"../../symbols/Symbol3DLayer.js";import"../../chunks/utils4.js";import"../../symbols/edges/Edges3D.js";import"../../chunks/screenUtils.js";import"../../chunks/materialUtils.js";import"../../chunks/opacityUtils.js";import"../../symbols/edges/SketchEdges3D.js";import"../../symbols/edges/SolidEdges3D.js";import"../../chunks/Symbol3DMaterial.js";import"../../symbols/FillSymbol.js";import"../../symbols/SimpleLineSymbol.js";import"../../symbols/LineSymbol.js";import"../../symbols/LineSymbolMarker.js";import"../../chunks/lineMarkers.js";import"../../symbols/FillSymbol3DLayer.js";import"../../symbols/patterns/LineStylePattern3D.js";import"../../symbols/patterns/StylePattern3D.js";import"../../chunks/utils5.js";import"../../chunks/colors.js";import"../../chunks/symbolLayerUtils3D.js";import"../../chunks/aaBoundingBox.js";import"../../symbols/Font.js";import"../../symbols/IconSymbol3DLayer.js";import"../../chunks/persistableUrlUtils.js";import"../../chunks/Symbol3DAnchorPosition2D.js";import"../../symbols/LabelSymbol3D.js";import"../../symbols/Symbol3D.js";import"../../chunks/collectionUtils.js";import"../../portal/Portal.js";import"../../core/Loadable.js";import"../../core/Promise.js";import"../../portal/PortalGroup.js";import"../../portal/PortalQueryParams.js";import"../../portal/PortalQueryResult.js";import"../../portal/PortalUser.js";import"../../portal/PortalFolder.js";import"../../symbols/LineSymbol3DLayer.js";import"../../symbols/LineStyleMarker3D.js";import"../../symbols/ObjectSymbol3DLayer.js";import"../../symbols/PathSymbol3DLayer.js";import"../../symbols/TextSymbol3DLayer.js";import"../../symbols/WaterSymbol3DLayer.js";import"../../symbols/support/StyleOrigin.js";import"../../chunks/Thumbnail.js";import"../../chunks/calloutUtils.js";import"../../symbols/callouts/Callout3D.js";import"../../symbols/callouts/LineCallout3D.js";import"../../symbols/support/Symbol3DVerticalOffset.js";import"../../symbols/LineSymbol3D.js";import"../../symbols/MarkerSymbol.js";import"../../symbols/MeshSymbol3D.js";import"../../symbols/PictureFillSymbol.js";import"../../chunks/urlUtils.js";import"../../symbols/PictureMarkerSymbol.js";import"../../symbols/PointSymbol3D.js";import"../../symbols/PolygonSymbol3D.js";import"../../core/reactiveUtils.js";import"../../chunks/asyncUtils.js";import"../../symbols/SimpleFillSymbol.js";import"../../symbols/SimpleMarkerSymbol.js";import"../../symbols/TextSymbol.js";import"../../symbols/WebStyleSymbol.js";var d;let h=d=class extends(r(i)){constructor(t){super(t),this.barrierType=null,this.costs=null,this.geometry=null,this.name=null,this.objectId=null,this.popupTemplate=null,this.scaleFactor=null,this.symbol=null,this.type="polygon-barrier"}readCosts(t,o){return c(o.attributes,"Attr_")}writeCosts(t,o){u(t,o,"Attr_")}static fromGraphic(t){return new d({barrierType:null!=t.attributes.BarrierType?b.fromJSON(t.attributes.BarrierType):null,costs:null!=t.attributes.Costs?j(JSON.parse(t.attributes.Costs)):null,geometry:t.geometry,name:t.attributes.Name??null,objectId:t.attributes.ObjectID??t.attributes.__OBJECTID,popupTemplate:t.popupTemplate,scaleFactor:t.attributes.ScaleFactor??null,symbol:t.symbol})}toGraphic(){const t={ObjectID:this.objectId,BarrierType:null!=this.barrierType?b.toJSON(this.barrierType):null,Costs:null!=this.costs?JSON.stringify(y(this.costs)):null,Name:this.name??null,ScaleFactor:this.scaleFactor??null};return new o({geometry:this.geometry,attributes:t,symbol:this.symbol,popupTemplate:this.popupTemplate})}};h.fields=[{name:"ObjectID",alias:"ObjectID",type:"esriFieldTypeOID",editable:!1,nullable:!1,domain:null},{name:"BarrierType",alias:"Barrier Type",type:"esriFieldTypeInteger",editable:!0,nullable:!0,visible:!0,domain:{type:"codedValue",name:"esriNABarrierType",codedValues:[{name:"Restriction",code:0},{name:"Scaled Cost",code:1},{name:"Added Cost",code:2}]}},{name:"Costs",alias:"Costs",type:"esriFieldTypeString",length:1048576,editable:!0,nullable:!0,visible:!1,domain:null},{name:"Name",alias:"Name",type:"esriFieldTypeString",length:255,editable:!0,nullable:!0,visible:!0},{name:"ScaleFactor",alias:"Scale Factor",type:"esriFieldTypeDouble",editable:!0,nullable:!0,visible:!0}],h.popupInfo={title:"Polygon Barriers",fieldInfos:[{fieldName:"Name",label:"Name",isEditable:!0,tooltip:"",visible:!0,stringFieldOption:"textbox"},{fieldName:"BarrierType",label:"Barrier Type",isEditable:!0,tooltip:"",visible:!0,stringFieldOption:"textbox"},{fieldName:"ScaleFactor",isEditable:!0,tooltip:"",visible:!0,format:{places:3,digitSeparator:!0},stringFieldOption:"textbox"},{fieldName:"Costs",label:"Costs",isEditable:!0,tooltip:"",visible:!1,stringFieldOption:"textbox"}],description:null,showAttachments:!1,mediaInfos:[]},t([p({type:b.apiValues,json:{name:"attributes.BarrierType",read:{reader:b.read},write:{writer:b.write}}})],h.prototype,"barrierType",void 0),t([p()],h.prototype,"costs",void 0),t([l("costs",["attributes"])],h.prototype,"readCosts",null),t([n("costs")],h.prototype,"writeCosts",null),t([p({type:a,json:{write:!0}})],h.prototype,"geometry",void 0),t([p({json:{name:"attributes.Name"}})],h.prototype,"name",void 0),t([p({json:{name:"attributes.ObjectID"}})],h.prototype,"objectId",void 0),t([p({type:s})],h.prototype,"popupTemplate",void 0),t([p()],h.prototype,"scaleFactor",void 0),t([p({types:e})],h.prototype,"symbol",void 0),t([p({readOnly:!0,json:{read:!1}})],h.prototype,"type",void 0),h=d=t([m("esri.rest.support.PolygonBarrier")],h);const k=h;export{k as default};
