import{_ as I,D as O,k as R,m as Q,M as U,p as L,r as i,U as v,a as B,h as e,w as o,g as j,I as k,H,o as p,au as P,F as G,e as J,f,v as y,i as g,t as z,b as q,y as W,x as X}from"./index.1704797758166.js";import{E as Y,l as Z,d as $,e as ee}from"./editModule.17047977581663.js";const ne={name:"index",components:{EditModule:Y},setup(){const{proxy:t}=j(),r=O(),a=R({loading:!0,ids:[],single:!0,multiple:!0,title:"",tableData:[],total:0,typeOptions:[],queryParams:{pageNum:1,pageSize:10,configName:void 0,configKey:void 0,configType:void 0}}),l=()=>{a.loading=!0,Z(a.queryParams).then(n=>{a.tableData=n.rows,a.total=n.total,a.loading=!1})},b=()=>{a.queryParams.configName=void 0,a.queryParams.configKey=void 0,a.queryParams.configType=void 0,l()},D=(n,c)=>t.selectDictLabel(a.typeOptions,n.configType),h=n=>{n=[],a.title="\u6DFB\u52A0\u914D\u7F6E\u53C2\u6570",r.value.openDialog(n)},_=n=>{a.title="\u4FEE\u6539\u914D\u7F6E\u53C2\u6570",r.value.openDialog(n)},E=n=>{const c=n.dictId||a.ids;k({message:'\u662F\u5426\u786E\u8BA4\u5220\u9664\u914D\u7F6E\u53C2\u6570\u7F16\u53F7\u4E3A"'+c+'"\u7684\u6570\u636E\u9879?',title:"\u8B66\u544A",showCancelButton:!0,confirmButtonText:"\u786E\u5B9A",cancelButtonText:"\u53D6\u6D88",type:"warning"}).then(function(){return $(c).then(()=>{l(),H.success("\u5220\u9664\u6210\u529F")})})},w=n=>{a.ids=n.map(c=>c.configId),a.single=n.length!=1,a.multiple=!n.length},s=()=>{const n=a.queryParams;k({message:"\u662F\u5426\u786E\u8BA4\u5BFC\u51FA\u6240\u6709\u53C2\u6570\u6570\u636E\u9879?",title:"\u8B66\u544A",showCancelButton:!0,confirmButtonText:"\u786E\u5B9A",cancelButtonText:"\u53D6\u6D88",type:"warning"}).then(function(){return ee(n)}).then(c=>{t.download(c.data)})},d=n=>{a.queryParams.pageSize=n,l()},F=n=>{a.queryParams.pageNum=n,l()};return Q(()=>{l(),t.getDicts("sys_yes_no").then(n=>{a.typeOptions=n.data}),t.mittBus.on("onEditPostModule",n=>{l()})}),U(()=>{t.mittBus.off("onEditPostModule")}),{editModuleRef:r,handleSelectionChange:w,handleSizeChange:d,handleCurrentChange:F,handleQuery:l,resetQuery:b,handleExport:s,onOpenAddModule:h,onOpenEditModule:_,typeFormat:D,onTabelRowDel:E,...L(a)}}},te={class:"app-container"},oe=g(" \u641C\u7D22"),ae=g(" \u91CD\u7F6E "),le=g("\u65B0\u589E"),ue=g("\u5220\u9664"),ie=g("\u5BFC\u51FA"),re=g("\u4FEE\u6539"),se=g("\u5220\u9664");function de(t,r,a,l,b,D){const h=i("el-input"),_=i("el-form-item"),E=i("el-option"),w=i("el-select"),s=i("SvgIcon"),d=i("el-button"),F=i("el-form"),n=i("el-col"),c=i("el-row"),m=i("el-table-column"),A=i("el-tag"),S=i("el-table"),T=i("el-divider"),V=i("el-pagination"),M=i("el-card"),N=i("EditModule"),C=v("auth"),K=v("loading");return p(),B("div",te,[e(M,{shadow:"always"},{default:o(()=>[e(F,{model:t.queryParams,ref:"queryForm",inline:!0,"label-width":"68px"},{default:o(()=>[e(_,{label:"\u53C2\u6570\u540D\u79F0",prop:"configName"},{default:o(()=>[e(h,{placeholder:"\u53C2\u6570\u540D\u79F0\u6A21\u7CCA\u67E5\u8BE2",clearable:"",size:"small",onKeyup:P(l.handleQuery,["enter"]),style:{width:"240px"},modelValue:t.queryParams.configName,"onUpdate:modelValue":r[0]||(r[0]=u=>t.queryParams.configName=u)},null,8,["onKeyup","modelValue"])]),_:1}),e(_,{label:"\u53C2\u6570\u952E\u540D",prop:"configKey"},{default:o(()=>[e(h,{placeholder:"\u53C2\u6570\u952E\u540D\u6A21\u7CCA\u67E5\u8BE2",clearable:"",size:"small",onKeyup:P(l.handleQuery,["enter"]),style:{width:"240px"},modelValue:t.queryParams.configKey,"onUpdate:modelValue":r[1]||(r[1]=u=>t.queryParams.configKey=u)},null,8,["onKeyup","modelValue"])]),_:1}),e(_,{label:"\u7CFB\u7EDF\u5185\u7F6E",prop:"configType"},{default:o(()=>[e(w,{modelValue:t.queryParams.configType,"onUpdate:modelValue":r[2]||(r[2]=u=>t.queryParams.configType=u),placeholder:"\u7CFB\u7EDF\u5185\u7F6E",clearable:"",size:"small",style:{width:"240px"}},{default:o(()=>[(p(!0),B(G,null,J(t.typeOptions,u=>(p(),f(E,{key:u.dictValue,label:u.dictLabel,value:u.dictValue},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(_,null,{default:o(()=>[e(d,{type:"primary",size:"mini",onClick:l.handleQuery},{default:o(()=>[e(s,{name:"elementSearch"}),oe]),_:1},8,["onClick"]),e(d,{size:"mini",onClick:l.resetQuery},{default:o(()=>[e(s,{name:"elementRefresh"}),ae]),_:1},8,["onClick"])]),_:1})]),_:1},8,["model"]),e(c,{gutter:10,class:"mb8"},{default:o(()=>[e(n,{span:1.5},{default:o(()=>[y((p(),f(d,{type:"primary",plain:"",size:"mini",onClick:l.onOpenAddModule},{default:o(()=>[e(s,{name:"elementPlus"}),le]),_:1},8,["onClick"])),[[C,"system:config:add"]])]),_:1},8,["span"]),e(n,{span:1.5},{default:o(()=>[y((p(),f(d,{type:"danger",plain:"",size:"mini",disabled:t.multiple,onClick:l.onTabelRowDel},{default:o(()=>[e(s,{name:"elementDelete"}),ue]),_:1},8,["disabled","onClick"])),[[C,"system:config:delete"]])]),_:1},8,["span"]),e(n,{span:1.5},{default:o(()=>[y((p(),f(d,{type:"warning",plain:"",size:"mini",onClick:l.handleExport},{default:o(()=>[e(s,{name:"elementDownload"}),ie]),_:1},8,["onClick"])),[[C,"system:config:export"]])]),_:1},8,["span"])]),_:1}),y((p(),f(S,{data:t.tableData,onSelectionChange:l.handleSelectionChange},{default:o(()=>[e(m,{type:"selection",width:"55",align:"center"}),e(m,{label:"\u53C2\u6570\u4E3B\u952E",align:"center",prop:"configId"}),e(m,{label:"\u53C2\u6570\u540D\u79F0",align:"center",prop:"configName","show-overflow-tooltip":!0}),e(m,{label:"\u53C2\u6570\u952E\u540D",align:"center",prop:"configKey","show-overflow-tooltip":!0}),e(m,{label:"\u53C2\u6570\u952E\u503C",align:"center",prop:"configValue"}),e(m,{label:"\u7CFB\u7EDF\u5185\u7F6E",align:"center",prop:"configType"},{default:o(u=>[e(A,{type:u.row.configType==="1"?"danger":"success","disable-transitions":""},{default:o(()=>[g(z(l.typeFormat(u.row)),1)]),_:2},1032,["type"])]),_:1}),e(m,{label:"\u5907\u6CE8",align:"center",prop:"remark","show-overflow-tooltip":!0}),e(m,{label:"\u521B\u5EFA\u65F6\u95F4",align:"center",prop:"create_time",width:"180"},{default:o(u=>[q("span",null,z(t.dateStrFormat(u.row.createTime)),1)]),_:1}),e(m,{label:"\u64CD\u4F5C",align:"center",width:"200","class-name":"medium-padding fixed-width"},{default:o(u=>[y((p(),f(d,{size:"mini",type:"text",onClick:x=>l.onOpenEditModule(u.row)},{default:o(()=>[e(s,{name:"elementEdit"}),re]),_:2},1032,["onClick"])),[[C,"system:config:edit"]]),u.row.parentId!=0?y((p(),f(d,{key:0,size:"mini",type:"text",onClick:x=>l.onTabelRowDel(u.row)},{default:o(()=>[e(s,{name:"elementDelete"}),se]),_:2},1032,["onClick"])),[[C,"system:config:delete"]]):W("",!0)]),_:1})]),_:1},8,["data","onSelectionChange"])),[[K,t.loading]]),y(q("div",null,[e(T),e(V,{background:"",total:t.total,"current-page":t.queryParams.pageNum,"page-size":t.queryParams.pageSize,layout:"total, sizes, prev, pager, next, jumper",onSizeChange:l.handleSizeChange,onCurrentChange:l.handleCurrentChange},null,8,["total","current-page","page-size","onSizeChange","onCurrentChange"])],512),[[X,t.total>0]])]),_:1}),e(N,{ref:"editModuleRef",title:t.title},null,8,["title"])])}const pe=I(ne,[["render",de]]);export{pe as default};
