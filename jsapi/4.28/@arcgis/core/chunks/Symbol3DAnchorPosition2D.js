/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{_ as r}from"./tslib.es6.js";import o from"../core/Accessor.js";import{property as s}from"../core/accessorSupport/decorators/property.js";import"./ensureType.js";import"./typedArrayUtil.js";import{subclass as t}from"../core/accessorSupport/decorators/subclass.js";var e;let p=e=class extends o{constructor(){super(...arguments),this.x=0,this.y=0}clone(){return new e({x:this.x,y:this.y})}};r([s({type:Number})],p.prototype,"x",void 0),r([s({type:Number})],p.prototype,"y",void 0),p=e=r([t("esri.symbols.support.Symbol3DAnchorPosition2D")],p);export{p as S};
