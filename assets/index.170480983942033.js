import{_ as e,k as l,m as a,p as o,r as d,a as r,h as s,w as t,o as m,F as i,e as p,v as u,x as n,f as c,y as f,b,g as y,i as h}from"./index.1704809839420.js";const x=[{label:"姓名",prop:"name",placeholder:"请输入姓名",clearable:!0,disabled:!1,required:!0,type:"input",i18n:!1,i18nText:"",isShow:!0,xs:24,sm:12,md:8,lg:6,xl:4},{label:"邮箱",prop:"email",placeholder:"请输入用户邮箱",clearable:!0,disabled:!1,required:!0,type:"input",i18n:!1,i18nText:"",isShow:!0,xs:24,sm:12,md:8,lg:6,xl:4},{label:"登陆时间",prop:"autograph",placeholder:"选择时间",clearable:!0,disabled:!1,required:!0,type:"date",i18n:!1,i18nText:"",isShow:!0,xs:24,sm:12,md:8,lg:6,xl:4},{label:"职务",prop:"occupation",placeholder:"请选择职务",clearable:!0,disabled:!1,required:!0,type:"select",i18n:!1,i18nText:"",options:[{label:"计算机 / 互联网 / 通信",value:"1"},{label:"生产 / 工艺 / 制造",value:"2"},{label:"医疗 / 护理 / 制药",value:"3"}],isShow:!0,xs:24,sm:12,md:8,lg:6,xl:4},{label:"",prop:"",placeholder:"",clearable:!0,disabled:!1,required:!0,type:"",i18n:!1,i18nText:"",isShow:!0,xs:24,sm:24,md:24,lg:24,xl:24},{label:"备注",prop:"remarks",placeholder:"请输入",clearable:!0,disabled:!1,required:!0,type:"textarea",i18n:!1,i18nText:"",isShow:!0,xs:24,sm:24,md:24,lg:24,xl:24}],g={name:"pagesDynamicForm",setup(){const{proxy:e}=y(),d=l({formData:x,form:{name:"",email:"",autograph:"",occupation:"",list:[{year:"",month:"",day:""}],remarks:""}});return a((()=>{})),{onAddRow:()=>{d.form.list.push({year:"",month:"",day:""})},onDelRow:e=>{d.form.list.splice(e,1)},onSubmitForm:()=>{e.$refs.formRulesOneRef.validate((l=>{if(!l)return!1;e.$message.success("验证成功")}))},onResetForm:()=>{e.$refs.formRulesOneRef.resetFields()},...o(d)}}},V={class:"dynamic-form-container"},k=b("span",{class:"ml10"},"年度",-1),w={class:"flex-margin"},_=h(" 重置表单 "),R=h(" 验证表单 ");const U=e(g,[["render",function(e,l,a,o,y,h){const x=d("el-input"),g=d("el-date-picker"),U=d("el-option"),v=d("el-select"),q=d("el-form-item"),S=d("elementPlus"),C=d("el-icon"),F=d("el-button"),$=d("elementDelete"),D=d("el-col"),T=d("el-row"),z=d("el-form"),O=d("el-card"),A=d("elementRefreshRight"),j=d("SvgIcon");return m(),r("div",V,[s(O,{shadow:"hover",header:"动态复杂表单"},{default:t((()=>[s(z,{model:e.form,ref:"formRulesOneRef",size:"small","label-width":"100px",class:"mt35"},{default:t((()=>[s(T,{gutter:35},{default:t((()=>[(m(!0),r(i,null,p(e.formData,((l,a)=>u((m(),c(D,{xs:l.xs,sm:l.sm,md:l.md,lg:l.md,xl:l.xl,class:"mb20",key:a},{default:t((()=>[""!==l.type?(m(),r(i,{key:0},[""!==l.type?(m(),c(q,{key:0,label:l.label,prop:l.prop,rules:[{required:l.required,message:`${l.label}不能为空`,trigger:"input"===l.type?"blur":"change"}]},{default:t((()=>["input"===l.type?(m(),c(x,{key:0,modelValue:e.form[l.prop],"onUpdate:modelValue":a=>e.form[l.prop]=a,placeholder:l.placeholder,clearable:"",style:{width:"100%"},disabled:l.disabled},null,8,["modelValue","onUpdate:modelValue","placeholder","disabled"])):"date"===l.type?(m(),c(g,{key:1,modelValue:e.form[l.prop],"onUpdate:modelValue":a=>e.form[l.prop]=a,type:"date",placeholder:l.placeholder,style:{width:"100%"},disabled:l.disabled},null,8,["modelValue","onUpdate:modelValue","placeholder","disabled"])):"select"===l.type?(m(),c(v,{key:2,modelValue:e.form[l.prop],"onUpdate:modelValue":a=>e.form[l.prop]=a,placeholder:l.placeholder,style:{width:"100%"},disabled:l.disabled},{default:t((()=>[(m(!0),r(i,null,p(l.options,(e=>(m(),c(U,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:2},1032,["modelValue","onUpdate:modelValue","placeholder","disabled"])):f("",!0),"textarea"===l.type?(m(),c(x,{key:3,type:"textarea",modelValue:e.form[l.prop],"onUpdate:modelValue":a=>e.form[l.prop]=a,placeholder:l.placeholder,clearable:"",style:{width:"100%"},disabled:l.disabled},null,8,["modelValue","onUpdate:modelValue","placeholder","disabled"])):f("",!0)])),_:2},1032,["label","prop","rules"])):f("",!0)],64)):(m(!0),r(i,{key:1},p(e.form.list,((l,a)=>(m(),c(T,{gutter:35,key:a},{default:t((()=>[s(D,{xs:24,sm:12,md:8,lg:8,xl:6,class:"mb20"},{default:t((()=>[s(q,{label:"年度",prop:`list[${a}].year`,rules:[{required:!0,message:"年度不能为空",trigger:"blur"}]},{label:t((()=>[0===a?(m(),c(F,{key:0,type:"primary",circle:"",size:"mini",onClick:o.onAddRow},{default:t((()=>[s(C,null,{default:t((()=>[s(S)])),_:1})])),_:1},8,["onClick"])):(m(),c(F,{key:1,type:"danger",circle:"",size:"mini",onClick:e=>o.onDelRow(a)},{default:t((()=>[s(C,null,{default:t((()=>[s($)])),_:1})])),_:2},1032,["onClick"])),k])),default:t((()=>[s(x,{modelValue:e.form.list[a].year,"onUpdate:modelValue":l=>e.form.list[a].year=l,style:{width:"100%"},placeholder:"请输入"},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1032,["prop"])])),_:2},1024),s(D,{xs:24,sm:12,md:8,lg:8,xl:6,class:"mb20"},{default:t((()=>[s(q,{label:"月度",prop:`list[${a}].month`,rules:[{required:!0,message:"月度不能为空",trigger:"blur"}]},{default:t((()=>[s(x,{modelValue:e.form.list[a].month,"onUpdate:modelValue":l=>e.form.list[a].month=l,style:{width:"100%"},placeholder:"请输入"},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1032,["prop"])])),_:2},1024),s(D,{xs:24,sm:12,md:8,lg:8,xl:6,class:"mb20"},{default:t((()=>[s(q,{label:"日度",prop:`list[${a}].day`,rules:[{required:!0,message:"日度不能为空",trigger:"blur"}]},{default:t((()=>[s(x,{modelValue:e.form.list[a].day,"onUpdate:modelValue":l=>e.form.list[a].day=l,style:{width:"100%"},placeholder:"请输入"},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1032,["prop"])])),_:2},1024)])),_:2},1024)))),128))])),_:2},1032,["xs","sm","md","lg","xl"])),[[n,l.isShow]]))),128))])),_:1})])),_:1},8,["model"])])),_:1}),s(T,{class:"flex mt15"},{default:t((()=>[b("div",w,[s(F,{size:"small",onClick:o.onResetForm},{default:t((()=>[s(C,null,{default:t((()=>[s(A)])),_:1}),_])),_:1},8,["onClick"]),s(F,{size:"small",type:"primary",onClick:o.onSubmitForm},{default:t((()=>[s(j,{name:"iconfont icon-shuxing"}),R])),_:1},8,["onClick"])])])),_:1})])}]]);export{U as default};
