if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const t=s=>l(s,r),o={module:{uri:r},exports:u,require:t};e[r]=Promise.all(i.map((s=>o[s]||t(s)))).then((s=>(n(...s),u)))}}define(["./workbox-f407626e"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/401.1704934934962.css",revision:null},{url:"assets/401.1704934934962.js",revision:null},{url:"assets/401.1704934934962.png",revision:null},{url:"assets/404.1704934934962.css",revision:null},{url:"assets/404.1704934934962.js",revision:null},{url:"assets/404.1704934934962.png",revision:null},{url:"assets/account.1704934934962.css",revision:null},{url:"assets/account.1704934934962.js",revision:null},{url:"assets/api.1704934934962.js",revision:null},{url:"assets/basicInfoForm.1704934934962.js",revision:null},{url:"assets/bg-login.1704934934962.png",revision:null},{url:"assets/bmap.1704934934962.js",revision:null},{url:"assets/demo1.1704934934962.css",revision:null},{url:"assets/demo1.1704934934962.js",revision:null},{url:"assets/demo2.1704934934962.css",revision:null},{url:"assets/demo2.1704934934962.js",revision:null},{url:"assets/dept.1704934934962.js",revision:null},{url:"assets/details.1704934934962.js",revision:null},{url:"assets/details1.1704934934962.js",revision:null},{url:"assets/dictList.1704934934962.js",revision:null},{url:"assets/echarts.1704934934962.js",revision:null},{url:"assets/editDictItem.1704934934962.js",revision:null},{url:"assets/editMenu.1704934934962.js",revision:null},{url:"assets/editModule.1704934934962.css",revision:null},{url:"assets/editModule.1704934934962.js",revision:null},{url:"assets/editModule.17049349349622.js",revision:null},{url:"assets/editModule.17049349349623.js",revision:null},{url:"assets/editModule.17049349349624.js",revision:null},{url:"assets/editModule.17049349349625.js",revision:null},{url:"assets/editModule.17049349349626.js",revision:null},{url:"assets/editModule.17049349349627.js",revision:null},{url:"assets/editModule.17049349349628.js",revision:null},{url:"assets/editTable.1704934934962.js",revision:null},{url:"assets/esrilogo.1704934934962.png",revision:null},{url:"assets/fonts/CalciteWebCoreIcons.svg",revision:null},{url:"assets/formRulesOne.1704934934962.js",revision:null},{url:"assets/formRulesThree.1704934934962.js",revision:null},{url:"assets/formRulesTwo.1704934934962.js",revision:null},{url:"assets/genInfoForm.1704934934962.js",revision:null},{url:"assets/getStyleSheets.1704934934962.js",revision:null},{url:"assets/head.1704934934962.css",revision:null},{url:"assets/head.1704934934962.js",revision:null},{url:"assets/iframes.1704934934962.js",revision:null},{url:"assets/importTable.1704934934962.js",revision:null},{url:"assets/index.1704934934962.css",revision:null},{url:"assets/index.170493493496210.css",revision:null},{url:"assets/index.170493493496210.js",revision:null},{url:"assets/index.170493493496211.css",revision:null},{url:"assets/index.170493493496211.js",revision:null},{url:"assets/index.170493493496212.css",revision:null},{url:"assets/index.170493493496212.js",revision:null},{url:"assets/index.170493493496213.css",revision:null},{url:"assets/index.170493493496213.js",revision:null},{url:"assets/index.170493493496214.css",revision:null},{url:"assets/index.170493493496214.js",revision:null},{url:"assets/index.170493493496215.css",revision:null},{url:"assets/index.170493493496215.js",revision:null},{url:"assets/index.170493493496216.css",revision:null},{url:"assets/index.170493493496216.js",revision:null},{url:"assets/index.170493493496217.css",revision:null},{url:"assets/index.170493493496217.js",revision:null},{url:"assets/index.170493493496218.css",revision:null},{url:"assets/index.170493493496218.js",revision:null},{url:"assets/index.170493493496219.css",revision:null},{url:"assets/index.170493493496219.js",revision:null},{url:"assets/index.17049349349622.css",revision:null},{url:"assets/index.17049349349622.js",revision:null},{url:"assets/index.170493493496220.css",revision:null},{url:"assets/index.170493493496220.js",revision:null},{url:"assets/index.170493493496221.css",revision:null},{url:"assets/index.170493493496221.js",revision:null},{url:"assets/index.170493493496222.css",revision:null},{url:"assets/index.170493493496222.js",revision:null},{url:"assets/index.170493493496223.css",revision:null},{url:"assets/index.170493493496223.js",revision:null},{url:"assets/index.170493493496224.css",revision:null},{url:"assets/index.170493493496224.js",revision:null},{url:"assets/index.170493493496225.css",revision:null},{url:"assets/index.170493493496225.js",revision:null},{url:"assets/index.170493493496226.css",revision:null},{url:"assets/index.170493493496226.js",revision:null},{url:"assets/index.170493493496227.css",revision:null},{url:"assets/index.170493493496227.js",revision:null},{url:"assets/index.170493493496228.css",revision:null},{url:"assets/index.170493493496228.js",revision:null},{url:"assets/index.170493493496229.css",revision:null},{url:"assets/index.170493493496229.js",revision:null},{url:"assets/index.17049349349623.css",revision:null},{url:"assets/index.17049349349623.js",revision:null},{url:"assets/index.170493493496230.css",revision:null},{url:"assets/index.170493493496230.js",revision:null},{url:"assets/index.170493493496231.css",revision:null},{url:"assets/index.170493493496231.js",revision:null},{url:"assets/index.170493493496232.css",revision:null},{url:"assets/index.170493493496232.js",revision:null},{url:"assets/index.170493493496233.css",revision:null},{url:"assets/index.170493493496233.js",revision:null},{url:"assets/index.170493493496234.css",revision:null},{url:"assets/index.170493493496234.js",revision:null},{url:"assets/index.170493493496235.css",revision:null},{url:"assets/index.170493493496235.js",revision:null},{url:"assets/index.170493493496236.css",revision:null},{url:"assets/index.170493493496236.js",revision:null},{url:"assets/index.170493493496237.css",revision:null},{url:"assets/index.170493493496237.js",revision:null},{url:"assets/index.170493493496238.css",revision:null},{url:"assets/index.170493493496238.js",revision:null},{url:"assets/index.170493493496239.css",revision:null},{url:"assets/index.170493493496239.js",revision:null},{url:"assets/index.17049349349624.css",revision:null},{url:"assets/index.17049349349624.js",revision:null},{url:"assets/index.170493493496240.css",revision:null},{url:"assets/index.170493493496240.js",revision:null},{url:"assets/index.170493493496241.css",revision:null},{url:"assets/index.170493493496241.js",revision:null},{url:"assets/index.170493493496242.css",revision:null},{url:"assets/index.170493493496242.js",revision:null},{url:"assets/index.170493493496243.css",revision:null},{url:"assets/index.170493493496243.js",revision:null},{url:"assets/index.170493493496244.css",revision:null},{url:"assets/index.170493493496244.js",revision:null},{url:"assets/index.170493493496245.css",revision:null},{url:"assets/index.170493493496245.js",revision:null},{url:"assets/index.170493493496246.css",revision:null},{url:"assets/index.170493493496246.js",revision:null},{url:"assets/index.170493493496247.js",revision:null},{url:"assets/index.170493493496248.js",revision:null},{url:"assets/index.170493493496249.js",revision:null},{url:"assets/index.17049349349625.css",revision:null},{url:"assets/index.17049349349625.js",revision:null},{url:"assets/index.170493493496250.js",revision:null},{url:"assets/index.170493493496251.js",revision:null},{url:"assets/index.170493493496252.js",revision:null},{url:"assets/index.170493493496253.js",revision:null},{url:"assets/index.170493493496254.js",revision:null},{url:"assets/index.170493493496255.js",revision:null},{url:"assets/index.170493493496256.js",revision:null},{url:"assets/index.170493493496257.js",revision:null},{url:"assets/index.170493493496258.js",revision:null},{url:"assets/index.170493493496259.js",revision:null},{url:"assets/index.17049349349626.css",revision:null},{url:"assets/index.17049349349626.js",revision:null},{url:"assets/index.170493493496260.js",revision:null},{url:"assets/index.170493493496261.js",revision:null},{url:"assets/index.170493493496262.js",revision:null},{url:"assets/index.170493493496263.js",revision:null},{url:"assets/index.170493493496264.js",revision:null},{url:"assets/index.170493493496265.js",revision:null},{url:"assets/index.170493493496266.js",revision:null},{url:"assets/index.170493493496267.js",revision:null},{url:"assets/index.170493493496268.js",revision:null},{url:"assets/index.170493493496269.js",revision:null},{url:"assets/index.17049349349627.css",revision:null},{url:"assets/index.17049349349627.js",revision:null},{url:"assets/index.170493493496270.js",revision:null},{url:"assets/index.170493493496271.js",revision:null},{url:"assets/index.170493493496272.js",revision:null},{url:"assets/index.170493493496273.js",revision:null},{url:"assets/index.170493493496274.js",revision:null},{url:"assets/index.170493493496275.js",revision:null},{url:"assets/index.170493493496276.js",revision:null},{url:"assets/index.170493493496277.js",revision:null},{url:"assets/index.170493493496278.js",revision:null},{url:"assets/index.170493493496279.js",revision:null},{url:"assets/index.17049349349628.css",revision:null},{url:"assets/index.17049349349628.js",revision:null},{url:"assets/index.170493493496280.js",revision:null},{url:"assets/index.170493493496281.js",revision:null},{url:"assets/index.170493493496282.js",revision:null},{url:"assets/index.170493493496283.js",revision:null},{url:"assets/index.170493493496284.js",revision:null},{url:"assets/index.17049349349629.css",revision:null},{url:"assets/index.17049349349629.js",revision:null},{url:"assets/link.1704934934962.js",revision:null},{url:"assets/menu.1704934934962.js",revision:null},{url:"assets/mobile.1704934934962.css",revision:null},{url:"assets/mobile.1704934934962.js",revision:null},{url:"assets/parent.1704934934962.js",revision:null},{url:"assets/qrcode.1704934934962.js",revision:null},{url:"assets/scan.1704934934962.css",revision:null},{url:"assets/scan.1704934934962.js",revision:null},{url:"assets/sortable.esm.1704934934962.js",revision:null},{url:"assets/string.1704934934962.js",revision:null},{url:"assets/table.1704934934962.js",revision:null},{url:"assets/type.1704934934962.js",revision:null},{url:"assets/user.1704934934962.js",revision:null},{url:"favicon.ico",revision:"9fac53a3eff58418b76fef335f279147"},{url:"index.html",revision:"43f0ff2e3ed46f423c5b322a3e9bc457"},{url:"menu/anaysis.svg",revision:"e0135713363f3a8836f7d463373809c5"},{url:"menu/basemap.svg",revision:"e9858201b5e9968f8487bbdda3de9483"},{url:"menu/basemap/lastupdate.svg",revision:"469ebf32569ba7d63ad8478e7907e7dd"},{url:"menu/basemap/satellite.svg",revision:"2fe21861180f8d983d3a341edd95d32a"},{url:"menu/datatype.svg",revision:"7de19b44ee1e3e8f2c6ff39cb1281956"},{url:"menu/edit.svg",revision:"8aea20e106afd9729c2631a367748385"},{url:"menu/function.svg",revision:"b01ff84fd5670806304f2b954a354695"},{url:"menu/lastupdate.svg",revision:"469ebf32569ba7d63ad8478e7907e7dd"},{url:"menu/query.svg",revision:"144946c32207893b3f1c62789fcf1575"},{url:"menu/urbanGeo.svg",revision:"2c2b9a37fad83c6e110bf1035ff41536"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"manifest.webmanifest",revision:"efb8f6fb4119ccbfcc5d702aa35421fe"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html"))),s.registerRoute(/^https:\/\/jsonplaceholder/,new s.CacheFirst({cacheName:"test-external-api",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
