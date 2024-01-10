/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import"./typedArrayUtil.js";import e from"../core/Error.js";import t from"../geometry/HeightModelInfo.js";import{p as n}from"./arcgisLayerUrl.js";function i(n,i){if(!n)return null;if(!a(n))return new e("webscene:unsupported-height-model-info","The vertical coordinate system of the scene is not supported",{heightModelInfo:n});const r=n.heightUnit,o=t.deriveUnitFromSR(n,i).heightUnit;return r!==o?new e("webscene:incompatible-height-unit",`The vertical units of the scene (${r}) must match the horizontal units of the scene (${o})`,{verticalUnit:r,horizontalUnit:o}):null}function r(n,i,r){const c=s(n),l=i,u=function(e,t,n){if(!a(e)||!a(t))return o.Unsupported;if(null==e||null==t)return o.Ok;if(!n&&e.heightUnit!==t.heightUnit)return o.Units;if(e.heightModel!==t.heightModel)return o.HeightModel;switch(e.heightModel){case"gravity-related-height":return o.Ok;case"ellipsoidal":return e.vertCRS===t.vertCRS?o.Ok:o.CRS;default:return o.Unsupported}}(c,l,r);if(c){const i=t.deriveUnitFromSR(c,n.spatialReference).heightUnit;if(!r&&i!==c.heightUnit){const t=new e("layerview:unmatched-height-unit",`The vertical units of the layer must match the horizontal units (${i})`,{horizontalUnit:i});return new e("layerview:unsupported-height-model-info","The vertical coordinate system of the layer is not supported",{heightModelInfo:c,error:t})}}if(!function(e){return"heightModelInfo"in e&&null!=e.heightModelInfo||null!=e.spatialReference||!h(e)}(n)||u===o.Unsupported)return new e("layerview:unsupported-height-model-info","The vertical coordinate system of the layer is not supported",{heightModelInfo:c});switch(u){case o.Units:{const t=c?.heightUnit||"unknown",n=l?.heightUnit||"unknown",i=new e("layerview:incompatible-height-unit",`The vertical units of the layer (${t}) must match the vertical units of the scene (${n})`,{layerUnit:t,sceneUnit:n});return new e("layerview:incompatible-height-model-info","The vertical coordinate system of the layer is incompatible with the scene",{layerHeightModelInfo:c,sceneHeightModelInfo:l,error:i})}case o.HeightModel:{const t=c?.heightModel||"unknown",n=l?.heightModel||"unknown",i=new e("layerview:incompatible-height-model",`The height model of the layer (${t}) must match the height model of the scene (${n})`,{layerHeightModel:t,sceneHeightModel:n});return new e("layerview:incompatible-height-model-info","The vertical coordinate system of the layer is incompatible with the scene",{layerHeightModelInfo:c,sceneHeightModelInfo:l,error:i})}case o.CRS:{const t=c?.vertCRS||"unknown",n=l?.vertCRS||"unknown",i=new e("layerview:incompatible-vertical-datum",`The vertical datum of the layer (${t}) must match the vertical datum of the scene (${n})`,{layerDatum:t,sceneDatum:n});return new e("layerview:incompatible-height-model-info","The vertical coordinate system of the layer is incompatible with the scene",{layerHeightModelInfo:c,sceneHeightModelInfo:l,error:i})}}return null}var o;function a(e){return null==e||null!=e.heightModel&&null!=e.heightUnit}function s(e){const i=e.url?n(e.url):void 0,r=e.spatialReference?.vcsWkid;return(null!=r||null==i||"ImageServer"!==i.serverType)&&c(e)&&e.heightModelInfo?e.heightModelInfo:h(e)?t.deriveUnitFromSR(g,e.spatialReference):null}function c(e){return"heightModelInfo"in e}function l(e){if("unknown"===e.type||!("capabilities"in e))return!1;switch(e.type){case"csv":case"feature":case"geojson":case"subtype-group":case"ogc-feature":case"oriented-imagery":case"wfs":case"knowledge-graph-sublayer":return!0;default:return!1}}function h(e){return l(e)?!!(e.capabilities&&e.capabilities.data&&e.capabilities.data.supportsZ):d(e)}function u(e){return null!=e.layers||d(e)||l(e)||c(e)}function d(e){switch(e.type){case"building-scene":case"elevation":case"integrated-mesh":case"point-cloud":case"scene":case"voxel":return!0;case"base-dynamic":case"base-elevation":case"base-tile":case"bing-maps":case"csv":case"dimension":case"geojson":case"feature":case"subtype-group":case"geo-rss":case"graphics":case"group":case"imagery":case"imagery-tile":case"kml":case"knowledge-graph":case"link-chart":case"knowledge-graph-sublayer":case"line-of-sight":case"map-image":case"map-notes":case"media":case"ogc-feature":case"open-street-map":case"oriented-imagery":case"route":case"stream":case"tile":case"unknown":case"unsupported":case"vector-tile":case"video":case"wcs":case"web-tile":case"wfs":case"wms":case"wmts":case null:return!1}return!1}!function(e){e[e.Ok=0]="Ok",e[e.Units=1]="Units",e[e.HeightModel=2]="HeightModel",e[e.CRS=3]="CRS",e[e.Unsupported=4]="Unsupported"}(o||(o={}));const g=new t({heightModel:"gravity-related-height"});export{s as d,r,u as s,i as v};
