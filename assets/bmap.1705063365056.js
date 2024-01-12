import{B as t,z as e,D as o,E as n,F as a,G as i,H as r}from"./index.1705063365056100.js";import{b as p,c as s}from"./api.1705063365056.js";function m(t,e){this._bmap=t,this.dimensions=["lng","lat"],this._mapOffset=[0,0],this._api=e,this._projection=new BMap.MercatorProjection}function l(t,e){return e=e||[0,0],n([0,1],(function(o){var n=e[o],a=t[o]/2,i=[],r=[];return i[o]=n-a,r[o]=n+a,i[1-o]=r[1-o]=e[1-o],Math.abs(this.dataToPoint(i)[o]-this.dataToPoint(r)[o])}),this)}var d;function f(t){for(var e in t)if(t.hasOwnProperty(e))return!1;return!0}m.prototype.dimensions=["lng","lat"],m.prototype.setZoom=function(t){this._zoom=t},m.prototype.setCenter=function(t){this._center=this._projection.lngLatToPoint(new BMap.Point(t[0],t[1]))},m.prototype.setMapOffset=function(t){this._mapOffset=t},m.prototype.getBMap=function(){return this._bmap},m.prototype.dataToPoint=function(t){var e=new BMap.Point(t[0],t[1]),o=this._bmap.pointToOverlayPixel(e),n=this._mapOffset;return[o.x-n[0],o.y-n[1]]},m.prototype.pointToData=function(t){var e=this._mapOffset;return[(t=this._bmap.overlayPixelToPoint({x:t[0]+e[0],y:t[1]+e[1]})).lng,t.lat]},m.prototype.getViewRect=function(){var e=this._api;return new t(0,0,e.getWidth(),e.getHeight())},m.prototype.getRoamTransform=function(){return e()},m.prototype.prepareCustoms=function(){var t=this.getViewRect();return{coordSys:{type:"bmap",x:t.x,y:t.y,width:t.width,height:t.height},api:{coord:o(this.dataToPoint,this),size:o(l,this)}}},m.dimensions=m.prototype.dimensions,m.create=function(t,e){var o,n=e.getDom();t.eachComponent("bmap",(function(t){var i,r=e.getZr().painter,p=r.getViewportRoot();if("undefined"==typeof BMap)throw new Error("BMap api is not loaded");if(d=d||function(){function t(t){this._root=t}return t.prototype=new BMap.Overlay,t.prototype.initialize=function(t){return t.getPanes().labelPane.appendChild(this._root),this._root},t.prototype.draw=function(){},t}(),o)throw new Error("Only one bmap component can exist");if(!t.__bmap){var s=n.querySelector(".ec-extension-bmap");s&&(p.style.left="0px",p.style.top="0px",n.removeChild(s)),(s=document.createElement("div")).className="ec-extension-bmap",s.style.cssText="position:absolute;width:100%;height:100%",n.appendChild(s);var l=t.get("mapOptions");l&&delete(l=a(l)).mapType,i=t.__bmap=new BMap.Map(s,l);var f=new d(p);i.addOverlay(f),r.getViewportRootOffset=function(){return{offsetLeft:0,offsetTop:0}}}i=t.__bmap;var c=t.get("center"),h=t.get("zoom");if(c&&h){var y=i.getCenter(),u=i.getZoom();if(t.centerOrZoomChanged([y.lng,y.lat],u)){var g=new BMap.Point(c[0],c[1]);i.centerAndZoom(g,h)}}(o=new m(i,e)).setMapOffset(t.__mapOffset||[0,0]),o.setZoom(h),o.setCenter(c),t.coordinateSystem=o})),t.eachSeries((function(t){"bmap"===t.get("coordinateSystem")&&(t.coordinateSystem=o)}))},p({type:"bmap",getBMap:function(){return this.__bmap},setCenterAndZoom:function(t,e){this.option.center=t,this.option.zoom=e},centerOrZoomChanged:function(t,e){var o,n,a=this.option;return o=t,n=a.center,!(o&&n&&o[0]===n[0]&&o[1]===n[1]&&e===a.zoom)},defaultOption:{center:[104.114129,37.550339],zoom:5,mapStyle:{},mapStyleV2:{},mapOptions:{},roam:!1}}),s({type:"bmap",render:function(t,e,o){var n=!0,i=t.getBMap(),r=o.getZr().painter.getViewportRoot(),p=t.coordinateSystem,s=function(e,a){if(!n){var i=r.parentNode.parentNode.parentNode,s=[-parseInt(i.style.left,10)||0,-parseInt(i.style.top,10)||0],m=r.style,l=s[0]+"px",d=s[1]+"px";m.left!==l&&(m.left=l),m.top!==d&&(m.top=d),p.setMapOffset(s),t.__mapOffset=s,o.dispatchAction({type:"bmapRoam",animation:{duration:0}})}};function m(){n||o.dispatchAction({type:"bmapRoam",animation:{duration:0}})}i.removeEventListener("moving",this._oldMoveHandler),i.removeEventListener("moveend",this._oldMoveHandler),i.removeEventListener("zoomend",this._oldZoomEndHandler),i.addEventListener("moving",s),i.addEventListener("moveend",s),i.addEventListener("zoomend",m),this._oldMoveHandler=s,this._oldZoomEndHandler=m;var l=t.get("roam");l&&"scale"!==l?i.enableDragging():i.disableDragging(),l&&"move"!==l?(i.enableScrollWheelZoom(),i.enableDoubleClickZoom(),i.enablePinchToZoom()):(i.disableScrollWheelZoom(),i.disableDoubleClickZoom(),i.disablePinchToZoom());var d=t.__mapStyle,c=t.get("mapStyle")||{},h=JSON.stringify(c);JSON.stringify(d)!==h&&(f(c)||i.setMapStyle(a(c)),t.__mapStyle=JSON.parse(h));var y=t.__mapStyle2,u=t.get("mapStyleV2")||{},g=JSON.stringify(u);JSON.stringify(y)!==g&&(f(u)||i.setMapStyleV2(a(u)),t.__mapStyle2=JSON.parse(g)),n=!1}}),i("bmap",m),r({type:"bmapRoam",event:"bmapRoam",update:"updateLayout"},(function(t,e){e.eachComponent("bmap",(function(t){var e=t.getBMap(),o=e.getCenter();t.setCenterAndZoom([o.lng,o.lat],e.getZoom())}))}));
