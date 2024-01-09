import{_ as t,o as s,a as e,b as i,z as r,C as a,a0 as h,y as n,i as o,t as g,v as l,x as d,k as c,p as f,r as p,h as u,w as y}from"./index.1704809839420.js";const m={name:"dragVerify",props:{isPassing:{type:Boolean,default:!1},width:{type:Number,default:250},height:{type:Number,default:40},text:{type:String,default:"swiping to the right side"},successText:{type:String,default:"success"},background:{type:String,default:"#eee"},progressBarBg:{type:String,default:"#76c61d"},completedBg:{type:String,default:"#76c61d"},circle:{type:Boolean,default:!1},radius:{type:String,default:"4px"},handlerIcon:{type:String},successIcon:{type:String},handlerBg:{type:String,default:"#fff"},textSize:{type:String,default:"14px"},textColor:{type:String,default:"#333"}},mounted:function(){const t=this.$refs.dragVerify;t.style.setProperty("--textColor",this.textColor),t.style.setProperty("--width",Math.floor(this.width/2)+"px"),t.style.setProperty("--pwidth",-Math.floor(this.width/2)+"px"),console.log(this.$slots)},computed:{handlerStyle:function(){return{width:this.height+"px",height:this.height+"px",background:this.handlerBg}},message:function(){return this.isPassing?this.successText:this.text},dragVerifyStyle:function(){return{width:this.width+"px",height:this.height+"px",lineHeight:this.height+"px",background:this.background,borderRadius:this.circle?this.height/2+"px":this.radius}},progressBarStyle:function(){return{background:this.progressBarBg,height:this.height+"px",borderRadius:this.circle?this.height/2+"px 0 0 "+this.height/2+"px":this.radius}},textStyle:function(){return{height:this.height+"px",width:this.width+"px",fontSize:this.textSize}}},data:()=>({isMoving:!1,x:0,isOk:!1}),methods:{dragStart:function(t){this.isPassing||(this.isMoving=!0,this.x=t.pageX||t.touches[0].pageX),this.$emit("handlerMove")},dragMoving:function(t){if(this.isMoving&&!this.isPassing){var s=(t.pageX||t.touches[0].pageX)-this.x,e=this.$refs.handler;s>0&&s<=this.width-this.height?(e.style.left=s+"px",this.$refs.progressBar.style.width=s+this.height/2+"px"):s>this.width-this.height&&(e.style.left=this.width-this.height+"px",this.$refs.progressBar.style.width=this.width-this.height/2+"px",this.passVerify())}},dragFinish:function(t){if(this.isMoving&&!this.isPassing){if((t.pageX||t.changedTouches[0].pageX)-this.x<this.width-this.height){this.isOk=!0;var s=this;setTimeout((function(){s.$refs.handler.style.left="0",s.$refs.progressBar.style.width="0",s.isOk=!1}),500),this.$emit("passfail")}else{this.$refs.handler.style.left=this.width-this.height+"px",this.$refs.progressBar.style.width=this.width-this.height/2+"px",this.passVerify()}this.isMoving=!1}},passVerify:function(){this.$emit("update:isPassing",!0),this.isMoving=!1,this.$refs.handler.children[0].className=this.successIcon,this.$refs.progressBar.style.background=this.completedBg,this.$refs.message.style["-webkit-text-fill-color"]="unset",this.$refs.message.style.animation="slidetounlock2 3s infinite",this.$refs.message.style.color="#fff",this.$emit("passcallback")},reset:function(){const t=this.$options.data();for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(this[i]=t[i]);var s=this.$refs.handler,e=this.$refs.message;s.style.left="0",this.$refs.progressBar.style.width="0",s.children[0].className=this.handlerIcon,e.style["-webkit-text-fill-color"]="transparent",e.style.animation="slidetounlock 3s infinite",e.style.color=this.background}}};const v={name:"dragVerify",props:{isPassing:{type:Boolean,default:!1},width:{type:Number,default:250},height:{type:Number,default:40},text:{type:String,default:"swiping to the right side"},successText:{type:String,default:"success"},background:{type:String,default:"#eee"},progressBarBg:{type:String,default:"#76c61d"},completedBg:{type:String,default:"#76c61d"},circle:{type:Boolean,default:!1},radius:{type:String,default:"4px"},handlerIcon:{type:String},successIcon:{type:String},handlerBg:{type:String,default:"#fff"},textSize:{type:String,default:"14px"},textColor:{type:String,default:"#333"},imgsrc:{type:String},barWidth:{type:Number,default:70},barHeight:{type:Number,default:40},barRadius:{type:Number,default:2},showRefresh:{type:Boolean,default:!1},refreshIcon:{type:String},showTips:{type:Boolean,default:!0},successTip:{type:String,default:"验证通过，超过80%用户"},failTip:{type:String,default:"验证未通过，拖动滑块将悬浮图像正确合并"},diffWidth:{type:Number,default:20}},mounted:function(){const t=this.$refs.dragVerify;t.style.setProperty("--textColor",this.textColor),t.style.setProperty("--width",Math.floor(this.width/2)+"px"),t.style.setProperty("--pwidth",-Math.floor(this.width/2)+"px")},computed:{handlerStyle:function(){return{width:this.height+"px",height:this.height+"px",background:this.handlerBg}},message:function(){return this.isPassing?"":this.text},successMessage:function(){return this.isPassing?this.successText:""},dragVerifyStyle:function(){return console.log(this.width,"width"),{width:this.width+"px",height:this.height+"px",lineHeight:this.height+"px",background:this.background,borderRadius:this.circle?this.height/2+"px":this.radius}},dragVerifyImgStyle:function(){return{width:this.width+"px",position:"relative",overflow:"hidden"}},progressBarStyle:function(){return{background:this.progressBarBg,height:this.height+"px",borderRadius:this.circle?this.height/2+"px 0 0 "+this.height/2+"px":this.radius}},textStyle:function(){return{height:this.height+"px",width:this.width+"px",fontSize:this.textSize}}},data:()=>({isMoving:!1,x:0,isOk:!1,isKeep:!1,movebarStyle:{},clipbarStyle:{},showBar:!1,clipBarx:0,showErrorTip:!1}),methods:{checkimgLoaded:function(){var t=this.barWidth,s=this.barHeight,e=this.$refs.checkImg.height,i=Math.floor(this.width/2),r=i+Math.ceil(Math.random()*(i-t)),a=25+Math.floor(Math.random()*(e-s-25-20));this.clipbarStyle={width:t+"px",height:s+"px",top:a+"px",left:r+"px","border-radius":this.barRadius+"px"},this.clipBarx=r;var h=this.imgsrc,n=this.width;this.movebarStyle={background:`url(${h})`,"background-position":`-${r}px -${a}px`,"background-size":`${n}px`,width:t+"px",height:s+"px",top:a+"px","border-radius":this.barRadius+"px"}},dragStart:function(t){this.isPassing||(this.isMoving=!0,this.x=t.pageX||t.touches[0].pageX),this.showBar=!0,this.showErrorTip=!1,this.$emit("handlerMove")},dragMoving:function(t){if(this.isMoving&&!this.isPassing){var s=(t.pageX||t.touches[0].pageX)-this.x;this.$refs.handler.style.left=s+"px",this.$refs.progressBar.style.width=s+this.height/2+"px",this.$refs.moveBar.style.left=s+"px"}},dragFinish:function(t){if(this.isMoving&&!this.isPassing){var s=(t.pageX||t.changedTouches[0].pageX)-this.x;if(Math.abs(s-this.clipBarx)>this.diffWidth){this.isOk=!0;var e=this;setTimeout((function(){e.$refs.handler.style.left="0",e.$refs.progressBar.style.width="0",e.$refs.moveBar.style.left="0",e.isOk=!1}),500),this.showErrorTip=!0,this.$emit("passfail")}else this.passVerify();this.isMoving=!1}},passVerify:function(){this.$emit("update:isPassing",!0),this.isMoving=!1,this.$refs.handler.children[0].className=this.successIcon,this.$refs.progressBar.style.background=this.completedBg,this.$refs.message.style["-webkit-text-fill-color"]="unset",this.$refs.message.style.animation="slidetounlock2 3s infinite",this.$refs.progressBar.style.color="#fff",this.$refs.progressBar.style.fontSize=this.textSize,this.isKeep=!0,setTimeout((()=>{this.$refs.moveBar.style.left=this.clipBarx+"px",setTimeout((()=>{this.isKeep=!1}),200)}),100),this.$emit("passcallback")},reset:function(){this.reImg(),this.checkimgLoaded()},reImg:function(){this.$emit("update:isPassing",!1);const t=this.$options.data();for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(this[i]=t[i]);var s=this.$refs.handler,e=this.$refs.message;s.style.left="0",this.$refs.progressBar.style.width="0",s.children[0].className=this.handlerIcon,e.style["-webkit-text-fill-color"]="transparent",e.style.animation="slidetounlock 3s infinite",e.style.color=this.background},refreshimg:function(){this.$emit("refresh")}},watch:{imgsrc:{immediate:!1,handler:function(){this.reImg()}}}},x={class:"drag-verify-container"},w=["src"],S={key:0,class:"refresh"},b={key:1,class:"tips success"},k={key:2,class:"tips danger"};const $={name:"dragVerifyImgChip",props:{isPassing:{type:Boolean,default:!1},width:{type:Number,default:250},height:{type:Number,default:40},text:{type:String,default:"swiping to the right side"},successText:{type:String,default:"success"},background:{type:String,default:"#eee"},progressBarBg:{type:String,default:"#76c61d"},completedBg:{type:String,default:"#76c61d"},circle:{type:Boolean,default:!1},radius:{type:String,default:"4px"},handlerIcon:{type:String},successIcon:{type:String},handlerBg:{type:String,default:"#fff"},textSize:{type:String,default:"14px"},textColor:{type:String,default:"#333"},imgsrc:{type:String},barWidth:{type:Number,default:40},barRadius:{type:Number,default:8},showRefresh:{type:Boolean,default:!1},refreshIcon:{type:String},showTips:{type:Boolean,default:!0},successTip:{type:String,default:"验证通过，超过80%用户"},failTip:{type:String,default:"验证未通过，拖动滑块将悬浮图像正确合并"},diffWidth:{type:Number,default:20}},mounted:function(){const t=this.$refs.dragVerify;t.style.setProperty("--textColor",this.textColor),t.style.setProperty("--width",Math.floor(this.width/2)+"px"),t.style.setProperty("--pwidth",-Math.floor(this.width/2)+"px")},computed:{handlerStyle:function(){return{width:this.height+"px",height:this.height+"px",background:this.handlerBg}},message:function(){return this.isPassing?"":this.text},successMessage:function(){return this.isPassing?this.successText:""},dragVerifyStyle:function(){return{width:this.width+"px",height:this.height+"px",lineHeight:this.height+"px",background:this.background,borderRadius:this.circle?this.height/2+"px":this.radius}},dragVerifyImgStyle:function(){return{width:this.width+"px",position:"relative",overflow:"hidden"}},progressBarStyle:function(){return{background:this.progressBarBg,height:this.height+"px",borderRadius:this.circle?this.height/2+"px 0 0 "+this.height/2+"px":this.radius}},textStyle:function(){return{height:this.height+"px",width:this.width+"px",fontSize:this.textSize}}},data:()=>({isMoving:!1,x:0,isOk:!1,isKeep:!1,clipBarx:0,showErrorTip:!1}),methods:{draw:function(t,s,e,i){var r=this.barWidth,a=this.barRadius;const h=Math.PI;t.beginPath(),t.moveTo(s,e),t.arc(s+r/2,e-a+2,a,.72*h,2.26*h),t.lineTo(s+r,e),t.arc(s+r+a-2,e+r/2,a,1.21*h,2.78*h),t.lineTo(s+r,e+r),t.lineTo(s,e+r),t.arc(s+a-2,e+r/2,a+.4,2.76*h,1.24*h,!0),t.lineTo(s,e),t.lineWidth=2,t.fillStyle="rgba(255, 255, 255, 0.8)",t.strokeStyle="rgba(255, 255, 255, 0.8)",t.stroke(),t[i](),t.globalCompositeOperation="destination-over"},checkimgLoaded:function(){var t=this.barWidth,s=this.$refs.checkImg.height,e=this.$refs.checkImg.width,i=Math.floor(this.width/2),r=i+Math.ceil(Math.random()*(i-t-this.barRadius-5)),a=25+Math.floor(Math.random()*(s-t-25-20));this.$refs.maincanvas.setAttribute("width",e),this.$refs.maincanvas.setAttribute("height",s),this.$refs.maincanvas.style.display="block";var h=this.$refs.maincanvas.getContext("2d");this.draw(h,r,a,"fill"),this.clipBarx=r;var n=this.$refs.movecanvas;n.setAttribute("width",e),n.setAttribute("height",s),this.$refs.movecanvas.style.display="block";const o=t+2*this.barRadius+3;var g=this.$refs.movecanvas.getContext("2d");g.clearRect(0,0,e,s),this.draw(g,r,a,"clip"),g.drawImage(this.$refs.checkImg,0,0,e,s);a=a-2*this.barRadius-1;const l=g.getImageData(r,a,o,o);n.setAttribute("width",o),n.setAttribute("height",s),g.putImageData(l,0,a)},dragStart:function(t){this.isPassing||(this.isMoving=!0,this.x=t.pageX||t.touches[0].pageX),this.showBar=!0,this.showErrorTip=!1,this.$emit("handlerMove")},dragMoving:function(t){if(this.isMoving&&!this.isPassing){var s=(t.pageX||t.touches[0].pageX)-this.x;this.$refs.handler.style.left=s+"px",this.$refs.progressBar.style.width=s+this.height/2+"px",this.$refs.movecanvas.style.left=s+"px"}},dragFinish:function(t){if(this.isMoving&&!this.isPassing){var s=(t.pageX||t.changedTouches[0].pageX)-this.x;if(Math.abs(s-this.clipBarx)>this.diffWidth){this.isOk=!0;var e=this;setTimeout((function(){e.$refs.handler.style.left="0",e.$refs.progressBar.style.width="0",e.$refs.movecanvas.style.left="0",e.isOk=!1}),500),this.$emit("passfail"),this.showErrorTip=!0}else this.passVerify();this.isMoving=!1}},passVerify:function(){this.$emit("update:isPassing",!0),this.isMoving=!1,this.$refs.handler.children[0].className=this.successIcon,this.$refs.progressBar.style.background=this.completedBg,this.$refs.message.style["-webkit-text-fill-color"]="unset",this.$refs.message.style.animation="slidetounlock2 3s infinite",this.$refs.progressBar.style.color="#fff",this.$refs.progressBar.style.fontSize=this.textSize,this.isKeep=!0,setTimeout((()=>{this.$refs.movecanvas.style.left=this.clipBarx+"px",setTimeout((()=>{this.isKeep=!1,this.$refs.maincanvas.style.display="none",this.$refs.movecanvas.style.display="none"}),200)}),100),this.$emit("passcallback")},reset:function(){this.reImg(),this.checkimgLoaded()},reImg:function(){this.$emit("update:isPassing",!1);const t=this.$options.data();for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(this[i]=t[i]);var s=this.$refs.handler,e=this.$refs.message;s.style.left="0",this.$refs.progressBar.style.width="0",s.children[0].className=this.handlerIcon,e.style["-webkit-text-fill-color"]="transparent",e.style.animation="slidetounlock 3s infinite",e.style.color=this.background,this.$refs.movecanvas.style.left="0px"},refreshimg:function(){this.$emit("refresh")}},watch:{imgsrc:{immediate:!1,handler:function(){this.reImg()}}}},B={class:"drag-verify-container"},M=["src"],T={ref:"maincanvas",class:"main-canvas"},P={key:0,class:"refresh"},I={key:1,class:"tips success"},V={key:2,class:"tips danger"};const F={name:"dragVerify",props:{isPassing:{type:Boolean,default:!1},width:{type:Number,default:250},height:{type:Number,default:40},text:{type:String,default:"swiping to the right side"},successText:{type:String,default:"success"},background:{type:String,default:"#eee"},progressBarBg:{type:String,default:"#76c61d"},completedBg:{type:String,default:"#76c61d"},circle:{type:Boolean,default:!1},radius:{type:String,default:"4px"},handlerIcon:{type:String},successIcon:{type:String},handlerBg:{type:String,default:"#fff"},textSize:{type:String,default:"14px"},textColor:{type:String,default:"#333"},imgsrc:{type:String},showTips:{type:Boolean,default:!0},successTip:{type:String,default:"验证通过"},failTip:{type:String,default:"验证失败"},diffDegree:{type:Number,default:10},minDegree:{type:Number,default:90},maxDegree:{type:Number,default:270}},mounted:function(){const t=this.$refs.dragVerify;t.style.setProperty("--textColor",this.textColor),t.style.setProperty("--width",Math.floor(this.width/2)+"px"),t.style.setProperty("--pwidth",-Math.floor(this.width/2)+"px")},computed:{handlerStyle:function(){return{width:this.height+"px",height:this.height+"px",background:this.handlerBg}},message:function(){return this.isPassing?"":this.text},successMessage:function(){return this.isPassing?this.successText:""},dragVerifyStyle:function(){return{width:this.width+"px",height:this.height+"px",lineHeight:this.height+"px",background:this.background,borderRadius:this.circle?this.height/2+"px":this.radius}},dragVerifyImgStyle:function(){return{width:this.width+"px",height:this.width+"px",position:"relative",overflow:"hidden","border-radius":"50%"}},progressBarStyle:function(){return{background:this.progressBarBg,height:this.height+"px",borderRadius:this.circle?this.height/2+"px 0 0 "+this.height/2+"px":this.radius}},textStyle:function(){return{height:this.height+"px",width:this.width+"px",fontSize:this.textSize}},factor:function(){return this.minDegree==this.maxDegree?Math.floor(1+6*Math.random())/10+1:1}},data:()=>({isMoving:!1,x:0,isOk:!1,showBar:!1,showErrorTip:!1,ranRotate:0,cRotate:0,imgStyle:{}}),methods:{checkimgLoaded:function(){var t=this.minDegree,s=this.maxDegree,e=Math.floor(t+Math.random()*(s-t));this.ranRotate=e,this.imgStyle={transform:`rotateZ(${e}deg)`}},dragStart:function(t){this.isPassing||(this.isMoving=!0,this.x=t.pageX||t.touches[0].pageX),this.showBar=!0,this.showErrorTip=!1,this.$emit("handlerMove")},dragMoving:function(t){if(this.isMoving&&!this.isPassing){var s=(t.pageX||t.touches[0].pageX)-this.x;console.log(s,"_x"),this.$refs.handler.style.left=s+"px",this.$refs.progressBar.style.width=s+this.height/2+"px";var e=Math.ceil(s/(this.width-this.height)*this.maxDegree*this.factor);console.log(e,"cRotate"),this.cRotate=e;var i=this.ranRotate-e;this.imgStyle={transform:`rotateZ(${i}deg)`}}},dragFinish:function(t){if(this.isMoving&&!this.isPassing){if(Math.abs(this.ranRotate-this.cRotate)>this.diffDegree){this.isOk=!0,this.imgStyle={transform:`rotateZ(${this.ranRotate}deg)`};var s=this;setTimeout((function(){s.$refs.handler.style.left="0",s.$refs.progressBar.style.width="0",s.isOk=!1}),500),this.showErrorTip=!0,this.$emit("passfail")}else this.passVerify();this.isMoving=!1}},passVerify:function(){this.$emit("update:isPassing",!0),this.isMoving=!1,this.$refs.handler.children[0].className=this.successIcon,this.$refs.progressBar.style.background=this.completedBg,this.$refs.message.style["-webkit-text-fill-color"]="unset",this.$refs.message.style.animation="slidetounlock2 3s infinite",this.$refs.progressBar.style.color="#fff",this.$refs.progressBar.style.fontSize=this.textSize,this.$emit("passcallback")},reset:function(){this.reImg(),this.checkimgLoaded()},reImg:function(){this.$emit("update:isPassing",!1);const t=this.$options.data();for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(this[i]=t[i]);var s=this.$refs.handler,e=this.$refs.message;s.style.left="0",this.$refs.progressBar.style.width="0",s.children[0].className=this.handlerIcon,e.style["-webkit-text-fill-color"]="transparent",e.style.animation="slidetounlock 3s infinite",e.style.color=this.background},refreshimg:function(){this.$emit("refresh")}},watch:{imgsrc:{immediate:!1,handler:function(){this.reImg()}}}},_={class:"drag-verify-container"},O=["src"],R={key:0,class:"tips success"},N={key:1,class:"tips danger"};const X={class:"dragVerify-container"};const C=t({name:"funDragVerify",components:{DragVerify:t(m,[["render",function(t,l,d,c,f,p){return s(),e("div",{ref:"dragVerify",class:"drag_verify",style:a(p.dragVerifyStyle),onMousemove:l[2]||(l[2]=(...t)=>p.dragMoving&&p.dragMoving(...t)),onMouseup:l[3]||(l[3]=(...t)=>p.dragFinish&&p.dragFinish(...t)),onMouseleave:l[4]||(l[4]=(...t)=>p.dragFinish&&p.dragFinish(...t)),onTouchmove:l[5]||(l[5]=(...t)=>p.dragMoving&&p.dragMoving(...t)),onTouchend:l[6]||(l[6]=(...t)=>p.dragFinish&&p.dragFinish(...t))},[i("div",{class:r(["dv_progress_bar",{goFirst2:f.isOk}]),ref:"progressBar",style:a(p.progressBarStyle)},null,6),i("div",{class:"dv_text",style:a(p.textStyle),ref:"message"},[t.$slots.textBefore?h(t.$slots,"textBefore",{key:0},void 0,!0):n("",!0),o(" "+g(p.message)+" ",1),t.$slots.textAfter?h(t.$slots,"textAfter",{key:1},void 0,!0):n("",!0)],4),i("div",{class:r(["dv_handler dv_handler_bg",{goFirst:f.isOk}]),onMousedown:l[0]||(l[0]=(...t)=>p.dragStart&&p.dragStart(...t)),onTouchstart:l[1]||(l[1]=(...t)=>p.dragStart&&p.dragStart(...t)),ref:"handler",style:a(p.handlerStyle)},[i("i",{class:r(d.handlerIcon)},null,2)],38)],36)}],["__scopeId","data-v-495af628"]]),DragVerifyImg:t(v,[["render",function(t,h,o,c,f,p){return s(),e("div",x,[i("div",{style:a(p.dragVerifyImgStyle)},[i("img",{ref:"checkImg",src:o.imgsrc,onLoad:h[0]||(h[0]=(...t)=>p.checkimgLoaded&&p.checkimgLoaded(...t)),style:{width:"100%"},alt:""},null,40,w),l(i("div",{class:r(["move-bar",{goFirst:f.isOk,goKeep:f.isKeep}]),style:a(f.movebarStyle),ref:"moveBar"},null,6),[[d,f.showBar]]),i("div",{class:"clip-bar",style:a(f.clipbarStyle),ref:"clipBar"},null,4),o.showRefresh&&!o.isPassing?(s(),e("div",S,[i("i",{class:r(o.refreshIcon),onClick:h[1]||(h[1]=(...t)=>p.refreshimg&&p.refreshimg(...t))},null,2)])):n("",!0),o.showTips&&o.isPassing?(s(),e("div",b,g(o.successTip),1)):n("",!0),o.showTips&&!o.isPassing&&f.showErrorTip?(s(),e("div",k,g(o.failTip),1)):n("",!0)],4),i("div",{ref:"dragVerify",class:"drag_verify",style:a(p.dragVerifyStyle),onMousemove:h[4]||(h[4]=(...t)=>p.dragMoving&&p.dragMoving(...t)),onMouseup:h[5]||(h[5]=(...t)=>p.dragFinish&&p.dragFinish(...t)),onMouseleave:h[6]||(h[6]=(...t)=>p.dragFinish&&p.dragFinish(...t)),onTouchmove:h[7]||(h[7]=(...t)=>p.dragMoving&&p.dragMoving(...t)),onTouchend:h[8]||(h[8]=(...t)=>p.dragFinish&&p.dragFinish(...t))},[i("div",{class:r(["dv_progress_bar",{goFirst2:f.isOk}]),ref:"progressBar",style:a(p.progressBarStyle)},g(p.successMessage),7),i("div",{class:"dv_text",style:a(p.textStyle),ref:"message"},g(p.message),5),i("div",{class:r(["dv_handler dv_handler_bg",{goFirst:f.isOk}]),onMousedown:h[2]||(h[2]=(...t)=>p.dragStart&&p.dragStart(...t)),onTouchstart:h[3]||(h[3]=(...t)=>p.dragStart&&p.dragStart(...t)),ref:"handler",style:a(p.handlerStyle)},[i("i",{class:r(o.handlerIcon)},null,2)],38)],36)])}],["__scopeId","data-v-3cc93469"]]),DragVerifyImgChip:t($,[["render",function(t,h,o,l,d,c){return s(),e("div",B,[i("div",{style:a(c.dragVerifyImgStyle)},[i("img",{ref:"checkImg",crossOrigin:"anonymous",src:o.imgsrc,onLoad:h[0]||(h[0]=(...t)=>c.checkimgLoaded&&c.checkimgLoaded(...t)),style:{width:"100%"},alt:""},null,40,M),i("canvas",T,null,512),i("canvas",{ref:"movecanvas",class:r([{goFirst:d.isOk,goKeep:d.isKeep},"move-canvas"])},null,2),o.showRefresh&&!o.isPassing?(s(),e("div",P,[i("i",{class:r(o.refreshIcon),onClick:h[1]||(h[1]=(...t)=>c.refreshimg&&c.refreshimg(...t))},null,2)])):n("",!0),o.showTips&&o.isPassing?(s(),e("div",I,g(o.successTip),1)):n("",!0),o.showTips&&!o.isPassing&&d.showErrorTip?(s(),e("div",V,g(o.failTip),1)):n("",!0)],4),i("div",{ref:"dragVerify",class:"drag_verify",style:a(c.dragVerifyStyle),onMousemove:h[4]||(h[4]=(...t)=>c.dragMoving&&c.dragMoving(...t)),onMouseup:h[5]||(h[5]=(...t)=>c.dragFinish&&c.dragFinish(...t)),onMouseleave:h[6]||(h[6]=(...t)=>c.dragFinish&&c.dragFinish(...t)),onTouchmove:h[7]||(h[7]=(...t)=>c.dragMoving&&c.dragMoving(...t)),onTouchend:h[8]||(h[8]=(...t)=>c.dragFinish&&c.dragFinish(...t))},[i("div",{class:r(["dv_progress_bar",{goFirst2:d.isOk}]),ref:"progressBar",style:a(c.progressBarStyle)},g(c.successMessage),7),i("div",{class:"dv_text",style:a(c.textStyle),ref:"message"},g(c.message),5),i("div",{class:r(["dv_handler dv_handler_bg",{goFirst:d.isOk}]),onMousedown:h[2]||(h[2]=(...t)=>c.dragStart&&c.dragStart(...t)),onTouchstart:h[3]||(h[3]=(...t)=>c.dragStart&&c.dragStart(...t)),ref:"handler",style:a(c.handlerStyle)},[i("i",{class:r(o.handlerIcon)},null,2)],38)],36)])}],["__scopeId","data-v-30ca048b"]]),DragVerifyImgRotate:t(F,[["render",function(t,h,o,l,d,c){return s(),e("div",_,[i("div",{style:a(c.dragVerifyImgStyle)},[i("img",{ref:"checkImg",src:o.imgsrc,class:r(["check-img",{goOrigin:d.isOk}]),onLoad:h[0]||(h[0]=(...t)=>c.checkimgLoaded&&c.checkimgLoaded(...t)),style:a(d.imgStyle),alt:""},null,46,O),o.showTips&&o.isPassing?(s(),e("div",R,g(o.successTip),1)):n("",!0),o.showTips&&!o.isPassing&&d.showErrorTip?(s(),e("div",N,g(o.failTip),1)):n("",!0)],4),i("div",{ref:"dragVerify",class:"drag_verify",style:a(c.dragVerifyStyle),onMousemove:h[3]||(h[3]=(...t)=>c.dragMoving&&c.dragMoving(...t)),onMouseup:h[4]||(h[4]=(...t)=>c.dragFinish&&c.dragFinish(...t)),onMouseleave:h[5]||(h[5]=(...t)=>c.dragFinish&&c.dragFinish(...t)),onTouchmove:h[6]||(h[6]=(...t)=>c.dragMoving&&c.dragMoving(...t)),onTouchend:h[7]||(h[7]=(...t)=>c.dragFinish&&c.dragFinish(...t))},[i("div",{class:r(["dv_progress_bar",{goFirst2:d.isOk}]),ref:"progressBar",style:a(c.progressBarStyle)},g(c.successMessage),7),i("div",{class:"dv_text",style:a(c.textStyle),ref:"message"},g(c.message),5),i("div",{class:r(["dv_handler dv_handler_bg",{goFirst:d.isOk}]),onMousedown:h[1]||(h[1]=(...t)=>c.dragStart&&c.dragStart(...t)),onTouchstart:h[2]||(h[2]=(...t)=>c.dragStart&&c.dragStart(...t)),ref:"handler",style:a(c.handlerStyle)},[i("i",{class:r(o.handlerIcon)},null,2)],38)],36)])}],["__scopeId","data-v-24da9398"]])},setup(){const t=c({isPassingOne:!1,isPassingTwo:!1,isPassingThree:!1,isPassingFour:!1,imgTwo:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1813762643,1914315241&fm=26&gp=0.jpg",imgThree:"https://img1.baidu.com/it/u=2813520958,2218166536&fm=26&fmt=auto&gp=0.jpg"});return{...f(t)}}},[["render",function(t,i,r,a,h,n){const o=p("el-alert"),g=p("DragVerify"),l=p("el-card"),d=p("DragVerifyImg"),c=p("DragVerifyImgChip"),f=p("DragVerifyImgRotate");return s(),e("div",X,[u(l,{shadow:"hover",header:"验证器：基本滑块验证组件"},{default:y((()=>[u(o,{title:"感谢优秀的 `vue-drag-verify`，项目地址：https://github.com/yimijianfang/vue-drag-verify",type:"success",closable:!1,class:"mb15"}),u(g,{isPassing:t.isPassingOne,"onUpdate:isPassing":i[0]||(i[0]=s=>t.isPassingOne=s),text:"请按住滑块拖动",successText:"验证通过",handlerIcon:"el-icon-d-arrow-right",successIcon:"el-icon-circle-check"},null,8,["isPassing"])])),_:1}),u(l,{shadow:"hover",header:"验证器：图片滑块组件",class:"mt15"},{default:y((()=>[u(o,{title:"感谢优秀的 `vue-drag-verify`，项目地址：https://github.com/yimijianfang/vue-drag-verify",type:"success",closable:!1,class:"mb15"}),u(d,{imgsrc:t.imgTwo,isPassing:t.isPassingTwo,"onUpdate:isPassing":i[1]||(i[1]=s=>t.isPassingTwo=s),showRefresh:!0,text:"请按住滑块拖动",successText:"验证通过",handlerIcon:"el-icon-d-arrow-right",successIcon:"el-icon-circle-check"},null,8,["imgsrc","isPassing"])])),_:1}),u(l,{shadow:"hover",header:"验证器：图片滑块组件(拼图)",class:"mt15"},{default:y((()=>[u(o,{title:"感谢优秀的 `vue-drag-verify`，项目地址：https://github.com/yimijianfang/vue-drag-verify",type:"success",closable:!1,class:"mb15"}),u(c,{imgsrc:t.imgThree,isPassing:t.isPassingThree,"onUpdate:isPassing":i[2]||(i[2]=s=>t.isPassingThree=s),showRefresh:!0,text:"请按住滑块拖动",successText:"验证通过",handlerIcon:"el-icon-d-arrow-right",successIcon:"el-icon-circle-check"},null,8,["imgsrc","isPassing"])])),_:1}),u(l,{shadow:"hover",header:"验证器：旋转图片滑块组件",class:"mt15"},{default:y((()=>[u(o,{title:"感谢优秀的 `vue-drag-verify`，项目地址：https://github.com/yimijianfang/vue-drag-verify",type:"success",closable:!1,class:"mb15"}),u(f,{imgsrc:t.imgThree,isPassing:t.isPassingFour,"onUpdate:isPassing":i[3]||(i[3]=s=>t.isPassingFour=s),showRefresh:!0,text:"请按住滑块拖动",successText:"验证通过",handlerIcon:"el-icon-d-arrow-right",successIcon:"el-icon-circle-check"},null,8,["imgsrc","isPassing"])])),_:1})])}]]);export{C as default};
