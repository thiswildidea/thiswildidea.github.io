// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define(["exports","../../../Graphic"],function(h,l){const m=[227,27,21,.6],n=[21,244,21,.6],k=[{color:[255,0,0,.6],haloOpacity:.9,fillOpacity:.2,hex:"#ff0000"},{color:[255,0,255,.6],haloOpacity:.9,fillOpacity:.2,hex:"#ff00ff"},{color:[217,188,255,.6],haloOpacity:.9,fillOpacity:.2,hex:"#D9BCFF"},{color:[0,255,0,.6],haloOpacity:.9,fillOpacity:.2,hex:"#00ff00"},{color:[255,255,0,.6],haloOpacity:.9,fillOpacity:.2,hex:"#ffff00"},{color:[0,0,255,.6],haloOpacity:.9,fillOpacity:.2,hex:"#0000ff"},{color:[255,
165,0,.5],haloOpacity:.9,fillOpacity:.2,hex:"#ffa500"},{color:[0,0,0,.5],haloOpacity:.9,fillOpacity:.2,hex:"#000000"}];class p{constructor(){this.highlightColor=[...k]}addCustomColor(a){this.highlightColor=[...k];this.highlightColor.some(b=>b.hex.toLowerCase()===a.hex.toLowerCase())||this.highlightColor.push(a)}getFlagGraphic(a,b,g,c){b="starting-point"===b?n:m;if("polygon"===a.type){const d=a;d.centroid&&(a=d.centroid)}return c?this.makeGraphic(a,b,g?.attributes,null,c):this.makeGraphic(a,b,g?.attributes)}makeGraphic(a,
b,g,c,d){let e,f=a;switch(a.type){case "multipoint":e={type:"simple-marker",color:b,size:12,outline:{color:b,width:0}};c&&(f=a);break;case "point":e=d?d:{type:"simple-marker",color:b,size:12,outline:{color:b,width:0}};c&&(f=a);break;case "polyline":e={type:"simple-line",color:b,width:12};c&&(f=a);break;case "polygon":e={type:"simple-fill",color:b,outline:{color:b,width:12}},c&&(f=a)}return new l({geometry:f,symbol:e,attributes:g??null})}}h.GraphicHandler=p;h.defaultSwatchColors=k;Object.defineProperty(h,
Symbol.toStringTag,{value:"Module"})});