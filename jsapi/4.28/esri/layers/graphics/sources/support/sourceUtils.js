// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../core/date","../../../../geometry/support/spatialReferenceUtils","../../../support/fieldUtils"],function(t,e,q,r,g){function n(a){return new u(a)}async function v(){null==k&&(k=await new Promise((a,b)=>t(["../../../../geometry/geometryEngineJSON"],a,b)));return k}class w{constructor(){this.description=this.code=null}}class u{constructor(a){this.error=new w;this.objectId=this.globalId=null;this.success=!1;this.uniqueId=null;this.error.description=a}}class x{constructor(a){this.globalId=
null;this.success=!0;this.objectId=this.uniqueId=a}}const p=new Set;let k;e.createFeatureEditErrorResult=n;e.createFeatureEditSuccessResult=function(a){return new x(a)};e.loadGeometryEngineForSimplify=async function(a,b){!r.isValid(a)||"esriGeometryPolygon"!==b&&"esriGeometryPolyline"!==b||await v()};e.mixAttributes=function(a,b,h,y=!1){p.clear();for(const l in h){const d=a.get(l);if(!d)continue;var f=d,c=h[l];let m=c;g.isNumericField(f)&&"string"===typeof c?m=parseFloat(c):g.isStringField(f)&&null!=
c&&"string"!==typeof c?m=String(c):g.isDateField(f)&&"string"===typeof c&&(m=q.parseDate(c));f=g.sanitizeNullFieldValue(m);p.add(d.name);if(d&&(y||d.editable)){if(c=g.validateFieldValue(d,f))return n(g.validationErrorToString(c,d,f));b[d.name]=f}}for(const l of a?.requiredFields??[])if(!p.has(l.name))return n(`missing required field "${l.name}"`);return null};e.parseStringDateFieldValues=function(a,b){if(a?.length)for(const {name:h}of a)"string"===typeof b[h]&&(b[h]=q.parseDate(b[h]))};e.simplify=
function(a,b){if(!a||!r.isValid(b))return a;if("rings"in a||"paths"in a){if(null==k)throw new TypeError("geometry engine not loaded");return k.simplify(b,a)}return a};Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});