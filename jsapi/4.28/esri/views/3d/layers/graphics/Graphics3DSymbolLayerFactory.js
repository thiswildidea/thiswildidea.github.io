// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("exports ../../../../core/Logger ./Graphics3DExtrudeSymbolLayer ./Graphics3DIconSymbolLayer ./Graphics3DLineSymbolLayer ./Graphics3DMeshFillSymbolLayer ./Graphics3DObjectSymbolLayer ./Graphics3DPathSymbolLayer ./Graphics3DPolygonFillSymbolLayer ./Graphics3DTextSymbolLayer ./Graphics3DWaterSymbolLayer".split(" "),function(c,f,g,h,k,l,m,n,p,q,r){const d={icon:h.Graphics3DIconSymbolLayer,object:m.Graphics3DObjectSymbolLayer,line:k.Graphics3DLineSymbolLayer,path:n.Graphics3DPathSymbolLayer,fill:p.Graphics3DPolygonFillSymbolLayer,
extrude:g.Graphics3DExtrudeSymbolLayer,text:q.Graphics3DTextSymbolLayer,water:r.Graphics3DWaterSymbolLayer},t={"mesh-3d":{fill:l.Graphics3DMeshFillSymbolLayer}};c.make=function(b,a,u,v){const e=t[b.type]?.[a.type]||d[a.type];return e?new e(b,a,u,v):(f.getLogger("esri.views.3d.layers.graphics.Graphics3DSymbolLayerFactory").error("GraphicsLayerFactory#make",`unknown symbol type ${a.type}`),null)};c.setSymbolClass=function(b,a){d[b]=a};Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});