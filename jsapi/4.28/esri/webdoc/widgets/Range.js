// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../core/jsonMap ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/has ../../core/accessorSupport/decorators/subclass".split(" "),function(c,b,a,e,h,k,l,g){var f;b=new b.JSONMap({slider:"slider",picker:"picker"});a=f=class extends a.JSONSupport{constructor(d){super(d);this.stopInterval=this.numStops=this.interactionMode=null}clone(){return new f({interactionMode:this.interactionMode,
numStops:this.numStops,stopInterval:this.stopInterval})}};c.__decorate([e.property({type:b.apiValues,nonNullable:!0,json:{type:b.jsonValues,default:null,read:{reader:b.read},write:{isRequired:!0,writer:b.write}}})],a.prototype,"interactionMode",void 0);c.__decorate([e.property({type:Number,json:{read:{source:"numberOfStops"},write:{target:"numberOfStops",overridePolicy(){const d=null!=this.stopInterval;return{enabled:!d,isRequired:!d}}}}})],a.prototype,"numStops",void 0);c.__decorate([e.property({type:Number,
json:{write:{overridePolicy(){return{isRequired:null==this.numStops}}}}})],a.prototype,"stopInterval",void 0);return a=f=c.__decorate([g.subclass("esri.webdoc.widgets.Range")],a)});