// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define(["exports"],function(b){class c{constructor(a=null,d={},e,f){this.geometry=a;this.attributes=d;this.centroid=e;this.objectId=f;this.geohashY=this.geohashX=this.displayId=0}weakClone(){const a=new c(this.geometry,this.attributes,this.centroid,this.objectId);a.displayId=this.displayId;a.geohashX=this.geohashX;a.geohashY=this.geohashY;return a}}class g extends c{}b.OptimizedFeature=c;b.OptimizedFeatureWithGeometry=g;b.hasGeometry=function(a){return!!a.geometry?.coords?.length};Object.defineProperty(b,
Symbol.toStringTag,{value:"Module"})});