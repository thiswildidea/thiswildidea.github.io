// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("../chunks/tslib.es6 ../core/lang ../core/string ../core/accessorSupport/decorators/property ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/enumeration ../core/accessorSupport/decorators/reader ../core/accessorSupport/decorators/subclass ../core/accessorSupport/decorators/writer ../layers/support/fieldUtils ./Symbol".split(" "),function(b,h,k,g,a,l,m,n,p,q,r){var f;a=f=class extends r{constructor(c){super(c);this.data=null;this.type="cim"}readData(c,d){return d}writeData(c,
d){Object.assign(d,c)}async collectRequiredFields(c,d){if("CIMSymbolReference"===this.data?.type){var e=this.data.primitiveOverrides;e&&(e=e.map(t=>q.collectArcadeFieldNames(c,d,t.valueExpressionInfo.expression)),await Promise.all(e))}}clone(){return new f({data:h.clone(this.data)})}hash(){return k.numericHash(JSON.stringify(this.data)).toString()}};b.__decorate([g.property({json:{write:!1}})],a.prototype,"color",void 0);b.__decorate([g.property({json:{write:!0}})],a.prototype,"data",void 0);b.__decorate([m.reader("data",
["symbol"])],a.prototype,"readData",null);b.__decorate([p.writer("data",{})],a.prototype,"writeData",null);b.__decorate([l.enumeration({CIMSymbolReference:"cim"},{readOnly:!0})],a.prototype,"type",void 0);return a=f=b.__decorate([n.subclass("esri.symbols.CIMSymbol")],a)});