// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define(["exports","./jsonUtils"],function(f,w){function r({scale:b,translate:a},c){return Math.round((c-a[0])/b[0])}function t({scale:b,translate:a},c){return Math.round((a[1]-c)/b[1])}function x(b,a,c){const d=[];let e,g,k,h;for(let l=0;l<c.length;l++){const n=c[l];if(0<l){if(k=r(b,n[0]),h=t(b,n[1]),k!==e||h!==g)d.push(a(n,k-e,h-g)),e=k,g=h}else e=r(b,n[0]),g=t(b,n[1]),d.push(a(n,e,g))}return 0<d.length?d:null}function D(b,a,c,d){return x(b,c?d?u:m:d?m:v,a)}function E(b,a,c,d){const e=[];c=c?d?u:
m:d?m:v;for(d=0;d<a.length;d++){const g=x(b,c,a[d]);g&&3<=g.length&&e.push(g)}return e.length?e:null}function F(b,a,c,d){const e=[];c=c?d?u:m:d?m:v;for(d=0;d<a.length;d++){const g=x(b,c,a[d]);g&&2<=g.length&&e.push(g)}return e.length?e:null}function p({scale:b,translate:a},c){return c*b[0]+a[0]}function q({scale:b,translate:a},c){return a[1]-c*b[1]}function y(b,a,c){const d=Array(c.length);if(!c.length)return d;const [e,g]=b.scale;let k=p(b,c[0][0]);b=q(b,c[0][1]);d[0]=a(c[0],k,b);for(let h=1;h<c.length;h++){const l=
c[h];k+=l[0]*e;b-=l[1]*g;d[h]=a(l,k,b)}return d}function z(b,a,c){const d=Array(c.length);for(let e=0;e<c.length;e++)d[e]=y(b,a,c[e]);return d}function G(b,a,c,d){return y(b,c?d?u:m:d?m:v,a)}function H(b,a,c,d){return z(b,c?d?u:m:d?m:v,a)}function I(b,a,c,d){return z(b,c?d?u:m:d?m:v,a)}function A(b,a,c){let [d,e]=c[0],g=Math.min(d,a[0]),k=Math.min(e,a[1]),h=Math.max(d,a[2]);a=Math.max(e,a[3]);for(let l=1;l<c.length;l++){const [n,B]=c[l];d+=n;e+=B;0>n&&(g=Math.min(g,d));0<n&&(h=Math.max(h,d));0>B?
k=Math.min(k,e):0<B&&(a=Math.max(a,e))}b[0]=g;b[1]=k;b[2]=h;b[3]=a;return b}function C(b,a){if(!a.length)return null;b[0]=b[1]=Number.POSITIVE_INFINITY;b[2]=b[3]=Number.NEGATIVE_INFINITY;for(let c=0;c<a.length;c++)A(b,b,a[c]);return b}function J(b,a,c,d,e){a.xmin=r(b,c.xmin);a.ymin=t(b,c.ymin);a.xmax=r(b,c.xmax);a.ymax=t(b,c.ymax);a!==c&&(d&&(a.zmin=c.zmin,a.zmax=c.zmax),e&&(a.mmin=c.mmin,a.mmax=c.mmax));return a}function K(b,a,c,d,e){a.points=D(b,c.points,d,e)??[];return a}function L(b,a,c,d,e){a.x=
r(b,c.x);a.y=t(b,c.y);a!==c&&(d&&(a.z=c.z),e&&(a.m=c.m));return a}function M(b,a,c,d,e){b=E(b,c.rings,d,e);if(!b)return null;a.rings=b;return a}function N(b,a,c,d,e){b=F(b,c.paths,d,e);if(!b)return null;a.paths=b;return a}const v=(b,a,c)=>[a,c],m=(b,a,c)=>[a,c,b[2]],u=(b,a,c)=>[a,c,b[2],b[3]];f.equals=function(b,a){if(b===a||null==b&&null==a)return!0;if(null==b||null==a)return!1;let c,d,e,g;b&&"upperLeft"===b.originPosition?(c=b.translate[0],d=b.translate[1],b=b.scale[0]):(c=null!=b.extent?b.extent.xmin:
0,d=null!=b.extent?b.extent.ymax:0,b=b.tolerance);a&&"upperLeft"===a.originPosition?(e=a.translate[0],g=a.translate[1],a=a.scale[0]):(e=null!=a.extent?a.extent.xmin:0,g=null!=a.extent?a.extent.ymax:0,a=a.tolerance);return c===e&&d===g&&b===a};f.getQuantizedBoundsCoordsArray=A;f.getQuantizedBoundsCoordsArrayArray=C;f.getQuantizedBoundsPaths=function(b){return C([0,0,0,0],b)};f.getQuantizedBoundsPoints=function(b){const a=[Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY];
return A(a,a,b)};f.getQuantizedBoundsRings=function(b){return C([0,0,0,0],b)};f.quantizeBounds=function(b,a,c){a[0]=r(b,c[0]);a[3]=t(b,c[1]);a[2]=r(b,c[2]);a[1]=t(b,c[3]);return a};f.quantizeExtent=J;f.quantizeGeometry=function(b,a){return b&&a?w.isPoint(a)?L(b,{},a,!1,!1):w.isPolyline(a)?N(b,{},a,!1,!1):w.isPolygon(a)?M(b,{},a,!1,!1):w.isMultipoint(a)?K(b,{},a,!1,!1):w.isExtent(a)?J(b,{},a,!1,!1):null:null};f.quantizeMultipoint=K;f.quantizePaths=F;f.quantizePoint=L;f.quantizePoints=D;f.quantizePolygon=
M;f.quantizePolyline=N;f.quantizeRings=E;f.quantizeX=r;f.quantizeY=t;f.toQuantizationTransform=function(b){return b?{originPosition:"upper-left"===b.originPosition?"upperLeft":"lower-left"===b.originPosition?"lowerLeft":b.originPosition,scale:b.tolerance?[b.tolerance,b.tolerance]:[1,1],translate:null!=b.extent?[b.extent.xmin,b.extent.ymax]:[0,0]}:null};f.unquantizeBounds=function(b,a,c){return c?(a[0]=p(b,c[0]),a[1]=q(b,c[3]),a[2]=p(b,c[2]),a[3]=q(b,c[1]),a):[p(b,a[0]),q(b,a[3]),p(b,a[2]),q(b,a[1])]};
f.unquantizeCoordsArray=y;f.unquantizeCoordsArrayArray=z;f.unquantizeExtent=function(b,a,c,d,e){a.xmin=p(b,c.xmin);a.ymin=q(b,c.ymin);a.xmax=p(b,c.xmax);a.ymax=q(b,c.ymax);a!==c&&(d&&(a.zmin=c.zmin,a.zmax=c.zmax),e&&(a.mmin=c.mmin,a.mmax=c.mmax));return a};f.unquantizeMultipoint=function(b,a,c,d,e){null!=c&&(a.points=G(b,c.points,d,e));return a};f.unquantizePaths=H;f.unquantizePoint=function(b,a,c,d,e){if(null==c)return a;a.x=p(b,c.x);a.y=q(b,c.y);a!==c&&(d&&(a.z=c.z),e&&(a.m=c.m));return a};f.unquantizePoints=
G;f.unquantizePolygon=function(b,a,c,d,e){null!=c&&(a.rings=I(b,c.rings,d,e));return a};f.unquantizePolyline=function(b,a,c,d,e){null!=c&&(a.paths=H(b,c.paths,d,e));return a};f.unquantizeRings=I;f.unquantizeX=p;f.unquantizeY=q;Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})});