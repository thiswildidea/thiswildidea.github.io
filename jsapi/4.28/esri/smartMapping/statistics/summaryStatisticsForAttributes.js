// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define(["../../core/Error","./support/utils","../support/binningUtils","../support/utils","../support/adapters/support/layerUtils"],function(g,l,m,n,c){async function p(a){if(!(a&&a.layer&&a.attributes))throw new g("summary-statistics-for-attributes:missing-parameters","'layer' and 'attributes' parameters are required");if(a.attributes.some(h=>!!h.valueExpression)&&!a.view)throw new g("summary-statistics-for-attributes:missing-parameters","View is required when 'valueExpression' is specified in attributes");
a.forBinning&&m.verifyBinningParams(a,"summary-statistics-for-attributes");const {layer:k,...d}=a;var b=[c.LayerType.CSVLayer,c.LayerType.FeatureLayer,c.LayerType.OGCFeatureLayer,c.LayerType.GeoJSONLayer,c.LayerType.WFSLayer];b=a.forBinning?c.binningCapableLayerTypes:b;a=c.createLayerAdapter(k,b,a.forBinning);if(!a)throw new g("summary-statistics-for-attributes:invalid-parameters","'layer' must be one of these types: "+c.getLayerTypeLabels(b).join(", "));b={layerAdapter:a,...d};b.includeZeros=null==
b.includeZeros||b.includeZeros;b.includeNegatives=null==b.includeNegatives||b.includeNegatives;var e=null!=b.signal?{signal:b.signal}:null;await Promise.all([b.view?.when(),a.load(e)]);e=[];for(var f of b.attributes){const h=await n.getFieldsList({field:f.field,valueExpression:f.valueExpression});Array.prototype.push.apply(e,h)}if(f=l.verifyBasicFieldValidity(a,e,"summary-statistics-for-attributes:invalid-parameters"))throw f;return b}return async function(a){const {layerAdapter:k,...d}=await p(a);
a=l.getSumOfAttributesExpr(d.attributes,d.includeZeros,d.includeNegatives);return k.summaryStatistics({valueExpression:a.valueExpression,sqlExpression:a.sqlExpression,sqlWhere:a.sqlWhere,view:d.view,signal:d.signal})}});