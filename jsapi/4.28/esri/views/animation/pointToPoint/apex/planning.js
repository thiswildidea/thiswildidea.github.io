// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define(["exports","./functions"],function(n,c){function p(a,d){const b=Math.max(a.compared.sourceZoom,a.compared.targetZoom);a=a.source.zoomAtPixelsPerPan(a.desiredPixelFlow/a.compared.pan)/2;return a<b?null!=d.maximumDistance?b+(d.maximumDistance-b)/2:1.5*b:d.maximumDistance?Math.min(d.maximumDistance,a):a}n.optimalDistance=function(a,d){let b=p(a,d);const e={ascensionFactor:null!=d.ascensionFactor?d.ascensionFactor:.5,descensionFactor:null!=d.descensionFactor?d.descensionFactor:.5};var g=0===e.ascensionFactor,
k=0===e.descensionFactor;const q=g?c.tAscensionZoomOnly:c.tAscensionZoomPan,r=g?c.dtAscensionZoomOnly:c.dtAscensionZoomPan,t=g?c.ddtAscensionZoomOnly:c.ddtAscensionZoomPan,u=k?c.tDescensionZoomOnly:c.tDescensionZoomPan,v=k?c.dtDescensionZoomOnly:c.dtDescensionZoomPan,w=k?c.ddtDescensionZoomOnly:c.ddtDescensionZoomPan;g=f=>q(a,f,e)+c.tPanion(a,f,e)+u(a,f,e);k=f=>r(a,f,e)+c.dtPanion(a,f,e)+v(a,f,e);const x=f=>t(a,f,e)+c.ddtPanion(a,f,e)+w(a,f,e);let l=g(b);const y=c.tBaseLine(a),z=d.maximumIterations||
20,m=null!=d.maximumDistance?d.maximumDistance:Infinity;for(d=0;d<z;d++){var h=(k(b)+1E-6)/x(b);if(isNaN(h)||b>=m&&0>h){if(!isFinite(m))return null;b=m;l=g(b);break}b-=h;if(b<a.compared.sourceZoom||b<a.compared.targetZoom)return null;h=g(b);if(.005>=Math.abs(h-l)/l)break;l=h}return l>.7*y||b<a.compared.sourceZoom||b<a.compared.targetZoom?null:b};Object.defineProperty(n,Symbol.toStringTag,{value:"Module"})});