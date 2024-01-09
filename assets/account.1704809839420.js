import{at as e,_ as a,d as s,E as t,D as o,u as l,j as n,A as r,k as i,m as u,c,r as d,f as m,w as g,ay as p,az as h,o as f,h as w,b as I,z as _,t as y,S as x,aA as v,aB as b,H as F,g as k}from"./index.1704809839420.js";import{l as P}from"./string.1704809839420.js";const q={class:"login-content-code"},V=["src"],C=a(s({setup(a){const{t:s}=t(),{proxy:C}=k(),S=o(null),T=o(null),U=l(),$=n(),j=r(),B=i({imgThree:"https://img1.baidu.com/it/u=2813520958,2218166536&fm=26&fmt=auto&gp=0.jpg",captchaImage:"",loginForm:{username:"admin",password:"admin123",captcha:"",captchaId:""},rules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}],captcha:[{required:!0,message:"请输入验证码",trigger:"blur"}]},isShowPassword:!1,loading:{signIn:!1}});u((()=>{D()}));const D=async()=>{let a=await e({url:"/system/user/getCaptcha",method:"get"});B.captchaImage=a.base64Captcha,B.loginForm.captchaId=a.captchaId},L=c((()=>h(new Date))),R=async()=>{let a;B.loading.signIn=!0;try{a=await(s=B.loginForm,e({url:"/system/user/login",method:"post",data:s}))}catch(i){return T.value.reset(),B.loading.signIn=!1,B.loginForm.captcha="",void D()}var s;let t=a.data;x.set("token",t.token);let o=await e({url:"/system/user/getInfo",method:"get"}),l=await e({url:"/system/user/getRouters",method:"get"});x.set("menus",l.menus);let n=o.permissions;n.push("base");const r={username:o.user.userName,userId:o.user.userId,roleId:o.user.roles[0].roleId,deptId:o.user.dept.deptId,postId:o.user.postId,photo:o.user.avatar||P(o.user.userName),time:(new Date).getTime(),authBtnList:n,authPageList:n,lastLoginTime:(new Date).getTime(),lastLoginIp:"127.0.0.1"};x.set("userInfo",r),await U.dispatch("userInfos/setUserInfos",r),U.state.themeConfig.themeConfig.isRequestRoutes?(await b(),z()):(await v(),z())},N=()=>{S.value.validate((e=>{if(!e)return!1;R()}))},z=()=>{var e,a,t,o;let l=L.value;(null==(e=$.query)?void 0:e.redirect)?j.push({path:null==(a=$.query)?void 0:a.redirect,query:Object.keys(null==(t=$.query)?void 0:t.params).length>0?JSON.parse(null==(o=$.query)?void 0:o.params):""}):j.push("/"),setTimeout((()=>{B.loading.signIn=!0;const e=s("message.signInText");F.success(`${l}，${e}`),C.mittBus.emit("onSignInClick")}),300)};return(e,a)=>{const s=d("elementUser"),t=d("el-icon"),o=d("el-input"),l=d("el-form-item"),n=d("elementUnlock"),r=d("elementPosition"),i=d("el-col"),u=d("el-row"),c=d("el-button"),h=d("el-form");return f(),m(h,{ref_key:"loginFormRef",ref:S,model:p(B).loginForm,rules:p(B).rules,class:"login-content-form"},{default:g((()=>[w(l,{class:"login-animation-one"},{default:g((()=>[w(o,{type:"text",placeholder:e.$t("message.account.accountPlaceholder1"),"prefix-icon":"el-icon-user",modelValue:p(B).loginForm.username,"onUpdate:modelValue":a[0]||(a[0]=e=>p(B).loginForm.username=e),clearable:"",autocomplete:"off"},{prefix:g((()=>[w(t,{class:"el-input__icon"},{default:g((()=>[w(s)])),_:1})])),_:1},8,["placeholder","modelValue"])])),_:1}),w(l,{class:"login-animation-two"},{default:g((()=>[w(o,{type:p(B).isShowPassword?"text":"password",placeholder:e.$t("message.account.accountPlaceholder2"),modelValue:p(B).loginForm.password,"onUpdate:modelValue":a[2]||(a[2]=e=>p(B).loginForm.password=e),autocomplete:"off"},{prefix:g((()=>[w(t,{class:"el-input__icon"},{default:g((()=>[w(n)])),_:1})])),suffix:g((()=>[I("i",{class:_(["iconfont el-input__icon login-content-password",p(B).isShowPassword?"icon-yincangmima":"icon-xianshimima"]),onClick:a[1]||(a[1]=e=>p(B).isShowPassword=!p(B).isShowPassword)},null,2)])),_:1},8,["type","placeholder","modelValue"])])),_:1}),w(l,{class:"login-animation-three"},{default:g((()=>[w(u,{gutter:15},{default:g((()=>[w(i,{span:16},{default:g((()=>[w(o,{type:"text",maxlength:"6",placeholder:e.$t("message.account.accountPlaceholder3"),modelValue:p(B).loginForm.captcha,"onUpdate:modelValue":a[3]||(a[3]=e=>p(B).loginForm.captcha=e),clearable:"",autocomplete:"off"},{prefix:g((()=>[w(t,{class:"el-input__icon"},{default:g((()=>[w(r)])),_:1})])),_:1},8,["placeholder","modelValue"])])),_:1}),w(i,{span:8},{default:g((()=>[I("div",q,[I("img",{class:"login-content-code-img",onClick:D,width:"130px",height:"40px",src:p(B).captchaImage,style:{cursor:"pointer"}},null,8,V)])])),_:1})])),_:1})])),_:1}),w(l,{class:"login-animation-four"},{default:g((()=>[w(c,{type:"primary",class:"login-content-submit",round:"",onClick:N,loading:p(B).loading.signIn},{default:g((()=>[I("span",null,y(e.$t("message.account.accountBtnText")),1)])),_:1},8,["loading"])])),_:1})])),_:1},8,["model","rules"])}}}),[["__scopeId","data-v-a4cd4430"]]);export{C as default};
