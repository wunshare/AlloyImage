Array.prototype.del=function(j){j.sort();for(var p=this.concat([]),b=j.length-1;0<=b;b--)p=p.slice(0,j[b]).concat(p.slice(j[b]+1));return p};HTMLImageElement.prototype.loadOnce=function(j){var p=0;this.onload=function(){p||j.call(this,null);p++}};
(function(j){var p={lib:[],init:function(){this.require("config")},module:function(b,a){this.lib[b]=a.call(null,this)},require:function(b){var a=this,c=document.createElement("script");document.body.appendChild(c);c.src="./js/module/"+b+".js";c.onload=c.onerror=function(c){a.handlerror(c)}},handlerror:function(){},destroySelf:function(b){delete window[j];throw Error(b);},reflect:function(b,a,c){b=this.lib.config.getModuleName(b);return this.lib[b].process(a,c)},reflectEasy:function(b){b=this.lib.config.getEasyFun(b);
return this.lib.easy.getFun(b)},add:function(b,a,c,d,e,k,h,f){return this.lib.addLayer.add(b,a,c,d,e,k,h,f)},applyMatrix:function(){}};window[j]=function(b,a,c){if(this instanceof window[j]){this.startTime=+new Date;var d=document.createElement("canvas"),e=d.getContext("2d");isNaN(b)?(d.width=parseInt(b.width),d.height=parseInt(b.height),a=getComputedStyle(b),imgWidth=parseInt(a.getPropertyValue("width")),imgHeight=parseInt(a.getPropertyValue("height")),isNaN(imgWidth)?e.drawImage(b,0,0):e.drawImage(b,
0,0,imgWidth,imgHeight)):(d.width=b,d.height=a,e.fillStyle=c||"rgba(255,1,1,0)",e.fillRect(0,0,b,a));this.canvas=d;this.context=e;this.imgData=e.getImageData(0,0,d.width,d.height);this.name=j+"_"+Math.random();this.canvas.id=this.name;this.layers=[]}else return new window[j](b,a,c)};window[j].module=function(b,a){p.module(b,a)};window[j].dorsyMath=function(){return p.lib.dorsyMath};window[j].prototype={act:function(b,a){for(var c=[],d=0;d<arguments.length;d++)0!=d&&c.push(arguments[d]);p.reflect(b,
this.imgData,c);return this},view:function(b,a,c,d,e){var k=this.clone();k.type=1;this.addLayer(k,"\u6b63\u5e38",0,0);k.act(b,a,c,d,e);return this},excute:function(){var b=this.layers,a=b.length;b[a-1]&&1==b[a-1][0].type&&(this.imgData=b[a-1][0].imgData,delete b[a-1])},cancel:function(){var b=this.layers,a=b.length;b[a-1]&&1==b[a-1][0].type&&delete b[a-1]},show:function(b,a){var c=new window[j](this.canvas.width,this.canvas.height);c.add(this,"\u6b63\u5e38",0,0,a);this.tempPsLib=c;for(var d=0;d<this.layers.length;d++){var e=
this.layers[d],k=e[0].layers,h=e[0];k[k.length-1]&&1==k[k.length-1][0].type&&(h=k[k.length-1][0]);c.add(h,e[1],e[2],e[3],a)}this.context.clearRect(0,0,this.canvas.width,this.canvas.height);this.context.putImageData(c.imgData,0,0);b?document.querySelector(b).appendChild(this.canvas):document.body.appendChild(this.canvas);return this},replace:function(b){b&&(b.onload=function(){},b.src=this.save());return this},add:function(){var b=[],a,c,d,e,k;for(d=0;d<arguments.length;d++)if(d)switch(typeof arguments[d]){case "string":/\d+%/.test(arguments[d])?
c=arguments[d].replace("%",""):/[RGB]+/.test(arguments[d])?k=arguments[d]:a=arguments[d];break;case "number":b.push(arguments[d]);break;case "boolean":e=arguments[d]}d=b[0]||0;b=b[1]||0;this.imgData=p.add(this.imgData,arguments[0].imgData,a||"\u6b63\u5e38",c/100||1,d,b,e||!1,k||"RGB");return this},addLayer:function(b,a,c,d){this.layers.push([b,a,c,d]);return this},clone:function(){var b=new window[j](this.canvas.width,this.canvas.height);b.context.putImageData(this.imgData,0,0);b.imgData=b.context.getImageData(0,
0,this.canvas.width,this.canvas.height);return b},swap:function(b,a){var c=this.layers[b];this.layers[b]=this.layers[a];this.layers[a]=c;return this},deleteLayers:function(b){this.layers=this.layers.del(b)},save:function(b){if(!this.layers.length)return this.context.putImageData(this.imgData,0,0),this.canvas.toDataURL();var a=new window[j](this.canvas.width,this.canvas.height);a.add(this,"\u6b63\u5e38",0,0,b);this.tempPsLib=a;for(var c=0;c<this.layers.length;c++){var d=this.layers[c],e=d[0].layers,
k=d[0];e[e.length-1]&&1==e[e.length-1][0].type&&(k=e[e.length-1][0]);a.add(k,d[1],d[2],d[3],b)}this.context.clearRect(0,0,this.canvas.width,this.canvas.height);this.context.putImageData(a.imgData,0,0);return this.canvas.toDataURL()},drawRect:function(){var b;if(!(b=document.getElementById("imgRect")))b=document.createElement("canvas"),b.id="imgRect",document.body.appendChild(b),b.width=parseInt(this.canvas.width),b.height=parseInt(this.canvas.height);var a=b.getContext("2d");a.clearRect(0,0,b.width,
b.height);for(var c=[],d=this.tempPsLib.imgData.data,e=0,k=d.length;e<k;e++)c[d[e]]?c[d[e]]++:c[d[e]]=1;a.beginPath();a.moveTo(0,b.height);for(e=d=0;255>e;e++)c[e]>d&&(d=c[e]);for(e=0;255>e;e++)k=c[e]||0,k=b.height-0.8*(k/d)*b.height,a.lineTo(e/256*b.width,k,1,1);a.lineTo(b.width+10,b.height);a.fill()},ps:function(b){var a;a=p.reflectEasy(b).call(this);this.logTime("\u7ec4\u5408\u6548\u679c"+b);return a},logTime:function(b){console.log(b+": "+(+new Date-this.startTime)/1E3+"s")}}})("psLib");
window.AlloyImage=$AI=window.psLib;(function(j){window[j].module("ImageEnhance",function(){return{process:function(p){for(var b=p.data,a=0,c=b.length;a<c;a+=4);p.data=b;return p}}})})("psLib");
(function(j){window[j].module("addLayer",function(){return{add:function(p,b,a,c,d,e,k,h){var f=p.data,n=b.data;d=d||0;e=e||0;c=c||1;k=k||!1;h=h||"RGB";/[RGB]+/.test(h)||(h="RGB");var q=h.replace("R","0").replace("G","1").replace("B","2"),j=1;k&&(j=1);var m;k=p.width;h=n.length;b=b.width;for(var q=[-1<q.indexOf("0"),-1<q.indexOf("1"),-1<q.indexOf("2")],j=4*j,l=0,s=f.length;l<s;l+=j){var g=l/4,r=parseInt(g/k),g=g%k-d,r=4*((r-e)*b+g);if(0<=r&&r<h-4&&g<b&&0<=g)for(g=0;3>g&&0!=n[r+3];g++)switch(f[l+3]=
n[r+3],a){case "\u989c\u8272\u51cf\u6de1":q[g]&&(m=f[l+g]+f[l+g]*n[r+g]/(255-n[r+g]),f[l+g]=(1-c)*f[l+g]+c*m);break;case "\u53d8\u6697":q[g]&&(m=f[l+g]<n[r+g]?f[l+g]:n[r+g],f[l+g]=(1-c)*f[l+g]+c*m);break;case "\u53d8\u4eae":q[g]&&(m=f[l+g]>n[r+g]?f[l+g]:n[r+g],f[l+g]=(1-c)*f[l+g]+c*m);break;case "\u6b63\u7247\u53e0\u5e95":q[g]&&(m=parseInt(f[l+g]*n[r+g]/255),f[l+g]=(1-c)*f[l+g]+c*m);break;case "\u6ee4\u8272":q[g]&&(m=parseInt(255-(255-f[l+g])*(255-n[r+g])/255),f[l+g]=(1-c)*f[l+g]+c*m);break;case "\u53e0\u52a0":q[g]&&
(m=127.5>=f[l+g]?f[l+g]*n[r+g]/127.5:255-(255-f[l+g])*(255-n[r+g])/127.5,f[l+g]=(1-c)*f[l+g]+c*m);break;case "\u5f3a\u5149":q[g]&&(m=127.5>=n[r+g]?f[l+g]*n[r+g]/127.5:f[l+g]+(255-f[l+g])*(n[r+g]-127.5)/127.5,f[l+g]=(1-c)*f[l+g]+c*m);break;case "\u5dee\u503c":q[g]&&(m=f[l+g]>n[r+g]?f[l+g]-n[r+g]:n[r+g]-f[l+g],f[l+g]=(1-c)*f[l+g]+c*m);break;case "\u6392\u9664":q[g]&&(m=f[l+g]+n[r+g]-f[l+g]*n[r+g]/127.5,f[l+g]=(1-c)*f[l+g]+c*m);break;case "\u70b9\u5149":q[g]&&(m=f[l+g]<2*n[r+g]-255?2*n[r+g]-255:f[l+
g]<2*n[r+g]?f[l+g]:2*n[r+g],f[l+g]=(1-c)*f[l+g]+c*m);break;case "\u989c\u8272\u52a0\u6df1":q[g]&&(m=255-255*(255-f[l+g])/n[r+g],f[l+g]=(1-c)*f[l+g]+c*m);break;case "\u7ebf\u6027\u52a0\u6df1":q[g]&&(m=f[l+g]+n[r+g],m=255<m?m-255:0,f[l+g]=(1-c)*f[l+g]+c*m);break;case "\u7ebf\u6027\u51cf\u6de1":q[g]&&(m=f[l+g]+n[r+g],m=255<m?255:m,f[l+g]=(1-c)*f[l+g]+c*m);break;case "\u67d4\u5149":q[g]&&(m=127.5>n[r+g]?((2*n[r+g]-255)*(255-f[l+g])/65025+1)*f[l+g]:(2*n[r+g]-255)*(Math.sqrt(f[l+g]/255)-f[l+g]/255)+f[l+
g],f[l+g]=(1-c)*f[l+g]+c*m);break;case "\u4eae\u5149":q[g]&&(m=127.5>n[r+g]?255*(1-(255-f[l+g])/(2*n[r+g])):f[l+g]/(2*(1-n[r+g]/255)),f[l+g]=(1-c)*f[l+g]+c*m);break;case "\u7ebf\u6027\u5149":q[g]&&(m=f[l+g]+2*n[r+g]-255,m=255<m?255:m,f[l+g]=(1-c)*f[l+g]+c*m);break;case "\u5b9e\u8272\u6df7\u5408":q[g]&&(m=n[r+g]<255-f[l+g]?0:255,f[l+g]=(1-c)*f[l+g]+c*m);break;default:q[g]&&(m=n[r+g],f[l+g]=(1-c)*f[l+g]+c*m)}}p.data=f;return p}}})})("psLib");
(function(j){window[j].module("alterRGB",function(){return{process:function(p,b){for(var a=p.data,c=b[0]/50,d=Math.tan((45+44*((b[1]||0)/50))*Math.PI/180),e=0,k=a.length;e<k;e+=4)for(var h=0;3>h;h++)a[e+h]=(a[e+h]-127.5*(1-c))*d+127.5*(1+c);p.data=a;return p}}})})("psLib");
(function(j){window[j].module("applyMatrix",function(p){return{process:function(b){for(var a=b.data,c=b.width,d=new p.lib.dorsyMath.Matrix([-2,-4,-4,-4,-2,-4,0,8,0,-4,-4,8,24,8,-4,-4,0,8,0,-4,-2,-4,-4,-4,-2],25,1),e=[],k=0,h=a.length;k<h;k+=4){var f=k/4,n=parseInt(f/c),q=f%c;if(!(0==n||0==q)){for(var j=[[],[],[]],m=-2;3>m;m++)for(var l=n+m,s=-2;3>s;s++)for(var g=4*(l*c+(q+s)),f=0;3>f;f++)j[f].push(a[g+f]);n=(new p.lib.dorsyMath.Matrix(j,3,matrixSize)).mutiply(d);for(f=0;3>f;f++)e[k+f]=n.data[f];e[k+
4]=a[k+4]}}k=0;for(h=a.length;k<h;k++)a[k]=e[k]||a[k];return b}}})})("psLib");
(function(j){window[j].module("config",function(){var p={"\u7070\u5ea6\u5904\u7406":"toGray","\u53cd\u8272":"toReverse","\u7070\u5ea6\u9608\u503c":"toThresh","\u9ad8\u65af\u6a21\u7cca":"gaussBlur","\u4eae\u5ea6":"alterRGB","\u6d6e\u96d5\u6548\u679c":"embossment","\u67e5\u627e\u8fb9\u7f18":"lapOfGauss","\u8272\u76f8/\u9971\u548c\u5ea6\u8c03\u8282":"setHSI","\u9a6c\u8d5b\u514b":"mosaic","\u6cb9\u753b":"oilPainting","\u8150\u8680":"corrode","\u9510\u5316":"sharp","\u6dfb\u52a0\u6742\u8272":"noise","\u66f2\u7ebf":"curve",
"\u6697\u89d2":"darkCorner"},b={"\u7f8e\u80a4":"e1","\u7d20\u63cf":"e2","\u81ea\u7136\u589e\u5f3a":"e3","\u7d2b\u8c03":"e4","\u67d4\u7126":"e5","\u590d\u53e4":"e6","\u9ed1\u767d":"e7","\u4efflomo":"e8","\u4eae\u767d\u589e\u5f3a":"e9","\u7070\u767d":"e10","\u7070\u8272":"e11","\u6696\u79cb":"e12","\u6728\u96d5":"e13"};return{getModuleName:function(a){return p[a]||a},getEasyFun:function(a){return b[a]||a}}})})("psLib");
(function(j){window[j].module("corrode",function(){return{process:function(p,b){for(var a=parseInt(b[0])||3,c=p.data,d=p.width,e=p.height,k=0;k<d;k++)for(var h=0;h<e;h++)for(var f=parseInt(2*Math.random()*a)-a,n=parseInt(2*Math.random()*a)-a,q=h*d+k,f=(h+f)*d+k+n,n=0;3>n;n++)c[4*q+n]=c[4*f+n];return p}}})})("psLib");
(function(j){window[j].module("curve",function(p){return{process:function(b,a){for(var c=p.lib.dorsyMath.lagrange(a[0],a[1]),d=b.data,e=b.width,k=b.height,h=0;h<e;h++)for(var f=0;f<k;f++)for(var n=f*e+h,q=0;3>q;q++)d[4*n+q]=c(d[4*n+q]);return b}}})})("psLib");
(function(j){window[j].module("darkCorner",function(p){return{process:function(b,a){for(var c=parseInt(a[0])||3,d=a[1]||30,e=b.data,k=b.width,h=b.height,f=2*k/3,n=1*h/2,q=p.lib.dorsyMath.distance([f,n]),c=q*(1-c/10),j=0;j<k;j++)for(var m=0;m<h;m++)for(var l=m*k+j,s=0;3>s;s++){var g;g=e[4*l+s];var r=(p.lib.dorsyMath.distance([j,m],[f,n])-c)/(q-c);0>r&&(r=0);g=(0*Math.pow(1-r,3)+0.06*r*Math.pow(1-r,2)+3*0.3*r*r*(1-r)+1*Math.pow(r,3))*g*d/255;e[4*l+s]-=g}return b}}})})("psLib");
(function(j){window[j].module("dorsyMath",function(p){var b={FFT1:function(a){function c(){e++;for(var f=d/Math.pow(2,e),h=d/f,q=0;q<f;q++)for(var p=q*h,m=(q+1)*h-1,l=e,j=Math.pow(2,l-1),g=0;p<=m-j;p++){var r=p+j,v=g*d/Math.pow(2,l),u=v+d/4;a[p]instanceof b.C||(a[p]=new b.C(a[p]));a[r]instanceof b.C||(a[r]=new b.C(a[r]));v=a[p].plus(a[r].mutiply(k[v]));u=a[p].plus(a[r].mutiply(k[u]));a[p]=v;a[r]=u;g++}1<f&&c()}for(var d=a.length,e=0,k=[],h=0;h<d;h++)k[h]=this.exp(-2*Math.PI*h/d);c();return a},DFT:function(){},
Matrix:function(a,c,b){var e=[];if(c){if(isNaN(c)){var k=/(\d+)\*/.exec(c)[1];c=/\*(\d+)/.exec(c)[1]}else k=c,c=b;if(a[0]&&a[0][0])for(b=0;b<k;b++){e[b]=[];for(var h=0;h<c;h++)e[b][h]=a[b][h]||0}else for(b=0;b<k;b++){e[b]=[];for(h=0;h<c;h++)e[b][h]=a[b*c+h]||0}this.m=k;this.n=c}else this.m=a.length,this.n=a[0].length;this.data=e},C:function(a,c){this.r=a||0;this.i=c||0},exp:function(a,c){a=a||0;c=c||1;var d=new b.C;d.r=c*Math.cos(a);d.i=c*Math.sin(a);return d},lagrange:function(a,c){var b=a.length;
return function(e){for(var k=0,h=0;h<b;h++){for(var f=1,n=1,p=0;p<b;p++)p!=h&&(f*=a[h]-a[p],n*=e-a[p]);k+=c[h]*(n/f)}return k}},applyMatrix:function(a,c,d){d=d||0;var e=a.data,k=a.width,h=c.length;c=new b.Matrix(c,h,1);for(var f=[],n=-(Math.sqrt(h)-1)/2,q=0,j=e.length;q<j;q+=4){var m=q/4,l=parseInt(m/k),s=m%k;if(!(0==l||0==s)){for(var g=[[],[],[]],r=n;r<=-n;r++)for(var v=l+r,u=n;u<=-n;u++)for(var w=4*(v*k+(s+u)),m=0;3>m;m++)g[m].push(e[w+m]);l=(new p.lib.dorsyMath.Matrix(g,3,h)).mutiply(c);for(m=
0;3>m;m++)f[q+m]=l.data[m];f[q+4]=e[q+4]}}q=0;for(j=e.length;q<j;q++)f[q]&&(e[q]=f[q]<d?f[q]:e[q]);return a},RGBToHSI:function(a,b,d){var e=(a-b+a-d)/2/Math.sqrt((a-b)*(a-b)+(a-d)*(b-d))||0,e=Math.acos(e),e=d>b?2*Math.PI-e:e,k=1-3*Math.min(a,b,d)/(a+b+d);e>2*Math.PI&&(e=2*Math.PI);0>e&&(e=0);return{H:e,S:k,I:(a+b+d)/3}},HSIToRGB:function(a,b,d){0>a?(a%=2*Math.PI,a+=2*Math.PI):a%=2*Math.PI;if(a<=2*Math.PI/3)var e=d*(1-b),k=d*(1+b*Math.cos(a)/Math.cos(Math.PI/3-a)),h=3*d-(k+e);else a<=4*Math.PI/3?(a-=
2*Math.PI/3,k=d*(1-b),h=d*(1+b*Math.cos(a)/Math.cos(Math.PI/3-a)),e=3*d-(h+k)):(a-=4*Math.PI/3,h=d*(1-b),e=d*(1+b*Math.cos(a)/Math.cos(Math.PI/3-a)),k=3*d-(h+e));return{R:k,G:h,B:e}},applyInHSI:function(a,b){for(var d=a.data,e=0,k=d.length;e<k;e+=4){var h=this.RGBToHSI(d[e],d[e+1],d[e+2]);b(h);1<h.S&&(h.S=1);0>h.S&&(h.S=0);h=this.HSIToRGB(h.H,h.S,h.I);d[e]=h.R;d[e+1]=h.G;d[e+2]=h.B}},applyInCoordinate:function(){},distance:function(a,c){c=c||[0,0];a=new b.C(a[0],a[1]);c=new b.C(c[0],c[1]);return a.minus(c).distance()}};
b.Matrix.prototype={plus:function(a){if(this.m!=a.m||this.n!=a.n)throw Error("\u77e9\u9635\u52a0\u6cd5\u884c\u5217\u4e0d\u5339\u914d");for(var c=new b.Matrix([],this.m,this.n),d=0;d<this.m;d++)for(var e=0;e<this.n;e++)c.data[d][e]=this.data[d][e]+a.data[d][e];return c},minus:function(a){if(this.m!=a.m||this.n!=a.n)throw Error("\u77e9\u9635\u51cf\u6cd5\u6cd5\u884c\u5217\u4e0d\u5339\u914d");for(var c=new b.Matrix([],this.m,this.n),d=0;d<this.m;d++)for(var e=0;e<this.n;e++)c.data[d][e]=this.data[d][e]-
a.data[d][e];return c},mutiply:function(a){if(this.n!=a.m)throw Error("\u77e9\u9635\u4e58\u6cd5\u884c\u5217\u4e0d\u5339\u914d");for(var c=new b.Matrix([],this.m,a.n),d=0;d<this.m;d++)for(var e=0;e<a.n;e++){for(var k=0,h=0;h<this.n;h++)k+=this.data[d][h]*a.data[h][e];c.data[d][e]=k}return c}};b.C.prototype={plus:function(a){var c=new b.C;c.r=this.r+a.r;c.i=this.i+a.i;return c},minus:function(a){var c=new b.C;c.r=this.r-a.r;c.i=this.i-a.i;return c},mutiply:function(a){var c=new b.C;c.r=this.r*a.r-this.i*
a.i;c.i=this.r*a.i+this.i*a.r;return c},divide:function(a){var c=new b.C,d=a.mutiply(a.conjugated());a=this.mutiply(a.conjugated());c.r=a.r/d.r;c.i=a.i/d.r;return c},conjugated:function(){return new b.C(this.r,-this.i)},distance:function(){return Math.sqrt(this.r*this.r+this.i*this.i)}};return b})})("psLib");
(function(j){window[j].module("easy",function(){return{getFun:function(p){return{e1:function(){return this.clone().add(this.act("\u9ad8\u65af\u6a21\u7cca",10),"\u6ee4\u8272").act("\u4eae\u5ea6",-10,5)},e2:function(){var b=this.act("\u7070\u5ea6\u5904\u7406").clone();return this.add(b.act("\u53cd\u8272").act("\u9ad8\u65af\u6a21\u7cca",8),"\u989c\u8272\u51cf\u6de1").act("\u9510\u5316",1)},e3:function(){return this.act("\u66f2\u7ebf",[0,190,255],[0,229,255])},e4:function(){var b=this.clone();return this.add(b.act("\u9ad8\u65af\u6a21\u7cca",
3),"\u6b63\u7247\u53e0\u5e95","RG")},e5:function(){var b=this.clone();return this.add(b.act("\u9ad8\u65af\u6a21\u7cca",6),"\u53d8\u6697")},e6:function(){this.clone();return this.act("\u7070\u5ea6\u5904\u7406").add(window[j](this.canvas.width,this.canvas.height,"#808080").act("\u6dfb\u52a0\u6742\u8272").act("\u9ad8\u65af\u6a21\u7cca",4).act("\u8272\u76f8/\u9971\u548c\u5ea6\u8c03\u8282",32,19,0,!0),"\u53e0\u52a0")},e7:function(){return this.act("\u7070\u5ea6\u5904\u7406")},e8:function(){return this.clone().add(this.clone(),
"\u6ee4\u8272").add(this.clone(),"\u67d4\u5149").add(this.clone().act("\u53cd\u8272"),"\u6b63\u5e38","20%","B").act("\u6697\u89d2",6,200)},e9:function(){return this.clone().add(this.clone().act("\u66f2\u7ebf",[0,50,255],[0,234,255]),"\u67d4\u5149")},e10:function(){return this.act("\u7070\u5ea6\u5904\u7406").act("\u66f2\u7ebf",[0,61,69,212,255],[0,111,176,237,255])},e11:function(){return this.act("\u7070\u5ea6\u5904\u7406").act("\u66f2\u7ebf",[0,60,142,194,255],[0,194,240,247,255])},e12:function(){var b=
this.clone().act("\u8272\u76f8/\u9971\u548c\u5ea6\u8c03\u8282",36,47,8,!0).act("\u6697\u89d2",6,150);return this.add(b,"\u53e0\u52a0")},e13:function(){var b=this.clone().act("\u9a6c\u8d5b\u514b").act("\u67e5\u627e\u8fb9\u7f18").act("\u6d6e\u96d5\u6548\u679c");return this.add(b,"\u7ebf\u6027\u5149")}}[p]}}})})("psLib");
(function(j){window[j].module("embossment",function(){return{process:function(p){for(var b=p.data,a=p.width,c=[],d=0,e=b.length;d<e;d+=4){var k=d/4,h=parseInt(k/a),f=k%a,k=4*((h-1)*a+(f-1)),n=4*(h+1)*a+4*(f+1);if(!(0==h||0==f)){for(h=0;3>h;h++)c[d+h]=b[k+h]-b[n+h]+127.5;c[d+4]=b[d+4]}}d=0;for(e=b.length;d<e;d++)b[d]=c[d]||b[d];return p}}})})("psLib");
(function(j){window[j].module("gaussBlur",function(){return{process:function(p,b,a){var c=p.data,d=p.width,e=p.height,k=[],h=0,f,n,q,j,m,l;b=Math.floor(b)||3;a=a||b/3;f=1/(Math.sqrt(2*Math.PI)*a);j=-1/(2*a*a);m=0;for(a=-b;a<=b;a++,m++)q=f*Math.exp(j*a*a),k[m]=q,h+=q;m=0;for(a=k.length;m<a;m++)k[m]/=h;for(f=0;f<e;f++)for(a=0;a<d;a++){h=n=q=j=0;for(l=-b;l<=b;l++)m=a+l,0<=m&&m<d&&(m=4*(f*d+m),n+=c[m]*k[l+b],q+=c[m+1]*k[l+b],j+=c[m+2]*k[l+b],h+=k[l+b]);m=4*(f*d+a);c[m]=n/h;c[m+1]=q/h;c[m+2]=j/h}for(a=
0;a<d;a++)for(f=0;f<e;f++){h=n=q=j=0;for(l=-b;l<=b;l++)m=f+l,0<=m&&m<e&&(m=4*(m*d+a),n+=c[m]*k[l+b],q+=c[m+1]*k[l+b],j+=c[m+2]*k[l+b],h+=k[l+b]);m=4*(f*d+a);c[m]=n/h;c[m+1]=q/h;c[m+2]=j/h}p.data=c;return p}}})})("psLib");(function(j){window[j].module("lapOfGauss",function(p){return{process:function(b){return p.lib.dorsyMath.applyMatrix(b,[0,1,0,1,-4,1,0,1,0],250)}}})})("psLib");
(function(j){window[j].module("mosaic",function(){return{process:function(p,b){for(var a=parseInt(b[0])||3,c=p.data,d=p.width,e=p.height,a=2*a+1,k=0,h=parseInt(d/a);k<h;k++)for(var f=0,n=parseInt(e/a);f<n;f++){for(var j=[],t=[0,0,0],m=0;m<a;m++)for(var l=0;l<a;l++){var s=(f*a+m)*d+k*a+l;t[0]+=c[4*s];t[1]+=c[4*s+1];t[2]+=c[4*s+2]}j[0]=t[0]/(a*a);j[1]=t[1]/(a*a);j[2]=t[2]/(a*a);for(m=0;m<a;m++)for(l=0;l<a;l++)s=(f*a+m)*d+k*a+l,c[4*s]=j[0],c[4*s+1]=j[1],c[4*s+2]=j[2]}return p}}})})("psLib");
(function(j){window[j].module("noise",function(){return{process:function(p,b){for(var a=parseInt(b[0])||100,c=p.data,d=p.width,e=p.height,k=0;k<d;k++)for(var h=0;h<e;h++)for(var f=h*d+k,n=0;3>n;n++){var j=parseInt(2*Math.random()*a)-a;c[4*f+n]+=j}return p}}})})("psLib");
(function(j){window[j].module("oilPainting",function(){return{process:function(p,b){for(var a=parseInt(b[0])||16,c=p.data,d=p.width,e=p.height,k=0;k<d;k++)for(var h=0;h<e;h++){for(var f=h*d+k,n=0,j=0;3>j;j++)n+=c[4*f+j];n/=3;n=parseInt(n/a)*a;for(j=0;3>j;j++)c[4*f+j]=n}return p}}})})("psLib");
(function(j){window[j].module("setHSI",function(j){return{process:function(b,a){a[0]=a[0]/180*Math.PI;a[1]=a[1]/100||0;a[2]=255*(a[2]/100)||0;a[3]=a[3]||!1;j.lib.dorsyMath.applyInHSI(b,function(b){a[3]?(b.H=a[0],b.S=a[1]):(b.H+=a[0],b.S+=a[1]);b.I+=a[2]});return b}}})})("psLib");
(function(j){window[j].module("sharp",function(){return{process:function(j,b){for(var a=b[0]||0.6,c=j.data,d=j.width,e=0,k=c.length;e<k;e+=4){var h=e/4,f=parseInt(h/d),n=h%d;if(!(0==f||0==n))for(var q=4*((f-1)*d+(n-1)),f=4*((f-1)*d+n),h=4*(h-1),n=0;3>n;n++)c[e+n]+=(c[e+n]-(c[f+n]+c[h+n]+c[q+n])/3)*a}return j}}})})("psLib");
(function(j){window[j].module("toGray",function(){return{process:function(j){for(var b=j.data,a=0,c=b.length;a<c;a+=4){var d=parseInt((b[a]+b[a+1]+b[a+2])/3);b[a+2]=b[a+1]=b[a]=d}j.data=b;return j}}})})("psLib");(function(j){window[j].module("toReverse",function(){return{process:function(j){for(var b=j.data,a=0,c=b.length;a<c;a+=4)b[a]=255-b[a],b[a+1]=255-b[a+1],b[a+2]=255-b[a+2];j.data=b;return j}}})})("psLib");
(function(j){window[j].module("toThresh",function(j){return{process:function(b,a){b=j.lib.toGray.process(b);var c=b.data;a=a[0]||128;for(var d=0,e=c.length;d<e;d++)(d+1)%4&&(c[d]=c[d]>a?255:0);b.data=c;return b}}})})("psLib");
