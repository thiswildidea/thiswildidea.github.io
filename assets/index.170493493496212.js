import{_ as e,$ as a,k as l,m as o,p as t,r as s,a as d,h as r,w as c,o as p,i as n}from"./index.1704934934962.js";const u={name:"funClipboard",setup(){const{copyText:e}=a(),s=l({copyVal:"https://gitee.com/PandaAdmin/PandaX",shearVal:""});return o((()=>{})),{copyText:e,...t(s)}}},i={id:"printRref"},m=n("复制链接");const V=e(u,[["render",function(e,a,l,o,t,n){const u=s("el-alert"),V=s("el-button"),h=s("el-input"),y=s("el-card");return p(),d("div",i,[r(y,{shadow:"hover",header:"复制剪切演示"},{default:c((()=>[r(u,{title:"感谢优秀的 `vue-clipboard3`，项目地址：https://github.com/JamieCurnow/vue-clipboard3`",type:"success",closable:!1,class:"mb15"}),r(h,{placeholder:"请输入内容",modelValue:e.copyVal,"onUpdate:modelValue":a[1]||(a[1]=a=>e.copyVal=a)},{append:c((()=>[r(V,{onClick:a[0]||(a[0]=a=>o.copyText(e.copyVal))},{default:c((()=>[m])),_:1})])),_:1},8,["modelValue"]),r(h,{placeholder:"先点击上方 `复制链接` 按钮，然后 `Ctrl + V` 进行粘贴！ ",modelValue:e.shearVal,"onUpdate:modelValue":a[2]||(a[2]=a=>e.shearVal=a),class:"mt15"},null,8,["modelValue"])])),_:1})])}]]);export{V as default};
