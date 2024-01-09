import{d as y,D as d,k as g,m as v,p as b,_ as k,G as w,r as S,v as x,x as W,o,a,b as f,z as T,y as u,t as _,a0 as $,f as B,C as m}from"./index.1704797758166.js";const I=y({name:"noticeBar",props:{mode:{type:String,default:()=>""},text:{type:String,default:()=>""},color:{type:String,default:()=>"var(--color-warning)"},background:{type:String,default:()=>"var(--color-warning-light-9)"},size:{type:[Number,String],default:()=>14},height:{type:[Number,String],default:()=>40},delay:{type:[Number,String],default:()=>1},speed:{type:[Number,String],default:()=>100},scrollable:{type:Boolean,default:()=>!1},leftIcon:{type:String,default:()=>""},rightIcon:{type:String,default:()=>""}},setup(e,{emit:i}){const s=d(),n=d(),t=g({order:1,oneTime:"",twoTime:"",warpOWidth:"",textOWidth:"",isMode:!1}),l=()=>{w(()=>{t.warpOWidth=s.value.offsetWidth,t.textOWidth=n.value.offsetWidth,document.styleSheets[0].insertRule(`@keyframes oneAnimation {0% {left: 0px;} 100% {left: -${t.textOWidth}px;}}`),document.styleSheets[0].insertRule(`@keyframes twoAnimation {0% {left: ${t.warpOWidth}px;} 100% {left: -${t.textOWidth}px;}}`),r(),setTimeout(()=>{c()},e.delay*1e3)})},r=()=>{t.oneTime=t.textOWidth/e.speed,t.twoTime=(t.textOWidth+t.warpOWidth)/e.speed},c=()=>{t.order===1?(n.value.style.cssText=`animation: oneAnimation ${t.oneTime}s linear; opactity: 1;}`,t.order=2):n.value.style.cssText=`animation: twoAnimation ${t.twoTime}s linear infinite; opacity: 1;`},p=()=>{n.value.addEventListener("animationend",()=>{c()},!1)},h=()=>{if(!e.mode)return!1;e.mode==="closeable"?(t.isMode=!0,i("close")):e.mode==="link"&&i("link")};return v(()=>{if(e.scrollable)return!1;l(),p()}),{noticeBarWarpRef:s,noticeBarTextRef:n,onRightIconClick:h,...b(t)}}}),O={class:"notice-bar-warp-text-box",ref:"noticeBarWarpRef"},C={key:1,class:"notice-bar-warp-slot"};function R(e,i,s,n,t,l){const r=S("SvgIcon");return x((o(),a("div",{class:"notice-bar",style:m({background:e.background,height:`${e.height}px`})},[f("div",{class:"notice-bar-warp",style:m({color:e.color,fontSize:`${e.size}px`})},[e.leftIcon?(o(),a("i",{key:0,class:T(["notice-bar-warp-left-icon",e.leftIcon])},null,2)):u("",!0),f("div",O,[e.scrollable?(o(),a("div",C,[$(e.$slots,"default",{},void 0,!0)])):(o(),a("div",{key:0,class:"notice-bar-warp-text",ref:"noticeBarTextRef"},_(e.text),513))],512),e.rightIcon?(o(),B(r,{key:1,name:e.rightIcon,class:"notice-bar-warp-right-icon",onClick:e.onRightIconClick},null,8,["name","onClick"])):u("",!0)],4)],4)),[[W,!e.isMode]])}const N=k(I,[["render",R],["__scopeId","data-v-49b652ba"]]);export{N};
