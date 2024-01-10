// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("../../../chunks/tslib.es6 ../../../core/Accessor ../../../core/accessorSupport/decorators/property ../../../core/accessorSupport/ensureType ../../../core/arrayUtils ../../../core/has ../../../core/accessorSupport/decorators/subclass ../../input/gamepad/GamepadInputDevice".split(" "),function(b,a,c,g,h,k,d,e){a=class extends a{constructor(f){super(f);this.enabled=!0;this.device=null;this.mode="pan";this.tiltDirection="forward-down";this.velocityFactor=1}};b.__decorate([c.property({type:Boolean,
nonNullable:!0})],a.prototype,"enabled",void 0);b.__decorate([c.property({type:e})],a.prototype,"device",void 0);b.__decorate([c.property({type:["pan","zoom"],nonNullable:!0})],a.prototype,"mode",void 0);b.__decorate([c.property({type:["forward-down","forward-up"],nonNullable:!0})],a.prototype,"tiltDirection",void 0);b.__decorate([c.property({type:Number,nonNullable:!0})],a.prototype,"velocityFactor",void 0);return a=b.__decorate([d.subclass("esri.views.navigation.gamepad.GamepadSettings")],a)});