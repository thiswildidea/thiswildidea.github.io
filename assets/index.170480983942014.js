import{_ as a,k as s,p as t,r as e,a as i,h as o,w as l,o as r,F as u,e as y,f as d,b as n,t as c}from"./index.1704809839420.js";const h={class:"grid-layout-container"},w={class:"w100 h100 flex"},x={class:"flex-margin font14"};const g=a({name:"FunGridLayout",setup(){const a=s({layouts:[{x:0,y:0,w:2,h:2,i:"0"},{x:2,y:0,w:2,h:4,i:"1"},{x:4,y:0,w:2,h:5,i:"2"},{x:6,y:0,w:2,h:3,i:"3"},{x:8,y:0,w:2,h:3,i:"4"},{x:10,y:0,w:2,h:3,i:"5"},{x:0,y:5,w:2,h:5,i:"6"}]});return{...t(a)}}},[["render",function(a,s,t,g,m,f){const p=e("el-alert"),b=e("grid-item"),v=e("grid-layout"),_=e("el-card");return r(),i("div",h,[o(_,{shadow:"hover",header:"vue-grid-layout 拖拽布局演示"},{default:l((()=>[o(p,{title:"感谢优秀的 `vue-grid-layout`，项目地址：https://github.com/jbaysolutions/vue-grid-layout",type:"success",closable:!1,class:"mb15"}),o(v,{layout:a.layouts,"onUpdate:layout":s[0]||(s[0]=s=>a.layouts=s),"col-num":12,"row-height":30,"is-draggable":!0,"is-resizable":!0,"is-mirrored":!1,"vertical-compact":!0,margin:[10,10],"use-css-transforms":!0},{default:l((()=>[(r(!0),i(u,null,y(a.layouts,(a=>(r(),d(b,{x:a.x,y:a.y,w:a.w,h:a.h,i:a.i,key:a.i},{default:l((()=>[n("div",w,[n("span",x,c(a.i),1)])])),_:2},1032,["x","y","w","h","i"])))),128))])),_:1},8,["layout"])])),_:1})])}],["__scopeId","data-v-67b98807"]]);export{g as default};
