// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("../chunks/tslib.es6 ../core/Collection ../core/CollectionFlattener ../core/Error ../core/lang ../core/loadAll ../core/Logger ../core/MultiOriginJSONSupport ../core/promiseUtils ../core/urlUtils ../core/accessorSupport/decorators/property ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/reader ../core/accessorSupport/decorators/subclass ../geometry/SpatialReference ./Layer ./buildingSublayers/BuildingComponentSublayer ./buildingSublayers/BuildingGroupSublayer ./mixins/APIKeyMixin ./mixins/ArcGISService ./mixins/OperationalLayer ./mixins/PortalLayer ./mixins/ScaleRangeLayer ./mixins/SceneService ./support/associatedFeatureServiceUtils ./support/BuildingFilter ./support/BuildingSummaryStatistics ./support/commonProperties ../support/elevationInfoUtils".split(" "),
function(d,k,z,t,u,A,p,c,B,C,f,q,v,D,E,F,w,h,G,H,I,J,K,r,L,M,x,l,m){const y=k.ofType(M);k=u.clone(h.sublayersProperty);if(q=k.json?.origins)q["web-scene"]={type:[w],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}},q["portal-item"]={type:[w],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}};c=class extends r.SceneService(H.ArcGISService(I.OperationalLayer(J.PortalLayer(K.ScaleRangeLayer(c.MultiOriginJSONMixin(G.APIKeyMixin(F))))))){constructor(a){super(a);this.operationalLayerType="BuildingSceneLayer";
this.allSublayers=new z({getCollections:()=>[this.sublayers],getChildrenFunction:b=>"building-group"===b.type?b.sublayers:null});this._sublayerOverrides=this.sublayers=null;this.filters=new y;this.outFields=this.summaryStatistics=this.activeFilterId=null;this.legendEnabled=!0;this.type="building-scene"}normalizeCtorArgs(a){return"string"===typeof a?{url:a}:a??{}}destroy(){this.allSublayers.destroy()}readSublayers(a,b,g){a=h.readSublayers(a,b,g);h.forEachSublayer(a,e=>e.layer=this);this._sublayerOverrides&&
(this.applySublayerOverrides(a,this._sublayerOverrides),this._sublayerOverrides=null);return a}applySublayerOverrides(a,{overrides:b,context:g}){h.forEachSublayer(a,e=>e.read(b.get(e.id),g))}readSublayerOverrides(a,b){const g=new Map;for(const e of a)null==e||"object"!==typeof e||"number"!==typeof e.id?b.messages?.push(new t("building-scene-layer:invalid-sublayer-override","Invalid value for sublayer override. Not an object or no id specified.",{value:e})):g.set(e.id,e);return{overrides:g,context:b}}writeSublayerOverrides(a,
b,g){const e=[];h.forEachSublayer(this.sublayers,n=>{n=n.write({},g);1<Object.keys(n).length&&e.push(n)});0<e.length&&(b.sublayers=e)}writeUnappliedOverrides(a,b){b.sublayers=[];a.overrides.forEach(g=>{b.sublayers.push(u.clone(g))})}write(a,b){a=super.write(a,b);!b||"web-scene"!==b.origin&&"portal-item"!==b.origin||(this.sublayers?this.writeSublayerOverrides(this.sublayers,a,b):this._sublayerOverrides&&this.writeUnappliedOverrides(this._sublayerOverrides,a));return a}read(a,b){super.read(a,b);b&&
("web-scene"===b.origin||"portal-item"===b.origin)&&null!=a&&Array.isArray(a.sublayers)&&(a=this.readSublayerOverrides(a.sublayers,b),this.sublayers?this.applySublayerOverrides(this.sublayers,a):this._sublayerOverrides=a)}readSummaryStatistics(a,b){return"string"===typeof b.statisticsHRef?(a=C.join(this.parsedUrl?.path,b.statisticsHRef),new x({url:a})):null}set elevationInfo(a){this._set("elevationInfo",a);this._validateElevationInfo()}load(a){const b=null!=a?a.signal:null;a=this.loadFromPortal({supportedTypes:["Scene Service"]},
a).catch(B.throwIfAbortError).then(()=>this._fetchService(b)).then(()=>this._fetchAssociatedFeatureService(b));this.addResolvingPromise(a);return Promise.resolve(this)}loadAll(){return A.loadAll(this,a=>{h.forEachSublayer(this.sublayers,b=>{"building-group"!==b.type&&a(b)});this.summaryStatistics&&a(this.summaryStatistics)})}async saveAs(a,b){return this._debouncedSaveOperations(r.SaveOperationType.SAVE_AS,{...b,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"},a)}async save(){return this._debouncedSaveOperations(r.SaveOperationType.SAVE,
{getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"})}validateLayer(a){if(!a.layerType||"Building"!==a.layerType)throw new t("buildingscenelayer:layer-type-not-supported","BuildingSceneLayer does not support this layer type",{layerType:a.layerType});}_getTypeKeywords(){return["Building"]}async _fetchAssociatedFeatureService(a){try{const {portalItem:b}=await L.findAssociatedFeatureService(`${this.url}/layers/${this.layerId}`,{sceneLayerItem:this.portalItem,apiKey:this.apiKey,
signal:a});this.associatedFeatureServiceItem=b}catch(b){p.getLogger(this).warn("Associated feature service item could not be loaded",b)}}_validateElevationInfo(){const a=this.elevationInfo;m.logInvalidElevationInfoWarning(p.getLogger(this),m.elevationModeRequiredMessage("Building scene layers","absolute-height",a));m.logInvalidElevationInfoWarning(p.getLogger(this),m.featureExpressionUnsupportedMessage("Building scene layers",a))}};d.__decorate([f.property({type:["BuildingSceneLayer"]})],c.prototype,
"operationalLayerType",void 0);d.__decorate([f.property({readOnly:!0})],c.prototype,"allSublayers",void 0);d.__decorate([f.property(k)],c.prototype,"sublayers",void 0);d.__decorate([v.reader("service","sublayers")],c.prototype,"readSublayers",null);d.__decorate([f.property({type:y,nonNullable:!0,json:{write:!0}})],c.prototype,"filters",void 0);d.__decorate([f.property({type:String,json:{write:!0}})],c.prototype,"activeFilterId",void 0);d.__decorate([f.property({readOnly:!0,type:x})],c.prototype,"summaryStatistics",
void 0);d.__decorate([v.reader("summaryStatistics",["statisticsHRef"])],c.prototype,"readSummaryStatistics",null);d.__decorate([f.property({type:[String],json:{read:!1}})],c.prototype,"outFields",void 0);d.__decorate([f.property(l.sceneLayerFullExtent)],c.prototype,"fullExtent",void 0);d.__decorate([f.property(l.legendEnabled)],c.prototype,"legendEnabled",void 0);d.__decorate([f.property({type:["show","hide","hide-children"]})],c.prototype,"listMode",void 0);d.__decorate([f.property(l.readOnlyService(E))],
c.prototype,"spatialReference",void 0);d.__decorate([f.property(l.elevationInfo)],c.prototype,"elevationInfo",null);d.__decorate([f.property({json:{read:!1},readOnly:!0})],c.prototype,"type",void 0);d.__decorate([f.property()],c.prototype,"associatedFeatureServiceItem",void 0);return c=d.__decorate([D.subclass("esri.layers.BuildingSceneLayer")],c)});