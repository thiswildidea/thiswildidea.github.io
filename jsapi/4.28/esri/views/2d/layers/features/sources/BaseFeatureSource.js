// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("exports ../../../../../request ../../../../../core/Error ../../../../../core/has ../../../../../core/Logger ../../../../../core/promiseUtils ../controllers/support/sourceAdapters ./DataTileSource ../../../../support/QueueProcessor".split(" "),function(h,m,n,e,p,f,q,r,k){class t extends r.DataTileSource{constructor(b){super(b);this.type="feature";this.mode="on-demand";this._adapter=q.createSourceAdapter(b.serviceInfo);this._queue=new k.QueueProcessor({concurrency:8,process:async a=>{f.throwIfAborted(a);
if(null!=a.tile){var d=a.tile.key.id,{signal:c}=a;d=e("esri-tiles-debug")?{tile:d.replaceAll("/","."),depth:a.depth}:void 0;c=await this._adapter.executeQuery(a.query,{signal:c,query:{...d,...this._schema?.customParameters}});c.level=a.tile.key.level;return c}return this._adapter.executeQuery(a.query,{...a,query:this._schema?.customParameters})}});this._patchQueue=new k.QueueProcessor({concurrency:8,process:async a=>{f.throwIfAborted(a);if(null!=a.tile){var d=a.tile.key.id,{signal:c}=a;d=e("esri-tiles-debug")?
{tile:d.replaceAll("/","."),depth:a.depth}:void 0;c=await this._adapter.executeQuery(a.query,{signal:c,query:{...d,...this._schema?.customParameters}});c.level=a.tile.key.level;return c}return this._adapter.executeQuery(a.query,{...a,query:this._schema?.customParameters})}})}destroy(){super.destroy();this._adapter.destroy();this._queue.destroy();this._patchQueue.destroy()}enqueueQuery(b,a){return this.updatingHandles.addPromise(this._queue.push(b,a))}enqueuePatchQuery(b,a){return this.updatingHandles.addPromise(this._patchQueue.push(b,
a))}get maxRecordCountFactor(){const {query:b}=this._serviceInfo.capabilities;return b.supportsMaxRecordCountFactor?4:null}get maxPageSize(){const {query:b}=this._serviceInfo.capabilities;return(b.maxRecordCount??8E3)*(this.maxRecordCountFactor??1)}get pageSize(){return Math.min(8E3,this.maxPageSize)}enableEvent(b,a){}subscribe(b,a){a=super.subscribe(b,a);this._fetchDataTile(b).catch(d=>{f.isAbortError(d)||p.getLogger("esri.views.2d.layers.features.sources.BaseFeatureSource").error(new n("mapview-query-error",
"Encountered error when fetching tile",{tile:b,error:d}))});return a}unsubscribe(b){super.unsubscribe(b)}readers(b){return this._subscriptions.get(b).readers()}async query(b,a={}){return this._adapter.executeQuery(b,{...a,query:{...(a.query??{}),...this._schema?.customParameters}})}async queryLastEditDate(){const b=this._serviceInfo.source;return(await m(b.path,{query:{...b.query,f:"json"},responseType:"json"})).data.editingInfo.lastEditDate}createTileQuery(b,a={}){const d=this._serviceInfo.geometryType,
c=this.createQuery(a);c.quantizationParameters=a.quantizationParameters??b.getQuantizationParameters();c.resultType="tile";c.geometry=b.extent;if(this._serviceInfo.capabilities.query.supportsQuantization)"esriGeometryPolyline"===d&&(c.maxAllowableOffset=b.resolution*e("feature-polyline-generalization-factor"));else if("esriGeometryPolyline"===d||"esriGeometryPolygon"===d)c.maxAllowableOffset=b.resolution,"esriGeometryPolyline"===d&&(c.maxAllowableOffset*=e("feature-polyline-generalization-factor"));
b=this._serviceInfo.capabilities.query;c.defaultSpatialReferenceEnabled=b.supportsDefaultSpatialReference;c.compactGeometryEnabled=b.supportsCompactGeometry;return c}async _executePatchQuery(b,a,d,c){a=a.clone();a.outFields=[this._serviceInfo.objectIdField,...d];a.returnCentroid=!1;a.returnGeometry=!1;return await this.enqueuePatchQuery({tile:b,query:a,signal:c.signal,depth:null!=a.start?a.start/8E3:0})}async _resend(b,a){const {query:d,message:c}=b,u=null!=d.outFields?d.outFields:[];b=this._queryInfo.outFields;
const l=b.filter(g=>!u.includes(g));if(null==c.addOrUpdate)this._onMessage({...c,type:"append"});else if(l.length)try{const g=this._subscriptions.get(c.id).tile,v=await this._executePatchQuery(g,d,l,a);f.throwIfAborted(a);d.outFields=b;c.addOrUpdate.joinAttributes(v);this._onMessage({...c,end:c.end,type:"append"})}catch(g){}else this._onMessage({...c,type:"append"})}async _resendSubscription(b){e("esri-2d-update-debug")&&console.debug(b.tile.id,"Resend Subscription");if(b.empty)return this._onMessage({id:b.tile.id,
addOrUpdate:null,end:!1,type:"append"});const a=b.signal;for(const d of b.requests.done)await this._resend(d,{signal:a});if(null!=b.edits)return this._onMessage(b.edits)}async resend(){const b=Array.from(this._subscriptions.values());await Promise.all(b.map(a=>this._resendSubscription(a)))}}h.BaseFeatureSource=t;Object.defineProperty(h,Symbol.toStringTag,{value:"Module"})});