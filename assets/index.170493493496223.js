import{_ as e,d as l,k as a,p as o,r as m,a as r,h as d,w as s,o as t,b as n,g as u,i as f}from"./index.1704934934962.js";const c=l({name:"pagesFormI18n",setup(){const{proxy:e}=u(),l=a({radio:"zh-cn",form:{}});return{onRadioChange:()=>{e.$i18n.locale=l.radio},...o(l)}}}),i={class:"form-i18n-container"},p={style:{"text-align":"center","margin-top":"15px"}},h=f("中文简体"),g=f("英文");const b=e(c,[["render",function(e,l,a,o,u,f){const c=m("el-radio-button"),b=m("el-radio-group"),_=m("el-input"),x=m("el-form-item"),V=m("el-col"),I=m("el-row"),$=m("el-form"),w=m("el-card");return t(),r("div",i,[d(w,{shadow:"hover",header:"表单国际化演示(不适用于动态项 form-item)"},{default:s((()=>[n("div",p,[d(b,{modelValue:e.radio,"onUpdate:modelValue":l[0]||(l[0]=l=>e.radio=l),size:"small",onChange:e.onRadioChange},{default:s((()=>[d(c,{label:"zh-cn"},{default:s((()=>[h])),_:1}),d(c,{label:"en"},{default:s((()=>[g])),_:1})])),_:1},8,["modelValue","onChange"])]),d($,{model:e.form,size:"small","label-width":"100px",class:"mt35 mb35"},{default:s((()=>[d(I,{gutter:35},{default:s((()=>[d(V,{xs:24,sm:12,md:8,lg:8,xl:8,class:"mb20"},{default:s((()=>[d(x,{label:e.$t("message.formI18nLabel.name")},{default:s((()=>[d(_,{modelValue:e.form.name,"onUpdate:modelValue":l[1]||(l[1]=l=>e.form.name=l),placeholder:e.$t("message.formI18nPlaceholder.name"),clearable:""},null,8,["modelValue","placeholder"])])),_:1},8,["label"])])),_:1}),d(V,{xs:24,sm:12,md:8,lg:8,xl:8,class:"mb20"},{default:s((()=>[d(x,{label:e.$t("message.formI18nLabel.email")},{default:s((()=>[d(_,{modelValue:e.form.email,"onUpdate:modelValue":l[2]||(l[2]=l=>e.form.email=l),placeholder:e.$t("message.formI18nPlaceholder.email"),clearable:""},null,8,["modelValue","placeholder"])])),_:1},8,["label"])])),_:1}),d(V,{xs:24,sm:12,md:8,lg:8,xl:8,class:"mb20"},{default:s((()=>[d(x,{label:e.$t("message.formI18nLabel.autograph")},{default:s((()=>[d(_,{modelValue:e.form.autograph,"onUpdate:modelValue":l[3]||(l[3]=l=>e.form.autograph=l),placeholder:e.$t("message.formI18nPlaceholder.autograph"),clearable:""},null,8,["modelValue","placeholder"])])),_:1},8,["label"])])),_:1})])),_:1})])),_:1},8,["model"])])),_:1})])}]]);export{b as default};
