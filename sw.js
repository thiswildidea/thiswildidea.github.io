if(!self.define){let s,e={};const n=(n,i)=>(n=new URL(n+".js",i).href,e[n]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=n,s.onload=e,document.head.appendChild(s)}else s=n,importScripts(n),e()})).then((()=>{let s=e[n];if(!s)throw new Error(`Module ${n} didn’t register its module`);return s})));self.define=(i,l)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const a=s=>n(s,r),o={module:{uri:r},exports:u,require:a};e[r]=Promise.all(i.map((s=>o[s]||a(s)))).then((s=>(l(...s),u)))}}define(["./workbox-f407626e"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/401.1704982031072.css",revision:null},{url:"assets/401.1704982031072.js",revision:null},{url:"assets/401.1704982031072.png",revision:null},{url:"assets/404.1704982031072.css",revision:null},{url:"assets/404.1704982031072.js",revision:null},{url:"assets/404.1704982031072.png",revision:null},{url:"assets/account.1704982031072.css",revision:null},{url:"assets/account.1704982031072.js",revision:null},{url:"assets/api.1704982031072.js",revision:null},{url:"assets/basicInfoForm.1704982031072.js",revision:null},{url:"assets/bg-login.1704982031072.png",revision:null},{url:"assets/bmap.1704982031072.js",revision:null},{url:"assets/demo1.1704982031072.css",revision:null},{url:"assets/demo1.1704982031072.js",revision:null},{url:"assets/demo2.1704982031072.css",revision:null},{url:"assets/demo2.1704982031072.js",revision:null},{url:"assets/dept.1704982031072.js",revision:null},{url:"assets/details.1704982031072.js",revision:null},{url:"assets/details1.1704982031072.js",revision:null},{url:"assets/dictList.1704982031072.js",revision:null},{url:"assets/echarts.1704982031072.js",revision:null},{url:"assets/editDictItem.1704982031072.js",revision:null},{url:"assets/editMenu.1704982031072.js",revision:null},{url:"assets/editModule.1704982031072.css",revision:null},{url:"assets/editModule.1704982031072.js",revision:null},{url:"assets/editModule.17049820310722.js",revision:null},{url:"assets/editModule.17049820310723.js",revision:null},{url:"assets/editModule.17049820310724.js",revision:null},{url:"assets/editModule.17049820310725.js",revision:null},{url:"assets/editModule.17049820310726.js",revision:null},{url:"assets/editModule.17049820310727.js",revision:null},{url:"assets/editModule.17049820310728.js",revision:null},{url:"assets/editTable.1704982031072.js",revision:null},{url:"assets/esrilogo.1704982031072.png",revision:null},{url:"assets/fonts/CalciteWebCoreIcons.svg",revision:null},{url:"assets/formRulesOne.1704982031072.js",revision:null},{url:"assets/formRulesThree.1704982031072.js",revision:null},{url:"assets/formRulesTwo.1704982031072.js",revision:null},{url:"assets/genInfoForm.1704982031072.js",revision:null},{url:"assets/getStyleSheets.1704982031072.js",revision:null},{url:"assets/head.1704982031072.css",revision:null},{url:"assets/head.1704982031072.js",revision:null},{url:"assets/icons/192x192.png",revision:null},{url:"assets/icons/24x24.png",revision:null},{url:"assets/icons/48x48.png",revision:null},{url:"assets/icons/512x512.png",revision:null},{url:"assets/icons/icon_192.png",revision:null},{url:"assets/icons/icon_24.png",revision:null},{url:"assets/icons/icon_48.png",revision:null},{url:"assets/icons/icon_512.png",revision:null},{url:"assets/iframes.1704982031072.js",revision:null},{url:"assets/importTable.1704982031072.js",revision:null},{url:"assets/index.1704982031072.css",revision:null},{url:"assets/index.170498203107210.css",revision:null},{url:"assets/index.170498203107210.js",revision:null},{url:"assets/index.1704982031072100.js",revision:null},{url:"assets/index.1704982031072101.js",revision:null},{url:"assets/index.170498203107211.css",revision:null},{url:"assets/index.170498203107211.js",revision:null},{url:"assets/index.170498203107212.css",revision:null},{url:"assets/index.170498203107212.js",revision:null},{url:"assets/index.170498203107213.css",revision:null},{url:"assets/index.170498203107213.js",revision:null},{url:"assets/index.170498203107214.css",revision:null},{url:"assets/index.170498203107214.js",revision:null},{url:"assets/index.170498203107215.css",revision:null},{url:"assets/index.170498203107215.js",revision:null},{url:"assets/index.170498203107216.css",revision:null},{url:"assets/index.170498203107216.js",revision:null},{url:"assets/index.170498203107217.css",revision:null},{url:"assets/index.170498203107217.js",revision:null},{url:"assets/index.170498203107218.css",revision:null},{url:"assets/index.170498203107218.js",revision:null},{url:"assets/index.170498203107219.css",revision:null},{url:"assets/index.170498203107219.js",revision:null},{url:"assets/index.17049820310722.css",revision:null},{url:"assets/index.17049820310722.js",revision:null},{url:"assets/index.170498203107220.css",revision:null},{url:"assets/index.170498203107220.js",revision:null},{url:"assets/index.170498203107221.css",revision:null},{url:"assets/index.170498203107221.js",revision:null},{url:"assets/index.170498203107222.css",revision:null},{url:"assets/index.170498203107222.js",revision:null},{url:"assets/index.170498203107223.css",revision:null},{url:"assets/index.170498203107223.js",revision:null},{url:"assets/index.170498203107224.css",revision:null},{url:"assets/index.170498203107224.js",revision:null},{url:"assets/index.170498203107225.css",revision:null},{url:"assets/index.170498203107225.js",revision:null},{url:"assets/index.170498203107226.css",revision:null},{url:"assets/index.170498203107226.js",revision:null},{url:"assets/index.170498203107227.css",revision:null},{url:"assets/index.170498203107227.js",revision:null},{url:"assets/index.170498203107228.css",revision:null},{url:"assets/index.170498203107228.js",revision:null},{url:"assets/index.170498203107229.css",revision:null},{url:"assets/index.170498203107229.js",revision:null},{url:"assets/index.17049820310723.css",revision:null},{url:"assets/index.17049820310723.js",revision:null},{url:"assets/index.170498203107230.css",revision:null},{url:"assets/index.170498203107230.js",revision:null},{url:"assets/index.170498203107231.css",revision:null},{url:"assets/index.170498203107231.js",revision:null},{url:"assets/index.170498203107232.css",revision:null},{url:"assets/index.170498203107232.js",revision:null},{url:"assets/index.170498203107233.css",revision:null},{url:"assets/index.170498203107233.js",revision:null},{url:"assets/index.170498203107234.css",revision:null},{url:"assets/index.170498203107234.js",revision:null},{url:"assets/index.170498203107235.css",revision:null},{url:"assets/index.170498203107235.js",revision:null},{url:"assets/index.170498203107236.css",revision:null},{url:"assets/index.170498203107236.js",revision:null},{url:"assets/index.170498203107237.css",revision:null},{url:"assets/index.170498203107237.js",revision:null},{url:"assets/index.170498203107238.css",revision:null},{url:"assets/index.170498203107238.js",revision:null},{url:"assets/index.170498203107239.css",revision:null},{url:"assets/index.170498203107239.js",revision:null},{url:"assets/index.17049820310724.css",revision:null},{url:"assets/index.17049820310724.js",revision:null},{url:"assets/index.170498203107240.css",revision:null},{url:"assets/index.170498203107240.js",revision:null},{url:"assets/index.170498203107241.css",revision:null},{url:"assets/index.170498203107241.js",revision:null},{url:"assets/index.170498203107242.css",revision:null},{url:"assets/index.170498203107242.js",revision:null},{url:"assets/index.170498203107243.css",revision:null},{url:"assets/index.170498203107243.js",revision:null},{url:"assets/index.170498203107244.css",revision:null},{url:"assets/index.170498203107244.js",revision:null},{url:"assets/index.170498203107245.css",revision:null},{url:"assets/index.170498203107245.js",revision:null},{url:"assets/index.170498203107246.css",revision:null},{url:"assets/index.170498203107246.js",revision:null},{url:"assets/index.170498203107247.css",revision:null},{url:"assets/index.170498203107247.js",revision:null},{url:"assets/index.170498203107248.css",revision:null},{url:"assets/index.170498203107248.js",revision:null},{url:"assets/index.170498203107249.css",revision:null},{url:"assets/index.170498203107249.js",revision:null},{url:"assets/index.17049820310725.css",revision:null},{url:"assets/index.17049820310725.js",revision:null},{url:"assets/index.170498203107250.css",revision:null},{url:"assets/index.170498203107250.js",revision:null},{url:"assets/index.170498203107251.css",revision:null},{url:"assets/index.170498203107251.js",revision:null},{url:"assets/index.170498203107252.css",revision:null},{url:"assets/index.170498203107252.js",revision:null},{url:"assets/index.170498203107253.css",revision:null},{url:"assets/index.170498203107253.js",revision:null},{url:"assets/index.170498203107254.css",revision:null},{url:"assets/index.170498203107254.js",revision:null},{url:"assets/index.170498203107255.css",revision:null},{url:"assets/index.170498203107255.js",revision:null},{url:"assets/index.170498203107256.css",revision:null},{url:"assets/index.170498203107256.js",revision:null},{url:"assets/index.170498203107257.css",revision:null},{url:"assets/index.170498203107257.js",revision:null},{url:"assets/index.170498203107258.css",revision:null},{url:"assets/index.170498203107258.js",revision:null},{url:"assets/index.170498203107259.css",revision:null},{url:"assets/index.170498203107259.js",revision:null},{url:"assets/index.17049820310726.css",revision:null},{url:"assets/index.17049820310726.js",revision:null},{url:"assets/index.170498203107260.css",revision:null},{url:"assets/index.170498203107260.js",revision:null},{url:"assets/index.170498203107261.css",revision:null},{url:"assets/index.170498203107261.js",revision:null},{url:"assets/index.170498203107262.css",revision:null},{url:"assets/index.170498203107262.js",revision:null},{url:"assets/index.170498203107263.js",revision:null},{url:"assets/index.170498203107264.js",revision:null},{url:"assets/index.170498203107265.js",revision:null},{url:"assets/index.170498203107266.js",revision:null},{url:"assets/index.170498203107267.js",revision:null},{url:"assets/index.170498203107268.js",revision:null},{url:"assets/index.170498203107269.js",revision:null},{url:"assets/index.17049820310727.css",revision:null},{url:"assets/index.17049820310727.js",revision:null},{url:"assets/index.170498203107270.js",revision:null},{url:"assets/index.170498203107271.js",revision:null},{url:"assets/index.170498203107272.js",revision:null},{url:"assets/index.170498203107273.js",revision:null},{url:"assets/index.170498203107274.js",revision:null},{url:"assets/index.170498203107275.js",revision:null},{url:"assets/index.170498203107276.js",revision:null},{url:"assets/index.170498203107277.js",revision:null},{url:"assets/index.170498203107278.js",revision:null},{url:"assets/index.170498203107279.js",revision:null},{url:"assets/index.17049820310728.css",revision:null},{url:"assets/index.17049820310728.js",revision:null},{url:"assets/index.170498203107280.js",revision:null},{url:"assets/index.170498203107281.js",revision:null},{url:"assets/index.170498203107282.js",revision:null},{url:"assets/index.170498203107283.js",revision:null},{url:"assets/index.170498203107284.js",revision:null},{url:"assets/index.170498203107285.js",revision:null},{url:"assets/index.170498203107286.js",revision:null},{url:"assets/index.170498203107287.js",revision:null},{url:"assets/index.170498203107288.js",revision:null},{url:"assets/index.170498203107289.js",revision:null},{url:"assets/index.17049820310729.css",revision:null},{url:"assets/index.17049820310729.js",revision:null},{url:"assets/index.170498203107290.js",revision:null},{url:"assets/index.170498203107291.js",revision:null},{url:"assets/index.170498203107292.js",revision:null},{url:"assets/index.170498203107293.js",revision:null},{url:"assets/index.170498203107294.js",revision:null},{url:"assets/index.170498203107295.js",revision:null},{url:"assets/index.170498203107296.js",revision:null},{url:"assets/index.170498203107297.js",revision:null},{url:"assets/index.170498203107298.js",revision:null},{url:"assets/index.170498203107299.js",revision:null},{url:"assets/link.1704982031072.js",revision:null},{url:"assets/mapconfig.1704982031072.js",revision:null},{url:"assets/menu.1704982031072.js",revision:null},{url:"assets/mobile.1704982031072.css",revision:null},{url:"assets/mobile.1704982031072.js",revision:null},{url:"assets/parent.1704982031072.js",revision:null},{url:"assets/qrcode.1704982031072.js",revision:null},{url:"assets/scan.1704982031072.css",revision:null},{url:"assets/scan.1704982031072.js",revision:null},{url:"assets/screenshots/screen.png",revision:null},{url:"assets/screenshots/widget-screen.png",revision:null},{url:"assets/sortable.esm.1704982031072.js",revision:null},{url:"assets/string.1704982031072.js",revision:null},{url:"assets/table.1704982031072.js",revision:null},{url:"assets/type.1704982031072.js",revision:null},{url:"assets/user.1704982031072.js",revision:null},{url:"favicon.ico",revision:"9fac53a3eff58418b76fef335f279147"},{url:"fonts/CalciteWebCoreIcons.svg",revision:"478f3ceb802bb78b44c0f946e0f080e6"},{url:"index.html",revision:"ca997feea826ea89eb2e0a883e9e4a70"},{url:"menu/anaysis.svg",revision:"e0135713363f3a8836f7d463373809c5"},{url:"menu/basemap.svg",revision:"e9858201b5e9968f8487bbdda3de9483"},{url:"menu/basemap/dark-gray-vector.svg",revision:"d23f2fce8ec703169053d5886acfd381"},{url:"menu/basemap/dark-gray.svg",revision:"42108af28ce3b0741cfc098f10aeb74e"},{url:"menu/basemap/demo.svg",revision:"469ebf32569ba7d63ad8478e7907e7dd"},{url:"menu/basemap/gray-vector.svg",revision:"167ea7679eb2fb3be0814f19188c44ab"},{url:"menu/basemap/gray.svg",revision:"61614f41b6381c525b1fdf9f48b62522"},{url:"menu/basemap/hybrid.svg",revision:"e3a6c26116c408f1c3770e713682d4f4"},{url:"menu/basemap/oceans.svg",revision:"6956bb18f7ccb8976ab0310a850298da"},{url:"menu/basemap/osm.svg",revision:"f9bec9d2c2430c989fc162b7dffd1581"},{url:"menu/basemap/satellite.svg",revision:"2fe21861180f8d983d3a341edd95d32a"},{url:"menu/basemap/streets-navigation-vector.svg",revision:"775d82a833bae8d53f4dbc5b6bd3485a"},{url:"menu/basemap/streets-night-vector.svg",revision:"4eb2a45b38067e96b1c9f43c2a48c3cd"},{url:"menu/basemap/streets-relief-vector.svg",revision:"bab24d81010672d36367f2f718e3471f"},{url:"menu/basemap/streets-vector.svg",revision:"9b14f1c755765edc22a98d4b2e47e9fc"},{url:"menu/basemap/streets.svg",revision:"0c6cbe403a95dc0f4a36b1b966f5b09f"},{url:"menu/basemap/terrain.svg",revision:"39ad94ffee5ebb17d357f55453116912"},{url:"menu/basemap/topo-vector.svg",revision:"68f257cc0fd5660a2309abaccb0bd2a0"},{url:"menu/basemap/topo.svg",revision:"d45546b5246795a09a8a40a0bb3843f8"},{url:"menu/datatype.svg",revision:"7de19b44ee1e3e8f2c6ff39cb1281956"},{url:"menu/datatype/featurelayer.svg",revision:"0d3712eaac92b92fbc369c49899201da"},{url:"menu/datatype/geojson.svg",revision:"7de19b44ee1e3e8f2c6ff39cb1281956"},{url:"menu/demo.svg",revision:"699788fdee21a83bd9240260ee27de03"},{url:"menu/edit.svg",revision:"8aea20e106afd9729c2631a367748385"},{url:"menu/function.svg",revision:"b01ff84fd5670806304f2b954a354695"},{url:"menu/query.svg",revision:"144946c32207893b3f1c62789fcf1575"},{url:"menu/urbanGeo.svg",revision:"2c2b9a37fad83c6e110bf1035ff41536"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"assets/icons/512x512.png",revision:"169b4f4a5f8f7adb1dfabe31b9306436"},{url:"assets/icons/192x192.png",revision:"7941422a7ff9ce38a2a97937d953b19d"},{url:"assets/icons/48x48.png",revision:"aafd29bc9d5f315e559f8cb83fd7dd87"},{url:"assets/icons/24x24.png",revision:"3a6de5f4d46285e38a540aba8ac30435"},{url:"manifest.webmanifest",revision:"efb8f6fb4119ccbfcc5d702aa35421fe"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html"))),s.registerRoute(/^https:\/\/jsonplaceholder/,new s.CacheFirst({cacheName:"test-external-api",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
