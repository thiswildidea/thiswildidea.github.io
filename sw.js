if(!self.define){let s,e={};const i=(i,n)=>(i=new URL(i+".js",n).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(n,l)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const a=s=>i(s,r),o={module:{uri:r},exports:u,require:a};e[r]=Promise.all(n.map((s=>o[s]||a(s)))).then((s=>(l(...s),u)))}}define(["./workbox-f407626e"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/401.1705138156583.css",revision:null},{url:"assets/401.1705138156583.js",revision:null},{url:"assets/401.1705138156583.png",revision:null},{url:"assets/404.1705138156583.css",revision:null},{url:"assets/404.1705138156583.js",revision:null},{url:"assets/404.1705138156583.png",revision:null},{url:"assets/account.1705138156583.css",revision:null},{url:"assets/account.1705138156583.js",revision:null},{url:"assets/api.1705138156583.js",revision:null},{url:"assets/basicInfoForm.1705138156583.js",revision:null},{url:"assets/bg-login.1705138156583.png",revision:null},{url:"assets/bmap.1705138156583.js",revision:null},{url:"assets/demo1.1705138156583.css",revision:null},{url:"assets/demo1.1705138156583.js",revision:null},{url:"assets/demo2.1705138156583.css",revision:null},{url:"assets/demo2.1705138156583.js",revision:null},{url:"assets/dept.1705138156583.js",revision:null},{url:"assets/details.1705138156583.js",revision:null},{url:"assets/details1.1705138156583.js",revision:null},{url:"assets/dictList.1705138156583.js",revision:null},{url:"assets/echarts.1705138156583.js",revision:null},{url:"assets/editDictItem.1705138156583.js",revision:null},{url:"assets/editMenu.1705138156583.js",revision:null},{url:"assets/editModule.1705138156583.css",revision:null},{url:"assets/editModule.1705138156583.js",revision:null},{url:"assets/editModule.17051381565832.js",revision:null},{url:"assets/editModule.17051381565833.js",revision:null},{url:"assets/editModule.17051381565834.js",revision:null},{url:"assets/editModule.17051381565835.js",revision:null},{url:"assets/editModule.17051381565836.js",revision:null},{url:"assets/editModule.17051381565837.js",revision:null},{url:"assets/editModule.17051381565838.js",revision:null},{url:"assets/editTable.1705138156583.js",revision:null},{url:"assets/esrilogo.1705138156583.png",revision:null},{url:"assets/fonts/CalciteWebCoreIcons.svg",revision:null},{url:"assets/formRulesOne.1705138156583.js",revision:null},{url:"assets/formRulesThree.1705138156583.js",revision:null},{url:"assets/formRulesTwo.1705138156583.js",revision:null},{url:"assets/genInfoForm.1705138156583.js",revision:null},{url:"assets/getStyleSheets.1705138156583.js",revision:null},{url:"assets/head.1705138156583.css",revision:null},{url:"assets/head.1705138156583.js",revision:null},{url:"assets/icons/192x192.png",revision:null},{url:"assets/icons/24x24.png",revision:null},{url:"assets/icons/48x48.png",revision:null},{url:"assets/icons/512x512.png",revision:null},{url:"assets/icons/icon_192.png",revision:null},{url:"assets/icons/icon_24.png",revision:null},{url:"assets/icons/icon_48.png",revision:null},{url:"assets/icons/icon_512.png",revision:null},{url:"assets/iframes.1705138156583.js",revision:null},{url:"assets/importTable.1705138156583.js",revision:null},{url:"assets/index.1705138156583.css",revision:null},{url:"assets/index.170513815658310.css",revision:null},{url:"assets/index.170513815658310.js",revision:null},{url:"assets/index.1705138156583100.js",revision:null},{url:"assets/index.1705138156583101.js",revision:null},{url:"assets/index.1705138156583102.js",revision:null},{url:"assets/index.1705138156583103.js",revision:null},{url:"assets/index.1705138156583104.js",revision:null},{url:"assets/index.1705138156583105.js",revision:null},{url:"assets/index.1705138156583106.js",revision:null},{url:"assets/index.1705138156583107.js",revision:null},{url:"assets/index.170513815658311.css",revision:null},{url:"assets/index.170513815658311.js",revision:null},{url:"assets/index.170513815658312.css",revision:null},{url:"assets/index.170513815658312.js",revision:null},{url:"assets/index.170513815658313.css",revision:null},{url:"assets/index.170513815658313.js",revision:null},{url:"assets/index.170513815658314.css",revision:null},{url:"assets/index.170513815658314.js",revision:null},{url:"assets/index.170513815658315.css",revision:null},{url:"assets/index.170513815658315.js",revision:null},{url:"assets/index.170513815658316.css",revision:null},{url:"assets/index.170513815658316.js",revision:null},{url:"assets/index.170513815658317.css",revision:null},{url:"assets/index.170513815658317.js",revision:null},{url:"assets/index.170513815658318.css",revision:null},{url:"assets/index.170513815658318.js",revision:null},{url:"assets/index.170513815658319.css",revision:null},{url:"assets/index.170513815658319.js",revision:null},{url:"assets/index.17051381565832.css",revision:null},{url:"assets/index.17051381565832.js",revision:null},{url:"assets/index.170513815658320.css",revision:null},{url:"assets/index.170513815658320.js",revision:null},{url:"assets/index.170513815658321.css",revision:null},{url:"assets/index.170513815658321.js",revision:null},{url:"assets/index.170513815658322.css",revision:null},{url:"assets/index.170513815658322.js",revision:null},{url:"assets/index.170513815658323.css",revision:null},{url:"assets/index.170513815658323.js",revision:null},{url:"assets/index.170513815658324.css",revision:null},{url:"assets/index.170513815658324.js",revision:null},{url:"assets/index.170513815658325.css",revision:null},{url:"assets/index.170513815658325.js",revision:null},{url:"assets/index.170513815658326.css",revision:null},{url:"assets/index.170513815658326.js",revision:null},{url:"assets/index.170513815658327.css",revision:null},{url:"assets/index.170513815658327.js",revision:null},{url:"assets/index.170513815658328.css",revision:null},{url:"assets/index.170513815658328.js",revision:null},{url:"assets/index.170513815658329.css",revision:null},{url:"assets/index.170513815658329.js",revision:null},{url:"assets/index.17051381565833.css",revision:null},{url:"assets/index.17051381565833.js",revision:null},{url:"assets/index.170513815658330.css",revision:null},{url:"assets/index.170513815658330.js",revision:null},{url:"assets/index.170513815658331.css",revision:null},{url:"assets/index.170513815658331.js",revision:null},{url:"assets/index.170513815658332.css",revision:null},{url:"assets/index.170513815658332.js",revision:null},{url:"assets/index.170513815658333.css",revision:null},{url:"assets/index.170513815658333.js",revision:null},{url:"assets/index.170513815658334.css",revision:null},{url:"assets/index.170513815658334.js",revision:null},{url:"assets/index.170513815658335.css",revision:null},{url:"assets/index.170513815658335.js",revision:null},{url:"assets/index.170513815658336.css",revision:null},{url:"assets/index.170513815658336.js",revision:null},{url:"assets/index.170513815658337.css",revision:null},{url:"assets/index.170513815658337.js",revision:null},{url:"assets/index.170513815658338.css",revision:null},{url:"assets/index.170513815658338.js",revision:null},{url:"assets/index.170513815658339.css",revision:null},{url:"assets/index.170513815658339.js",revision:null},{url:"assets/index.17051381565834.css",revision:null},{url:"assets/index.17051381565834.js",revision:null},{url:"assets/index.170513815658340.css",revision:null},{url:"assets/index.170513815658340.js",revision:null},{url:"assets/index.170513815658341.css",revision:null},{url:"assets/index.170513815658341.js",revision:null},{url:"assets/index.170513815658342.css",revision:null},{url:"assets/index.170513815658342.js",revision:null},{url:"assets/index.170513815658343.css",revision:null},{url:"assets/index.170513815658343.js",revision:null},{url:"assets/index.170513815658344.css",revision:null},{url:"assets/index.170513815658344.js",revision:null},{url:"assets/index.170513815658345.css",revision:null},{url:"assets/index.170513815658345.js",revision:null},{url:"assets/index.170513815658346.css",revision:null},{url:"assets/index.170513815658346.js",revision:null},{url:"assets/index.170513815658347.css",revision:null},{url:"assets/index.170513815658347.js",revision:null},{url:"assets/index.170513815658348.css",revision:null},{url:"assets/index.170513815658348.js",revision:null},{url:"assets/index.170513815658349.css",revision:null},{url:"assets/index.170513815658349.js",revision:null},{url:"assets/index.17051381565835.css",revision:null},{url:"assets/index.17051381565835.js",revision:null},{url:"assets/index.170513815658350.css",revision:null},{url:"assets/index.170513815658350.js",revision:null},{url:"assets/index.170513815658351.css",revision:null},{url:"assets/index.170513815658351.js",revision:null},{url:"assets/index.170513815658352.css",revision:null},{url:"assets/index.170513815658352.js",revision:null},{url:"assets/index.170513815658353.css",revision:null},{url:"assets/index.170513815658353.js",revision:null},{url:"assets/index.170513815658354.css",revision:null},{url:"assets/index.170513815658354.js",revision:null},{url:"assets/index.170513815658355.css",revision:null},{url:"assets/index.170513815658355.js",revision:null},{url:"assets/index.170513815658356.css",revision:null},{url:"assets/index.170513815658356.js",revision:null},{url:"assets/index.170513815658357.css",revision:null},{url:"assets/index.170513815658357.js",revision:null},{url:"assets/index.170513815658358.css",revision:null},{url:"assets/index.170513815658358.js",revision:null},{url:"assets/index.170513815658359.css",revision:null},{url:"assets/index.170513815658359.js",revision:null},{url:"assets/index.17051381565836.css",revision:null},{url:"assets/index.17051381565836.js",revision:null},{url:"assets/index.170513815658360.css",revision:null},{url:"assets/index.170513815658360.js",revision:null},{url:"assets/index.170513815658361.css",revision:null},{url:"assets/index.170513815658361.js",revision:null},{url:"assets/index.170513815658362.css",revision:null},{url:"assets/index.170513815658362.js",revision:null},{url:"assets/index.170513815658363.css",revision:null},{url:"assets/index.170513815658363.js",revision:null},{url:"assets/index.170513815658364.css",revision:null},{url:"assets/index.170513815658364.js",revision:null},{url:"assets/index.170513815658365.css",revision:null},{url:"assets/index.170513815658365.js",revision:null},{url:"assets/index.170513815658366.css",revision:null},{url:"assets/index.170513815658366.js",revision:null},{url:"assets/index.170513815658367.css",revision:null},{url:"assets/index.170513815658367.js",revision:null},{url:"assets/index.170513815658368.js",revision:null},{url:"assets/index.170513815658369.js",revision:null},{url:"assets/index.17051381565837.css",revision:null},{url:"assets/index.17051381565837.js",revision:null},{url:"assets/index.170513815658370.js",revision:null},{url:"assets/index.170513815658371.js",revision:null},{url:"assets/index.170513815658372.js",revision:null},{url:"assets/index.170513815658373.js",revision:null},{url:"assets/index.170513815658374.js",revision:null},{url:"assets/index.170513815658375.js",revision:null},{url:"assets/index.170513815658376.js",revision:null},{url:"assets/index.170513815658377.js",revision:null},{url:"assets/index.170513815658378.js",revision:null},{url:"assets/index.170513815658379.js",revision:null},{url:"assets/index.17051381565838.css",revision:null},{url:"assets/index.17051381565838.js",revision:null},{url:"assets/index.170513815658380.js",revision:null},{url:"assets/index.170513815658381.js",revision:null},{url:"assets/index.170513815658382.js",revision:null},{url:"assets/index.170513815658383.js",revision:null},{url:"assets/index.170513815658384.js",revision:null},{url:"assets/index.170513815658385.js",revision:null},{url:"assets/index.170513815658386.js",revision:null},{url:"assets/index.170513815658387.js",revision:null},{url:"assets/index.170513815658388.js",revision:null},{url:"assets/index.170513815658389.js",revision:null},{url:"assets/index.17051381565839.css",revision:null},{url:"assets/index.17051381565839.js",revision:null},{url:"assets/index.170513815658390.js",revision:null},{url:"assets/index.170513815658391.js",revision:null},{url:"assets/index.170513815658392.js",revision:null},{url:"assets/index.170513815658393.js",revision:null},{url:"assets/index.170513815658394.js",revision:null},{url:"assets/index.170513815658395.js",revision:null},{url:"assets/index.170513815658396.js",revision:null},{url:"assets/index.170513815658397.js",revision:null},{url:"assets/index.170513815658398.js",revision:null},{url:"assets/index.170513815658399.js",revision:null},{url:"assets/link.1705138156583.js",revision:null},{url:"assets/mapconfig.1705138156583.js",revision:null},{url:"assets/menu.1705138156583.js",revision:null},{url:"assets/mobile.1705138156583.css",revision:null},{url:"assets/mobile.1705138156583.js",revision:null},{url:"assets/parent.1705138156583.js",revision:null},{url:"assets/qrcode.1705138156583.js",revision:null},{url:"assets/scan.1705138156583.css",revision:null},{url:"assets/scan.1705138156583.js",revision:null},{url:"assets/screenshots/screen.png",revision:null},{url:"assets/screenshots/widget-screen.png",revision:null},{url:"assets/sortable.esm.1705138156583.js",revision:null},{url:"assets/string.1705138156583.js",revision:null},{url:"assets/table.1705138156583.js",revision:null},{url:"assets/three.module.1705138156583.js",revision:null},{url:"assets/type.1705138156583.js",revision:null},{url:"assets/user.1705138156583.js",revision:null},{url:"favicon.ico",revision:"9fac53a3eff58418b76fef335f279147"},{url:"fonts/CalciteWebCoreIcons.svg",revision:"ad338d03b3a299b3ac1071558c0d5b13"},{url:"index.html",revision:"d070e1abaf0f331ea40ca035fd4c0d37"},{url:"menu/anaysis.svg",revision:"e0135713363f3a8836f7d463373809c5"},{url:"menu/basemap.svg",revision:"10ce368c073098a3f8c8d9ddfa323ac2"},{url:"menu/basemap/dark-gray-vector.svg",revision:"d23f2fce8ec703169053d5886acfd381"},{url:"menu/basemap/dark-gray.svg",revision:"42108af28ce3b0741cfc098f10aeb74e"},{url:"menu/basemap/demo.svg",revision:"469ebf32569ba7d63ad8478e7907e7dd"},{url:"menu/basemap/gray-vector.svg",revision:"167ea7679eb2fb3be0814f19188c44ab"},{url:"menu/basemap/gray.svg",revision:"61614f41b6381c525b1fdf9f48b62522"},{url:"menu/basemap/hybrid.svg",revision:"e3a6c26116c408f1c3770e713682d4f4"},{url:"menu/basemap/oceans.svg",revision:"6956bb18f7ccb8976ab0310a850298da"},{url:"menu/basemap/osm.svg",revision:"f9bec9d2c2430c989fc162b7dffd1581"},{url:"menu/basemap/satellite.svg",revision:"2fe21861180f8d983d3a341edd95d32a"},{url:"menu/basemap/streets-navigation-vector.svg",revision:"775d82a833bae8d53f4dbc5b6bd3485a"},{url:"menu/basemap/streets-night-vector.svg",revision:"4eb2a45b38067e96b1c9f43c2a48c3cd"},{url:"menu/basemap/streets-relief-vector.svg",revision:"bab24d81010672d36367f2f718e3471f"},{url:"menu/basemap/streets-vector.svg",revision:"9b14f1c755765edc22a98d4b2e47e9fc"},{url:"menu/basemap/streets.svg",revision:"0c6cbe403a95dc0f4a36b1b966f5b09f"},{url:"menu/basemap/terrain.svg",revision:"39ad94ffee5ebb17d357f55453116912"},{url:"menu/basemap/topo-vector.svg",revision:"68f257cc0fd5660a2309abaccb0bd2a0"},{url:"menu/basemap/topo.svg",revision:"d45546b5246795a09a8a40a0bb3843f8"},{url:"menu/datatype.svg",revision:"7de19b44ee1e3e8f2c6ff39cb1281956"},{url:"menu/datatype/featurelayer.svg",revision:"0d3712eaac92b92fbc369c49899201da"},{url:"menu/datatype/geojson.svg",revision:"1d2ff9d92d6b2602bbeaf93e29abb0c1"},{url:"menu/demo.svg",revision:"c68259aeec59c53b792cfb84ba4b0d3b"},{url:"menu/demo/earthquakes.svg",revision:"daca703b9b28d686dc8cef7480fb4040"},{url:"menu/edit.svg",revision:"8aea20e106afd9729c2631a367748385"},{url:"menu/function.svg",revision:"b01ff84fd5670806304f2b954a354695"},{url:"menu/query.svg",revision:"144946c32207893b3f1c62789fcf1575"},{url:"menu/urbanGeo.svg",revision:"2c2b9a37fad83c6e110bf1035ff41536"},{url:"menu/visualization/electricShield.svg",revision:"b0877168ffcea2eaf1e097db8977861a"},{url:"menu/visualization/fashPoint.svg",revision:"a1379a2d9e37a07071e955cf99010878"},{url:"menu/visualization/rippleWall.svg",revision:"93543ba740cbc62c4b91918ff4b13cea"},{url:"menu/widgets.svg",revision:"9dcad784b449bafb1aeba64d88853898"},{url:"menu/widgets/layerlist.svg",revision:"e80d28ccb2708120976182be52a3f88c"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"assets/icons/512x512.png",revision:"169b4f4a5f8f7adb1dfabe31b9306436"},{url:"assets/icons/192x192.png",revision:"7941422a7ff9ce38a2a97937d953b19d"},{url:"assets/icons/48x48.png",revision:"aafd29bc9d5f315e559f8cb83fd7dd87"},{url:"assets/icons/24x24.png",revision:"3a6de5f4d46285e38a540aba8ac30435"},{url:"manifest.webmanifest",revision:"efb8f6fb4119ccbfcc5d702aa35421fe"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html"))),s.registerRoute(/^https:\/\/jsonplaceholder/,new s.CacheFirst({cacheName:"test-external-api",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
