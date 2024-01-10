/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{p as e,H as t,c as i,h as a,a as s}from"./index.js";import{v as l}from"./dom.js";import{g as n}from"./guid.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.9.2
 */const c=e(class extends t{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteInternalTabRegister=i(this,"calciteInternalTabRegister",6),this.guid=`calcite-tab-title-${n()}`,this.tab=void 0,this.selected=!1,this.scale="m",this.labeledBy=void 0}render(){const e=this.el.id||this.guid;return a(s,{"aria-labelledby":this.labeledBy,id:e},a("div",{class:"container",role:"tabpanel",tabIndex:this.selected?0:-1},a("section",null,a("slot",null))))}connectedCallback(){this.parentTabsEl=this.el.closest("calcite-tabs")}componentDidLoad(){this.calciteInternalTabRegister.emit()}componentWillRender(){this.scale=this.parentTabsEl?.scale}disconnectedCallback(){document.body?.dispatchEvent(new CustomEvent("calciteTabUnregister",{detail:this.el}))}internalTabChangeHandler(e){e.composedPath().find((e=>"CALCITE-TABS"===e.tagName))===this.parentTabsEl&&(this.tab?this.selected=this.tab===e.detail.tab:this.getTabIndex().then((t=>{this.selected=t===e.detail.tab})),e.stopPropagation())}async getTabIndex(){return Array.prototype.indexOf.call(l(this.el.parentElement.children).filter((e=>e.matches("calcite-tab"))),this.el)}async updateAriaInfo(e=[],t=[]){this.labeledBy=t[e.indexOf(this.el.id)]||null}get el(){return this}static get style(){return":host([selected]) section,:host([selected]) .container{display:block}:host{display:none;block-size:100%;inline-size:100%}:host([selected]){display:block;block-size:100%;inline-size:100%;overflow:auto}section,.container{display:none;block-size:100%;inline-size:100%}:host([scale=s]){padding-block:0.25rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=m]){padding-block:0.5rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=l]){font-size:var(--calcite-font-size-0);line-height:1.25rem;padding-block:13px}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-tab",{tab:[513],selected:[1540],scale:[1537],labeledBy:[32],getTabIndex:[64],updateAriaInfo:[64]},[[16,"calciteInternalTabChange","internalTabChangeHandler"]]]);function o(){"undefined"!=typeof customElements&&["calcite-tab"].forEach((e=>{"calcite-tab"===e&&(customElements.get(e)||customElements.define(e,c))}))}o();export{c as T,o as d};
