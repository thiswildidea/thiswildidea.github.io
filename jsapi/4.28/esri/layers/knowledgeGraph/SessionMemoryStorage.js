// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define(["../../geometry","../graphics/featureConversionUtils","../graphics/OptimizedFeature","../../geometry/support/jsonUtils"],function(p,m,h,n){class e{constructor(){this._featureLookup=new Map}static getInstance(){e.instance||(e.instance=new e);return e.instance}static resetInstance(){e.instance&&(e.instance=null)}deleteFromStore(f){f.forEach(d=>{this._featureLookup.delete(d)})}readFromStoreByList(f){const d=[];f.forEach(b=>{(b=this.readFromStoreById(b))&&d.push(b)});return d}readFromStoreById(f){return this._featureLookup.get(f)??
null}writeToStore(f,d,b){const k=[];f.forEach(a=>{if(a?.id){a.properties||(a.properties=[]);var c=null;b&&a.properties[b]&&(c=m.convertFromGeometry(a.properties[b]));"originId"in a&&"destinationId"in a&&(a.properties.ESRI__ORIGIN_ID=a.originId,a.properties.ESRI__DESTINATION_ID=a.destinationId);if((a.properties[d]=a.id)&&this._featureLookup.has(a.id)&&this._featureLookup.get(a.id).attributes){const g=this._featureLookup.get(a.id),l=JSON.parse(JSON.stringify(Object.assign(g.attributes,a.properties)));
b&&a.properties[b]&&(l[b]=n.fromJSON(a.properties[b]));c=new h.OptimizedFeature(c?JSON.parse(JSON.stringify(c)):g?.geometry?JSON.parse(JSON.stringify(g.geometry)):null,l,null,a.properties[d])}else c=new h.OptimizedFeature(c?JSON.parse(JSON.stringify(c)):null,a.properties,null,a.properties[d]);this._featureLookup.set(a.id,c);k.push(c)}});return k}}return e});