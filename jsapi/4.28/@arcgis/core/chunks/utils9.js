/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function e(e){return"function"==typeof e}function t(t,r,n,o){return e(t)?t(r,n,o):t}function r(e){return[e.r,e.g,e.b,e.a]}const n=" /-,\n";function o(e){let t=e.length;for(;t--;)if(!n.includes(e.charAt(t)))return!1;return!0}function s(e,t){const r=[];let n=0,s=-1;do{if(s=e.indexOf("[",n),s>=n){if(s>n){const t=e.substr(n,s-n);r.push([t,null,o(t)])}if(n=s+1,s=e.indexOf("]",n),s>=n){if(s>n){const o=t[e.substr(n,s-n)];o&&r.push([null,o,!1])}n=s+1}}}while(-1!==s);if(n<e.length-1){const t=e.substr(n);r.push([t,null,o(t)])}return r}function a(e,t,r){let n="",o=null;for(const r of t){const[t,s,a]=r;if(t)a?o=t:(o&&(n+=o,o=null),n+=t);else{const t=e.attributes[s];t&&(o&&(n+=o,o=null),n+=t)}}return l(n,r)}function i(e,t,r){const n=s(t,e);return e=>a(e,n,r)}function l(e,t){switch("string"!=typeof e&&(e=String(e)),t){case"LowerCase":return e.toLowerCase();case"Allcaps":return e.toUpperCase();default:return e}}function c(e,t,r,n,o,s,a=!0){const i=t/o,l=r/s,c=Math.ceil(i/2),u=Math.ceil(l/2);for(let r=0;r<s;r++)for(let f=0;f<o;f++){const y=4*(f+(a?s-r-1:r)*o);let M=0,C=0,m=0,b=0,p=0,d=0,h=0;const I=(r+.5)*l;for(let n=Math.floor(r*l);n<(r+1)*l;n++){const r=Math.abs(I-(n+.5))/u,o=(f+.5)*i,s=r*r;for(let r=Math.floor(f*i);r<(f+1)*i;r++){let a=Math.abs(o-(r+.5))/c;const i=Math.sqrt(s+a*a);i>=-1&&i<=1&&(M=2*i*i*i-3*i*i+1,M>0&&(a=4*(r+n*t),h+=M*e[a+3],m+=M,e[a+3]<255&&(M=M*e[a+3]/250),b+=M*e[a],p+=M*e[a+1],d+=M*e[a+2],C+=M))}}n[y]=b/C,n[y+1]=p/C,n[y+2]=d/C,n[y+3]=h/m}}function u(e){return e?{r:e[0],g:e[1],b:e[2],a:e[3]/255}:{r:0,g:0,b:0,a:0}}function f(e){return e.data?.symbol??null}function y(e){return"CIMVectorMarker"===e.type||"CIMPictureMarker"===e.type||"CIMBarChartMarker"===e.type||"CIMCharacterMarker"===e.type||"CIMPieChartMarker"===e.type||"CIMStackedBarChartMarker"===e.type}function M(e){return"CIMGradientStroke"===e.type||"CIMPictureStroke"===e.type||"CIMSolidStroke"===e.type}function C(e){return null!=e&&("CIMGradientFill"===e.type||"CIMHatchFill"===e.type||"CIMPictureFill"===e.type||"CIMSolidFill"===e.type||"CIMWaterFill"===e.type)}function m(e){return null!=e&&("CIMMarkerPlacementAlongLineRandomSize"===e.type||"CIMMarkerPlacementAlongLineSameSize"===e.type||"CIMMarkerPlacementAlongLineVariableSize"===e.type||"CIMMarkerPlacementAtExtremities"===e.type||"CIMMarkerPlacementAtMeasuredUnits"===e.type||"CIMMarkerPlacementAtRatioPositions"===e.type||"CIMMarkerPlacementOnLine"===e.type||"CIMMarkerPlacementOnVertices"===e.type)}const b=(e,t=0)=>null==e||isNaN(e)?t:e,p=e=>e.tintColor?u(e.tintColor):{r:255,g:255,b:255,a:1},d=e=>{if(!e)return!1;for(const t of e)switch(t.type){case"CIMGeometricEffectBuffer":case"CIMGeometricEffectOffset":case"CIMGeometricEffectDonut":return!0}return!1};function h(){return import("./geometryEngineJSON.js").then((e=>e.g))}function I(e){if(!e)return"normal";switch(e.toLowerCase()){case"italic":return"italic";case"oblique":return"oblique";default:return"normal"}}function g(e){if(!e)return"normal";switch(e.toLowerCase()){case"bold":return"bold";case"bolder":return"bolder";case"lighter":return"lighter";default:return"normal"}}function S(e){let t="normal",r="normal";if(e){const n=e.toLowerCase();n.includes("italic")?t="italic":n.includes("oblique")&&(t="oblique"),n.includes("bold")?r="bold":n.includes("light")&&(r="lighter")}return{style:t,weight:r}}function k(e){return e.underline?"underline":e.strikethrough?"line-through":"none"}function P(e){if(!e)return null;switch(e.type){case"CIMPolygonSymbol":if(e.symbolLayers)for(const t of e.symbolLayers){const e=P(t);if(null!=e)return e}break;case"CIMTextSymbol":return P(e.symbol);case"CIMSolidFill":return e.color}}function w(e){if(e)switch(e.type){case"CIMPolygonSymbol":case"CIMLineSymbol":{const t=e.symbolLayers;if(t)for(const e of t){const t=w(e);if(null!=t)return t}break}case"CIMTextSymbol":return w(e.symbol);case"CIMSolidStroke":return e.color}}function L(e){if(e)switch(e.type){case"CIMPolygonSymbol":case"CIMLineSymbol":if(e.symbolLayers)for(const t of e.symbolLayers){const e=L(t);if(void 0!==e)return e}break;case"CIMTextSymbol":return L(e.symbol);case"CIMSolidStroke":case"CIMGradientStroke":case"CIMPictureStroke":return e.width}}function x(e){switch(e){case"Left":default:return"left";case"Right":return"right";case"Center":case"Justify":return"center"}}function A(e){switch(e){case"Top":default:return"top";case"Center":return"middle";case"Baseline":return"baseline";case"Bottom":return"bottom"}}function G(e){return(e?Object.keys(e):[]).map((t=>({name:t,alias:t,type:"string"==typeof e[t]?"esriFieldTypeString":"esriFieldTypeDouble"})))}const F=e=>e.includes("data:image/svg+xml");function O(e){if(!e)return null;switch(e.type){case"CIMPointSymbol":case"CIMTextSymbol":return"esriGeometryPoint";case"CIMLineSymbol":return"esriGeometryPolyline";case"CIMPolygonSymbol":return"esriGeometryPolygon";default:return null}}export{p as A,e as B,l as C,c as D,M as a,C as b,m as c,F as d,k as e,u as f,b as g,S as h,y as i,x as j,A as k,P as l,O as m,L as n,w as o,I as p,g as q,d as r,h as s,f as t,G as u,s as v,a as w,i as x,t as y,r as z};
