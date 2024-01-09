import{_ as e,D as l,k as a,m as t,M as n,p as o,r as i,Q as r,a as d,h as s,w as u,g as p,I as c,H as m,o as y,au as g,F as h,e as f,f as C,v as b,b as w,t as _,x as T,i as z}from"./index.1704809839420.js";import{E as k,l as v,d as x}from"./editModule.17048098394206.js";import"./dept.1704809839420.js";import"./index.170480983942068.js";const q={name:"Notice",components:{EditModule:k},setup(){const{proxy:e}=p(),i=l(),r=l(null),d=a({loading:!0,ids:[],single:!0,multiple:!0,title:"",tableData:[],total:0,open:!1,modelForm:{},noticeTypeOptions:[],queryParams:{pageNum:1,pageSize:10,title:void 0,noticeType:void 0}}),s=()=>{d.loading=!0,v(d.queryParams).then((e=>{d.tableData=e.rows,d.total=e.total,d.loading=!1}))};return t((()=>{s(),e.getDicts("sys_notice_type").then((e=>{d.noticeTypeOptions=e.data})),e.mittBus.on("onEditNoticeModule",(e=>{s()}))})),n((()=>{e.mittBus.off("onEditNoticeModule")})),{editModuleRef:i,ruleFormRef:r,handleSelectionChange:e=>{d.ids=e.map((e=>e.noticeId)),d.single=1!=e.length,d.multiple=!e.length},handleSizeChange:e=>{d.queryParams.pageSize=e,s()},handleCurrentChange:e=>{d.queryParams.pageNum=e,s()},handleQuery:s,resetQuery:()=>{d.queryParams.title=void 0,d.queryParams.noticeType=void 0,s()},onOpenAddModule:e=>{e=[],d.title="添加公告",i.value.openDialog(e)},onOpenEditModule:e=>{d.title="修改公告",i.value.openDialog(e)},noticeTypeFormat:(l,a)=>e.selectDictLabel(d.noticeTypeOptions,l.noticeType),onTabelRowDel:e=>{const l=e.noticeId||d.ids;c({message:'是否确认删除公告编号为"'+l+'"的数据项?',title:"警告",showCancelButton:!0,confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){return x(l).then((()=>{s(),m.success("删除成功")}))}))},...o(d)}}},P={class:"app-container"},S=z(" 搜索"),D=z(" 重置 "),M=z("新增"),V=z("删除"),E=z("查看"),O=z("编辑"),R=z("删除");const F=e(q,[["render",function(e,l,a,t,n,o){const p=i("el-input"),c=i("el-form-item"),m=i("el-option"),z=i("el-select"),k=i("SvgIcon"),v=i("el-button"),x=i("el-form"),q=i("el-col"),F=i("el-row"),N=i("el-table-column"),Q=i("el-tabl-column"),j=i("el-table"),B=i("el-divider"),I=i("el-pagination"),A=i("el-card"),K=i("EditModule"),L=r("loading");return y(),d("div",P,[s(A,{shadow:"always"},{default:u((()=>[s(x,{model:e.queryParams,ref:"queryForm",inline:!0,"label-width":"68px"},{default:u((()=>[s(c,{label:"公告标题",prop:"title"},{default:u((()=>[s(p,{placeholder:"请输入公告标题模糊查询",clearable:"",size:"small",onKeyup:g(t.handleQuery,["enter"]),style:{width:"240px"},modelValue:e.queryParams.title,"onUpdate:modelValue":l[0]||(l[0]=l=>e.queryParams.title=l)},null,8,["onKeyup","modelValue"])])),_:1}),s(c,{label:"通知类型",prop:"noticeType"},{default:u((()=>[s(z,{modelValue:e.queryParams.noticeType,"onUpdate:modelValue":l[1]||(l[1]=l=>e.queryParams.noticeType=l),placeholder:"请选择通知类型",clearable:"",size:"small",style:{width:"240px"}},{default:u((()=>[(y(!0),d(h,null,f(e.noticeTypeOptions,(e=>(y(),C(m,{key:e.dictValue,label:e.dictLabel,value:e.dictValue},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),s(c,null,{default:u((()=>[s(v,{type:"primary",size:"mini",onClick:t.handleQuery},{default:u((()=>[s(k,{name:"elementSearch"}),S])),_:1},8,["onClick"]),s(v,{size:"mini",onClick:t.resetQuery},{default:u((()=>[s(k,{name:"elementRefresh"}),D])),_:1},8,["onClick"])])),_:1})])),_:1},8,["model"]),s(F,{gutter:10,class:"mb8"},{default:u((()=>[s(q,{span:1.5},{default:u((()=>[s(v,{type:"primary",plain:"",size:"mini",onClick:t.onOpenAddModule},{default:u((()=>[s(k,{name:"elementPlus"}),M])),_:1},8,["onClick"])])),_:1},8,["span"]),s(q,{span:1.5},{default:u((()=>[s(v,{type:"danger",plain:"",size:"mini",disabled:e.multiple,onClick:t.onTabelRowDel},{default:u((()=>[s(k,{name:"elementDelete"}),V])),_:1},8,["disabled","onClick"])])),_:1},8,["span"])])),_:1}),b((y(),C(j,{data:e.tableData,onSelectionChange:t.handleSelectionChange},{default:u((()=>[s(N,{type:"selection",width:"55",align:"center"}),s(N,{label:"通知编号",align:"center",prop:"noticeId"}),s(N,{label:"通知标题",align:"center",prop:"noticeTitle","show-overflow-tooltip":!0}),s(N,{label:"通知类型",align:"center",prop:"noticeType",formatter:t.noticeTypeFormat},null,8,["formatter"]),s(Q,{label:"发布人",align:"center",prop:"userName"}),s(N,{label:"发布时间",align:"center",prop:"createTime",width:"180"},{default:u((l=>[w("span",null,_(e.dateStrFormat(l.row.createTime)),1)])),_:1}),s(N,{label:"操作",align:"center","class-name":"small-padding fixed-width"},{default:u((l=>[s(v,{size:"mini",type:"text",onClick:a=>e.handleRun(l.row)},{default:u((()=>[s(k,{name:"elementView"}),E])),_:2},1032,["onClick"]),s(v,{size:"mini",type:"text",onClick:e=>t.onOpenEditModule(l.row)},{default:u((()=>[s(k,{name:"elementEdit"}),O])),_:2},1032,["onClick"]),s(v,{size:"mini",type:"text",onClick:e=>t.onTabelRowDel(l.row)},{default:u((()=>[s(k,{name:"elementDelete"}),R])),_:2},1032,["onClick"])])),_:1})])),_:1},8,["data","onSelectionChange"])),[[L,e.loading]]),b(w("div",null,[s(B),s(I,{background:"",total:e.total,"current-page":e.queryParams.pageNum,"page-size":e.queryParams.pageSize,layout:"total, sizes, prev, pager, next, jumper",onSizeChange:t.handleSizeChange,onCurrentChange:t.handleCurrentChange},null,8,["total","current-page","page-size","onSizeChange","onCurrentChange"])],512),[[T,e.total>0]])])),_:1}),s(K,{ref:"editModuleRef",title:e.title},null,8,["title"])])}]]);export{F as default};
