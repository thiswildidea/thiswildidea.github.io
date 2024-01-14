var e=Object.defineProperty,t=(t,i,r)=>(((t,i,r)=>{i in t?e(t,i,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[i]=r})(t,"symbol"!=typeof i?i+"":i,r),r);import{_ as i,u as r,A as n,k as s,m as a,V as o,l as c,p as l,a as d,o as p,X as h,Y as v,b as m}from"./index.1705206323444.js";import{g as u,a as f}from"./index.1705206323444108.js";import{l as w,M as g}from"./mapconfig.1705206323444.js";import{W as x,S as y,P as b,A as S,j,M as _,b as R,k as C,h as M,l as z,m as P,n as V,o as T,V as A}from"./three.module.1705206323444.js";class E{constructor(e,i,r,n){t(this,"view",null),t(this,"options",null),t(this,"externalRenderers",null),t(this,"renderer",null),t(this,"scene",null),t(this,"camera",null),t(this,"material",null),t(this,"electricShieldobject3d",[]),this.view=e,this.externalRenderers=n;this.options=this.extend({},{speed:.02,radius:1,altitude:0},r,{points:i})}setup(e){this.renderer=new x({context:e.gl,premultipliedAlpha:!1}),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setViewport(0,0,this.view.width,this.view.height),this.renderer.autoClear=!1,this.renderer.autoClearDepth=!1,this.renderer.autoClearColor=!1,this.renderer.autoClearStencil=!1;var t=this.renderer.setRenderTarget.bind(this.renderer);this.renderer.setRenderTarget=i=>{t(i),null==i&&e.bindRenderTarget()},this.scene=new y,this.camera=new b;const i=new S(1);i.position.copy(1e6,1e5,1e5),this.scene.add(i),this._setupScene(e)}_setupScene(e){this.material=this.getMaterial(),this.options,this.options.points.forEach((e=>{const t=new j(e.radius,50,50,0,2*Math.PI),i=new _(t,this.material),r=this.coordinateToVector3([e.x,e.y],e.altitude);i.position.copy(r),i.rotation.x=Math.PI/2,this.scene.add(i),this.electricShieldobject3d.push(i)})),e.resetWebGLState()}getMaterial(){var e={uniforms:{time:{type:"f",value:0},color:{type:"c",value:new R(this.options.color)},opacity:{type:"f",value:1}},vertexShaderSource:"\n  precision lowp float;\n  precision lowp int;\n  ".concat(C.fog_pars_vertex,"\n  varying vec2 vUv;\n  void main() {\n    vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n    vUv = uv;\n    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n    ").concat(C.fog_vertex,"\n  }\n"),fragmentShaderSource:"\n                #if __VERSION__ == 100\n                 #extension GL_OES_standard_derivatives : enable\n                #endif\n                uniform vec3 color;\n                uniform float opacity;\n                uniform float time;\n                varying vec2 vUv;\n                #define pi 3.1415926535\n                #define PI2RAD 0.01745329252\n                #define TWO_PI (2. * PI)\n                float rands(float p){\n                    return fract(sin(p) * 10000.0);\n                }\n                float noise(vec2 p){\n                    float t = time / 20000.0;\n                    if(t > 1.0) t -= floor(t);\n                    return rands(p.x * 14. + p.y * sin(t) * 0.5);\n                }\n                vec2 sw(vec2 p){\n                    return vec2(floor(p.x), floor(p.y));\n                }\n                vec2 se(vec2 p){\n                    return vec2(ceil(p.x), floor(p.y));\n                }\n                vec2 nw(vec2 p){\n                    return vec2(floor(p.x), ceil(p.y));\n                }\n                vec2 ne(vec2 p){\n                    return vec2(ceil(p.x), ceil(p.y));\n                }\n                float smoothNoise(vec2 p){\n                    vec2 inter = smoothstep(0.0, 1.0, fract(p));\n                    float s = mix(noise(sw(p)), noise(se(p)), inter.x);\n                    float n = mix(noise(nw(p)), noise(ne(p)), inter.x);\n                    return mix(s, n, inter.y);\n                }\n                float fbm(vec2 p){\n                    float z = 2.0;\n                    float rz = 0.0;\n                    vec2 bp = p;\n                    for(float i = 1.0; i < 6.0; i++){\n                    rz += abs((smoothNoise(p) - 0.5)* 2.0) / z;\n                    z *= 2.0;\n                    p *= 2.0;\n                    }\n                    return rz;\n                }\n                void main() {\n                    vec2 uv = vUv;\n                    vec2 uv2 = vUv;\n                    if (uv.y < 0.5) {\n                    discard;\n                    }\n                    uv *= 4.;\n                    float rz = fbm(uv);\n                    uv /= exp(mod(time * 2.0, pi));\n                    rz *= pow(15., 0.9);\n                    gl_FragColor = mix(vec4(color, opacity) / rz, vec4(color, 0.1), 0.2);\n                    if (uv2.x < 0.05) {\n                    gl_FragColor = mix(vec4(color, 0.1), gl_FragColor, uv2.x / 0.05);\n                    }\n                    if (uv2.x > 0.95){\n                    gl_FragColor = mix(gl_FragColor, vec4(color, 0.1), (uv2.x - 0.95) / 0.05);\n                    }\n                }"};return new M({uniforms:e.uniforms,defaultAttributeValues:{},vertexShader:e.vertexShaderSource,fragmentShader:e.fragmentShaderSource,blending:z,depthWrite:!1,shading:P,opacity:.1,depthTest:!0,side:V,transparent:!0,wireframe:void 0!==this.options.wireframe&&this.options.wireframe})}setMaterialColor(e){this.electricShieldobject3d.length&&this.electricShieldobject3d.forEach((t=>{t.material.color.set(e)}))}setwireframe(){this.electricShieldobject3d.length&&this.electricShieldobject3d.forEach((e=>{e.material.wireframe=!e.material.wireframe}))}setopacity(e){this.electricShieldobject3d.length&&this.electricShieldobject3d.forEach((t=>{t.material.opacity=e}))}setaltitude(e){this.electricShieldobject3d.length&&this.electricShieldobject3d.forEach((t=>{t.position.z=e}))}setscaleZ(e){this.electricShieldobject3d.length&&this.electricShieldobject3d.forEach((t=>{t.scale.z=e}))}coordinateToVector3(e,t=0){const i=e;let r=new T,n=new Array(16);return r.fromArray(this.externalRenderers.renderCoordinateTransformAt(this.view,[i[0],i[1],t],this.view.spatialReference,n)),new A(r.elements[12],r.elements[13],r.elements[14])}render(e){const t=e.camera;this.camera.position.set(t.eye[0],t.eye[1],t.eye[2]),this.camera.up.set(t.up[0],t.up[1],t.up[2]),this.camera.lookAt(new A(t.center[0],t.center[1],t.center[2])),this.electricShieldobject3d.map((e=>{e.material.uniforms.time.value+=this.options.speed})),this.camera.projectionMatrix.fromArray(t.projectionMatrix),this.renderer.state.reset(),this.renderer.render(this.scene,this.camera),this.externalRenderers.requestRender(this.view),e.resetWebGLState()}extend(...e){for(let t=1;t<arguments.length;t++){const i=arguments[t];for(const t in i)e[t]=i[t]}return e}}const L={name:"map",components:{},setup(){const e=r();n();const t=s({});return a((async()=>{!async function(e){const[t,i,r,n,s,a,o,c,l,d,p,h,v]=await w(["esri/Map","esri/views/SceneView","esri/layers/FeatureLayer","esri/core/reactiveUtils","esri/widgets/Expand","esri/Camera","esri/widgets/Home","esri/widgets/Fullscreen","esri/widgets/LayerList","esri/widgets/Legend","esri/views/3d/externalRenderers","esri/widgets/BasemapGallery","esri/geometry/SpatialReference"],{url:g.jsapiurl,css:g.jscssurl}),m=new t({basemap:"streets-night-vector",ground:{surfaceColor:"#021425"}}),f=new i({spatialReference:v.WebMercator,container:"viewDiv_threejs_electricShield",map:m,viewingMode:"local"}),x=new h({view:f}),y=new s({view:f,content:x,expandIconClass:"esri-icon-basemap",expandTooltip:"LayerList",group:"top-left"});f.ui.add(y,"top-left");const b=new a({fov:e.camera.fov,heading:e.camera.heading,position:{x:e.camera.position.x,y:e.camera.position.y,z:e.camera.position.z,spatialReference:{wkid:3857}},tilt:e.camera.tilt});n.once((()=>!0===(null==f?void 0:f.stationary))).then((()=>{f.goTo(b,e.cameraoptions).then((()=>{u("electricShieldPoints").then((e=>{e.map((e=>{const t=new E(f,e.points,e.options,p);p.add(f,t)}))}))}))})),n.on((()=>f),"click",(e=>{console.log("view camera: ",f.camera)}))}(await f())})),o((()=>{})),c((()=>e.state.tagsViewRoutes.isTagsViewCurrenFull)),{...l(t)}}},F={class:"home-container"},I=[(e=>(h("data-v-42214ab3"),e=e(),v(),e))((()=>m("div",{id:"viewDiv_threejs_electricShield"},null,-1)))];const U=i(L,[["render",function(e,t,i,r,n,s){return p(),d("div",F,I)}],["__scopeId","data-v-42214ab3"]]);export{U as default};
