// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("../chunks/tslib.es6 ../core/lang ../core/accessorSupport/decorators/property ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/enumeration ../core/accessorSupport/decorators/subclass ../core/accessorSupport/decorators/writer ./Font ./Symbol3DLayer ./support/materialUtils ./support/Symbol3DHalo ./support/Symbol3DMaterial ./support/Symbol3DTextBackground ./support/textUtils".split(" "),function(c,f,d,b,t,u,v,m,w,x,n,p,q,k){var g;b=g=class extends w{constructor(a){super(a);
this._userSize=void 0;this.halo=null;this.horizontalAlignment="center";this.lineHeight=1;this.text=this.background=this.material=null;this.type="text";this.verticalAlignment="baseline"}get font(){return this._get("font")||null}set font(a){null!=a&&null!=this._userSize&&(a.size=this._userSize);this._set("font",a)}writeFont(a,h,r,e){h.font=a.write({},{...e,textSymbol3D:!0});delete h.font.size}get size(){return null!=this._userSize?this._userSize:null!=this.font?.size?this.font.size:9}set size(a){this._userSize=
a;null!=this.font&&(this.font.size=this._userSize);this.notifyChange("size")}clone(){const a=new g({enabled:this.enabled,font:this.font&&f.clone(this.font),halo:this.halo&&f.clone(this.halo),horizontalAlignment:this.horizontalAlignment,lineHeight:this.lineHeight,material:null!=this.material?this.material.clone():null,text:this.text,verticalAlignment:this.verticalAlignment,background:f.clone(this.background)});a._userSize=this._userSize;return a}static fromTextSymbol(a){var h=g,r=null!=a.font?a.font.clone():
new m;var e=a.haloColor;var l=a.haloSize;e=e&&null!=l&&0<l?new n.Symbol3DHalo({color:f.clone(e),size:l}):null;return new h({font:r,halo:e,horizontalAlignment:a.horizontalAlignment,lineHeight:a.lineHeight,material:a.color?new p.Symbol3DMaterial({color:a.color.clone()}):null,text:a.text,verticalAlignment:a.verticalAlignment,background:a.backgroundColor?new q.Symbol3DTextBackground({color:a.backgroundColor.clone()}):null})}};c.__decorate([d.property({type:m,json:{write:!0}})],b.prototype,"font",null);
c.__decorate([v.writer("font")],b.prototype,"writeFont",null);c.__decorate([d.property({type:n.Symbol3DHalo,json:{write:!0}})],b.prototype,"halo",void 0);c.__decorate([d.property({...k.horizontalAlignmentProperty,json:{default:"center",write:!0}})],b.prototype,"horizontalAlignment",void 0);c.__decorate([d.property({...k.lineHeightProperty,json:{default:1,write:!0}})],b.prototype,"lineHeight",void 0);c.__decorate([d.property({type:p.Symbol3DMaterial,json:{write:!0}})],b.prototype,"material",void 0);
c.__decorate([d.property({type:q.Symbol3DTextBackground,json:{write:!0}})],b.prototype,"background",void 0);c.__decorate([d.property(x.screenSizeProperty)],b.prototype,"size",null);c.__decorate([d.property({type:String,json:{write:!0}})],b.prototype,"text",void 0);c.__decorate([t.enumeration({Text:"text"},{readOnly:!0})],b.prototype,"type",void 0);c.__decorate([d.property({...k.verticalAlignmentProperty,json:{default:"baseline",write:!0}})],b.prototype,"verticalAlignment",void 0);return b=g=c.__decorate([u.subclass("esri.symbols.TextSymbol3DLayer")],
b)});