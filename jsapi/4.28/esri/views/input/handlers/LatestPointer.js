// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define(["exports","../InputHandler"],function(e,f){class g extends f.InputHandler{constructor(b){super(!0);this._onChange=b;this._value="mouse";this._y=this._x=null;this.registerIncoming("pointer-move",a=>{this._update(a.data)})}_update(b){const a="touch"===b.native.pointerType?"touch":"mouse",{x:c,y:d}=b;if(a!==this._value||this._x!==c||this._y!==d)this._value=a,this._x=c,this._y=d,this._onChange(a,c,d)}}e.LatestPointer=g;Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});