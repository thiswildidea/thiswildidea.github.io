// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("require ../chunks/tslib.es6 ../core/promiseUtils ../core/accessorSupport/decorators/property ../core/accessorSupport/ensureType ../core/arrayUtils ../core/has ../core/accessorSupport/decorators/subclass ./Widget ./LineOfSight/LineOfSightViewModel ./support/componentsUtils ./support/globalCss ./support/legacyIcon ./support/widgetUtils ./support/decorators/messageBundle ./support/jsxFactory".split(" "),function(l,c,m,e,b,y,z,n,p,h,q,k,r,A,t,f){var u=r.legacyIcon.lineOfSight;const g={newAnalysisButton:"esri-line-of-sight__new-button",
continueButton:"esri-line-of-sight__continue-button",doneButton:"esri-line-of-sight__done-button"};b=class extends p{constructor(a,d){super(a,d);this.iconClass=u;this.messages=this.icon=null;this.viewModel=new h;this._onNewAnalysis=()=>{m.ignoreAbortErrors(this.viewModel.start())};this._onDone=()=>{this.viewModel.stop()};this._onContinue=()=>{this.viewModel.continue()}}loadDependencies(){return q.loadCalciteComponents({button:()=>new Promise((a,d)=>l(["../chunks/calcite-button"],a,d))})}get active(){return this.viewModel.active}get analysis(){return this.viewModel.analysis}set analysis(a){this.viewModel.analysis=
a}get label(){return this.messages?.widgetLabel??""}set label(a){this._overrideIfSome("label",a)}get view(){return this.viewModel.view}set view(a){this.viewModel.view=a}get visible(){return this.viewModel.visible}set visible(a){this.viewModel.visible=a}render(){return f.tsx("div",{class:this.classes("esri-line-of-sight",k.globalCss.widget,k.globalCss.panel),role:"presentation"},this._renderContainerNode())}_renderContainerNode(){if(!this.visible)return null;if(!this.viewModel.supported)return this._renderUnsupportedMessage();
let a=null;const d=[this._renderNewAnalysisButton()];"creating"===this.viewModel.state?(a=this._renderHint(),d.unshift(this._renderDoneButton())):"created"===this.viewModel.state&&0<this.viewModel.targets.length&&d.unshift(this._renderContinueButton());return f.tsx("div",{class:"esri-line-of-sight__container"},a,f.tsx("div",{class:"esri-line-of-sight__actions"},d))}_renderUnsupportedMessage(){return f.tsx("div",{class:"esri-line-of-sight__error",key:"esri-line-of-sight__unsupported"},f.tsx("p",null,
this.messages.unsupported))}_renderHint(){return f.tsx("div",{class:"esri-line-of-sight__hint",key:"esri-line-of-sight__hint"},f.tsx("p",{class:"esri-line-of-sight__hint-text"},this.messages.hint))}_renderNewAnalysisButton(){return this._renderButton({className:"esri-line-of-sight__new-analysis-button",id:g.newAnalysisButton,label:this.messages.newAnalysis,onClick:this._onNewAnalysis,primary:!0})}_renderDoneButton(){return this._renderButton({id:g.doneButton,label:this.messages.done,onClick:this._onDone,
primary:!1})}_renderContinueButton(){return this._renderButton({id:g.newAnalysisButton,label:this.messages.continueAnalysis,onClick:this._onContinue,primary:!1})}_renderButton({className:a,id:d,label:v,onClick:w,primary:x}){return f.tsx("calcite-button",{appearance:x?"solid":"outline-fill",class:a,"data-id":d,disabled:"disabled"===this.viewModel.state,key:d,onclick:w},v)}get test(){return{IDS:g}}};c.__decorate([e.property()],b.prototype,"active",null);c.__decorate([e.property({constructOnly:!0,nonNullable:!0})],
b.prototype,"analysis",null);c.__decorate([e.property()],b.prototype,"iconClass",void 0);c.__decorate([e.property()],b.prototype,"icon",void 0);c.__decorate([e.property()],b.prototype,"label",null);c.__decorate([e.property(),t.messageBundle("esri/widgets/LineOfSight/t9n/LineOfSight")],b.prototype,"messages",void 0);c.__decorate([e.property()],b.prototype,"view",null);c.__decorate([e.property({type:h})],b.prototype,"viewModel",void 0);c.__decorate([e.property()],b.prototype,"visible",null);return b=
c.__decorate([n.subclass("esri.widgets.LineOfSight")],b)});