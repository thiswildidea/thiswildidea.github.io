/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function e(e,t,n,r){var o,c=arguments.length,f=c<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)f=Reflect.decorate(e,t,n,r);else for(var u=e.length-1;u>=0;u--)(o=e[u])&&(f=(c<3?o(f):c>3?o(t,n,f):o(t,n))||f);return c>3&&f&&Object.defineProperty(t,n,f),f}function t(e,t,n,r){return new(n||(n=Promise))((function(o,c){function f(e){try{a(r.next(e))}catch(e){c(e)}}function u(e){try{a(r.throw(e))}catch(e){c(e)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(f,u)}a((r=r.apply(e,t||[])).next())}))}"function"==typeof SuppressedError&&SuppressedError;export{e as _,t as a};
