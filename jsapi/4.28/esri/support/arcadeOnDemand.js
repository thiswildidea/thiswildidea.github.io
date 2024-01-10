// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("require exports ../geometry ../core/Error ../core/Logger ../geometry/SpatialReference".split(" "),function(y,k,q,z,A,B){function v(){r||(r=(async()=>{const a=await new Promise((b,e)=>y(["./arcadeUtils"],b,e));return{arcade:a.arcade,arcadeUtils:a,Dictionary:a.Dictionary,Feature:a.arcadeFeature}})());return r}const C=A.getLogger("esri.support.arcadeOnDemand");let r;q=(a,b,e)=>m.create(a,b,e,null,["$feature","$view"],[]);class m{constructor(a,b,e,g,h,f,d){this.services=null;this.script=a;this.evaluate=
g;this.fields=Array.isArray(f)?f:f.fields;this._syntaxTree=e;this._arcade=b;this._arcadeFeature=h;this._spatialReference=d;this._referencesGeometry=b.scriptTouchesGeometry(this._syntaxTree);this._referencesScale=this._arcade.referencesMember(this._syntaxTree,"scale")}static async create(a,b,e,g,h,f){const {arcade:d,Feature:D,Dictionary:w}=await v(),t=B.fromJSON(b);let l;try{l=d.parseScript(a,f)}catch(c){return C.error(new z("arcade-bad-expression","Failed to parse arcade script",{script:a,error:c})),
null}h=h.reduce((c,u)=>({...c,[u]:null}),{});let n=null;null!=g&&(n=new w(g),n.immutable=!0,h.$config=null);f=(g=d.scriptUsesGeometryEngine(l))&&d.enableGeometrySupport();const E=d.scriptUsesFeatureSet(l)&&d.enableFeatureSetSupport(),x=(b=d.scriptIsAsync(l))&&d.enableAsyncSupport();h={vars:h,spatialReference:t,useAsync:!!x};await Promise.all([f,E,x]);f=new Set;await d.loadDependentModules(f,l,null,b,g);const p=new w;p.immutable=!1;p.setField("scale",0);const F=d.compileScript(l,h);return new m(a,
d,l,(c,u)=>{const G=c.$view?.timeZone;"$view"in c&&c.$view&&(p.setField("scale","object"===typeof c.$view&&"scale"in c.$view?c.$view.scale:void 0),c.$view=p);n&&(c.$config=n);return F({vars:c,spatialReference:t,services:u,timeZone:G})},new D,e,t)}repurposeFeature(a){a.geometry&&!a.geometry.spatialReference&&(a.geometry.spatialReference=this._spatialReference);this._arcadeFeature.repurposeFromGraphicLikeObject(a.geometry,a.attributes,{fields:this.fields});return this._arcadeFeature}referencesGeometry(){return this._referencesGeometry}referencesScale(){return this._referencesScale}}
k.ArcadeExpression=m;k.createDictionaryExpression=(a,b,e,g)=>m.create(a,b,e,g,["$feature","$view"],[]);k.createLabelExpression=(a,b,e)=>m.create(a,b,e,null,["$feature","$view"],[]);k.createRendererExpression=q;k.createVVExpression=q;k.loadArcade=v;Object.defineProperty(k,Symbol.toStringTag,{value:"Module"})});