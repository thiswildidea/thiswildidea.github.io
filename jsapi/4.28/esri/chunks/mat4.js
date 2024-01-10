// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define(["exports","./vec3f64","./common"],function(t,O,K){function R(a,b){a[0]=b[0];a[1]=b[1];a[2]=b[2];a[3]=b[3];a[4]=b[4];a[5]=b[5];a[6]=b[6];a[7]=b[7];a[8]=b[8];a[9]=b[9];a[10]=b[10];a[11]=b[11];a[12]=b[12];a[13]=b[13];a[14]=b[14];a[15]=b[15];return a}function S(a,b,c,d,e,g,h,l,f,k,m,n,q,p,v,u,r){a[0]=b;a[1]=c;a[2]=d;a[3]=e;a[4]=g;a[5]=h;a[6]=l;a[7]=f;a[8]=k;a[9]=m;a[10]=n;a[11]=q;a[12]=p;a[13]=v;a[14]=u;a[15]=r;return a}function L(a){a[0]=1;a[1]=0;a[2]=0;a[3]=0;a[4]=0;a[5]=1;a[6]=0;a[7]=0;a[8]=
0;a[9]=0;a[10]=1;a[11]=0;a[12]=0;a[13]=0;a[14]=0;a[15]=1;return a}function T(a,b){if(a===b){const c=b[1],d=b[2],e=b[3],g=b[6],h=b[7],l=b[11];a[1]=b[4];a[2]=b[8];a[3]=b[12];a[4]=c;a[6]=b[9];a[7]=b[13];a[8]=d;a[9]=g;a[11]=b[14];a[12]=e;a[13]=h;a[14]=l}else a[0]=b[0],a[1]=b[4],a[2]=b[8],a[3]=b[12],a[4]=b[1],a[5]=b[5],a[6]=b[9],a[7]=b[13],a[8]=b[2],a[9]=b[6],a[10]=b[10],a[11]=b[14],a[12]=b[3],a[13]=b[7],a[14]=b[11],a[15]=b[15];return a}function U(a,b){P(a,b)||L(a);return a}function P(a,b){const c=b[0],
d=b[1],e=b[2],g=b[3],h=b[4],l=b[5],f=b[6],k=b[7],m=b[8],n=b[9],q=b[10],p=b[11],v=b[12],u=b[13],r=b[14];b=b[15];const A=c*l-d*h,w=c*f-e*h,x=c*k-g*h,y=d*f-e*l,z=d*k-g*l,D=e*k-g*f,E=m*u-n*v,F=m*r-q*v,G=m*b-p*v,H=n*r-q*u,I=n*b-p*u,J=q*b-p*r;let B=A*J-w*I+x*H+y*G-z*F+D*E;if(!B)return null;B=1/B;a[0]=(l*J-f*I+k*H)*B;a[1]=(e*I-d*J-g*H)*B;a[2]=(u*D-r*z+b*y)*B;a[3]=(q*z-n*D-p*y)*B;a[4]=(f*G-h*J-k*F)*B;a[5]=(c*J-e*G+g*F)*B;a[6]=(r*x-v*D-b*w)*B;a[7]=(m*D-q*x+p*w)*B;a[8]=(h*I-l*G+k*E)*B;a[9]=(d*G-c*I-g*E)*B;
a[10]=(v*z-u*x+b*A)*B;a[11]=(n*x-m*z-p*A)*B;a[12]=(l*F-h*H-f*E)*B;a[13]=(c*H-d*F+e*E)*B;a[14]=(u*w-v*y-r*A)*B;a[15]=(m*y-n*w+q*A)*B;return a}function V(a,b){const c=b[0],d=b[1],e=b[2],g=b[3],h=b[4],l=b[5],f=b[6],k=b[7],m=b[8],n=b[9],q=b[10],p=b[11],v=b[12],u=b[13],r=b[14];b=b[15];a[0]=l*(q*b-p*r)-n*(f*b-k*r)+u*(f*p-k*q);a[1]=-(d*(q*b-p*r)-n*(e*b-g*r)+u*(e*p-g*q));a[2]=d*(f*b-k*r)-l*(e*b-g*r)+u*(e*k-g*f);a[3]=-(d*(f*p-k*q)-l*(e*p-g*q)+n*(e*k-g*f));a[4]=-(h*(q*b-p*r)-m*(f*b-k*r)+v*(f*p-k*q));a[5]=c*
(q*b-p*r)-m*(e*b-g*r)+v*(e*p-g*q);a[6]=-(c*(f*b-k*r)-h*(e*b-g*r)+v*(e*k-g*f));a[7]=c*(f*p-k*q)-h*(e*p-g*q)+m*(e*k-g*f);a[8]=h*(n*b-p*u)-m*(l*b-k*u)+v*(l*p-k*n);a[9]=-(c*(n*b-p*u)-m*(d*b-g*u)+v*(d*p-g*n));a[10]=c*(l*b-k*u)-h*(d*b-g*u)+v*(d*k-g*l);a[11]=-(c*(l*p-k*n)-h*(d*p-g*n)+m*(d*k-g*l));a[12]=-(h*(n*r-q*u)-m*(l*r-f*u)+v*(l*q-f*n));a[13]=c*(n*r-q*u)-m*(d*r-e*u)+v*(d*q-e*n);a[14]=-(c*(l*r-f*u)-h*(d*r-e*u)+v*(d*f-e*l));a[15]=c*(l*q-f*n)-h*(d*q-e*n)+m*(d*f-e*l);return a}function W(a){const b=a[0],
c=a[1],d=a[2],e=a[3],g=a[4],h=a[5],l=a[6],f=a[7],k=a[8],m=a[9],n=a[10],q=a[11],p=a[12],v=a[13],u=a[14];a=a[15];return(b*h-c*g)*(n*a-q*u)-(b*l-d*g)*(m*a-q*v)+(b*f-e*g)*(m*u-n*v)+(c*l-d*h)*(k*a-q*p)-(c*f-e*h)*(k*u-n*p)+(d*f-e*l)*(k*v-m*p)}function M(a,b,c){const d=b[0],e=b[1],g=b[2],h=b[3],l=b[4],f=b[5],k=b[6],m=b[7],n=b[8],q=b[9],p=b[10],v=b[11],u=b[12],r=b[13],A=b[14];b=b[15];let w=c[0],x=c[1],y=c[2],z=c[3];a[0]=w*d+x*l+y*n+z*u;a[1]=w*e+x*f+y*q+z*r;a[2]=w*g+x*k+y*p+z*A;a[3]=w*h+x*m+y*v+z*b;w=c[4];
x=c[5];y=c[6];z=c[7];a[4]=w*d+x*l+y*n+z*u;a[5]=w*e+x*f+y*q+z*r;a[6]=w*g+x*k+y*p+z*A;a[7]=w*h+x*m+y*v+z*b;w=c[8];x=c[9];y=c[10];z=c[11];a[8]=w*d+x*l+y*n+z*u;a[9]=w*e+x*f+y*q+z*r;a[10]=w*g+x*k+y*p+z*A;a[11]=w*h+x*m+y*v+z*b;w=c[12];x=c[13];y=c[14];z=c[15];a[12]=w*d+x*l+y*n+z*u;a[13]=w*e+x*f+y*q+z*r;a[14]=w*g+x*k+y*p+z*A;a[15]=w*h+x*m+y*v+z*b;return a}function X(a,b,c){const d=c[0],e=c[1];c=c[2];if(b===a)a[12]=b[0]*d+b[4]*e+b[8]*c+b[12],a[13]=b[1]*d+b[5]*e+b[9]*c+b[13],a[14]=b[2]*d+b[6]*e+b[10]*c+b[14],
a[15]=b[3]*d+b[7]*e+b[11]*c+b[15];else{const g=b[0],h=b[1],l=b[2],f=b[3],k=b[4],m=b[5],n=b[6],q=b[7],p=b[8],v=b[9],u=b[10],r=b[11];a[0]=g;a[1]=h;a[2]=l;a[3]=f;a[4]=k;a[5]=m;a[6]=n;a[7]=q;a[8]=p;a[9]=v;a[10]=u;a[11]=r;a[12]=g*d+k*e+p*c+b[12];a[13]=h*d+m*e+v*c+b[13];a[14]=l*d+n*e+u*c+b[14];a[15]=f*d+q*e+r*c+b[15]}return a}function Y(a,b,c){const d=c[0],e=c[1];c=c[2];a[0]=b[0]*d;a[1]=b[1]*d;a[2]=b[2]*d;a[3]=b[3]*d;a[4]=b[4]*e;a[5]=b[5]*e;a[6]=b[6]*e;a[7]=b[7]*e;a[8]=b[8]*c;a[9]=b[9]*c;a[10]=b[10]*c;
a[11]=b[11]*c;a[12]=b[12];a[13]=b[13];a[14]=b[14];a[15]=b[15];return a}function Z(a,b,c,d){let e=d[0],g=d[1];d=d[2];let h=Math.sqrt(e*e+g*g+d*d);var l=void 0,f=void 0;let k=void 0,m=void 0,n=void 0,q=void 0,p=void 0,v=void 0,u=void 0,r=void 0,A=void 0,w=void 0,x=void 0,y=void 0,z=void 0,D=void 0,E=void 0,F=void 0,G=void 0,H=void 0,I=void 0,J=void 0;f=l=void 0;if(h<K.getEpsilon())return null;h=1/h;e*=h;g*=h;d*=h;l=Math.sin(c);f=Math.cos(c);k=1-f;m=b[0];n=b[1];q=b[2];p=b[3];v=b[4];u=b[5];r=b[6];A=b[7];
w=b[8];x=b[9];y=b[10];z=b[11];D=e*e*k+f;E=g*e*k+d*l;F=d*e*k-g*l;G=e*g*k-d*l;H=g*g*k+f;I=d*g*k+e*l;J=e*d*k+g*l;l=g*d*k-e*l;f=d*d*k+f;a[0]=m*D+v*E+w*F;a[1]=n*D+u*E+x*F;a[2]=q*D+r*E+y*F;a[3]=p*D+A*E+z*F;a[4]=m*G+v*H+w*I;a[5]=n*G+u*H+x*I;a[6]=q*G+r*H+y*I;a[7]=p*G+A*H+z*I;a[8]=m*J+v*l+w*f;a[9]=n*J+u*l+x*f;a[10]=q*J+r*l+y*f;a[11]=p*J+A*l+z*f;b!==a&&(a[12]=b[12],a[13]=b[13],a[14]=b[14],a[15]=b[15]);return a}function aa(a,b,c){const d=Math.sin(c);c=Math.cos(c);const e=b[4],g=b[5],h=b[6],l=b[7],f=b[8],k=b[9],
m=b[10],n=b[11];b!==a&&(a[0]=b[0],a[1]=b[1],a[2]=b[2],a[3]=b[3],a[12]=b[12],a[13]=b[13],a[14]=b[14],a[15]=b[15]);a[4]=e*c+f*d;a[5]=g*c+k*d;a[6]=h*c+m*d;a[7]=l*c+n*d;a[8]=f*c-e*d;a[9]=k*c-g*d;a[10]=m*c-h*d;a[11]=n*c-l*d;return a}function ba(a,b,c){const d=Math.sin(c);c=Math.cos(c);const e=b[0],g=b[1],h=b[2],l=b[3],f=b[8],k=b[9],m=b[10],n=b[11];b!==a&&(a[4]=b[4],a[5]=b[5],a[6]=b[6],a[7]=b[7],a[12]=b[12],a[13]=b[13],a[14]=b[14],a[15]=b[15]);a[0]=e*c-f*d;a[1]=g*c-k*d;a[2]=h*c-m*d;a[3]=l*c-n*d;a[8]=e*
d+f*c;a[9]=g*d+k*c;a[10]=h*d+m*c;a[11]=l*d+n*c;return a}function ca(a,b,c){const d=Math.sin(c);c=Math.cos(c);const e=b[0],g=b[1],h=b[2],l=b[3],f=b[4],k=b[5],m=b[6],n=b[7];b!==a&&(a[8]=b[8],a[9]=b[9],a[10]=b[10],a[11]=b[11],a[12]=b[12],a[13]=b[13],a[14]=b[14],a[15]=b[15]);a[0]=e*c+f*d;a[1]=g*c+k*d;a[2]=h*c+m*d;a[3]=l*c+n*d;a[4]=f*c-e*d;a[5]=k*c-g*d;a[6]=m*c-h*d;a[7]=n*c-l*d;return a}function da(a,b){a[0]=1;a[1]=0;a[2]=0;a[3]=0;a[4]=0;a[5]=1;a[6]=0;a[7]=0;a[8]=0;a[9]=0;a[10]=1;a[11]=0;a[12]=b[0];a[13]=
b[1];a[14]=b[2];a[15]=1;return a}function ea(a,b){a[0]=b[0];a[1]=0;a[2]=0;a[3]=0;a[4]=0;a[5]=b[1];a[6]=0;a[7]=0;a[8]=0;a[9]=0;a[10]=b[2];a[11]=0;a[12]=0;a[13]=0;a[14]=0;a[15]=1;return a}function fa(a,b,c){if(0===b)return L(a);let d=c[0],e=c[1];c=c[2];let g=Math.sqrt(d*d+e*e+c*c),h=void 0,l=void 0,f=void 0;if(g<K.getEpsilon())return null;g=1/g;d*=g;e*=g;c*=g;h=Math.sin(b);l=Math.cos(b);f=1-l;a[0]=d*d*f+l;a[1]=e*d*f+c*h;a[2]=c*d*f-e*h;a[3]=0;a[4]=d*e*f-c*h;a[5]=e*e*f+l;a[6]=c*e*f+d*h;a[7]=0;a[8]=d*
c*f+e*h;a[9]=e*c*f-d*h;a[10]=c*c*f+l;a[11]=0;a[12]=0;a[13]=0;a[14]=0;a[15]=1;return a}function ha(a,b){const c=Math.sin(b);b=Math.cos(b);a[0]=1;a[1]=0;a[2]=0;a[3]=0;a[4]=0;a[5]=b;a[6]=c;a[7]=0;a[8]=0;a[9]=-c;a[10]=b;a[11]=0;a[12]=0;a[13]=0;a[14]=0;a[15]=1;return a}function ia(a,b){const c=Math.sin(b);b=Math.cos(b);a[0]=b;a[1]=0;a[2]=-c;a[3]=0;a[4]=0;a[5]=1;a[6]=0;a[7]=0;a[8]=c;a[9]=0;a[10]=b;a[11]=0;a[12]=0;a[13]=0;a[14]=0;a[15]=1;return a}function ja(a,b){const c=Math.sin(b);b=Math.cos(b);a[0]=b;
a[1]=c;a[2]=0;a[3]=0;a[4]=-c;a[5]=b;a[6]=0;a[7]=0;a[8]=0;a[9]=0;a[10]=1;a[11]=0;a[12]=0;a[13]=0;a[14]=0;a[15]=1;return a}function Q(a,b,c){var d=b[0],e=b[1],g=b[2],h=b[3],l=d+d,f=e+e;const k=g+g;b=d*l;const m=d*f;d*=k;const n=e*f;e*=k;g*=k;l*=h;f*=h;h*=k;a[0]=1-(n+g);a[1]=m+h;a[2]=d-f;a[3]=0;a[4]=m-h;a[5]=1-(b+g);a[6]=e+l;a[7]=0;a[8]=d+f;a[9]=e-l;a[10]=1-(b+n);a[11]=0;a[12]=c[0];a[13]=c[1];a[14]=c[2];a[15]=1;return a}function ka(a,b){const c=Ia,d=-b[0],e=-b[1],g=-b[2],h=b[3],l=b[4],f=b[5],k=b[6],
m=b[7],n=d*d+e*e+g*g+h*h;0<n?(c[0]=2*(l*h+m*d+f*g-k*e)/n,c[1]=2*(f*h+m*e+k*d-l*g)/n,c[2]=2*(k*h+m*g+l*e-f*d)/n):(c[0]=2*(l*h+m*d+f*g-k*e),c[1]=2*(f*h+m*e+k*d-l*g),c[2]=2*(k*h+m*g+l*e-f*d));Q(a,b,c);return a}function la(a,b){a[0]=b[12];a[1]=b[13];a[2]=b[14];return a}function ma(a,b){const c=b[0],d=b[1],e=b[2],g=b[4],h=b[5],l=b[6],f=b[8],k=b[9];b=b[10];a[0]=Math.sqrt(c*c+d*d+e*e);a[1]=Math.sqrt(g*g+h*h+l*l);a[2]=Math.sqrt(f*f+k*k+b*b);return a}function na(a,b){const c=b[0]+b[5]+b[10];let d=0;0<c?(d=
2*Math.sqrt(c+1),a[3]=.25*d,a[0]=(b[6]-b[9])/d,a[1]=(b[8]-b[2])/d,a[2]=(b[1]-b[4])/d):b[0]>b[5]&&b[0]>b[10]?(d=2*Math.sqrt(1+b[0]-b[5]-b[10]),a[3]=(b[6]-b[9])/d,a[0]=.25*d,a[1]=(b[1]+b[4])/d,a[2]=(b[8]+b[2])/d):b[5]>b[10]?(d=2*Math.sqrt(1+b[5]-b[0]-b[10]),a[3]=(b[8]-b[2])/d,a[0]=(b[1]+b[4])/d,a[1]=.25*d,a[2]=(b[6]+b[9])/d):(d=2*Math.sqrt(1+b[10]-b[0]-b[5]),a[3]=(b[1]-b[4])/d,a[0]=(b[8]+b[2])/d,a[1]=(b[6]+b[9])/d,a[2]=.25*d);return a}function oa(a,b,c,d){var e=b[0],g=b[1],h=b[2],l=b[3],f=e+e,k=g+g,
m=h+h;b=e*f;const n=e*k;e*=m;const q=g*k;g*=m;h*=m;f*=l;k*=l;l*=m;m=d[0];const p=d[1];d=d[2];a[0]=(1-(q+h))*m;a[1]=(n+l)*m;a[2]=(e-k)*m;a[3]=0;a[4]=(n-l)*p;a[5]=(1-(b+h))*p;a[6]=(g+f)*p;a[7]=0;a[8]=(e+k)*d;a[9]=(g-f)*d;a[10]=(1-(b+q))*d;a[11]=0;a[12]=c[0];a[13]=c[1];a[14]=c[2];a[15]=1;return a}function pa(a,b,c,d,e){var g=b[0],h=b[1],l=b[2],f=b[3],k=g+g,m=h+h,n=l+l;b=g*k;var q=g*m,p=g*n;g=h*m;h*=n;var v=l*n;l=f*k;m*=f;const u=f*n;var r=d[0],A=d[1];n=d[2];d=e[0];f=e[1];e=e[2];k=(1-(g+v))*r;const w=
(q+u)*r;r*=p-m;q=(q-u)*A;v=(1-(b+v))*A;A*=h+l;p=(p+m)*n;h=(h-l)*n;b=(1-(b+g))*n;a[0]=k;a[1]=w;a[2]=r;a[3]=0;a[4]=q;a[5]=v;a[6]=A;a[7]=0;a[8]=p;a[9]=h;a[10]=b;a[11]=0;a[12]=c[0]+d-(k*d+q*f+p*e);a[13]=c[1]+f-(w*d+v*f+h*e);a[14]=c[2]+e-(r*d+A*f+b*e);a[15]=1;return a}function qa(a,b){var c=b[0],d=b[1],e=b[2];b=b[3];var g=c+c,h=d+d;const l=e+e;c*=g;const f=d*g;d*=h;const k=e*g,m=e*h;e*=l;g*=b;h*=b;b*=l;a[0]=1-d-e;a[1]=f+b;a[2]=k-h;a[3]=0;a[4]=f-b;a[5]=1-c-e;a[6]=m+g;a[7]=0;a[8]=k+h;a[9]=m-g;a[10]=1-c-
d;a[11]=0;a[12]=0;a[13]=0;a[14]=0;a[15]=1;return a}function ra(a,b,c,d,e,g,h){const l=1/(c-b),f=1/(e-d),k=1/(g-h);a[0]=2*g*l;a[1]=0;a[2]=0;a[3]=0;a[4]=0;a[5]=2*g*f;a[6]=0;a[7]=0;a[8]=(c+b)*l;a[9]=(e+d)*f;a[10]=(h+g)*k;a[11]=-1;a[12]=0;a[13]=0;a[14]=h*g*2*k;a[15]=0;return a}function sa(a,b,c,d,e){b=1/Math.tan(b/2);let g=void 0;a[0]=b/c;a[1]=0;a[2]=0;a[3]=0;a[4]=0;a[5]=b;a[6]=0;a[7]=0;a[8]=0;a[9]=0;a[11]=-1;a[12]=0;a[13]=0;a[15]=0;null!=e&&Infinity!==e?(g=1/(d-e),a[10]=(e+d)*g,a[14]=2*e*d*g):(a[10]=
-1,a[14]=-2*d);return a}function ta(a,b,c,d){const e=Math.tan(b.upDegrees*Math.PI/180),g=Math.tan(b.downDegrees*Math.PI/180),h=Math.tan(b.leftDegrees*Math.PI/180);b=Math.tan(b.rightDegrees*Math.PI/180);const l=2/(h+b),f=2/(e+g);a[0]=l;a[1]=0;a[2]=0;a[3]=0;a[4]=0;a[5]=f;a[6]=0;a[7]=0;a[8]=-((h-b)*l*.5);a[9]=(e-g)*f*.5;a[10]=d/(c-d);a[11]=-1;a[12]=0;a[13]=0;a[14]=d*c/(c-d);a[15]=0;return a}function ua(a,b,c,d,e,g,h){const l=1/(b-c),f=1/(d-e),k=1/(g-h);a[0]=-2*l;a[1]=0;a[2]=0;a[3]=0;a[4]=0;a[5]=-2*f;
a[6]=0;a[7]=0;a[8]=0;a[9]=0;a[10]=2*k;a[11]=0;a[12]=(b+c)*l;a[13]=(e+d)*f;a[14]=(h+g)*k;a[15]=1;return a}function va(a,b,c,d){const e=b[0],g=b[1];b=b[2];let h=e-c[0],l=g-c[1];c=b-c[2];var f=K.getEpsilon();if(Math.abs(h)<f&&Math.abs(l)<f&&Math.abs(c)<f)L(a);else{var k=1/Math.sqrt(h*h+l*l+c*c);h*=k;l*=k;c*=k;k=d[0];var m=d[1];f=d[2];d=m*c-f*l;f=f*h-k*c;m=k*l-m*h;(k=Math.sqrt(d*d+f*f+m*m))?(k=1/k,d*=k,f*=k,m*=k):m=f=d=0;var n=l*m-c*f,q=c*d-h*m,p=h*f-l*d;(k=Math.sqrt(n*n+q*q+p*p))?(k=1/k,n*=k,q*=k,p*=
k):p=q=n=0;a[0]=d;a[1]=n;a[2]=h;a[3]=0;a[4]=f;a[5]=q;a[6]=l;a[7]=0;a[8]=m;a[9]=p;a[10]=c;a[11]=0;a[12]=-(d*e+f*g+m*b);a[13]=-(n*e+q*g+p*b);a[14]=-(h*e+l*g+c*b);a[15]=1}}function wa(a,b,c,d){const e=b[0],g=b[1];b=b[2];var h=d[0];const l=d[1];var f=d[2];d=e-c[0];let k=g-c[1];c=b-c[2];let m=d*d+k*k+c*c;0<m&&(m=1/Math.sqrt(m),d*=m,k*=m,c*=m);let n=l*c-f*k;f=f*d-h*c;h=h*k-l*d;m=n*n+f*f+h*h;0<m&&(m=1/Math.sqrt(m),n*=m,f*=m,h*=m);a[0]=n;a[1]=f;a[2]=h;a[3]=0;a[4]=k*h-c*f;a[5]=c*n-d*h;a[6]=d*f-k*n;a[7]=0;
a[8]=d;a[9]=k;a[10]=c;a[11]=0;a[12]=e;a[13]=g;a[14]=b;a[15]=1;return a}function xa(a){return"mat4("+a[0]+", "+a[1]+", "+a[2]+", "+a[3]+", "+a[4]+", "+a[5]+", "+a[6]+", "+a[7]+", "+a[8]+", "+a[9]+", "+a[10]+", "+a[11]+", "+a[12]+", "+a[13]+", "+a[14]+", "+a[15]+")"}function ya(a){return Math.sqrt(a[0]**2+a[1]**2+a[2]**2+a[3]**2+a[4]**2+a[5]**2+a[6]**2+a[7]**2+a[8]**2+a[9]**2+a[10]**2+a[11]**2+a[12]**2+a[13]**2+a[14]**2+a[15]**2)}function za(a,b,c){a[0]=b[0]+c[0];a[1]=b[1]+c[1];a[2]=b[2]+c[2];a[3]=
b[3]+c[3];a[4]=b[4]+c[4];a[5]=b[5]+c[5];a[6]=b[6]+c[6];a[7]=b[7]+c[7];a[8]=b[8]+c[8];a[9]=b[9]+c[9];a[10]=b[10]+c[10];a[11]=b[11]+c[11];a[12]=b[12]+c[12];a[13]=b[13]+c[13];a[14]=b[14]+c[14];a[15]=b[15]+c[15];return a}function N(a,b,c){a[0]=b[0]-c[0];a[1]=b[1]-c[1];a[2]=b[2]-c[2];a[3]=b[3]-c[3];a[4]=b[4]-c[4];a[5]=b[5]-c[5];a[6]=b[6]-c[6];a[7]=b[7]-c[7];a[8]=b[8]-c[8];a[9]=b[9]-c[9];a[10]=b[10]-c[10];a[11]=b[11]-c[11];a[12]=b[12]-c[12];a[13]=b[13]-c[13];a[14]=b[14]-c[14];a[15]=b[15]-c[15];return a}
function Aa(a,b,c){a[0]=b[0]*c;a[1]=b[1]*c;a[2]=b[2]*c;a[3]=b[3]*c;a[4]=b[4]*c;a[5]=b[5]*c;a[6]=b[6]*c;a[7]=b[7]*c;a[8]=b[8]*c;a[9]=b[9]*c;a[10]=b[10]*c;a[11]=b[11]*c;a[12]=b[12]*c;a[13]=b[13]*c;a[14]=b[14]*c;a[15]=b[15]*c;return a}function Ba(a,b,c,d){a[0]=b[0]+c[0]*d;a[1]=b[1]+c[1]*d;a[2]=b[2]+c[2]*d;a[3]=b[3]+c[3]*d;a[4]=b[4]+c[4]*d;a[5]=b[5]+c[5]*d;a[6]=b[6]+c[6]*d;a[7]=b[7]+c[7]*d;a[8]=b[8]+c[8]*d;a[9]=b[9]+c[9]*d;a[10]=b[10]+c[10]*d;a[11]=b[11]+c[11]*d;a[12]=b[12]+c[12]*d;a[13]=b[13]+c[13]*
d;a[14]=b[14]+c[14]*d;a[15]=b[15]+c[15]*d;return a}function Ca(a,b){return a[0]===b[0]&&a[1]===b[1]&&a[2]===b[2]&&a[3]===b[3]&&a[4]===b[4]&&a[5]===b[5]&&a[6]===b[6]&&a[7]===b[7]&&a[8]===b[8]&&a[9]===b[9]&&a[10]===b[10]&&a[11]===b[11]&&a[12]===b[12]&&a[13]===b[13]&&a[14]===b[14]&&a[15]===b[15]}function Da(a,b){if(a===b)return!0;const c=a[0],d=a[1],e=a[2],g=a[3],h=a[4],l=a[5],f=a[6],k=a[7],m=a[8],n=a[9],q=a[10],p=a[11],v=a[12],u=a[13],r=a[14];a=a[15];const A=b[0],w=b[1],x=b[2],y=b[3],z=b[4],D=b[5],
E=b[6],F=b[7],G=b[8],H=b[9],I=b[10],J=b[11],B=b[12],Ea=b[13],Fa=b[14];b=b[15];const C=K.getEpsilon();return Math.abs(c-A)<=C*Math.max(1,Math.abs(c),Math.abs(A))&&Math.abs(d-w)<=C*Math.max(1,Math.abs(d),Math.abs(w))&&Math.abs(e-x)<=C*Math.max(1,Math.abs(e),Math.abs(x))&&Math.abs(g-y)<=C*Math.max(1,Math.abs(g),Math.abs(y))&&Math.abs(h-z)<=C*Math.max(1,Math.abs(h),Math.abs(z))&&Math.abs(l-D)<=C*Math.max(1,Math.abs(l),Math.abs(D))&&Math.abs(f-E)<=C*Math.max(1,Math.abs(f),Math.abs(E))&&Math.abs(k-F)<=
C*Math.max(1,Math.abs(k),Math.abs(F))&&Math.abs(m-G)<=C*Math.max(1,Math.abs(m),Math.abs(G))&&Math.abs(n-H)<=C*Math.max(1,Math.abs(n),Math.abs(H))&&Math.abs(q-I)<=C*Math.max(1,Math.abs(q),Math.abs(I))&&Math.abs(p-J)<=C*Math.max(1,Math.abs(p),Math.abs(J))&&Math.abs(v-B)<=C*Math.max(1,Math.abs(v),Math.abs(B))&&Math.abs(u-Ea)<=C*Math.max(1,Math.abs(u),Math.abs(Ea))&&Math.abs(r-Fa)<=C*Math.max(1,Math.abs(r),Math.abs(Fa))&&Math.abs(a-b)<=C*Math.max(1,Math.abs(a),Math.abs(b))}function Ga(a){const b=K.getEpsilon(),
c=a[0],d=a[1],e=a[2],g=a[4],h=a[5],l=a[6],f=a[8],k=a[9];a=a[10];return Math.abs(1-(c*c+g*g+f*f))<=b&&Math.abs(1-(d*d+h*h+k*k))<=b&&Math.abs(1-(e*e+l*l+a*a))<=b}function Ha(a){return 1===a[0]&&0===a[1]&&0===a[2]&&0===a[4]&&1===a[5]&&0===a[6]&&0===a[8]&&0===a[9]&&1===a[10]}const Ia=O.create();O=Object.freeze(Object.defineProperty({__proto__:null,add:za,adjoint:V,copy:R,determinant:W,equals:Da,exactEquals:Ca,frob:ya,fromQuat:qa,fromQuat2:ka,fromRotation:fa,fromRotationTranslation:Q,fromRotationTranslationScale:oa,
fromRotationTranslationScaleOrigin:pa,fromScaling:ea,fromTranslation:da,fromXRotation:ha,fromYRotation:ia,fromZRotation:ja,frustum:ra,getRotation:na,getScaling:ma,getTranslation:la,hasIdentityRotation:Ha,identity:L,invert:P,invertOrIdentity:U,isOrthoNormal:Ga,lookAt:va,mul:M,multiply:M,multiplyScalar:Aa,multiplyScalarAndAdd:Ba,ortho:ua,perspective:sa,perspectiveFromFieldOfView:ta,rotate:Z,rotateX:aa,rotateY:ba,rotateZ:ca,scale:Y,set:S,str:xa,sub:N,subtract:N,targetTo:wa,translate:X,transpose:T},Symbol.toStringTag,
{value:"Module"}));t.add=za;t.adjoint=V;t.copy=R;t.determinant=W;t.equals=Da;t.exactEquals=Ca;t.frob=ya;t.fromQuat=qa;t.fromQuat2=ka;t.fromRotation=fa;t.fromRotationTranslation=Q;t.fromRotationTranslationScale=oa;t.fromRotationTranslationScaleOrigin=pa;t.fromScaling=ea;t.fromTranslation=da;t.fromXRotation=ha;t.fromYRotation=ia;t.fromZRotation=ja;t.frustum=ra;t.getRotation=na;t.getScaling=ma;t.getTranslation=la;t.hasIdentityRotation=Ha;t.identity=L;t.invert=P;t.invertOrIdentity=U;t.isOrthoNormal=Ga;
t.lookAt=va;t.mat4=O;t.mul=M;t.multiply=M;t.multiplyScalar=Aa;t.multiplyScalarAndAdd=Ba;t.ortho=ua;t.perspective=sa;t.perspectiveFromFieldOfView=ta;t.rotate=Z;t.rotateX=aa;t.rotateY=ba;t.rotateZ=ca;t.scale=Y;t.set=S;t.str=xa;t.sub=N;t.subtract=N;t.targetTo=wa;t.translate=X;t.transpose=T});