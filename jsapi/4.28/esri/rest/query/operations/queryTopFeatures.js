// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("exports ../../../request ../../../core/urlUtils ../../../geometry/support/jsonUtils ../../../geometry/support/normalizeUtils ../../../geometry/support/spatialReferenceUtils ../../operations/urlUtils ./queryZScale".split(" "),function(f,p,k,q,r,l,t,u){function m(a,b){const c=a.geometry;a=a.toJSON();null!=c&&(a.geometry=JSON.stringify(c),a.geometryType=q.getJsonType(c),a.inSR=l.srToRESTValue(c.spatialReference));a.topFilter?.groupByFields&&(a.topFilter.groupByFields=a.topFilter.groupByFields.join(","));
a.topFilter?.orderByFields&&(a.topFilter.orderByFields=a.topFilter.orderByFields.join(","));a.topFilter&&(a.topFilter=JSON.stringify(a.topFilter));a.objectIds&&(a.objectIds=a.objectIds.join(","));a.orderByFields&&(a.orderByFields=a.orderByFields.join(","));!a.outFields||b?.returnCountOnly||b?.returnExtentOnly||b?.returnIdsOnly?delete a.outFields:a.outFields.includes("*")?a.outFields="*":a.outFields=a.outFields.join(",");a.outSR?a.outSR=l.srToRESTValue(a.outSR):c&&a.returnGeometry&&(a.outSR=a.inSR);
a.returnGeometry&&delete a.returnGeometry;if(a.timeExtent){const {start:d,end:e}=a.timeExtent;if(null!=d||null!=e)a.time=d===e?d:`${null==d?"null":d},${null==e?"null":e}`;delete a.timeExtent}return a}function h(a,b,c,d={},e={}){const n="string"===typeof a?k.urlToObject(a):a;a=b.geometry?[b.geometry]:[];d.responseType="pbf"===c?"array-buffer":"json";return r.normalizeCentralMeridian(a,null,d).then(g=>{g=g?.[0];null!=g&&(b=b.clone(),b.geometry=g);g=t.mapParameters({...n.query,f:c,...e,...m(b,e)});return p(k.join(n.path,
"queryTopFeatures"),{...d,query:{...g,...d.query}})})}f.executeQueryForTopCount=function(a,b,c){return null!=b.timeExtent&&b.timeExtent.isEmpty?Promise.resolve({data:{count:0}}):h(a,b,"json",c,{returnIdsOnly:!0,returnCountOnly:!0})};f.executeQueryForTopExtents=async function(a,b,c){return null!=b.timeExtent&&b.timeExtent.isEmpty?{data:{count:0,extent:null}}:h(a,b,"json",c,{returnExtentOnly:!0,returnCountOnly:!0}).then(d=>{const e=d.data;if(e.hasOwnProperty("extent"))return d;if(e.features)throw Error("Layer does not support extent calculation.");
if(e.hasOwnProperty("count"))throw Error("Layer does not support extent calculation.");return d})};f.executeQueryForTopIds=async function(a,b,c){return null!=b.timeExtent&&b.timeExtent.isEmpty?{data:{objectIds:[]}}:h(a,b,"json",c,{returnIdsOnly:!0})};f.executeTopFeaturesQuery=async function(a,b,c,d){a=await h(a,b,"json",d);u.applyFeatureSetZUnitScaling(b,c,a.data);return a};f.queryToQueryStringParameters=m;Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})});