// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("exports ../../../core/arrayUtils ../../../core/Evented ../../../geometry/Polygon ../../../geometry/Polyline ../coordinateHelper ./unnormalizationHelper".split(" "),function(n,x,y,z,A,B,v){class q{constructor(a){this.component=a;this.rightEdge=this.leftEdge=null;this.type="vertex";this.index=null}get pos(){return this._pos}set pos(a){this._pos=a;this.component.unnormalizeVertexPositions()}}class r{constructor(a,c,b){this.component=a;this.leftVertex=c;this.rightVertex=b;this.type="edge";c.rightEdge=
this;b.leftEdge=this}}class t{constructor(a,c){this._spatialReference=a;this._viewingMode=c;this.vertices=[];this.edges=[];this.index=null}unnormalizeVertexPositions(){1>=this.vertices.length||v.unnormalize(this.vertices,v.getUnnormalizationInfo(this._spatialReference,this._viewingMode))}updateVertexIndex(a,c){if(0!==this.vertices.length){var b=this.vertices[0],f=null;do f=a,f.index=c++,a=f.rightEdge?f.rightEdge.rightVertex:null;while(null!=a&&a!==b);f.leftEdge&&f!==this.vertices[this.vertices.length-
1]&&this.swapVertices(this.vertices.indexOf(f),this.vertices.length-1)}}getFirstVertex(){return 0===this.vertices.length?null:this.vertices[0]}getLastVertex(){return 0===this.vertices.length?null:this.vertices[this.vertices.length-1]}isClosed(){return 2<this.vertices.length&&null!==this.vertices[0].leftEdge}swapVertices(a,c){const b=this.vertices[a];this.vertices[a]=this.vertices[c];this.vertices[c]=b}iterateVertices(a){if(0!==this.vertices.length){var c=this.vertices[0],b=c;do a(b,b.index),b=null!=
b.rightEdge?b.rightEdge.rightVertex:null;while(b!==c&&null!=b)}}}class w extends y{constructor(a,c){super();this.type=a;this.coordinateHelper=c;this._geometry=null;this._dirty=!0;this.components=[]}get geometry(){if(this._dirty){switch(this.type){case "point":this._geometry=this._toPoint();break;case "polyline":this._geometry=this._toPolyline();break;case "polygon":this._geometry=this._toPolygon()}this._dirty=!1}return this._geometry}get spatialReference(){return this.coordinateHelper.spatialReference}notifyChanges(a){this._dirty=
!0;this.emit("change",a)}_toPoint(){return 0===this.components.length||0===this.components[0].vertices.length?null:this.coordinateHelper.vectorToPoint(this.components[0].vertices[0].pos)}_toPolyline(){const a=[],c=this.coordinateHelper.vectorToArray;for(const b of this.components){if(1>b.vertices.length)continue;const f=[];let h=b.vertices.find(e=>null==e.leftEdge);const g=h;do f.push(c(h.pos)),h=h.rightEdge?h.rightEdge.rightVertex:null;while(h&&h!==g);a.push(f)}return new A({paths:a,spatialReference:this.spatialReference,
hasZ:this.coordinateHelper.hasZ(),hasM:this.coordinateHelper.hasM()})}_toPolygon(){const a=[],c=this.coordinateHelper.vectorToArray;for(const b of this.components){if(1>b.vertices.length)continue;const f=[],h=b.vertices[0];let g=h;const e=g;do f.push(c(g.pos)),g=null!=g.rightEdge?g.rightEdge.rightVertex:null;while(g&&g!==e);b.isClosed()&&f.push(c(h.pos));a.push(f)}return new z({rings:a,spatialReference:this.spatialReference,hasZ:this.coordinateHelper.hasZ(),hasM:this.coordinateHelper.hasM()})}static fromGeometry(a,
c){var b=a.spatialReference;const f=B.createCoordinateHelper(a.hasZ,a.hasM,b),h=new w(a.type,f);switch(a.type){case "polygon":a=a.rings;for(var g=0;g<a.length;++g){var e=a[g],d=new t(b,c);d.index=g;var l=2<e.length&&x.equals(e[0],e[e.length-1]),k=l?e.length-1:e.length;for(var m=0;m<k;++m){var p=f.arrayToVector(e[m]);const u=new q(d);d.vertices.push(u);u.pos=p;u.index=m}e=d.vertices.length-1;for(k=0;k<e;++k)m=new r(d,d.vertices[k],d.vertices[k+1]),d.edges.push(m);l&&(l=new r(d,d.vertices[d.vertices.length-
1],d.vertices[0]),d.edges.push(l));h.components.push(d)}break;case "polyline":a=a.paths;for(g=0;g<a.length;++g){l=a[g];d=new t(b,c);d.index=g;e=l.length;for(k=0;k<e;++k)m=f.arrayToVector(l[k]),p=new q(d),d.vertices.push(p),p.pos=m,p.index=k;l=d.vertices.length-1;for(e=0;e<l;++e)k=new r(d,d.vertices[e],d.vertices[e+1]),d.edges.push(k);h.components.push(d)}break;case "point":c=new t(b,c),c.index=0,b=new q(c),b.index=0,b.pos=f.pointToVector(a),c.vertices.push(b),h.components.push(c)}return h}}n.Component=
t;n.Edge=r;n.EditGeometry=w;n.Vertex=q;Object.defineProperty(n,Symbol.toStringTag,{value:"Module"})});