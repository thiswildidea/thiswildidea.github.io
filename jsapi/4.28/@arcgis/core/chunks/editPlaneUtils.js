/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{_ as t}from"./tslib.es6.js";import e from"../Graphic.js";import o from"../core/Evented.js";import{m as i}from"./handleUtils.js";import{d as r}from"./maybe.js";import{m as n}from"./memoize.js";import{s,u as a,v as l,z as p,c,t as u,w as h,x as d,a as y}from"./unitFormatUtils.js";import{watch as m,syncAndInitial as f}from"../core/reactiveUtils.js";import{m as g,g as v,x,ae as w,af as _,q as O}from"./unitUtils.js";import{property as b}from"../core/accessorSupport/decorators/property.js";import"./ensureType.js";import{l as M,i as T}from"./typedArrayUtil.js";import{subclass as I}from"../core/accessorSupport/decorators/subclass.js";import V from"../layers/GraphicsLayer.js";import{c as j}from"./elevationInfoUtils.js";import"../geometry.js";import{clone as G}from"../core/lang.js";import{g as S,s as z,e as U,b as C,p as P,f as R,h as k,d as E,J as L,q as D}from"./vec3.js";import{c as A,f as F,Z as H}from"./vec3f64.js";import N from"../geometry/Circle.js";import{simplify as Z,distance as Q}from"../geometry/geometryEngine.js";import q,{l as Y,i as W,m as J}from"../geometry/Polygon.js";import{m as X,c as B}from"./surfaceCoordinateSystems.js";import K from"../geometry/Multipoint.js";import $ from"../geometry/Polyline.js";import tt from"../geometry/Point.js";import{g as et}from"./helpMessageUtils.js";import{I as ot}from"./dragEventPipeline.js";import{t as it}from"./keybindings.js";import rt from"../views/interactive/sketch/SketchLabelOptions.js";import nt from"../views/interactive/sketch/SketchTooltipOptions.js";import{p as st}from"./projectVectorToVector.js";import{A as at}from"./Axis.js";import{h as lt,e as pt}from"./coordinateSystem.js";import{S as ct,V as ut,H as ht}from"./constraints.js";import{h as dt}from"./snappingUtils.js";import{x as yt,q as mt,f as ft,d as gt,y as vt,z as xt,a as wt,i as _t,j as Ot}from"./vec2.js";import{e as bt}from"./vec2f64.js";import Mt from"../geometry/SpatialReference.js";import{p as Tt}from"./projectVectorToPoint.js";import{p as It}from"./projectVectorToWGS84ComparableLonLat.js";import{inverseGeodeticSolver as Vt,InverseGeodeticSolverResult as jt,directGeodeticSolver as Gt}from"../geometry/support/geodesicUtils.js";import{c as St}from"./measurementUtils2.js";import{S as zt,a as Ut,b as Ct,c as Pt,T as Rt}from"./automaticLengthMeasurementUtils.js";import{c as kt}from"./Cyclical.js";import Et,{b as Lt}from"../core/Accessor.js";import{g as Dt}from"./uuid.js";import{a as At}from"./automaticAreaMeasurementUtils.js";import{u as Ft,c as Ht}from"./boundedPlane.js";import{k as Nt}from"./vector.js";import{U as Zt,M as Qt,R as qt,S as Yt}from"./EditGeometryOperations.js";function Wt(t,e){const o=new tt({x:t[0],y:t[1],spatialReference:e});return t.length>2&&(o.z=t[2]),o}function Jt(t,e,o){const i=new $({paths:t,spatialReference:e});return o&&Y(i),i}function Xt(t,e,o,i=!0){const r=G(t);r.forEach((t=>{const e=t[0],o=t[t.length-1];M(e,o)&&1!==t.length||t.push(t[0])}));let n=new q({rings:r,spatialReference:e});return n.rings.forEach((t=>{W(t)||t.reverse()})),o&&Y(n),i&&n.isSelfIntersecting&&g(e)&&(n=Z(n)),n}function Bt(t,e,o){const i=e.mapToLocalMultiple(t),r=[],n={x:i[0].x,y:i[0].y},s=i[1].x,a=i[1].y,l=Math.round(s-n.x),p=Math.round(a-n.y),c=Math.max(Math.abs(l),Math.abs(p));if(o){const t={x:n.x+c,y:n.y+c},e={x:n.x-c,y:n.y-c};r.push(X(t.x,e.y),X(e.x,e.y),X(e.x,t.y),X(t.x,t.y))}else{const t={x:l>0?n.x+c:n.x-c,y:p>0?n.y+c:n.y-c};r.push(X(n.x,n.y),X(t.x,n.y),X(t.x,t.y),X(n.x,t.y))}return Kt(Xt([r.map((t=>e.localToMap(t))).filter(T)],e.spatialReference,e.doUnnormalization,!0),r,e)}function Kt(t,e,o){const i=$t(e[3],e[2],o),r=$t(e[1],e[2],o),n=$t(e[0],e[1],o),s=$t(e[0],e[3],o);return{geometry:t,midpoints:null!=i&&null!=r&&null!=n&&null!=s?{top:i,right:r,bottom:n,left:s}:null}}function $t(t,e,o){ee[0]=t.x,ee[1]=t.y,ee[2]=0,oe[0]=e.x,oe[1]=e.y,oe[2]=0,S(ee,ee,oe,.5),te.x=ee[0],te.y=oe[1],te.z=oe[2];const i=o.localToMap(te);return null!=i?Wt(i,o.spatialReference):null}const te=X(0,0,0),ee=A(),oe=A();function ie(t,e,o,i){const r=e.mapToLocalMultiple(t);let n=null,s=null;if(o)n=r[0],s=r[1];else{const t=r[0],e=r[1],o=Math.round(e.x-t.x),i=Math.round(e.y-t.y),a=Math.max(Math.abs(o),Math.abs(i));n=X(o>0?t.x+a/2:t.x-a/2,i>0?t.y+a/2:t.y-a/2),s=X(Math.abs(o)>Math.abs(i)?n.x-a/2:n.x,Math.abs(o)>Math.abs(i)?n.y:n.y-a/2)}const a=e.localToMap(n),l=e.localToMap(s);if(null==a||null==l)return null;e.doUnnormalization&&J([[a,l]],e.spatialReference);const p=Wt(a,e.spatialReference),c=Wt(l,e.spatialReference),u=v(e.spatialReference);let h=0;if(g(e.spatialReference))h=u*Q(p,c,null);else{const t=n.x-s.x,e=n.y-s.y;h=u*Math.sqrt(t*t+e*e)*(i||1)}const d=new N({center:p,radius:h,radiusUnit:"meters",spatialReference:e.spatialReference});return{geometry:Xt(d.rings,d.spatialReference,!1),center:p,edge:c}}const re=(()=>{const t=A(),e=A(),o=A();return(i,r)=>{if(z(e,i.x,i.y,i.z??0),z(o,r.x,r.y,r.z??0),U(e,o))return null;if(!It(e,i.spatialReference,e)||!It(o,r.spatialReference,o)){C(t,o,e),t[2]=0,P(t,t);let i=yt(bt,t);return t[0]<0&&(i=2*Math.PI-i),s(i,"radians","geographic")}const{azimuth:n}=Vt(se,e,o);return null!=n?s(n,"degrees","geographic"):void 0}})(),ne=(()=>{const t=A(),e=A();return({x:o,y:i,z:r,spatialReference:n},s,l)=>{const p=r??0;z(t,o,i,p);const c=a(x(l.value,l.unit,"degrees"),l.rotationType,"geographic");if(!st(t,n,t,Mt.WGS84)){const t=a(c,"geographic","arithmetic"),e=x(t,"degrees","radians");return new tt({x:o+s*Math.cos(e),y:i+s*Math.sin(e),z:p,spatialReference:n})}return Gt(e,t,c,s),e[2]=p,Tt(e,Mt.WGS84,n)}})(),se=new jt;function ae(t,e,o,i){if(!e)return;const{spatialReference:r}=t;if(!w(r))return;const n=St(r),s=w(n);if(!s)return;const a=dt(t,o,i),p=ce;if(!st(a,r,p,n))return;const c=l(e,s);if("3d"===o?.type&&"local"===o.viewingMode)p[0]+=c;else{const t=lt(n),e=pt(t,p,at.X,ue);R(p,p,e,c)}if(!st(p,n,p,r))return;const u=k(a,p);return new ct(a,u)}function le(t,e,o,i){if(!e)return;const r=dt(t,o,i),n=ne(t,1,e);if(!n)return;const s=dt(n,o,i);return new ut(r,s)}function pe(t,e,o,i){if(null==t)return;const r=St(e),n=_(r);return n?new ht(l(t,n)):void 0}const ce=A(),ue=A();let he=class extends Et{constructor(t){super(t),this.committed=null,this.disabled=!1,this.hidden=!1,this.id=Dt(),this.inputValue=null,this.readOnly=!1}get dirty(){return null!=this.inputValue}get locked(){return null!=this.committed}lock(t){this.inputValue=null,this.committed=t??this.actual}unlock(){this.committed=null,this.inputValue=null}};t([b()],he.prototype,"actual",void 0),t([b()],he.prototype,"committed",void 0),t([b()],he.prototype,"createQuantity",void 0),t([b()],he.prototype,"disabled",void 0),t([b()],he.prototype,"hidden",void 0),t([b()],he.prototype,"format",void 0),t([b()],he.prototype,"id",void 0),t([b()],he.prototype,"inputValue",void 0),t([b()],he.prototype,"readOnly",void 0),t([b()],he.prototype,"suffix",void 0),t([b()],he.prototype,"title",void 0),t([b()],he.prototype,"toInputUnits",void 0),t([b()],he.prototype,"dirty",null),t([b()],he.prototype,"locked",null),he=t([I("esri.views.interactive.tooltip.fields.TooltipField")],he);let de=class extends he{constructor(t){super(t),this.mode="absolute-height"}normalizeCtorArgs(t){const e=t=>t.inputUnitInfos.verticalLength.unit;return{actual:p,createQuantity:(t,o)=>c(t,e(o)),toInputUnits:(t,o)=>u(t,e(o)),format:(t,e)=>e.formatters.verticalLength(t),suffix:t=>t.inputUnitInfos.verticalLength.abbreviation,title:t=>t.messages.sketch.elevation,...t}}};t([b()],de.prototype,"mode",void 0),de=t([I("esri.views.interactive.tooltip.fields.TooltipFieldElevation")],de);const ye=t=>{const e=t=>t.inputUnitInfos.orientation.unit;return new he({actual:h,createQuantity:(t,o)=>s(t,e(o),"geographic"),toInputUnits:({value:t,unit:o,rotationType:i},r)=>{const n=a(x(t,o,"degrees"),i,"geographic"),l=kt.normalize(n,0,!0),p=e(r),c=x(l,"degrees",p);return s(c,p,"geographic")},format:(t,e)=>e.formatters.angle(t),suffix:t=>t.inputUnitInfos.orientation.abbreviation,title:t=>t.messages.sketch.orientation,...t})},me=t=>{const e=t=>t.inputUnitInfos.length.unit;return new he({actual:p,createQuantity:(t,o)=>c(t,e(o)),toInputUnits:(t,o)=>u(t,e(o)),format:(t,e)=>e.formatters.length(t),suffix:t=>t.inputUnitInfos.length.abbreviation,title:t=>t.messages.sketch.distance,...t})},fe=t=>new de(t);let ge=class extends zt{constructor(t){super(t),this.type="draw-point",this.elevation=fe()}get allFields(){return[this.elevation]}};t([b()],ge.prototype,"type",void 0),t([b()],ge.prototype,"elevation",void 0),t([b()],ge.prototype,"allFields",null),t([b()],ge.prototype,"helpMessage",void 0),ge=t([I("esri.views.interactive.tooltip.DrawPointTooltipInfo")],ge);let ve=class extends zt{constructor(t){super(t),this.type="draw-polyline",this.orientation=ye(),this.distance=me({title:t=>t.messages.sketch.distance}),this.elevation=fe(),this.totalLength=me({format:(t,e)=>e.formatters.totalLength(t),title:t=>t.messages.sketch.totalLength,readOnly:!0})}get allFields(){return[this.orientation,this.distance,this.elevation,this.totalLength]}};t([b()],ve.prototype,"type",void 0),t([b()],ve.prototype,"orientation",void 0),t([b()],ve.prototype,"distance",void 0),t([b()],ve.prototype,"elevation",void 0),t([b()],ve.prototype,"totalLength",void 0),t([b()],ve.prototype,"allFields",null),t([b()],ve.prototype,"helpMessage",void 0),ve=t([I("esri.views.interactive.tooltip.DrawPolylineTooltipInfo")],ve);let xe=class extends zt{constructor(t){super(t),this.type="draw-polygon",this.orientation=ye(),this.distance=me({title:t=>t.messages.sketch.distance}),this.elevation=fe(),this.area=(t=>{const e=t=>t.inputUnitInfos.area.unit;return new he({actual:d,createQuantity:(t,o)=>y(t,e(o)),toInputUnits:(t,o)=>u(t,e(o)),format:(t,e)=>e.formatters.area(t),suffix:t=>t.inputUnitInfos.area.abbreviation,title:t=>t.messages.sketch.area,readOnly:!0})})()}get allFields(){return[this.orientation,this.distance,this.elevation,this.area]}};t([b()],xe.prototype,"type",void 0),t([b()],xe.prototype,"distance",void 0),t([b()],xe.prototype,"elevation",void 0),t([b()],xe.prototype,"area",void 0),t([b()],xe.prototype,"allFields",null),t([b()],xe.prototype,"helpMessage",void 0),xe=t([I("esri.views.interactive.tooltip.DrawPolygonTooltipInfo")],xe);let we=class extends zt{constructor(t){super(t),this.type="draw-mesh",this.elevation=fe()}get allFields(){return[this.elevation]}};t([b()],we.prototype,"type",void 0),t([b()],we.prototype,"elevation",void 0),t([b()],we.prototype,"allFields",null),t([b()],we.prototype,"helpMessage",void 0),we=t([I("esri.views.interactive.tooltip.DrawMeshTooltipInfo")],we);let _e=class extends zt{constructor(t){super(t),this.type="draw-rectangle",this.xSize=p,this.ySize=p,this.area=d}get allFields(){return[]}};t([b()],_e.prototype,"type",void 0),t([b()],_e.prototype,"xSize",void 0),t([b()],_e.prototype,"ySize",void 0),t([b()],_e.prototype,"area",void 0),t([b()],_e.prototype,"allFields",null),_e=t([I("esri.views.interactive.tooltip.DrawRectangleTooltipInfo")],_e);let Oe=class extends zt{constructor(t){super(t),this.type="draw-circle",this.radius=null,this.xSize=null,this.ySize=null,this.area=d}get allFields(){return[]}};t([b()],Oe.prototype,"type",void 0),t([b()],Oe.prototype,"radius",void 0),t([b()],Oe.prototype,"xSize",void 0),t([b()],Oe.prototype,"ySize",void 0),t([b()],Oe.prototype,"area",void 0),t([b()],Oe.prototype,"allFields",null),Oe=t([I("esri.views.interactive.tooltip.DrawCircleTooltipInfo")],Oe);class be{constructor(){this.regularVertices=null,this.activeVertex=null,this.full=null,this.outline=null,this.circle=null,this.rectangle=null}}let Me=class extends(o.EventedMixin(ot)){constructor(t){super(t),this._graphic=null,this._createOperationGeometry=null,this.defaultZ=0,this.geometryType=null,this.hasZ=!0,this.labelOptions=new rt,this.geometryToPlace=null,this.mode=null,this.snappingManager=null,this.snapToScene=!1,this.tooltip=null,this.tooltipOptions=new nt,this._getPointConstraint=n((t=>t)),this._getPolylineOrPolygonConstraint=n(((t,e,o)=>function(t){let e;for(const o of t)o&&(e=e?.intersect(o)??o);return e}([t,e,o]))),this._getDistanceConstraint=n(ae),this._getOrientationConstraint=n(le),this._getElevationConstraint=n(pe)}initialize(){this.internalGraphicsLayer=new V({listMode:"hide",internal:!0}),this.view.map.layers.add(this.internalGraphicsLayer),this.drawOperation=this.makeDrawOperation();const t=this.tooltipOptions,e=this.view.type;this.tooltipInfos={point:new ge({tooltipOptions:t,viewType:e}),polyline:new ve({tooltipOptions:t,viewType:e}),polygon:new xe({tooltipOptions:t,viewType:e}),mesh:new we({tooltipOptions:t,viewType:e}),rectangle:new _e({tooltipOptions:t}),circle:new Oe({tooltipOptions:t})},this.addHandles([this.drawOperation.on("vertex-add",(t=>this.onVertexAdd(t))),this.drawOperation.on("vertex-remove",(t=>this.onVertexRemove(t))),this.drawOperation.on("vertex-update",(t=>this.onVertexUpdate(t))),this.drawOperation.on("cursor-update",(t=>this.onCursorUpdate(t))),this.drawOperation.on("complete",(t=>this.onComplete(t))),m((()=>this.cursor),(t=>{this.drawOperation.cursor=t}),f),m((()=>this.tooltipOptions.enabled),(t=>{this.tooltip=t?new Rt({view:this.view,info:this._tooltipInfo}):r(this.tooltip)}),f),Lt((()=>this._updateTooltipInfo()))]),this.finishToolCreation()}destroy(){this.drawOperation=r(this.drawOperation),this.tooltip=r(this.tooltip),this._destroyAllVisualisations(),this.view.map.remove(this.internalGraphicsLayer),this.internalGraphicsLayer=r(this.internalGraphicsLayer),this._set("view",null)}get _defaultElevation(){return c(this.defaultZ,"meters")}get canRedo(){return this.drawOperation.canRedo}get canUndo(){return this.drawOperation.canUndo}set centered(t){this._set("centered",t),this._updateGraphic()}get cursor(){return this._get("cursor")}set cursor(t){this._set("cursor",t)}set enabled(t){this.drawOperation.interactive=t,this._set("enabled",t)}set forceUniformSize(t){this._set("forceUniformSize",t),this._updateGraphic()}get graphic(){return this._graphic}set graphicSymbol(t){this._set("graphicSymbol",t),null!=this._graphic&&(this._graphic.symbol=t)}get updating(){return this.drawOperation?.updating??!1}completeCreateOperation(){this.drawOperation.complete()}onInputEvent(t){const e=this._tooltipInfo;if("key-down"===t.type&&t.key===it.enterInputMode&&null!=e&&e.editableFields.length>0&&this.tooltipOptions.inputEnabled)return e.enterInputMode(),void t.stopPropagation();this.drawOperation.onInputEvent(t)}redo(){this.drawOperation.redo()}reset(){}undo(){this.drawOperation.undo()}_destroyAllVisualisations(){this.removeHandles(Ie.outline),this.removeHandles(Ie.regularVertices),this.removeHandles(Ie.activeVertex),this.removeHandles(Te)}_createOrUpdateGraphic(t){if(null!=this._graphic)return this.updateGraphicGeometry(this._graphic,t),this._graphic;const o=this._graphic=new e({...this.graphicProperties,symbol:this.graphicSymbol});return this.updateGraphicGeometry(o,t),this.internalGraphicsLayer.add(o),this.addHandles(this.initializeGraphic(o)),this.notifyChange("graphic"),this.addHandles(i((()=>{this.internalGraphicsLayer.remove(o),r(o),this._graphic===o&&(this._graphic=null)})),Te),o}updateGraphicGeometry(t,e){t.geometry=e}_getCreateOperationGeometry(t={operationComplete:!1}){const{drawOperation:e}=this;if(null==e||0===e.numVertices)return null;const{coordinateHelper:o,view:i}=e,r=e.stagedVertex,n=e.committedVertices,s=n.slice(),a=null!=r;a&&s.push(o.pointToArray(r));const l=a?o.pointToArray(r):n.splice(-1)[0],p=s.length,c=i.spatialReference,u="3d"===i.type&&"global"===i.viewingMode,h=new be;switch(this.geometryType){case"point":case"mesh":h.regularVertices=n,h.activeVertex=l,h.full=o.arrayToPoint(s[0]);break;case"multipoint":h.regularVertices=n,h.activeVertex=l,p>0&&(h.full=function(t,e){return new K({points:t,spatialReference:e})}(s,c));break;case"polyline":h.regularVertices=n,h.activeVertex=l,p>0&&(h.full=Jt([s],c,u));break;case"polygon":h.regularVertices=n,h.activeVertex=l,p>0&&(h.full=Xt([s],c,u,!0));break;case"circle":if(p>0){const e=B(i,s[0]);if(1===p&&t.operationComplete){const t=s[0],o=e.makeMapPoint(t[0]+je*i.resolution,t[1]);h.circle=ie([t,o],e,!0),h.full=null!=h.circle?h.circle.geometry:null}else 2===p&&(this.forceUniformSize?(h.circle=ie(s,e,this.centered),h.full=null!=h.circle?h.circle.geometry:null):(h.rectangle=function(t,e,o){const i=e.mapToLocalMultiple(t),r=i[0],n=i[1],s=Math.round(n.x-r.x),a=Math.round(n.y-r.y),l=X(o?r.x:r.x+s/2,o?r.y:r.y+a/2),p=o?s:s/2,c=o?a:a/2,u=[],h=2*Math.PI/60;function d(t){const e=Math.cos(t),o=Math.sin(t);return X(p*e+l.x,c*o+l.y)}for(let t=0;t<60;t++)u.push(d(t*h));u.push(u[0]);const{spatialReference:y,doUnnormalization:m}=e,f=Xt([u.map((t=>e.localToMap(t))).filter(T)],y,m,!1),g=e.localToMap(d(Math.PI/2)),v=e.localToMap(d(0)),x=e.localToMap(d(-Math.PI/2)),w=e.localToMap(d(Math.PI));return{geometry:f,midpoints:null!=g&&null!=v&&null!=x&&null!=w?{top:Wt(g,y),right:Wt(v,y),bottom:Wt(x,y),left:Wt(w,y)}:null}}(s,e,this.centered),h.full=h.rectangle.geometry))}break;case"rectangle":if(p>0){const e=B(i,s[0]);if(1===p&&t.operationComplete){const t=s[0],o=e.makeMapPoint(t[0]+je*i.resolution,t[1]);h.rectangle=Bt([t,o],e,!0),h.full=h.rectangle.geometry}else 2===p&&(h.rectangle=this.forceUniformSize?Bt(s,e,this.centered):function(t,e,o){let i=e.mapToLocalMultiple(t);if(1===i.length){const t=48,e=i[0];i=[X(e.x-t,e.y+t),X(e.x+t,e.y-t),X(e.x+t,e.y-t),X(e.x-t,e.y+t)]}const r=[],n={x:i[0].x,y:i[0].y},s={x:i[1].x,y:i[1].y};if(o){const t=Math.round(s.x-n.x),e=Math.round(s.y-n.y);r.push(X(n.x-t,n.y-e),X(s.x,n.y-e),X(s.x,s.y),X(n.x-t,s.y))}else r.push(X(n.x,n.y),X(s.x,n.y),X(s.x,s.y),X(n.x,s.y));return Kt(Xt([r.map((t=>e.localToMap(t))).filter(T)],e.spatialReference,e.doUnnormalization,!0),r,e)}(s,e,this.centered),h.full=h.rectangle.geometry)}break;default:return null}switch(this.geometryType){case"point":case"multipoint":break;case"polyline":h.outline=p>1?Jt([s],c,u):null;break;case"polygon":h.outline=p>1?Xt([s],c,u):null;break;case"circle":case"rectangle":h.outline="polygon"===h.full?.type?Xt(h.full.rings,c,u):null}return h}initializeGraphic(t){return i()}onComplete(t){this._updateGraphic();let e=null;if(this.drawOperation.isCompleted){const t=this._getCreateOperationGeometry({operationComplete:!0});null!=t&&(e=this._createOrUpdateGraphic(t.full).clone())}this._createOperationGeometry=null,this.emit("complete",{graphic:e,...t})}onCursorUpdate(t){this._updateGraphic(),this.emit("cursor-update",t)}onDeactivate(){this.drawOperation.isCompleted||this.drawOperation.cancel()}onVertexAdd(t){this._updateGraphic(),this._clearConstraints(),this.emit("vertex-add",t)}onVertexRemove(t){this._updateGraphic(),this._clearConstraints(),this.emit("vertex-remove",t)}onVertexUpdate(t){this._updateGraphic(),this.emit("vertex-update",t)}_updateGraphic(){const t=this._getCreateOperationGeometry();this._createOperationGeometry=t,null!=t?(null!=t.outline?this.addHandles(this.onOutlineChanged(t.outline),Ie.outline):this.removeHandles(Ie.outline),null!=t.regularVertices?this.addHandles(this.onRegularVerticesChanged(t.regularVertices),Ie.regularVertices):this.removeHandles(Ie.regularVertices),null!=t.activeVertex?this.addHandles(this.onActiveVertexChanged(t.activeVertex),Ie.activeVertex):this.removeHandles(Ie.activeVertex),null!=t.full?this._createOrUpdateGraphic(t.full):this.removeHandles(Te)):this._destroyAllVisualisations()}get _tooltipInfo(){const{drawOperation:t,graphic:e,view:o}=this;if(!t)return null;const i=this.tooltipInfos,r=e?.geometry?.type;switch(this.geometryType){case"point":return"2d"===o.type&&0===this.defaultZ?null:"point"===r?i.point:null;case"polyline":return"polyline"===r?i.polyline:null;case"polygon":return"polygon"===r?i.polygon:null;case"rectangle":return"polygon"===r?i.rectangle:null;case"circle":return"polygon"===r?i.circle:null;case"mesh":return"mesh"===r?i.mesh:null;default:return null}}_updateTooltipInfo(){const{_tooltipInfo:t,tooltip:e}=this;if(t&&e){switch(t.type){case"draw-point":this._updateDrawPointTooltipInfo(t);break;case"draw-polyline":this._updateDrawPolylineTooltipInfo(t);break;case"draw-polygon":this._updateDrawPolygonTooltipInfo(t);break;case"draw-rectangle":this._updateDrawRectangleTooltipInfo(t);break;case"draw-circle":this._updateDrawCircleTooltipInfo(t);break;case"draw-mesh":this.updateDrawMeshTooltipInfo(t)}e.info=t}}_updateDrawPointTooltipInfo(t){const{drawOperation:e,graphic:o,view:i,tooltipOptions:r}=this,{elevationInfo:n,stagedVertex:s}=e;if(t.tooltipOptions=r,t.viewType=i.type,t.helpMessage=et("point",o?.geometry),this.updateElevation(t.elevation),!s)return void(e.constraint=void 0);const a=e.coordinateHelper.spatialReference;e.constraint=this._getPointConstraint(this._getElevationConstraint(t.elevation.committed,a,i,n))}_updateDrawPolylineTooltipInfo(t){const e=this._createOperationGeometry,o=null!=e?e.full:null;if("polyline"!==o?.type)return;const{drawOperation:i,tooltipOptions:r,view:n}=this,{lastVertex:s,stagedVertex:a}=i;this._updatePolylineOrPolygonCommon(t,a);const l=Ut(o,this._elevationMode);t.totalLength.actual=l??p,t.totalLength.hidden=null==length||!s,t.tooltipOptions=r,t.viewType=n.type,t.helpMessage=et("polyline",o),this.updateElevation(t.elevation)}_updateDrawPolygonTooltipInfo(t){const e=this._createOperationGeometry,o=null!=e?e.full:null;if("polygon"!==o?.type)return;const{drawOperation:i,tooltipOptions:r,view:n}=this,{lastVertex:s}=i;let a=i.stagedVertex;"polygon"===o?.type&&s&&!a&&(a=o.getPoint(0,o.rings[0].length-1)),this._updatePolylineOrPolygonCommon(t,a);const l=At(o,this._elevationMode);t.area.actual=l??d,t.area.hidden=null==l&&!s,t.tooltipOptions=r,t.viewType=n.type,t.helpMessage=et("polygon",o),this.updateElevation(t.elevation)}_updatePolylineOrPolygonCommon(t,e){const{view:o,drawOperation:i}=this,{elevationInfo:r,lastVertex:n}=i;if(!n||!e)return t.distance.hidden=!0,t.orientation.hidden=!0,void(i.constraint=void 0);const s=Ct(n,e,this._elevationMode);t.distance.actual=s??p,t.distance.hidden=!1;const a=re(n,e);t.orientation.actual=a??h,t.orientation.hidden=!1;const l=i.coordinateHelper.spatialReference;i.constraint=this._getPolylineOrPolygonConstraint(this._getDistanceConstraint(n,t.distance.committed,o,r),this._getOrientationConstraint(n,t.orientation.committed,o,r),this._getElevationConstraint(t.elevation.committed,l,o,r))}updateDrawMeshTooltipInfo(t){}_updateDrawRectangleTooltipInfo(t){t.tooltipOptions=this.tooltipOptions,t.xSize=this._xSize??p,t.ySize=this._ySize??p,t.area=this._fullGeometryArea??d}_updateDrawCircleTooltipInfo(t){const{forceUniformSize:e}=this;t.tooltipOptions=this.tooltipOptions,t.radius=e?this._circleRadius??p:null,t.xSize=e?null:this._xSize??p,t.ySize=e?null:this._ySize??p,t.area=this._fullGeometryArea??d}get _circleRadius(){const t=this._createOperationGeometry;return null!=t?.circle?.center&&null!=t.circle.edge?Pt(t.circle.center,t.circle.edge,this._elevationMode):null}get _xSize(){const t=this._createOperationGeometry?.rectangle?.midpoints;return null!=t?Pt(t.left,t.right,this._elevationMode):null}get _ySize(){const t=this._createOperationGeometry?.rectangle?.midpoints;return null!=t?Pt(t.top,t.bottom,this._elevationMode):null}get _fullGeometryArea(){const t=this._createOperationGeometry?.full;return"polygon"!==t?.type?null:At(t,this._elevationMode)}updateElevation(t){t.actual=this._vertexTooltipElevation}get _vertexTooltipElevation(){const{tooltipOptions:t,view:e,drawOperation:o}=this;if(null==o)return this._defaultElevation;const i=o.stagedVertex??o.lastVertex;if(null==i||"2d"===e.type)return this._defaultElevation;const r={mode:t.elevation.mode,offset:0},n=(j(e,i,o.elevationInfo,r)??0)*O(i.spatialReference);return c(n,"meters")}get _elevationMode(){return this.drawOperation.isDraped?"on-the-ground":"absolute-height"}_clearConstraints(){for(const[,t]of Object.entries(this.tooltipInfos))t.unlockAllFields()}};t([b()],Me.prototype,"_createOperationGeometry",void 0),t([b()],Me.prototype,"_defaultElevation",null),t([b({value:!0})],Me.prototype,"centered",null),t([b()],Me.prototype,"cursor",null),t([b({nonNullable:!0})],Me.prototype,"defaultZ",void 0),t([b()],Me.prototype,"drawOperation",void 0),t([b({value:!0})],Me.prototype,"enabled",null),t([b({value:!0})],Me.prototype,"forceUniformSize",null),t([b({constructOnly:!0})],Me.prototype,"geometryType",void 0),t([b()],Me.prototype,"graphic",null),t([b({constructOnly:!0})],Me.prototype,"graphicProperties",void 0),t([b()],Me.prototype,"graphicSymbol",null),t([b({constructOnly:!0})],Me.prototype,"hasZ",void 0),t([b({constructOnly:!0,type:rt})],Me.prototype,"labelOptions",void 0),t([b({constructOnly:!0})],Me.prototype,"geometryToPlace",void 0),t([b({constructOnly:!0})],Me.prototype,"mode",void 0),t([b()],Me.prototype,"snappingManager",void 0),t([b()],Me.prototype,"snapToScene",void 0),t([b()],Me.prototype,"tooltip",void 0),t([b()],Me.prototype,"tooltipInfos",void 0),t([b({constructOnly:!0,type:nt})],Me.prototype,"tooltipOptions",void 0),t([b({readOnly:!0})],Me.prototype,"type",void 0),t([b({readOnly:!0})],Me.prototype,"updating",null),t([b({constructOnly:!0,nonNullable:!0})],Me.prototype,"view",void 0),t([b()],Me.prototype,"_tooltipInfo",null),t([b()],Me.prototype,"_circleRadius",null),t([b()],Me.prototype,"_xSize",null),t([b()],Me.prototype,"_ySize",null),t([b()],Me.prototype,"_fullGeometryArea",null),t([b()],Me.prototype,"_vertexTooltipElevation",null),t([b()],Me.prototype,"_elevationMode",null),Me=t([I("esri.views.draw.DrawGraphicTool")],Me);const Te="create-operation-graphic",Ie={outline:"outline-visual",regularVertices:"regular-vertices-visual",activeVertex:"active-vertex-visual"};function Ve(t){switch(t){case"point":case"polyline":case"polygon":case"multipoint":return t;case"circle":case"rectangle":return"segment";case"mesh":return"point"}}const je=48;function Ge(t,e){return ze(t,e,!1)}function Se(t,e){return ze(t,e,!0)}function ze(t,e,o){if(t instanceof Zt){if(t.operation instanceof Qt)return function(t,e,o=!1){const i=o?-1:1,r=F(i*t.dx,i*t.dy,i*t.dz);E(e.origin,e.origin,r),Ft(e)}(t.operation,e,o),!0;if(t.operation instanceof qt)return function(t,e,o=!1){const i=o?-t.angle:t.angle;L(e.basis1,e.basis1,H,i),L(e.basis2,e.basis2,H,i),Ft(e)}(t.operation,e,o),!0;if(t.operation instanceof Yt)return function(t,e,o=!1){const i=o?1/t.factor1:t.factor1,r=o?1/t.factor2:t.factor2;D(e.basis1,e.basis1,i),D(e.basis2,e.basis2,r),mt(e.origin,e.origin,t.origin,t.axis1,i),mt(e.origin,e.origin,t.origin,t.axis2,r),Ft(e)}(t.operation,e,o),!0}return!1}function Ue(t,e,o,i){i||(i=Ht());const r=ft(Nt.get(),t[1],-t[0]),n=ft(Nt.get(),Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY),s=ft(Nt.get(),Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY),a=Nt.get();e.components.forEach((e=>e.vertices.forEach((e=>{const o=e.pos;ft(a,gt(t,o),gt(r,o)),vt(n,n,a),xt(s,s,a)}))));const l=1e-6,p=ft(Nt.get(),s[0]-n[0]<l?o/2:0,s[1]-n[1]<l?o/2:0);return wt(n,n,p),_t(s,s,p),Ot(i.basis1,t,(s[0]-n[0])/2),Ot(i.basis2,r,(s[1]-n[1])/2),ft(i.origin,n[0]*t[0]+n[1]*r[0],n[0]*t[1]+n[1]*r[1]),_t(i.origin,i.origin,i.basis1),_t(i.origin,i.origin,i.basis2),Ft(i),i}export{Me as D,Ge as a,Ue as c,Ve as g,fe as m,Se as u};
