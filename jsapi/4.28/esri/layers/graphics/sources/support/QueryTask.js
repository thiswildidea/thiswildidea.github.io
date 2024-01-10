// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("require ../../../../chunks/tslib.es6 ../../../../core/Accessor ../../../../core/Error ../../../../core/has ../../../../core/promiseUtils ../../../../core/urlUtils ../../../../core/accessorSupport/decorators/property ../../../../core/accessorSupport/ensureType ../../../../core/arrayUtils ../../../../core/accessorSupport/decorators/subclass ../../../support/infoFor3D ../../../support/source/DataLayerSource ../../../../rest/utils ../../../../rest/query/executeForCount ../../../../rest/query/executeForExtent ../../../../rest/query/executeForIds ../../../../rest/query/executeQueryJSON ../../../../rest/query/executeQueryPBF ../../../../rest/support/FeatureSet ../../../../rest/support/Query".split(" "),
function(h,k,g,u,v,m,w,l,S,T,x,q,r,y,z,A,B,C,D,E,F){const t=a=>Object.freeze(Object.defineProperty({__proto__:null,default:a},Symbol.toStringTag,{value:"Module"}));g=class extends g{constructor(a){super(a);this.infoFor3D=this.gdbVersion=this.fieldsIndex=this.dynamicDataSource=null;this.queryAttachmentsSupported=this.pbfSupported=!1;this.url=this.sourceSpatialReference=null}get parsedUrl(){return w.urlToObject(this.url)}async execute(a,b){const c=await this.executeJSON(a,b);return this.featureSetFromJSON(a,
c,b)}async executeJSON(a,b){const c=this._normalizeQuery(a);a=null!=a.outStatistics?.[0];const e=v("featurelayer-pbf-statistics");a=!a||e;let d;if(this.pbfSupported&&a)try{d=await D.executeRawQueryPBF(this.url,c,b)}catch(f){if("query:parsing-pbf"===f.name)this.pbfSupported=!1;else throw f;}this.pbfSupported&&a||(d=await C.executeRawQueryJSON(this.url,c,b));this._normalizeFields(d.fields);return d}async featureSetFromJSON(a,b,c){if(!this._queryIs3DObjectFormat(a)||null==this.infoFor3D||!b.features)return E.fromJSON(b);
({meshFeatureSetFromJSON:c}=await m.whenOrAbort(new Promise((e,d)=>h(["../../../../rest/support/meshFeatureSet"],e,d)),c));return c(a,this.infoFor3D,b)}executeForCount(a,b){return z.executeForCount(this.url,this._normalizeQuery(a),b)}executeForExtent(a,b){return A.executeForExtent(this.url,this._normalizeQuery(a),b)}executeForIds(a,b){return B.executeForIds(this.url,this._normalizeQuery(a),b)}async executeRelationshipQuery(a,b){const [{default:c},{executeRelationshipQuery:e}]=await m.whenOrAbort(Promise.all([new Promise((d,
f)=>h(["../../../../rest/support/RelationshipQuery"],p=>d(t(p)),f)),new Promise((d,f)=>h(["../../../../rest/query/executeRelationshipQuery"],d,f))]),b);a=c.from(a);if(this.gdbVersion||this.dynamicDataSource)a=a.clone(),a.gdbVersion=a.gdbVersion||this.gdbVersion,a.dynamicDataSource=a.dynamicDataSource||this.dynamicDataSource;return e(this.url,a,b)}async executeRelationshipQueryForCount(a,b){const [{default:c},{executeRelationshipQueryForCount:e}]=await m.whenOrAbort(Promise.all([new Promise((d,f)=>
h(["../../../../rest/support/RelationshipQuery"],p=>d(t(p)),f)),new Promise((d,f)=>h(["../../../../rest/query/executeRelationshipQuery"],d,f))]),b);a=c.from(a);if(this.gdbVersion||this.dynamicDataSource)a=a.clone(),a.gdbVersion=a.gdbVersion||this.gdbVersion,a.dynamicDataSource=a.dynamicDataSource||this.dynamicDataSource;return e(this.url,a,b)}async executeAttachmentQuery(a,b){const {executeAttachmentQuery:c,fetchAttachments:e,processAttachmentQueryResult:d}=await m.whenOrAbort(new Promise((p,n)=>
h(["../../../../rest/query/operations/queryAttachments"],p,n)),b),f=y.parseUrl(this.url);a=await (this.queryAttachmentsSupported?c(f,a,b):e(f,a,b));return d(f,a)}async executeTopFeaturesQuery(a,b){const {executeTopFeaturesQuery:c}=await m.whenOrAbort(new Promise((e,d)=>h(["../../../../rest/query/executeTopFeaturesQuery"],e,d)),b);return c(this.parsedUrl,a,this.sourceSpatialReference,b)}async executeForTopIds(a,b){const {executeForTopIds:c}=await m.whenOrAbort(new Promise((e,d)=>h(["../../../../rest/query/executeForTopIds"],
e,d)),b);return c(this.parsedUrl,a,b)}async executeForTopExtents(a,b){const {executeForTopExtents:c}=await m.whenOrAbort(new Promise((e,d)=>h(["../../../../rest/query/executeForTopExtents"],e,d)),b);return c(this.parsedUrl,a,b)}async executeForTopCount(a,b){const {executeForTopCount:c}=await m.whenOrAbort(new Promise((e,d)=>h(["../../../../rest/query/executeForTopCount"],e,d)),b);return c(this.parsedUrl,a,b)}_normalizeQuery(a){let b=F.from(a);b.sourceSpatialReference=b.sourceSpatialReference||this.sourceSpatialReference;
if(this.gdbVersion||this.dynamicDataSource)b=b===a?b.clone():b,b.gdbVersion=a.gdbVersion||this.gdbVersion,b.dynamicDataSource=a.dynamicDataSource?r.DataLayerSource.from(a.dynamicDataSource):this.dynamicDataSource;const {infoFor3D:c}=this;if(null!=c&&this._queryIs3DObjectFormat(a)){b=b===a?b.clone():b;b.formatOf3DObjects=null;const {supportedFormats:e,queryFormats:d}=c,f=q.getMimeTypeFormatId("model/gltf-binary",e)??q.getFilenameFormatId("glb",e),p=q.getMimeTypeFormatId("model/gltf+json",e)??q.getFilenameFormatId("gtlf",
e);for(const n of d){if(n===f){b.formatOf3DObjects=n;break}n!==p||b.formatOf3DObjects||(b.formatOf3DObjects=n)}if(!b.formatOf3DObjects)throw new u("query:unsupported-3d-query-formats","Could not find any supported 3D object query format. Only supported formats are 3D_glb and 3D_gltf");if(null==b.outFields||!b.outFields.includes("*")){b=b===a?b.clone():b;null==b.outFields&&(b.outFields=[]);const {originX:n,originY:G,originZ:H,translationX:I,translationY:J,translationZ:K,scaleX:L,scaleY:M,scaleZ:N,
rotationX:O,rotationY:P,rotationZ:Q,rotationDeg:R}=c.transformFieldRoles;b.outFields.push(n,G,H,I,J,K,L,M,N,O,P,Q,R)}}return b}_normalizeFields(a){if(null!=this.fieldsIndex&&null!=a)for(const b of a)(a=this.fieldsIndex.get(b.name))&&Object.assign(b,a.toJSON())}_queryIs3DObjectFormat(a){return null!=this.infoFor3D&&!0===a.returnGeometry&&"xyFootprint"!==a.multipatchOption&&!a.outStatistics}};k.__decorate([l.property({type:r.DataLayerSource})],g.prototype,"dynamicDataSource",void 0);k.__decorate([l.property()],
g.prototype,"fieldsIndex",void 0);k.__decorate([l.property()],g.prototype,"gdbVersion",void 0);k.__decorate([l.property()],g.prototype,"infoFor3D",void 0);k.__decorate([l.property({readOnly:!0})],g.prototype,"parsedUrl",null);k.__decorate([l.property()],g.prototype,"pbfSupported",void 0);k.__decorate([l.property()],g.prototype,"queryAttachmentsSupported",void 0);k.__decorate([l.property()],g.prototype,"sourceSpatialReference",void 0);k.__decorate([l.property({type:String})],g.prototype,"url",void 0);
return g=k.__decorate([x.subclass("esri.tasks.QueryTask")],g)});