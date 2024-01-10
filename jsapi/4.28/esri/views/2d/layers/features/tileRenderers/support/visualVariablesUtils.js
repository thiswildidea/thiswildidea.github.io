// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("exports ../../../../../../core/screenUtils ../../../../engine/webgl/color ../../../../engine/webgl/definitions ../../../../engine/webgl/enums ../../../../engine/webgl/visualVariablesUtils".split(" "),function(e,l,t,u,h,v){function n(a){return{value:a.value,size:l.toPt(a.size)}}function k(a){return(a??[]).map(c=>n(c))}function m(a){return"string"===typeof a||"number"===typeof a?l.toPt(a):{type:"size",expression:a.expression,stops:k(a.stops)}}function w(a){const c={values:[0,0,0,0,0,0,0,0],
opacities:[0,0,0,0,0,0,0,0]};if("string"===typeof a.field)if(a.stops){if(8<a.stops.length)return null;a=a.stops;for(var b=0;8>b;++b){const d=a[Math.min(b,a.length-1)];c.values[b]=d.value;c.opacities[b]=d.opacity}}else return null;else if(a.stops&&0<=a.stops.length)for(a=a.stops&&0<=a.stops.length?a.stops[0].opacity:0,b=0;8>b;b++)c.values[b]=Infinity,c.opacities[b]=a;else return null;return c}function p(a,c,b){a[4*c]=b.r/255;a[4*c+1]=b.g/255;a[4*c+2]=b.b/255;a[4*c+3]=b.a}function q(a){if(null==a||
a.normalizationField)return null;const c={field:null,values:[0,0,0,0,0,0,0,0],colors:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]};if("string"===typeof a.field)if(a.stops){if(8<a.stops.length)return null;c.field=a.field;a=a.stops;for(var b=0;8>b;++b){const d=a[Math.min(b,a.length-1)];c.values[b]=d.value;p(c.colors,b,d.color)}}else return null;else if(a.stops&&0<=a.stops.length)for(a=a.stops&&0<=a.stops.length&&a.stops[0].color,b=0;8>b;b++)c.values[b]=Infinity,p(c.colors,b,a);
else return null;for(a=0;32>a;a+=4)t.premultiplyAlpha(c.colors,a,!0);return c}const r=a=>{const c=[],b=[];a=k(a);const d=a.length;for(let f=0;6>f;f++){const g=a[Math.min(f,d-1)];c.push(g.value);b.push(null==g.size?u.nanMagicNumber:l.pt2px(g.size))}return{values:new Float32Array(c),sizes:new Float32Array(b)}};e.convertColorVariable=q;e.convertVisualVariables=function(a){const c=a&&0<a.length?{}:null,b=c?{}:null;if(!c||!b)return{vvFields:c,vvRanges:b};for(const d of a)if(d.field&&(c[d.type]=d.field),
"size"===d.type)switch(b.size||(b.size={}),a=d,v.getTypeOfSizeVisualVariable(a)){case h.WGLVVFlag.SIZE_MINMAX_VALUE:b.size.minMaxValue={minDataValue:a.minDataValue,maxDataValue:a.maxDataValue,minSize:m(a.minSize),maxSize:m(a.maxSize)};break;case h.WGLVVFlag.SIZE_SCALE_STOPS:b.size.scaleStops={stops:k(a.stops)};break;case h.WGLVVFlag.SIZE_FIELD_STOPS:if(a.levels){const f={};for(const g in a.levels)f[g]=r(a.levels[g]);b.size.fieldStops={type:"level-dependent",levels:f}}else b.size.fieldStops={type:"static",
...r(a.stops)};break;case h.WGLVVFlag.SIZE_UNIT_VALUE:b.size.unitValue={unit:a.valueUnit,valueRepresentation:a.valueRepresentation??void 0}}else"color"===d.type?b.color=q(d):"opacity"===d.type?b.opacity=w(d):"rotation"===d.type&&(b.rotation={type:d.rotationType});return{vvFields:c,vvRanges:b}};e.getVisualVariableSizeValueRepresentationRatio=function(a,c){if(!a||!c)return a;switch(c){case "radius":case "distance":return 2*a;case "area":return Math.sqrt(a)}return a};e.normalizeSizeElement=m;e.normalizeSizeStops=
k;e.stopToSizeStop=n;Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});