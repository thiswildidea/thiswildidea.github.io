// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("exports ../../../core/Collection ../../../geometry/support/spatialReferenceUtils ../../../layers/support/layerUtils ../../ViewingMode ../support/StreamDataLoader ./ITile ../../../chunks/terrainUtilsPlanar ../../../chunks/terrainUtilsSpherical".split(" "),function(b,B,u,C,k,D,c,l,m){function n(a){return"imagery-tile"===a?.type||"wcs"===a?.type}function h(a){return"imagery-tile-3d"===a?.type}function p(a){return"tile-3d"===a?.type}function q(a){return"vector-tile-3d"===a?.type}function r(a){return"wmts-3d"===
a?.type}function v(a){return"elevation-3d"===a?.type}function w(a){return a&&(p(a)||h(a)||q(a)||r(a))}function x(a){return null!=a?.data&&"type"in a.data&&"vector-tile"===a.data.type}function t(a,d,f,e){return E[e].checkIfTileInfoSupportedForViewSR(a,f,d)}function y(a,d,f){a=C.getTileMaxtrixSetFromActiveLayer(a);if(null!=a)if(B.isCollection(a)){if(a=a.find(e=>null==t(e.tileInfo,e.fullExtent,d,f)))return{tileInfo:a.tileInfo,fullExtent:a.fullExtent}}else return{tileInfo:a.tileInfo,fullExtent:a.fullExtent};
return{tileInfo:null,fullExtent:null}}function z(a){return a.isWGS84||a.isWebMercator||u.isCGCS2000(a)||!u.isEarth(a)}const E={[k.ViewingMode.Global]:m.terrainUtilsSpherical,[k.ViewingMode.Local]:l.terrainUtilsPlanar};b.enableTerrainInternalChecks=!1;b.enableWaterproofnessTests=!1;const A={force512VTL:!1};l=[c.NeighborIndex.NORTH,c.NeighborIndex.EAST,c.NeighborIndex.SOUTH,c.NeighborIndex.WEST];m=[c.NeighborIndex.NORTH_EAST,c.NeighborIndex.SOUTH_EAST,c.NeighborIndex.SOUTH_WEST,c.NeighborIndex.NORTH_WEST];
b.almostEquals=function(a,d,f=1E-5){return Math.abs(a-d)<f};b.checkIfTileInfoSupportedForView=t;b.enableInternalTerrainChecks=function(a){b.enableTerrainInternalChecks=a};b.enableTerrainWaterproofnessChecks=function(a){b.enableWaterproofnessTests=a;b.enableTerrainInternalChecks=b.enableTerrainInternalChecks||a};b.eps=1E-5;b.getLayerWithExtentRange=function(a){return h(a)?{fullExtent:a.fullExtent,minScale:a.layer.minScale,maxScale:a.layer.maxScale,tilemapCache:null}:a.layer};b.getTileInfoAndExtentFromWMTSLayer=
y;b.getTiledLayerInfo=function(a,d,f){var e=null;let g=null;if("wmts"===a?.type)a=y(a,d,f),e=a.tileInfo,g=a.fullExtent;else if(g=n(a)?a.getCompatibleFullExtent(d):a.fullExtent,e=f===k.ViewingMode.Local,n(a))e=a.getCompatibleTileInfo(d,g,e);else if("vector-tile"===a?.type){e=e&&!z(d)||A.force512VTL;const F=a.tileInfo.spatialReference.isGeographic;e=e?a.tileInfo:a.tileInfo.getOrCreateCompatible(256,F?1:2)}else e=a.tileInfo;return null!=e&&null!=g&&null==t(e,g,d,f)?{tileInfo:e,fullExtent:g}:null};b.internalAssert=
function(a,d){if(b.enableTerrainInternalChecks&&!a)throw a=Error().stack?.slice(5),console.warn("Terrain internal: "+(d??"")+" at "+a),Error("Assertion failed"+(d?": "+d:""));};b.isBlendableLayerView=function(a){return a&&(p(a)||r(a)||h(a)||q(a))};b.isEast=function(a){return a===c.NeighborIndex.NORTH_EAST||a===c.NeighborIndex.EAST||a===c.NeighborIndex.SOUTH_EAST};b.isElevationLayerView=v;b.isGroupLayerView=function(a){return"group"===a?.type};b.isImageryTileLayerView=h;b.isImageryTileRenderInfo=function(a){a=
a?.sourceLayerInfo?.data;return null!=a&&"type"in a&&"raster-tile"===a.type};b.isMapTileLayerView=w;b.isNorth=function(a){return a===c.NeighborIndex.NORTH_EAST||a===c.NeighborIndex.NORTH||a===c.NeighborIndex.NORTH_WEST};b.isNorthCorner=function(a){return a===c.NeighborIndex.NORTH_WEST||a===c.NeighborIndex.NORTH_EAST};b.isProjectableRasterLayer=n;b.isRasterTileRenderInfo=function(a){a=a?.sourceLayerInfo?.data;return a instanceof HTMLImageElement||a instanceof D.ImageWithType||a instanceof HTMLCanvasElement||
a instanceof ImageData};b.isSouth=function(a){return a===c.NeighborIndex.SOUTH_EAST||a===c.NeighborIndex.SOUTH||a===c.NeighborIndex.SOUTH_WEST};b.isSurfaceLayerView=function(a){return w(a)||v(a)};b.isTextureTileRenderInfo=function(a){a=a?.sourceLayerInfo?.data;return null!=a&&"type"in a&&"tile-texture"===a.type};b.isTileLayerView=p;b.isVectorTileLayerView=q;b.isVectorTilePerLayerInfo=x;b.isVectorTileRenderInfo=function(a){return x(a?.sourceLayerInfo)||!!a?.isVTLBackground};b.isWMTSLayerView=r;b.isWest=
function(a){return a===c.NeighborIndex.NORTH_WEST||a===c.NeighborIndex.WEST||a===c.NeighborIndex.SOUTH_WEST};b.isWestCorner=function(a){return a===c.NeighborIndex.NORTH_WEST||a===c.NeighborIndex.SOUTH_WEST};b.lij2s=function(a){return"["+a[0]+","+a[1]+","+a[2]+"]"};b.neighborCornerIndices=m;b.neighborEdgeIndices=l;b.oppositeCorner=function(a){return a===c.NeighborIndex.NORTH_EAST?c.NeighborIndex.SOUTH_WEST:a===c.NeighborIndex.NORTH_WEST?c.NeighborIndex.SOUTH_EAST:a===c.NeighborIndex.SOUTH_WEST?c.NeighborIndex.NORTH_EAST:
c.NeighborIndex.NORTH_WEST};b.oppositeEdge=function(a){return a===c.NeighborIndex.NORTH?c.NeighborIndex.SOUTH:a===c.NeighborIndex.EAST?c.NeighborIndex.WEST:a===c.NeighborIndex.SOUTH?c.NeighborIndex.NORTH:c.NeighborIndex.EAST};b.releaseTileData=function(a){null!=a&&"release"in a&&a.release();return null};b.test=A;b.useFetchTileForLayer=function(a){return a.fetchTile&&!1!==a.hasOverriddenFetchTile};b.v32s=function(a){return"("+a[0]+","+a[1]+","+a[2]+")"};b.vtlAssumes256PixelSizeAsDefault=z;b.weakAssert=
function(a,d){a||console.warn("Terrain: "+d)};Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});