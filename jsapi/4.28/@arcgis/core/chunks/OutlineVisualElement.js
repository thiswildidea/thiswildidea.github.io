/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{_ as e}from"./tslib.es6.js";import t from"../Color.js";import r from"../core/Accessor.js";import{d as s,k as i,e as o,u as l}from"./colorUtils2.js";import{property as n}from"../core/accessorSupport/decorators/property.js";import"./ensureType.js";import"./typedArrayUtil.js";import{subclass as a}from"../core/accessorSupport/decorators/subclass.js";import{a as c}from"./ExtendedLineVisualElement.js";import{R as h}from"./Material.js";import{c as d}from"./lineStippleUtils.js";import p from"../core/Evented.js";import{s as u,d as f,q as m}from"./vec3.js";import{c as g}from"./vec3f64.js";import{a as _,c as y}from"./vec4.js";import{f as O,c as C}from"./vec4f32.js";import{p as w}from"./projectBuffer.js";import{l as v}from"./aaBoundingBox.js";import{n as R}from"./DoubleArray.js";import{m as j}from"./dehydratedPoint.js";import{d as A}from"./elevationInfoUtils.js";import{E as b}from"./ElevationInfo.js";import{E as P}from"./EngineVisualElement.js";import{L as E}from"./LaserlineVisualElement.js";import{E as S}from"./ElevationContext.js";import{c as W}from"./line.js";import{a as D,g as G}from"./line2.js";import{R as z}from"./RenderGeometry.js";import{V as T}from"./VertexAttribute.js";import{R as x}from"./TriangleMaterial.js";const M=.3;function I(e,t){t&&Object.assign(e,t)}class F{constructor(e){this.height=90,this.coneHeight=40,this.coneWidth=23,this.width=3,this.renderOccluded=h.Opaque,this.color=e.accent}}class B{constructor({colors:e,...t}){this.size=11,this.outlineSize=1,this.collisionPadding=9,this.color=e.accent,this.outlineColor=e.outline,this.renderOccluded=h.Opaque,this.hoverOutlineColor=e.selectedOutline,I(this,t)}applyColor(e){this._apply(this.color,e)}applyOutline(e){this._apply(this.outlineColor,e)}applyHoverOutline(e){this._apply(this.hoverOutlineColor,e)}_apply(e,t){t.setParameters({color:l(e),renderOccluded:this.renderOccluded})}}class H{constructor({colors:e,...t}){this.size=40,this.height=.2,this.offset=.25,this.collisionPadding=2,this.renderOccluded=h.Transparent,this.minSquaredEdgeLength=900,this.color=o(e.accent,.5),this.hoverColor=e.accent,I(this,t)}applyColor(e){this._apply(this.color,e)}applyHover(e){this._apply(this.hoverColor,e)}_apply(e,t){t.setParameters({color:l(e),renderOccluded:this.renderOccluded})}}class U{constructor(e){this.vertex=new B({colors:e,color:e.accent,outlineColor:e.outline}),this.edge=new B({colors:e,color:i(o(e.accent,2/3),.5),outlineColor:o(e.outline,.5),size:8,collisionPadding:8}),this.selected=new B({colors:e,color:e.selected,outlineColor:e.outline}),this.edgeOffset=new H({colors:e})}}class V{constructor({colors:e,...t}){this.width=1.5,this.stipplePattern=d(3.3),this.falloff=0,this.innerWidth=1.5,this.renderOccluded=h.OccludeAndTransparent,this.color=e.selected,this.stippleOffColor=e.outline,this.innerColor=e.selected,I(this,t)}apply(e){e.color=l(this.color),e.width=this.width,e.stipplePattern=this.stipplePattern,e.stippleOffColor=l(this.stippleOffColor),e.falloff=this.falloff,e.innerWidth=this.innerWidth,e.innerColor=l(this.innerColor),e.renderOccluded=this.renderOccluded}}class L{constructor({colors:e,...t}){this.size=4,this.outlineSize=1,this.shape="square",this.color=e.selected,this.outlineColor=e.outline,I(this,t)}apply(e){e.color=l(this.color),e.size=this.size,e.outlineSize=this.outlineSize,e.outlineColor=l(this.outlineColor),e.primitive=this.shape}}class q{constructor({colors:e,...t}){this.innerWidth=1,this.glowWidth=8,this.glowFalloff=8,this.globalAlpha=M,this.globalAlphaContrastBoost=1.5,this.radius=3,this.innerColor=e.selected,this.glowColor=e.accent,this.heightFillColor=e.accent,I(this,t)}apply(e,r=1){const s={glowColor:t.toUnitRGB(this.glowColor),glowFalloff:this.glowFalloff,glowWidth:this.glowWidth,innerColor:t.toUnitRGB(this.innerColor),innerWidth:this.innerWidth,globalAlpha:this.globalAlpha*r*this.glowColor.a,globalAlphaContrastBoost:this.globalAlphaContrastBoost,intersectsLineRadius:this.radius};"style"in e?e.style=s:e.laserlineStyle=s}}class N{constructor(e){this.outline=new V({colors:e,color:e.stippleOff,renderOccluded:h.OccludeAndTransparentStencil,stippleOffColor:e.stippleOn,innerWidth:0}),this.staged=new V({colors:e,color:e.stippleOn,renderOccluded:h.OccludeAndTransparentStencil,innerColor:e.stagedSolid,stippleOffColor:e.stippleOff}),this.shadowStyle=new q({colors:e,globalAlpha:M,glowColor:e.accent,glowFalloff:8,glowWidth:8,innerColor:e.selected,innerWidth:1})}}class Y{constructor(e){this.outline=new L({colors:e,color:e.selected,outlineColor:e.outline,outlineSize:1,shape:"circle",size:4}),this.shadowStyle=new q({colors:e,globalAlpha:M,glowColor:e.accent,glowFalloff:1.5,glowWidth:6,innerColor:e.selected,innerWidth:1,radius:2})}}class k extends V{constructor({colors:e,...t}){super({colors:e}),this.extensionType=c.GROUND_RAY,I(this,t)}}class J{constructor(e){this.laserlineAlphaMultiplier=1.5,this.heightPlaneAngleCutoff=20,this.lineGraphics=new N(e),this.pointGraphics=new Y(e),this.heightPlane=new q({colors:e,globalAlpha:M,glowColor:e.accent,glowFalloff:8,glowWidth:8,innerColor:e.selected,innerWidth:1}),this.heightBox=new q({colors:e,globalAlpha:M,glowColor:e.accent,glowFalloff:8,glowWidth:8,innerColor:e.selected,innerWidth:0,heightFillColor:e.accent}),this.zVerticalLine=new k({colors:e,color:o(e.accent,.5),falloff:2,innerColor:o(e.selected,0),renderOccluded:h.OccludeAndTransparent,stipplePattern:null,width:5,extensionType:c.GROUND_RAY})}}let K=class extends r{constructor(e){super(e)}get colors(){const e=this.getTheme().accentColor,r=e.a;return{accent:e,contrast:s(e),selected:t.fromArray([255,255,255,r]),selectedOutline:t.fromArray([255,255,255,r]),staged:t.fromArray([12,207,255,r]),stagedSolid:t.fromArray([12,207,255,1]),outline:t.fromArray([0,0,0,.5*r]),stippleOn:t.fromArray([255,255,255,1]),stippleOff:t.fromArray([0,0,0,.5])}}get visualElements(){return new J(this.colors)}get manipulators(){return new U(this.colors)}get zManipulator(){return new F(this.colors)}};e([n()],K.prototype,"colors",null),e([n()],K.prototype,"visualElements",null),e([n()],K.prototype,"manipulators",null),e([n()],K.prototype,"zManipulator",null),e([n()],K.prototype,"getTheme",void 0),K=e([a("esri.views.3d.interactive.editingTools.settings.Settings")],K);class Q extends P{constructor(e){super(e),this._attachmentOrigin=j(0,0,0,null),this._attachmentOriginDirty=!0,this.events=new p,this._geometry=null,this._width=1,this._color=O(1,0,1,1),this._innerWidth=0,this._innerColor=O(1,1,1,1),this._stipplePattern=null,this._stippleOffColor=null,this._falloff=0,this._elevationInfo=null,this._laserlineStyle=null,this._laserlineEnabled=!1,this._renderOccluded=h.OccludeAndTransparentStencil,this._attachmentOrigin.spatialReference=e.view.spatialReference,this._laserline=new E({view:e.view,isDecoration:e.isDecoration}),this.applyProperties(e),this.attached=e.attached??!0}destroy(){this._laserline.destroy(),super.destroy()}createObject3DResourceFactory(e){return{view:e,createResources:e=>this._createObject3DResources(e),destroyResources:e=>this._destroyExternalResources(e),recreateGeometry:(e,t)=>{e.geometries.length=0,this._recreateGeometry(t,e.material,e.geometries)}}}createDrapedResourceFactory(e){return{view:e,createResources:()=>this._createDrapedResources(),destroyResources:e=>this._destroyExternalResources(e),recreateGeometry:e=>{e.geometries=this._createRenderGeometriesDraped(e.material),this._attachmentOriginChanged()}}}get _laserlineAttached(){return this.attached&&this.visible&&null!=this._laserlineStyle&&!this.isDraped&&this.laserlineEnabled}onAttachedChange(e){this._laserline.attached=this._laserlineAttached,e&&this._attachmentOriginChanged()}get geometry(){return this._geometry}set geometry(e){this._geometry=e,this.recreateGeometry()}get width(){return this._width}set width(e){e!==this._width&&(this._width=e,this._updateMaterial())}get color(){return this._color}set color(e){_(e,this._color)||(y(this._color,e),this._updateMaterial())}get innerWidth(){return this._innerWidth}set innerWidth(e){e!==this._innerWidth&&(this._innerWidth=e,this._updateMaterial())}get innerColor(){return this._innerColor}set innerColor(e){_(e,this._innerColor)||(y(this._innerColor,e),this._updateMaterial())}get stipplePattern(){return this._stipplePattern}set stipplePattern(e){const t=null!=e!=(null!=this._stipplePattern);this._stipplePattern=e,t?this.recreate():this._updateMaterial()}get stippleOffColor(){return this._stippleOffColor}set stippleOffColor(e){e&&this._stippleOffColor&&_(e,this._stippleOffColor)||(this._stippleOffColor=e?C(e):null,this._updateMaterial())}get falloff(){return this._falloff}set falloff(e){e!==this._falloff&&(this._falloff=e,this._updateMaterial())}get elevationInfo(){return this._elevationInfo}set elevationInfo(e){this._elevationInfo=e,this.recreateGeometry()}get laserlineStyle(){return this._laserlineStyle}set laserlineStyle(e){this._laserlineStyle=e,this._laserline.attached=this._laserlineAttached,null!=e&&(this._laserline.style=e)}get laserlineEnabled(){return this._laserlineEnabled}set laserlineEnabled(e){this._laserlineEnabled!==e&&(this._laserlineEnabled=e,this._laserline.attached=this._laserlineAttached)}get renderOccluded(){return this._renderOccluded}set renderOccluded(e){e!==this._renderOccluded&&(this._renderOccluded=e,this._updateMaterial())}get attachmentOrigin(){if(!this._attachmentOriginDirty)return this._attachmentOrigin;const e=this.object3dResources.resources?.geometries;if(!e||0===e.length)return null;u(Z,0,0,0);let t=0;for(const r of e)r.computeAttachmentOrigin(X)&&(f(Z,Z,X),t++);return 0===t?null:(m(Z,Z,1/t),this.view.renderCoordsHelper.fromRenderCoords(Z,this._attachmentOrigin),this._attachmentOriginDirty=!1,this._attachmentOrigin)}_updateMaterial(){null!=this.object3dResources.resources&&this.object3dResources.resources.material.setParameters(this._materialParameters),null!=this.drapedResources.resources&&this.drapedResources.resources.material.setParameters(this._materialParameters)}get _isClosed(){return null!=this.geometry&&"polygon"===this.geometry.type}get _materialParameters(){return{width:this._width,color:this._color,stippleOffColor:this._stippleOffColor,stipplePattern:this._stipplePattern,stipplePreferContinuous:!1,isClosed:this._isClosed,falloff:this._falloff,innerColor:this._innerColor,innerWidth:this._innerWidth,join:"round",hasPolygonOffset:!0,renderOccluded:this._normalizedRenderOccluded,isDecoration:this.isDecoration}}get _normalizedRenderOccluded(){return this.isDraped&&this._renderOccluded===h.OccludeAndTransparentStencil?h.OccludeAndTransparent:this._renderOccluded}_recreateGeometry(e,t,r){this._createRenderGeometries(t,r);for(const t of r)e.addGeometry(t);this._attachmentOriginChanged()}_attachmentOriginChanged(){this._attachmentOriginDirty=!0,this.events.emit("attachment-origin-changed")}_destroyExternalResources(e){e.geometries=[]}_createObject3DResources(e){const t=new x(this._materialParameters),r=new Array;return this._recreateGeometry(e,t,r),{material:t,geometries:r,forEach:e=>{e(t),r.forEach(e)}}}_createDrapedResources(){const e=new x(this._materialParameters);return{material:e,geometries:this._createRenderGeometriesDraped(e)}}_createRenderGeometriesDraped(e){const{geometry:t,view:r}=this,s=r.basemapTerrain.spatialReference;return null==t||null==s?[]:D(t,s).lines.map((({position:t})=>{const i={overlayInfo:{spatialReference:s,renderCoordsHelper:r.renderCoordsHelper},attributeData:{position:t},removeDuplicateStartEnd:this._isClosed};return new z(W(e,i))}))}calculateMapBounds(e){if(null==this.object3dResources.resources)return!1;const t=this.view.renderCoordsHelper;for(const r of this.object3dResources.resources.geometries){const s=r.attributes.get(T.POSITION),i=R(s.data.length);w(s.data,t.spatialReference,0,i,this.view.spatialReference,0,s.data.length/3),v(e,i)}return!0}_createRenderGeometries(e,t){const r=this.geometry;if(null==r)return;const s=G(r,this.view.elevationProvider,this.view.renderCoordsHelper,S.fromElevationInfo(this.elevationInfo??new b({mode:A(r,null)}))),i=new Array;for(const{position:r,mapPositions:o}of s.lines){const s={mapPositions:o,attributeData:{position:r},removeDuplicateStartEnd:this._isClosed};t.push(W(e,s)),i.push(r)}this._laserline.pathVerticalPlane=i}}const X=g(),Z=g();export{Q as O,K as S};
