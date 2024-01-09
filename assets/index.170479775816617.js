import{_ as k,D as x,k as L,c as B,m as E,l as T,p as z,r as d,o as f,a as b,h,w as u,f as y,z as p,N as D,v as W,x as O,b as s,t as R,y as C,F as N,e as M,G as U}from"./index.1704797758166.js";import{i as F}from"./getStyleSheets.1704797758166.js";const G={name:"iconSelector",emits:["update:modelValue","get","clear"],props:{prepend:{type:String,default:()=>"elementPointer"},placeholder:{type:String,default:()=>"\u8BF7\u8F93\u5165\u5185\u5BB9\u641C\u7D22\u56FE\u6807\u6216\u8005\u9009\u62E9\u56FE\u6807"},size:{type:String,default:()=>"small"},title:{type:String,default:()=>"\u8BF7\u9009\u62E9\u56FE\u6807"},type:{type:String,default:()=>"ele"},disabled:{type:Boolean,default:()=>!1},clearable:{type:Boolean,default:()=>!0},emptyDescription:{type:String,default:()=>"\u65E0\u76F8\u5173\u56FE\u6807"},modelValue:String},setup(n,{emit:t}){const c=x(),i=x(),e=L({fontIconPrefix:"",fontIconVisible:!1,fontIconWidth:0,fontIconSearch:"",fontIconTabsIndex:0,fontIconSheetsList:[],fontIconPlaceholder:"",fontIconType:"ali",fontIconShow:!0}),_=()=>{if(!n.modelValue)return!1;e.fontIconSearch="",e.fontIconPlaceholder=n.modelValue},S=()=>{setTimeout(()=>{e.fontIconSheetsList.filter(a=>a===e.fontIconSearch).length<=0&&(e.fontIconSearch="")},300)},w=()=>{if(n.modelValue==="")return!1;e.fontIconPlaceholder=n.modelValue,e.fontIconPrefix=n.modelValue},g=B(()=>{if(!e.fontIconSearch)return e.fontIconSheetsList;let o=e.fontIconSearch.trim().toLowerCase();return e.fontIconSheetsList.filter(a=>{if(a.toLowerCase().indexOf(o)!==-1)return a})}),v=()=>{U(()=>{e.fontIconWidth=c.value.$el.offsetWidth})},P=()=>{window.addEventListener("resize",()=>{v()})},V=async o=>{e.fontIconSheetsList=[],o==="ali"?await F.ali().then(a=>{e.fontIconSheetsList=a.map(m=>`iconfont ${m}`)}):o==="ele"?await F.ele().then(a=>{e.fontIconSheetsList=a}):o==="awe"&&await F.awe().then(a=>{e.fontIconSheetsList=a.map(m=>`fa ${m}`)}),e.fontIconPlaceholder=n.placeholder,w(),i.value.wrap$.scrollTop=0},r=o=>{e.fontIconType=o,V(o)},l=o=>{e.fontIconPlaceholder=o,e.fontIconVisible=!1,e.fontIconTabsIndex===0?e.fontIconPrefix=`${o}`:e.fontIconTabsIndex===1?e.fontIconPrefix=`${o}`:e.fontIconTabsIndex===2&&(e.fontIconPrefix=`${o}`),t("get",e.fontIconPrefix),t("update:modelValue",e.fontIconPrefix)},I=()=>{e.fontIconPrefix="",t("clear",e.fontIconPrefix),t("update:modelValue",e.fontIconPrefix)};return E(()=>{var o,a,m;n.type==="all"?((o=n.modelValue)==null?void 0:o.indexOf("iconfont"))>-1?r("ali"):((a=n.modelValue)==null?void 0:a.indexOf("element"))>-1?r("ele"):((m=n.modelValue)==null?void 0:m.indexOf("fa"))>-1?r("awe"):r("ali"):r(n.type),P(),v()}),T(()=>n.modelValue,()=>{w()}),{inputWidthRef:c,fontIconSheetsFilterList:g,onColClick:l,selectorScrollbarRef:i,onIconChange:r,onClearFontIcon:I,onIconFocus:_,onIconBlur:S,...z(e)}}},j={class:"icon-selector"},q={class:"icon-selector-warp"},A={class:"icon-selector-warp-title flex"},H={class:"flex-auto"},J={key:0,class:"icon-selector-warp-title-tab"},K={class:"icon-selector-warp-row"},Q={class:"flex-margin"},X={class:"icon-selector-warp-item-value"};function Y(n,t,c,i,e,_){const S=d("SvgIcon"),w=d("el-input"),g=d("el-col"),v=d("el-row"),P=d("el-empty"),V=d("el-scrollbar"),r=d("el-popover");return f(),b("div",j,[h(r,{placement:"bottom",width:n.fontIconWidth,visible:n.fontIconVisible,"onUpdate:visible":t[4]||(t[4]=l=>n.fontIconVisible=l),"popper-class":"icon-selector-popper"},{reference:u(()=>[h(w,{modelValue:n.fontIconSearch,"onUpdate:modelValue":t[0]||(t[0]=l=>n.fontIconSearch=l),placeholder:n.fontIconPlaceholder,clearable:c.clearable,disabled:c.disabled,size:c.size,ref:"inputWidthRef",onClear:i.onClearFontIcon,onFocus:i.onIconFocus,onBlur:i.onIconBlur},{prepend:u(()=>{var l,I;return[(n.fontIconPrefix===""?((l=c.prepend)==null?void 0:l.indexOf("element"))>-1:((I=n.fontIconPrefix)==null?void 0:I.indexOf("element"))>-1)?(f(),y(S,{key:0,name:n.fontIconPrefix===""?c.prepend:n.fontIconPrefix,class:"font14"},null,8,["name"])):(f(),b("i",{key:1,class:p([n.fontIconPrefix===""?c.prepend:n.fontIconPrefix,"font14"])},null,2))]}),_:1},8,["modelValue","placeholder","clearable","disabled","size","onClear","onFocus","onBlur"])]),default:u(()=>[h(D,{name:"el-zoom-in-top"},{default:u(()=>[W(s("div",q,[s("div",A,[s("div",H,R(c.title),1),c.type==="all"?(f(),b("div",J,[s("span",{class:p([{"span-active":n.fontIconType==="ali"},"ml10"]),onClick:t[1]||(t[1]=l=>i.onIconChange("ali")),title:"iconfont \u56FE\u6807"},"ali",2),s("span",{class:p([{"span-active":n.fontIconType==="ele"},"ml10"]),onClick:t[2]||(t[2]=l=>i.onIconChange("ele")),title:"elementPlus \u56FE\u6807"},"ele",2),s("span",{class:p([{"span-active":n.fontIconType==="awe"},"ml10"]),onClick:t[3]||(t[3]=l=>i.onIconChange("awe")),title:"fontawesome \u56FE\u6807"},"awe",2)])):C("",!0)]),s("div",K,[h(V,{ref:"selectorScrollbarRef"},{default:u(()=>[i.fontIconSheetsFilterList.length>0?(f(),y(v,{key:0,gutter:10},{default:u(()=>[(f(!0),b(N,null,M(i.fontIconSheetsFilterList,(l,I)=>(f(),y(g,{xs:6,sm:4,md:4,lg:4,xl:4,onClick:o=>i.onColClick(l),key:I},{default:u(()=>[s("div",{class:p(["icon-selector-warp-item",{"icon-selector-active":n.fontIconPrefix===l}])},[s("div",Q,[s("div",X,[h(S,{name:l},null,8,["name"])])])],2)]),_:2},1032,["onClick"]))),128))]),_:1})):C("",!0),i.fontIconSheetsFilterList.length<=0?(f(),y(P,{key:1,"image-size":100,description:c.emptyDescription},null,8,["description"])):C("",!0)]),_:1},512)])],512),[[O,n.fontIconVisible]])]),_:1})]),_:1},8,["width","visible"])])}const ee=k(G,[["render",Y]]);export{ee as I};
