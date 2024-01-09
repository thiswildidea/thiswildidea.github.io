import{at as F,_ as y,k as g,m as k,p as E,r as h,U as C,v as D,a as l,h as n,w as o,o as a,b as e,t,y as c,g as A}from"./index.1704797758166.js";import{f}from"./index.17047977581664.js";function B(){return F({url:"/monitor/cache",method:"get"})}const w={name:"monistorserver",setup(){const{proxy:s}=A(),i=g({cache:[],loading:!1}),d=()=>{i.loading=!0,B().then(_=>{i.cache=_.data,f(s.$refs.commandstats,"macarons").setOption({tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},series:[{name:"\u547D\u4EE4",type:"pie",roseType:"radius",radius:[15,95],center:["50%","38%"],data:_.data.commandStats,animationEasing:"cubicInOut",animationDuration:1e3}]}),f(s.$refs.usedmemory,"macarons").setOption({tooltip:{formatter:"{b} <br/>{a} : "+i.cache.info.used_memory_human},series:[{name:"\u5CF0\u503C",type:"gauge",min:0,max:1e3,detail:{formatter:i.cache.info.used_memory_human},data:[{value:parseFloat(i.cache.info.used_memory_human),name:"\u5185\u5B58\u6D88\u8017"}]}]}),i.loading=!1})};return k(()=>{d()}),{getdata:d,...E(i)}}},I={class:"app-container"},$=e("span",null,"\u57FA\u672C\u4FE1\u606F",-1),O={class:"el-table el-table--enable-row-hover el-table--medium"},S={cellspacing:"0",style:{width:"100%"}},N=e("td",{class:"el-table__cell is-leaf"},[e("div",{class:"cell"},"Redis\u7248\u672C")],-1),R={class:"el-table__cell is-leaf"},V={key:0,class:"cell"},z=e("td",{class:"el-table__cell is-leaf"},[e("div",{class:"cell"},"\u8FD0\u884C\u6A21\u5F0F")],-1),U={class:"el-table__cell is-leaf"},K={key:0,class:"cell"},M=e("td",{class:"el-table__cell is-leaf"},[e("div",{class:"cell"},"\u7AEF\u53E3")],-1),P={class:"el-table__cell is-leaf"},T={key:0,class:"cell"},j=e("td",{class:"el-table__cell is-leaf"},[e("div",{class:"cell"},"\u5BA2\u6237\u7AEF\u6570")],-1),q={class:"el-table__cell is-leaf"},G={key:0,class:"cell"},H=e("td",{class:"el-table__cell is-leaf"},[e("div",{class:"cell"},"\u8FD0\u884C\u65F6\u95F4(\u5929)")],-1),J={class:"el-table__cell is-leaf"},L={key:0,class:"cell"},Q=e("td",{class:"el-table__cell is-leaf"},[e("div",{class:"cell"},"\u4F7F\u7528\u5185\u5B58")],-1),W={class:"el-table__cell is-leaf"},X={key:0,class:"cell"},Y=e("td",{class:"el-table__cell is-leaf"},[e("div",{class:"cell"},"\u4F7F\u7528CPU")],-1),Z={class:"el-table__cell is-leaf"},x={key:0,class:"cell"},ee=e("td",{class:"el-table__cell is-leaf"},[e("div",{class:"cell"},"\u5185\u5B58\u914D\u7F6E")],-1),se={class:"el-table__cell is-leaf"},le={key:0,class:"cell"},ae=e("td",{class:"el-table__cell is-leaf"},[e("div",{class:"cell"},"AOF\u662F\u5426\u5F00\u542F")],-1),te={class:"el-table__cell is-leaf"},ce={key:0,class:"cell"},oe=e("td",{class:"el-table__cell is-leaf"},[e("div",{class:"cell"},"RDB\u662F\u5426\u6210\u529F")],-1),ie={class:"el-table__cell is-leaf"},ne={key:0,class:"cell"},de=e("td",{class:"el-table__cell is-leaf"},[e("div",{class:"cell"},"Key\u6570\u91CF")],-1),_e={class:"el-table__cell is-leaf"},ue={key:0,class:"cell"},re=e("td",{class:"el-table__cell is-leaf"},[e("div",{class:"cell"},"\u7F51\u7EDC\u5165\u53E3/\u51FA\u53E3")],-1),he={class:"el-table__cell is-leaf"},fe={key:0,class:"cell"},me=e("span",null,"\u547D\u4EE4\u7EDF\u8BA1",-1),be={class:"el-table el-table--enable-row-hover el-table--medium"},pe={ref:"commandstats",style:{height:"420px"}},ve=e("span",null,"\u5185\u5B58\u4FE1\u606F",-1),Fe={class:"el-table el-table--enable-row-hover el-table--medium"},ye={ref:"usedmemory",style:{height:"420px"}};function ge(s,i,d,_,m,b){const u=h("el-card"),r=h("el-col"),p=h("el-row"),v=C("loading");return D((a(),l("div",I,[n(p,null,{default:o(()=>[n(r,{span:24,class:"card-box"},{default:o(()=>[n(u,null,{header:o(()=>[$]),default:o(()=>[e("div",O,[e("table",S,[e("tbody",null,[e("tr",null,[N,e("td",R,[s.cache.info?(a(),l("div",V,t(s.cache.info.redis_version),1)):c("",!0)]),z,e("td",U,[s.cache.info?(a(),l("div",K,t(s.cache.info.redis_mode=="standalone"?"\u5355\u673A":"\u96C6\u7FA4"),1)):c("",!0)]),M,e("td",P,[s.cache.info?(a(),l("div",T,t(s.cache.info.tcp_port),1)):c("",!0)]),j,e("td",q,[s.cache.info?(a(),l("div",G,t(s.cache.info.connected_clients),1)):c("",!0)])]),e("tr",null,[H,e("td",J,[s.cache.info?(a(),l("div",L,t(s.cache.info.uptime_in_days),1)):c("",!0)]),Q,e("td",W,[s.cache.info?(a(),l("div",X,t(s.cache.info.used_memory_human),1)):c("",!0)]),Y,e("td",Z,[s.cache.info?(a(),l("div",x,t(parseFloat(s.cache.info.used_cpu_user_children).toFixed(2)),1)):c("",!0)]),ee,e("td",se,[s.cache.info?(a(),l("div",le,t(s.cache.info.maxmemory_human),1)):c("",!0)])]),e("tr",null,[ae,e("td",te,[s.cache.info?(a(),l("div",ce,t(s.cache.info.aof_enabled=="0"?"\u5426":"\u662F"),1)):c("",!0)]),oe,e("td",ie,[s.cache.info?(a(),l("div",ne,t(s.cache.info.rdb_last_bgsave_status),1)):c("",!0)]),de,e("td",_e,[s.cache.dbSize?(a(),l("div",ue,t(s.cache.dbSize),1)):c("",!0)]),re,e("td",he,[s.cache.info?(a(),l("div",fe,t(s.cache.info.instantaneous_input_kbps)+"kps/"+t(s.cache.info.instantaneous_output_kbps)+"kps",1)):c("",!0)])])])])])]),_:1})]),_:1}),n(r,{span:12,class:"card-box"},{default:o(()=>[n(u,null,{header:o(()=>[me]),default:o(()=>[e("div",be,[e("div",pe,null,512)])]),_:1})]),_:1}),n(r,{span:12,class:"card-box"},{default:o(()=>[n(u,null,{header:o(()=>[ve]),default:o(()=>[e("div",Fe,[e("div",ye,null,512)])]),_:1})]),_:1})]),_:1})])),[[v,s.loading]])}const Ce=y(w,[["render",ge]]);export{Ce as default};
