// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("../chunks/tslib.es6 ../Color ../core/Clonable ../core/JSONSupport ../core/screenUtils ../core/accessorSupport/decorators/property ../core/accessorSupport/ensureType ../core/arrayUtils ../core/has ../core/accessorSupport/decorators/subclass".split(" "),function(b,c,a,g,e,d,f,l,m,h){a=class extends g.JSONSupportMixin(a.Clonable){constructor(k){super(k);this.type="simple";this.color=new c("black");this.lineSize=2;this.fontSize=10;this.textColor=new c("black");this.textBackgroundColor=new c([255,
255,255,.6])}};b.__decorate([d.property({type:["simple"],readOnly:!0,json:{write:{isRequired:!0}}})],a.prototype,"type",void 0);b.__decorate([d.property({type:c,nonNullable:!0,json:{type:[f.Integer],write:{isRequired:!0}}})],a.prototype,"color",void 0);b.__decorate([d.property({type:Number,cast:e.toPt,nonNullable:!0,range:{min:e.px2pt(1)},json:{write:{isRequired:!0}}})],a.prototype,"lineSize",void 0);b.__decorate([d.property({type:Number,cast:e.toPt,nonNullable:!0,json:{write:{isRequired:!0}}})],
a.prototype,"fontSize",void 0);b.__decorate([d.property({type:c,nonNullable:!0,json:{type:[f.Integer],write:{isRequired:!0}}})],a.prototype,"textColor",void 0);b.__decorate([d.property({type:c,nonNullable:!0,json:{type:[f.Integer],write:{isRequired:!0}}})],a.prototype,"textBackgroundColor",void 0);return a=b.__decorate([h.subclass("esri.analysis.DimensionSimpleStyle")],a)});