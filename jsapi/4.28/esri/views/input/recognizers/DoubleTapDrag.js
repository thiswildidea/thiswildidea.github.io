// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("exports ../../../core/clock ../../../core/MapUtils ../../../core/maybe ../../../core/screenUtils ../DragEventSeparator ../InputHandler ./support".split(" "),function(l,n,p,m,k,q,r,f){class t extends r.InputHandler{constructor(a=f.DefaultParameters.maximumDoubleClickDelay,b=f.DefaultParameters.maximumDoubleClickDistance,d=f.DefaultParameters.maximumDoubleTouchDelay,c=f.DefaultParameters.maximumDoubleTouchDistance,g=n.clock){super(!1);this._maximumDoubleClickDelay=a;this._maximumDoubleClickDistance=
b;this._maximumDoubleTouchDelay=d;this._maximumDoubleTouchDistance=c;this._clock=g;this._doubleTapDragActive=this._doubleTapDragReady=!1;this._dragStartCenter=k.createScreenPoint(0,0);this._pointerState=new Map;this._doubleTapDrag=this.registerOutgoing("double-tap-drag");this._dragEventSeparator=new q.DragEventSeparator({start:(e,h)=>this._dragStart(e,h),update:(e,h)=>this._dragUpdate(h),end:(e,h)=>this._dragEnd(h)});this.registerIncoming("drag",e=>this._dragEventSeparator.handle(e));this.registerIncoming("pointer-down",
e=>this._handlePointerDown(e));this.registerIncoming("pointer-up",()=>this._handlePointerUp())}onUninstall(){this._pointerState.forEach(a=>{a.doubleTapTimeout=m.removeMaybe(a.doubleTapTimeout)})}get hasPendingInputs(){return p.someMap(this._pointerState,a=>null!=a.doubleTapTimeout)}_clearPointerDown(a){const b=this._pointerState.get(a);b&&(b.doubleTapTimeout=m.removeMaybe(b.doubleTapTimeout),this._pointerState.delete(a),this.refreshHasPendingInputs())}_createDoubleTapDragData(a,b,d){const {button:c,
buttons:g,pointer:e,pointers:h,pointerType:u,timestamp:v}=d;return{action:a,delta:b,button:c,buttons:g,pointer:e,pointers:h,pointerType:u,timestamp:v}}_dragStart(a,b){if(this._doubleTapDragReady&&1===a){this._doubleTapDragReady=!1;this._doubleTapDragActive=!0;var {data:d,modifiers:c}=b;({center:a}=d);this._dragStartCenter=a;a=this._createDoubleTapDragData("begin",k.createScreenPoint(0,0),d);this._doubleTapDrag.emit(a,void 0,c);b.stopPropagation()}}_dragUpdate(a){if(this._doubleTapDragActive){var {data:b,
modifiers:d}=a,{center:c}=b;c=k.createScreenPoint(c.x-this._dragStartCenter.x,c.y-this._dragStartCenter.y);c=this._createDoubleTapDragData("update",c,b);this._doubleTapDrag.emit(c,void 0,d);a.stopPropagation()}}_dragEnd(a){if(this._doubleTapDragActive){var {data:b,modifiers:d}=a,{center:c}=b;c=k.createScreenPoint(c.x-this._dragStartCenter.x,c.y-this._dragStartCenter.y);c=this._createDoubleTapDragData("end",c,b);this._doubleTapDrag.emit(c,void 0,d);this._doubleTapDragActive=!1;a.stopPropagation()}}_handlePointerDown(a){const {data:b}=
a,d=f.getPointerId(b),c=this._pointerState.get(d);var {pointerType:g}=b.native;c?(g="touch"===g?this._maximumDoubleTouchDistance:this._maximumDoubleClickDistance,this._clearPointerDown(d),f.manhattanDistance(c.event.data,b)>g?this._storePointerDown(a):this._doubleTapDragReady=!0):this._storePointerDown(a)}_handlePointerUp(){this._doubleTapDragReady=!1}_storePointerDown(a){var {data:b}=a;const {pointerType:d}=b.native,c=f.getPointerId(b);b=this._clock.setTimeout(()=>this._clearPointerDown(c),"touch"===
d?this._maximumDoubleTouchDelay:this._maximumDoubleClickDelay);this._pointerState.set(c,{event:a,doubleTapTimeout:b});this.refreshHasPendingInputs()}}l.DoubleTapDrag=t;Object.defineProperty(l,Symbol.toStringTag,{value:"Module"})});