if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const t=s=>l(s,r),o={module:{uri:r},exports:u,require:t};e[r]=Promise.all(i.map((s=>o[s]||t(s)))).then((s=>(n(...s),u)))}}define(["./workbox-f407626e"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/401.1704887228178.css",revision:null},{url:"assets/401.1704887228178.js",revision:null},{url:"assets/401.1704887228178.png",revision:null},{url:"assets/404.1704887228178.css",revision:null},{url:"assets/404.1704887228178.js",revision:null},{url:"assets/404.1704887228178.png",revision:null},{url:"assets/account.1704887228178.css",revision:null},{url:"assets/account.1704887228178.js",revision:null},{url:"assets/api.1704887228178.js",revision:null},{url:"assets/basicInfoForm.1704887228178.js",revision:null},{url:"assets/bg-login.1704887228178.png",revision:null},{url:"assets/bmap.1704887228178.js",revision:null},{url:"assets/demo1.1704887228178.css",revision:null},{url:"assets/demo1.1704887228178.js",revision:null},{url:"assets/demo2.1704887228178.css",revision:null},{url:"assets/demo2.1704887228178.js",revision:null},{url:"assets/dept.1704887228178.js",revision:null},{url:"assets/details.1704887228178.js",revision:null},{url:"assets/details1.1704887228178.js",revision:null},{url:"assets/dictList.1704887228178.js",revision:null},{url:"assets/echarts.1704887228178.js",revision:null},{url:"assets/editDictItem.1704887228178.js",revision:null},{url:"assets/editMenu.1704887228178.js",revision:null},{url:"assets/editModule.1704887228178.css",revision:null},{url:"assets/editModule.1704887228178.js",revision:null},{url:"assets/editModule.17048872281782.js",revision:null},{url:"assets/editModule.17048872281783.js",revision:null},{url:"assets/editModule.17048872281784.js",revision:null},{url:"assets/editModule.17048872281785.js",revision:null},{url:"assets/editModule.17048872281786.js",revision:null},{url:"assets/editModule.17048872281787.js",revision:null},{url:"assets/editModule.17048872281788.js",revision:null},{url:"assets/editTable.1704887228178.js",revision:null},{url:"assets/esrilogo.1704887228178.png",revision:null},{url:"assets/fonts/CalciteWebCoreIcons.svg",revision:null},{url:"assets/formRulesOne.1704887228178.js",revision:null},{url:"assets/formRulesThree.1704887228178.js",revision:null},{url:"assets/formRulesTwo.1704887228178.js",revision:null},{url:"assets/genInfoForm.1704887228178.js",revision:null},{url:"assets/getStyleSheets.1704887228178.js",revision:null},{url:"assets/head.1704887228178.css",revision:null},{url:"assets/head.1704887228178.js",revision:null},{url:"assets/iframes.1704887228178.js",revision:null},{url:"assets/importTable.1704887228178.js",revision:null},{url:"assets/index.1704887228178.css",revision:null},{url:"assets/index.170488722817810.css",revision:null},{url:"assets/index.170488722817810.js",revision:null},{url:"assets/index.170488722817811.css",revision:null},{url:"assets/index.170488722817811.js",revision:null},{url:"assets/index.170488722817812.css",revision:null},{url:"assets/index.170488722817812.js",revision:null},{url:"assets/index.170488722817813.css",revision:null},{url:"assets/index.170488722817813.js",revision:null},{url:"assets/index.170488722817814.css",revision:null},{url:"assets/index.170488722817814.js",revision:null},{url:"assets/index.170488722817815.css",revision:null},{url:"assets/index.170488722817815.js",revision:null},{url:"assets/index.170488722817816.css",revision:null},{url:"assets/index.170488722817816.js",revision:null},{url:"assets/index.170488722817817.css",revision:null},{url:"assets/index.170488722817817.js",revision:null},{url:"assets/index.170488722817818.css",revision:null},{url:"assets/index.170488722817818.js",revision:null},{url:"assets/index.170488722817819.css",revision:null},{url:"assets/index.170488722817819.js",revision:null},{url:"assets/index.17048872281782.css",revision:null},{url:"assets/index.17048872281782.js",revision:null},{url:"assets/index.170488722817820.css",revision:null},{url:"assets/index.170488722817820.js",revision:null},{url:"assets/index.170488722817821.css",revision:null},{url:"assets/index.170488722817821.js",revision:null},{url:"assets/index.170488722817822.css",revision:null},{url:"assets/index.170488722817822.js",revision:null},{url:"assets/index.170488722817823.css",revision:null},{url:"assets/index.170488722817823.js",revision:null},{url:"assets/index.170488722817824.css",revision:null},{url:"assets/index.170488722817824.js",revision:null},{url:"assets/index.170488722817825.css",revision:null},{url:"assets/index.170488722817825.js",revision:null},{url:"assets/index.170488722817826.css",revision:null},{url:"assets/index.170488722817826.js",revision:null},{url:"assets/index.170488722817827.css",revision:null},{url:"assets/index.170488722817827.js",revision:null},{url:"assets/index.170488722817828.css",revision:null},{url:"assets/index.170488722817828.js",revision:null},{url:"assets/index.170488722817829.css",revision:null},{url:"assets/index.170488722817829.js",revision:null},{url:"assets/index.17048872281783.css",revision:null},{url:"assets/index.17048872281783.js",revision:null},{url:"assets/index.170488722817830.css",revision:null},{url:"assets/index.170488722817830.js",revision:null},{url:"assets/index.170488722817831.css",revision:null},{url:"assets/index.170488722817831.js",revision:null},{url:"assets/index.170488722817832.css",revision:null},{url:"assets/index.170488722817832.js",revision:null},{url:"assets/index.170488722817833.css",revision:null},{url:"assets/index.170488722817833.js",revision:null},{url:"assets/index.170488722817834.css",revision:null},{url:"assets/index.170488722817834.js",revision:null},{url:"assets/index.170488722817835.css",revision:null},{url:"assets/index.170488722817835.js",revision:null},{url:"assets/index.170488722817836.css",revision:null},{url:"assets/index.170488722817836.js",revision:null},{url:"assets/index.170488722817837.css",revision:null},{url:"assets/index.170488722817837.js",revision:null},{url:"assets/index.170488722817838.css",revision:null},{url:"assets/index.170488722817838.js",revision:null},{url:"assets/index.170488722817839.css",revision:null},{url:"assets/index.170488722817839.js",revision:null},{url:"assets/index.17048872281784.css",revision:null},{url:"assets/index.17048872281784.js",revision:null},{url:"assets/index.170488722817840.css",revision:null},{url:"assets/index.170488722817840.js",revision:null},{url:"assets/index.170488722817841.css",revision:null},{url:"assets/index.170488722817841.js",revision:null},{url:"assets/index.170488722817842.css",revision:null},{url:"assets/index.170488722817842.js",revision:null},{url:"assets/index.170488722817843.css",revision:null},{url:"assets/index.170488722817843.js",revision:null},{url:"assets/index.170488722817844.css",revision:null},{url:"assets/index.170488722817844.js",revision:null},{url:"assets/index.170488722817845.css",revision:null},{url:"assets/index.170488722817845.js",revision:null},{url:"assets/index.170488722817846.css",revision:null},{url:"assets/index.170488722817846.js",revision:null},{url:"assets/index.170488722817847.js",revision:null},{url:"assets/index.170488722817848.js",revision:null},{url:"assets/index.170488722817849.js",revision:null},{url:"assets/index.17048872281785.css",revision:null},{url:"assets/index.17048872281785.js",revision:null},{url:"assets/index.170488722817850.js",revision:null},{url:"assets/index.170488722817851.js",revision:null},{url:"assets/index.170488722817852.js",revision:null},{url:"assets/index.170488722817853.js",revision:null},{url:"assets/index.170488722817854.js",revision:null},{url:"assets/index.170488722817855.js",revision:null},{url:"assets/index.170488722817856.js",revision:null},{url:"assets/index.170488722817857.js",revision:null},{url:"assets/index.170488722817858.js",revision:null},{url:"assets/index.170488722817859.js",revision:null},{url:"assets/index.17048872281786.css",revision:null},{url:"assets/index.17048872281786.js",revision:null},{url:"assets/index.170488722817860.js",revision:null},{url:"assets/index.170488722817861.js",revision:null},{url:"assets/index.170488722817862.js",revision:null},{url:"assets/index.170488722817863.js",revision:null},{url:"assets/index.170488722817864.js",revision:null},{url:"assets/index.170488722817865.js",revision:null},{url:"assets/index.170488722817866.js",revision:null},{url:"assets/index.170488722817867.js",revision:null},{url:"assets/index.170488722817868.js",revision:null},{url:"assets/index.170488722817869.js",revision:null},{url:"assets/index.17048872281787.css",revision:null},{url:"assets/index.17048872281787.js",revision:null},{url:"assets/index.170488722817870.js",revision:null},{url:"assets/index.170488722817871.js",revision:null},{url:"assets/index.170488722817872.js",revision:null},{url:"assets/index.170488722817873.js",revision:null},{url:"assets/index.170488722817874.js",revision:null},{url:"assets/index.170488722817875.js",revision:null},{url:"assets/index.170488722817876.js",revision:null},{url:"assets/index.170488722817877.js",revision:null},{url:"assets/index.170488722817878.js",revision:null},{url:"assets/index.170488722817879.js",revision:null},{url:"assets/index.17048872281788.css",revision:null},{url:"assets/index.17048872281788.js",revision:null},{url:"assets/index.170488722817880.js",revision:null},{url:"assets/index.170488722817881.js",revision:null},{url:"assets/index.170488722817882.js",revision:null},{url:"assets/index.170488722817883.js",revision:null},{url:"assets/index.170488722817884.js",revision:null},{url:"assets/index.17048872281789.css",revision:null},{url:"assets/index.17048872281789.js",revision:null},{url:"assets/link.1704887228178.js",revision:null},{url:"assets/menu.1704887228178.js",revision:null},{url:"assets/mobile.1704887228178.css",revision:null},{url:"assets/mobile.1704887228178.js",revision:null},{url:"assets/parent.1704887228178.js",revision:null},{url:"assets/qrcode.1704887228178.js",revision:null},{url:"assets/scan.1704887228178.css",revision:null},{url:"assets/scan.1704887228178.js",revision:null},{url:"assets/sortable.esm.1704887228178.js",revision:null},{url:"assets/string.1704887228178.js",revision:null},{url:"assets/table.1704887228178.js",revision:null},{url:"assets/type.1704887228178.js",revision:null},{url:"assets/user.1704887228178.js",revision:null},{url:"favicon.ico",revision:"9fac53a3eff58418b76fef335f279147"},{url:"index.html",revision:"b4c458c7f1d18b7ce12866762537b5b5"},{url:"menu/anaysis.svg",revision:"2c2b9a37fad83c6e110bf1035ff41536"},{url:"menu/basemap.svg",revision:"60932e24d676463b381814237375dfd4"},{url:"menu/datatype.svg",revision:"60932e24d676463b381814237375dfd4"},{url:"menu/edit.svg",revision:"2c2b9a37fad83c6e110bf1035ff41536"},{url:"menu/function.svg",revision:"8271f34fdc190104976d063cc8f3b238"},{url:"menu/lastupdate.svg",revision:"8271f34fdc190104976d063cc8f3b238"},{url:"menu/query.svg",revision:"8271f34fdc190104976d063cc8f3b238"},{url:"menu/urbanGeo.svg",revision:"2c2b9a37fad83c6e110bf1035ff41536"},{url:"menu/visualization.svg",revision:"60932e24d676463b381814237375dfd4"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"manifest.webmanifest",revision:"efb8f6fb4119ccbfcc5d702aa35421fe"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html"))),s.registerRoute(/^https:\/\/jsonplaceholder/,new s.CacheFirst({cacheName:"test-external-api",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
