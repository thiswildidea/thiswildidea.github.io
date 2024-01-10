// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define(["exports","../../../../core/screenUtils","../../state/controllers/RotateController","../../../input/InputHandler","../../../input/handlers/support"],function(d,f,e,g,h){class k extends g.InputHandler{constructor(b,a,c,l){super(!0);this._view=b;this.pointerAction=a;this._pivot=c;this.registerIncoming("drag",l,m=>this._handleDrag(m))}_handleDrag(b){const a=b.data;if(!(1<a.pointers.size)&&h.eventMatchesMousePointerAction(b.data,this.pointerAction)){var c=f.createScreenPointArray(a.center.x,a.center.y);
switch(a.action){case "start":this._cameraController&&(this._cameraController.end(),this._cameraController=null);this._cameraController=new e.RotateController({view:this._view,pivot:this._pivot});this._view.state.switchCameraController(this._cameraController);this._cameraController.begin(c);break;case "update":this._cameraController&&this._cameraController.update(c);break;case "end":this._cameraController&&(this._cameraController.end(),this._cameraController=null)}b.stopPropagation()}}}Object.defineProperty(d,
"PivotPoint",{enumerable:!0,get:()=>e.PivotPoint});d.DragRotate=k;Object.defineProperty(d,Symbol.toStringTag,{value:"Module"})});