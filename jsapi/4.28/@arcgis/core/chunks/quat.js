/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
import{c as s,f as t}from"./vec3f64.js";import{g as n}from"./common.js";import{i as a,k as o,v as c,p as r}from"./vec3.js";import{c as i,n as f,a as u}from"./vec4.js";function e(s,t,n){n*=.5;const a=Math.sin(n);return s[0]=a*t[0],s[1]=a*t[1],s[2]=a*t[2],s[3]=Math.cos(n),s}function h(s,t){const a=2*Math.acos(t[3]),o=Math.sin(a/2);return o>n()?(s[0]=t[0]/o,s[1]=t[1]/o,s[2]=t[2]/o):(s[0]=1,s[1]=0,s[2]=0),a}function M(s,t,n){const a=t[0],o=t[1],c=t[2],r=t[3],i=n[0],f=n[1],u=n[2],e=n[3];return s[0]=a*e+r*i+o*u-c*f,s[1]=o*e+r*f+c*i-a*u,s[2]=c*e+r*u+a*f-o*i,s[3]=r*e-a*i-o*f-c*u,s}function m(s,t){const n=t[0],a=t[1],o=t[2],c=t[3],r=n*n+a*a+o*o+c*c,i=r?1/r:0;return s[0]=-n*i,s[1]=-a*i,s[2]=-o*i,s[3]=c*i,s}function p(s,t){return s[0]=-t[0],s[1]=-t[1],s[2]=-t[2],s[3]=t[3],s}function j(s,t,n,a){const o=.5*Math.PI/180;t*=o,n*=o,a*=o;const c=Math.sin(t),r=Math.cos(t),i=Math.sin(n),f=Math.cos(n),u=Math.sin(a),e=Math.cos(a);return s[0]=c*f*e-r*i*u,s[1]=r*i*e+c*f*u,s[2]=r*f*u-c*i*e,s[3]=r*f*e+c*i*u,s}const v=i,g=f,I=u;function P(s,t,n){const i=a(t,n);return i<-.999999?(o(k,x,t),c(k)<1e-6&&o(k,b,t),r(k,k),e(s,k,Math.PI),s):i>.999999?(s[0]=0,s[1]=0,s[2]=0,s[3]=1,s):(o(k,t,n),s[0]=k[0],s[1]=k[1],s[2]=k[2],s[3]=1+i,g(s,s))}const k=s(),x=t(1,0,0),b=t(0,1,0);export{p as a,v as c,I as e,j as f,h as g,m as i,M as m,P as r,e as s};
