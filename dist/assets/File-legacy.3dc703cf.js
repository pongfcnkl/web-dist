!function(){function e(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var t,o,i=[],u=!0,c=!1;try{for(r=r.call(e);!(u=(t=r.next()).done)&&(i.push(t.value),!n||i.length!==n);u=!0);}catch(a){c=!0,o=a}finally{try{u||null==r.return||r.return()}finally{if(c)throw o}}return i}(e,r)||function(e,r){if(!e)return;if("string"==typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return n(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function r(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function t(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}System.register(["./index-legacy.f163cba8.js","./icon-legacy.3b582a5e.js","./index-legacy.c0562b68.js","./Layout-legacy.3f1c102a.js"],(function(n,r){"use strict";var o,i,u,c,a,l,f,p,d,s,m,g,y,b,h,v,j,w,O,_,x,$,k,S,P,A,E,I,T,z,D,C,L,M,V,U,W,X,B,G,R,q;return{setters:[function(e){o=e.h,i=e.au,u=e.ax,c=e.al,a=e.a1,l=e.a4,f=e.bP,p=e.b5,d=e.az,s=e.cl,m=e.cP,g=e.a,y=e.k,b=e.cQ,h=e.a5,v=e.at,j=e.aj,w=e.C,O=e.ap,_=e.G,x=e.aq,$=e.cv,k=e.S,S=e.aI,P=e.ae,A=e.cy,E=e.L,I=e.cR,T=e.V,z=e.W,D=e.b,C=e.cz,L=e.cS,M=e.m,V=e.bc,U=e.Y,W=e.Z,X=e.ar},function(e){B=e.g,G=e.O},function(e){R=e.o},function(e){q=e.T}],execute:function(){var F=n("F",(function(e){return o(l,{class:"fileinfo",py:"$6",spacing:"$6",get children(){return[o(i,{boxSize:"$20",get fallback(){return o(u,{get color(){return c()},boxSize:"$20",get as(){return B(a.obj)}})},get src(){return a.obj.thumb}}),o(l,{spacing:"$2",get children(){return[o(f,{size:"lg",css:{wordBreak:"break-all"},get children(){return a.obj.name}}),o(p,{color:"$neutral10",size:"sm",get children(){return[d((function(){return s(a.obj.size)}))," · ",d((function(){return m(a.obj.modified)}))]}})]}}),o(l,{spacing:"$2",get children(){return e.children}})]}})})),H=function(){var e=g(),n=y((function(){return b(a.obj.name)})),r=h().currentObjLink;return o(k,{get when(){return n().length},get children(){return o(v,{get children(){return[o(j,{as:w,colorScheme:"success",get rightIcon(){return o(u,{as:R})},get children(){return e("home.preview.open_with")}}),o(O,{get children(){return o(_,{get each(){return n()},children:function(e){return o(x,{as:"a",target:"_blank",get href(){return $(e.value,{raw_url:a.raw_url,name:a.obj.name,d_url:r(!0)})},get children(){return e.key}})}})}})]}})}})},Q=function(e){var n=g(),r=S().copyCurrentRawLink;return o(F,{get children(){return[o(P,{spacing:"$2",get children(){return[o(w,{colorScheme:"accent",onClick:function(){return r(!0)},get children(){return n("home.toolbar.copy_link")}}),o(w,{as:"a",get href(){return a.raw_url},target:"_blank",get children(){return n("home.preview.download")}})]}}),o(k,{get when(){return e.openWith},get children(){return o(H,{})}})]}})},Y=Object.freeze(Object.defineProperty({__proto__:null,Download:Q,default:Q},Symbol.toStringTag,{value:"Module"})),Z=function(e){var n=h().currentObjLink,r=y((function(){return $(e.scheme,{raw_url:a.raw_url,name:a.obj.name,d_url:n(!0),ts:!0})}));return o(I,{w:"$full",h:"70vh",get children(){return[o(A.iframe,{w:"$full",h:"$full",get src(){return r()}}),o(u,{pos:"absolute",right:"$2",bottom:"$10","aria-label":"Open in new tab",as:q,onClick:function(){window.open(r(),"_blank")},cursor:"pointer",rounded:"$md",get bgColor(){return E()},p:"$1",boxSize:"$7"})]}})},J=[{name:"HTML render",exts:["html"],component:T((function(){return z((function(){return r.import("./html-legacy.377b1cd9.js")}),void 0)}))},{name:"Aliyun Video Previewer",type:G.VIDEO,provider:/^Aliyundrive(Open)?$/,component:T((function(){return z((function(){return r.import("./aliyun_video-legacy.1d2d7b84.js")}),void 0)}))},{name:"Markdown",type:G.TEXT,component:T((function(){return z((function(){return r.import("./markdown-legacy.a4f2d4dd.js")}),void 0)}))},{name:"Markdown with word wrap",type:G.TEXT,component:T((function(){return z((function(){return r.import("./markdown_with_word_wrap-legacy.95104b57.js")}),void 0)}))},{name:"Url Open",exts:["url"],component:T((function(){return z((function(){return r.import("./url-legacy.d28a41a4.js")}),void 0)}))},{name:"Text Editor",type:G.TEXT,exts:["url"],component:T((function(){return z((function(){return r.import("./text-editor-legacy.7e7b5ca9.js")}),void 0)}))},{name:"Image",type:G.IMAGE,component:T((function(){return z((function(){return r.import("./image-legacy.8fee12a9.js")}),void 0)}))},{name:"Video",type:G.VIDEO,component:T((function(){return z((function(){return r.import("./video-legacy.f3d32f99.js")}),void 0)}))},{name:"Audio",type:G.AUDIO,component:T((function(){return z((function(){return r.import("./audio-legacy.3a3d3079.js")}),void 0)}))},{name:"Ipa",exts:["ipa","tipa"],component:T((function(){return z((function(){return r.import("./ipa-legacy.bf6a684e.js")}),void 0)}))},{name:"Plist",exts:["plist"],component:T((function(){return z((function(){return r.import("./plist-legacy.92472f10.js")}),void 0)}))},{name:"Aliyun Office Previewer",exts:["doc","docx","ppt","pptx","xls","xlsx","pdf"],provider:/^Aliyundrive(Share)?$/,component:T((function(){return z((function(){return r.import("./aliyun_office-legacy.08542262.js")}),void 0)}))},{name:"Asciinema",exts:["cast"],component:T((function(){return z((function(){return r.import("./asciinema-legacy.f3604ab6.js")}),void 0)}))},{name:"Video360",type:G.VIDEO,component:T((function(){return z((function(){return r.import("./video360-legacy.bdcb3987.js")}),void 0)}))}],K=function(e){var n,r=D().searchParams,t=G[null===(n=r.type)||void 0===n?void 0:n.toUpperCase()],i=[];return J.forEach((function(n){var r;n.provider&&!n.provider.test(e.provider)||(n.type===e.type||t&&n.type===t||"*"===n.exts||null!==(r=n.exts)&&void 0!==r&&r.includes(C(e.name).toLowerCase()))&&i.push({name:n.name,component:n.component})})),L(e.name).forEach((function(e){var n;i.push({name:e.key,component:(n=e.value,function(){return o(Z,{scheme:n})})})})),i.push({name:"Download",component:T((function(){return z((function(){return Promise.resolve().then((function(){return Y}))}),void 0)}))}),i},N=Object.freeze(Object.defineProperty({__proto__:null,default:function(){var n=y((function(){return K(t(t({},a.obj),{},{provider:a.provider}))})),r=e(M(n()[0]),2),i=r[0],u=r[1];return o(k,{get when(){return n().length>1},get fallback(){return o(Q,{openWith:!0})},get children(){return o(l,{w:"$full",spacing:"$2",get children(){return[o(P,{w:"$full",spacing:"$2",get children(){return[o(V,{alwaysShowBorder:!0,get value(){return i().name},onChange:function(e){u(n().find((function(n){return n.name===e})))},get options(){return n().map((function(e){return{value:e.name}}))}}),o(H,{})]}}),o(U,{get fallback(){return o(W,{})},get children(){return o(X,{get component(){return i().component}})}})]}})}})}},Symbol.toStringTag,{value:"Module"}));n("a",N)}}}))}();
