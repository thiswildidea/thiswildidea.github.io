// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("exports ../../../../../../core/Error ../../../../../../core/Logger ../../../../../../core/promiseUtils ../../../../../../symbols/support/defaultsJSON ../../enums ../../materialKey/MaterialKey ./WGLDynamicFillTemplate ./WGLDynamicLineTemplate ./WGLDynamicMarkerTemplate ./WGLDynamicTextTemplate ./WGLFillTemplate ./WGLLineTemplate ./WGLMarkerTemplate ./WGLTextTemplate ../../util/Lock ../../util/Result ../../../../layers/features/textUtils ../../../../layers/support/cimSymbolUtils".split(" "),
function(k,D,m,E,l,n,r,F,G,H,I,t,v,p,w,x,g,J,q){function h(a,b){const c=a.length;a.push(null);b.then(d=>a[c]=d);return a}function y(a){return null!=a&&!!(a&1)}const f=m.getLogger("esri.views.2d.engine.webgl.mesh.templates.WGLTemplateStore"),z={sortKey:null,templates:[]};m={isOutline:!1,placement:null,symbologyType:n.WGLSymbologyType.DEFAULT,vvFlags:0};const A={...l.errorPointSymbolJSON,hash:JSON.stringify(l.errorPointSymbolJSON),materialKey:r.createMaterialKey(n.WGLGeometryType.MARKER,m)},B={...l.errorPolylineSymbolJSON,
hash:JSON.stringify(l.errorPolylineSymbolJSON),materialKey:r.createMaterialKey(n.WGLGeometryType.LINE,m)},C={...l.errorPolygonSymbolJSON,hash:JSON.stringify(l.errorPolygonSymbolJSON),materialKey:r.createMaterialKey(n.WGLGeometryType.FILL,m)};class K{constructor(a,b){this._templateIdCounter=this._idCounter=1;this._idToTemplateGroup=new Map;this._symbolToTemplate=new Map;this._fetchQueue=[];this._idToResolver=new Map;this._cimTemplateCache=new Map;this._cimAnalyses=[];this._lock=new x.Lock;this._fetchResource=
a;this._tileInfo=b}get _markerError(){return this._errorTemplates.marker[0]}get _fillError(){return this._errorTemplates.fill[0]}get _lineError(){return this._errorTemplates.line[0]}get _textError(){return this._errorTemplates.line[0]}createTemplateGroup(a,b,c=null){this._initErrorTemplates();const d=a.hash;var e=this._symbolToTemplate.get(d);if(null!=e)return e;e=[];c={sortKey:c,templates:e};b&&this._createMeshTemplates(e,b,!0);this._createMeshTemplates(e,a,!1);b=this._createGroupId;if(e="expanded-cim"===
a.type)a:{if(a.layers)for(const u of a.layers)if("function"===typeof u.materialHash){e=!0;break a}e=!1}a=b.call(this,e);this._idToTemplateGroup.set(a,c);this._symbolToTemplate.set(d,a);return a}getTemplateGroup(a){return this._idToTemplateGroup.get(a)??z}getDynamicTemplateGroup(a){if(!this._idToTemplateGroup.has(a))return z;y(a)||f.error("mapview-template-store",`Id ${a} does not refer to a dynamic template`);return this._idToTemplateGroup.get(a)}getMosaicItem(a,b){const c=this._createTemplateId(),
d=new Promise(e=>this._idToResolver.set(c,e));this._fetchQueue.push({symbol:a,id:c,glyphIds:b});return d}finalize(a){return this._fetchQueue.length||this._lock.isHeld()?x.withLock(this._lock,this._fetchAllQueuedResources.bind(this),a):Promise.resolve()}_initErrorTemplates(){this._errorTemplates||(this._errorTemplates={fill:this._createMeshTemplates([],C,!1),marker:this._createMeshTemplates([],A,!1),line:this._createMeshTemplates([],B,!1)})}_fetchAllQueuedResources(a){if(!this._fetchQueue.length)return Promise.resolve();
const b=this._fetchQueue,c=this._cimAnalyses;this._fetchQueue=[];this._cimAnalyses=[];return Promise.all(c).then(()=>this._fetchResource(b,a).then(d=>{for(const {id:e,mosaicItem:u}of d)this._idToResolver.get(e)(u),this._idToResolver.delete(e)})).catch(d=>{E.isAbortError(d)?this._fetchQueue=this._fetchQueue.concat(b):"worker:port-closed"!==d.name&&f.error(new D("mapview-template-store","Unable to fetch requested texture resources",d))})}_createGroupId(a){return this._idCounter++<<1|(a?1:0)}_createTemplateId(){return this._templateIdCounter++}async _createSMS(a){const {spriteMosaicItem:b}=
await this.getMosaicItem(a);return g.ok(b,f)?p.fromSimpleMarker(a,b):this._markerError}async _createPMS(a){const {spriteMosaicItem:b}=await this.getMosaicItem(a);return g.ok(b,f)?p.fromPictureMarker(a,b):this._markerError}async _createSFS(a,b){const {spriteMosaicItem:c}=await this.getMosaicItem(a);return g.ok(c,f)?t.fromSimpleFill(a,c,b):this._fillError}async _createPFS(a,b){const {spriteMosaicItem:c}=await this.getMosaicItem(a);return g.ok(c,f)?t.fromPictureFill(a,c,b):this._fillError}async _createSLS(a,
b){({spriteMosaicItem:b}=await this.getMosaicItem(a));return g.ok(b,f)?v.fromSimpleLine(a,b):this._lineError}async _createLMS(a){const {spriteMosaicItem:b}=await this.getMosaicItem(a);return g.ok(b,f)?p.fromLineSymbolMarker(a,b):this._markerError}async _createTS(a){const {glyphMosaicItems:b}=await this.getMosaicItem(a);return w.fromText(a,b??[])}async _createCIMText(a){const {glyphMosaicItems:b}=await this.getMosaicItem(q.cimLayerToRasterizationInfo(a),J.codepoints(a.text));return g.ok(b,f)?w.fromCIMText(a,
b,this._tileInfo):this._textError}async _createCIMFill(a){const {spriteMosaicItem:b}=await this.getMosaicItem(q.cimLayerToRasterizationInfo(a));return g.ok(b,f)?t.fromCIMFill(a,b,this._tileInfo):this._fillError}async _createCIMLine(a){const {spriteMosaicItem:b}=await this.getMosaicItem(q.cimLayerToRasterizationInfo(a));return g.ok(b,f)?v.fromCIMLine(a,b,this._tileInfo):this._lineError}async _createCIMMarker(a){const {spriteMosaicItem:b}=await this.getMosaicItem(q.cimLayerToRasterizationInfo(a));return g.ok(b,
f)?p.fromCIMMarker(a,b,this._tileInfo):this._markerError}async _createCIM(a){const b=a.templateHash;let c=this._cimTemplateCache.get(b);if(null!=c)return c;switch(a.type){case "marker":c=await this._createCIMMarker(a);break;case "line":c=await this._createCIMLine(a);break;case "fill":c=await this._createCIMFill(a);break;case "text":c=await this._createCIMText(a)}this._cimTemplateCache.set(b,c);return c}async _createDynamicCIM(a){const b=a.templateHash;let c=this._cimTemplateCache.get(b);if(null!=
c)return c;switch(a.type){case "marker":c=H.fromCIMMarker(a,this._tileInfo);break;case "line":c=G.fromCIMLine(a,this._tileInfo);break;case "fill":c=F.fromCIMFill(a,this._tileInfo);break;case "text":c=I.fromCIMText(a,this._tileInfo)}this._cimTemplateCache.set(b,c);return c}_createPrimitiveMeshTemplates(a,b,c){switch(b.type){case "esriSMS":return h(a,this._createSMS(b));case "esriPMS":return h(a,this._createPMS(b));case "esriSFS":return h(a,this._createSFS(b,c));case "line-marker":return h(a,this._createLMS(b));
case "esriPFS":return h(a,this._createPFS(b,c));case "esriSLS":return h(a,this._createSLS(b,!1));case "esriTS":return h(a,this._createTS(b));default:return f.error("Unable to create mesh template for unknown symbol type {: $ }{symbol.type}"),a}}_createMeshTemplates(a,b,c){if(b.type.includes("3d"))return f.error("3D symbols are not supported with MapView"),a;if("expanded-cim"===b.type){for(const d of b.layers)"function"===typeof d.materialHash?h(a,this._createDynamicCIM(d)):h(a,this._createCIM(d));
return a}if("composite-symbol"===b.type){for(const d of b.layers)this._createPrimitiveMeshTemplates(a,d,c);return a}return"cim"===b.type||"label"===b.type||"web-style"===b.type?a:this._createPrimitiveMeshTemplates(a,b,c)}}k.WGLTemplateStore=K;k.errorPointSchema2D=A;k.errorPolygonSchema2D=C;k.errorPolylineSchema2D=B;k.isDynamicId=y;Object.defineProperty(k,Symbol.toStringTag,{value:"Module"})});