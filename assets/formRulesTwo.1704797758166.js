import{_,k as c,p as i,r as a,a as B,h as e,w as u,o as b}from"./index.1704797758166.js";const F={name:"pagesFormRulesTwo",setup(){const l=c({form:{},rules:{phone:{required:!0,message:"\u8BF7\u8F93\u5165\u624B\u673A",trigger:"blur"},password:{required:!0,message:"\u8BF7\u8F93\u5165\u767B\u5F55\u5BC6\u7801",trigger:"blur"},auth:{required:!0,message:"\u8BF7\u8F93\u5165\u6743\u9650\u89D2\u8272",trigger:"blur"}}});return{...i(l)}}},g={class:"form-rules-two-container"};function w(l,o,V,h,v,x){const m=a("el-input"),r=a("el-form-item"),t=a("el-col"),n=a("el-option"),d=a("el-select"),p=a("el-row"),f=a("el-form");return b(),B("div",g,[e(f,{model:l.form,rules:l.rules,ref:"formRulesTwoRef",size:"small","label-width":"100px",class:"mt35"},{default:u(()=>[e(p,{gutter:35},{default:u(()=>[e(t,{xs:24,sm:12,md:8,lg:6,xl:4,class:"mb20"},{default:u(()=>[e(r,{label:"\u624B\u673A",prop:"phone"},{default:u(()=>[e(m,{modelValue:l.form.phone,"onUpdate:modelValue":o[0]||(o[0]=s=>l.form.phone=s),placeholder:"\u8BF7\u8F93\u5165\u624B\u673A",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(t,{xs:24,sm:12,md:8,lg:6,xl:4,class:"mb20"},{default:u(()=>[e(r,{label:"\u6027\u522B"},{default:u(()=>[e(d,{modelValue:l.form.sex,"onUpdate:modelValue":o[1]||(o[1]=s=>l.form.sex=s),placeholder:"\u8BF7\u9009\u62E9\u6027\u522B",clearable:"",class:"w100"},{default:u(()=>[e(n,{label:"\u7537",value:"1"}),e(n,{label:"\u5973",value:"2"})]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(t,{xs:24,sm:12,md:8,lg:6,xl:4,class:"mb20"},{default:u(()=>[e(r,{label:"\u767B\u5F55\u5BC6\u7801",prop:"password"},{default:u(()=>[e(m,{modelValue:l.form.password,"onUpdate:modelValue":o[2]||(o[2]=s=>l.form.password=s),placeholder:"\u8BF7\u8F93\u5165\u767B\u5F55\u5BC6\u7801",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(t,{xs:24,sm:12,md:8,lg:6,xl:4,class:"mb20"},{default:u(()=>[e(r,{label:"\u6743\u9650\u89D2\u8272",prop:"auth"},{default:u(()=>[e(m,{modelValue:l.form.auth,"onUpdate:modelValue":o[3]||(o[3]=s=>l.form.auth=s),placeholder:"\u8BF7\u8F93\u5165\u6743\u9650\u89D2\u8272",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model","rules"])])}const R=_(F,[["render",w]]);export{R as default};
