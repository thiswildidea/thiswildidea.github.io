import{_ as e,k as a,p as l,r,f as o,w as s,a6 as u,a7 as m,a8 as d,a9 as n,aa as t,ab as p,ac as i,ad as g,ae as c,af as f,ag as V,ah as F,ai as h,aj as w,ak as v,al as y,am as b,an as I,ao as P,ap as _,aq as U,ar as q,as as N,o as x,h as C,b as A,t as S,i as T,X as E,Y as j}from"./index.1704809839420.js";const k={name:"tools",setup(){const e=a({text:"世间美好，与你环环相扣，祝你开心每一天！",phone:"",cnText:"",telePhone:"",account:"",password:"",passwordPowerful:"",passwordStrength:"",iPAddress:"",email:"",idCard:"",fullName:"",postalCode:"",url:"",carNum:"",ruleForm:{a1:"",a2:"",a3:"",a4:"",a5:"",a6:"",a7:"",a8:"",a9:"",a10:"",a11:"",a12:"",a13:"",a14:"",a15:"",a16:"",a17:"",a18:"",a19:"",a20:"",a21:"",a22:"",a23:""},rules:{a1:[{required:!0,message:"请输入小数或整数进行测试",trigger:"change"}],a2:[{required:!0,message:"请输入正整数进行测试",trigger:"change"}],a3:[{required:!0,message:"请输入内容进行测试",trigger:"change"}],a4:[{required:!0,message:"请输入内容进行测试",trigger:"change"}],a5:[{required:!0,message:"请输入内容进行测试",trigger:"change"}],a6:[{required:!0,message:"请输入小数或整数进行测试",trigger:"change"}],a7:[{required:!0,message:"请输入内容进行测试",trigger:"change"}],a8:[{required:!0,message:"请输入金额进行测试",trigger:"change"}],a9:[{required:!0,message:"请输入手机号进行测试",trigger:"change"}],a10:[{required:!0,message:"请输入国内电话号码进行测试",trigger:"change"}],a11:[{required:!0,message:"请输入账号进行测试",trigger:"change"}],a12:[{required:!0,message:"请输入密码进行测试",trigger:"change"}],a13:[{required:!0,message:"请输入密码进行测试",trigger:"change"}],a14:[{required:!0,message:"请输入密码进行测试",trigger:"change"}],a15:[{required:!0,message:"请输入IP地址进行测试",trigger:"change"}],a16:[{required:!0,message:"请输入邮箱进行测试",trigger:"change"}],a17:[{required:!0,message:"请输入身份证进行测试",trigger:"change"}],a18:[{required:!0,message:"请输入姓名进行测试",trigger:"change"}],a19:[{required:!0,message:"请输入邮政编码进行测试",trigger:"change"}],a20:[{required:!0,message:"请输入内容进行测试",trigger:"change"}],a21:[{required:!0,message:"请输入车牌号进行测试",trigger:"change"}],a22:[{required:!0,message:"请输入数字进行测试",trigger:"change"}],a23:[{required:!0,message:"请输入数字进行测试",trigger:"change"}]}});return{onVerifyNumberPercentage:a=>{e.ruleForm.a22=u(a)},onVerifyNumberPercentageFloat:a=>{e.ruleForm.a23=m(a)},onVerifyNumberIntegerAndFloat:a=>{e.ruleForm.a1=d(a)},onVerifiyNumberInteger:a=>{e.ruleForm.a2=n(a)},onVerifyCnAndSpace:a=>{e.ruleForm.a3=t(a)},onVerifyEnAndSpace:a=>{e.ruleForm.a4=p(a)},onVerifyAndSpace:a=>{e.ruleForm.a5=i(a)},onVerifyNumberComma:a=>{e.ruleForm.a6=g(a)},onVerifyTextColor:a=>{e.ruleForm.a7=i(a),""===e.ruleForm.a7?e.text="世间美好，与你环环相扣，祝你开心每一天！":e.text=c(e.ruleForm.a7,e.text)},onVerifyNumberCnUppercase:a=>{e.ruleForm.a8=d(a),""===e.ruleForm.a8?e.cnText="":e.cnText=f(e.ruleForm.a8)},onVerifyPhone:a=>{e.phone=V(a)},onVerifyTelPhone:a=>{e.telePhone=F(a)},onVerifyAccount:a=>{e.ruleForm.a11=t(a),e.account=h(e.ruleForm.a11)},onVerifyPassword:a=>{e.ruleForm.a12=t(a),e.password=w(e.ruleForm.a12)},onVerifyPasswordPowerful:a=>{e.ruleForm.a13=t(a),e.passwordPowerful=v(e.ruleForm.a13)},onVerifyPasswordStrength:a=>{e.ruleForm.a14=t(a),e.passwordStrength=y(e.ruleForm.a14)},onVerifyIPAddress:a=>{e.iPAddress=b(a)},onVerifyEmail:a=>{e.ruleForm.a16=t(a),e.email=I(e.ruleForm.a16)},onVerifyIDCard:a=>{e.ruleForm.a17=t(a),e.idCard=P(e.ruleForm.a17)},onVerifyFullName:a=>{e.ruleForm.a18=i(a),e.fullName=_(e.ruleForm.a18)},onVerifyPostalCode:a=>{e.ruleForm.a19=n(a),e.postalCode=U(e.ruleForm.a19)},onVerifyUrl:a=>{e.ruleForm.a20=i(a),e.url=q(e.ruleForm.a20)},onVerifyCarNum:a=>{e.ruleForm.a21=i(a),e.carNum=N(e.ruleForm.a21)},...l(e)}}},D=e=>(E("data-v-618e82ec"),e=e(),j(),e),H=D((()=>A("div",{class:"tools-warp-form-msg"},"验证可以输入大于0小于100的数字",-1))),L=T(" % "),M=D((()=>A("div",{class:"tools-warp-form-msg"},"验证可以输入大于0小于100的数字",-1))),z=T(" % "),X=D((()=>A("div",{class:"tools-warp-form-msg"}," 验证可以输入小数或整数，0 开始， . 只能出现一次，保留小数点后保留2位小数。(负数时，模拟拼接负号给后台)。 ",-1))),Y=D((()=>A("div",{class:"tools-warp-form-msg"},"验证只可以输入正整数，0 开始后面将不可以输入。",-1))),B=D((()=>A("div",{class:"tools-warp-form-msg"},"验证不可以输入空格与中文。",-1))),G=D((()=>A("div",{class:"tools-warp-form-msg"},"验证不可以输入空格与英文。",-1))),J=D((()=>A("div",{class:"tools-warp-form-msg"},"验证不可以输入空格。",-1))),K={class:"tools-warp-form-msg"},O={class:"tools-warp-form-msg"},Q=T("示例："),R=["innerHTML"],W={class:"tools-warp-form-msg"},Z=T(" 验证数字转成中文的大写。"),$={class:"tools-warp-form-msg-red"},ee={class:"tools-warp-form-msg"},ae=T(" 验证手机号码 (true: 正确，false: 不正确)。"),le={class:"tools-warp-form-msg-red"},re={class:"tools-warp-form-msg"},oe=T(" 验证国内电话号码 (true: 正确，false: 不正确)。"),se={class:"tools-warp-form-msg-red"},ue={class:"tools-warp-form-msg"},me=T(" 验证登录账号是否正确。字母开头，允许5-16字节，允许字母数字下划线 (true: 正确，false: 不正确)。"),de={class:"tools-warp-form-msg-red"},ne={class:"tools-warp-form-msg"},te=T(" 验证密码是否正确。以字母开头，长度在6~16之间，只能包含字母、数字和下划线 (true: 正确，false: 不正确)。"),pe={class:"tools-warp-form-msg-red"},ie={class:"tools-warp-form-msg"},ge=T(" 验证强密码是否正确。字母+数字+特殊字符，长度在6-16之间 (true: 正确，false: 不正确)。"),ce={class:"tools-warp-form-msg-red"},fe={class:"tools-warp-form-msg"},Ve=T(" 验证密码强度。返回 强、中、弱。(弱：纯数字，纯字母，纯特殊字符，中：字母+数字，字母+特殊字符，数字+特殊字符，强：字母+数字+特殊字符)"),Fe={class:"tools-warp-form-msg-red"},he={class:"tools-warp-form-msg"},we=T(" 验证IP地址是否正确。(true: 正确，false: 不正确)。"),ve={class:"tools-warp-form-msg-red"},ye={class:"tools-warp-form-msg"},be=T(" 验证邮箱是否正确。(true: 正确，false:不正确)。"),Ie={class:"tools-warp-form-msg-red"},Pe={class:"tools-warp-form-msg"},_e=T(" 验证身份证是否正确。(true: 正确，false:不正确)。"),Ue={class:"tools-warp-form-msg-red"},qe={class:"tools-warp-form-msg"},Ne=T(" 验证姓名是否正确，包括少数民族名字。(true: 正确，false:不正确)。"),xe={class:"tools-warp-form-msg-red"},Ce={class:"tools-warp-form-msg"},Ae=T(" 验证邮政编码是否正确，不能以 0 开始。(true: 正确，false:不正确)。"),Se={class:"tools-warp-form-msg-red"},Te={class:"tools-warp-form-msg"},Ee=T(" 验证url是否正确。(true: 正确，false:不正确)。"),je={class:"tools-warp-form-msg-red"},ke={class:"tools-warp-form-msg"},De=T(" 验证车牌号是否正确。(true: 正确，false:不正确)。"),He={class:"tools-warp-form-msg-red"};const Le=e(k,[["render",function(e,a,l,u,m,d){const n=r("el-input"),t=r("el-form-item"),p=r("el-form"),i=r("el-card");return x(),o(i,{shadow:"hover",header:"正则验证（一些项目中常用的正则）"},{default:s((()=>[C(p,{model:e.ruleForm,rules:e.rules,class:"tools-warp-form",size:"small","label-position":"top"},{default:s((()=>[C(t,{label:"验证百分比（不可以小数）:",prop:"a22"},{default:s((()=>[H,A("div",null,[C(n,{modelValue:e.ruleForm.a22,"onUpdate:modelValue":a[0]||(a[0]=a=>e.ruleForm.a22=a),onInput:a[1]||(a[1]=e=>u.onVerifyNumberPercentage(e)),placeholder:"请输入数字进行测试"},{append:s((()=>[L])),_:1},8,["modelValue"])])])),_:1}),C(t,{label:"验证百分比（可以小数）:",prop:"a23",class:"mt20"},{default:s((()=>[M,A("div",null,[C(n,{modelValue:e.ruleForm.a23,"onUpdate:modelValue":a[2]||(a[2]=a=>e.ruleForm.a23=a),onInput:a[3]||(a[3]=e=>u.onVerifyNumberPercentageFloat(e)),placeholder:"请输入数字进行测试"},{append:s((()=>[z])),_:1},8,["modelValue"])])])),_:1}),C(t,{label:"小数或整数:",prop:"a1",class:"mt20"},{default:s((()=>[X,A("div",null,[C(n,{modelValue:e.ruleForm.a1,"onUpdate:modelValue":a[4]||(a[4]=a=>e.ruleForm.a1=a),onInput:a[5]||(a[5]=e=>u.onVerifyNumberIntegerAndFloat(e)),placeholder:"请输入小数或整数进行测试"},null,8,["modelValue"])])])),_:1}),C(t,{label:"正整数:",prop:"a2",class:"mt20"},{default:s((()=>[Y,A("div",null,[C(n,{modelValue:e.ruleForm.a2,"onUpdate:modelValue":a[6]||(a[6]=a=>e.ruleForm.a2=a),onInput:a[7]||(a[7]=e=>u.onVerifiyNumberInteger(e)),placeholder:"请输入整数进行测试"},null,8,["modelValue"])])])),_:1}),C(t,{label:"去掉中文及空格:",prop:"a3",class:"mt20"},{default:s((()=>[B,A("div",null,[C(n,{modelValue:e.ruleForm.a3,"onUpdate:modelValue":a[8]||(a[8]=a=>e.ruleForm.a3=a),onInput:a[9]||(a[9]=e=>u.onVerifyCnAndSpace(e)),placeholder:"请输入内容进行测试"},null,8,["modelValue"])])])),_:1}),C(t,{label:"去掉英文及空格:",prop:"a4",class:"mt20"},{default:s((()=>[G,A("div",null,[C(n,{modelValue:e.ruleForm.a4,"onUpdate:modelValue":a[10]||(a[10]=a=>e.ruleForm.a4=a),onInput:a[11]||(a[11]=e=>u.onVerifyEnAndSpace(e)),placeholder:"请输入内容进行测试"},null,8,["modelValue"])])])),_:1}),C(t,{label:"禁止输入空格:",prop:"a5",class:"mt20"},{default:s((()=>[J,A("div",null,[C(n,{modelValue:e.ruleForm.a5,"onUpdate:modelValue":a[12]||(a[12]=a=>e.ruleForm.a5=a),onInput:a[13]||(a[13]=e=>u.onVerifyAndSpace(e)),placeholder:"请输入内容进行测试"},null,8,["modelValue"])])])),_:1}),C(t,{label:"金额用 `,` 区分开:",prop:"a6",class:"mt20"},{default:s((()=>[A("div",K,"金额添加 `,` 进行区分，便于阅读。"+S(e.ruleForm.a6),1),A("div",null,[C(n,{modelValue:e.ruleForm.a6,"onUpdate:modelValue":a[14]||(a[14]=a=>e.ruleForm.a6=a),onInput:a[15]||(a[15]=e=>u.onVerifyNumberComma(e)),placeholder:"请输入金额进行测试"},null,8,["modelValue"])])])),_:1}),C(t,{label:"匹配文字变色（搜索时）:",prop:"a7",class:"mt20"},{default:s((()=>[A("div",O,[Q,A("span",{innerHTML:e.text},null,8,R)]),A("div",null,[C(n,{modelValue:e.ruleForm.a7,"onUpdate:modelValue":a[16]||(a[16]=a=>e.ruleForm.a7=a),onInput:a[17]||(a[17]=e=>u.onVerifyTextColor(e)),placeholder:"请输入示例中的部分文字"},null,8,["modelValue"])])])),_:1}),C(t,{label:"数字转中文大写:",prop:"a8",class:"mt20"},{default:s((()=>[A("div",W,[Z,A("span",$,S(e.cnText),1)]),A("div",null,[C(n,{modelValue:e.ruleForm.a8,"onUpdate:modelValue":a[18]||(a[18]=a=>e.ruleForm.a8=a),onInput:a[19]||(a[19]=e=>u.onVerifyNumberCnUppercase(e)),placeholder:"请输入金额进行测试"},null,8,["modelValue"])])])),_:1}),C(t,{label:"手机号码:",prop:"a9",class:"mt20"},{default:s((()=>[A("div",ee,[ae,A("span",le,S(e.phone),1)]),A("div",null,[C(n,{modelValue:e.ruleForm.a9,"onUpdate:modelValue":a[20]||(a[20]=a=>e.ruleForm.a9=a),onInput:a[21]||(a[21]=e=>u.onVerifyPhone(e)),placeholder:"请输入手机号进行测试",maxlength:"11"},null,8,["modelValue"])])])),_:1}),C(t,{label:"国内电话号码:",prop:"a10",class:"mt20"},{default:s((()=>[A("div",re,[oe,A("span",se,S(e.telePhone),1)]),A("div",null,[C(n,{modelValue:e.ruleForm.a10,"onUpdate:modelValue":a[22]||(a[22]=a=>e.ruleForm.a10=a),onInput:a[23]||(a[23]=e=>u.onVerifyTelPhone(e)),placeholder:"请输入国内电话号码进行测试",maxlength:"12"},null,8,["modelValue"])])])),_:1}),C(t,{label:"登录账号:",prop:"a11",class:"mt20"},{default:s((()=>[A("div",ue,[me,A("span",de,S(e.account),1)]),A("div",null,[C(n,{modelValue:e.ruleForm.a11,"onUpdate:modelValue":a[24]||(a[24]=a=>e.ruleForm.a11=a),onInput:a[25]||(a[25]=e=>u.onVerifyAccount(e)),placeholder:"请输入账号进行测试",maxlength:"16"},null,8,["modelValue"])])])),_:1}),C(t,{label:"密码:",prop:"a12",class:"mt20"},{default:s((()=>[A("div",ne,[te,A("span",pe,S(e.password),1)]),A("div",null,[C(n,{modelValue:e.ruleForm.a12,"onUpdate:modelValue":a[26]||(a[26]=a=>e.ruleForm.a12=a),onInput:a[27]||(a[27]=e=>u.onVerifyPassword(e)),placeholder:"请输入密码进行测试",maxlength:"16"},null,8,["modelValue"])])])),_:1}),C(t,{label:"强密码:",prop:"a13",class:"mt20"},{default:s((()=>[A("div",ie,[ge,A("span",ce,S(e.passwordPowerful),1)]),A("div",null,[C(n,{modelValue:e.ruleForm.a13,"onUpdate:modelValue":a[28]||(a[28]=a=>e.ruleForm.a13=a),onInput:a[29]||(a[29]=e=>u.onVerifyPasswordPowerful(e)),placeholder:"请输入密码进行测试",maxlength:"16"},null,8,["modelValue"])])])),_:1}),C(t,{label:"密码强度:",prop:"a14",class:"mt20"},{default:s((()=>[A("div",fe,[Ve,A("span",Fe,S(e.passwordStrength),1)]),A("div",null,[C(n,{modelValue:e.ruleForm.a14,"onUpdate:modelValue":a[30]||(a[30]=a=>e.ruleForm.a14=a),onInput:a[31]||(a[31]=e=>u.onVerifyPasswordStrength(e)),placeholder:"请输入密码进行测试",maxlength:"16"},null,8,["modelValue"])])])),_:1}),C(t,{label:"IP地址:",prop:"a15",class:"mt20"},{default:s((()=>[A("div",he,[we,A("span",ve,S(e.iPAddress),1)]),A("div",null,[C(n,{modelValue:e.ruleForm.a15,"onUpdate:modelValue":a[32]||(a[32]=a=>e.ruleForm.a15=a),onInput:a[33]||(a[33]=e=>u.onVerifyIPAddress(e)),placeholder:"请输入IP地址进行测试"},null,8,["modelValue"])])])),_:1}),C(t,{label:"邮箱:",prop:"a16",class:"mt20"},{default:s((()=>[A("div",ye,[be,A("span",Ie,S(e.email),1)]),A("div",null,[C(n,{modelValue:e.ruleForm.a16,"onUpdate:modelValue":a[34]||(a[34]=a=>e.ruleForm.a16=a),onInput:a[35]||(a[35]=e=>u.onVerifyEmail(e)),placeholder:"请输入邮箱进行测试"},null,8,["modelValue"])])])),_:1}),C(t,{label:"身份证:",prop:"a17",class:"mt20"},{default:s((()=>[A("div",Pe,[_e,A("span",Ue,S(e.idCard),1)]),A("div",null,[C(n,{modelValue:e.ruleForm.a17,"onUpdate:modelValue":a[36]||(a[36]=a=>e.ruleForm.a17=a),onInput:a[37]||(a[37]=e=>u.onVerifyIDCard(e)),placeholder:"请输入身份证进行测试",maxlength:"18"},null,8,["modelValue"])])])),_:1}),C(t,{label:"姓名:",prop:"a18",class:"mt20"},{default:s((()=>[A("div",qe,[Ne,A("span",xe,S(e.fullName),1)]),A("div",null,[C(n,{modelValue:e.ruleForm.a18,"onUpdate:modelValue":a[38]||(a[38]=a=>e.ruleForm.a18=a),onInput:a[39]||(a[39]=e=>u.onVerifyFullName(e)),placeholder:"请输入姓名进行测试"},null,8,["modelValue"])])])),_:1}),C(t,{label:"邮政编码:",prop:"a19",class:"mt20"},{default:s((()=>[A("div",Ce,[Ae,A("span",Se,S(e.postalCode),1)]),A("div",null,[C(n,{modelValue:e.ruleForm.a19,"onUpdate:modelValue":a[40]||(a[40]=a=>e.ruleForm.a19=a),onInput:a[41]||(a[41]=e=>u.onVerifyPostalCode(e)),placeholder:"请输入邮政编码进行测试",maxlength:"6"},null,8,["modelValue"])])])),_:1}),C(t,{label:"url:",prop:"a20",class:"mt20"},{default:s((()=>[A("div",Te,[Ee,A("span",je,S(e.url),1)]),A("div",null,[C(n,{modelValue:e.ruleForm.a20,"onUpdate:modelValue":a[42]||(a[42]=a=>e.ruleForm.a20=a),onInput:a[43]||(a[43]=e=>u.onVerifyUrl(e)),placeholder:"请输入内容进行测试"},null,8,["modelValue"])])])),_:1}),C(t,{label:"车牌号:",prop:"a21",class:"mt20"},{default:s((()=>[A("div",ke,[De,A("span",He,S(e.carNum),1)]),A("div",null,[C(n,{modelValue:e.ruleForm.a21,"onUpdate:modelValue":a[44]||(a[44]=a=>e.ruleForm.a21=a),onInput:a[45]||(a[45]=e=>u.onVerifyCarNum(e)),placeholder:"请输入车牌号进行测试"},null,8,["modelValue"])])])),_:1})])),_:1},8,["model","rules"])])),_:1})}],["__scopeId","data-v-618e82ec"]]);export{Le as default};
