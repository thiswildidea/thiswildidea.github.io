// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("../../../chunks/tslib.es6 ../../../core/Accessor ../../../core/Identifiable ../../../core/accessorSupport/decorators/property ../../../core/accessorSupport/ensureType ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/decorators/subclass".split(" "),function(b,a,g,e,k,l,m,h){var c;a=c=class extends g.NumericIdentifiableMixin(a){constructor(){super(...arguments);this.rotationEnabled=this.enabled=!0}constrain(d,f){if(!this.enabled||!f)return d;this.rotationEnabled||(d.rotation=
f.rotation);return d}clone(){return new c({enabled:this.enabled,rotationEnabled:this.rotationEnabled})}};b.__decorate([e.property()],a.prototype,"enabled",void 0);b.__decorate([e.property()],a.prototype,"rotationEnabled",void 0);return a=c=b.__decorate([h.subclass("esri.views.2d.constraints.RotationConstraint")],a)});