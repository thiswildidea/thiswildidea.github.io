// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("../../../chunks/tslib.es6 ../../../core/compilerUtils ../../../core/handleUtils ../../../core/lang ../../../core/accessorSupport/decorators/property ../../../core/accessorSupport/decorators/cast ../../../core/accessorSupport/decorators/subclass ../../../core/accessorSupport/ensureType ./lightingUtils ./SceneViewAtmosphere ./SunLighting ./VirtualLighting ../../../webscene/Environment ../../../webscene/SunLighting ../../../webscene/VirtualLighting".split(" "),function(e,m,n,h,k,p,q,r,t,l,c,
f,b,u,v){var d;b=d=class extends b{constructor(a){super(a);this.atmosphere=new l.SceneViewAtmosphere;this.lighting=this.castLighting();this.cachedCameraTrackingEnabled=null}static fromWebsceneEnvironment(a){a=a.cloneConstructProperties();return new d({...a,lighting:a.lighting?"virtual"===a.lighting.type?f.fromWebsceneLighting(a.lighting):c.fromWebsceneLighting(a.lighting):void 0})}castLighting(a){return this._convertLightingWithDestroy(a)}applyLighting(a){this.lighting=this._convertLightingWithDestroy(a)}_convertLightingWithDestroy(a){const g=
this._convertLighting(a);g!==a&&this.addHandles(n.destroyHandle(g));return g}_convertLighting(a){return a?a instanceof c||a instanceof f?a:a instanceof u?this.lighting&&"virtual"!==this.lighting.type?this.lighting.cloneWithWebsceneLighting(a):new c({...a.cloneConstructProperties(),...this.lighting?.cloneNonPersistentConstructProperties()}):a instanceof v?this.lighting&&"virtual"===this.lighting.type?this.lighting.cloneWithWebsceneLighting(a):new f({...a.cloneConstructProperties(),...this.lighting?.cloneNonPersistentConstructProperties()}):
r.ensureOneOfType(t.lightingTypes,a):new c}clone(){return new d({lighting:this.lighting.clone(),atmosphere:this.atmosphere.clone(),weather:this.weather.clone(),atmosphereEnabled:this.atmosphereEnabled,starsEnabled:this.starsEnabled,background:h.clone(this.background)})}cloneWithWebsceneEnvironment(a){return new d({atmosphere:this.atmosphere.clone(),weather:this.weather.clone(),atmosphereEnabled:this.atmosphereEnabled,starsEnabled:this.starsEnabled,background:h.clone(this.background),...a.cloneConstructProperties(),
lighting:this._getLighting(a)})}_getLighting(a){switch(a.lighting.type){case "sun":return this.lighting&&"sun"===this.lighting.type?this.lighting.cloneWithWebsceneLighting(a.lighting):c.fromWebsceneLighting(a.lighting);case "virtual":return this.lighting&&"virtual"===this.lighting.type?this.lighting.cloneWithWebsceneLighting(a.lighting):f.fromWebsceneLighting(a.lighting);default:return m.neverReached(a.lighting),c.fromWebsceneLighting(a.lighting)}}};e.__decorate([k.property({type:l.SceneViewAtmosphere,
json:{read:!1},nonNullable:!0})],b.prototype,"atmosphere",void 0);e.__decorate([k.property({nonNullable:!0})],b.prototype,"lighting",void 0);e.__decorate([p.cast("lighting")],b.prototype,"castLighting",null);return b=d=e.__decorate([q.subclass("esri.views.3d.environment.SceneViewEnvironment")],b)});