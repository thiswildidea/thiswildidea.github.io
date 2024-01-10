// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("../../../chunks/tslib.es6 ../../../PopupTemplate ../../../core/Collection ../../../core/reactiveUtils ../../../core/Logger ../../../core/accessorSupport/ensureType ../../../core/arrayUtils ../../../core/has ../../../core/Error ../../../core/accessorSupport/decorators/subclass ../../../renderers/SimpleRenderer ../../../renderers/support/jsonUtils ../../../rest/support/FeatureSet ./LayerView2D ./graphics/GraphicContainer ./graphics/GraphicsView2D ../../layers/LayerView".split(" "),function(l,
m,n,e,g,y,z,A,B,p,h,q,r,t,u,v,w){g=class extends t.LayerView2DMixin(w){constructor(){super(...arguments);this._graphicsViewMap={};this._popupTemplates=new Map;this.graphicsViews=[]}async hitTest(a,d){if(!this.graphicsViews.length)return null;const b=this.layer;return this.graphicsViews.reverse().flatMap(c=>{const k=this._popupTemplates.get(c);c=c.hitTest(a);for(const f of c)f.layer=b,f.sourceLayer=b,f.popupTemplate=k;return c}).map(c=>({type:"graphic",graphic:c,layer:b,mapPoint:a}))}update(a){if(this.graphicsViews)for(const d of this.graphicsViews)d.processUpdate(a)}attach(){this.addAttachHandles([e.watch(()=>
this.layer?.featureCollections,a=>{this._clear();for(const {popupInfo:c,featureSet:k,layerDefinition:f}of a){a=r.fromJSON(k);var d=new n(a.features),b=f.drawingInfo;const x=c?m.fromJSON(c):null;b=q.fromJSON(b.renderer);d=new v({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:d,renderer:b,container:new u(this.view.featuresTilingScheme)});this._graphicsViewMap[a.geometryType]=d;this._popupTemplates.set(d,x);"polygon"!==a.geometryType||this.layer.polygonSymbol?"polyline"!==a.geometryType||
this.layer.lineSymbol?"point"!==a.geometryType||this.layer.pointSymbol||(this.layer.pointSymbol=b.symbol):this.layer.lineSymbol=b.symbol:this.layer.polygonSymbol=b.symbol;this.graphicsViews.push(d);this.container.addChild(d.container)}},e.initial),e.watch(()=>this.layer?.polygonSymbol,a=>{this._graphicsViewMap.polygon.renderer=new h({symbol:a})},e.initial),e.watch(()=>this.layer?.lineSymbol,a=>{this._graphicsViewMap.polyline.renderer=new h({symbol:a})},e.initial),e.watch(()=>this.layer?.pointSymbol,
a=>{this._graphicsViewMap.point.renderer=new h({symbol:a})},e.initial)])}detach(){this._clear()}moveStart(){}moveEnd(){}viewChange(){for(const a of this.graphicsViews)a.viewChange()}_clear(){this.container.removeAllChildren();for(const a of this.graphicsViews)a.destroy();this._graphicsViewMap={};this._popupTemplates.clear();this.graphicsViews.length=0}};return g=l.__decorate([p.subclass("esri.views.2d.layers.GeoRSSLayerView2D")],g)});