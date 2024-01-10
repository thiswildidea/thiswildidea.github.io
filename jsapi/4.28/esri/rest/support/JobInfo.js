// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("require ../../chunks/tslib.es6 ../../request ../../core/has ../../core/jsonMap ../../core/JSONSupport ../../core/promiseUtils ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/accessorSupport/decorators/enumeration ../../core/accessorSupport/decorators/subclass ../utils ../geoprocessor/GPOptions ../geoprocessor/utils ./GPMessage".split(" "),function(u,h,n,t,v,e,r,l,B,C,w,x,m,y,p,z){var q;t=v.strict()({esriJobCancelled:"job-cancelled",
esriJobCancelling:"job-cancelling",esriJobDeleted:"job-deleted",esriJobDeleting:"job-deleting",esriJobTimedOut:"job-timed-out",esriJobExecuting:"job-executing",esriJobFailed:"job-failed",esriJobNew:"job-new",esriJobSubmitted:"job-submitted",esriJobSucceeded:"job-succeeded",esriJobWaiting:"job-waiting"},{ignoreUnknown:!1});e=q=class extends e.JSONSupport{constructor(a){super(a);this.sourceUrl=this.requestOptions=this.progress=this.messages=this.jobStatus=this.jobId=null;this._timer=void 0}async cancelJob(a){const {jobId:b,
sourceUrl:d}=this;var {path:c}=m.parseUrl(d);a={...this.requestOptions,...a,query:{f:"json"}};this._clearTimer();({data:c}=await n(`${c}/jobs/${b}/cancel`,a));const {messages:f,jobStatus:k,progress:g}=q.fromJSON(c);this.set({messages:f,jobStatus:k,progress:g});return this}destroy(){clearInterval(this._timer)}async checkJobStatus(a){const {path:b}=m.parseUrl(this.sourceUrl);({data:a}=await n(`${b}/jobs/${this.jobId}`,{...this.requestOptions,...a,query:{f:"json"}}));const {messages:d,jobStatus:c,progress:f}=
q.fromJSON(a);this.set({messages:d,jobStatus:c,progress:f});return this}async fetchResultData(a,b,d){b=y.from(b||{});const {returnFeatureCollection:c,returnM:f,returnZ:k,outSpatialReference:g}=b;({path:b}=m.parseUrl(this.sourceUrl));const A=p.gpEncode({returnFeatureCollection:c,returnM:f,returnZ:k,outSR:g,returnType:"data",f:"json"},null);({data:a}=await n(`${b}/jobs/${this.jobId}/results/${a}`,{...this.requestOptions,...d,query:A}));return p.decode(a)}async fetchResultImage(a,b,d){const {path:c}=
m.parseUrl(this.sourceUrl);b={...b.toJSON(),f:"json"};b=p.gpEncode(b);({data:a}=await n(`${c}/jobs/${this.jobId}/results/${a}`,{...this.requestOptions,...d,query:b}));return p.decode(a)}async fetchResultMapImageLayer(){var {path:a}=m.parseUrl(this.sourceUrl);const b=a.indexOf("/GPServer/");a=`${a.substring(0,b)}/MapServer/jobs/${this.jobId}`;return new (await new Promise((d,c)=>u(["../../layers/MapImageLayer"],f=>d(Object.freeze(Object.defineProperty({__proto__:null,default:f},Symbol.toStringTag,
{value:"Module"}))),c))).default({url:a})}async waitForJobCompletion(a={}){const {interval:b=1E3,signal:d,statusCallback:c}=a;return new Promise((f,k)=>{r.onAbort(d,()=>{this._clearTimer();k(r.createAbortError())});this._clearTimer();this._timer=setInterval(()=>{this._timer||k(r.createAbortError());this.checkJobStatus(this.requestOptions).then(g=>{({jobStatus:g}=g);this.jobStatus=g;switch(g){case "job-succeeded":this._clearTimer();f(this);break;case "job-submitted":case "job-executing":case "job-waiting":case "job-new":c&&
c(this);break;case "job-cancelled":case "job-cancelling":case "job-deleted":case "job-deleting":case "job-timed-out":case "job-failed":this._clearTimer(),k(this)}})},b)})}_clearTimer(){clearInterval(this._timer);this._timer=void 0}};h.__decorate([l.property()],e.prototype,"jobId",void 0);h.__decorate([w.enumeration(t,{ignoreUnknown:!1})],e.prototype,"jobStatus",void 0);h.__decorate([l.property({type:[z]})],e.prototype,"messages",void 0);h.__decorate([l.property()],e.prototype,"progress",void 0);h.__decorate([l.property()],
e.prototype,"requestOptions",void 0);h.__decorate([l.property({json:{write:!0}})],e.prototype,"sourceUrl",void 0);return e=q=h.__decorate([x.subclass("esri.rest.support.JobInfo")],e)});