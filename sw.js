if(!self.define){let s,e={};const i=(i,n)=>(i=new URL(i+".js",n).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(n,l)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const a=s=>i(s,r),o={module:{uri:r},exports:u,require:a};e[r]=Promise.all(n.map((s=>o[s]||a(s)))).then((s=>(l(...s),u)))}}define(["./workbox-f407626e"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/401.1705379616303.css",revision:null},{url:"assets/401.1705379616303.js",revision:null},{url:"assets/401.1705379616303.png",revision:null},{url:"assets/404.1705379616303.css",revision:null},{url:"assets/404.1705379616303.js",revision:null},{url:"assets/404.1705379616303.png",revision:null},{url:"assets/account.1705379616303.css",revision:null},{url:"assets/account.1705379616303.js",revision:null},{url:"assets/api.1705379616303.js",revision:null},{url:"assets/basicInfoForm.1705379616303.js",revision:null},{url:"assets/bg-login.1705379616303.png",revision:null},{url:"assets/bmap.1705379616303.js",revision:null},{url:"assets/cloud.1705379616303.png",revision:null},{url:"assets/demo1.1705379616303.css",revision:null},{url:"assets/demo1.1705379616303.js",revision:null},{url:"assets/demo2.1705379616303.css",revision:null},{url:"assets/demo2.1705379616303.js",revision:null},{url:"assets/dept.1705379616303.js",revision:null},{url:"assets/details.1705379616303.js",revision:null},{url:"assets/details1.1705379616303.js",revision:null},{url:"assets/dictList.1705379616303.js",revision:null},{url:"assets/echarts.1705379616303.js",revision:null},{url:"assets/editDictItem.1705379616303.js",revision:null},{url:"assets/editMenu.1705379616303.js",revision:null},{url:"assets/editModule.1705379616303.css",revision:null},{url:"assets/editModule.1705379616303.js",revision:null},{url:"assets/editModule.17053796163032.js",revision:null},{url:"assets/editModule.17053796163033.js",revision:null},{url:"assets/editModule.17053796163034.js",revision:null},{url:"assets/editModule.17053796163035.js",revision:null},{url:"assets/editModule.17053796163036.js",revision:null},{url:"assets/editModule.17053796163037.js",revision:null},{url:"assets/editModule.17053796163038.js",revision:null},{url:"assets/editTable.1705379616303.js",revision:null},{url:"assets/esrilogo.1705379616303.png",revision:null},{url:"assets/fonts/CalciteWebCoreIcons.svg",revision:null},{url:"assets/formRulesOne.1705379616303.js",revision:null},{url:"assets/formRulesThree.1705379616303.js",revision:null},{url:"assets/formRulesTwo.1705379616303.js",revision:null},{url:"assets/genInfoForm.1705379616303.js",revision:null},{url:"assets/getStyleSheets.1705379616303.js",revision:null},{url:"assets/GJZ_ZC.1705379616303.svg",revision:null},{url:"assets/GJZ_ZD.1705379616303.svg",revision:null},{url:"assets/head.1705379616303.css",revision:null},{url:"assets/head.1705379616303.js",revision:null},{url:"assets/icons/192x192.png",revision:null},{url:"assets/icons/24x24.png",revision:null},{url:"assets/icons/48x48.png",revision:null},{url:"assets/icons/512x512.png",revision:null},{url:"assets/icons/icon_192.png",revision:null},{url:"assets/icons/icon_24.png",revision:null},{url:"assets/icons/icon_48.png",revision:null},{url:"assets/icons/icon_512.png",revision:null},{url:"assets/iframes.1705379616303.js",revision:null},{url:"assets/importTable.1705379616303.js",revision:null},{url:"assets/index.1705379616303.css",revision:null},{url:"assets/index.170537961630310.css",revision:null},{url:"assets/index.170537961630310.js",revision:null},{url:"assets/index.1705379616303100.js",revision:null},{url:"assets/index.1705379616303101.js",revision:null},{url:"assets/index.1705379616303102.js",revision:null},{url:"assets/index.1705379616303103.js",revision:null},{url:"assets/index.1705379616303104.js",revision:null},{url:"assets/index.1705379616303105.js",revision:null},{url:"assets/index.1705379616303106.js",revision:null},{url:"assets/index.1705379616303107.js",revision:null},{url:"assets/index.1705379616303108.js",revision:null},{url:"assets/index.1705379616303109.js",revision:null},{url:"assets/index.170537961630311.css",revision:null},{url:"assets/index.170537961630311.js",revision:null},{url:"assets/index.170537961630312.css",revision:null},{url:"assets/index.170537961630312.js",revision:null},{url:"assets/index.170537961630313.css",revision:null},{url:"assets/index.170537961630313.js",revision:null},{url:"assets/index.170537961630314.css",revision:null},{url:"assets/index.170537961630314.js",revision:null},{url:"assets/index.170537961630315.css",revision:null},{url:"assets/index.170537961630315.js",revision:null},{url:"assets/index.170537961630316.css",revision:null},{url:"assets/index.170537961630316.js",revision:null},{url:"assets/index.170537961630317.css",revision:null},{url:"assets/index.170537961630317.js",revision:null},{url:"assets/index.170537961630318.css",revision:null},{url:"assets/index.170537961630318.js",revision:null},{url:"assets/index.170537961630319.css",revision:null},{url:"assets/index.170537961630319.js",revision:null},{url:"assets/index.17053796163032.css",revision:null},{url:"assets/index.17053796163032.js",revision:null},{url:"assets/index.170537961630320.css",revision:null},{url:"assets/index.170537961630320.js",revision:null},{url:"assets/index.170537961630321.css",revision:null},{url:"assets/index.170537961630321.js",revision:null},{url:"assets/index.170537961630322.css",revision:null},{url:"assets/index.170537961630322.js",revision:null},{url:"assets/index.170537961630323.css",revision:null},{url:"assets/index.170537961630323.js",revision:null},{url:"assets/index.170537961630324.css",revision:null},{url:"assets/index.170537961630324.js",revision:null},{url:"assets/index.170537961630325.css",revision:null},{url:"assets/index.170537961630325.js",revision:null},{url:"assets/index.170537961630326.css",revision:null},{url:"assets/index.170537961630326.js",revision:null},{url:"assets/index.170537961630327.css",revision:null},{url:"assets/index.170537961630327.js",revision:null},{url:"assets/index.170537961630328.css",revision:null},{url:"assets/index.170537961630328.js",revision:null},{url:"assets/index.170537961630329.css",revision:null},{url:"assets/index.170537961630329.js",revision:null},{url:"assets/index.17053796163033.css",revision:null},{url:"assets/index.17053796163033.js",revision:null},{url:"assets/index.170537961630330.css",revision:null},{url:"assets/index.170537961630330.js",revision:null},{url:"assets/index.170537961630331.css",revision:null},{url:"assets/index.170537961630331.js",revision:null},{url:"assets/index.170537961630332.css",revision:null},{url:"assets/index.170537961630332.js",revision:null},{url:"assets/index.170537961630333.css",revision:null},{url:"assets/index.170537961630333.js",revision:null},{url:"assets/index.170537961630334.css",revision:null},{url:"assets/index.170537961630334.js",revision:null},{url:"assets/index.170537961630335.css",revision:null},{url:"assets/index.170537961630335.js",revision:null},{url:"assets/index.170537961630336.css",revision:null},{url:"assets/index.170537961630336.js",revision:null},{url:"assets/index.170537961630337.css",revision:null},{url:"assets/index.170537961630337.js",revision:null},{url:"assets/index.170537961630338.css",revision:null},{url:"assets/index.170537961630338.js",revision:null},{url:"assets/index.170537961630339.css",revision:null},{url:"assets/index.170537961630339.js",revision:null},{url:"assets/index.17053796163034.css",revision:null},{url:"assets/index.17053796163034.js",revision:null},{url:"assets/index.170537961630340.css",revision:null},{url:"assets/index.170537961630340.js",revision:null},{url:"assets/index.170537961630341.css",revision:null},{url:"assets/index.170537961630341.js",revision:null},{url:"assets/index.170537961630342.css",revision:null},{url:"assets/index.170537961630342.js",revision:null},{url:"assets/index.170537961630343.css",revision:null},{url:"assets/index.170537961630343.js",revision:null},{url:"assets/index.170537961630344.css",revision:null},{url:"assets/index.170537961630344.js",revision:null},{url:"assets/index.170537961630345.css",revision:null},{url:"assets/index.170537961630345.js",revision:null},{url:"assets/index.170537961630346.css",revision:null},{url:"assets/index.170537961630346.js",revision:null},{url:"assets/index.170537961630347.css",revision:null},{url:"assets/index.170537961630347.js",revision:null},{url:"assets/index.170537961630348.css",revision:null},{url:"assets/index.170537961630348.js",revision:null},{url:"assets/index.170537961630349.css",revision:null},{url:"assets/index.170537961630349.js",revision:null},{url:"assets/index.17053796163035.css",revision:null},{url:"assets/index.17053796163035.js",revision:null},{url:"assets/index.170537961630350.css",revision:null},{url:"assets/index.170537961630350.js",revision:null},{url:"assets/index.170537961630351.css",revision:null},{url:"assets/index.170537961630351.js",revision:null},{url:"assets/index.170537961630352.css",revision:null},{url:"assets/index.170537961630352.js",revision:null},{url:"assets/index.170537961630353.css",revision:null},{url:"assets/index.170537961630353.js",revision:null},{url:"assets/index.170537961630354.css",revision:null},{url:"assets/index.170537961630354.js",revision:null},{url:"assets/index.170537961630355.css",revision:null},{url:"assets/index.170537961630355.js",revision:null},{url:"assets/index.170537961630356.css",revision:null},{url:"assets/index.170537961630356.js",revision:null},{url:"assets/index.170537961630357.css",revision:null},{url:"assets/index.170537961630357.js",revision:null},{url:"assets/index.170537961630358.css",revision:null},{url:"assets/index.170537961630358.js",revision:null},{url:"assets/index.170537961630359.css",revision:null},{url:"assets/index.170537961630359.js",revision:null},{url:"assets/index.17053796163036.css",revision:null},{url:"assets/index.17053796163036.js",revision:null},{url:"assets/index.170537961630360.css",revision:null},{url:"assets/index.170537961630360.js",revision:null},{url:"assets/index.170537961630361.css",revision:null},{url:"assets/index.170537961630361.js",revision:null},{url:"assets/index.170537961630362.css",revision:null},{url:"assets/index.170537961630362.js",revision:null},{url:"assets/index.170537961630363.css",revision:null},{url:"assets/index.170537961630363.js",revision:null},{url:"assets/index.170537961630364.css",revision:null},{url:"assets/index.170537961630364.js",revision:null},{url:"assets/index.170537961630365.css",revision:null},{url:"assets/index.170537961630365.js",revision:null},{url:"assets/index.170537961630366.css",revision:null},{url:"assets/index.170537961630366.js",revision:null},{url:"assets/index.170537961630367.css",revision:null},{url:"assets/index.170537961630367.js",revision:null},{url:"assets/index.170537961630368.css",revision:null},{url:"assets/index.170537961630368.js",revision:null},{url:"assets/index.170537961630369.js",revision:null},{url:"assets/index.17053796163037.css",revision:null},{url:"assets/index.17053796163037.js",revision:null},{url:"assets/index.170537961630370.js",revision:null},{url:"assets/index.170537961630371.js",revision:null},{url:"assets/index.170537961630372.js",revision:null},{url:"assets/index.170537961630373.js",revision:null},{url:"assets/index.170537961630374.js",revision:null},{url:"assets/index.170537961630375.js",revision:null},{url:"assets/index.170537961630376.js",revision:null},{url:"assets/index.170537961630377.js",revision:null},{url:"assets/index.170537961630378.js",revision:null},{url:"assets/index.170537961630379.js",revision:null},{url:"assets/index.17053796163038.css",revision:null},{url:"assets/index.17053796163038.js",revision:null},{url:"assets/index.170537961630380.js",revision:null},{url:"assets/index.170537961630381.js",revision:null},{url:"assets/index.170537961630382.js",revision:null},{url:"assets/index.170537961630383.js",revision:null},{url:"assets/index.170537961630384.js",revision:null},{url:"assets/index.170537961630385.js",revision:null},{url:"assets/index.170537961630386.js",revision:null},{url:"assets/index.170537961630387.js",revision:null},{url:"assets/index.170537961630388.js",revision:null},{url:"assets/index.170537961630389.js",revision:null},{url:"assets/index.17053796163039.css",revision:null},{url:"assets/index.17053796163039.js",revision:null},{url:"assets/index.170537961630390.js",revision:null},{url:"assets/index.170537961630391.js",revision:null},{url:"assets/index.170537961630392.js",revision:null},{url:"assets/index.170537961630393.js",revision:null},{url:"assets/index.170537961630394.js",revision:null},{url:"assets/index.170537961630395.js",revision:null},{url:"assets/index.170537961630396.js",revision:null},{url:"assets/index.170537961630397.js",revision:null},{url:"assets/index.170537961630398.js",revision:null},{url:"assets/index.170537961630399.js",revision:null},{url:"assets/link.1705379616303.js",revision:null},{url:"assets/mapconfig.1705379616303.js",revision:null},{url:"assets/menu.1705379616303.js",revision:null},{url:"assets/mobile.1705379616303.css",revision:null},{url:"assets/mobile.1705379616303.js",revision:null},{url:"assets/parent.1705379616303.js",revision:null},{url:"assets/qrcode.1705379616303.js",revision:null},{url:"assets/scan.1705379616303.css",revision:null},{url:"assets/scan.1705379616303.js",revision:null},{url:"assets/screenshots/screen.png",revision:null},{url:"assets/SJZ_ZC.1705379616303.svg",revision:null},{url:"assets/SJZ_ZD.1705379616303.svg",revision:null},{url:"assets/sortable.esm.1705379616303.js",revision:null},{url:"assets/string.1705379616303.js",revision:null},{url:"assets/table.1705379616303.js",revision:null},{url:"assets/three.module.1705379616303.js",revision:null},{url:"assets/type.1705379616303.js",revision:null},{url:"assets/user.1705379616303.js",revision:null},{url:"favicon.ico",revision:"deb0a3186aa6adbe4cdb50d63edd98c8"},{url:"fonts/CalciteWebCoreIcons.svg",revision:"61ea53a70a0c74b343937d9468dad84b"},{url:"index.html",revision:"4ca664770c445afbc264c0e3db42642a"},{url:"menu/anaysis.svg",revision:"e0135713363f3a8836f7d463373809c5"},{url:"menu/basemap.svg",revision:"10ce368c073098a3f8c8d9ddfa323ac2"},{url:"menu/basemap/dark-gray-vector.svg",revision:"d23f2fce8ec703169053d5886acfd381"},{url:"menu/basemap/dark-gray.svg",revision:"42108af28ce3b0741cfc098f10aeb74e"},{url:"menu/basemap/demo.svg",revision:"469ebf32569ba7d63ad8478e7907e7dd"},{url:"menu/basemap/gray-vector.svg",revision:"167ea7679eb2fb3be0814f19188c44ab"},{url:"menu/basemap/gray.svg",revision:"61614f41b6381c525b1fdf9f48b62522"},{url:"menu/basemap/hybrid.svg",revision:"e3a6c26116c408f1c3770e713682d4f4"},{url:"menu/basemap/oceans.svg",revision:"6956bb18f7ccb8976ab0310a850298da"},{url:"menu/basemap/osm.svg",revision:"f9bec9d2c2430c989fc162b7dffd1581"},{url:"menu/basemap/satellite.svg",revision:"2fe21861180f8d983d3a341edd95d32a"},{url:"menu/basemap/streets-navigation-vector.svg",revision:"775d82a833bae8d53f4dbc5b6bd3485a"},{url:"menu/basemap/streets-night-vector.svg",revision:"4eb2a45b38067e96b1c9f43c2a48c3cd"},{url:"menu/basemap/streets-relief-vector.svg",revision:"bab24d81010672d36367f2f718e3471f"},{url:"menu/basemap/streets-vector.svg",revision:"9b14f1c755765edc22a98d4b2e47e9fc"},{url:"menu/basemap/streets.svg",revision:"0c6cbe403a95dc0f4a36b1b966f5b09f"},{url:"menu/basemap/terrain.svg",revision:"39ad94ffee5ebb17d357f55453116912"},{url:"menu/basemap/topo-vector.svg",revision:"68f257cc0fd5660a2309abaccb0bd2a0"},{url:"menu/basemap/topo.svg",revision:"d45546b5246795a09a8a40a0bb3843f8"},{url:"menu/datatype.svg",revision:"7de19b44ee1e3e8f2c6ff39cb1281956"},{url:"menu/datatype/featurelayer.svg",revision:"0d3712eaac92b92fbc369c49899201da"},{url:"menu/datatype/geojson.svg",revision:"1d2ff9d92d6b2602bbeaf93e29abb0c1"},{url:"menu/demo.svg",revision:"c68259aeec59c53b792cfb84ba4b0d3b"},{url:"menu/demo/cors.svg",revision:"2ae7034144ce7e0bf080a55ef28ff203"},{url:"menu/demo/earthquakes.svg",revision:"daca703b9b28d686dc8cef7480fb4040"},{url:"menu/edit.svg",revision:"8aea20e106afd9729c2631a367748385"},{url:"menu/function.svg",revision:"b01ff84fd5670806304f2b954a354695"},{url:"menu/query.svg",revision:"144946c32207893b3f1c62789fcf1575"},{url:"menu/urbanGeo.svg",revision:"2c2b9a37fad83c6e110bf1035ff41536"},{url:"menu/visualization/electricShield.svg",revision:"b0877168ffcea2eaf1e097db8977861a"},{url:"menu/visualization/flashPoint.svg",revision:"a1379a2d9e37a07071e955cf99010878"},{url:"menu/visualization/rippleWall.svg",revision:"93543ba740cbc62c4b91918ff4b13cea"},{url:"menu/widgets.svg",revision:"9dcad784b449bafb1aeba64d88853898"},{url:"menu/widgets/layerlist.svg",revision:"e80d28ccb2708120976182be52a3f88c"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"assets/icons/512x512.png",revision:"f391bdb809f6ad29fb878ba4b923a636"},{url:"assets/icons/192x192.png",revision:"f17ad55a8f0c86c52c718e6bbcce942c"},{url:"assets/icons/48x48.png",revision:"c4af061b0b7275c847f6e3ddd81ad0f7"},{url:"assets/icons/24x24.png",revision:"8f4f47506b68d3d01156584890f113d2"},{url:"manifest.webmanifest",revision:"195c3a7ccd9b194d4bb2682a43d29342"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html"))),s.registerRoute(/^https:\/\/jsonplaceholder/,new s.CacheFirst({cacheName:"test-external-api",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
