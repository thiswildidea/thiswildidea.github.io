// All material copyright Esri, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.28/esri/copyright.txt for details.
//>>built
define("exports ../../../../geometry ../../../../core/has ../../../../core/Logger ../../../../core/mathUtils ../../../../core/promiseUtils ../../../../core/RandomLCG ../../../../geometry/support/spatialReferenceUtils ../../../../geometry/Extent".split(" "),function(O,pa,P,X,Y,Z,R,aa,ba){function ca(a,e){const f=da(e.data,e.width,e.height,a.smoothing);return a.interpolate?(b,c)=>{const g=Math.floor(b),l=Math.floor(c);if(0>g||g>=e.width||0>l||l>=e.height)return[0,0];b-=g;c-=l;const d=g<e.width-1?g+
1:g,h=l<e.height-1?l+1:l;return[(f[2*(l*e.width+g)]*(1-c)+f[2*(h*e.width+g)]*c)*(1-b)+(f[2*(l*e.width+d)]*(1-c)+f[2*(h*e.width+d)]*c)*b,(f[2*(l*e.width+g)+1]*(1-c)+f[2*(h*e.width+g)+1]*c)*(1-b)+(f[2*(l*e.width+d)+1]*(1-c)+f[2*(h*e.width+d)+1]*c)*b]}:(b,c)=>{b=Math.round(b);c=Math.round(c);return 0>b||b>=e.width||0>c||c>=e.height?[0,0]:[f[2*(c*e.width+b)],f[2*(c*e.width+b)+1]]}}function ea(a,e,f,b,c,g,l,d,h){const q=[];let k=0,[m,r]=e(f,b);m*=a.velocityScale;r*=a.velocityScale;q.push({x:f,y:b,t:k,
speed:Math.sqrt(m*m+r*r)});for(let t=0;t<a.verticesPerLine;t++){let [w,B]=e(f,b);w*=a.velocityScale;B*=a.velocityScale;const v=Math.sqrt(w*w+B*B);if(v<a.minSpeedThreshold)break;const E=w/v,x=B/v;f+=E*a.segmentLength;b+=x*a.segmentLength;k+=a.segmentLength/v;if(Math.acos(E*u+x*y)>a.maxTurnAngle)break;if(a.collisions){var u=Math.round(f*h);var y=Math.round(b*h);if(0>u||u>l-1||0>y||y>d-1)break;const p=g[y*l+u];if(-1!==p&&p!==c)break;g[y*l+u]=c}q.push({x:f,y:b,t:k,speed:v});u=E;y=x}return q}function fa(a,
e,f,b){const c=[],g=new R,l=1/Math.max(a.lineCollisionWidth,1),d=Math.round(f*l),h=Math.round(b*l),q=new Int32Array(d*h);for(var k=0;k<q.length;k++)q[k]=-1;k=[];for(let m=0;m<b;m+=a.lineSpacing)for(let r=0;r<f;r+=a.lineSpacing)k.push({x:r,y:m,sort:g.getFloat()});k.sort((m,r)=>m.sort-r.sort);for(const {x:m,y:r}of k)g.getFloat()<a.density&&(f=ea(a,e,m,r,c.length,q,d,h,l),2>f.length||c.push(f));return c}function da(a,e,f,b){if(0===b)return a;const c=Math.round(3*b),g=Array(2*c+1);var l=0;for(var d=-c;d<=
c;d++){var h=Math.exp(-d*d/(b*b));g[d+c]=h;l+=h}for(b=-c;b<=c;b++)g[b+c]/=l;l=new Float32Array(a.length);for(b=0;b<f;b++)for(d=0;d<e;d++){var q=h=0;for(var k=-c;k<=c;k++)if(!(0>d+k||d+k>=e)){var m=g[k+c];h+=m*a[2*(b*e+(d+k))];q+=m*a[2*(b*e+(d+k))+1]}l[2*(b*e+d)]=h;l[2*(b*e+d)+1]=q}a=new Float32Array(a.length);for(b=0;b<e;b++)for(d=0;d<f;d++){q=h=0;for(k=-c;k<=c;k++)0>d+k||d+k>=f||(m=g[k+c],h+=m*l[2*((d+k)*e+b)],q+=m*l[2*((d+k)*e+b)+1]);a[2*(d*e+b)]=h;a[2*(d*e+b)+1]=q}return a}function S(a,e){const f=
new R;var b=a.reduce((d,h)=>d+h.length,0);b=new Float32Array(4*b);const c=Array(a.length);let g=0,l=0;for(const d of a){a=g;for(const h of d)b[4*g]=h.x,b[4*g+1]=h.y,b[4*g+2]=h.t,b[4*g+3]=h.speed,g++;c[l++]={startVertex:a,numberOfVertices:d.length,totalTime:d[d.length-1].t,timeSeed:e?f.getFloat():0}}return{lineVertices:b,lineDescriptors:c}}function T(a,e){function f(u,y,t,w,B,v,E,x){const p=9*h;let n=0;d[p+n++]=u;d[p+n++]=y;d[p+n++]=1;d[p+n++]=t;d[p+n++]=v;d[p+n++]=E;d[p+n++]=w/2;d[p+n++]=B/2;d[p+
n++]=x;h++;d[p+n++]=u;d[p+n++]=y;d[p+n++]=-1;d[p+n++]=t;d[p+n++]=v;d[p+n++]=E;d[p+n++]=-w/2;d[p+n++]=-B/2;d[p+n++]=x;h++}const {lineVertices:b,lineDescriptors:c}=a;var g=a=0;for(var l of c)a+=2*l.numberOfVertices,g+=6*(l.numberOfVertices-1);const d=new Float32Array(9*a);l=new Uint32Array(g);let h=0;a=0;for(const u of c){const {totalTime:y,timeSeed:t}=u;let w=g=null,B=null;var q=null,k=null,m=null;for(let v=0;v<u.numberOfVertices;v++){q=b[4*(u.startVertex+v)];const E=b[4*(u.startVertex+v)+1],x=b[4*
(u.startVertex+v)+2],p=b[4*(u.startVertex+v)+3];let n=null,z=null;var r=null;let F=null;0<v&&(n=q-g,z=E-w,r=Math.sqrt(n*n+z*z),n/=r,z/=r,1<v?(k=n+k,m=z+m,r=Math.sqrt(k*k+m*m),k/=r,m/=r,r=Math.min(1/(k*n+m*z),e),k*=r,m*=r,r=-m,F=k):(r=-z,F=n),null!==r&&null!==F&&(f(g,w,B,r,F,y,t,p),l[a++]=h-2,l[a++]=h,l[a++]=h-1,l[a++]=h,l[a++]=h+1,l[a++]=h-1));g=q;w=E;B=x;k=n;m=z;q=p}f(g,w,B,-m,k,y,t,q)}return{vertexData:d,indexData:l}}function U(a){function e(C,I){var G=x+n,J=p+z,K=Math.sqrt(G*G+J*J);G/=K;J/=K;var Q=
x*G+p*J,L=n+F,N=z+M;K=Math.sqrt(L*L+N*N);L/=K;N/=K;var A=n*L+z*N;K=r;var ha=u,ia=y,ja=t;J=-(J/Q);G/=Q;Q=w;var ka=B,la=v,ma=E;N=-(N/A);L/=A;A=16*k;let D=0;for(const na of[1,2])for(const oa of[1,2,3,4])h[A+D++]=K,h[A+D++]=ha,h[A+D++]=ia,h[A+D++]=ja,h[A+D++]=Q,h[A+D++]=ka,h[A+D++]=la,h[A+D++]=ma,h[A+D++]=na,h[A+D++]=oa,h[A+D++]=C,h[A+D++]=I,h[A+D++]=J/2,h[A+D++]=G/2,h[A+D++]=N/2,h[A+D++]=L/2,k++;q[m++]=k-8;q[m++]=k-7;q[m++]=k-6;q[m++]=k-7;q[m++]=k-5;q[m++]=k-6;q[m++]=k-4;q[m++]=k-3;q[m++]=k-2;q[m++]=
k-3;q[m++]=k-1;q[m++]=k-2}function f(C,I,G,J,K,Q){x=n;p=z;n=F;z=M;null==x&&null==p&&(x=n,p=z);if(null!=w&&null!=B){F=C-w;M=I-B;const L=Math.sqrt(F*F+M*M);F/=L;M/=L}null!=x&&null!=p&&e(K,Q);r=w;u=B;y=v;t=E;w=C;B=I;v=G;E=J}function b(C,I){x=n;p=z;n=F;z=M;null==x&&null==p&&(x=n,p=z);null!=x&&null!=p&&e(C,I)}const {lineVertices:c,lineDescriptors:g}=a;let l=a=0;for(var d of g){const C=d.numberOfVertices-1;a+=8*C;l+=12*C}const h=new Float32Array(16*a),q=new Uint32Array(l);let k=0,m=0,r,u,y,t,w,B,v,E,x,
p,n,z,F,M;for(const C of g){M=F=z=n=p=x=E=v=B=w=t=y=u=r=null;const {totalTime:I,timeSeed:G}=C;for(d=0;d<C.numberOfVertices;d++)f(c[4*(C.startVertex+d)],c[4*(C.startVertex+d)+1],c[4*(C.startVertex+d)+2],c[4*(C.startVertex+d)+3],I,G);b(I,G)}return{vertexData:h,indexData:q}}function V(a,e){const f=e.pixels,{width:b,height:c}=e,g=new Float32Array(b*c*2),l=e.mask||new Uint8Array(b*c*2);e.mask||l.fill(255);if("vector-uv"===a)for(a=0;a<b*c;a++)g[2*a]=f[0][a],g[2*a+1]=-f[1][a];else if("vector-magdir"===a)for(a=
0;a<b*c;a++){e=f[0][a];const d=Y.deg2rad(f[1][a]),h=Math.sin(d-Math.PI/2);g[2*a]=Math.cos(d-Math.PI/2)*e;g[2*a+1]=h*e}return{data:g,mask:l,width:b,height:c}}async function W(a,e,f,b,c,g){const l={requestProjectedLocalDirections:!0,signal:g};null!=c&&(l.timeExtent=c);if("imagery"===a.type)return await a.load({signal:g}),c=a.rasterInfo.dataType,a=await a.fetchImage(e,f,b,l),null==a?.pixelData?.pixelBlock?{data:new Float32Array(f*b*2),mask:new Uint8Array(f*b),width:f,height:b}:V(c,a.pixelData.pixelBlock);
await a.load({signal:g});c=a.rasterInfo.dataType;a=await a.fetchPixels(e,f,b,l);return null==a?.pixelBlock?{data:new Float32Array(f*b*2),mask:new Uint8Array(f*b),width:f,height:b}:V(c,a.pixelBlock)}const H=X.getLogger("esri.views.2d.engine.flow.dataUtils");O.createAnimatedLinesData=S;O.createFlowMesh=async function(a,e,f,b){const c=performance.now();var g=ca(e,f);const l=performance.now();f=fa(e,g,f.width,f.height);e=performance.now();g=S(f,!0);f=performance.now();a="Streamlines"===a?T(g,10):U(g);
g=performance.now();P("esri-2d-profiler")&&(H.info("I.1","_createFlowFieldFromData (ms)",Math.round(l-c)),H.info("I.2","_getStreamlines (ms)",Math.round(e-l)),H.info("I.3","createAnimatedLinesData (ms)",Math.round(f-e)),H.info("I.4","create{Streamlines|Particles}Mesh (ms)",Math.round(g-f)),H.info("I.5","createFlowMesh (ms)",Math.round(g-c)),H.info("I.6","Mesh size (bytes)",a.vertexData.buffer.byteLength+a.indexData.buffer.byteLength));await Promise.resolve();Z.throwIfAborted(b);return a};O.createParticlesMesh=
U;O.createStreamlinesMesh=T;O.loadImagery=async function(a,e,f,b,c,g){const l=performance.now();var d=aa.getInfo(e.spatialReference);if(!d)return f=await W(a,e,f,b,c,g),P("esri-2d-profiler")&&H.info("I.7","loadImagery, early exit (ms)",Math.round(performance.now()-l)),P("esri-2d-profiler")&&H.info("I.9","Number of parts",1),f;const [h,q]=d.valid,k=Math.ceil(e.width/(q-h)),m=e.width/k,r=Math.round(f/k);let u=e.xmin;const y=[];d=performance.now();for(let t=0;t<k;t++){const w=new ba({xmin:u,xmax:u+m,
ymin:e.ymin,ymax:e.ymax,spatialReference:e.spatialReference});y.push(W(a,w,r,b,c,g));u+=m}a=await Promise.all(y);P("esri-2d-profiler")&&H.info("I.8","All calls to _fetchPart (ms)",Math.round(performance.now()-d));P("esri-2d-profiler")&&H.info("I.9","Number of parts",a.length);b={data:new Float32Array(f*b*2),mask:new Uint8Array(f*b),width:f,height:b};e=0;for(const t of a){for(a=0;a<t.height;a++)for(c=0;c<t.width;c++)e+c>=f||(b.data[2*(a*f+e+c)]=t.data[2*(a*t.width+c)],b.data[2*(a*f+e+c)+1]=t.data[2*
(a*t.width+c)+1],b.mask[a*f+e+c]=t.mask[a*t.width+c]);e+=t.width}P("esri-2d-profiler")&&H.info("I.10","loadImagery, general exit (ms)",Math.round(performance.now()-l));return b};Object.defineProperty(O,Symbol.toStringTag,{value:"Module"})});