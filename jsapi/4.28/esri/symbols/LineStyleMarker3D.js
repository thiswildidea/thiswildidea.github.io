// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("../chunks/tslib.es6 ../Color ../core/Clonable ../core/JSONSupport ../core/accessorSupport/decorators/property ../core/accessorSupport/ensureType ../core/arrayUtils ../core/has ../core/accessorSupport/decorators/subclass ./support/lineMarkers".split(" "),function(c,f,a,g,d,h,l,m,k,e){a=class extends a.ClonableMixin(g.JSONSupport){constructor(b){super(b);this.type="style";this.placement="begin-end";this.style="arrow";this.color=null}equals(b){return null!=b&&b.placement===this.placement&&b.style===
this.style&&(null==this.color&&null==b.color||null!=this.color&&null!=b.color&&this.color.toJSON()===b.color.toJSON())}};c.__decorate([d.property({type:["style"],readOnly:!0,json:{read:!0,write:{ignoreOrigin:!0}}})],a.prototype,"type",void 0);c.__decorate([d.property({type:e.lineMarkerPlacements,json:{default:"begin-end",write:!0}})],a.prototype,"placement",void 0);c.__decorate([d.property({type:e.lineMarkerStyles,json:{default:"arrow",write:!0}})],a.prototype,"style",void 0);c.__decorate([d.property({type:f,
json:{type:[h.Integer],default:null,write:!0}})],a.prototype,"color",void 0);return a=c.__decorate([k.subclass("esri.symbols.LineStyleMarker3D")],a)});