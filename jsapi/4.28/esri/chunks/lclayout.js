// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define(["exports","./_commonjsHelpers"],function(Za,ia){var J={exports:{}};J.exports;(function(Q,R){R=(()=>{var I="undefined"!==typeof document&&document.currentScript?document.currentScript.src:void 0;"undefined"!==typeof __filename&&(I=I||__filename);return function(C){function K(a){return f.locateFile?f.locateFile(a,D):D+a}function L(a,b,c){var d=b+c;for(c=b;a[c]&&!(c>=d);)++c;if(16<c-b&&a.buffer&&xa)return xa.decode(a.subarray(b,c));for(d="";b<c;){var g=a[b++];if(g&128){var h=a[b++]&63;if(192==
(g&224))d+=String.fromCharCode((g&31)<<6|h);else{var l=a[b++]&63;g=224==(g&240)?(g&15)<<12|h<<6|l:(g&7)<<18|h<<12|l<<6|a[b++]&63;65536>g?d+=String.fromCharCode(g):(g-=65536,d+=String.fromCharCode(55296|g>>10,56320|g&1023))}}else d+=String.fromCharCode(g)}return d}function ya(a,b,c,d){if(!(0<d))return 0;var g=c;d=c+d-1;for(var h=0;h<a.length;++h){var l=a.charCodeAt(h);if(55296<=l&&57343>=l){var k=a.charCodeAt(++h);l=65536+((l&1023)<<10)|k&1023}if(127>=l){if(c>=d)break;b[c++]=l}else{if(2047>=l){if(c+
1>=d)break;b[c++]=192|l>>6}else{if(65535>=l){if(c+2>=d)break;b[c++]=224|l>>12}else{if(c+3>=d)break;b[c++]=240|l>>18;b[c++]=128|l>>12&63}b[c++]=128|l>>6&63}b[c++]=128|l&63}}b[c]=0;return c-g}function za(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);127>=d?b++:2047>=d?b+=2:55296<=d&&57343>=d?(b+=4,++c):b+=3}return b}function Aa(a){ja=a;f.HEAP8=E=new Int8Array(a);f.HEAP16=N=new Int16Array(a);f.HEAP32=t=new Int32Array(a);f.HEAPU8=y=new Uint8Array(a);f.HEAPU16=Y=new Uint16Array(a);f.HEAPU32=
u=new Uint32Array(a);f.HEAPF32=Ba=new Float32Array(a);f.HEAPF64=Ca=new Float64Array(a)}function Z(a){if(f.onAbort)f.onAbort(a);a="Aborted("+a+")";S(a);Da=!0;a=new WebAssembly.RuntimeError(a+". Build with -sASSERTIONS for more info.");aa(a);throw a;}function Ea(a){try{if(a==z&&T)return new Uint8Array(T);if(ka)return ka(a);throw"both async and sync fetching of the wasm failed";}catch(b){Z(b)}}function $a(){if(!T&&(Fa||U)){if("function"==typeof fetch&&!z.startsWith("file://"))return fetch(z,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+
z+"'";return a.arrayBuffer()}).catch(function(){return Ea(z)});if(la)return new Promise(function(a,b){la(z,function(c){a(new Uint8Array(c))},b)})}return Promise.resolve().then(function(){return Ea(z)})}function ma(a){for(;0<a.length;)a.shift()(f)}function ab(a){this.excPtr=a;this.ptr=a-24;this.set_type=function(b){u[this.ptr+4>>2]=b};this.get_type=function(){return u[this.ptr+4>>2]};this.set_destructor=function(b){u[this.ptr+8>>2]=b};this.get_destructor=function(){return u[this.ptr+8>>2]};this.set_refcount=
function(b){t[this.ptr>>2]=b};this.set_caught=function(b){E[this.ptr+12>>0]=b?1:0};this.get_caught=function(){return 0!=E[this.ptr+12>>0]};this.set_rethrown=function(b){E[this.ptr+13>>0]=b?1:0};this.get_rethrown=function(){return 0!=E[this.ptr+13>>0]};this.init=function(b,c){this.set_adjusted_ptr(0);this.set_type(b);this.set_destructor(c);this.set_refcount(0);this.set_caught(!1);this.set_rethrown(!1)};this.add_ref=function(){t[this.ptr>>2]+=1};this.release_ref=function(){var b=t[this.ptr>>2];t[this.ptr>>
2]=b-1;return 1===b};this.set_adjusted_ptr=function(b){u[this.ptr+16>>2]=b};this.get_adjusted_ptr=function(){return u[this.ptr+16>>2]};this.get_exception_ptr=function(){if(Ga(this.get_type()))return u[this.excPtr>>2];var b=this.get_adjusted_ptr();return 0!==b?b:this.excPtr}}function na(a){switch(a){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+a);}}function A(a){for(var b="";y[a];)b+=Ha[y[a++]];return b}function bb(a){if(void 0===
a)return"_unknown";a=a.replace(/[^a-zA-Z0-9_]/g,"$");var b=a.charCodeAt(0);return 48<=b&&57>=b?"_"+a:a}function cb(a,b){a=bb(a);return function(){return b.apply(this,arguments)}}function oa(a,b){var c=cb(b,function(d){this.name=b;this.message=d;d=Error(d).stack;void 0!==d&&(this.stack=this.toString()+"\n"+d.replace(/^Error(:[^\n]*)?\n/,""))});c.prototype=Object.create(a.prototype);c.prototype.constructor=c;c.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message};
return c}function B(a){throw new Ia(a);}function Ja(a,b,c){function d(k){k=c(k);if(k.length!==a.length)throw new pa("Mismatched type converter count");for(var n=0;n<a.length;++n)G(a[n],k[n])}a.forEach(function(k){ba[k]=b});var g=Array(b.length),h=[],l=0;b.forEach((k,n)=>{O.hasOwnProperty(k)?g[n]=O[k]:(h.push(k),P.hasOwnProperty(k)||(P[k]=[]),P[k].push(()=>{g[n]=O[k];++l;l===h.length&&d(g)}))});0===h.length&&d(g)}function G(a,b,c={}){if(!("argPackAdvance"in b))throw new TypeError("registerType registeredInstance requires argPackAdvance");
var d=b.name;a||B('type "'+d+'" must have a positive integer typeid pointer');if(O.hasOwnProperty(a)){if(c.ignoreDuplicateRegistrations)return;B("Cannot register type '"+d+"' twice")}O[a]=b;delete ba[a];P.hasOwnProperty(a)&&(b=P[a],delete P[a],b.forEach(g=>g()))}function qa(a){return this.fromWireType(t[a>>2])}function db(a,b){switch(b){case 2:return function(c){return this.fromWireType(Ba[c>>2])};case 3:return function(c){return this.fromWireType(Ca[c>>3])};default:throw new TypeError("Unknown float type: "+
a);}}function eb(a,b,c,d,g){var h=b.length;2>h&&B("argTypes array size mismatch! Must at least get return value and 'this' types!");var l=null!==b[1]&&null!==c,k=!1;for(c=1;c<b.length;++c)if(null!==b[c]&&void 0===b[c].destructorFunction){k=!0;break}var n="void"!==b[0].name,p=h-2,q=Array(p),v=[],x=[];return function(){arguments.length!==p&&B("function "+a+" called with "+arguments.length+" arguments, expected "+p+" args!");x.length=0;v.length=l?2:1;v[0]=g;if(l){var e=b[1].toWireType(x,this);v[1]=e}for(var m=
0;m<p;++m)q[m]=b[m+2].toWireType(x,arguments[m]),v.push(q[m]);m=d.apply(null,v);if(k)for(;x.length;)e=x.pop(),x.pop()(e);else for(var r=l?1:2;r<b.length;r++){var w=1===r?e:q[r-2];null!==b[r].destructorFunction&&b[r].destructorFunction(w)}e=n?b[0].fromWireType(m):void 0;return e}}function fb(a,b,c){if(void 0===a[b].overloadTable){var d=a[b];a[b]=function(){a[b].overloadTable.hasOwnProperty(arguments.length)||B("Function '"+c+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+
a[b].overloadTable+")!");return a[b].overloadTable[arguments.length].apply(this,arguments)};a[b].overloadTable=[];a[b].overloadTable[d.argCount]=d}}function gb(a,b,c){f.hasOwnProperty(a)?((void 0===c||void 0!==f[a].overloadTable&&void 0!==f[a].overloadTable[c])&&B("Cannot register public name '"+a+"' twice"),fb(f,a,a),f.hasOwnProperty(c)&&B("Cannot register multiple overloads of a function with the same number of arguments ("+c+")!"),f[a].overloadTable[c]=b):(f[a]=b,void 0!==c&&(f[a].numArguments=
c))}function hb(a,b){for(var c=[],d=0;d<a;d++)c.push(u[b+4*d>>2]);return c}function Ka(a){var b=ca[a];b||(a>=ca.length&&(ca.length=a+1),ca[a]=b=La.get(a));return b}function ib(a,b){var c=[];return function(){c.length=0;Object.assign(c,arguments);if(a.includes("j")){var d=f["dynCall_"+a];d=c&&c.length?d.apply(null,[b].concat(c)):d.call(null,b)}else d=Ka(b).apply(null,c);return d}}function jb(a,b){a=A(a);var c=a.includes("j")?ib(a,b):Ka(b);"function"!=typeof c&&B("unknown function pointer with signature "+
a+": "+b);return c}function kb(a){a=Ma(a);var b=A(a);H(a);return b}function lb(a,b){function c(h){g[h]||O[h]||(ba[h]?ba[h].forEach(c):(d.push(h),g[h]=!0))}var d=[],g={};b.forEach(c);throw new Na(a+": "+d.map(kb).join([", "]));}function mb(a,b,c){switch(b){case 0:return c?function(d){return E[d]}:function(d){return y[d]};case 1:return c?function(d){return N[d>>1]}:function(d){return Y[d>>1]};case 2:return c?function(d){return t[d>>2]}:function(d){return u[d>>2]};default:throw new TypeError("Unknown integer type: "+
a);}}function nb(a,b){var c=a>>1;for(var d=c+b/2;!(c>=d)&&Y[c];)++c;c<<=1;if(32<c-a&&Oa)return Oa.decode(y.subarray(a,c));c="";for(d=0;!(d>=b/2);++d){var g=N[a+2*d>>1];if(0==g)break;c+=String.fromCharCode(g)}return c}function ob(a,b,c){void 0===c&&(c=2147483647);if(2>c)return 0;c-=2;var d=b;c=c<2*a.length?c/2:a.length;for(var g=0;g<c;++g){var h=a.charCodeAt(g);N[b>>1]=h;b+=2}N[b>>1]=0;return b-d}function pb(a){return 2*a.length}function qb(a,b){for(var c=0,d="";!(c>=b/4);){var g=t[a+4*c>>2];if(0==
g)break;++c;65536<=g?(g-=65536,d+=String.fromCharCode(55296|g>>10,56320|g&1023)):d+=String.fromCharCode(g)}return d}function rb(a,b,c){void 0===c&&(c=2147483647);if(4>c)return 0;var d=b;c=d+c-4;for(var g=0;g<a.length;++g){var h=a.charCodeAt(g);if(55296<=h&&57343>=h){var l=a.charCodeAt(++g);h=65536+((h&1023)<<10)|l&1023}t[b>>2]=h;b+=4;if(b+4>c)break}t[b>>2]=0;return b-d}function sb(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&++c;b+=4}return b}function V(){if(!V.strings){var a=
{USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:("object"==typeof navigator&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:ra||"./this.program"},b;for(b in sa)void 0===sa[b]?delete a[b]:a[b]=sa[b];var c=[];for(b in a)c.push(b+"\x3d"+a[b]);V.strings=c}return V.strings}function da(a){return 0===a%4&&(0!==a%100||0===a%400)}function tb(a,b,c){c=0<c?c:za(a)+1;c=Array(c);a=ya(a,c,0,c.length);b&&(c.length=a);return c}function ub(a,b,c,d){function g(e,
m,r){for(e="number"==typeof e?e.toString():e||"";e.length<m;)e=r[0]+e;return e}function h(e,m){return g(e,m,"0")}function l(e,m){function r(W){return 0>W?-1:0<W?1:0}var w;0===(w=r(e.getFullYear()-m.getFullYear()))&&0===(w=r(e.getMonth()-m.getMonth()))&&(w=r(e.getDate()-m.getDate()));return w}function k(e){switch(e.getDay()){case 0:return new Date(e.getFullYear()-1,11,29);case 1:return e;case 2:return new Date(e.getFullYear(),0,3);case 3:return new Date(e.getFullYear(),0,2);case 4:return new Date(e.getFullYear(),
0,1);case 5:return new Date(e.getFullYear()-1,11,31);case 6:return new Date(e.getFullYear()-1,11,30)}}function n(e){a:{var m=e.tm_yday;for(e=new Date((new Date(e.tm_year+1900,0,1)).getTime());0<m;){var r=da(e.getFullYear()),w=e.getMonth();r=(r?Pa:Qa)[w];if(m>r-e.getDate())m-=r-e.getDate()+1,e.setDate(1),11>w?e.setMonth(w+1):(e.setMonth(0),e.setFullYear(e.getFullYear()+1));else{e.setDate(e.getDate()+m);m=e;break a}}m=e}w=new Date(m.getFullYear(),0,4);e=new Date(m.getFullYear()+1,0,4);w=k(w);e=k(e);
return 0>=l(w,m)?0>=l(e,m)?m.getFullYear()+1:m.getFullYear():m.getFullYear()-1}var p=t[d+40>>2];d={tm_sec:t[d>>2],tm_min:t[d+4>>2],tm_hour:t[d+8>>2],tm_mday:t[d+12>>2],tm_mon:t[d+16>>2],tm_year:t[d+20>>2],tm_wday:t[d+24>>2],tm_yday:t[d+28>>2],tm_isdst:t[d+32>>2],tm_gmtoff:t[d+36>>2],tm_zone:p?p?L(y,p,void 0):"":""};c=c?L(y,c,void 0):"";p={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c",
"%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"};for(var q in p)c=c.replace(new RegExp(q,"g"),p[q]);var v="Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),x="January February March April May June July August September October November December".split(" ");p={"%a":function(e){return v[e.tm_wday].substring(0,3)},"%A":function(e){return v[e.tm_wday]},
"%b":function(e){return x[e.tm_mon].substring(0,3)},"%B":function(e){return x[e.tm_mon]},"%C":function(e){return h((e.tm_year+1900)/100|0,2)},"%d":function(e){return h(e.tm_mday,2)},"%e":function(e){return g(e.tm_mday,2," ")},"%g":function(e){return n(e).toString().substring(2)},"%G":function(e){return n(e)},"%H":function(e){return h(e.tm_hour,2)},"%I":function(e){e=e.tm_hour;0==e?e=12:12<e&&(e-=12);return h(e,2)},"%j":function(e){for(var m=e.tm_mday,r=da(e.tm_year+1900)?Pa:Qa,w=0,W=0;W<=e.tm_mon-
1;w+=r[W++]);return h(m+w,3)},"%m":function(e){return h(e.tm_mon+1,2)},"%M":function(e){return h(e.tm_min,2)},"%n":function(){return"\n"},"%p":function(e){return 0<=e.tm_hour&&12>e.tm_hour?"AM":"PM"},"%S":function(e){return h(e.tm_sec,2)},"%t":function(){return"\t"},"%u":function(e){return e.tm_wday||7},"%U":function(e){return h(Math.floor((e.tm_yday+7-e.tm_wday)/7),2)},"%V":function(e){var m=Math.floor((e.tm_yday+7-(e.tm_wday+6)%7)/7);2>=(e.tm_wday+371-e.tm_yday-2)%7&&m++;if(m)53==m&&(r=(e.tm_wday+
371-e.tm_yday)%7,4==r||3==r&&da(e.tm_year)||(m=1));else{m=52;var r=(e.tm_wday+7-e.tm_yday-1)%7;(4==r||5==r&&da(e.tm_year%400-1))&&m++}return h(m,2)},"%w":function(e){return e.tm_wday},"%W":function(e){return h(Math.floor((e.tm_yday+7-(e.tm_wday+6)%7)/7),2)},"%y":function(e){return(e.tm_year+1900).toString().substring(2)},"%Y":function(e){return e.tm_year+1900},"%z":function(e){e=e.tm_gmtoff;var m=0<=e;e=Math.abs(e)/60;return(m?"+":"-")+String("0000"+(e/60*100+e%60)).slice(-4)},"%Z":function(e){return e.tm_zone},
"%%":function(){return"%"}};c=c.replace(/%%/g,"\x00\x00");for(q in p)c.includes(q)&&(c=c.replace(new RegExp(q,"g"),p[q](d)));c=c.replace(/\0\0/g,"%");q=tb(c,!1);if(q.length>b)return 0;E.set(q,a);return q.length-1}function Ra(a){function b(){if(!ea&&(ea=!0,f.calledRun=!0,!Da)){ma(Sa);Ta(f);if(f.onRuntimeInitialized)f.onRuntimeInitialized();if(f.postRun)for("function"==typeof f.postRun&&(f.postRun=[f.postRun]);f.postRun.length;)Ua.unshift(f.postRun.shift());ma(Ua)}}if(!(0<M)){if(f.preRun)for("function"==
typeof f.preRun&&(f.preRun=[f.preRun]);f.preRun.length;)Va.unshift(f.preRun.shift());ma(Va);0<M||(f.setStatus?(f.setStatus("Running..."),setTimeout(function(){setTimeout(function(){f.setStatus("")},1);b()},1)):b())}}C=C||{};var f="undefined"!=typeof C?C:{},Ta,aa;f.ready=new Promise(function(a,b){Ta=a;aa=b});var fa=Object.assign({},f),ra="./this.program",Fa="object"==typeof window,U="function"==typeof importScripts,ta="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,
D="";if(ta){var Wa=require("fs"),ua=require("path");D=U?ua.dirname(D)+"/":__dirname+"/";var Xa=(a,b)=>{a=a.startsWith("file://")?new URL(a):ua.normalize(a);return Wa.readFileSync(a,b?void 0:"utf8")};var ka=a=>{a=Xa(a,!0);a.buffer||(a=new Uint8Array(a));return a};var la=(a,b,c)=>{a=a.startsWith("file://")?new URL(a):ua.normalize(a);Wa.readFile(a,function(d,g){d?c(d):b(g.buffer)})};1<process.argv.length&&(ra=process.argv[1].replace(/\\/g,"/"));process.argv.slice(2);process.on("uncaughtException",function(a){throw a;
});process.on("unhandledRejection",function(a){throw a;});f.inspect=function(){return"[Emscripten Module object]"}}else if(Fa||U)U?D=self.location.href:"undefined"!=typeof document&&document.currentScript&&(D=document.currentScript.src),I&&(D=I),D=0!==D.indexOf("blob:")?D.substr(0,D.replace(/[?#].*/,"").lastIndexOf("/")+1):"",Xa=a=>{var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},U&&(ka=a=>{var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);
return new Uint8Array(b.response)}),la=(a,b,c)=>{var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=()=>{200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)};f.print||console.log.bind(console);var S=f.printErr||console.warn.bind(console);Object.assign(f,fa);fa=null;f.arguments&&f.arguments;f.thisProgram&&(ra=f.thisProgram);f.quit&&f.quit;var T;f.wasmBinary&&(T=f.wasmBinary);f.noExitRuntime||!0;"object"!=typeof WebAssembly&&Z("no native wasm support detected");
var ha,Da=!1,xa="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0,ja,E,y,N,Y,t,u,Ba,Ca;f.INITIAL_MEMORY||8388608;var La,Va=[],Sa=[],Ua=[],M=0,X=null;var z="lclayout.wasm";z.startsWith("data:application/octet-stream;base64,")||(z=K(z));var Ha=void 0,P={},O={},ba={},Ia=void 0,pa=void 0,va=[],F=[{},{value:void 0},{value:null},{value:!0},{value:!1}],Ya={toValue:a=>{a||B("Cannot use deleted val. handle \x3d "+a);return F[a].value},toHandle:a=>{switch(a){case void 0:return 1;case null:return 2;
case !0:return 3;case !1:return 4;default:var b=va.length?va.pop():F.length;F[b]={refcount:1,value:a};return b}}},ca=[],Na=void 0,Oa="undefined"!=typeof TextDecoder?new TextDecoder("utf-16le"):void 0;fa=ta?()=>{var a=process.hrtime();return 1E3*a[0]+a[1]/1E6}:()=>performance.now();var sa={},Pa=[31,29,31,30,31,30,31,31,30,31,30,31],Qa=[31,28,31,30,31,30,31,31,30,31,30,31];(function(){for(var a=Array(256),b=0;256>b;++b)a[b]=String.fromCharCode(b);Ha=a})();Ia=f.BindingError=oa(Error,"BindingError");
pa=f.InternalError=oa(Error,"InternalError");f.count_emval_handles=function(){for(var a=0,b=5;b<F.length;++b)void 0!==F[b]&&++a;return a};f.get_first_emval=function(){for(var a=5;a<F.length;++a)if(void 0!==F[a])return F[a];return null};Na=f.UnboundTypeError=oa(Error,"UnboundTypeError");var vb={a:function(a,b,c){(new ab(a)).init(b,c);throw a;},m:function(a,b,c,d,g){},k:function(a,b,c,d,g){var h=na(c);b=A(b);G(a,{name:b,fromWireType:function(l){return!!l},toWireType:function(l,k){return k?d:g},argPackAdvance:8,
readValueFromPointer:function(l){if(1===c)var k=E;else if(2===c)k=N;else if(4===c)k=t;else throw new TypeError("Unknown boolean type size: "+b);return this.fromWireType(k[l>>h])},destructorFunction:null})},i:function(a,b,c){a=A(a);Ja([],[b],function(d){d=d[0];f[a]=d.fromWireType(c);return[]})},j:function(a,b){b=A(b);G(a,{name:b,fromWireType:function(c){var d=Ya.toValue(c);4<c&&0===--F[c].refcount&&(F[c]=void 0,va.push(c));return d},toWireType:function(c,d){return Ya.toHandle(d)},argPackAdvance:8,
readValueFromPointer:qa,destructorFunction:null})},h:function(a,b,c){c=na(c);b=A(b);G(a,{name:b,fromWireType:function(d){return d},toWireType:function(d,g){return g},argPackAdvance:8,readValueFromPointer:db(b,c),destructorFunction:null})},c:function(a,b,c,d,g,h){var l=hb(b,c);a=A(a);g=jb(d,g);gb(a,function(){lb("Cannot call "+a+" due to unbound types",l)},b-1);Ja([],l,function(k){var n=[k[0],null].concat(k.slice(1));k=a;n=eb(a,n,null,g,h);var p=b-1;if(!f.hasOwnProperty(k))throw new pa("Replacing nonexistant public symbol");
void 0!==f[k].overloadTable&&void 0!==p?f[k].overloadTable[p]=n:(f[k]=n,f[k].argCount=p);return[]})},d:function(a,b,c,d,g){b=A(b);g=na(c);var h=k=>k;if(0===d){var l=32-8*c;h=k=>k<<l>>>l}c=b.includes("unsigned")?function(k,n){return n>>>0}:function(k,n){return n};G(a,{name:b,fromWireType:h,toWireType:c,argPackAdvance:8,readValueFromPointer:mb(b,g,0!==d),destructorFunction:null})},b:function(a,b,c){function d(h){h>>=2;var l=u;return new g(ja,l[h+1],l[h])}var g=[Int8Array,Uint8Array,Int16Array,Uint16Array,
Int32Array,Uint32Array,Float32Array,Float64Array][b];c=A(c);G(a,{name:c,fromWireType:d,argPackAdvance:8,readValueFromPointer:d},{ignoreDuplicateRegistrations:!0})},g:function(a,b){b=A(b);var c="std::string"===b;G(a,{name:b,fromWireType:function(d){var g=u[d>>2],h=d+4;if(c)for(var l=h,k=0;k<=g;++k){var n=h+k;if(k==g||0==y[n]){var p=n-l;l=l?L(y,l,p):"";if(void 0===q)var q=l;else q+=String.fromCharCode(0),q+=l;l=n+1}}else{q=Array(g);for(k=0;k<g;++k)q[k]=String.fromCharCode(y[h+k]);q=q.join("")}H(d);
return q},toWireType:function(d,g){g instanceof ArrayBuffer&&(g=new Uint8Array(g));var h="string"==typeof g;h||g instanceof Uint8Array||g instanceof Uint8ClampedArray||g instanceof Int8Array||B("Cannot pass non-string to std::string");var l=c&&h?za(g):g.length;var k=wa(4+l+1),n=k+4;u[k>>2]=l;if(c&&h)ya(g,y,n,l+1);else if(h)for(h=0;h<l;++h){var p=g.charCodeAt(h);255<p&&(H(n),B("String has UTF-16 code units that do not fit in 8 bits"));y[n+h]=p}else for(h=0;h<l;++h)y[n+h]=g[h];null!==d&&d.push(H,k);
return k},argPackAdvance:8,readValueFromPointer:qa,destructorFunction:function(d){H(d)}})},e:function(a,b,c){c=A(c);if(2===b){var d=nb;var g=ob;var h=pb;var l=()=>Y;var k=1}else 4===b&&(d=qb,g=rb,h=sb,l=()=>u,k=2);G(a,{name:c,fromWireType:function(n){for(var p=u[n>>2],q=l(),v,x=n+4,e=0;e<=p;++e){var m=n+4+e*b;if(e==p||0==q[m>>k])x=d(x,m-x),void 0===v?v=x:(v+=String.fromCharCode(0),v+=x),x=m+b}H(n);return v},toWireType:function(n,p){"string"!=typeof p&&B("Cannot pass non-string to C++ string type "+
c);var q=h(p),v=wa(4+q+b);u[v>>2]=q>>k;g(p,v+4,q+b);null!==n&&n.push(H,v);return v},argPackAdvance:8,readValueFromPointer:qa,destructorFunction:function(n){H(n)}})},l:function(a,b){b=A(b);G(a,{isVoid:!0,name:b,argPackAdvance:0,fromWireType:function(){},toWireType:function(c,d){}})},r:function(){return!0},f:function(){Z("")},s:function(){return Date.now()},n:function(){return 2147483648},u:fa,v:function(a,b,c){y.copyWithin(a,b,b+c)},t:function(a){var b=y.length;a>>>=0;if(2147483648<a)return!1;for(var c=
1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);var g=Math;d=Math.max(a,d);g=g.min.call(g,2147483648,d+(65536-d%65536)%65536);a:{try{ha.grow(g-ja.byteLength+65535>>>16);Aa(ha.buffer);var h=1;break a}catch(l){}h=void 0}if(h)return!0}return!1},p:function(a,b){var c=0;V().forEach(function(d,g){var h=b+c;g=u[a+4*g>>2]=h;for(h=0;h<d.length;++h)E[g++>>0]=d.charCodeAt(h);E[g>>0]=0;c+=d.length+1});return 0},q:function(a,b){var c=V();u[a>>2]=c.length;var d=0;c.forEach(function(g){d+=g.length+1});u[b>>
2]=d;return 0},o:function(a,b,c,d,g){return ub(a,b,c,d)}};(function(){function a(g,h){f.asm=g.exports;ha=f.asm.w;Aa(ha.buffer);La=f.asm.y;Sa.unshift(f.asm.x);M--;f.monitorRunDependencies&&f.monitorRunDependencies(M);0==M&&X&&(g=X,X=null,g())}function b(g){a(g.instance)}function c(g){return $a().then(function(h){return WebAssembly.instantiate(h,d)}).then(function(h){return h}).then(g,function(h){S("failed to asynchronously prepare wasm: "+h);Z(h)})}var d={a:vb};M++;f.monitorRunDependencies&&f.monitorRunDependencies(M);
if(f.instantiateWasm)try{return f.instantiateWasm(d,a)}catch(g){S("Module.instantiateWasm callback failed with error: "+g),aa(g)}(function(){return T||"function"!=typeof WebAssembly.instantiateStreaming||z.startsWith("data:application/octet-stream;base64,")||z.startsWith("file://")||ta||"function"!=typeof fetch?c(b):fetch(z,{credentials:"same-origin"}).then(function(g){return WebAssembly.instantiateStreaming(g,d).then(b,function(h){S("wasm streaming compile failed: "+h);S("falling back to ArrayBuffer instantiation");
return c(b)})})})().catch(aa);return{}})();f.___wasm_call_ctors=function(){return(f.___wasm_call_ctors=f.asm.x).apply(null,arguments)};var Ma=f.___getTypeName=function(){return(Ma=f.___getTypeName=f.asm.z).apply(null,arguments)};f.__embind_initialize_bindings=function(){return(f.__embind_initialize_bindings=f.asm.A).apply(null,arguments)};var wa=f._malloc=function(){return(wa=f._malloc=f.asm.B).apply(null,arguments)},H=f._free=function(){return(H=f._free=f.asm.C).apply(null,arguments)},Ga=f.___cxa_is_pointer_type=
function(){return(Ga=f.___cxa_is_pointer_type=f.asm.D).apply(null,arguments)};f.dynCall_viijii=function(){return(f.dynCall_viijii=f.asm.E).apply(null,arguments)};f.dynCall_iiiiij=function(){return(f.dynCall_iiiiij=f.asm.F).apply(null,arguments)};f.dynCall_iiiiijj=function(){return(f.dynCall_iiiiijj=f.asm.G).apply(null,arguments)};f.dynCall_iiiiiijj=function(){return(f.dynCall_iiiiiijj=f.asm.H).apply(null,arguments)};var ea;X=function b(){ea||Ra();ea||(X=b)};if(f.preInit)for("function"==typeof f.preInit&&
(f.preInit=[f.preInit]);0<f.preInit.length;)f.preInit.pop()();Ra();return C.ready}})();Q.exports=R})(J,J.exports);J=J.exports;ia=function(Q,R){for(var I=0;I<R.length;I++){const C=R[I];if("string"!==typeof C&&!Array.isArray(C))for(const K in C)if("default"!==K&&!(K in Q)){const L=Object.getOwnPropertyDescriptor(C,K);L&&Object.defineProperty(Q,K,L.get?L:{enumerable:!0,get:()=>C[K]})}}return Object.freeze(Object.defineProperty(Q,Symbol.toStringTag,{value:"Module"}))}({__proto__:null,default:ia.getDefaultExportFromCjs(J)},
[J]);Za.lclayout=ia});