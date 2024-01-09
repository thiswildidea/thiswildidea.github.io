import{_ as e,k as l,p as a,r as o,a as r,h as s,w as u,o as m}from"./index.1704809839420.js";const d={class:"form-rules-two-container"};const t=e({name:"pagesFormRulesTwo",setup(){const e=l({form:{},rules:{phone:{required:!0,message:"请输入手机",trigger:"blur"},password:{required:!0,message:"请输入登录密码",trigger:"blur"},auth:{required:!0,message:"请输入权限角色",trigger:"blur"}}});return{...a(e)}}},[["render",function(e,l,a,t,f,p){const n=o("el-input"),c=o("el-form-item"),b=o("el-col"),i=o("el-option"),g=o("el-select"),h=o("el-row"),x=o("el-form");return m(),r("div",d,[s(x,{model:e.form,rules:e.rules,ref:"formRulesTwoRef",size:"small","label-width":"100px",class:"mt35"},{default:u((()=>[s(h,{gutter:35},{default:u((()=>[s(b,{xs:24,sm:12,md:8,lg:6,xl:4,class:"mb20"},{default:u((()=>[s(c,{label:"手机",prop:"phone"},{default:u((()=>[s(n,{modelValue:e.form.phone,"onUpdate:modelValue":l[0]||(l[0]=l=>e.form.phone=l),placeholder:"请输入手机",clearable:""},null,8,["modelValue"])])),_:1})])),_:1}),s(b,{xs:24,sm:12,md:8,lg:6,xl:4,class:"mb20"},{default:u((()=>[s(c,{label:"性别"},{default:u((()=>[s(g,{modelValue:e.form.sex,"onUpdate:modelValue":l[1]||(l[1]=l=>e.form.sex=l),placeholder:"请选择性别",clearable:"",class:"w100"},{default:u((()=>[s(i,{label:"男",value:"1"}),s(i,{label:"女",value:"2"})])),_:1},8,["modelValue"])])),_:1})])),_:1}),s(b,{xs:24,sm:12,md:8,lg:6,xl:4,class:"mb20"},{default:u((()=>[s(c,{label:"登录密码",prop:"password"},{default:u((()=>[s(n,{modelValue:e.form.password,"onUpdate:modelValue":l[2]||(l[2]=l=>e.form.password=l),placeholder:"请输入登录密码",clearable:""},null,8,["modelValue"])])),_:1})])),_:1}),s(b,{xs:24,sm:12,md:8,lg:6,xl:4,class:"mb20"},{default:u((()=>[s(c,{label:"权限角色",prop:"auth"},{default:u((()=>[s(n,{modelValue:e.form.auth,"onUpdate:modelValue":l[3]||(l[3]=l=>e.form.auth=l),placeholder:"请输入权限角色",clearable:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})])),_:1},8,["model","rules"])])}]]);export{t as default};
