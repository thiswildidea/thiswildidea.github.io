if(!self.define){let s,e={};const l=(l,n)=>(l=new URL(l+".js",n).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(n,i)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const o=s=>l(s,r),t={module:{uri:r},exports:u,require:o};e[r]=Promise.all(n.map((s=>t[s]||o(s)))).then((s=>(i(...s),u)))}}define(["./workbox-f407626e"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/401.1704797758166.css",revision:null},{url:"assets/401.1704797758166.js",revision:null},{url:"assets/401.1704797758166.png",revision:null},{url:"assets/404.1704797758166.css",revision:null},{url:"assets/404.1704797758166.js",revision:null},{url:"assets/404.1704797758166.png",revision:null},{url:"assets/account.1704797758166.css",revision:null},{url:"assets/account.1704797758166.js",revision:null},{url:"assets/api.1704797758166.js",revision:null},{url:"assets/basicInfoForm.1704797758166.js",revision:null},{url:"assets/bg-login.1704797758166.png",revision:null},{url:"assets/bmap.1704797758166.js",revision:null},{url:"assets/countUp.min.1704797758166.js",revision:null},{url:"assets/demo1.1704797758166.css",revision:null},{url:"assets/demo1.1704797758166.js",revision:null},{url:"assets/demo2.1704797758166.css",revision:null},{url:"assets/demo2.1704797758166.js",revision:null},{url:"assets/dept.1704797758166.js",revision:null},{url:"assets/details.1704797758166.js",revision:null},{url:"assets/details1.1704797758166.js",revision:null},{url:"assets/dictList.1704797758166.js",revision:null},{url:"assets/echarts.1704797758166.js",revision:null},{url:"assets/editDictItem.1704797758166.js",revision:null},{url:"assets/editMenu.1704797758166.js",revision:null},{url:"assets/editModule.1704797758166.css",revision:null},{url:"assets/editModule.1704797758166.js",revision:null},{url:"assets/editModule.17047977581662.js",revision:null},{url:"assets/editModule.17047977581663.js",revision:null},{url:"assets/editModule.17047977581664.js",revision:null},{url:"assets/editModule.17047977581665.js",revision:null},{url:"assets/editModule.17047977581666.js",revision:null},{url:"assets/editModule.17047977581667.js",revision:null},{url:"assets/editModule.17047977581668.js",revision:null},{url:"assets/editTable.1704797758166.js",revision:null},{url:"assets/esrilogo.1704797758166.png",revision:null},{url:"assets/formRulesOne.1704797758166.js",revision:null},{url:"assets/formRulesThree.1704797758166.js",revision:null},{url:"assets/formRulesTwo.1704797758166.js",revision:null},{url:"assets/genInfoForm.1704797758166.js",revision:null},{url:"assets/getStyleSheets.1704797758166.js",revision:null},{url:"assets/head.1704797758166.css",revision:null},{url:"assets/head.1704797758166.js",revision:null},{url:"assets/icons/192x192.png",revision:null},{url:"assets/icons/24x24.png",revision:null},{url:"assets/icons/48x48.png",revision:null},{url:"assets/icons/512x512.png",revision:null},{url:"assets/icons/icon_192.png",revision:null},{url:"assets/icons/icon_24.png",revision:null},{url:"assets/icons/icon_48.png",revision:null},{url:"assets/icons/icon_512.png",revision:null},{url:"assets/iframes.1704797758166.js",revision:null},{url:"assets/importTable.1704797758166.js",revision:null},{url:"assets/index.1704797758166.css",revision:null},{url:"assets/index.170479775816610.js",revision:null},{url:"assets/index.170479775816611.js",revision:null},{url:"assets/index.170479775816612.js",revision:null},{url:"assets/index.170479775816613.js",revision:null},{url:"assets/index.170479775816614.js",revision:null},{url:"assets/index.170479775816615.js",revision:null},{url:"assets/index.170479775816616.js",revision:null},{url:"assets/index.170479775816617.js",revision:null},{url:"assets/index.170479775816618.js",revision:null},{url:"assets/index.170479775816619.js",revision:null},{url:"assets/index.17047977581662.js",revision:null},{url:"assets/index.170479775816620.js",revision:null},{url:"assets/index.170479775816621.js",revision:null},{url:"assets/index.170479775816622.js",revision:null},{url:"assets/index.170479775816623.js",revision:null},{url:"assets/index.170479775816624.js",revision:null},{url:"assets/index.170479775816625.js",revision:null},{url:"assets/index.170479775816626.js",revision:null},{url:"assets/index.170479775816627.js",revision:null},{url:"assets/index.170479775816628.js",revision:null},{url:"assets/index.170479775816629.js",revision:null},{url:"assets/index.17047977581663.js",revision:null},{url:"assets/index.170479775816630.js",revision:null},{url:"assets/index.170479775816631.js",revision:null},{url:"assets/index.170479775816632.js",revision:null},{url:"assets/index.170479775816633.js",revision:null},{url:"assets/index.170479775816634.js",revision:null},{url:"assets/index.170479775816635.js",revision:null},{url:"assets/index.170479775816636.js",revision:null},{url:"assets/index.170479775816637.js",revision:null},{url:"assets/index.170479775816638.js",revision:null},{url:"assets/index.170479775816639.js",revision:null},{url:"assets/index.17047977581664.js",revision:null},{url:"assets/index.170479775816640.js",revision:null},{url:"assets/index.170479775816641.js",revision:null},{url:"assets/index.170479775816642.js",revision:null},{url:"assets/index.170479775816643.js",revision:null},{url:"assets/index.170479775816644.js",revision:null},{url:"assets/index.170479775816645.js",revision:null},{url:"assets/index.170479775816646.js",revision:null},{url:"assets/index.170479775816647.js",revision:null},{url:"assets/index.170479775816648.js",revision:null},{url:"assets/index.170479775816649.js",revision:null},{url:"assets/index.17047977581665.js",revision:null},{url:"assets/index.170479775816650.js",revision:null},{url:"assets/index.170479775816651.js",revision:null},{url:"assets/index.170479775816652.js",revision:null},{url:"assets/index.170479775816653.js",revision:null},{url:"assets/index.170479775816654.js",revision:null},{url:"assets/index.170479775816655.js",revision:null},{url:"assets/index.170479775816656.js",revision:null},{url:"assets/index.170479775816657.js",revision:null},{url:"assets/index.170479775816658.js",revision:null},{url:"assets/index.170479775816659.js",revision:null},{url:"assets/index.17047977581666.js",revision:null},{url:"assets/index.170479775816660.js",revision:null},{url:"assets/index.170479775816661.js",revision:null},{url:"assets/index.170479775816662.js",revision:null},{url:"assets/index.170479775816663.js",revision:null},{url:"assets/index.170479775816664.js",revision:null},{url:"assets/index.170479775816665.js",revision:null},{url:"assets/index.170479775816666.js",revision:null},{url:"assets/index.170479775816667.js",revision:null},{url:"assets/index.170479775816668.js",revision:null},{url:"assets/index.17047977581667.js",revision:null},{url:"assets/index.17047977581668.js",revision:null},{url:"assets/index.17047977581669.js",revision:null},{url:"assets/link.1704797758166.js",revision:null},{url:"assets/menu.1704797758166.js",revision:null},{url:"assets/mobile.1704797758166.css",revision:null},{url:"assets/mobile.1704797758166.js",revision:null},{url:"assets/parent.1704797758166.js",revision:null},{url:"assets/qrcode.1704797758166.js",revision:null},{url:"assets/scan.1704797758166.css",revision:null},{url:"assets/scan.1704797758166.js",revision:null},{url:"assets/screenshots/screen.png",revision:null},{url:"assets/screenshots/widget-screen.png",revision:null},{url:"assets/sortable.esm.1704797758166.js",revision:null},{url:"assets/string.1704797758166.js",revision:null},{url:"assets/table.1704797758166.js",revision:null},{url:"assets/type.1704797758166.js",revision:null},{url:"assets/user.1704797758166.js",revision:null},{url:"favicon.ico",revision:"9fac53a3eff58418b76fef335f279147"},{url:"index.html",revision:"0f570a0957b6532c5ee91fbb2d5a7dc4"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"assets/icons/512x512.png",revision:"e2a009c0f6aaa11d03a8e0728869b583"},{url:"assets/icons/192x192.png",revision:"fe970448513b18d0c37b4b671ca94a06"},{url:"assets/icons/48x48.png",revision:"c3f013b68eae92565e8337ee50472cdc"},{url:"assets/icons/24x24.png",revision:"5b1c195400df0f16c3f6cb2aa4665622"},{url:"manifest.webmanifest",revision:"efb8f6fb4119ccbfcc5d702aa35421fe"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html"))),s.registerRoute(/^https:\/\/jsonplaceholder/,new s.CacheFirst({cacheName:"test-external-api",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
