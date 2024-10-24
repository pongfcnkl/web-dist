!function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */e=function(){return r};var r={},n=Object.prototype,o=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(j){l=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof h?e:h,i=Object.create(o.prototype),a=new E(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return _()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=k(a,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=f(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===d)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,a),i}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(j){return{type:"throw",arg:j}}}r.wrap=s;var d={};function h(){}function p(){}function g(){}var y={};l(y,a,(function(){return this}));var v=Object.getPrototypeOf,m=v&&v(v($([])));m&&m!==n&&o.call(m,a)&&(y=m);var w=g.prototype=h.prototype=Object.create(y);function b(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function x(e,r){function n(i,a,c,u){var l=f(e[i],e,a);if("throw"!==l.type){var s=l.arg,d=s.value;return d&&"object"==t(d)&&o.call(d,"__await")?r.resolve(d.__await).then((function(t){n("next",t,c,u)}),(function(t){n("throw",t,c,u)})):r.resolve(d).then((function(t){s.value=t,c(s)}),(function(t){return n("throw",t,c,u)}))}u(l.arg)}var i;this._invoke=function(t,e){function o(){return new r((function(r,o){n(t,e,r,o)}))}return i=i?i.then(o,o):o()}}function k(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,k(t,e),"throw"===e.method))return d;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var n=f(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,d;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function $(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:_}}function _(){return{value:void 0,done:!0}}return p.prototype=g,l(w,"constructor",g),l(g,"constructor",p),p.displayName=l(g,u,"GeneratorFunction"),r.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,l(t,u,"GeneratorFunction")),t.prototype=Object.create(w),t},r.awrap=function(t){return{__await:t}},b(x.prototype),l(x.prototype,c,(function(){return this})),r.AsyncIterator=x,r.async=function(t,e,n,o,i){void 0===i&&(i=Promise);var a=new x(s(t,e,n,o),i);return r.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(w),l(w,u,"Generator"),l(w,a,(function(){return this})),l(w,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},r.values=$,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=o.call(i,"catchLoc"),u=o.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),S(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;S(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:$(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),d}},r}function r(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(l){return void r(l)}c.done?e(u):Promise.resolve(u).then(n,o)}function n(t){return function(){var e=this,n=arguments;return new Promise((function(o,i){var a=t.apply(e,n);function c(t){r(a,o,i,c,u,"next",t)}function u(t){r(a,o,i,c,u,"throw",t)}c(void 0)}))}}function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==r)return;var n,o,i=[],a=!0,c=!1;try{for(r=r.call(t);!(a=(n=r.next()).done)&&(i.push(n.value),!e||i.length!==e);a=!0);}catch(u){c=!0,o=u}finally{try{a||null==r.return||r.return()}finally{if(c)throw o}}return i}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return i(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}System.register(["./index-legacy.f163cba8.js","./Paginator-legacy.2efc9e82.js"],(function(t){"use strict";var r,i,c,u,l,s,f,d,h,p,g,y,v,m,w,b,x,k,L,S,E,$,_;return{setters:[function(t){r=t.a,i=t.aW,c=t.b9,u=t.m,l=t.h,s=t.cX,f=t.X,d=t.a4,h=t.bP,p=t.b5,g=t.S,y=t.cm,v=t.cn,m=t.C,w=t.ba,b=t.n,x=t.ck,k=t.G,L=t.e,S=t.k,E=t.ae,$=t.E},function(t){_=t.P}],execute:function(){var j,C;!function(t){t[t.Pending=0]="Pending",t[t.Running=1]="Running",t[t.Succeeded=2]="Succeeded",t[t.Canceling=3]="Canceling",t[t.Canceled=4]="Canceled",t[t.Errored=5]="Errored",t[t.Failing=6]="Failing",t[t.Failed=7]="Failed",t[t.WaitingRetry=8]="WaitingRetry",t[t.BeforeRetry=9]="BeforeRetry"}(C||(C={}));var O=(a(j={},C.Failed,"danger"),a(j,C.Succeeded,"success"),a(j,C.Canceled,"neutral"),j),P=function(t){var e=r();return l(x,{get colorScheme(){var e;return null!==(e=O[t.state])&&void 0!==e?e:"info"},get children(){return e("tasks.state.".concat(t.state))}})},F=function(t){var a=r(),x="undone"===t.done?"cancel":"delete",k="done"===t.done&&t.state===C.Failed,L=o(i((function(){return c.post("/admin/task/".concat(t.type,"/").concat(x,"?tid=").concat(t.id))})),2),S=L[0],E=L[1],$=o(i((function(){return c.post("/admin/task/".concat(t.type,"/retry?tid=").concat(t.id))})),2),_=$[0],j=$[1],O=o(u(!1),2),F=O[0],I=O[1];return l(g,{get when(){return!F()},get children(){return l(s,{get bgColor(){return f("$background","$neutral3")()},w:"$full",overflowX:"auto",shadow:"$md",rounded:"$lg",p:"$2",direction:{"@initial":"column","@xl":"row"},spacing:"$2",get children(){return[l(d,{w:"$full",alignItems:"start",spacing:"$1",get children(){return[l(h,{size:"sm",css:{wordBreak:"break-all"},get children(){return t.name}}),l(P,{get state(){return t.state}}),l(p,{css:{wordBreak:"break-all"},get children(){return t.status}}),l(g,{get when(){return t.error},get children(){return l(p,{color:"$danger9",css:{wordBreak:"break-all"},get children(){return t.error}})}}),l(y,{w:"$full",trackColor:"$info3",rounded:"$full",size:"sm",get value(){return t.progress},get children(){return l(v,{color:"$info8",rounded:"$md"})}})]}}),l(s,{direction:{"@initial":"row","@xl":"column"},justifyContent:{"@xl":"center"},spacing:"$1",get children(){return[l(g,{get when(){return t.canRetry},get children(){return l(m,{disabled:!k,display:k?"block":"none",get loading(){return _()},onClick:(t=n(e().mark((function t(){var r;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j();case 2:r=t.sent,w(r,(function(){b.info(a("tasks.retry")),I(!0)}));case 4:case"end":return t.stop()}}),t)}))),function(){return t.apply(this,arguments)}),get children(){return a("tasks.retry")}});var t}}),l(m,{colorScheme:"danger",get loading(){return S()},onClick:(r=n(e().mark((function t(){var r;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E();case 2:r=t.sent,w(r,(function(){b.success(a("global.delete_success")),I(!0)}));case 4:case"end":return t.stop()}}),t)}))),function(){return r.apply(this,arguments)}),get children(){return a("global.".concat(x))}})];var r}})]}})}})},I=function(t){var a=r(),s=o(i((function(){return c.get("/admin/task/".concat(t.type,"/").concat(t.done))})),2),f=s[0],p=s[1],y=o(u([]),2),v=y[0],b=y[1],x=function(){var t=n(e().mark((function t(){var r;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p();case 2:r=t.sent,w(r,(function(t){var e;return b(null!==(e=null==t?void 0:t.sort((function(t,e){return t.id>e.id?1:-1})))&&void 0!==e?e:[])}));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();if(x(),"undone"===t.done){var j=setInterval(x,2e3);L((function(){return clearInterval(j)}))}var C=o(i((function(){return c.post("/admin/task/".concat(t.type,"/clear_done"))})),2),O=C[0],P=C[1],I=o(i((function(){return c.post("/admin/task/".concat(t.type,"/clear_succeeded"))})),2),G=I[0],R=I[1],A=o(i((function(){return c.post("/admin/task/".concat(t.type,"/retry_failed"))})),2),N=A[0],T=A[1],z=o(u(1),2),B=z[0],W=z[1],X=S((function(){var t=20*(B()-1),e=t+20;return v().slice(t,e)}));return l(d,{w:"$full",alignItems:"start",spacing:"$2",get children(){return[l(h,{size:"lg",get children(){return a("tasks.".concat(t.done))}}),l(g,{get when(){return"done"===t.done},get children(){return l(E,{gap:"$2",flexWrap:"wrap",get children(){return[l(m,{colorScheme:"accent",get loading(){return f()},onClick:x,get children(){return a("global.refresh")}}),l(m,{get loading(){return N()},onClick:(o=n(e().mark((function t(){var r;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,T();case 2:r=t.sent,w(r,(function(){return x()}));case 4:case"end":return t.stop()}}),t)}))),function(){return o.apply(this,arguments)}),get children(){return a("tasks.retry_failed")}}),l(m,{colorScheme:"danger",get loading(){return O()},onClick:(r=n(e().mark((function t(){var r;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,P();case 2:r=t.sent,w(r,(function(){return x()}));case 4:case"end":return t.stop()}}),t)}))),function(){return r.apply(this,arguments)}),get children(){return a("global.clear")}}),l(m,{colorScheme:"success",get loading(){return G()},onClick:(t=n(e().mark((function t(){var r;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,R();case 2:r=t.sent,w(r,(function(){return x()}));case 4:case"end":return t.stop()}}),t)}))),function(){return t.apply(this,arguments)}),get children(){return a("tasks.clear_succeeded")}})];var t,r,o}})}}),l(d,{w:"$full",spacing:"$2",get children(){return l(k,{get each(){return X()},children:function(e){return l(F,$(e,t))}})}}),l(_,{get total(){return v().length},defaultPageSize:20,onChange:function(t){W(t)}})]}})};t("T",(function(t){var e=r();return l(d,{w:"$full",alignItems:"start",spacing:"$4",get children(){return[l(h,{size:"xl",get children(){return e("tasks.".concat(t.type))}}),l(d,{w:"$full",spacing:"$2",get children(){return l(k,{each:["undone","done"],children:function(e){return l(I,{get type(){return t.type},done:e,get canRetry(){return t.canRetry}})}})}})]}})}))}}}))}();
