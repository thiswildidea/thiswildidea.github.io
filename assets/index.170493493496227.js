import{_ as e,k as t,p as s,r as n,a as i,h as o,w as c,o as a,f as l,y as r,i as p}from"./index.1704934934962.js";const u={name:"pagesSteps",setup(){const e=t({stepsActive:1});return{onNextSteps:()=>{e.stepsActive++>2&&(e.stepsActive=1)},...s(e)}}},d={class:"steps-container"},_=p(" 下一步 ");const v=e(u,[["render",function(e,t,s,p,u,v){const f=n("SvgIcon"),m=n("el-step"),A=n("el-steps"),k=n("el-result"),y=n("el-button"),b=n("el-card");return a(),i("div",d,[o(b,{shadow:"hover",header:"element-plus 步骤条"},{default:c((()=>[o(A,{active:e.stepsActive},{default:c((()=>[o(m,{title:"第一步"},{icon:c((()=>[o(f,{name:"iconfont icon-0_round_solid"})])),_:1}),o(m,{title:"第二步"},{icon:c((()=>[o(f,{name:"iconfont icon-2_round_solid"})])),_:1}),o(m,{title:"第三步"},{icon:c((()=>[o(f,{name:"iconfont icon-3_round_solid"})])),_:1})])),_:1},8,["active"]),1===e.stepsActive?(a(),l(k,{key:0,icon:"success",title:"成功提示",subTitle:"请根据提示进行操作"})):2===e.stepsActive?(a(),l(k,{key:1,icon:"warning",title:"警告提示",subTitle:"请根据提示进行操作"})):3===e.stepsActive?(a(),l(k,{key:2,icon:"error",title:"错误提示",subTitle:"请根据提示进行操作"})):r("",!0),o(y,{onClick:p.onNextSteps,size:"small",class:"mt15",type:"primary"},{default:c((()=>[o(f,{name:"iconfont icon-step"}),_])),_:1},8,["onClick"])])),_:1})])}]]);export{v as default};
