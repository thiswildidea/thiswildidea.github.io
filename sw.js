if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const t=s=>l(s,r),o={module:{uri:r},exports:u,require:t};e[r]=Promise.all(i.map((s=>o[s]||t(s)))).then((s=>(n(...s),u)))}}define(["./workbox-f407626e"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/401.1704876019736.css",revision:null},{url:"assets/401.1704876019736.js",revision:null},{url:"assets/401.1704876019736.png",revision:null},{url:"assets/404.1704876019736.css",revision:null},{url:"assets/404.1704876019736.js",revision:null},{url:"assets/404.1704876019736.png",revision:null},{url:"assets/account.1704876019736.css",revision:null},{url:"assets/account.1704876019736.js",revision:null},{url:"assets/api.1704876019736.js",revision:null},{url:"assets/basicInfoForm.1704876019736.js",revision:null},{url:"assets/bg-login.1704876019736.png",revision:null},{url:"assets/bmap.1704876019736.js",revision:null},{url:"assets/demo1.1704876019736.css",revision:null},{url:"assets/demo1.1704876019736.js",revision:null},{url:"assets/demo2.1704876019736.css",revision:null},{url:"assets/demo2.1704876019736.js",revision:null},{url:"assets/dept.1704876019736.js",revision:null},{url:"assets/details.1704876019736.js",revision:null},{url:"assets/details1.1704876019736.js",revision:null},{url:"assets/dictList.1704876019736.js",revision:null},{url:"assets/echarts.1704876019736.js",revision:null},{url:"assets/editDictItem.1704876019736.js",revision:null},{url:"assets/editMenu.1704876019736.js",revision:null},{url:"assets/editModule.1704876019736.css",revision:null},{url:"assets/editModule.1704876019736.js",revision:null},{url:"assets/editModule.17048760197362.js",revision:null},{url:"assets/editModule.17048760197363.js",revision:null},{url:"assets/editModule.17048760197364.js",revision:null},{url:"assets/editModule.17048760197365.js",revision:null},{url:"assets/editModule.17048760197366.js",revision:null},{url:"assets/editModule.17048760197367.js",revision:null},{url:"assets/editModule.17048760197368.js",revision:null},{url:"assets/editTable.1704876019736.js",revision:null},{url:"assets/esrilogo.1704876019736.png",revision:null},{url:"assets/formRulesOne.1704876019736.js",revision:null},{url:"assets/formRulesThree.1704876019736.js",revision:null},{url:"assets/formRulesTwo.1704876019736.js",revision:null},{url:"assets/genInfoForm.1704876019736.js",revision:null},{url:"assets/getStyleSheets.1704876019736.js",revision:null},{url:"assets/head.1704876019736.css",revision:null},{url:"assets/head.1704876019736.js",revision:null},{url:"assets/iframes.1704876019736.js",revision:null},{url:"assets/importTable.1704876019736.js",revision:null},{url:"assets/index.1704876019736.css",revision:null},{url:"assets/index.170487601973610.css",revision:null},{url:"assets/index.170487601973610.js",revision:null},{url:"assets/index.170487601973611.css",revision:null},{url:"assets/index.170487601973611.js",revision:null},{url:"assets/index.170487601973612.css",revision:null},{url:"assets/index.170487601973612.js",revision:null},{url:"assets/index.170487601973613.css",revision:null},{url:"assets/index.170487601973613.js",revision:null},{url:"assets/index.170487601973614.css",revision:null},{url:"assets/index.170487601973614.js",revision:null},{url:"assets/index.170487601973615.css",revision:null},{url:"assets/index.170487601973615.js",revision:null},{url:"assets/index.170487601973616.css",revision:null},{url:"assets/index.170487601973616.js",revision:null},{url:"assets/index.170487601973617.css",revision:null},{url:"assets/index.170487601973617.js",revision:null},{url:"assets/index.170487601973618.css",revision:null},{url:"assets/index.170487601973618.js",revision:null},{url:"assets/index.170487601973619.css",revision:null},{url:"assets/index.170487601973619.js",revision:null},{url:"assets/index.17048760197362.css",revision:null},{url:"assets/index.17048760197362.js",revision:null},{url:"assets/index.170487601973620.css",revision:null},{url:"assets/index.170487601973620.js",revision:null},{url:"assets/index.170487601973621.css",revision:null},{url:"assets/index.170487601973621.js",revision:null},{url:"assets/index.170487601973622.css",revision:null},{url:"assets/index.170487601973622.js",revision:null},{url:"assets/index.170487601973623.css",revision:null},{url:"assets/index.170487601973623.js",revision:null},{url:"assets/index.170487601973624.css",revision:null},{url:"assets/index.170487601973624.js",revision:null},{url:"assets/index.170487601973625.css",revision:null},{url:"assets/index.170487601973625.js",revision:null},{url:"assets/index.170487601973626.css",revision:null},{url:"assets/index.170487601973626.js",revision:null},{url:"assets/index.170487601973627.css",revision:null},{url:"assets/index.170487601973627.js",revision:null},{url:"assets/index.170487601973628.css",revision:null},{url:"assets/index.170487601973628.js",revision:null},{url:"assets/index.170487601973629.css",revision:null},{url:"assets/index.170487601973629.js",revision:null},{url:"assets/index.17048760197363.css",revision:null},{url:"assets/index.17048760197363.js",revision:null},{url:"assets/index.170487601973630.css",revision:null},{url:"assets/index.170487601973630.js",revision:null},{url:"assets/index.170487601973631.css",revision:null},{url:"assets/index.170487601973631.js",revision:null},{url:"assets/index.170487601973632.css",revision:null},{url:"assets/index.170487601973632.js",revision:null},{url:"assets/index.170487601973633.css",revision:null},{url:"assets/index.170487601973633.js",revision:null},{url:"assets/index.170487601973634.css",revision:null},{url:"assets/index.170487601973634.js",revision:null},{url:"assets/index.170487601973635.css",revision:null},{url:"assets/index.170487601973635.js",revision:null},{url:"assets/index.170487601973636.css",revision:null},{url:"assets/index.170487601973636.js",revision:null},{url:"assets/index.170487601973637.css",revision:null},{url:"assets/index.170487601973637.js",revision:null},{url:"assets/index.170487601973638.css",revision:null},{url:"assets/index.170487601973638.js",revision:null},{url:"assets/index.170487601973639.css",revision:null},{url:"assets/index.170487601973639.js",revision:null},{url:"assets/index.17048760197364.css",revision:null},{url:"assets/index.17048760197364.js",revision:null},{url:"assets/index.170487601973640.css",revision:null},{url:"assets/index.170487601973640.js",revision:null},{url:"assets/index.170487601973641.css",revision:null},{url:"assets/index.170487601973641.js",revision:null},{url:"assets/index.170487601973642.css",revision:null},{url:"assets/index.170487601973642.js",revision:null},{url:"assets/index.170487601973643.css",revision:null},{url:"assets/index.170487601973643.js",revision:null},{url:"assets/index.170487601973644.css",revision:null},{url:"assets/index.170487601973644.js",revision:null},{url:"assets/index.170487601973645.css",revision:null},{url:"assets/index.170487601973645.js",revision:null},{url:"assets/index.170487601973646.css",revision:null},{url:"assets/index.170487601973646.js",revision:null},{url:"assets/index.170487601973647.js",revision:null},{url:"assets/index.170487601973648.js",revision:null},{url:"assets/index.170487601973649.js",revision:null},{url:"assets/index.17048760197365.css",revision:null},{url:"assets/index.17048760197365.js",revision:null},{url:"assets/index.170487601973650.js",revision:null},{url:"assets/index.170487601973651.js",revision:null},{url:"assets/index.170487601973652.js",revision:null},{url:"assets/index.170487601973653.js",revision:null},{url:"assets/index.170487601973654.js",revision:null},{url:"assets/index.170487601973655.js",revision:null},{url:"assets/index.170487601973656.js",revision:null},{url:"assets/index.170487601973657.js",revision:null},{url:"assets/index.170487601973658.js",revision:null},{url:"assets/index.170487601973659.js",revision:null},{url:"assets/index.17048760197366.css",revision:null},{url:"assets/index.17048760197366.js",revision:null},{url:"assets/index.170487601973660.js",revision:null},{url:"assets/index.170487601973661.js",revision:null},{url:"assets/index.170487601973662.js",revision:null},{url:"assets/index.170487601973663.js",revision:null},{url:"assets/index.170487601973664.js",revision:null},{url:"assets/index.170487601973665.js",revision:null},{url:"assets/index.170487601973666.js",revision:null},{url:"assets/index.170487601973667.js",revision:null},{url:"assets/index.170487601973668.js",revision:null},{url:"assets/index.170487601973669.js",revision:null},{url:"assets/index.17048760197367.css",revision:null},{url:"assets/index.17048760197367.js",revision:null},{url:"assets/index.170487601973670.js",revision:null},{url:"assets/index.170487601973671.js",revision:null},{url:"assets/index.170487601973672.js",revision:null},{url:"assets/index.170487601973673.js",revision:null},{url:"assets/index.170487601973674.js",revision:null},{url:"assets/index.170487601973675.js",revision:null},{url:"assets/index.170487601973676.js",revision:null},{url:"assets/index.170487601973677.js",revision:null},{url:"assets/index.170487601973678.js",revision:null},{url:"assets/index.170487601973679.js",revision:null},{url:"assets/index.17048760197368.css",revision:null},{url:"assets/index.17048760197368.js",revision:null},{url:"assets/index.170487601973680.js",revision:null},{url:"assets/index.170487601973681.js",revision:null},{url:"assets/index.170487601973682.js",revision:null},{url:"assets/index.170487601973683.js",revision:null},{url:"assets/index.170487601973684.js",revision:null},{url:"assets/index.17048760197369.css",revision:null},{url:"assets/index.17048760197369.js",revision:null},{url:"assets/link.1704876019736.js",revision:null},{url:"assets/menu.1704876019736.js",revision:null},{url:"assets/mobile.1704876019736.css",revision:null},{url:"assets/mobile.1704876019736.js",revision:null},{url:"assets/parent.1704876019736.js",revision:null},{url:"assets/qrcode.1704876019736.js",revision:null},{url:"assets/scan.1704876019736.css",revision:null},{url:"assets/scan.1704876019736.js",revision:null},{url:"assets/sortable.esm.1704876019736.js",revision:null},{url:"assets/string.1704876019736.js",revision:null},{url:"assets/table.1704876019736.js",revision:null},{url:"assets/type.1704876019736.js",revision:null},{url:"assets/user.1704876019736.js",revision:null},{url:"favicon.ico",revision:"9fac53a3eff58418b76fef335f279147"},{url:"index.html",revision:"f0ede144a25793dbd8d4686b614262f1"},{url:"menu/anaysis.svg",revision:"2c2b9a37fad83c6e110bf1035ff41536"},{url:"menu/basemap.svg",revision:"60932e24d676463b381814237375dfd4"},{url:"menu/datatype.svg",revision:"60932e24d676463b381814237375dfd4"},{url:"menu/edit.svg",revision:"2c2b9a37fad83c6e110bf1035ff41536"},{url:"menu/function.svg",revision:"8271f34fdc190104976d063cc8f3b238"},{url:"menu/lastupdate.svg",revision:"8271f34fdc190104976d063cc8f3b238"},{url:"menu/query.svg",revision:"8271f34fdc190104976d063cc8f3b238"},{url:"menu/urbanGeo.svg",revision:"2c2b9a37fad83c6e110bf1035ff41536"},{url:"menu/visual.svg",revision:"60932e24d676463b381814237375dfd4"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"manifest.webmanifest",revision:"efb8f6fb4119ccbfcc5d702aa35421fe"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html"))),s.registerRoute(/^https:\/\/jsonplaceholder/,new s.CacheFirst({cacheName:"test-external-api",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
