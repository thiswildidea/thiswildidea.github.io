import{_ as a,A as e,k as t,p as o,r as i,a as d,h as n,w as l,o as s,F as c,e as m,f as r,b as p,t as h,y as g,X as x,Y as F}from"./index.1704934934962.js";const u=[{img:"https://news.sznews.com/pic/2021-03/09/e37326cc-4583-48f3-aa00-ecc2392d319d.jpg",title:"36分钟，深圳平均通勤时间出炉！GDP10强城市中仅输杭州",evaluate:(10*Math.random()).toFixed(2),collection:(100*Math.random()).toFixed(2),price:(10*Math.random()).toFixed(2),monSales:(20*Math.random()).toFixed(2),id:1},{img:"http://news.sznews.com/pic/2021-03/09/78cf72b6-e2d9-459d-a368-470414a027f4679cf4ea-26fa-48c8-9fee-c2d092a91400.png",title:"为爱而动，“红色鹊桥”三八妇女节交友联谊活动助力深圳女孩脱单",evaluate:(10*Math.random()).toFixed(2),collection:(100*Math.random()).toFixed(2),price:(10*Math.random()).toFixed(2),monSales:(20*Math.random()).toFixed(2),id:2},{img:"http://news.sznews.com/pic/2021-03/09/1faf3c6e-1250-4e6b-b072-4a331553e027.jpg",title:"粤桂协作“背水一战” 解决广西大化县3.7万人饮水难题",evaluate:(10*Math.random()).toFixed(2),collection:(100*Math.random()).toFixed(2),price:(10*Math.random()).toFixed(2),monSales:(20*Math.random()).toFixed(2),id:3},{img:"https://news.sznews.com/pic/2021-03/09/9fcf6dd4-1e80-4497-bdc9-83dc7246d170.jpg.2",title:"城镇就业女性平均薪酬6847元 女性职场渗透率提升",evaluate:(10*Math.random()).toFixed(2),collection:(100*Math.random()).toFixed(2),price:(10*Math.random()).toFixed(2),monSales:(20*Math.random()).toFixed(2),id:4},{img:"https://news.sznews.com/pic/2021-03/09/1bd78227-4126-4a43-bdf6-48ead6edd1bf.jpg.2",title:"深圳：实现“从0到1”源头创新，推进大湾区综合性国家科学中心建设！",evaluate:(10*Math.random()).toFixed(2),collection:(100*Math.random()).toFixed(2),price:(10*Math.random()).toFixed(2),monSales:(20*Math.random()).toFixed(2),id:5},{img:"http://news.sznews.com/pic/2021-03/08/9ea943a3-3ae8-4f49-8296-711ec36ef8c6_watermark.png",title:"煖声音第126期|愿你有诗酒趁年华的洒脱，也有岁月沉淀后的坚定从容",evaluate:(10*Math.random()).toFixed(2),collection:(100*Math.random()).toFixed(2),price:(10*Math.random()).toFixed(2),monSales:(20*Math.random()).toFixed(2),id:6},{img:"https://news.sznews.com/pic/2021-03/08/a95ba232-1422-4f7e-b85f-c61d486c8659.jpg.2",title:"姐妹们一起来吐槽，最不能接受男人的缺点！",evaluate:(10*Math.random()).toFixed(2),collection:(100*Math.random()).toFixed(2),price:(10*Math.random()).toFixed(2),monSales:(20*Math.random()).toFixed(2),id:7},{img:"http://news.sznews.com/pic/2021-03/08/76816bf0-3899-4c7e-bc6e-079b5ba8725e.jpg",title:"民生小事 | 手机遗落出租车 热心民警帮找回",evaluate:(10*Math.random()).toFixed(2),collection:(100*Math.random()).toFixed(2),price:(10*Math.random()).toFixed(2),monSales:(20*Math.random()).toFixed(2),id:8},{img:"https://news.sznews.com/pic/2021-03/08/28ed70d4-71f5-4abb-bf7b-0294bece9e43.jpg.2",title:"“十三五”：深圳交上靓丽答卷 发展动力加快转换",evaluate:(10*Math.random()).toFixed(2),collection:(100*Math.random()).toFixed(2),price:(10*Math.random()).toFixed(2),monSales:(20*Math.random()).toFixed(2),id:9},{img:"http://news.sznews.com/pic/2021-03/05/d13ae31f-fd45-431a-b48e-c5895bbc193e.png",title:"深圳湾公园一女子落水，三名男子接力及时施救",evaluate:(10*Math.random()).toFixed(2),collection:(100*Math.random()).toFixed(2),price:(10*Math.random()).toFixed(2),monSales:(20*Math.random()).toFixed(2),id:10}],M={name:"pagesListAdapt",setup(){const a=e(),i=t({tableData:{data:u,total:99,loading:!1,param:{pageNum:1,pageSize:10}}});return{onTableItemClick:e=>{a.push({path:"/pages/filteringDetails",query:{id:e.id}})},onHandleSizeChange:a=>{i.tableData.param.pageSize=a},onHandleCurrentChange:a=>{i.tableData.param.pageNum=a},...o(i)}}},b={class:"list-adapt-container"},f={key:0,class:"flex-warp"},w={class:"flex-warp-item"},v={class:"flex-warp-item-box"},z={class:"item-img"},S=["src"],C={class:"item-txt"},k={class:"item-txt-title"},D={class:"item-txt-other"},y={style:{width:"100%"}},j={class:"item-txt-msg mb10"},_={class:"ml10"},H={class:"item-txt-msg item-txt-price"},I={class:"font-price"},N=(a=>(x("data-v-2ea48afd"),a=a(),F(),a))((()=>p("span",null,"￥",-1))),A={class:"font"};const T=a(M,[["render",function(a,e,t,o,x,F){const u=i("el-col"),M=i("el-row"),T=i("el-empty"),q=i("el-pagination"),G=i("el-card");return s(),d("div",b,[n(G,{shadow:"hover",header:"列表自适应演示(改变窗口查看效果)"},{default:l((()=>[a.tableData.data.length>0?(s(),d("div",f,[n(M,{gutter:15},{default:l((()=>[(s(!0),d(c,null,m(a.tableData.data,((a,e)=>(s(),r(u,{xs:24,sm:12,md:8,lg:6,xl:4,class:"mb15",key:e,onClick:e=>o.onTableItemClick(a)},{default:l((()=>[p("div",w,[p("div",v,[p("div",z,[p("img",{src:a.img},null,8,S)]),p("div",C,[p("div",k,h(a.title),1),p("div",D,[p("div",y,[p("div",j,[p("span",null,"评价 "+h(a.evaluate),1),p("span",_,"收藏 "+h(a.collection),1)]),p("div",H,[p("span",I,[N,p("span",A,h(a.price),1)]),p("span",null,"月销"+h(a.monSales)+"笔",1)])])])])])])])),_:2},1032,["onClick"])))),128))])),_:1})])):(s(),r(T,{key:1,description:"暂无数据"})),a.tableData.data.length>0?(s(),r(q,{key:2,style:{"text-align":"right"},background:"",onSizeChange:o.onHandleSizeChange,onCurrentChange:o.onHandleCurrentChange,"page-sizes":[10,20,30],"current-page":a.tableData.param.pageNum,"page-size":a.tableData.param.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:a.tableData.total},null,8,["onSizeChange","onCurrentChange","current-page","page-size","total"])):g("",!0)])),_:1})])}],["__scopeId","data-v-2ea48afd"]]);export{T as default};
