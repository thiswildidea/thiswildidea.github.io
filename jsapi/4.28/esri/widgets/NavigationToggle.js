// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("../chunks/tslib.es6 ../core/accessorSupport/decorators/property ../core/accessorSupport/ensureType ../core/arrayUtils ../core/has ../core/accessorSupport/decorators/subclass ./Widget ./NavigationToggle/css ./NavigationToggle/NavigationToggleViewModel ./support/globalCss ./support/legacyIcon ./support/decorators/accessibleHandler ./support/decorators/messageBundle ./support/jsxFactory ./support/widgetUtils".split(" "),function(c,e,b,v,w,n,p,d,k,h,l,q,r,g,x){b=class extends p{constructor(a,
f){super(a,f);this.iconClass=d.css.widgetIcon;this.messages=this.icon=null;this.viewModel=new k}get label(){return this.messages?.widgetLabel??""}set label(a){this._overrideIfSome("label",a)}set layout(a){"horizontal"!==a&&(a="vertical");this._set("layout",a)}get view(){return this.viewModel.view}set view(a){this.viewModel.view=a}toggle(){return this.viewModel.toggle()}render(){const a="disabled"===this.viewModel?.state;var f="pan"===this.viewModel?.navigationMode;const t={[d.css.activeButton]:f};
f={[d.css.activeButton]:!f};const u=a?-1:0,m=this.messages.toggle;return g.tsx("div",{"aria-label":m,bind:this,class:this.classes(d.css.base,h.globalCss.widget,{[h.globalCss.disabled]:a,[d.css.isLayoutHorizontal]:"horizontal"===this.layout}),onclick:this._toggle,onkeydown:this._toggle,tabIndex:u,title:m},g.tsx("div",{class:this.classes(d.css.button,h.globalCss.widgetButton,d.css.panButton,t)},g.tsx("span",{class:l.legacyIcon.pan})),g.tsx("div",{class:this.classes(d.css.button,h.globalCss.widgetButton,
d.css.rotateButton,f)},g.tsx("span",{class:l.legacyIcon.rotate})))}_toggle(){this.toggle()}};c.__decorate([e.property()],b.prototype,"iconClass",void 0);c.__decorate([e.property()],b.prototype,"icon",void 0);c.__decorate([e.property()],b.prototype,"label",null);c.__decorate([e.property({value:"vertical"})],b.prototype,"layout",null);c.__decorate([e.property(),r.messageBundle("esri/widgets/NavigationToggle/t9n/NavigationToggle")],b.prototype,"messages",void 0);c.__decorate([e.property()],b.prototype,
"view",null);c.__decorate([e.property({type:k})],b.prototype,"viewModel",void 0);c.__decorate([q.accessibleHandler()],b.prototype,"_toggle",null);return b=c.__decorate([n.subclass("esri.widgets.NavigationToggle")],b)});