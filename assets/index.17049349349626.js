import{N as a}from"./index.170493493496282.js";import{_ as e,d as t,k as l,p as o,r as n,a as r,h as s,w as i,o as d,F as c,e as p,f as u,i as m,t as f}from"./index.1704934934962.js";const h=t({name:"funNoticeBar",components:{NoticeBar:a},setup(){const a=l({noticeList:["🎉🎉🔥基于vue3.x 、Typescript、vite、Element plus等","适配手机、平板、pc的后台开源免费模板库（vue2.x请切换vue-prev-admin分支）","仓库地址：https://gitee.com/PandaAdmin/PandaX","演示地址：https://PandaGoAdmin.gitee.io/PandaUi-preview/#/login"],tableData:[{a1:"mode",a2:"通知栏模式，用于右侧 icon 图标点击",a3:"string",a4:"closeable / link",a5:""},{a1:"text",a2:"通知文本内容，scrollable 为 false 时生效",a3:"string",a4:"",a5:""},{a1:"color",a2:"通知文本颜色",a3:"string",a4:"",a5:"#e6a23c"},{a1:"background",a2:"通知背景色",a3:"string",a4:"",a5:"#fdf6ec"},{a1:"size",a2:"字体大小，单位px",a3:"number / string",a4:"",a5:"14"},{a1:"height",a2:"通知栏高度，单位px",a3:"number / string",a4:"",a5:"40"},{a1:"delay",a2:"动画延迟时间 (s)",a3:"number / string",a4:"",a5:"1"},{a1:"speed",a2:"滚动速率 (px/s)",a3:"number / string",a4:"",a5:"100"},{a1:"scrollable",a2:"是否开启垂直滚动",a3:"boolean",a4:"true",a5:"false"},{a1:"leftIcon",a2:"自定义左侧图标",a3:"string",a4:"",a5:""},{a1:"rightIcon",a2:"自定义右侧图标",a3:"string",a4:"",a5:""}],tableData1:[{a1:"close",a2:"通知栏模式（mode）closeable 时回调事件",a3:"function",a4:""},{a1:"link",a2:"通知栏模式（mode）link 时回调事件",a3:"function",a4:""}]});return{...o(a)}}}),b={class:"notice-bar-container"};const v=e(h,[["render",function(a,e,t,l,o,h){const v=n("NoticeBar"),g=n("el-card"),x=n("el-carousel-item"),_=n("el-carousel"),w=n("el-table-column"),y=n("el-table");return d(),r("div",b,[s(g,{shadow:"hover",header:"滚动通知栏：默认"},{default:i((()=>[s(v,{text:"🎉🎉🔥基于vue3.x 、Typescript、vite、Element plus等，适配手机、平板、pc\r\n\t\t\t\t的后台开源免费模板库（vue2.x请切换vue-prev-admin分支），仓库地址：https://gitee.com/PandaAdmin/PandaX"})])),_:1}),s(g,{shadow:"hover",header:"滚动通知栏：设置样式",class:"mt15"},{default:i((()=>[s(v,{text:"🎉🎉🔥基于vue3.x 、Typescript、vite、Element plus等，适配手机、平板、pc\r\n\t\t\t\t的后台开源免费模板库（vue2.x请切换vue-prev-admin分支），仓库地址：https://gitee.com/PandaAdmin/PandaX",leftIcon:"iconfont icon-tongzhi2",rightIcon:"elementArrowRight",background:"#ecf5ff",color:"#409eff"})])),_:1}),s(g,{shadow:"hover",header:"滚动通知栏：搭配 NoticeBar 和 Carousel 走马灯 组件可以实现垂直滚动的效果",class:"mt15"},{default:i((()=>[s(v,{scrollable:!0},{default:i((()=>[s(_,{height:"40px",direction:"vertical",autoplay:!0,"indicator-position":"none",interval:3e3},{default:i((()=>[(d(!0),r(c,null,p(a.noticeList,(a=>(d(),u(x,{key:a},{default:i((()=>[m(f(a),1)])),_:2},1024)))),128))])),_:1})])),_:1})])),_:1}),s(g,{shadow:"hover",header:"滚动通知栏：参数",class:"mt15"},{default:i((()=>[s(y,{data:a.tableData,style:{width:"100%"}},{default:i((()=>[s(w,{prop:"a1",label:"参数"}),s(w,{prop:"a2",label:"说明"}),s(w,{prop:"a3",label:"类型"}),s(w,{prop:"a4",label:"可选值"}),s(w,{prop:"a5",label:"默认值"})])),_:1},8,["data"])])),_:1}),s(g,{shadow:"hover",header:"图标选择器(宽度自动)：事件",class:"mt15"},{default:i((()=>[s(y,{data:a.tableData1,style:{width:"100%"}},{default:i((()=>[s(w,{prop:"a1",label:"事件名称"}),s(w,{prop:"a2",label:"说明"}),s(w,{prop:"a3",label:"类型"}),s(w,{prop:"a4",label:"回调参数"})])),_:1},8,["data"])])),_:1})])}]]);export{v as default};
