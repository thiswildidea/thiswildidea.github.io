// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("exports ../../../chunks/tslib.es6 ../../../chunks/Tick ../../../chunks/Theme ../../../chunks/ColorSet ../../../chunks/DefaultTheme".split(" "),function(Z,R,A,f,ia,ja){function fa(a){return 1<=a?S:-1>=a?-S:Math.asin(a)}function ka(a){return a.innerRadius}function la(a){return a.outerRadius}function ma(a){return a.startAngle}function na(a){return a.endAngle}function oa(a){return a&&a.padAngle}function T(a,b,c,e,d,g,h){var t=a-c,k=b-e;h=(h?g:-g)/K(t*t+k*k);k*=h;t*=-h;var n=a+k,l=b+t,p=c+k,q=
e+t;c=(n+p)/2;e=(l+q)/2;b=p-n;a=q-l;h=b*b+a*a;g=d-g;q=n*q-p*l;var u=(0>a?-1:1)*K(pa(0,g*g*h-q*q));n=(q*a-b*u)/h;l=(-q*b-a*u)/h;p=(q*a+b*u)/h;b=(-q*b+a*u)/h;a=n-c;h=l-e;c=p-c;e=b-e;a*a+h*h>c*c+e*e&&(n=p,l=b);return{cx:n,cy:l,x01:-k,y01:-t,x11:n*(d/g-1),y11:l*(d/g-1)}}function qa(){function a(){var l,p=+b.apply(this,arguments),q=+c.apply(this,arguments),u=g.apply(this,arguments)-S,x=h.apply(this,arguments)-S,B=ha(x-u),y=x>u;k||(k=l=n());if(q<p){var H=q;q=p;p=H}if(1E-12<q)if(B>ra-1E-12)k.moveTo(q*I(u),
q*D(u)),k.arc(0,0,q,u,x,!y),1E-12<p&&(k.moveTo(p*I(x),p*D(x)),k.arc(0,0,p,x,u,y));else{var m=u,r=x;H=u;var L=x,aa=B,ba=B,C=t.apply(this,arguments)/2,E=1E-12<C&&(d?+d.apply(this,arguments):K(p*p+q*q)),J=ca(ha(q-p)/2,+e.apply(this,arguments)),v=J,w=J;if(1E-12<E){var G=fa(E/p*D(C));C=fa(E/q*D(C));1E-12<(aa-=2*G)?(G*=y?1:-1,H+=G,L-=G):(aa=0,H=L=(u+x)/2);1E-12<(ba-=2*C)?(C*=y?1:-1,m+=C,r-=C):(ba=0,m=r=(u+x)/2)}u=q*I(m);x=q*D(m);G=p*I(L);C=p*D(L);if(1E-12<J){var M=q*I(r),N=q*D(r),da=p*I(H),ea=p*D(H);if(B<
O){v=da-u;w=ea-x;B=G-M;E=C-N;var F=E*v-B*w;1E-12>F*F?v=void 0:(F=(B*(x-N)-E*(u-M))/F,v=[u+F*v,x+F*w]);v?(w=u-v[0],B=x-v[1],E=M-v[0],F=N-v[1],w=(w*E+B*F)/(K(w*w+B*B)*K(E*E+F*F)),w=1/D((1<w?0:-1>w?O:Math.acos(w))/2),B=K(v[0]*v[0]+v[1]*v[1]),v=ca(J,(p-B)/(w-1)),w=ca(J,(q-B)/(w+1))):v=w=0}}1E-12<ba?1E-12<w?(m=T(da,ea,u,x,q,w,y),r=T(M,N,G,C,q,w,y),k.moveTo(m.cx+m.x01,m.cy+m.y01),w<J?k.arc(m.cx,m.cy,w,z(m.y01,m.x01),z(r.y01,r.x01),!y):(k.arc(m.cx,m.cy,w,z(m.y01,m.x01),z(m.y11,m.x11),!y),k.arc(0,0,q,z(m.cy+
m.y11,m.cx+m.x11),z(r.cy+r.y11,r.cx+r.x11),!y),k.arc(r.cx,r.cy,w,z(r.y11,r.x11),z(r.y01,r.x01),!y))):(k.moveTo(u,x),k.arc(0,0,q,m,r,!y)):k.moveTo(u,x);1E-12<p&&1E-12<aa?1E-12<v?(m=T(G,C,M,N,p,-v,y),r=T(u,x,da,ea,p,-v,y),k.lineTo(m.cx+m.x01,m.cy+m.y01),v<J?k.arc(m.cx,m.cy,v,z(m.y01,m.x01),z(r.y01,r.x01),!y):(k.arc(m.cx,m.cy,v,z(m.y01,m.x01),z(m.y11,m.x11),!y),k.arc(0,0,p,z(m.cy+m.y11,m.cx+m.x11),z(r.cy+r.y11,r.cx+r.x11),y),k.arc(r.cx,r.cy,v,z(r.y11,r.x11),z(r.y01,r.x01),!y))):k.arc(0,0,p,L,H,y):k.lineTo(G,
C)}else k.moveTo(0,0);k.closePath();if(l)return k=null,l+""||null}var b=ka,c=la,e=A.constant(0),d=null,g=ma,h=na,t=oa,k=null,n=A.withPath(a);a.centroid=function(){var l=(+b.apply(this,arguments)+ +c.apply(this,arguments))/2,p=(+g.apply(this,arguments)+ +h.apply(this,arguments))/2-O/2;return[I(p)*l,D(p)*l]};a.innerRadius=function(l){return arguments.length?(b="function"===typeof l?l:A.constant(+l),a):b};a.outerRadius=function(l){return arguments.length?(c="function"===typeof l?l:A.constant(+l),a):
c};a.cornerRadius=function(l){return arguments.length?(e="function"===typeof l?l:A.constant(+l),a):e};a.padRadius=function(l){return arguments.length?(d=null==l?null:"function"===typeof l?l:A.constant(+l),a):d};a.startAngle=function(l){return arguments.length?(g="function"===typeof l?l:A.constant(+l),a):g};a.endAngle=function(l){return arguments.length?(h="function"===typeof l?l:A.constant(+l),a):h};a.padAngle=function(l){return arguments.length?(t="function"===typeof l?l:A.constant(+l),a):t};a.context=
function(l){return arguments.length?(k=null==l?null:l,a):k};return a}class U extends f.Text{constructor(){super(...arguments);Object.defineProperty(this,"_display",{enumerable:!0,configurable:!0,writable:!0,value:this._root._renderer.makeRadialText("",this.textStyle)})}_afterNew(){super._afterNew()}_beforeChanged(){super._beforeChanged();this._display.clear();this.isDirty("textType")&&(this._display.textType=this.get("textType"),this.markDirtyBounds());this.isDirty("radius")&&(this._display.radius=
this.get("radius"),this.markDirtyBounds());this.isDirty("startAngle")&&(this._display.startAngle=(this.get("startAngle",0)+90)*f.RADIANS,this.markDirtyBounds());this.isDirty("inside")&&(this._display.inside=this.get("inside"),this.markDirtyBounds());this.isDirty("orientation")&&(this._display.orientation=this.get("orientation"),this.markDirtyBounds());this.isDirty("kerning")&&(this._display.kerning=this.get("kerning"),this.markDirtyBounds())}}Object.defineProperty(U,"className",{enumerable:!0,configurable:!0,
writable:!0,value:"RadialText"});Object.defineProperty(U,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:f.Text.classNames.concat([U.className])});class V extends f.Label{constructor(){super(...arguments);Object.defineProperty(this,"_flipped",{enumerable:!0,configurable:!0,writable:!0,value:!1})}_afterNew(){this._textKeys.push("textType","kerning");super._afterNew()}_makeText(){this._text=this.children.push(U.new(this._root,{}))}baseRadius(){const a=this.getPrivate("radius",0),b=this.getPrivate("innerRadius",
0),c=this.get("baseRadius",0);return b+f.relativeToValue(c,a-b)}radius(){const a=this.get("inside",!1);return this.baseRadius()+this.get("radius",0)*(a?-1:1)}_updateChildren(){super._updateChildren();if(this.isDirty("baseRadius")||this.isPrivateDirty("radius")||this.isPrivateDirty("innerRadius")||this.isDirty("labelAngle")||this.isDirty("radius")||this.isDirty("inside")||this.isDirty("orientation")||this.isDirty("textType")){const c=this.get("textType","adjusted");var a=this.get("inside",!1);const e=
this.get("orientation");let d=f.normalizeAngle(this.get("labelAngle",0));this._text.set("startAngle",this.get("labelAngle",0));this._text.set("inside",a);a=f.sin(d);var b=f.cos(d);let g=this.baseRadius(),h=this.radius();this._display.angle=0;"circular"==c?(this.setAll({paddingTop:0,paddingBottom:0,paddingLeft:0,paddingRight:0}),this._text.set("orientation",e),this._text.set("radius",h)):(0==g&&(h=d=0),b*=h,a*=h,"radial"==c?(this.setRaw("x",b),this.setRaw("y",a),90>d||270<d||"auto"!=e?(this._display.angle=
d,this._flipped=!1):(this._display.angle=d+180,this._flipped=!0),this._dirty.rotation=!1):"adjusted"==c?(this.setRaw("centerX",f.p50),this.setRaw("centerY",f.p50),this.setRaw("x",b),this.setRaw("y",a)):"regular"==c&&(this.setRaw("x",b),this.setRaw("y",a)));this.markDirtyPosition();this.markDirtyBounds()}}_updatePosition(){var a=this.get("textType","regular");const b=this.get("inside",!1);let c=0,e=0,d=this.get("labelAngle",0);var g=this.localBounds();let h=g.right-g.left;g=g.bottom-g.top;"radial"==
a?this._flipped&&(a=this.get("centerX"),a instanceof f.Percent&&(h*=1-2*a.value),c=h*f.cos(d),e=h*f.sin(d)):b||"adjusted"!=a||(c=h/2*f.cos(d),e=g/2*f.sin(d));this.setRaw("dx",c);this.setRaw("dy",e);super._updatePosition()}get text(){return this._text}}Object.defineProperty(V,"className",{enumerable:!0,configurable:!0,writable:!0,value:"RadialLabel"});Object.defineProperty(V,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:f.Label.classNames.concat([V.className])});const ha=Math.abs,z=
Math.atan2,I=Math.cos,pa=Math.max,ca=Math.min,D=Math.sin,K=Math.sqrt,O=Math.PI,S=O/2,ra=2*O;class W extends f.Graphics{constructor(){super(...arguments);Object.defineProperty(this,"ix",{enumerable:!0,configurable:!0,writable:!0,value:0});Object.defineProperty(this,"iy",{enumerable:!0,configurable:!0,writable:!0,value:0});Object.defineProperty(this,"_generator",{enumerable:!0,configurable:!0,writable:!0,value:qa()})}_getTooltipPoint(){let a=this.get("tooltipX"),b=this.get("tooltipY"),c=0,e=0;f.isNumber(a)&&
(c=a);f.isNumber(b)&&(e=b);let d=this.get("radius",0),g=this.get("innerRadius",0),h=this.get("dRadius",0),t=this.get("dInnerRadius",0);d+=h;g+=t;0>g&&(g=d+g);a instanceof f.Percent&&(c=this.ix*(g+(d-g)*a.value));b instanceof f.Percent&&(e=this.iy*(g+(d-g)*b.value));360<=this.get("arc")&&0==g&&(e=c=0);return{x:c,y:e}}_beforeChanged(){super._beforeChanged();if(this.isDirty("radius")||this.isDirty("arc")||this.isDirty("innerRadius")||this.isDirty("startAngle")||this.isDirty("dRadius")||this.isDirty("dInnerRadius")||
this.isDirty("cornerRadius"))this._clear=!0}_changed(){super._changed();if(this._clear){var a=this.get("startAngle",0);let b=this.get("arc",0);const c=this._generator;0>b&&(a+=b,b*=-1);.1<b&&c.cornerRadius(this.get("cornerRadius",0));c.context(this._display);let e=this.get("radius",0),d=this.get("innerRadius",0),g=this.get("dRadius",0),h=this.get("dInnerRadius",0);e+=g;d+=h;0>d&&(d=e+d);c({innerRadius:d,outerRadius:e,startAngle:(a+90)*f.RADIANS,endAngle:(a+b+90)*f.RADIANS});a+=b/2;this.ix=f.cos(a);
this.iy=f.sin(a)}this.isDirty("shiftRadius")&&(a=this.get("shiftRadius",0),this.setRaw("dx",this.ix*a),this.setRaw("dy",this.iy*a),this.markDirtyPosition())}}Object.defineProperty(W,"className",{enumerable:!0,configurable:!0,writable:!0,value:"Slice"});Object.defineProperty(W,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:f.Graphics.classNames.concat([W.className])});class sa extends f.Theme{setupDefaultRules(){super.setupDefaultRules();const a=this._root.interfaceColors;var b=this.rule.bind(this);
b("PercentSeries").setAll({legendLabelText:"{category}",legendValueText:"{valuePercentTotal.formatNumber('0.00p')}",colors:ia.ColorSet.new(this._root,{}),width:f.p100,height:f.p100});b("PieChart").setAll({radius:f.percent(80),startAngle:-90,endAngle:270});b("PieSeries").setAll({alignLabels:!0,startAngle:-90,endAngle:270});b("PieSeries").states.create("hidden",{endAngle:-90,opacity:0});b("Slice",["pie"]).setAll({position:"absolute",isMeasured:!1,x:0,y:0,toggleKey:"active",tooltipText:"{category}: {valuePercentTotal.formatNumber('0.00p')}",
strokeWidth:1,strokeOpacity:1,role:"figure",lineJoin:"round"});b("Slice",["pie"]).states.create("active",{shiftRadius:20,scale:1});b("Slice",["pie"]).states.create("hoverActive",{scale:1.04});b("Slice",["pie"]).states.create("hover",{scale:1.04});b("RadialLabel",["pie"]).setAll({textType:"aligned",radius:10,text:"{category}: {valuePercentTotal.formatNumber('0.00p')}",paddingTop:5,paddingBottom:5,populateText:!0});b("Tick",["pie"]).setAll({location:1});b("SlicedChart").setAll({paddingLeft:10,paddingRight:10,
paddingTop:10,paddingBottom:10});b("FunnelSeries").setAll({startLocation:0,endLocation:1,orientation:"vertical",alignLabels:!0,sequencedInterpolation:!0});b("FunnelSlice").setAll({interactive:!0,expandDistance:0});b("FunnelSlice").states.create("hover",{expandDistance:.15});b("Label",["funnel"]).setAll({populateText:!0,text:"{category}: {valuePercentTotal.formatNumber('0.00p')}",centerY:f.p50});b("Label",["funnel","horizontal"]).setAll({centerX:0,centerY:f.p50,rotation:-90});b("Label",["funnel","vertical"]).setAll({centerY:f.p50,
centerX:0});b("Tick",["funnel"]).setAll({location:1});b("FunnelSlice",["funnel","link"]).setAll({fillOpacity:.5,strokeOpacity:0,expandDistance:-.1});b("FunnelSlice",["funnel","link","vertical"]).setAll({height:10});b("FunnelSlice",["funnel","link","horizontal"]).setAll({width:10});b("PyramidSeries").setAll({valueIs:"area"});b("FunnelSlice",["pyramid","link"]).setAll({fillOpacity:.5});b("FunnelSlice",["pyramid","link","vertical"]).setAll({height:0});b("FunnelSlice",["pyramid","link","horizontal"]).setAll({width:0});
b("FunnelSlice",["pyramid"]).setAll({interactive:!0,expandDistance:0});b("FunnelSlice",["pyramid"]).states.create("hover",{expandDistance:.15});b("Label",["pyramid"]).setAll({populateText:!0,text:"{category}: {valuePercentTotal.formatNumber('0.00p')}",centerY:f.p50});b("Label",["pyramid","horizontal"]).setAll({centerX:0,centerY:f.p50,rotation:-90});b("Label",["pyramid","vertical"]).setAll({centerY:f.p50,centerX:0});b("Tick",["pyramid"]).setAll({location:1});b("FunnelSlice",["pictorial"]).setAll({interactive:!0,
tooltipText:"{category}: {valuePercentTotal.formatNumber('0.00p')}"});b("Label",["pictorial"]).setAll({populateText:!0,text:"{category}: {valuePercentTotal.formatNumber('0.00p')}",centerY:f.p50});b("Label",["pictorial","horizontal"]).setAll({centerX:0,centerY:f.p50,rotation:-90});b("Label",["pictorial","vertical"]).setAll({centerY:f.p50,centerX:0});b("FunnelSlice",["pictorial","link"]).setAll({fillOpacity:.5,width:0,height:0});b("Tick",["pictorial"]).setAll({location:.5});b=b("Graphics",["pictorial",
"background"]);b.setAll({fillOpacity:.2});ja.setColor(b,"fill",a,"alternativeBackground")}}class P extends A.SerialChart{_afterNew(){this._defaultThemes.push(sa.new(this._root));super._afterNew();this.chartContainer.children.push(this.seriesContainer);this.seriesContainer.children.push(this.bulletsContainer)}_processSeries(a){super._processSeries(a);this.seriesContainer.children.moveValue(this.bulletsContainer,this.seriesContainer.children.length-1)}}Object.defineProperty(P,"className",{enumerable:!0,
configurable:!0,writable:!0,value:"PercentChart"});Object.defineProperty(P,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:A.SerialChart.classNames.concat([P.className])});class Q extends A.Series{constructor(){super(...arguments);Object.defineProperty(this,"slicesContainer",{enumerable:!0,configurable:!0,writable:!0,value:this.children.push(f.Container.new(this._root,{position:"absolute",isMeasured:!1}))});Object.defineProperty(this,"labelsContainer",{enumerable:!0,configurable:!0,
writable:!0,value:this.children.push(f.Container.new(this._root,{position:"absolute",isMeasured:!1}))});Object.defineProperty(this,"ticksContainer",{enumerable:!0,configurable:!0,writable:!0,value:this.children.push(f.Container.new(this._root,{position:"absolute",isMeasured:!1}))});Object.defineProperty(this,"_lLabels",{enumerable:!0,configurable:!0,writable:!0,value:[]});Object.defineProperty(this,"_rLabels",{enumerable:!0,configurable:!0,writable:!0,value:[]});Object.defineProperty(this,"_hLabels",
{enumerable:!0,configurable:!0,writable:!0,value:[]});Object.defineProperty(this,"slices",{enumerable:!0,configurable:!0,writable:!0,value:this._makeSlices()});Object.defineProperty(this,"labels",{enumerable:!0,configurable:!0,writable:!0,value:this._makeLabels()});Object.defineProperty(this,"ticks",{enumerable:!0,configurable:!0,writable:!0,value:this._makeTicks()})}makeSlice(a){const b=this.slicesContainer.children.push(this.slices.make());b.on("fill",()=>{this.updateLegendMarker(a)});b.on("stroke",
()=>{this.updateLegendMarker(a)});b._setDataItem(a);a.set("slice",b);this.slices.push(b);return b}makeLabel(a){const b=this.labelsContainer.children.push(this.labels.make());b._setDataItem(a);a.set("label",b);this.labels.push(b);return b}_shouldMakeBullet(a){return null!=a.get("value")?!0:!1}makeTick(a){const b=this.ticksContainer.children.push(this.ticks.make());b._setDataItem(a);a.set("tick",b);this.ticks.push(b);return b}_afterNew(){this.fields.push("category","fill");super._afterNew()}_onDataClear(){const a=
this.get("colors");a&&a.reset()}_prepareChildren(){super._prepareChildren();this._lLabels=[];this._rLabels=[];this._hLabels=[];if(this._valuesDirty){let a=0,b=0,c=0,e=Infinity,d=0;f.each(this._dataItems,g=>{g=g.get("valueWorking",0);a+=g;b+=Math.abs(g)});f.each(this._dataItems,g=>{var h=g.get("valueWorking",0);h>c&&(c=h);h<e&&(e=h);d++;h/=b;0==b&&(h=0);g.setRaw("valuePercentTotal",100*h)});this.setPrivateRaw("valueLow",e);this.setPrivateRaw("valueHigh",c);this.setPrivateRaw("valueSum",a);this.setPrivateRaw("valueAverage",
a/d);this.setPrivateRaw("valueAbsoluteSum",b)}}show(a){const b=Object.create(null,{show:{get:()=>super.show}});return R.__awaiter(this,void 0,void 0,function*(){let c=[];c.push(b.show.call(this,a));c.push(this._sequencedShowHide(!0,a));yield Promise.all(c)})}hide(a){const b=Object.create(null,{hide:{get:()=>super.hide}});return R.__awaiter(this,void 0,void 0,function*(){let c=[];c.push(b.hide.call(this,a));c.push(this._sequencedShowHide(!1,a));yield Promise.all(c)})}_updateChildren(){super._updateChildren();
this._valuesDirty&&f.each(this._dataItems,a=>{a.get("label").text.markDirtyText()});(this.isDirty("legendLabelText")||this.isDirty("legendValueText"))&&f.each(this._dataItems,a=>{this.updateLegendValue(a)});this._arrange()}_arrange(){this._arrangeDown(this._lLabels);this._arrangeUp(this._lLabels);this._arrangeDown(this._rLabels);this._arrangeUp(this._rLabels);this._arrangeLeft(this._hLabels);this._arrangeRight(this._hLabels);f.each(this.dataItems,a=>{this._updateTick(a)})}_afterChanged(){super._afterChanged();
this._arrange()}processDataItem(a){super.processDataItem(a);if(null==a.get("fill")){let b=this.get("colors");b&&a.setRaw("fill",b.next())}}showDataItem(a,b){const c=Object.create(null,{showDataItem:{get:()=>super.showDataItem}});return R.__awaiter(this,void 0,void 0,function*(){const e=[c.showDataItem.call(this,a,b)];f.isNumber(b)||(b=this.get("stateAnimationDuration",0));var d=this.get("stateAnimationEasing");let g=a.get("value");(d=a.animate({key:"valueWorking",to:g,duration:b,easing:d}))&&e.push(d.waitForStop());
(d=a.get("tick"))&&e.push(d.show(b));(d=a.get("label"))&&e.push(d.show(b));(d=a.get("slice"))&&e.push(d.show(b));d.get("active")&&d.states.applyAnimate("active");yield Promise.all(e)})}hideDataItem(a,b){const c=Object.create(null,{hideDataItem:{get:()=>super.hideDataItem}});return R.__awaiter(this,void 0,void 0,function*(){const e=[c.hideDataItem.call(this,a,b)];var d=this.states.create("hidden",{});f.isNumber(b)||(b=d.get("stateAnimationDuration",this.get("stateAnimationDuration",0)));d=d.get("stateAnimationEasing",
this.get("stateAnimationEasing"));(d=a.animate({key:"valueWorking",to:0,duration:b,easing:d}))&&e.push(d.waitForStop());(d=a.get("tick"))&&e.push(d.hide(b));(d=a.get("label"))&&e.push(d.hide(b));d=a.get("slice");d.hideTooltip();d&&e.push(d.hide(b));yield Promise.all(e)})}disposeDataItem(a){super.disposeDataItem(a);var b=a.get("label");b&&(this.labels.removeValue(b),b.dispose());if(b=a.get("tick"))this.ticks.removeValue(b),b.dispose();if(a=a.get("slice"))this.slices.removeValue(a),a.dispose()}hoverDataItem(a){(a=
a.get("slice"))&&!a.isHidden()&&a.hover()}unhoverDataItem(a){(a=a.get("slice"))&&a.unhover()}updateLegendMarker(a){if(a){const b=a.get("slice");if(b&&(a=a.get("legendDataItem"))){const c=a.get("markerRectangle");f.each(f.visualSettings,e=>{null!=b.get(e)&&c.set(e,b.get(e))})}}}_arrangeDown(a){if(a){let b=this._getNextDown();a.sort((c,e)=>c.y>e.y?1:c.y<e.y?-1:0);f.each(a,c=>{const e=c.label.adjustedLocalBounds();let d=e.top;c.y+d<b&&(c.y=b-d);c.label.set("y",c.y);b=c.y+e.bottom})}}_getNextUp(){return this.labelsContainer.maxHeight()}_getNextDown(){return 0}_arrangeUp(a){if(a){let b=
this._getNextUp();a.sort((c,e)=>c.y<e.y?1:c.y>e.y?-1:0);f.each(a,c=>{const e=c.label.adjustedLocalBounds();let d=e.bottom;c.y+d>b&&(c.y=b-d);c.label.set("y",c.y);b=c.y+e.top})}}_arrangeRight(a){if(a){let b=0;a.sort((c,e)=>c.y>e.y?1:c.y<e.y?-1:0);f.each(a,c=>{const e=c.label.adjustedLocalBounds();let d=e.left;c.y+d<b&&(c.y=b-d);c.label.set("x",c.y);b=c.y+e.right})}}_arrangeLeft(a){if(a){let b=this.labelsContainer.maxWidth();a.sort((c,e)=>c.y<e.y?1:c.y>e.y?-1:0);f.each(a,c=>{const e=c.label.adjustedLocalBounds();
let d=e.right;c.y+d>b&&(c.y=b-d);c.label.set("x",c.y);b=c.y+e.left})}}_updateSize(){super._updateSize();this.markDirty()}_updateTick(a){}_dispose(){super._dispose();const a=this.chart;a&&a.series.removeValue(this)}}Object.defineProperty(Q,"className",{enumerable:!0,configurable:!0,writable:!0,value:"PercentSeries"});Object.defineProperty(Q,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:A.Series.classNames.concat([Q.className])});class X extends P{constructor(){super(...arguments);Object.defineProperty(this,
"_maxRadius",{enumerable:!0,configurable:!0,writable:!0,value:1})}_afterNew(){super._afterNew();this.seriesContainer.setAll({x:f.p50,y:f.p50})}_prepareChildren(){super._prepareChildren();var a=this.chartContainer,b=a.innerWidth();const c=a.innerHeight(),e=this.get("startAngle",0),d=this.get("endAngle",0),g=this.get("innerRadius");a=f.getArcBounds(0,0,e,d,1);var h=b/(a.right-a.left);const t=c/(a.bottom-a.top);var k={left:0,right:0,top:0,bottom:0};if(g instanceof f.Percent){let n=g.value;k=Math.min(h,
t);n=Math.max(k*n,k-Math.min(c,b))/k;k=f.getArcBounds(0,0,e,d,n);this.setPrivateRaw("irModifyer",n/g.value)}a=f.mergeBounds([a,k]);b=this._maxRadius;this._maxRadius=Math.min(h,t);h=f.relativeToValue(this.get("radius",0),this._maxRadius);this.seriesContainer.setAll({dy:-h*(a.bottom+a.top)/2,dx:-h*(a.right+a.left)/2});(this.isDirty("startAngle")||this.isDirty("endAngle")||b!=this._maxRadius)&&this.series.each(n=>{n._markDirtyKey("startAngle")});(this.isDirty("innerRadius")||this.isDirty("radius"))&&
this.series.each(n=>{n._markDirtyKey("innerRadius")})}radius(a){let b=f.relativeToValue(this.get("radius",0),this._maxRadius),c=f.relativeToValue(this.get("innerRadius",0),b);if(a){let e=this.series.indexOf(a),d=this.series.length;a=a.get("radius");return null!=a?c+f.relativeToValue(a,b-c):c+(b-c)/d*(e+1)}return b}innerRadius(a){const b=this.radius();let c=f.relativeToValue(this.get("innerRadius",0),b);0>c&&(c=b+c);if(a){let e=this.series.indexOf(a),d=this.series.length;a=a.get("innerRadius");return null!=
a?c+f.relativeToValue(a,b-c):c+(b-c)/d*e}return c}}Object.defineProperty(X,"className",{enumerable:!0,configurable:!0,writable:!0,value:"PieChart"});Object.defineProperty(X,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:P.classNames.concat([X.className])});class Y extends Q{_makeSlices(){return new f.ListTemplate(f.Template.new({}),()=>W._new(this._root,{themeTags:f.mergeTags(this.slices.template.get("themeTags",[]),["pie","series"])},[this.slices.template]))}_makeLabels(){return new f.ListTemplate(f.Template.new({}),
()=>V._new(this._root,{themeTags:f.mergeTags(this.labels.template.get("themeTags",[]),["pie","series"])},[this.labels.template]))}_makeTicks(){return new f.ListTemplate(f.Template.new({}),()=>A.Tick._new(this._root,{themeTags:f.mergeTags(this.ticks.template.get("themeTags",[]),["pie","series"])},[this.ticks.template]))}processDataItem(a){super.processDataItem(a);const b=this.makeSlice(a);b.on("scale",()=>{this._updateTick(a)});b.on("shiftRadius",()=>{this._updateTick(a)});b.events.on("positionchanged",
()=>{this._updateTick(a)});const c=this.makeLabel(a);c.events.on("positionchanged",()=>{this._updateTick(a)});this.makeTick(a);b.events.on("positionchanged",()=>{c.markDirty()})}_getNextUp(){const a=this.chart;return a?a._maxRadius:this.labelsContainer.maxHeight()/2}_getNextDown(){const a=this.chart;return a?-a._maxRadius:-this.labelsContainer.maxHeight()/2}_prepareChildren(){super._prepareChildren();const a=this.chart;if(a){if(this.isDirty("alignLabels")){var b=this.labels.template;if(this.get("alignLabels"))b.set("textType",
"aligned");else{let c=b.get("textType");null!=c&&"aligned"!=c||b.set("textType","adjusted")}}if(this._valuesDirty||this.isDirty("radius")||this.isDirty("innerRadius")||this.isDirty("startAngle")||this.isDirty("endAngle")||this.isDirty("alignLabels")){this.markDirtyBounds();b=this.get("startAngle",a.get("startAngle",-90));const c=this.get("endAngle",a.get("endAngle",270))-b;let e=b;const d=a.radius(this);this.setPrivateRaw("radius",d);let g=a.innerRadius(this)*a.getPrivate("irModifyer",1);0>g&&(g=
d+g);f.each(this._dataItems,h=>{this.updateLegendValue(h);let t=c*h.get("valuePercentTotal")/100;var k=h.get("slice");if(k){k.set("radius",d);k.set("innerRadius",g);k.set("startAngle",e);k.set("arc",t);var n=h.get("fill");k._setDefault("fill",n);k._setDefault("stroke",n)}k=f.normalizeAngle(e+t/2);if(n=h.get("label"))if(n.setPrivate("radius",d),n.setPrivate("innerRadius",g),n.set("labelAngle",k),"aligned"==n.get("textType")){let l=d+n.get("radius",0),p=d*f.sin(k);90<k&&270>=k?(n.isHidden()||n.isHiding()||
this._lLabels.push({label:n,y:p}),l=-1*l-this.labelsContainer.get("paddingLeft",0),n.set("centerX",f.p100),n.setPrivateRaw("left",!0)):(n.isHidden()||n.isHiding()||this._rLabels.push({label:n,y:p}),l+=this.labelsContainer.get("paddingRight",0),n.set("centerX",0),n.setPrivateRaw("left",!1));n.set("x",l);n.set("y",d*f.sin(k))}e+=t;this._updateTick(h)})}}}_updateTick(a){const b=a.get("tick"),c=a.get("label");a=a.get("slice");var e=b.get("location",1);if(b&&c&&a){e*=(a.get("shiftRadius",0)+a.get("radius",
0))*a.get("scale",1);var d=c.get("labelAngle",0);const k=f.cos(d);d=f.sin(d);var g=this.labelsContainer;const n=g.get("paddingLeft",0);var h=g.get("paddingRight",0),t=g=0;g=c.x();t=c.y();if("circular"==c.get("textType")){t=c.radius()-c.get("paddingBottom",0);const l=c.get("labelAngle",0);g=t*f.cos(l);t*=f.sin(l)}h=-h;c.getPrivate("left")&&(h=n);b.set("points",[{x:a.x()+e*k,y:a.y()+e*d},{x:g+h,y:t},{x:g,y:t}])}}_positionBullet(a){const b=a.get("sprite");if(b){var c=b.dataItem.get("slice");if(c){var e=
c.get("innerRadius",0);const g=c.get("radius",0);var d=c.get("startAngle",0);c=c.get("arc",0);const h=a.get("locationX",.5);a=a.get("locationY",.5);d+=c*h;e+=(g-e)*a;b.setAll({x:f.cos(d)*e,y:f.sin(d)*e})}}}}Object.defineProperty(Y,"className",{enumerable:!0,configurable:!0,writable:!0,value:"PieSeries"});Object.defineProperty(Y,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:Q.classNames.concat([Y.className])});Z.PieChartAm5=X;Z.PieSeriesAm5=Y;Object.defineProperty(Z,Symbol.toStringTag,
{value:"Module"})});