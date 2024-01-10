// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("exports ../../../../core/floatRGBA ../../../../core/PooledArray ../../../../chunks/mat4 ../../../../chunks/mat4f64 ../../../../chunks/vec3 ../../../../chunks/vec4 ../../../../chunks/vec4f64 ../../../../geometry/support/frustum ../../../../chunks/sphere ../../support/mathUtils ./depthRange ./Octree ./Util".split(" "),function(v,J,K,w,x,z,L,p,y,M,A,q,r,N){function E(a,b){if(b.visible){var d=q.empty(),c=b.getSpatialQueryAccelerator();c?O(d,a,c):P(d,a,b.objects);return d}}function O(a,b,d){var c=
b.eye;const f=b.viewForward,e=b.frustum,g=k=>k.visible;var h=d.objectCount;500>h?(q.set(n,b.near,Math.min(a.near,b.far)),d.forEachInDepthRange(c,f,r.DepthOrder.FRONT_TO_BACK,n,(k,l)=>{B(a,b,k);n.far=a.near;l.setRange(n)},e,g),q.set(n,Math.max(a.far,b.near),b.far),d.forEachInDepthRange(c,f,r.DepthOrder.BACK_TO_FRONT,n,(k,l)=>{B(a,b,k);n.near=a.far;l.setRange(n)},e,g)):(h=Math.max(Math.min(h,500),Math.ceil(.1*h)),c=d.findClosest(f,r.DepthOrder.FRONT_TO_BACK,e,g,h),d=d.findClosest(f,r.DepthOrder.BACK_TO_FRONT,
e,g,h),c&&d&&(F(a,b,c.boundingVolumeWorldSpace.bounds),F(a,b,d.boundingVolumeWorldSpace.bounds)))}function P(a,b,d){u.clear();d.forAll(c=>{c.visible&&0!==c.geometries.length&&u.add(c)});u.empty||(u.sort(b),q.set(n,b.near,Math.min(a.near,b.far)),u.forEachInDepthRange(n,r.DepthOrder.FRONT_TO_BACK,(c,f)=>{f<a.near&&B(a,b,c)}),q.set(n,Math.max(a.far,b.near),b.far),u.forEachInDepthRange(n,r.DepthOrder.BACK_TO_FRONT,(c,f,e)=>{a.far=Math.max(a.far,e)}))}function B(a,b,d){if(d.visible&&y.intersectsSphere(b.frustum,
d.boundingVolumeWorldSpace.bounds)){var c=d.transformation,f=Q;d.geometries.forEach(e=>{w.multiply(f,c,e.transformation);const g=A.maxScale(f);G(a,b,e.boundingInfo,f,g)})}}function G(a,b,d,c,f){if(null!=d){z.transformMat4(m,d.center,c);var {eye:e,viewForward:g}=b,h=g[0]*(m[0]-e[0])+g[1]*(m[1]-e[1])+g[2]*(m[2]-e[2]);m[3]=d.radius*f;if(!(h-m[3]>a.near&&h+m[3]<a.far)&&y.intersectsSphere(b.frustum,m))if(100<d.radius&&d.getChildren())for(const k of d.getChildren())G(a,b,k,c,f);else C.unionDepthRangeWithAABB(a,
b.viewProjectionMatrix,c,d.bbMin,d.bbMax)}}function F(a,b,d){var c=b.eye;b=b.viewForward;c=(d[0]-c[0])*b[0]+(d[1]-c[1])*b[1]+(d[2]-c[2])*b[2];a.near=Math.min(a.near,c-d[3]);a.far=Math.max(a.far,c+d[3])}class R{constructor(){this._items=new K({allocator:a=>a||{object:null,distance:0,near:0,far:0},deallocator:a=>{a.object=null;a.distance=0;a.near=0;a.far=0;return a}})}get length(){return this._items.length}get empty(){return 0===this._items.length}clear(){this._items.clear()}add(a){this._items.pushNew().object=
a}sort(a){const b=a.eye,d=a.viewForward;this._items.forAll(c=>{const f=c.object.boundingVolumeWorldSpace.bounds,e=(f[0]-b[0])*d[0]+(f[1]-b[1])*d[1]+(f[2]-b[2])*d[2];c.distance=e;c.near=e-f[3];c.far=e+f[3]});this._items.sort((c,f)=>c.distance-f.distance)}forEachInDepthRange(a,b,d){if(b===r.DepthOrder.FRONT_TO_BACK)for(b=0;b<this._items.length;++b){var c=this._items.data[b];c.far<a.near||c.near>a.far||d(c.object,c.near,c.far)}else for(b=this._items.length-1;0<=b;--b)c=this._items.data[b],c.far<a.near||
c.near>a.far||d(c.object,c.near,c.far)}}class H{constructor(){this._view=x.create();this._viewProj=x.create();this._frustum=y.create();this._geometries=[];this._near=[];this._far=[];this._nearCandidates=[];this._farCandidates=[];this._looseRange={near:0,far:0}}compute(a,b){this._reset();w.copy(this._view,a.viewMatrix);w.multiply(this._viewProj,a.projectionMatrix,this._view);y.copy(this._frustum,a.frustum);a=this._view;const d=a[2],c=a[6],f=a[10],e=a[14];b.forAll(k=>k.forEachGeometry(l=>{if(l.visible&&
l.castShadow){var t=l.boundingSphere,I=d*t[0]+c*t[1]+f*t[2]+e,S=I-t[3];t=I+t[3];this._geometries.push(l);this._near.push(-t);this._far.push(-S)}}));b=new q.DepthRange;if(0===this._geometries.length)return b;for(a=0;a<this._geometries.length;++a)this._near[a]>b.far&&(b.far=this._near[a]),2<this._near[a]&&this._far[a]<b.near&&(b.near=this._far[a]);a=this._looseRange;a.near=Math.max(.5*b.near,2);a.far=2*b.far;var g=0;let h=0;for(let k=0;k<this._geometries.length;++k)this._near[k]<b.near&&(this._near[k]>=
a.near?b.near=this._near[k]:this._nearCandidates[g++]=k),this._far[k]>b.far&&(this._far[k]<=a.far?b.far=this._far[k]:this._farCandidates[h++]=k);if(0===this._nearCandidates.length&&0===this._farCandidates.length)return b;this._nearCandidates.sort((k,l)=>this._near[k]<this._near[l]?-1:this._near[k]>this._near[l]?1:0);this._farCandidates.sort((k,l)=>this._far[k]<this._far[l]?1:this._far[k]>this._far[l]?-1:0);for(a=0;a<this._nearCandidates.length;++a)g=this._nearCandidates[a],this._near[g]<b.near&&(g=
this._geometries[g],this._includeNearBoundingInfoRec(g.boundingInfo,g.shaderTransformation,b));for(a=0;a<this._farCandidates.length;++a)g=this._farCandidates[a],this._far[g]>b.far&&(g=this._geometries[g],this._includeFarBoundingInfoRec(g.boundingInfo,g.shaderTransformation,b));this._reset();return b}_reset(){this._geometries.length=0;this._near.length=0;this._far.length=0;this._nearCandidates.length=0;this._farCandidates.length=0}_includeNearBoundingInfoRec(a,b,d){if(null!=a){z.transformMat4(m,a.center,
b);var c=A.maxScale(b),f=m[0],e=m[1],g=m[2];c*=a.radius;var h=this._frustum;if(!(h[0][0]*f+h[0][1]*e+h[0][2]*g+h[0][3]>c||h[1][0]*f+h[1][1]*e+h[1][2]*g+h[1][3]>c||h[2][0]*f+h[2][1]*e+h[2][2]*g+h[2][3]>c||h[3][0]*f+h[3][1]*e+h[3][2]*g+h[3][3]>c||(f=this._view[2]*f+this._view[6]*e+this._view[10]*g+this._view[14],e=f+c,2>-(f-c)||-e>=d.near)))if(-e>this._looseRange.near)d.near=-e;else{if(100<c&&(c=a.getChildren(),void 0!==c)){for(const k of c)this._includeNearBoundingInfoRec(k,b,d);return}C.unionDepthRangeWithAABB(d,
this._viewProj,b,a.bbMin,a.bbMax)}}}_includeFarBoundingInfoRec(a,b,d){if(null!=a){var c=a.radius;z.transformMat4(m,a.center,b);var f=A.maxScale(b),e=m[0],g=m[1],h=m[2];c*=f;f=this._frustum;if(!(f[0][0]*e+f[0][1]*g+f[0][2]*h+f[0][3]>c||f[1][0]*e+f[1][1]*g+f[1][2]*h+f[1][3]>c||f[2][0]*e+f[2][1]*g+f[2][2]*h+f[2][3]>c||f[3][0]*e+f[3][1]*g+f[3][2]*h+f[3][3]>c||(e=this._view[2]*e+this._view[6]*g+this._view[10]*h+this._view[14]-c,-e<=d.far)))if(-e<this._looseRange.far)d.far=-e;else{if(100<c&&(c=a.getChildren(),
void 0!==c)){for(const k of c)this._includeFarBoundingInfoRec(k,b,d);return}C.unionDepthRangeWithAABB(d,this._viewProj,b,a.bbMin,a.bbMax)}}}}class T{constructor(){this._modelViewProj=x.create();this._clipPosition=[p.create(),p.create(),p.create(),p.create(),p.create(),p.create(),p.create(),p.create()]}unionDepthRangeWithAABB(a,b,d,c,f){var e=this._modelViewProj;w.multiply(e,b,d);b=!1;for(d=0;8>d;++d){const g=this._clipPosition[d],h=0===d||3===d||4===d||7===d?c[0]:f[0],k=0===d||1===d||4===d||5===d?
c[1]:f[1],l=4>d?c[2]:f[2];g[0]=e[0]*h+e[4]*k+e[8]*l+e[12];g[1]=e[1]*h+e[5]*k+e[9]*l+e[13];g[2]=e[2]*h+e[6]*k+e[10]*l+e[14];g[3]=e[3]*h+e[7]*k+e[11]*l+e[15]}for(c=0;12>c;++c){f=this._clipTriangle(this._clipPosition[D[c][0]],this._clipPosition[D[c][1]],this._clipPosition[D[c][2]]);e=!0;for(d=0;d<f.length;++d)if(2<=f[d][3]){e=!1;break}if(!e)for(b=!0,e=0;e<f.length;++e)d=f[e][3],Number.isFinite(d)&&(a.near=Math.min(d,a.near),a.far=Math.max(d,a.far))}return b}_inside(a,b){if(0===b)return a[0]>=-a[3];if(1===
b)return a[1]>=-a[3];if(2===b)return a[0]<=a[3];if(3===b)return a[1]<=a[3];N.assert(!1)}_intersect(a,b,d){let c=0;0===d?c=(-a[3]-a[0])/(b[0]-a[0]+b[3]-a[3]):1===d?c=(-a[3]-a[1])/(b[1]-a[1]+b[3]-a[3]):2===d?c=(a[3]-a[0])/(b[0]-a[0]-b[3]+a[3]):3===d&&(c=(a[3]-a[1])/(b[1]-a[1]-b[3]+a[3]));return L.lerp(p.create(),a,b,c)}_clipTriangle(a,b,d){a=[a,b,d];for(b=0;4>b;++b){d=a;a=[];for(let c=0;c<d.length;++c){const f=d[c],e=d[(c+1)%d.length];this._inside(e,b)?(this._inside(f,b)||a.push(this._intersect(f,e,
b)),a.push(e)):this._inside(f,b)&&a.push(this._intersect(f,e,b))}}return a}}const D=[[0,1,3],[2,3,1],[1,5,2],[6,2,5],[5,4,6],[7,6,4],[4,0,7],[3,7,0],[3,2,7],[6,7,2],[4,5,0],[1,0,5]],m=M.create(),Q=x.create(),n=q.empty(),u=new R,U=new H,C=new T;v.DepthRangeFromRenderGeometries=H;v.depthRangeFromLayer=E;v.depthRangeFromScene=function(a,b,d){let c=0;if(!b.some(e=>{c+=e.numGeometries;return 1E4<=c}))return U.compute(a,b);const f=q.empty();d.forAll(e=>q.union(f,E(a,e)));return f};v.textureToDepth=function(a,
b,d){return J.unpackFloatRGBA(b,a)*(d[1]-d[0])+d[0]};Object.defineProperty(v,Symbol.toStringTag,{value:"Module"})});