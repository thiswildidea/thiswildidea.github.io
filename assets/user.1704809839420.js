import{at as t}from"./index.1704809839420.js";function e(e){return t({url:"/system/user/list",method:"get",params:e})}function s(e,s){return t({url:"/system/user/changeStatus",method:"put",data:{userId:e,status:s}})}function r(e){return t({url:"/system/user/"+e,method:"get"})}function u(){return t({url:"/system/user/getInit",method:"get"})}function n(){return t({url:"/system/user/getRoPo",method:"get"})}function a(e){return t({url:"/system/user/"+e,method:"delete"})}function o(e){return t({url:"/system/user",method:"post",data:e})}function m(e){return t({url:"/system/user",method:"put",data:e})}function d(e){return t({url:"/system/user/pwd",method:"put",data:e})}function i(e){return t({url:"/system/user/export",method:"get",params:e})}export{m as a,r as b,o as c,u as d,s as e,a as f,n as g,i as h,e as l,d as u};
