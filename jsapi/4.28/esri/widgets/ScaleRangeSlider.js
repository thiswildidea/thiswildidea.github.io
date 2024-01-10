// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("require ../chunks/tslib.es6 ../intl ../core/events ../core/maybe ../core/reactiveUtils ../core/accessorSupport/decorators/property ../core/accessorSupport/decorators/cast ../core/arrayUtils ../core/has ../core/accessorSupport/decorators/subclass ./Slider ./Widget ./ScaleRangeSlider/css ./ScaleRangeSlider/scalePreviewUtils ./ScaleRangeSlider/ScaleRanges ./ScaleRangeSlider/ScaleRangeSliderViewModel ./support/componentsUtils ./support/globalCss ./support/widgetUtils ./support/decorators/messageBundle ./support/jsxFactory ../intl/number ../intl/substitute".split(" "),
function(n,f,e,y,B,r,h,C,O,P,D,E,F,m,z,t,G,H,A,I,J,k,K,L){const v={preview:!0,scaleMenus:{maxScaleMenu:!0,minScaleMenu:!0}},M={maximumFractionDigits:0};e=class extends F{constructor(a,b){super(a,b);this._minThumbNode=this._maxThumbNode=this._customInput=this._activeThumb=this._activeMenu=null;this._previewAutoCloseTimeoutId=void 0;this._previewPopover=null;this._slider=new E({thumbCreatedFunction:(c,g,d)=>{0===c?this._minThumbNode=d:1===c&&(this._maxThumbNode=d);this.addHandles([y.on(d,"mouseenter",
()=>{this._activeThumb=c;this.scheduleRender()}),y.on(d,"mouseleave",()=>{this._previewAutoCloseTimeoutId||(this._activeThumb=null,this.scheduleRender())})])}});this.disabled=!1;this.messages=null;this.region="US";this.viewModel=new G;this.visibleElements=v;this._afterInputNumberCreate=c=>{"value"in c&&null!=c.value&&"setNumberValue"in c&&c.setNumberValue({committing:!1,value:c.value,origin:"direct"});this._customInput=c};this._handleCustomScaleInputChange=(c,g)=>{const {viewModel:{scaleRanges:d}}=
this,l=Number.parseFloat(g.value);Number.isNaN(l)?g.value=c:this._setScale(d.clampScale(l))}}loadDependencies(){return H.loadCalciteComponents({button:()=>new Promise((a,b)=>n(["../chunks/calcite-button"],a,b)),dropdown:()=>new Promise((a,b)=>n(["../chunks/calcite-dropdown"],a,b)),"dropdown-group":()=>new Promise((a,b)=>n(["../chunks/calcite-dropdown-group"],a,b)),"dropdown-item":()=>new Promise((a,b)=>n(["../chunks/calcite-dropdown-item"],a,b)),icon:()=>new Promise((a,b)=>n(["../chunks/calcite-icon"],
a,b)),"input-number":()=>new Promise((a,b)=>n(["../chunks/calcite-input-number"],a,b)),label:()=>new Promise((a,b)=>n(["../chunks/calcite-label"],a,b)),popover:()=>new Promise((a,b)=>n(["../chunks/calcite-popover"],a,b))})}initialize(){this.addHandles([r.watch(()=>this.viewModel,a=>this._slider.viewModel=a?.sliderViewModel??null,r.initial),r.watch(()=>this._interactive,a=>{this._slider.disabled=!a;a||this._setActiveMenu(null)},r.initial),this._slider.on("thumb-drag",({index:a})=>{this._activeThumb=
a;clearTimeout(this._previewAutoCloseTimeoutId);this._previewAutoCloseTimeoutId=setTimeout(()=>{this._previewAutoCloseTimeoutId=void 0;this._activeThumb=null},250)}),r.when(()=>!0===this.view?.stationary,()=>this.scheduleRender())])}destroy(){this._slider=B.destroyMaybe(this._slider)}get _maxScaleMenuEnabled(){const {scaleMenus:a}=this.visibleElements;return!0===a||"boolean"!==typeof a&&a.maxScaleMenu}get _minScaleMenuEnabled(){const {scaleMenus:a}=this.visibleElements;return!0===a||"boolean"!==typeof a&&
a.minScaleMenu}get _interactive(){return"disabled"!==this.viewModel?.state&&!this.disabled}get effectiveMaxScale(){return this.viewModel.effectiveMaxScale}get effectiveMinScale(){return this.viewModel.effectiveMinScale}get effectiveMaxScaleLimit(){return this.viewModel.effectiveMaxScaleLimit}get effectiveMinScaleLimit(){return this.viewModel.effectiveMinScaleLimit}get label(){return this.messages?.widgetLabel??""}set label(a){this._overrideIfSome("label",a)}get layer(){return this.viewModel.layer}set layer(a){this.viewModel.layer=
a}get maxScale(){return this.viewModel.maxScale}set maxScale(a){this.viewModel.maxScale=a}get maxScaleLimit(){return this.viewModel.maxScaleLimit}set maxScaleLimit(a){this.viewModel.maxScaleLimit=a}get minScale(){return this.viewModel.minScale}set minScale(a){this.viewModel.minScale=a}get minScaleLimit(){return this.viewModel.minScaleLimit}set minScaleLimit(a){this.viewModel.minScaleLimit=a}get view(){return this.viewModel.view}set view(a){this.viewModel.view=a}castVisibleElements(a){return{...v,
...a,scaleMenus:"boolean"===typeof a?.scaleMenus?a.scaleMenus:{...v.scaleMenus,...a?.scaleMenus}}}formatScale(a){return`${"1:"}${K.formatNumber(a,M)}`}render(){const {_interactive:a,_slider:b,label:c,messages:g,view:d,viewModel:{scaleRanges:l,state:w}}=this;var p=g.scaleRangeLabels;const x=p[l.findScaleRangeByIndex(b.values[0]).id];p=p[l.findScaleRangeByIndex(b.values[1]).id];return k.tsx("div",{"aria-label":c,class:this.classes(m.css.base,A.globalCss.widget,a?null:A.globalCss.disabled)},k.tsx("div",
{class:m.css.scaleIndicatorWrapper,dir:"ltr"},"ready"===w&&d?this._renderCurrentScaleIndicator():null,b.render(),this._renderPreviewPopover()),k.tsx("div",{class:m.css.scaleMenuContainer},this._minScaleMenuEnabled?this._renderScaleMenuToggle("min",x):null,k.tsx("div",{class:m.css.scaleMenuSeparator}),this._maxScaleMenuEnabled?this._renderScaleMenuToggle("max",p):null))}_renderPreviewPopover(){const {_activeThumb:a}=this,b=null!=a&&this.visibleElements.preview;return k.tsx("calcite-popover",{afterCreate:I.storeNode,
afterUpdate:()=>this._previewPopover?.reposition(),bind:this,"data-node-ref":"_previewPopover",label:this.messages.preview,offsetDistance:16,open:b,overlayPositioning:"fixed",placement:"top",referenceElement:b?0===a?this._minThumbNode:this._maxThumbNode:"",triggerDisabled:!0},this._renderScalePreview())}_renderScalePreview(){const {_activeThumb:a,_slider:b,region:c,viewModel:{scaleRanges:g}}=this;var d=0===a?b.values[0]:b.values[1];d=Object.keys(t.RecommendedScales).indexOf(g.findScaleRangeByIndex(d).id);
d={backgroundImage:z.getScalePreviewSource(c),backgroundPosition:z.getScalePreviewSpriteBackgroundPosition(d)};return k.tsx("div",{class:m.css.scalePreview},k.tsx("div",{class:m.css.scalePreviewThumbnail,styles:d}))}_renderScaleMenuToggle(a,b){const {_activeMenu:c,_interactive:g}=this,d=c===a;return[k.tsx("calcite-dropdown",{closeOnSelectDisabled:!0,open:d,overlayPositioning:"fixed",placement:"max"===a?"bottom-end":"bottom-start",scale:"s",onCalciteDropdownClose:({target:l})=>{this._activeMenu===
a&&this._setActiveMenu(null);l.setFocus()},onCalciteDropdownOpen:()=>this._setActiveMenu(a)},k.tsx("calcite-button",{appearance:d?"outline":"transparent","aria-pressed":d.toString(),class:m.css.scaleMenuToggle,"data-type":a,disabled:!g,iconEnd:"chevron-down",scale:"s",slot:"trigger"},b),d&&"max"===a?this._renderMaxScaleMenu():null,d&&"min"===a?this._renderMinScaleMenu():null)]}_renderMinScaleMenu(){const {effectiveMaxScale:a,effectiveMinScaleLimit:b,view:c,viewModel:{scaleRanges:g}}=this,d=c?c.scale:
void 0;return this._renderScaleMenu({type:"min",min:b,max:g.findScaleRange(a).minScale,viewScale:d})}_renderMaxScaleMenu(){const {effectiveMinScale:a,effectiveMaxScaleLimit:b,view:c,viewModel:{scaleRanges:g}}=this,d=c?c.scale:void 0;return this._renderScaleMenu({type:"max",min:g.findScaleRange(a).maxScale,max:b,viewScale:d})}_renderScaleMenu({viewScale:a,min:b,max:c,type:g}){const {effectiveMaxScale:d,effectiveMinScale:l,messages:w}=this,p="max"===g?d:l,x=t.fromScaleRange({minScale:b,maxScale:c}),
N=this.messages.featuredScaleLabels,u=t.RecommendedScales;b=Object.keys(u).filter(q=>x.contains(u[q])).map(q=>this._renderScaleMenuItem({scaleLabel:N[q],scaleValue:u[q],isSelected:p===u[q],valueVisible:"world"!==q}));return k.tsx("calcite-dropdown-group",{key:`${this.id}__scale-menu--${g}`},this._renderCustomScaleValue({currentScale:p}),null!=a?this._renderScaleMenuItem({scaleValue:a,scaleLabel:w.featuredScaleLabels.current,isSelected:p===a,valueVisible:!0}):null,b)}_renderCustomScaleValue({currentScale:a}){const {messages:b}=
this,c=Math.round(a).toString();return k.tsx("calcite-dropdown-item",{afterCreate:g=>void g.setFocus(),key:"custom-scale",label:b.featuredScaleLabels.custom,onCalciteDropdownItemSelect:()=>void this._customInput?.setFocus()},k.tsx("calcite-label",{scale:"s"},k.tsx("span",null,b.featuredScaleLabels.custom),k.tsx("calcite-input-number",{afterCreate:this._afterInputNumberCreate,groupSeparator:!0,inputMode:"numeric",max:t.RecommendedScales.world,min:0,numberButtonType:"none",placeholder:b.customScaleInputTooltip,
prefixText:"1:",scale:"s",step:1,value:c,onCalciteInputNumberChange:({target:g})=>this._handleCustomScaleInputChange(c,g)})))}_renderScaleMenuItem(a){const {scaleValue:b,scaleLabel:c,valueVisible:g,isSelected:d}=a;return k.tsx("calcite-dropdown-item",{key:c,label:c,selected:d,onCalciteDropdownItemSelect:this._setScale.bind(this,b)},c,g?k.tsx("div",{class:m.css.scaleMenuSublabel},this.formatScale(b)):void 0)}_renderCurrentScaleIndicator(){const {_slider:a,messages:b,view:c,viewModel:{scaleRanges:g}}=
this;var d=g.clampScale(c.scale),l=this.viewModel.mapScaleToSlider(d);d=l/a.max;l=b.scaleRangeLabels[g.findScaleRangeByIndex(l).id];l=L.substitute(b.currentScaleTooltip,{scaleLabel:l});return k.tsx("div",{class:m.css.scaleIndicatorContainer,key:"scale-indicator"},k.tsx("div",{"aria-label":l,class:m.css.scaleIndicator,styles:{left:`${100*d}%`},title:l},this.renderCurrentScaleIndicatorIcon()))}renderCurrentScaleIndicatorIcon(){return k.tsx("calcite-icon",{class:m.css.scaleIndicatorIcon,icon:"caret-up",
scale:"s"})}_setScale(a){"max"===this._activeMenu?this.maxScale=Math.min(a,this.effectiveMinScale-1):this.minScale=Math.max(a,this.effectiveMaxScale+1);this._setActiveMenu(null)}_setActiveMenu(a){this._activeMenu=a}};f.__decorate([h.property()],e.prototype,"_activeMenu",void 0);f.__decorate([h.property()],e.prototype,"_activeThumb",void 0);f.__decorate([h.property()],e.prototype,"_customInput",void 0);f.__decorate([h.property()],e.prototype,"_maxScaleMenuEnabled",null);f.__decorate([h.property()],
e.prototype,"_minScaleMenuEnabled",null);f.__decorate([h.property()],e.prototype,"_slider",void 0);f.__decorate([h.property({readOnly:!0})],e.prototype,"_interactive",null);f.__decorate([h.property()],e.prototype,"disabled",void 0);f.__decorate([h.property()],e.prototype,"effectiveMaxScale",null);f.__decorate([h.property()],e.prototype,"effectiveMinScale",null);f.__decorate([h.property()],e.prototype,"effectiveMaxScaleLimit",null);f.__decorate([h.property()],e.prototype,"effectiveMinScaleLimit",null);
f.__decorate([h.property()],e.prototype,"label",null);f.__decorate([h.property()],e.prototype,"layer",null);f.__decorate([h.property()],e.prototype,"maxScale",null);f.__decorate([h.property()],e.prototype,"maxScaleLimit",null);f.__decorate([h.property(),J.messageBundle("esri/widgets/ScaleRangeSlider/t9n/ScaleRangeSlider")],e.prototype,"messages",void 0);f.__decorate([h.property()],e.prototype,"minScale",null);f.__decorate([h.property()],e.prototype,"minScaleLimit",null);f.__decorate([h.property()],
e.prototype,"region",void 0);f.__decorate([h.property()],e.prototype,"view",null);f.__decorate([h.property()],e.prototype,"viewModel",void 0);f.__decorate([h.property()],e.prototype,"visibleElements",void 0);f.__decorate([C.cast("visibleElements")],e.prototype,"castVisibleElements",null);return e=f.__decorate([D.subclass("esri.widgets.ScaleRangeSlider")],e)});