// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define(["exports","./RandomLCG"],function(g,x){function p(a){return a}function q(a,b=p){if(a&&0!==a.length){var c=a[0],d=b(c);for(let e=1;e<a.length;++e){const f=a[e],h=Number(b(f));h>d&&(d=h,c=f)}return c}}function r(a,b,c,d){d=d||t;var e=Math.max(0,d.last-10);for(let f=e;f<c;++f)if(a[f]===b)return d.last=f;c=Math.min(e,c);for(e=0;e<c;++e)if(a[e]===b)return d.last=e;return-1}function u(a){return a?(v.seed=a,()=>v.getFloat()):Math.random}const y=1/1.5,z=!!Array.prototype.fill;class w{constructor(){this.last=
0}}const t=new w,k=new Set,v=new x;g.EmptyArray=[];g.PositionHint=w;g.ReallocGrowthFactor=1.5;g.ReallocShrinkFactor=y;g.ReallocShrinkTreshold=.5;g.addMany=function(a,b){if(!b)return a;for(const c of b)a.push(c);return a};g.binaryFindClosest=function(a,b,c){if(a&&0!==a.length){var d=a.length-1,e=a[0];if(b<=c(e))return e;e=a[d];if(b>=c(e))return e;var f=0;e=0;for(var h=d;f<h;){e=f+Math.floor((h-f)/2);const m=a[e],n=c(m);if(n===b)return m;if(b<n){if(0<e){h=a[e-1];var l=c(h);if(b>l)return b-l>=n-b?m:
h}h=e}else{if(e<d&&(f=a[e+1],l=c(f),b<l))return b-n>=l-b?f:m;f=e+1}}return a[e]}};g.binaryIndexOf=function(a,b,c){const d=a.length;let e=0;for(var f=d-1;e<f;){const h=e+Math.floor((f-e)/2);b>a[h]?e=h+1:f=h}f=a[e];return c?b>=a[d-1]?-1:f===b?e:e-1:f===b?e:-1};g.constant=function(a,b){if(z)return Array(a).fill(b);const c=Array(a);for(let d=0;d<a;d++)c[d]=b;return c};g.difference=function(a,b,c){let d,e;c?(d=b.filter(f=>!a.some(h=>c(h,f))),e=a.filter(f=>!b.some(h=>c(h,f)))):(d=b.filter(f=>!a.includes(f)),
e=a.filter(f=>!b.includes(f)));return{added:d,removed:e}};g.equals=function(a,b,c){if(null==a&&null==b)return!0;if(null==a||null==b||a.length!==b.length)return!1;if(c)for(let d=0;d<a.length;d++){if(!c(a[d],b[d]))return!1}else for(c=0;c<a.length;c++)if(a[c]!==b[c])return!1;return!0};g.filterInPlace=function(a,b){let c=0;for(let d=0;d<a.length;++d){const e=a[d];b(e,d)&&(a[c]=e,c++)}a.length=c};g.first=function(a){if(a)return 0<a.length?a[0]:void 0};g.groupToMap=function(a,b){const c=new Map,d=a.length;
for(let e=0;e<d;e++){const f=a[e],h=b(f,e,a),l=c.get(h);l?l.push(f):c.set(h,[f])}return c};g.indexOf=r;g.intersect=function(a,b,c){return a&&b?c?a.filter(d=>-1<b.findIndex(e=>c(d,e))):a.filter(d=>b.includes(d)):[]};g.isArrayLike=function(a){return a&&"number"===typeof a.length};g.isSome=function(a,b){return null!=a};g.last=function(a){if(a){var b=a.length;return 0<b?a[b-1]:void 0}};g.max=q;g.min=function(a,b=p){return q(a,c=>-b(c))};g.pickRandom=function(a,b,c){const d=a.length;if(b>=d)return a.slice(0);
c=u(c);const e=new Set,f=[];for(;f.length<b;){const h=Math.floor(c()*d);e.has(h)||(e.add(h),f.push(a[h]))}return f};g.range=function(a,b){void 0===b&&(b=a,a=0);const c=Array(b-a);for(let d=a;d<b;d++)c[d-a]=d;return c};g.remove=function(a,b){const c=a.indexOf(b);return-1!==c?(a.splice(c,1),b):null};g.removeUnordered=function(a,b,c,d){const e=null==c?a.length:c;d=r(a,b,e,d);if(-1!==d)return a[d]=a[e-1],null==c&&a.pop(),b};g.removeUnorderedMany=function(a,b,c=a.length,d=b.length,e,f){if(0===d||0===c)return c;
k.clear();for(let h=0;h<d;++h)k.add(b[h]);e=e||t;b=Math.max(0,e.last-10);for(d=b;d<c;++d)if(k.has(a[d])&&(f?.push(a[d]),k.delete(a[d]),a[d]=a[c-1],--c,--d,0===k.size||0===c))return k.clear(),c;for(d=0;d<b;++d)if(k.has(a[d])&&(f?.push(a[d]),k.delete(a[d]),a[d]=a[c-1],--c,--d,0===k.size||0===c))return k.clear(),c;k.clear();return c};g.shuffle=function(a,b){b=u(b);for(let c=a.length-1;0<c;c--){const d=Math.floor(b()*(c+1)),e=a[c];a[c]=a[d];a[d]=e}return a};g.splitIntoChunks=function(a,b){const c=a.length;
if(0===c)return[];const d=[];for(let e=0;e<c;e+=b)d.push(a.slice(e,e+b));return d};g.unique=function(a,b){return b?a.filter((c,d,e)=>e.findIndex(b.bind(null,c))===d):Array.from(new Set(a))};g.update=function(a,b){let c=a.length!==b.length;c&&(a.length=b.length);for(let d=0;d<b.length;++d)a[d]!==b[d]&&(a[d]=b[d],c=!0);return c};Object.defineProperty(g,Symbol.toStringTag,{value:"Module"})});