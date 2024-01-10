// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/mat4f64 ../../../../chunks/vec2f64 ../../environment/CloudsParameters ../core/shaderLibrary/hud/HUDRenderStyle ../core/shaderLibrary/shading/MultipassGeometryTest.glsl ../core/shaderLibrary/shading/MultipassTerrainTest.glsl ./basicInterfaces ./Camera ./RenderSlot ./TransparencyPassType ../lighting/SceneLighting".split(" "),function(d,f,g,h,k,l,m,n,p,q,r,b){class t{constructor(a,c){this.shadowMap=a;this.slicePlane=c;this.slot=q.RenderSlot.OPAQUE_MATERIAL;this.hasOccludees=
!1;this.enableFillLights=!0;this.transparencyPassType=r.TransparencyPassType.NONE;this.alignPixelEnabled=!1;this.decorations=n.Decorations.ON;this.overlayStretch=1;this._camera=new p.Camera;this._inverseViewport=g.create();this.oldLighting=new b.SceneLighting;this.newLighting=new b.SceneLighting;this._fadedLighting=new b.SceneLighting;this._lighting=this.newLighting;this.ssr=new u;this.multipassEnabled=!1;this.multipassTerrain=new m.MultipassTerrainUniforms;this.multipassGeometry=new l.MultipassGeometryUniforms;
this.hudRenderStyle=k.HUDRenderStyle.Occluded;this.cloudsFade=new h.CloudsParameters}get camera(){return this._camera}set camera(a){this._camera=a;this._inverseViewport[0]=1/a.fullViewport[2];this._inverseViewport[1]=1/a.fullViewport[3]}get inverseViewport(){return this._inverseViewport}get lighting(){return this._lighting}get weatherFading(){return this._lighting===this._fadedLighting}fadeLighting(a){const {oldLighting:c,newLighting:e}=this;1<=a?this._lighting=e:(this._fadedLighting.lerpLighting(c,
e,a),this._lighting=this._fadedLighting)}}class u{constructor(){this.fadeFactor=1;this.reprojectionMatrix=f.create()}}d.BindParameters=t;Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});