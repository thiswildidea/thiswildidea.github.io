// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define(["exports"],function(e){function g(a,c,d,b){if(d.has(a))return b;d.add(a);c&&a.id&&(b[c]=a);for(const f of a.properties)"string"!==typeof f.type&&g(f.type,c?`${c}.${f.name}`:f.name,d,b);d.delete(a);return b}function h(a,c,d){for(const b of a.properties)a=c?`${c}.${b.name}`:b.name,"string"===typeof b.type?d.push({name:a,type:b.type,default:b.default,enum:b.enum}):0===b.type.properties.length?d.push({name:a,type:"unknown",default:b.default,enum:b.enum}):h(b.type,a,d);return d}class k{constructor(){this.stack=
[];this.seen=new Map}addProperty(a){this.currentClass?.properties.push(a)}push(a,c){this.seen.set(c.id,c);this.stack.push({klass:c,propertyName:a})}pop(){return this.stack.pop()?.klass??null}get currentClass(){return this.stack.length?this.stack[this.stack.length-1].klass:null}get pathString(){return this.stack.map(a=>a.propertyName).filter(a=>!!a).join(".")}}e.ScanContext=k;e.collectClassPaths=function(a){return g(a,"",new Set,{})};e.flatten=function(a){a=h(a,"",[]);a.sort((c,d)=>(c.name??"").localeCompare(d.name??
""));return a};e.sorted=function(a){a=a.slice();a.sort();return a};Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});