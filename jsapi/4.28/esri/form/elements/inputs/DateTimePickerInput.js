// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("../../../chunks/tslib.es6 ../../../core/accessorSupport/decorators/property ../../../core/accessorSupport/ensureType ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/decorators/reader ../../../core/accessorSupport/decorators/subclass ../../../core/accessorSupport/decorators/writer ./Input".split(" "),function(c,e,b,n,p,g,l,h,m){function k(a){return null!=a?new Date(a):null}var f;b=f=class extends m{constructor(a){super(a);this.includeTime=!1;this.min=this.max=null;
this.type="datetime-picker"}readMax(a,d){return k(d.max)}writeMax(a,d){d.max=a?a.getTime():null}readMin(a,d){return k(d.min)}writeMin(a,d){d.min=a?a.getTime():null}clone(){return new f({includeTime:this.includeTime,max:this.max,min:this.min})}};c.__decorate([e.property({type:Boolean,json:{write:!0}})],b.prototype,"includeTime",void 0);c.__decorate([e.property({type:Date,json:{type:Number,write:!0}})],b.prototype,"max",void 0);c.__decorate([g.reader("max")],b.prototype,"readMax",null);c.__decorate([h.writer("max")],
b.prototype,"writeMax",null);c.__decorate([e.property({type:Date,json:{type:Number,write:!0}})],b.prototype,"min",void 0);c.__decorate([g.reader("min")],b.prototype,"readMin",null);c.__decorate([h.writer("min")],b.prototype,"writeMin",null);c.__decorate([e.property({type:["datetime-picker"],json:{read:!1,write:!0}})],b.prototype,"type",void 0);return b=f=c.__decorate([l.subclass("esri.form.elements.inputs.DateTimePickerInput")],b)});