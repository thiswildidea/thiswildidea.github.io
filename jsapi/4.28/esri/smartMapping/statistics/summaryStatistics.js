// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("../../core/Error ../../layers/support/fieldUtils ./support/utils ../support/binningUtils ../support/utils ../support/adapters/support/layerUtils".split(" "),function(d,m,g,p,e,f){async function q(a){if(!a?.layer||!(a.field||a.valueExpression||a.sqlExpression))throw new d("summary-statistics:missing-parameters","'layer' and 'field', 'valueExpression' or 'sqlExpression' parameters are required");if(a.valueExpression&&!a.sqlExpression&&!a.view)throw new d("summary-statistics:missing-parameters",
"View is required when 'valueExpression' is specified");a.forBinning&&p.verifyBinningParams(a,"summary-statistics");const {layer:h,...k}=a;var b=a.forBinning?f.binningCapableLayerTypes:f.defaultSupportedLayerTypes;a=f.createLayerAdapter(h,b,a.forBinning);if(!a)throw new d("summary-statistics:invalid-parameters","'layer' must be one of these types: "+f.getLayerTypeLabels(b).join(", "));b={layerAdapter:a,...k};b.normalizationType=e.getNormalizationType(b);await a.load(null!=b.signal?{signal:b.signal}:
null);var c=b.field;const n=b.normalizationType,r=b.valueExpression||b.sqlExpression;c=c?a.getField(c):null;var l=await e.getFieldsList({field:b.field,normalizationField:b.normalizationField,valueExpression:b.valueExpression});if(l=g.verifyBasicFieldValidity(a,l,"summary-statistics:invalid-parameters"))throw l;if(c){if(a=g.verifyFieldType(a,c,"summary-statistics:invalid-parameters",t))throw a;if((e.isAnyDateField(c)||m.isTimeOnlyField(c))&&n)throw new d("summary-statistics:invalid-parameters","Normalization is not allowed for date fields");
}else if(r&&n)throw new d("summary-statistics:invalid-parameters","Normalization is not allowed when 'valueExpression' or 'sqlExpression' is specified");if(a=g.verifyFilterValidty(b.filter,"summary-statistics:invalid-parameters"))throw a;return b}const t=[...m.numericTypes,...e.dateTypes,"time-only","string"];return async function(a){const {layerAdapter:h,...k}=await q(a);return h.summaryStatistics(k)}});