// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define(["exports","./index","./observers","./loadable"],function(c,b,g,d){function e(){"undefined"!==typeof customElements&&["calcite-radio-button-group"].forEach(a=>{switch(a){case "calcite-radio-button-group":customElements.get(a)||customElements.define(a,f)}})}const f=b.proxyCustomElement(class extends b.H{constructor(){super();this.__registerHost();this.__attachShadow();this.calciteRadioButtonGroupChange=b.createEvent(this,"calciteRadioButtonGroupChange",6);this.mutationObserver=g.createObserver("mutation",
()=>this.passPropsToRadioButtons());this.passPropsToRadioButtons=()=>{this.radioButtons=Array.from(this.el.querySelectorAll("calcite-radio-button"));this.selectedItem=Array.from(this.radioButtons).find(a=>a.checked)||null;0<this.radioButtons.length&&this.radioButtons.forEach(a=>{a.disabled=this.disabled||a.disabled;a.hidden=this.hidden;a.name=this.name;a.required=this.required;a.scale=this.scale})};this.hidden=this.disabled=!1;this.layout="horizontal";this.name=void 0;this.required=!1;this.selectedItem=
null;this.scale="m";this.radioButtons=[]}onDisabledChange(){this.passPropsToRadioButtons()}onHiddenChange(){this.passPropsToRadioButtons()}onLayoutChange(){this.passPropsToRadioButtons()}onScaleChange(){this.passPropsToRadioButtons()}connectedCallback(){this.passPropsToRadioButtons();this.mutationObserver?.observe(this.el,{childList:!0,subtree:!0})}componentWillLoad(){d.setUpLoadableComponent(this)}componentDidLoad(){d.setComponentLoaded(this)}disconnectedCallback(){this.mutationObserver?.disconnect()}getFocusableRadioButton(){return this.radioButtons.find(a=>
!a.disabled)??null}async setFocus(){await d.componentFocusable(this);if(this.selectedItem&&!this.selectedItem.disabled)return this.selectedItem.setFocus();if(0<this.radioButtons.length)return this.getFocusableRadioButton()?.setFocus()}radioButtonChangeHandler(a){this.selectedItem=a.target;this.calciteRadioButtonGroupChange.emit()}render(){return b.h(b.Host,{role:"radiogroup"},b.h("slot",null))}get el(){return this}static get watchers(){return{disabled:["onDisabledChange"],hidden:["onHiddenChange"],
layout:["onLayoutChange"],scale:["onScaleChange"]}}static get style(){return":host{display:flex;max-inline-size:100vw}:host([layout\x3dhorizontal]){flex-direction:row;flex-wrap:wrap}:host([layout\x3dhorizontal][scale\x3ds]){gap:1rem}:host([layout\x3dhorizontal][scale\x3dm]){gap:1.25rem}:host([layout\x3dhorizontal][scale\x3dl]){gap:1.5rem}:host([layout\x3dvertical]){flex-direction:column}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-radio-button-group",{disabled:[516],hidden:[516],
layout:[513],name:[513],required:[516],selectedItem:[1040],scale:[513],radioButtons:[32],setFocus:[64]},[[0,"calciteRadioButtonChange","radioButtonChangeHandler"]]]);e();c.CalciteRadioButtonGroup=f;c.defineCustomElement=e;Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});