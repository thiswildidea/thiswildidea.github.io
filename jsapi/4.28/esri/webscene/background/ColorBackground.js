// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../Color ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/has ../../core/accessorSupport/decorators/enumeration ../../core/accessorSupport/decorators/subclass ../../symbols/support/materialUtils ./Background".split(" "),function(b,e,f,d,m,n,g,h,k,a){var c;d={...k.colorAndTransparencyProperty,nonNullable:!0};a=c=class extends a{constructor(l){super(l);this.type="color";this.color=new e([0,0,0,1])}clone(){return new c(this.cloneProperties())}cloneProperties(){return{color:this.color.clone()}}};
b.__decorate([g.enumeration({color:"color"},{readOnly:!0})],a.prototype,"type",void 0);b.__decorate([f.property(d)],a.prototype,"color",void 0);return a=c=b.__decorate([h.subclass("esri.webscene.background.ColorBackground")],a)});