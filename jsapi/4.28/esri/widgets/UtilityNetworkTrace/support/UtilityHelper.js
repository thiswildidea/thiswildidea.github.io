// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define(["exports","../../../layers/support/layerUtils"],function(f,g){function h(e,b){return(e.dataElement?.domainNetworks||[]).some(d=>d.subnetworkLayerId===b.layerId)}class k{getValidUtilityNetworkLayers(e,b){const d=[];e?.allLayers.forEach(a=>{"group"===a.type?d.push(...a.layers.filter(g.isFeatureLayer).filter(c=>"feature"===c.type&&b.isUtilityLayer(c)&&!h(b,c)).filter(c=>c.url.includes(b.featureServiceUrl)).toArray()):"subtype-group"===a.type?d.push(...a.sublayers.filter(c=>c.url.includes(b.featureServiceUrl)).toArray()):
g.isFeatureLayer(a)&&"feature"===a.type&&b.isUtilityLayer(a)&&!h(b,a)&&a.url.includes(b.featureServiceUrl)&&d.push(a)});return d}}f.UtilityHelper=k;Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})});