// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("../chunks/tslib.es6 ../core/lang ../core/screenUtils ../core/accessorSupport/decorators/property ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/enumeration ../core/accessorSupport/decorators/subclass ./FillSymbol ./support/urlUtils".split(" "),function(c,h,e,d,a,p,q,r,k){var g;a=g=class extends r{constructor(...b){super(...b);this.type="picture-fill";this.url=null;this.yscale=this.xscale=1;this.height=this.width=12;this.yoffset=this.xoffset=0;this.source=null}normalizeCtorArgs(b,
l,m,n){if(b&&"string"!==typeof b&&null==b.imageData)return b;const f={};b&&(f.url=b);l&&(f.outline=l);null!=m&&(f.width=e.toPt(m));null!=n&&(f.height=e.toPt(n));return f}clone(){const b=new g({color:h.clone(this.color),height:this.height,outline:this.outline&&this.outline.clone(),url:this.url,width:this.width,xoffset:this.xoffset,xscale:this.xscale,yoffset:this.yoffset,yscale:this.yscale});b._set("source",h.clone(this.source));return b}hash(){return`${super.hash()}.${this.color?.hash()}.${this.height}.${this.url}.${this.width}.${this.xoffset}.${this.xscale}.${this.yoffset}.${this.yscale}`}};
c.__decorate([p.enumeration({esriPFS:"picture-fill"},{readOnly:!0})],a.prototype,"type",void 0);c.__decorate([d.property(k.urlPropertyDefinition)],a.prototype,"url",void 0);c.__decorate([d.property({type:Number,json:{write:!0}})],a.prototype,"xscale",void 0);c.__decorate([d.property({type:Number,json:{write:!0}})],a.prototype,"yscale",void 0);c.__decorate([d.property({type:Number,cast:e.toPt,json:{write:!0}})],a.prototype,"width",void 0);c.__decorate([d.property({type:Number,cast:e.toPt,json:{write:!0}})],
a.prototype,"height",void 0);c.__decorate([d.property({type:Number,cast:e.toPt,json:{write:!0}})],a.prototype,"xoffset",void 0);c.__decorate([d.property({type:Number,cast:e.toPt,json:{write:!0}})],a.prototype,"yoffset",void 0);c.__decorate([d.property(k.sourcePropertyDefinition)],a.prototype,"source",void 0);return a=g=c.__decorate([q.subclass("esri.symbols.PictureFillSymbol")],a)});