// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("../../chunks/tslib.es6 ../../core/Clonable ../../core/JSONSupport ../../core/unitUtils ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/arrayUtils ../../core/has ../../core/accessorSupport/decorators/subclass".split(" "),function(b,a,f,e,d,h,k,l,g){a=class extends a.ClonableMixin(f.JSONSupport){constructor(c){super(c);this.units=this.shapeLengthField=this.shapeAreaField=null}};b.__decorate([d.property({type:String,json:{read:{source:"shapeAreaFieldName"}}})],
a.prototype,"shapeAreaField",void 0);b.__decorate([d.property({type:String,json:{read:{source:"shapeLengthFieldName"}}})],a.prototype,"shapeLengthField",void 0);b.__decorate([d.property({type:String,json:{read:c=>e.areaUnitsJSONMap.read(c)||e.lengthUnitsJSONMap.read(c)}})],a.prototype,"units",void 0);return a=b.__decorate([g.subclass("esri.layers.support.GeometryFieldsInfo")],a)});