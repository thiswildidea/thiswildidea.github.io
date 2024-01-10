// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("exports ../../../../core/time ../../../../chunks/vec3 ../../../../chunks/vec3f64 ./Camera ../../webgl-engine/lib/Camera ../../../animation/pointToPoint/Animation".split(" "),function(k,d,e,m,l,n,p){const q=m.create();class r{get finished(){return this.currentTime>=this._animation.time}get time(){return this._animation.time}constructor(b){this.currentTime=d.Milliseconds(0);this._animation=new p.Animation(()=>new l(b));this._current=new l(b)}update(b,c,t){const f=this._animation.definition.source,
h=this._animation.definition.target,a=e.subtract(q,c.center,b.center),g=e.length(a);1E-5<=g?(a[0]/=g,a[1]/=g,a[2]/=g):(a[0]=0,a[1]=1,a[0]=0);e.copy(f.lookAtDirection,a);e.copy(h.lookAtDirection,a);f.copyFromRenderCamera(b);h.copyFromRenderCamera(c);this._current.copyFrom(f);this._animation.update(f,h,t);this.currentTime=d.Milliseconds(0);b.almostEquals(c)&&(this.currentTime=this._animation.time)}cameraAt(b,c){this._animation.cameraAt(b,this._current);c=c||new n.Camera;this._current.copyToRenderCamera(c);
return c}step(b,c){this.finished||(this.currentTime=d.Milliseconds(this.currentTime+d.millisecondsFromSeconds(b)),this.currentTime>=this.time&&(this.currentTime=this.time));return this.cameraAt(this.currentTime/this.time,c)}}k.Animation=r;Object.defineProperty(k,Symbol.toStringTag,{value:"Module"})});