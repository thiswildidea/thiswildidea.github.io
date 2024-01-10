// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/tslib.es6 ../../../../core/Logger ../../../../core/accessorSupport/ensureType ../../../../core/arrayUtils ../../../../core/has ../../../../core/Error ../../../../core/accessorSupport/decorators/subclass ../css ../TooltipContentWithHelpMessage ../TooltipField ../ValueByValue ./TooltipContent ../../../../widgets/support/widgetUtils ../../../../widgets/support/jsxFactory".split(" "),function(c,k,q,r,t,u,v,l,d,m,e,f,n,w,a){var p=`${d.content} ${`${d.content}--extent-scale`}`;
c.TooltipContentExtentScale=class extends n.TooltipContent{render(){const b=this.info,{visibleElements:g}=b.tooltipOptions,h=this._messagesTooltip.sketch;return a.tsx(m.TooltipContentWithHelpMessage,{className:p,helpMessage:this._getHelpMessage()},g.size?a.tsx(e.TooltipField,{title:h.size,value:a.tsx(f.ValueByValue,{left:this._formatLength(b.xSize),right:this._formatLength(b.ySize)})}):null,g.scale?a.tsx(e.TooltipField,{title:h.scale,value:a.tsx(f.ValueByValue,{left:this._formatScale(b.xScale),right:this._formatScale(b.yScale)})}):
null)}};c.TooltipContentExtentScale=k.__decorate([l.subclass("esri.views.interactive.tooltip.content.TooltipContentExtentScale")],c.TooltipContentExtentScale);Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});