// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/tslib.es6 ../../../geometry ../../../core/Error ../../../core/has ../../../core/Loadable ../../../core/promiseUtils ../../../core/workers/workers ../../../core/accessorSupport/decorators/property ../../../core/accessorSupport/ensureType ../../../core/arrayUtils ../../../core/accessorSupport/decorators/subclass ../../../geometry/support/typeUtils ./support/clientSideDefaults ../../ogc/wfsUtils ../../../rest/support/FeatureSet ../../../time/timeZoneUtils ../../../geometry/Extent".split(" "),
function(d,f,E,q,r,t,n,u,g,F,G,v,w,p,k,x,y,z){d.WFSSource=class extends t{constructor(){super(...arguments);this._connection=null;this.capabilities=p.createCapabilities(!1,!1);this.type="wfs";this.refresh=n.debounce(async a=>{await this.load();({extent:a}=await this._connection.invoke("refresh",a));a&&(this.sourceJSON.extent=a);return{dataChanged:!0,updates:{extent:this.sourceJSON.extent}}})}load(a){this.addResolvingPromise(this._startWorker({signal:null!=a?a.signal:null}));return Promise.resolve(this)}destroy(){this._connection?.close();
this._connection=null}async openPorts(){await this.load();return this._connection.openPorts()}async queryFeatures(a,b={}){await this.load(b);a=await this._connection.invoke("queryFeatures",a?a.toJSON():null,b);return x.fromJSON(a)}async queryFeaturesJSON(a,b={}){await this.load(b);return this._connection.invoke("queryFeatures",a?a.toJSON():null,b)}async queryFeatureCount(a,b={}){await this.load(b);return this._connection.invoke("queryFeatureCount",a?a.toJSON():null,b)}async queryObjectIds(a,b={}){await this.load(b);
return this._connection.invoke("queryObjectIds",a?a.toJSON():null,b)}async queryExtent(a,b={}){await this.load(b);a=await this._connection.invoke("queryExtent",a?a.toJSON():null,b);return{count:a.count,extent:z.fromJSON(a.extent)}}async querySnapping(a,b={}){await this.load(b);return this._connection.invoke("querySnapping",a,b)}async _createLoadOptions(a){const {url:b,customParameters:e,name:c,namespaceUri:h,fields:A,geometryType:B,swapXY:C}=this.layer;var l="defaults"===this.layer.originOf("spatialReference")?
void 0:this.layer.spatialReference;if(!b)throw new q("wfs-layer:missing-url","WFSLayer must be created with a url");this.wfsCapabilities||(this.wfsCapabilities=await k.getCapabilities(b,{customParameters:e,...a}));a=["fields","geometryType","name","namespaceUri","swapXY"].some(m=>null==this.layer[m])?await k.getWFSLayerInfo(this.wfsCapabilities,c,h,{spatialReference:l,customParameters:e,signal:a?.signal}):{...k.prepareWFSLayerFields(A??[]),geometryType:B,name:c,namespaceUri:h,spatialReference:l,swapXY:C};
l=k.findFeatureType(this.wfsCapabilities.readFeatureTypes(),a.name,a.namespaceUri);const D=w.featureGeometryTypeKebabDictionary.toJSON(a.geometryType);return{customParameters:e,featureType:l,fields:a.fields?.map(m=>m.toJSON())??[],geometryField:a.geometryField,geometryType:D,getFeatureUrl:this.wfsCapabilities.operations.GetFeature.url,getFeatureOutputFormat:this.wfsCapabilities.operations.GetFeature.outputFormat,objectIdField:a.objectIdField,spatialReference:a.spatialReference?.toJSON(),swapXY:!!a.swapXY}}async _startWorker(a){const [b,
e]=await n.eachAlways([this._createLoadOptions(a),u.open("WFSSourceWorker",{...a,strategy:r("feature-layers-workers")?"dedicated":"local",registryTarget:this})]);var c=b.error||e.error||null;const h=e.value||null;if(c)throw h&&h.close(),c;c=b.value;this._connection=e.value;a=(await this._connection.invoke("load",c,a)).extent;this.sourceJSON={dateFieldsTimeReference:{timeZoneIANA:y.utc},extent:a,fields:c.fields,geometryType:c.geometryType,objectIdField:c.objectIdField,geometryField:c.geometryField,
drawingInfo:p.createDrawingInfo(c.geometryType),name:c.featureType.title,wfsInfo:{name:c.featureType.name,featureUrl:c.getFeatureUrl,maxFeatures:3E3,swapXY:c.swapXY,supportedSpatialReferences:c.featureType.supportedSpatialReferences,version:"2.0.0",wfsNamespace:c.featureType.namespaceUri}}}};f.__decorate([g.property()],d.WFSSource.prototype,"capabilities",void 0);f.__decorate([g.property({constructOnly:!0})],d.WFSSource.prototype,"layer",void 0);f.__decorate([g.property()],d.WFSSource.prototype,"sourceJSON",
void 0);f.__decorate([g.property()],d.WFSSource.prototype,"type",void 0);f.__decorate([g.property()],d.WFSSource.prototype,"wfsCapabilities",void 0);d.WFSSource=f.__decorate([v.subclass("esri.layers.graphics.sources.WFSSource")],d.WFSSource);Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});