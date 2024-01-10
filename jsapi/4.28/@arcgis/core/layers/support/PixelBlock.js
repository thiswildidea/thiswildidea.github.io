/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import s from"../../core/Error.js";import{JSONSupport as e}from"../../core/JSONSupport.js";import{clone as i}from"../../core/lang.js";import{L as l}from"../../chunks/Logger.js";import{property as r}from"../../core/accessorSupport/decorators/property.js";import{cast as o}from"../../core/accessorSupport/decorators/cast.js";import{subclass as n}from"../../core/accessorSupport/decorators/subclass.js";import{g as a}from"../../chunks/pixelRangeUtils.js";import"../../config.js";import"../../chunks/typedArrayUtil.js";import"../../core/Accessor.js";import"../../core/Handles.js";import"../../chunks/maybe.js";import"../../chunks/metadata.js";import"../../chunks/utils.js";import"../../chunks/handleUtils.js";import"../../chunks/ObjectPool.js";import"../../chunks/ObservableBase.js";import"../../chunks/tracking.js";import"../../core/scheduling.js";import"../../chunks/nextTick.js";import"../../chunks/PooledArray.js";import"../../core/promiseUtils.js";import"../../chunks/time.js";import"../../chunks/ensureType.js";class h{constructor(t=null,s=null,e=null){this.minValue=t,this.maxValue=s,this.noDataValue=e}}var p;let c=p=class extends e{static createEmptyBand(t,s){return new(p.getPixelArrayConstructor(t))(s)}static getPixelArrayConstructor(t){let s;switch(t){case"u1":case"u2":case"u4":case"u8":s=Uint8Array;break;case"u16":s=Uint16Array;break;case"u32":s=Uint32Array;break;case"s8":s=Int8Array;break;case"s16":s=Int16Array;break;case"s32":s=Int32Array;break;case"f32":case"c64":case"c128":case"unknown":s=Float32Array;break;case"f64":s=Float64Array}return s}constructor(t){super(t),this.width=null,this.height=null,this.pixelType="f32",this.validPixelCount=null,this.mask=null,this.maskIsAlpha=!1,this.premultiplyAlpha=!1,this.statistics=null,this.depthCount=1}castPixelType(t){if(!t)return"f32";let s=t.toLowerCase();return["u1","u2","u4"].includes(s)?s="u8":["unknown","u8","s8","u16","s16","u32","s32","f32","f64"].includes(s)||(s="f32"),s}getPlaneCount(){return this.pixels?.length}addData(t){if(!t.pixels||t.pixels.length!==this.width*this.height)throw new s("pixelblock:invalid-or-missing-pixels","add data requires valid pixels array that has same length defined by pixel block width * height");this.pixels||(this.pixels=[]),this.statistics||(this.statistics=[]),this.pixels.push(t.pixels),this.statistics.push(t.statistics??new h)}getAsRGBA(){const t=new ArrayBuffer(this.width*this.height*4);switch(this.pixelType){case"s8":case"s16":case"u16":case"s32":case"u32":case"f32":case"f64":this._fillFromNon8Bit(t);break;default:this._fillFrom8Bit(t)}return new Uint8ClampedArray(t)}getAsRGBAFloat(){const t=new Float32Array(this.width*this.height*4);return this._fillFrom32Bit(t),t}updateStatistics(){if(!this.pixels)return;this.statistics=this.pixels.map((t=>this._calculateBandStatistics(t,this.mask)));const t=this.mask;let s=0;if(null!=t)for(let e=0;e<t.length;e++)t[e]&&s++;else s=this.width*this.height;this.validPixelCount=s}clamp(t){if(!t||"f64"===t||"f32"===t||!this.pixels)return;const[s,e]=a(t),i=this.pixels,l=this.width*this.height,r=i.length;let o,n,h;const c=[];for(let a=0;a<r;a++){h=p.createEmptyBand(t,l),o=i[a];for(let t=0;t<l;t++)n=o[t],h[t]=n>e?e:n<s?s:n;c.push(h)}this.pixels=c,this.pixelType=t}extractBands(t){const{pixels:s,statistics:e}=this;if(null==t||0===t.length||!s||0===s.length)return this;const i=s.length,l=t.some((t=>t>=s.length)),r=i===t.length&&!t.some(((t,s)=>t!==s));if(l||r)return this;const o=this.bandMasks?.length===i?t.map((t=>this.bandMasks[t])):void 0;let{mask:n,validPixelCount:a}=this;const{width:h,height:c}=this;if(o){if(1===o.length)n=o[0];else{const t=h*c;n=new Uint8Array(t).fill(255);for(let s=0;s<o.length;s++){const e=o[s];for(let s=0;s<t;s++)e[s]||(n[s]=0)}}a=n.filter((t=>!!t)).length}return new p({pixelType:this.pixelType,width:h,height:c,mask:n,bandMasks:o,validPixelCount:a,maskIsAlpha:this.maskIsAlpha,pixels:t.map((t=>s[t])),statistics:e&&t.map((t=>e[t]))})}clone(){const t=new p({width:this.width,height:this.height,pixelType:this.pixelType,maskIsAlpha:this.maskIsAlpha,validPixelCount:this.validPixelCount});let s;null!=this.mask&&(this.mask instanceof Uint8Array?t.mask=new Uint8Array(this.mask):t.mask=this.mask.slice(0)),this.bandMasks&&(t.bandMasks=this.bandMasks.map((t=>new Uint8Array(t))));const e=p.getPixelArrayConstructor(this.pixelType);if(this.pixels&&this.pixels.length>0){t.pixels=[];const i=!!this.pixels[0].slice;for(s=0;s<this.pixels.length;s++)t.pixels[s]=i?this.pixels[s].slice(0,this.pixels[s].length):new e(this.pixels[s])}if(this.statistics)for(t.statistics=[],s=0;s<this.statistics.length;s++)t.statistics[s]=i(this.statistics[s]);return t.premultiplyAlpha=this.premultiplyAlpha,t}_fillFrom8Bit(t){const{mask:s,maskIsAlpha:e,premultiplyAlpha:i,pixels:r}=this;if(!t||!r?.length)return void l.getLogger(this).error("getAsRGBA()","Unable to convert to RGBA. The input pixel block is empty.");let o,n,a,h;o=n=a=r[0],r.length>=3?(n=r[1],a=r[2]):2===r.length&&(n=r[1]);const p=new Uint32Array(t),c=this.width*this.height;if(o.length===c)if(null!=s&&s.length===c)if(e)for(h=0;h<c;h++){const t=s[h];if(t){const s=t/255;p[h]=i?t<<24|a[h]*s<<16|n[h]*s<<8|o[h]*s:t<<24|a[h]<<16|n[h]<<8|o[h]}}else for(h=0;h<c;h++)s[h]&&(p[h]=255<<24|a[h]<<16|n[h]<<8|o[h]);else for(h=0;h<c;h++)p[h]=255<<24|a[h]<<16|n[h]<<8|o[h];else l.getLogger(this).error("getAsRGBA()","Unable to convert to RGBA. The pixelblock is invalid.")}_fillFromNon8Bit(t){const{pixels:s,mask:e,statistics:i}=this;if(!t||!s?.length)return void l.getLogger(this).error("getAsRGBA()","Unable to convert to RGBA. The input pixel block is empty.");const r=this.pixelType;let o=1,n=0,a=1;if(i&&i.length>0){for(const t of i)if(null!=t.minValue&&(n=Math.min(n,t.minValue)),null!=t.maxValue&&null!=t.minValue){const s=t.maxValue-t.minValue;a=Math.max(a,s)}o=255/a}else{let t=255;"s8"===r?(n=-128,t=127):"u16"===r?t=65535:"s16"===r?(n=-32768,t=32767):"u32"===r?t=4294967295:"s32"===r?(n=-2147483648,t=2147483647):"f32"===r?(n=-34e38,t=34e38):"f64"===r&&(n=-Number.MAX_VALUE,t=Number.MAX_VALUE),o=255/(t-n)}const h=new Uint32Array(t),p=this.width*this.height;let c,u,m,g,f;if(c=u=m=s[0],c.length!==p)return l.getLogger(this).error("getAsRGBA()","Unable to convert to RGBA. The pixelblock is invalid.");if(s.length>=2)if(u=s[1],s.length>=3&&(m=s[2]),null!=e&&e.length===p)for(g=0;g<p;g++)e[g]&&(h[g]=255<<24|(m[g]-n)*o<<16|(u[g]-n)*o<<8|(c[g]-n)*o);else for(g=0;g<p;g++)h[g]=255<<24|(m[g]-n)*o<<16|(u[g]-n)*o<<8|(c[g]-n)*o;else if(null!=e&&e.length===p)for(g=0;g<p;g++)f=(c[g]-n)*o,e[g]&&(h[g]=255<<24|f<<16|f<<8|f);else for(g=0;g<p;g++)f=(c[g]-n)*o,h[g]=255<<24|f<<16|f<<8|f}_fillFrom32Bit(t){const{pixels:s,mask:e}=this;if(!t||!s?.length)return l.getLogger(this).error("getAsRGBAFloat()","Unable to convert to RGBA. The input pixel block is empty.");let i,r,o,n;i=r=o=s[0],s.length>=3?(r=s[1],o=s[2]):2===s.length&&(r=s[1]);const a=this.width*this.height;if(i.length!==a)return l.getLogger(this).error("getAsRGBAFloat()","Unable to convert to RGBA. The pixelblock is invalid.");let h=0;if(null!=e&&e.length===a)for(n=0;n<a;n++)t[h++]=i[n],t[h++]=r[n],t[h++]=o[n],t[h++]=1&e[n];else for(n=0;n<a;n++)t[h++]=i[n],t[h++]=r[n],t[h++]=o[n],t[h++]=1}_calculateBandStatistics(t,s){let e=1/0,i=-1/0;const l=t.length;let r,o=0;if(null!=s)for(r=0;r<l;r++)s[r]&&(o=t[r],e=o<e?o:e,i=o>i?o:i);else for(r=0;r<l;r++)o=t[r],e=o<e?o:e,i=o>i?o:i;return new h(e,i)}};t([r({json:{write:!0}})],c.prototype,"width",void 0),t([r({json:{write:!0}})],c.prototype,"height",void 0),t([r({json:{write:!0}})],c.prototype,"pixelType",void 0),t([o("pixelType")],c.prototype,"castPixelType",null),t([r({json:{write:!0}})],c.prototype,"validPixelCount",void 0),t([r({json:{write:!0}})],c.prototype,"mask",void 0),t([r({json:{write:!0}})],c.prototype,"maskIsAlpha",void 0),t([r({json:{write:!0}})],c.prototype,"pixels",void 0),t([r()],c.prototype,"premultiplyAlpha",void 0),t([r({json:{write:!0}})],c.prototype,"statistics",void 0),t([r({json:{write:!0}})],c.prototype,"depthCount",void 0),t([r({json:{write:!0}})],c.prototype,"noDataValues",void 0),t([r({json:{write:!0}})],c.prototype,"bandMasks",void 0),c=p=t([n("esri.layers.support.PixelBlock")],c);const u=c;export{u as default};
