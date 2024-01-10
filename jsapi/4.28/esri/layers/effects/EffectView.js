// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/tslib.es6 ../../core/Accessor ../../core/has ../../core/lang ../../core/Logger ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ./parser ./utils".split(" "),function(e,h,v,w,l,x,k,A,y,z,t){function p(a){a=z.parse(a)||[];var b=(b=a[0])?"type"in b:!1;return b?[{scale:-1,effects:a}]:a}function q(a,b,c){return a[0]?.effects&&b[0]?.effects?(-1===a[0]?.scale||-1===b[0]?.scale)&&(1<a.length||1<
b.length)&&0>=c?!1:t.canInterpolateEffects(a[0].effects,b[0].effects):!0}function u(a,b,c){const d=a.length>b.length?a:b;a=a.length>b.length?b:a;var f=a[a.length-1];b=f?.scale??c;f=f?.effects??[];for(let g=a.length;g<d.length;g++)a.push({scale:b,effects:[...f]});for(b=0;b<d.length;b++)a[b].scale=-1===a[b].scale?c:a[b].scale,d[b].scale=-1===d[b].scale?c:d[b].scale,t.normalizeEffects(a[b].effects,d[b].effects)}e.EffectView=class extends v{constructor(a){super(a);this._final=this._to=this._from=null;
this._current=[];this._time=0;this.duration=w("mapview-transitions-duration");this.effects=[]}set effect(a){const b=this._get("effect");a=a||"";if(b!==a){this._set("effect",a);try{this._transitionTo(p(a))}catch(c){this._transitionTo([]),x.getLogger(this).warn("Invalid Effect",{effect:a,error:c})}}}get hasEffects(){return this.transitioning||!!this.effects.length}set scale(a){this._updateForScale(a)}get transitioning(){return null!==this._to}canTransitionTo(a){try{return 0<this.scale&&q(this._current,
p(a),this.scale)}catch{return!1}}transitionStep(a,b){this._applyTimeTransition(a);this._updateForScale(b)}endTransitions(){this._applyTimeTransition(this.duration)}_transitionTo(a){0<this.scale&&q(this._current,a,this.scale)?(this._final=a,this._to=l.clone(a),u(this._current,this._to,this.scale),this._from=l.clone(this._current),this._time=0):(this._from=this._to=this._final=null,this._current=a);this._set("effects",this._current[0]?l.clone(this._current[0].effects):[])}_applyTimeTransition(a){if(this._to&&
this._from&&this._current&&this._final){this._time+=a;a=Math.min(1,this._time/this.duration);for(let c=0;c<this._current.length;c++){const d=this._current[c],f=this._from[c],g=this._to[c];var b=f.scale;d.scale=b+(g.scale-b)*a;for(b=0;b<d.effects.length;b++)d.effects[b].interpolate(f.effects[b],g.effects[b],a)}1===a&&(this._current=this._final,this._set("effects",this._current[0]?l.clone(this._current[0].effects):[]),this._from=this._to=this._final=null)}}_updateForScale(a){this._set("scale",a);if(0!==
this._current.length){var b=this._current,c=this._current.length-1,d,f=1;if(1===b.length||a>=b[0].scale)var g=d=b[0].effects;else if(a<=b[c].scale)g=d=b[c].effects;else for(let m=0;m<c;m++){const n=b[m],r=b[m+1];if(n.scale>=a&&r.scale<=a){f=(a-n.scale)/(r.scale-n.scale);d=n.effects;g=r.effects;break}}for(a=0;a<this.effects.length;a++)this.effects[a].interpolate(d[a],g[a],f)}}};h.__decorate([k.property()],e.EffectView.prototype,"_to",void 0);h.__decorate([k.property()],e.EffectView.prototype,"duration",
void 0);h.__decorate([k.property({value:""})],e.EffectView.prototype,"effect",null);h.__decorate([k.property({readOnly:!0})],e.EffectView.prototype,"effects",void 0);h.__decorate([k.property({readOnly:!0})],e.EffectView.prototype,"hasEffects",null);h.__decorate([k.property({value:0})],e.EffectView.prototype,"scale",null);h.__decorate([k.property({readOnly:!0})],e.EffectView.prototype,"transitioning",null);e.EffectView=h.__decorate([y.subclass("esri.layers.effects.EffectView")],e.EffectView);e.canInterpolateEffectStops=
q;e.convertEffectToStops=p;e.normalizeEffectStops=u;Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});