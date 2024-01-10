// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/dom ../../assets ../../core/has ../../core/urlUtils ../../chunks/index".split(" "),function(f,h,m,p,n,k){function l(){const {classList:b}=document.body,c=window.matchMedia("(prefers-color-scheme: dark)").matches,d=()=>b.contains(h.darkMode)||b.contains(h.autoMode)&&c?"dark":"light",g=a=>document.body.dispatchEvent(new CustomEvent("calciteModeChange",{bubbles:!0,detail:{mode:a}}));let e=d();g(e);window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",
a=>{a=a.matches?"dark":"light";e!==a&&g(a);e=a});(new MutationObserver(()=>{var a=d();e!==a&&g(a);e=a})).observe(document.body,{attributes:!0,attributeFilter:["class"]})}(function(){"undefined"!==typeof window&&"undefined"!==typeof location&&"undefined"!==typeof document&&window.location===location&&window.document===document&&("interactive"===document.readyState?l():document.addEventListener("DOMContentLoaded",()=>l(),{once:!0}))})();f.commitAssetPath=function(){try{k.getAssetPath(".")}catch{k.setAssetPath(n.makeAbsolute(m.getAssetUrl("esri/widgets/support/components/assets")))}};
f.loadCalciteComponents=function(b){const c=[];for(const d of Object.keys(b))customElements.get(`calcite-${d}`)||c.push(b[d]?.());return 0<c.length?Promise.all(c):null};Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})});