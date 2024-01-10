// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define(["exports","./index"],function(k,e){function l(){"undefined"!==typeof customElements&&["calcite-tabs"].forEach(a=>{switch(a){case "calcite-tabs":customElements.get(a)||customElements.define(a,m)}})}const m=e.proxyCustomElement(class extends e.H{constructor(){super();this.__registerHost();this.__attachShadow();this.layout="inline";this.position="top";this.scale="m";this.bordered=!1;this.titles=[];this.tabs=[]}render(){return e.h(e.Fragment,null,e.h("slot",{name:"title-group"}),e.h("section",
null,e.h("slot",null)))}calciteInternalTabTitleRegister(a){this.titles=[...this.titles,a.target];this.registryHandler();a.stopPropagation()}calciteTabTitleUnregister(a){this.titles=this.titles.filter(d=>d!==a.detail);this.registryHandler();a.stopPropagation()}calciteInternalTabRegister(a){this.tabs=[...this.tabs,a.target];this.registryHandler();a.stopPropagation()}calciteTabUnregister(a){this.tabs=this.tabs.filter(d=>d!==a.detail);this.registryHandler();a.stopPropagation()}async registryHandler(){let a,
d;if(this.tabs.some(b=>b.tab)||this.titles.some(b=>b.tab))a=this.tabs.sort((b,f)=>b.tab.localeCompare(f.tab)).map(b=>b.id),d=this.titles.sort((b,f)=>b.tab.localeCompare(f.tab)).map(b=>b.id);else{const b=await Promise.all(this.tabs.map(c=>c.getTabIndex())),f=await Promise.all(this.titles.map(c=>c.getTabIndex()));a=b.reduce((c,g,h)=>{c[g]=this.tabs[h].id;return c},[]);d=f.reduce((c,g,h)=>{c[g]=this.titles[h].id;return c},[])}this.tabs.forEach(b=>b.updateAriaInfo(a,d));this.titles.forEach(b=>b.updateAriaInfo(a,
d))}get el(){return this}static get style(){return":host{display:flex;flex-direction:column}:host([bordered]){box-shadow:inset 0 1px 0 var(--calcite-ui-border-1);background-color:var(--calcite-ui-foreground-1)}:host([bordered]:not([position\x3dbottom])) ::slotted(calcite-tab-nav){margin-block-end:-1px}:host([bordered][position\x3dbottom]){box-shadow:inset 0 1px 0 var(--calcite-ui-border-1), inset 0 -1px 0 var(--calcite-ui-border-1)}:host([bordered]) section{border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-1)}:host([bordered][scale\x3ds]) section{padding:0.75rem}:host([bordered][scale\x3dm]) section{padding:0.5rem}:host([bordered][scale\x3dl]) section{padding:1rem}:host([position\x3dbottom]){flex-direction:column-reverse}section{display:flex;flex-grow:1;overflow:hidden;border-block-start-width:1px;border-block-start-color:var(--calcite-ui-border-1);border-block-start-style:solid}:host([position\x3dbottom]) section{flex-direction:column-reverse;border-block-start-width:0px;border-block-end-width:1px;border-block-end-color:var(--calcite-ui-border-1)}:host([position\x3dbottom]:not([bordered])) section{border-block-end-style:solid}@media (forced-colors: active){:host([bordered]) section{border-block-start-width:0px;border-block-end-width:1px}:host([position\x3dbottom][bordered]) section{border-block-start-width:1px;border-block-end-width:0px}}:host([hidden]){display:none}[hidden]{display:none}"}},
[1,"calcite-tabs",{layout:[513],position:[513],scale:[513],bordered:[4],titles:[32],tabs:[32]},[[0,"calciteInternalTabTitleRegister","calciteInternalTabTitleRegister"],[16,"calciteTabTitleUnregister","calciteTabTitleUnregister"],[0,"calciteInternalTabRegister","calciteInternalTabRegister"],[16,"calciteTabUnregister","calciteTabUnregister"]]]);l();k.Tabs=m;k.defineCustomElement=l});