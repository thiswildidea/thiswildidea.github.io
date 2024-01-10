// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("exports ../../../core/mathUtils ../../../core/unitUtils ../../../chunks/vec3 ../../../chunks/vec3f64 ../../../geometry/ellipsoidUtils ../../../geometry/Extent ../../ViewingMode ../environment/atmosphereUtils".split(" "),function(p,n,u,m,q,r,v,w,x){function t(c,b,a,d){a=2/a;c/b>a?(d.far=c,d.near=d.far/b):(d.near=a,d.far=d.near*b);return d}class y{constructor(c,b){this._elevationProvider=c;this._referenceEllipsoid=r.getReferenceEllipsoid(b);this._unitInMeters=u.getMetersPerUnitForSR(b,this._referenceEllipsoid.metersPerDegree)}compute(c,
b,a,d,f){f||(f={near:0,far:0});var e=c[2]*this._unitInMeters,h=e;d=e-d;var k=this._elevationProvider?.visibleElevationBounds;k&&(e=0<=d?h-this._unitInMeters*k.min:this._unitInMeters*k.max-h);a=null!=a?a:new v({xmin:0,ymin:0,zmin:0,xmax:0,ymax:0,zmax:0});h=Math.max(a.xmax-a.xmin,a.ymax-a.ymin,4*Math.max(a.xmax-a.xmin,a.ymax-a.ymin));m.subtract(g,b,c);l[0]=0<g[0]?a.xmax:a.xmin;l[1]=0<g[1]?a.ymax:a.ymin;l[2]=0<g[2]?h/2:-h/2;m.subtract(l,l,c);m.normalize(g,g);c=1.1*m.dot(l,g)*this._unitInMeters;b=Math.sqrt(e*
(e+2*this._referenceEllipsoid.radius));a=Math.max(a.xmax-a.xmin,a.ymax-a.ymin);k=1E-4*a*this._unitInMeters;e=n.clamp((e-k)/(.001*a*this._unitInMeters-k),0,1);e=Math.min(n.lerp(b,c,e**3),b)*Math.max(Math.log(Math.abs(d)),1);return t(Math.min(e,Math.max(34064E4,h))/this._unitInMeters,2E4,this._unitInMeters,f)}}class z{constructor(c){this._referenceEllipsoid=r.getReferenceEllipsoid(c)}compute(c,b,a,d,f){f||(f={near:0,far:0});c=m.length(c);b=c-this._referenceEllipsoid.radius;b=Math.max(Math.abs(b-d),
Math.abs(b));d=1.2*n.lerp(Math.sqrt(b*(b+2*(this._referenceEllipsoid.radius+Math.min(0,d)))),c+this._referenceEllipsoid.radius,x.computeInnerAltitudeFade(b));c=n.clamp(2E4-(Math.log(b)-7.983)/9.011*19E3,1E3,2E4);return t(d,c,1,f)}}const l=q.create(),g=q.create();p.createNearFarHeuristic=function(c,b,a){return c===w.ViewingMode.Global?new z(a):new y(b,a)};Object.defineProperty(p,Symbol.toStringTag,{value:"Module"})});