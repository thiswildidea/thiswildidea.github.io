// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("../chunks/tslib.es6 ../config ../request ../symbols ../core/MultiOriginJSONSupport ../core/promiseUtils ../core/urlUtils ../core/accessorSupport/decorators/property ../core/accessorSupport/ensureType ../core/arrayUtils ../core/has ../core/accessorSupport/decorators/reader ../core/accessorSupport/decorators/subclass ../geometry/Extent ../geometry/support/spatialReferenceUtils ./Layer ./mixins/BlendLayer ./mixins/OperationalLayer ./mixins/PortalLayer ./mixins/RefreshableLayer ./mixins/ScaleRangeLayer ./support/commonProperties ../symbols/Symbol ../symbols/SimpleLineSymbol ../symbols/PictureMarkerSymbol ../symbols/SimpleMarkerSymbol ../symbols/SimpleFillSymbol".split(" "),
function(c,m,n,l,b,p,q,d,G,H,I,r,t,u,v,w,x,y,z,A,B,h,g,C,k,D,E){const F=["atom","xml"];l={base:g,key:"type",typeMap:{"simple-line":C},errorContext:"symbol"};k={base:g,key:"type",typeMap:{"picture-marker":k,"simple-marker":D},errorContext:"symbol"};g={base:g,key:"type",typeMap:{"simple-fill":E},errorContext:"symbol"};b=class extends x.BlendLayer(A.RefreshableLayer(y.OperationalLayer(z.PortalLayer(B.ScaleRangeLayer(b.MultiOriginJSONMixin(w)))))){constructor(...a){super(...a);this.fullExtent=this.description=
null;this.legendEnabled=!0;this.polygonSymbol=this.pointSymbol=this.lineSymbol=null;this.operationalLayerType="GeoRSS";this.url=null;this.type="geo-rss"}normalizeCtorArgs(a,e){return"string"===typeof a?{url:a,...e}:a}readFeatureCollections(a,e){e.featureCollection.layers.forEach(f=>{(f=f.layerDefinition.drawingInfo.renderer.symbol)&&"esriSFS"===f.type&&f.outline?.style.includes("esriSFS")&&(f.outline.style="esriSLSSolid")});return e.featureCollection.layers}get hasPoints(){return this._hasGeometry("esriGeometryPoint")}get hasPolylines(){return this._hasGeometry("esriGeometryPolyline")}get hasPolygons(){return this._hasGeometry("esriGeometryPolygon")}get title(){const a=
this._get("title");return a&&"defaults"!==this.originOf("title")?a:this.url?q.getFilename(this.url,F)||"GeoRSS":a||""}set title(a){this._set("title",a)}load(a){const e=null!=a?a.signal:null;this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service","Feature Service","Feature Collection","Scene Service"]},a).catch(p.throwIfAbortError).then(()=>this._fetchService(e)).then(f=>{this.read(f,{origin:"service"})}));return Promise.resolve(this)}async hasDataChanged(){const a=await this._fetchService();
this.read(a,{origin:"service",ignoreDefaults:!0});return!0}async _fetchService(a){const e=this.spatialReference;({data:a}=await n(m.geoRSSServiceUrl,{query:{url:this.url,refresh:this.loaded?!0:void 0,outSR:v.isWGS84(e)?void 0:e.wkid??JSON.stringify(e)},signal:a}));return a}_hasGeometry(a){return this.featureCollections?.some(e=>e.featureSet?.geometryType===a&&0<e.featureSet.features?.length)??!1}};c.__decorate([d.property()],b.prototype,"description",void 0);c.__decorate([d.property()],b.prototype,
"featureCollections",void 0);c.__decorate([r.reader("service","featureCollections",["featureCollection.layers"])],b.prototype,"readFeatureCollections",null);c.__decorate([d.property({type:u,json:{name:"lookAtExtent"}})],b.prototype,"fullExtent",void 0);c.__decorate([d.property(h.id)],b.prototype,"id",void 0);c.__decorate([d.property(h.legendEnabled)],b.prototype,"legendEnabled",void 0);c.__decorate([d.property({types:l,json:{write:!0}})],b.prototype,"lineSymbol",void 0);c.__decorate([d.property({type:["show",
"hide"]})],b.prototype,"listMode",void 0);c.__decorate([d.property({types:k,json:{write:!0}})],b.prototype,"pointSymbol",void 0);c.__decorate([d.property({types:g,json:{write:!0}})],b.prototype,"polygonSymbol",void 0);c.__decorate([d.property({type:["GeoRSS"]})],b.prototype,"operationalLayerType",void 0);c.__decorate([d.property(h.url)],b.prototype,"url",void 0);c.__decorate([d.property({json:{origins:{service:{read:{source:"name",reader(a){return a||void 0}}}}}})],b.prototype,"title",null);c.__decorate([d.property({readOnly:!0,
json:{read:!1},value:"geo-rss"})],b.prototype,"type",void 0);return b=c.__decorate([t.subclass("esri.layers.GeoRSSLayer")],b)});