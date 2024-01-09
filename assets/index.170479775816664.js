import{d as $,D as Q,k as j,p as G,m as J,M as W,r as s,U as F,a as v,h as e,w as u,ax as l,g as X,o as _,au as Y,F as Z,e as ee,f as w,v as B,i,t as D,I as te,H as ne}from"./index.1704797758166.js";import{l as ue,d as oe}from"./menu.1704797758166.js";import se from"./editMenu.1704797758166.js";import"./index.170479775816617.js";import"./getStyleSheets.1704797758166.js";const ae={class:"app-container"},le=i(" \u641C\u7D22"),ie=i(" \u91CD\u7F6E "),re=i(" \u65B0\u589E "),de=i("\u4FEE\u6539"),me=i("\u65B0\u589E"),pe=i("\u5220\u9664"),Ee=$({setup(ce){const{proxy:r}=X(),y=Q(),o=j({loading:!0,menuList:[],menuOptions:[],title:"",open:!1,isHideOptions:[],statusOptions:[],menuTypeOptions:[],queryParams:{menuName:void 0,status:void 0}}),{loading:k,menuList:x,menuOptions:_e,title:O,open:fe,isHideOptions:ye,statusOptions:M,menuTypeOptions:he,queryParams:c}=G(o),h=()=>{o.loading=!0,ue(o.queryParams).then(t=>{o.menuList=t.data,o.loading=!1})},f=()=>{h()},T=()=>{o.queryParams.menuName="",o.queryParams.status="",o.queryParams.menuType="",f()},b=t=>{o.title="\u6DFB\u52A0\u83DC\u5355";let m=t.menuId;t=[],t.parentId=m,y.value.openDialog(t)},V=t=>{o.title="\u4FEE\u6539\u83DC\u5355",y.value.openDialog(t)},A=t=>{te({message:'\u662F\u5426\u786E\u8BA4\u5220\u9664\u540D\u79F0\u4E3A"'+t.menuName+'"\u7684\u6570\u636E\u9879?',title:"\u8B66\u544A",showCancelButton:!0,confirmButtonText:"\u786E\u5B9A",cancelButtonText:"\u53D6\u6D88",type:"warning"}).then(function(){return oe(t.menuId).then(()=>{h(),ne.success("\u5220\u9664\u6210\u529F")})})},I=t=>t.menuType=="F"?"":r.selectDictLabel(o.isHideOptions,t.ishide),L=t=>t.menuType=="F"?"":r.selectDictLabel(o.statusOptions,t.status),N=t=>r.selectDictLabel(o.menuTypeOptions,t.menuType);return J(()=>{h(),r.getDicts("sys_show_hide").then(t=>{o.isHideOptions=t.data}),r.getDicts("sys_menu_type").then(t=>{o.menuTypeOptions=t.data}),r.getDicts("sys_normal_disable").then(t=>{o.statusOptions=t.data}),r.mittBus.on("onEditMenuModule",t=>{f()})}),W(()=>{r.mittBus.off("onEditDeptModule")}),(t,m)=>{const z=s("el-input"),C=s("el-form-item"),P=s("el-option"),q=s("el-select"),d=s("SvgIcon"),p=s("el-button"),H=s("el-form"),a=s("el-table-column"),g=s("el-tag"),R=s("el-table"),S=s("el-card"),U=F("auth"),K=F("loading");return _(),v("div",ae,[e(S,{shadow:"always"},{default:u(()=>[e(H,{model:l(c),ref:"queryForm",inline:!0,"label-width":"68px"},{default:u(()=>[e(C,{label:"\u83DC\u5355\u540D\u79F0",prop:"menuName"},{default:u(()=>[e(z,{placeholder:"\u83DC\u5355\u540D\u79F0\u6A21\u7CCA\u67E5\u8BE2",clearable:"",size:"small",onKeyup:Y(f,["enter"]),style:{width:"240px"},modelValue:l(c).menuName,"onUpdate:modelValue":m[0]||(m[0]=n=>l(c).menuName=n)},null,8,["onKeyup","modelValue"])]),_:1}),e(C,{label:"\u72B6\u6001",prop:"status"},{default:u(()=>[e(q,{modelValue:l(c).status,"onUpdate:modelValue":m[1]||(m[1]=n=>l(c).status=n),placeholder:"\u83DC\u5355\u72B6\u6001",clearable:"",size:"small",style:{width:"240px"}},{default:u(()=>[(_(!0),v(Z,null,ee(l(M),n=>(_(),w(P,{key:n.dictValue,label:n.dictLabel,value:n.dictValue},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(C,null,{default:u(()=>[e(p,{type:"primary",size:"mini",onClick:f},{default:u(()=>[e(d,{name:"elementSearch"}),le]),_:1}),e(p,{size:"mini",onClick:T},{default:u(()=>[e(d,{name:"elementRefresh"}),ie]),_:1}),B((_(),w(p,{type:"primary",plain:"",size:"mini",onClick:b},{default:u(()=>[e(d,{name:"elementPlus"}),re]),_:1})),[[U,"system:dept:add"]])]),_:1})]),_:1},8,["model"]),B((_(),w(R,{data:l(x),"row-key":"menuId",border:"","tree-props":{children:"children",hasChildren:"hasChildren"}},{default:u(()=>[e(a,{prop:"menuName",label:"\u83DC\u5355\u540D\u79F0","show-overflow-tooltip":!0,width:"150"}),e(a,{prop:"icon",label:"\u56FE\u6807",align:"center",width:"100"},{default:u(n=>[e(d,{name:n.row.icon},null,8,["name"])]),_:1}),e(a,{prop:"sort",label:"\u6392\u5E8F",width:"60"}),e(a,{prop:"icon",label:"\u5206\u7C7B",align:"center",width:"100"},{default:u(n=>[e(g,{type:n.row.menuType==="M"?"danger":n.row.menuType==="C"?"success":"warning","disable-transitions":""},{default:u(()=>[i(D(N(n.row)||"-- --"),1)]),_:2},1032,["type"])]),_:1}),e(a,{prop:"permission",label:"\u6743\u9650\u6807\u8BC6","show-overflow-tooltip":!0}),e(a,{prop:"component",label:"\u7EC4\u4EF6\u8DEF\u5F84","show-overflow-tooltip":!0}),e(a,{prop:"status",label:"\u72B6\u6001",width:"80"},{default:u(n=>[e(g,{type:n.row.status==="1"?"danger":"success","disable-transitions":""},{default:u(()=>[i(D(L(n.row)||"-- --"),1)]),_:2},1032,["type"])]),_:1}),e(a,{prop:"status",label:"\u663E\u793A\u9690\u85CF",width:"80"},{default:u(n=>[e(g,{type:n.row.status==="1"?"danger":"success","disable-transitions":""},{default:u(()=>[i(D(I(n.row)||"-- --"),1)]),_:2},1032,["type"])]),_:1}),e(a,{label:"\u64CD\u4F5C",align:"center","class-name":"small-padding fixed-width"},{default:u(n=>[e(p,{size:"mini",type:"text",icon:"el-icon-edit",onClick:E=>V(n.row)},{default:u(()=>[e(d,{name:"elementEdit"}),de]),_:2},1032,["onClick"]),e(p,{size:"mini",type:"text",icon:"el-icon-plus",onClick:E=>b(n.row)},{default:u(()=>[e(d,{name:"elementPlus"}),me]),_:2},1032,["onClick"]),e(p,{size:"mini",type:"text",icon:"el-icon-delete",onClick:E=>A(n.row)},{default:u(()=>[e(d,{name:"elementDelete"}),pe]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])),[[K,l(k)]])]),_:1}),e(se,{ref_key:"editMenuRef",ref:y,title:l(O)},null,8,["title"])])}}});export{Ee as default};
