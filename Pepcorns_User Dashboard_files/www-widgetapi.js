(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var n;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var da="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ea(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var fa=ea(this);function r(a,b){if(b)a:{var c=fa;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&da(c,a,{configurable:!0,writable:!0,value:b})}}
r("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.g=f;da(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.g};
var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
r("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=fa[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&da(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ha(aa(this))}})}return a});
function ha(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function u(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
function ia(a){if(!(a instanceof Array)){a=u(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function ja(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var ka="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)ja(d,e)&&(a[e]=d[e])}return a};
r("Object.assign",function(a){return a||ka});
var la="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ma;
if("function"==typeof Object.setPrototypeOf)ma=Object.setPrototypeOf;else{var na;a:{var oa={a:!0},pa={};try{pa.__proto__=oa;na=pa.a;break a}catch(a){}na=!1}ma=na?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var qa=ma;
function v(a,b){a.prototype=la(b.prototype);a.prototype.constructor=a;if(qa)qa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.O=b.prototype}
function ra(){this.s=!1;this.j=null;this.h=void 0;this.g=1;this.m=this.l=0;this.H=this.i=null}
function sa(a){if(a.s)throw new TypeError("Generator is already running");a.s=!0}
ra.prototype.B=function(a){this.h=a};
function ua(a,b){a.i={Wa:b,eb:!0};a.g=a.l||a.m}
ra.prototype.return=function(a){this.i={return:a};this.g=this.m};
function w(a,b,c){a.g=c;return{value:b}}
ra.prototype.v=function(a){this.g=a};
function wa(a,b,c){a.l=b;void 0!=c&&(a.m=c)}
function xa(a,b){a.g=b;a.l=0}
function ya(a){a.l=0;var b=a.i.Wa;a.i=null;return b}
function Aa(a){a.H=[a.i];a.l=0;a.m=0}
function Ba(a){var b=a.H.splice(0)[0];(b=a.i=a.i||b)?b.eb?a.g=a.l||a.m:void 0!=b.v&&a.m<b.v?(a.g=b.v,a.i=null):a.g=a.m:a.g=0}
function Ca(a){this.g=new ra;this.h=a}
function Da(a,b){sa(a.g);var c=a.g.j;if(c)return Ea(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.g.return);
a.g.return(b);return Fa(a)}
function Ea(a,b,c,d){try{var e=b.call(a.g.j,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.g.s=!1,e;var f=e.value}catch(g){return a.g.j=null,ua(a.g,g),Fa(a)}a.g.j=null;d.call(a.g,f);return Fa(a)}
function Fa(a){for(;a.g.g;)try{var b=a.h(a.g);if(b)return a.g.s=!1,{value:b.value,done:!1}}catch(c){a.g.h=void 0,ua(a.g,c)}a.g.s=!1;if(a.g.i){b=a.g.i;a.g.i=null;if(b.eb)throw b.Wa;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Ga(a){this.next=function(b){sa(a.g);a.g.j?b=Ea(a,a.g.j.next,b,a.g.B):(a.g.B(b),b=Fa(a));return b};
this.throw=function(b){sa(a.g);a.g.j?b=Ea(a,a.g.j["throw"],b,a.g.B):(ua(a.g,b),b=Fa(a));return b};
this.return=function(b){return Da(a,b)};
this[Symbol.iterator]=function(){return this}}
function Ha(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function y(a){return Ha(new Ga(new Ca(a)))}
function Ia(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
r("Reflect.setPrototypeOf",function(a){return a?a:qa?function(b,c){try{return qa(b,c),!0}catch(d){return!1}}:null});
r("Promise",function(a){function b(g){this.g=0;this.i=void 0;this.h=[];this.s=!1;var h=this.j();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.g=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.h=function(g){if(null==this.g){this.g=[];var h=this;this.i(function(){h.m()})}this.g.push(g)};
var e=fa.setTimeout;c.prototype.i=function(g){e(g,0)};
c.prototype.m=function(){for(;this.g&&this.g.length;){var g=this.g;this.g=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.j(l)}}}this.g=null};
c.prototype.j=function(g){this.i(function(){throw g;})};
b.prototype.j=function(){function g(l){return function(m){k||(k=!0,l.call(h,m))}}
var h=this,k=!1;return{resolve:g(this.Fa),reject:g(this.m)}};
b.prototype.Fa=function(g){if(g===this)this.m(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.nb(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.Ea(g):this.l(g)}};
b.prototype.Ea=function(g){var h=void 0;try{h=g.then}catch(k){this.m(k);return}"function"==typeof h?this.ob(h,g):this.l(g)};
b.prototype.m=function(g){this.B(2,g)};
b.prototype.l=function(g){this.B(1,g)};
b.prototype.B=function(g,h){if(0!=this.g)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.g);this.g=g;this.i=h;2===this.g&&this.Ga();this.H()};
b.prototype.Ga=function(){var g=this;e(function(){if(g.aa()){var h=fa.console;"undefined"!==typeof h&&h.error(g.i)}},1)};
b.prototype.aa=function(){if(this.s)return!1;var g=fa.CustomEvent,h=fa.Event,k=fa.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=fa.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.i;return k(g)};
b.prototype.H=function(){if(null!=this.h){for(var g=0;g<this.h.length;++g)f.h(this.h[g]);this.h=null}};
var f=new c;b.prototype.nb=function(g){var h=this.j();g.va(h.resolve,h.reject)};
b.prototype.ob=function(g,h){var k=this.j();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(t,q){return"function"==typeof t?function(x){try{l(t(x))}catch(A){m(A)}}:q}
var l,m,p=new b(function(t,q){l=t;m=q});
this.va(k(g,l),k(h,m));return p};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.va=function(g,h){function k(){switch(l.g){case 1:g(l.i);break;case 2:h(l.i);break;default:throw Error("Unexpected state: "+l.g);}}
var l=this;null==this.h?f.h(k):this.h.push(k);this.s=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=u(g),m=l.next();!m.done;m=l.next())d(m.value).va(h,k)})};
b.all=function(g){var h=u(g),k=h.next();return k.done?d([]):new b(function(l,m){function p(x){return function(A){t[x]=A;q--;0==q&&l(t)}}
var t=[],q=0;do t.push(void 0),q++,d(k.value).va(p(t.length-1),m),k=h.next();while(!k.done)})};
return b});
r("WeakMap",function(a){function b(k){this.g=(h+=Math.random()+1).toString();if(k){k=u(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!ja(k,g)){var l=new c;da(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&e(m);return l(m)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),m=new a([[k,2],[l,3]]);if(2!=m.get(k)||3!=m.get(l))return!1;m.delete(k);m.set(l,4);return!m.has(k)&&4==m.get(l)}catch(p){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!ja(k,g))throw Error("WeakMap key fail: "+k);k[g][this.g]=l;return this};
b.prototype.get=function(k){return d(k)&&ja(k,g)?k[g][this.g]:void 0};
b.prototype.has=function(k){return d(k)&&ja(k,g)&&ja(k[g],this.g)};
b.prototype.delete=function(k){return d(k)&&ja(k,g)&&ja(k[g],this.g)?delete k[g][this.g]:!1};
return b});
r("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h.g;return ha(function(){if(l){for(;l.head!=h.g;)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var m=h.data_[l];if(m&&ja(h.data_,l))for(h=0;h<m.length;h++){var p=m[h];if(k!==k&&p.key!==p.key||k===p.key)return{id:l,list:m,index:h,G:p}}return{id:l,list:m,index:-1,G:void 0}}
function e(h){this.data_={};this.g=b();this.size=0;if(h){h=u(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(u([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),m=l.next();if(m.done||m.value[0]!=h||"s"!=m.value[1])return!1;m=l.next();return m.done||4!=m.value[0].x||"t"!=m.value[1]||!l.next().done?!1:!0}catch(p){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this.data_[l.id]=[]);l.G?l.G.value=k:(l.G={next:this.g,previous:this.g.previous,head:this.g,key:h,value:k},l.list.push(l.G),this.g.previous.next=l.G,this.g.previous=l.G,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.G&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.data_[h.id],h.G.previous.next=h.G.next,h.G.next.previous=h.G.previous,h.G.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.data_={};this.g=this.g.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).G};
e.prototype.get=function(h){return(h=d(this,h).G)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),m;!(m=l.next()).done;)m=m.value,h.call(k,m[1],m[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function La(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
r("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=La(this,b,"endsWith");b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});
r("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
r("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=La(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
r("Number.isFinite",function(a){return a?a:function(b){return"number"!==typeof b?!1:!isNaN(b)&&Infinity!==b&&-Infinity!==b}});
r("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
r("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
function Ma(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
r("Array.prototype.entries",function(a){return a?a:function(){return Ma(this,function(b,c){return[b,c]})}});
r("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
r("Array.prototype.keys",function(a){return a?a:function(){return Ma(this,function(b){return b})}});
r("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
r("Object.setPrototypeOf",function(a){return a||qa});
r("Set",function(a){function b(c){this.g=new Map;if(c){c=u(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.g.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(u([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.g.set(c,c);this.size=this.g.size;return this};
b.prototype.delete=function(c){c=this.g.delete(c);this.size=this.g.size;return c};
b.prototype.clear=function(){this.g.clear();this.size=0};
b.prototype.has=function(c){return this.g.has(c)};
b.prototype.entries=function(){return this.g.entries()};
b.prototype.values=function(){return this.g.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.g.forEach(function(f){return c.call(d,f,f,e)})};
return b});
r("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)ja(b,d)&&c.push([d,b[d]]);return c}});
r("Array.prototype.values",function(a){return a?a:function(){return Ma(this,function(b,c){return c})}});
r("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
r("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
r("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==La(this,b,"includes").indexOf(b,c||0)}});
var z=this||self;function B(a,b,c){a=a.split(".");c=c||z;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function C(a,b){a=a.split(".");b=b||z;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function Na(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Oa(a){var b=Na(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Pa(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Qa(a){return Object.prototype.hasOwnProperty.call(a,Ra)&&a[Ra]||(a[Ra]=++Sa)}
var Ra="closure_uid_"+(1E9*Math.random()>>>0),Sa=0;function Ta(a,b,c){return a.call.apply(a.bind,arguments)}
function Ua(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Va(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Va=Ta:Va=Ua;return Va.apply(null,arguments)}
function D(a,b){function c(){}
c.prototype=b.prototype;a.O=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.ec=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function Wa(a){return a}
;function Ya(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,Ya);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.cause=b)}
D(Ya,Error);Ya.prototype.name="CustomError";function Za(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.i=!b&&/[?&]ae=1(&|$)/.test(a);this.j=!b&&/[?&]ae=2(&|$)/.test(a);if((this.g=/[?&]adurl=([^&]*)/.exec(a))&&this.g[1]){try{var c=decodeURIComponent(this.g[1])}catch(d){c=null}this.h=c}}
;function $a(){}
function ab(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var bb=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},E=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},cb=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
E(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d},db=Array.prototype.every?function(a,b){return Array.prototype.every.call(a,b,void 0)}:function(a,b){for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&!b.call(void 0,d[e],e,a))return!1;
return!0};
function eb(a,b){b=bb(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}
function fb(a){return Array.prototype.concat.apply([],arguments)}
function gb(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function hb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Oa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function ib(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function kb(a){var b=lb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function mb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function nb(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();if("undefined"!==typeof Map&&a instanceof Map)return new Map(a);if("undefined"!==typeof Set&&a instanceof Set)return new Set(a);if(a instanceof Date)return new Date(a.getTime());var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=nb(a[c]);return b}
var ob="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function pb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<ob.length;f++)c=ob[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var vb;function wb(){}
function xb(a){return new wb(yb,a)}
var yb={};xb("");var zb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]},Ab=/&/g,Bb=/</g,Cb=/>/g,Db=/"/g,Eb=/'/g,Fb=/\x00/g,Gb=/[\x00&<>"']/;function Hb(a,b){this.g=b===Ib?a:""}
Hb.prototype.toString=function(){return this.g.toString()};
var Ib={},Jb=new Hb("about:invalid#zClosurez",Ib);function Kb(){var a=z.navigator;return a&&(a=a.userAgent)?a:""}
function G(a){return-1!=Kb().indexOf(a)}
;function Lb(){return(G("Chrome")||G("CriOS"))&&!G("Edge")||G("Silk")}
;var Mb={};function Nb(a){this.g=Mb===Mb?a:""}
Nb.prototype.toString=function(){return this.g.toString()};var Sb=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Tb(a){return a?decodeURI(a):a}
function Ub(a){return Tb(a.match(Sb)[3]||null)}
function Vb(a){var b=a.match(Sb);a=b[1];var c=b[2],d=b[3];b=b[4];var e="";a&&(e+=a+":");d&&(e+="//",c&&(e+=c+"@"),e+=d,b&&(e+=":"+b));return e}
function Wb(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)Wb(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function Xb(a){var b=[],c;for(c in a)Wb(c,a[c],b);return b.join("&")}
var Yb=/#|$/;function Zb(a,b){var c=a.search(Yb);a:{var d=0;for(var e=b.length;0<=(d=a.indexOf(b,d))&&d<c;){var f=a.charCodeAt(d-1);if(38==f||63==f)if(f=a.charCodeAt(d+e),!f||61==f||38==f||35==f)break a;d+=e+1}d=-1}if(0>d)return null;e=a.indexOf("&",d);if(0>e||e>c)e=c;d+=b.length+1;return decodeURIComponent(a.slice(d,-1!==e?e:0).replace(/\+/g," "))}
;function $b(){return G("iPhone")&&!G("iPod")&&!G("iPad")}
;function ac(a){ac[" "](a);return a}
ac[" "]=function(){};var bc=G("Opera"),cc=G("Trident")||G("MSIE"),dc=G("Edge"),ec=G("Gecko")&&!(-1!=Kb().toLowerCase().indexOf("webkit")&&!G("Edge"))&&!(G("Trident")||G("MSIE"))&&!G("Edge"),fc=-1!=Kb().toLowerCase().indexOf("webkit")&&!G("Edge");function gc(){var a=z.document;return a?a.documentMode:void 0}
var hc;a:{var ic="",kc=function(){var a=Kb();if(ec)return/rv:([^\);]+)(\)|;)/.exec(a);if(dc)return/Edge\/([\d\.]+)/.exec(a);if(cc)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(fc)return/WebKit\/(\S+)/.exec(a);if(bc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
kc&&(ic=kc?kc[1]:"");if(cc){var lc=gc();if(null!=lc&&lc>parseFloat(ic)){hc=String(lc);break a}}hc=ic}var mc=hc,nc;if(z.document&&cc){var oc=gc();nc=oc?oc:parseInt(mc,10)||void 0}else nc=void 0;var pc=nc;var qc=$b()||G("iPod"),rc=G("iPad");!G("Android")||Lb();Lb();var sc=G("Safari")&&!(Lb()||G("Coast")||G("Opera")||G("Edge")||G("Edg/")||G("OPR")||G("Firefox")||G("FxiOS")||G("Silk")||G("Android"))&&!($b()||G("iPad")||G("iPod"));var tc={},uc=null;
function vc(a,b){Oa(a);void 0===b&&(b=0);if(!uc){uc={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++){var f=c.concat(d[e].split(""));tc[e]=f;for(var g=0;g<f.length;g++){var h=f[g];void 0===uc[h]&&(uc[h]=g)}}}b=tc[b];c=Array(Math.floor(a.length/3));d=b[64]||"";for(e=f=0;f<a.length-2;f+=3){var k=a[f],l=a[f+1];h=a[f+2];g=b[k>>2];k=b[(k&3)<<4|l>>4];l=b[(l&15)<<2|h>>6];h=b[h&63];c[e++]=""+g+k+l+h}g=0;h=d;switch(a.length-
f){case 2:g=a[f+1],h=b[(g&15)<<2]||d;case 1:a=a[f],c[e]=""+b[a>>2]+b[(a&3)<<4|g>>4]+h+d}return c.join("")}
;var wc="undefined"!==typeof Uint8Array,xc={};var yc;function zc(a){if(xc!==xc)throw Error("illegal external caller");this.Ra=a;if(null!=a&&0===a.length)throw Error("ByteString should be constructed with non-empty values");}
zc.prototype.za=function(){return null==this.Ra};var Ac="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol(void 0):void 0;function Ec(a,b){Object.isFrozen(a)||(Ac?a[Ac]|=b:void 0!==a.M?a.M|=b:Object.defineProperties(a,{M:{value:b,configurable:!0,writable:!0,enumerable:!1}}))}
function Fc(a,b){Object.isExtensible(a)&&(Ac?a[Ac]&&(a[Ac]&=~b):void 0!==a.M&&(a.M&=~b))}
function Gc(a){var b;Ac?b=a[Ac]:b=a.M;return null==b?0:b}
function Hc(a,b){Ac?a[Ac]=b:void 0!==a.M?a.M=b:Object.defineProperties(a,{M:{value:b,configurable:!0,writable:!0,enumerable:!1}})}
function Ic(a){Ec(a,1);return a}
function Jc(a){Ec(a,17);return a}
function H(a){return a?!!(Gc(a)&2):!1}
function Kc(a){Ec(a,16);return a}
function Lc(a){if(!Array.isArray(a))throw Error("cannot mark non-array as shared mutably");Fc(a,16)}
function Mc(a,b){Hc(b,(Gc(a)|0)&-51)}
;var Nc={};function Oc(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}
var Pc,Qc=Object.freeze(Ic([]));function Rc(a){if(H(a.o))throw Error("Cannot mutate an immutable Message");}
;function Sc(a){return a.displayName||a.name||"unknown type name"}
function Tc(a,b){if(!(a instanceof b))throw Error("Expected instanceof "+Sc(b)+" but got "+(a&&Sc(a.constructor)));return a}
;function Uc(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "object":if(a&&!Array.isArray(a)){if(wc&&null!=a&&a instanceof Uint8Array)return vc(a);if(a instanceof zc){var b=a.Ra;return null==b?"":"string"===typeof b?b:a.Ra=vc(b)}}}return a}
;function Vc(a,b,c,d){if(null!=a){if(Array.isArray(a))a=Wc(a,b,c,void 0!==d);else if(Oc(a)){var e={},f;for(f in a)e[f]=Vc(a[f],b,c,d);a=e}else a=b(a,d);return a}}
function Wc(a,b,c,d){d=d?!!(Gc(a)&16):void 0;var e=Array.prototype.slice.call(a);c(a,e);for(a=0;a<e.length;a++)e[a]=Vc(e[a],b,c,d);return e}
function Xc(a){return a.Ma===Nc?a.toJSON():Uc(a)}
function Yc(a){if(!a)return a;if("object"===typeof a){if(wc&&null!=a&&a instanceof Uint8Array)return new Uint8Array(a);if(a.Ma===Nc)return a.clone()}return a}
function Zc(){}
;function $c(a,b,c){return-1===b?null:b>=a.W?a.D?a.D[b]:void 0:(void 0===c?0:c)&&a.D&&(c=a.D[b],null!=c)?c:a.o[b+a.S]}
function I(a,b,c,d,e){d=void 0===d?!1:d;(void 0===e?0:e)||Rc(a);a.cb&&(a.cb=void 0);if(b>=a.W||d)return(a.D||(a.D=a.o[a.W+a.S]={}))[b]=c,a;void 0!==a.D&&a.W>=a.o.length?(d=a.o.length-1,e=b+a.S,e>=d?(a.o[d]=void 0,a.o[e]=c,a.o.push(a.D)):a.o[e]=c):a.o[b+a.S]=c;void 0!==a.D&&b in a.D&&delete a.D[b];return a}
function ad(a,b,c,d){var e=$c(a,b,d);Array.isArray(e)||(e=Qc);var f=Gc(e);f&1||Ic(e);H(a.o)?c&1||(Ec(e,2),Object.freeze(e)):e===Qc||!(c&1&&c&2)&&f&2?(e=Ic(Array.prototype.slice.call(e)),I(a,b,e,d)):!(c&2)&&f&16&&Lc(e);return e}
function bd(a,b,c,d){Rc(a);(c=cd(a,c))&&c!==b&&null!=d&&I(a,c,void 0,!1);I(a,b,d)}
function cd(a,b){for(var c=0,d=0;d<b.length;d++){var e=b[d];null!=$c(a,e)&&(0!==c&&I(a,c,void 0,!1,!0),c=e)}return c}
function dd(a,b,c){var d=void 0===d?!1:d;var e=$c(a,c,d);var f=!1;var g=null==e||"object"!==typeof e||(f=Array.isArray(e))||e.Ma!==Nc?f?new b(e):void 0:e;g!==e&&null!=g&&(I(a,c,g,d,!0),Ec(g.o,Gc(a.o)&-33));b=g;if(null==b)return b;H(b.o)&&!H(a.o)&&(b=ed(b),I(a,c,b,d));return b}
function fd(a,b,c,d,e){e=void 0===e?!0:e;a.g||(a.g={});var f=a.g[c];d=ad(a,c,2|(e?1:0),d);var g=!!(Gc(a.o)&16),h=H(d);h=H(a.o)||h;if(!f){f=[];for(var k=h,l=0;l<d.length;l++){var m=d[l];k=k||H(m);var p=b,t=g,q=!1;q=void 0===q?!1:q;t=void 0===t?!1:t;m=Array.isArray(m)?new p(t?Kc(m):m):q?new p:void 0;void 0!==m&&(f.push(m),h&&Ec(m.o,2))}a.g[c]=f;b=!k;Object.isFrozen(d)||(g=Gc(d)|33,Hc(d,b?g|8:g&-9))}e=h||e;d=H(f);e&&!d&&(Object.isFrozen(f)&&(a.g[c]=f=f.slice()),Ec(f,2),Object.freeze(f));!e&&d&&(a.g[c]=
f=f.slice());return f}
function J(a,b,c,d){Rc(a);null!=d?Tc(d,b):d=void 0;return I(a,c,d)}
function gd(a,b,c,d,e){Rc(a);null!=e?Tc(e,b):e=void 0;bd(a,c,d,e)}
function hd(a,b,c,d){Rc(a);if(null!=d){var e=Ic([]);for(var f=!1,g=0;g<d.length;g++)e[g]=Tc(d[g],b).o,f=f||H(e[g]);a.g||(a.g={});a.g[c]=d;b=e;f?Fc(b,8):Ec(b,8)}else a.g&&(a.g[c]=void 0),e=Qc;return I(a,c,e)}
function id(a,b,c,d){Rc(a);var e=fd(a,c,b,void 0,!1);c=null!=d?Tc(d,c):new c;a=ad(a,b,2);e.push(c);a.push(c.o);H(c.o)&&Fc(a,8)}
function jd(a,b){return $c(a,b)}
function kd(a,b){a=$c(a,b);return null==a?"":a}
;function ld(a,b,c,d,e,f){(a=a.g&&a.g[c])?(e=f.Ia?Ic(a.slice()):a,hd(b,0<e.length?e[0].constructor:void 0,c,e)):(wc&&d instanceof Uint8Array?e=d.length?new zc(new Uint8Array(d)):yc||(yc=new zc(null)):(Array.isArray(d)&&(e?Ec(d,2):d&&Gc(d)&1&&f.Ia?(e=Array.prototype.slice.call(d),Hc(e,(Gc(d)|0)&-51),d=e):Lc(d)),e=d),I(b,c,e))}
;function L(a,b,c){null==a&&(a=md);md=null;var d=this.constructor.g||0,e=0<d,f=this.constructor.h,g,h=!1;if(a){if(g=!!(Gc(a)&16))h=Gc(a),Hc(a,h|32),h=!!(h&32)}else g=f?[f]:[],Ec(g,48),a=g,g=!0;e&&0<a.length&&Oc(a[a.length-1])&&"g"in a[a.length-1]&&(d=0);this.S=(f?0:-1)-d;this.g=void 0;this.o=a;a:{f=this.o.length;d=f-1;if(f&&(f=this.o[d],Oc(f))){this.D=f;b=Object.keys(f);0<b.length&&db(b,isNaN)?this.W=Number.MAX_VALUE:this.W=d-this.S;break a}void 0!==b&&-1<b?(this.W=Math.max(b,d+1-this.S),this.D=void 0):
this.W=Number.MAX_VALUE}if(!e&&this.D&&"g"in this.D)throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');if(c)for(e=g&&!h?Jc:Ic,b=0;b<c.length;b++)g=c[b],(h=$c(this,g))?Array.isArray(h)&&e(h):I(this,g,Qc,!1,!0)}
L.prototype.toJSON=function(){var a=this.o,b;Pc?b=a:b=Wc(a,Xc,Zc);return b};
function nd(a){Pc=!0;try{return JSON.stringify(a.toJSON(),od)}finally{Pc=!1}}
L.prototype.clone=function(){var a=Wc(this.o,Yc,Mc);Kc(a);md=a;a=new this.constructor(a);md=null;pd(a,this);return a};
function ed(a){if(H(a.o)){var b={Ia:!0},c=H(a.o);if(c&&!b.Ia)throw Error("copyRepeatedFields must be true for frozen messages");c||Lc(a.o);var d=new a.constructor;a.ja&&(d.ja=a.ja.slice());for(var e=a.o,f=0;f<e.length;f++){var g=e[f];if(f===e.length-1&&Oc(g))for(var h in g){var k=+h;Number.isNaN(k)?(d.D||(d.D=d.o[d.W+d.S]={}))[h]=g[h]:ld(a,d,k,g[h],c,b)}else ld(a,d,f-a.S,g,c,b)}d.cb=a;a=d}return a}
L.prototype.Ma=Nc;L.prototype.toString=function(){return this.o.toString()};
function od(a,b){return Uc(b)}
function pd(a,b){b.ja&&(a.ja=b.ja.slice());var c=b.g;if(c){b=b.D;for(var d in c){var e=c[d];if(e){var f=!(!b||!b[d]),g=+d;if(Array.isArray(e)){if(e.length){var h=a,k=f;k=void 0===k?!1:k;var l=H(h.o);f=fd(h,e[0].constructor,g,k,l);g=ad(h,g,3,k);if(h=!l&&g){if(!g)throw Error("cannot check mutability state of non-array");h=!(Gc(g)&8)}if(h){for(h=0;h<f.length;h++)(l=f[h])&&H(l.o)&&(f[h]=ed(f[h]),g[h]=f[h].o);Ec(g,8)}for(g=0;g<Math.min(f.length,e.length);g++)pd(f[g],e[g])}}else throw Error("unexpected object: type: "+
Na(e)+": "+e);}}}}
var md;var qd=window;xb("csi.gstatic.com");xb("googleads.g.doubleclick.net");xb("partner.googleadservices.com");xb("pubads.g.doubleclick.net");xb("securepubads.g.doubleclick.net");xb("tpc.googlesyndication.com");function rd(a){var b=C("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||z.$googDebugFname||b}catch(g){e="Not available",c=!0}b=sd(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,td[c])c=td[c];else{c=String(c);if(!td[c]){var f=/function\s+([^\(]+)/m.exec(c);td[c]=f?f[1]:"[Anonymous]"}c=td[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return{message:a.message,name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:a.stack}}
function sd(a,b){b||(b={});b[ud(a)]=!0;var c=a.stack||"";(a=a.cause)&&!b[ud(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=sd(a,b));return c}
function ud(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var td={};/*

 SPDX-License-Identifier: Apache-2.0
*/
var vd;try{new URL("s://g"),vd=!0}catch(a){vd=!1}var wd=vd;function xd(a,b){a.removeAttribute("srcdoc");if(b instanceof Hb)b instanceof Hb&&b.constructor===Hb?b=b.g:(Na(b),b="type_error:SafeUrl");else{b:if(wd){try{var c=new URL(b)}catch(d){c="https:";break b}c=c.protocol}else c:{c=document.createElement("a");try{c.href=b}catch(d){c=void 0;break c}c=c.protocol;c=":"===c||""===c?"https:":c}b="javascript:"!==c?b:void 0}void 0!==b&&(a.src=b);for(b="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-storage-access-by-user-activation".split(" ");0<
a.sandbox.length;)a.sandbox.remove(a.sandbox.item(0));for(c=0;c<b.length;c++)a.sandbox.supports&&!a.sandbox.supports(b[c])||a.sandbox.add(b[c])}
;function yd(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
n=yd.prototype;n.clone=function(){return new yd(this.x,this.y)};
n.equals=function(a){return a instanceof yd&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
n.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
n.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
n.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};function zd(a,b){this.width=a;this.height=b}
n=zd.prototype;n.clone=function(){return new zd(this.width,this.height)};
n.aspectRatio=function(){return this.width/this.height};
n.za=function(){return!(this.width*this.height)};
n.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
n.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
n.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Ad(){var a=document;var b="IFRAME";"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
function Bd(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function Cd(a){var b=Dd;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function Ed(){var a=[];Cd(function(b){a.push(b)});
return a}
var Dd={Lb:"allow-forms",Mb:"allow-modals",Nb:"allow-orientation-lock",Ob:"allow-pointer-lock",Pb:"allow-popups",Qb:"allow-popups-to-escape-sandbox",Rb:"allow-presentation",Sb:"allow-same-origin",Tb:"allow-scripts",Ub:"allow-top-navigation",Vb:"allow-top-navigation-by-user-activation"},Fd=ab(function(){return Ed()});
function Gd(){var a=Hd(),b={};E(Fd(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function Hd(){var a=void 0===a?document:a;return a.createElement("iframe")}
;function Id(a){this.Eb=a}
function Jd(a){return new Id(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var Kd=[Jd("data"),Jd("http"),Jd("https"),Jd("mailto"),Jd("ftp"),new Id(function(a){return/^[^:]*([/?#]|$)/.test(a)})];
function Nd(a,b){b=void 0===b?Kd:b;for(var c=0;c<b.length;++c){var d=b[c];if(d instanceof Id&&d.Eb(a))return new Hb(a,Ib)}}
function Od(a){var b=void 0===b?Kd:b;return Nd(a,b)||Jb}
;var Pd=(new Date).getTime();function Qd(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==
c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;var Rd="client_dev_domain client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");ia(Rd);function Sd(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=l=0}
function b(p){for(var t=g,q=0;64>q;q+=4)t[q/4]=p[q]<<24|p[q+1]<<16|p[q+2]<<8|p[q+3];for(q=16;80>q;q++)p=t[q-3]^t[q-8]^t[q-14]^t[q-16],t[q]=(p<<1|p>>>31)&4294967295;p=e[0];var x=e[1],A=e[2],F=e[3],K=e[4];for(q=0;80>q;q++){if(40>q)if(20>q){var M=F^x&(A^F);var N=1518500249}else M=x^A^F,N=1859775393;else 60>q?(M=x&A|F&(x|A),N=2400959708):(M=x^A^F,N=3395469782);M=((p<<5|p>>>27)&4294967295)+M+K+N+t[q]&4294967295;K=F;F=A;A=(x<<30|x>>>2)&4294967295;x=p;p=M}e[0]=e[0]+p&4294967295;e[1]=e[1]+x&4294967295;e[2]=
e[2]+A&4294967295;e[3]=e[3]+F&4294967295;e[4]=e[4]+K&4294967295}
function c(p,t){if("string"===typeof p){p=unescape(encodeURIComponent(p));for(var q=[],x=0,A=p.length;x<A;++x)q.push(p.charCodeAt(x));p=q}t||(t=p.length);q=0;if(0==l)for(;q+64<t;)b(p.slice(q,q+64)),q+=64,m+=64;for(;q<t;)if(f[l++]=p[q++],m++,64==l)for(l=0,b(f);q+64<t;)b(p.slice(q,q+64)),q+=64,m+=64}
function d(){var p=[],t=8*m;56>l?c(h,56-l):c(h,64-(l-56));for(var q=63;56<=q;q--)f[q]=t&255,t>>>=8;b(f);for(q=t=0;5>q;q++)for(var x=24;0<=x;x-=8)p[t++]=e[q]>>x&255;return p}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,m;a();return{reset:a,update:c,digest:d,tb:function(){for(var p=d(),t="",q=0;q<p.length;q++)t+="0123456789ABCDEF".charAt(Math.floor(p[q]/16))+"0123456789ABCDEF".charAt(p[q]%16);return t}}}
;function Td(a,b,c){var d=String(z.location.href);return d&&a&&b?[b,Ud(Qd(d),a,c||null)].join(" "):null}
function Ud(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],E(d,function(h){e.push(h)}),Vd(e.join(" "));
var f=[],g=[];E(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];E(d,function(h){e.push(h)});
a=Vd(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Vd(a){var b=Sd();b.update(a);return b.tb().toLowerCase()}
;var Wd={};function Xd(a){this.g=a||{cookie:""}}
n=Xd.prototype;n.isEnabled=function(){if(!z.navigator.cookieEnabled)return!1;if(!this.za())return!0;this.set("TESTCOOKIESENABLED","1",{Ka:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
n.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.nc;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.Ka}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString();this.g.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+
e:"")};
n.get=function(a,b){for(var c=a+"=",d=(this.g.cookie||"").split(";"),e=0,f;e<d.length;e++){f=zb(d[e]);if(0==f.lastIndexOf(c,0))return f.slice(c.length);if(f==a)return""}return b};
n.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{Ka:0,path:b,domain:c});return d};
n.za=function(){return!this.g.cookie};
n.clear=function(){for(var a=(this.g.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=zb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var Yd=new Xd("undefined"==typeof document?null:document);function Zd(a){return!!Wd.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function $d(a,b,c,d){(a=z[a])||(a=(new Xd(document)).get(b));return a?Td(a,c,d):null}
function ae(a){var b=void 0===b?!1:b;var c=Qd(String(z.location.href)),d=[];var e=b;e=void 0===e?!1:e;var f=z.__SAPISID||z.__APISID||z.__3PSAPISID||z.__OVERRIDE_SID;Zd(e)&&(f=f||z.__1PSAPISID);if(f)e=!0;else{var g=new Xd(document);f=g.get("SAPISID")||g.get("APISID")||g.get("__Secure-3PAPISID")||g.get("SID");Zd(e)&&(f=f||g.get("__Secure-1PAPISID"));e=!!f}e&&(e=(c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:"))?z.__SAPISID:z.__APISID,e||(e=new Xd(document),
e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID")),(e=e?Td(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e),c&&Zd(b)&&((b=$d("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=$d("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&d.push(a)));return 0==d.length?null:d.join(" ")}
;function be(){this.i=this.i;this.m=this.m}
be.prototype.i=!1;be.prototype.dispose=function(){this.i||(this.i=!0,this.ca())};
be.prototype.ca=function(){if(this.m)for(;this.m.length;)this.m.shift()()};function ce(a,b){this.type=a;this.g=this.target=b;this.defaultPrevented=this.i=!1}
ce.prototype.stopPropagation=function(){this.i=!0};
ce.prototype.preventDefault=function(){this.defaultPrevented=!0};var de=function(){if(!z.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{z.addEventListener("test",function(){},b),z.removeEventListener("test",function(){},b)}catch(c){}return a}();function ee(a,b){ce.call(this,a?a.type:"");this.relatedTarget=this.g=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.h=null;a&&this.init(a,b)}
D(ee,ce);var fe={2:"touch",3:"pen",4:"mouse"};
ee.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.g=b;if(b=a.relatedTarget){if(ec){a:{try{ac(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:fe[a.pointerType]||"";this.state=a.state;
this.h=a;a.defaultPrevented&&ee.O.preventDefault.call(this)};
ee.prototype.stopPropagation=function(){ee.O.stopPropagation.call(this);this.h.stopPropagation?this.h.stopPropagation():this.h.cancelBubble=!0};
ee.prototype.preventDefault=function(){ee.O.preventDefault.call(this);var a=this.h;a.preventDefault?a.preventDefault():a.returnValue=!1};var ge="closure_listenable_"+(1E6*Math.random()|0);var he=0;function ie(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.ya=e;this.key=++he;this.la=this.ta=!1}
function je(a){a.la=!0;a.listener=null;a.proxy=null;a.src=null;a.ya=null}
;function ke(a){this.src=a;this.listeners={};this.g=0}
ke.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.g++);var g=le(a,b,d,e);-1<g?(b=a[g],c||(b.ta=!1)):(b=new ie(b,this.src,f,!!d,e),b.ta=c,a.push(b));return b};
ke.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=le(e,b,c,d);return-1<b?(je(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.g--),!0):!1};
function me(a,b){var c=b.type;c in a.listeners&&eb(a.listeners[c],b)&&(je(b),0==a.listeners[c].length&&(delete a.listeners[c],a.g--))}
function le(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.la&&f.listener==b&&f.capture==!!c&&f.ya==d)return e}return-1}
;var ne="closure_lm_"+(1E6*Math.random()|0),oe={},pe=0;function qe(a,b,c,d,e){if(d&&d.once)re(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)qe(a,b[f],c,d,e);else c=se(c),a&&a[ge]?a.Y(b,c,Pa(d)?!!d.capture:!!d,e):te(a,b,c,!1,d,e)}
function te(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Pa(e)?!!e.capture:!!e,h=ue(a);h||(a[ne]=h=new ke(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=ve();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)de||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(we(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");pe++}}
function ve(){function a(c){return b.call(a.src,a.listener,c)}
var b=xe;return a}
function re(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)re(a,b[f],c,d,e);else c=se(c),a&&a[ge]?a.g.add(String(b),c,!0,Pa(d)?!!d.capture:!!d,e):te(a,b,c,!0,d,e)}
function ye(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)ye(a,b[f],c,d,e);else(d=Pa(d)?!!d.capture:!!d,c=se(c),a&&a[ge])?a.g.remove(String(b),c,d,e):a&&(a=ue(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=le(b,c,d,e)),(c=-1<a?b[a]:null)&&ze(c))}
function ze(a){if("number"!==typeof a&&a&&!a.la){var b=a.src;if(b&&b[ge])me(b.g,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(we(c),d):b.addListener&&b.removeListener&&b.removeListener(d);pe--;(c=ue(b))?(me(c,a),0==c.g&&(c.src=null,b[ne]=null)):je(a)}}}
function we(a){return a in oe?oe[a]:oe[a]="on"+a}
function xe(a,b){if(a.la)a=!0;else{b=new ee(b,this);var c=a.listener,d=a.ya||a.src;a.ta&&ze(a);a=c.call(d,b)}return a}
function ue(a){a=a[ne];return a instanceof ke?a:null}
var Ae="__closure_events_fn_"+(1E9*Math.random()>>>0);function se(a){if("function"===typeof a)return a;a[Ae]||(a[Ae]=function(b){return a.handleEvent(b)});
return a[Ae]}
;function Be(){be.call(this);this.g=new ke(this);this.aa=this;this.B=null}
D(Be,be);Be.prototype[ge]=!0;Be.prototype.addEventListener=function(a,b,c,d){qe(this,a,b,c,d)};
Be.prototype.removeEventListener=function(a,b,c,d){ye(this,a,b,c,d)};
function Ce(a,b){var c=a.B;if(c){var d=[];for(var e=1;c;c=c.B)d.push(c),++e}a=a.aa;c=b.type||b;"string"===typeof b?b=new ce(b,a):b instanceof ce?b.target=b.target||a:(e=b,b=new ce(c,a),pb(b,e));e=!0;if(d)for(var f=d.length-1;!b.i&&0<=f;f--){var g=b.g=d[f];e=De(g,c,!0,b)&&e}b.i||(g=b.g=a,e=De(g,c,!0,b)&&e,b.i||(e=De(g,c,!1,b)&&e));if(d)for(f=0;!b.i&&f<d.length;f++)g=b.g=d[f],e=De(g,c,!1,b)&&e}
Be.prototype.ca=function(){Be.O.ca.call(this);if(this.g){var a=this.g,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,je(d[e]);delete a.listeners[c];a.g--}}this.B=null};
Be.prototype.Y=function(a,b,c,d){return this.g.add(String(a),b,!1,c,d)};
function De(a,b,c,d){b=a.g.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.la&&g.capture==c){var h=g.listener,k=g.ya||g.src;g.ta&&me(a.g,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function Ee(a){Be.call(this);var b=this;this.H=this.j=0;this.K=null!=a?a:{R:function(e,f){return setTimeout(e,f)},
ga:function(e){clearTimeout(e)}};
var c,d;this.h=null!=(d=null==(c=window.navigator)?void 0:c.onLine)?d:!0;this.l=function(){return y(function(e){return w(e,Fe(b),0)})};
window.addEventListener("offline",this.l);window.addEventListener("online",this.l);this.H||Ge(this)}
v(Ee,Be);function He(){var a=Ie;Ee.g||(Ee.g=new Ee(a));return Ee.g}
Ee.prototype.dispose=function(){window.removeEventListener("offline",this.l);window.removeEventListener("online",this.l);this.K.ga(this.H);delete Ee.g};
Ee.prototype.J=function(){return this.h};
function Ge(a){a.H=a.K.R(function(){var b;return y(function(c){if(1==c.g)return a.h?(null==(b=window.navigator)?0:b.onLine)?c.v(3):w(c,Fe(a),3):w(c,Fe(a),3);Ge(a);c.g=0})},3E4)}
function Fe(a,b){return a.s?a.s:a.s=new Promise(function(c){var d,e,f,g;return y(function(h){switch(h.g){case 1:return d=window.AbortController?new window.AbortController:void 0,f=null==(e=d)?void 0:e.signal,g=!1,wa(h,2,3),d&&(a.j=a.K.R(function(){d.abort()},b||2E4)),w(h,fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:Aa(h);a.s=void 0;a.j&&(a.K.ga(a.j),a.j=0);g!==a.h&&(a.h=g,a.h?Ce(a,"networkstatus-online"):Ce(a,"networkstatus-offline"));c(g);Ba(h);break;case 2:ya(h),g=!1,h.v(3)}})})}
;function Je(){this.data_=[];this.g=-1}
Je.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&Number.isInteger(a)&&this.data_[a]!==b&&(this.data_[a]=b,this.g=-1)};
Je.prototype.get=function(a){return!!this.data_[a]};
function Ke(a){-1===a.g&&(a.g=cb(a.data_,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.g}
;function Le(a){L.call(this,a,-1,Me)}
v(Le,L);function Ne(a,b){return I(a,2,b)}
function Oe(a,b){return I(a,3,b)}
function Pe(a,b){return I(a,4,b)}
function Qe(a,b){return I(a,5,b)}
function Re(a,b){return I(a,9,b)}
function Se(a,b){return hd(a,Te,10,b)}
function Ue(a,b){return I(a,11,b)}
function Ve(a,b){return I(a,1,b)}
function We(a,b){return I(a,7,b)}
function Te(a){L.call(this,a)}
v(Te,L);var Me=[10,6];var Xe="platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");function Ye(a){var b;return null!=(b=a.google_tag_data)?b:a.google_tag_data={}}
function Ze(a){var b,c;return"function"===typeof(null==(b=a.navigator)?void 0:null==(c=b.userAgentData)?void 0:c.getHighEntropyValues)}
function $e(){var a=window;if(!Ze(a))return null;var b=Ye(a);if(b.uach_promise)return b.uach_promise;a=a.navigator.userAgentData.getHighEntropyValues(Xe).then(function(c){null!=b.uach||(b.uach=c);return c});
return b.uach_promise=a}
function af(a){var b;return Ue(Se(Qe(Ne(Ve(Pe(We(Re(Oe(new Le,a.architecture||""),a.bitness||""),a.mobile||!1),a.model||""),a.platform||""),a.platformVersion||""),a.uaFullVersion||""),(null==(b=a.fullVersionList)?void 0:b.map(function(c){var d=new Te;d=I(d,1,c.brand);return I(d,2,c.version)}))||[]),a.wow64||!1)}
function bf(){var a,b;return null!=(b=null==(a=$e())?void 0:a.then(function(c){return af(c)}))?b:null}
;function cf(a,b){this.i=a;this.j=b;this.h=0;this.g=null}
cf.prototype.get=function(){if(0<this.h){this.h--;var a=this.g;this.g=a.next;a.next=null}else a=this.i();return a};
function df(a,b){a.j(b);100>a.h&&(a.h++,b.next=a.g,a.g=b)}
;var ef;function ff(){var a=z.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!G("Presto")&&(a=function(){var e=Ad();e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Va(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!G("Trident")&&!G("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.Ua;c.Ua=null;e()}};
return function(e){d.next={Ua:e};d=d.next;b.port2.postMessage(0)}}return function(e){z.setTimeout(e,0)}}
;function gf(a){z.setTimeout(function(){throw a;},0)}
;function hf(){this.h=this.g=null}
hf.prototype.add=function(a,b){var c=jf.get();c.set(a,b);this.h?this.h.next=c:this.g=c;this.h=c};
hf.prototype.remove=function(){var a=null;this.g&&(a=this.g,this.g=this.g.next,this.g||(this.h=null),a.next=null);return a};
var jf=new cf(function(){return new kf},function(a){return a.reset()});
function kf(){this.next=this.scope=this.g=null}
kf.prototype.set=function(a,b){this.g=a;this.scope=b;this.next=null};
kf.prototype.reset=function(){this.next=this.scope=this.g=null};var lf,mf=!1,nf=new hf;function of(a,b){lf||pf();mf||(lf(),mf=!0);nf.add(a,b)}
function pf(){if(z.Promise&&z.Promise.resolve){var a=z.Promise.resolve(void 0);lf=function(){a.then(qf)}}else lf=function(){var b=qf;
"function"!==typeof z.setImmediate||z.Window&&z.Window.prototype&&!G("Edge")&&z.Window.prototype.setImmediate==z.setImmediate?(ef||(ef=ff()),ef(b)):z.setImmediate(b)}}
function qf(){for(var a;a=nf.remove();){try{a.g.call(a.scope)}catch(b){gf(b)}df(jf,a)}mf=!1}
;function rf(a,b){this.g=a[z.Symbol.iterator]();this.h=b}
rf.prototype[Symbol.iterator]=function(){return this};
rf.prototype.next=function(){var a=this.g.next();return{value:a.done?void 0:this.h.call(void 0,a.value),done:a.done}};
function sf(a,b){return new rf(a,b)}
;function tf(){this.blockSize=-1}
;function uf(){this.blockSize=-1;this.blockSize=64;this.g=[];this.m=[];this.l=[];this.i=[];this.i[0]=128;for(var a=1;a<this.blockSize;++a)this.i[a]=0;this.j=this.h=0;this.reset()}
D(uf,tf);uf.prototype.reset=function(){this.g[0]=1732584193;this.g[1]=4023233417;this.g[2]=2562383102;this.g[3]=271733878;this.g[4]=3285377520;this.j=this.h=0};
function vf(a,b,c){c||(c=0);var d=a.l;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.g[0];c=a.g[1];var g=a.g[2],h=a.g[3],k=a.g[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.g[0]=a.g[0]+b&4294967295;a.g[1]=a.g[1]+c&4294967295;a.g[2]=a.g[2]+g&4294967295;a.g[3]=a.g[3]+h&4294967295;a.g[4]=a.g[4]+k&4294967295}
uf.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.m,f=this.h;d<b;){if(0==f)for(;d<=c;)vf(this,a,d),d+=this.blockSize;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){vf(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){vf(this,e);f=0;break}}this.h=f;this.j+=b}};
uf.prototype.digest=function(){var a=[],b=8*this.j;56>this.h?this.update(this.i,56-this.h):this.update(this.i,this.blockSize-(this.h-56));for(var c=this.blockSize-1;56<=c;c--)this.m[c]=b&255,b/=256;vf(this,this.m);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.g[c]>>d&255,++b;return a};function wf(){}
wf.prototype.next=function(){return xf};
var xf={done:!0,value:void 0};function yf(a){return{value:a,done:!1}}
wf.prototype.L=function(){return this};function zf(a){if(a instanceof Af||a instanceof Bf||a instanceof Cf)return a;if("function"==typeof a.next)return new Af(function(){return a});
if("function"==typeof a[Symbol.iterator])return new Af(function(){return a[Symbol.iterator]()});
if("function"==typeof a.L)return new Af(function(){return a.L()});
throw Error("Not an iterator or iterable.");}
function Af(a){this.h=a}
Af.prototype.L=function(){return new Bf(this.h())};
Af.prototype[Symbol.iterator]=function(){return new Cf(this.h())};
Af.prototype.g=function(){return new Cf(this.h())};
function Bf(a){this.h=a}
v(Bf,wf);Bf.prototype.next=function(){return this.h.next()};
Bf.prototype[Symbol.iterator]=function(){return new Cf(this.h)};
Bf.prototype.g=function(){return new Cf(this.h)};
function Cf(a){Af.call(this,function(){return a});
this.i=a}
v(Cf,Af);Cf.prototype.next=function(){return this.i.next()};function Df(a,b){this.h={};this.g=[];this.i=this.size=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof Df)for(c=Ef(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function Ef(a){Ff(a);return a.g.concat()}
n=Df.prototype;n.has=function(a){return Gf(this.h,a)};
n.equals=function(a,b){if(this===a)return!0;if(this.size!=a.size)return!1;b=b||Hf;Ff(this);for(var c,d=0;c=this.g[d];d++)if(!b(this.get(c),a.get(c)))return!1;return!0};
function Hf(a,b){return a===b}
n.za=function(){return 0==this.size};
n.clear=function(){this.h={};this.i=this.size=this.g.length=0};
n.remove=function(a){return this.delete(a)};
n.delete=function(a){return Gf(this.h,a)?(delete this.h[a],--this.size,this.i++,this.g.length>2*this.size&&Ff(this),!0):!1};
function Ff(a){if(a.size!=a.g.length){for(var b=0,c=0;b<a.g.length;){var d=a.g[b];Gf(a.h,d)&&(a.g[c++]=d);b++}a.g.length=c}if(a.size!=a.g.length){var e={};for(c=b=0;b<a.g.length;)d=a.g[b],Gf(e,d)||(a.g[c++]=d,e[d]=1),b++;a.g.length=c}}
n.get=function(a,b){return Gf(this.h,a)?this.h[a]:b};
n.set=function(a,b){Gf(this.h,a)||(this.size+=1,this.g.push(a),this.i++);this.h[a]=b};
n.forEach=function(a,b){for(var c=Ef(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
n.clone=function(){return new Df(this)};
n.keys=function(){return zf(this.L(!0)).g()};
n.values=function(){return zf(this.L(!1)).g()};
n.entries=function(){var a=this;return sf(this.keys(),function(b){return[b,a.get(b)]})};
n.L=function(a){Ff(this);var b=0,c=this.i,d=this,e=new wf;e.next=function(){if(c!=d.i)throw Error("The map has changed since the iterator was created");if(b>=d.g.length)return xf;var f=d.g[b++];return yf(a?f:d.h[f])};
return e};
function Gf(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;var eg=z.JSON.stringify;function fg(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function gg(a){this.g=0;this.s=void 0;this.j=this.h=this.i=null;this.m=this.l=!1;if(a!=$a)try{var b=this;a.call(void 0,function(c){hg(b,2,c)},function(c){hg(b,3,c)})}catch(c){hg(this,3,c)}}
function ig(){this.next=this.context=this.h=this.i=this.g=null;this.j=!1}
ig.prototype.reset=function(){this.context=this.h=this.i=this.g=null;this.j=!1};
var jg=new cf(function(){return new ig},function(a){a.reset()});
function kg(a,b,c){var d=jg.get();d.i=a;d.h=b;d.context=c;return d}
gg.prototype.then=function(a,b,c){return lg(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
gg.prototype.$goog_Thenable=!0;gg.prototype.cancel=function(a){if(0==this.g){var b=new mg(a);of(function(){ng(this,b)},this)}};
function ng(a,b){if(0==a.g)if(a.i){var c=a.i;if(c.h){for(var d=0,e=null,f=null,g=c.h;g&&(g.j||(d++,g.g==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.g&&1==d?ng(c,b):(f?(d=f,d.next==c.j&&(c.j=d),d.next=d.next.next):og(c),pg(c,e,3,b)))}a.i=null}else hg(a,3,b)}
function qg(a,b){a.h||2!=a.g&&3!=a.g||rg(a);a.j?a.j.next=b:a.h=b;a.j=b}
function lg(a,b,c,d){var e=kg(null,null,null);e.g=new gg(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.h=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof mg?g(h):f(k)}catch(l){g(l)}}:g});
e.g.i=a;qg(a,e);return e.g}
gg.prototype.H=function(a){this.g=0;hg(this,2,a)};
gg.prototype.aa=function(a){this.g=0;hg(this,3,a)};
function hg(a,b,c){if(0==a.g){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.g=1;a:{var d=c,e=a.H,f=a.aa;if(d instanceof gg){qg(d,kg(e||$a,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Pa(d))try{var k=d.then;if("function"===typeof k){sg(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.s=c,a.g=b,a.i=null,rg(a),3!=b||c instanceof mg||tg(a,c))}}
function sg(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function rg(a){a.l||(a.l=!0,of(a.B,a))}
function og(a){var b=null;a.h&&(b=a.h,a.h=b.next,b.next=null);a.h||(a.j=null);return b}
gg.prototype.B=function(){for(var a;a=og(this);)pg(this,a,this.g,this.s);this.l=!1};
function pg(a,b,c,d){if(3==c&&b.h&&!b.j)for(;a&&a.m;a=a.i)a.m=!1;if(b.g)b.g.i=null,ug(b,c,d);else try{b.j?b.i.call(b.context):ug(b,c,d)}catch(e){vg.call(null,e)}df(jg,b)}
function ug(a,b,c){2==b?a.i.call(a.context,c):a.h&&a.h.call(a.context,c)}
function tg(a,b){a.m=!0;of(function(){a.m&&vg.call(null,b)})}
var vg=gf;function mg(a){Ya.call(this,a)}
D(mg,Ya);mg.prototype.name="cancel";function O(a){be.call(this);this.s=1;this.j=[];this.l=0;this.g=[];this.h={};this.B=!!a}
D(O,be);n=O.prototype;n.subscribe=function(a,b,c){var d=this.h[a];d||(d=this.h[a]=[]);var e=this.s;this.g[e]=a;this.g[e+1]=b;this.g[e+2]=c;this.s=e+3;d.push(e);return e};
function wg(a,b,c){var d=xg;if(a=d.h[a]){var e=d.g;(a=a.find(function(f){return e[f+1]==b&&e[f+2]==c}))&&d.oa(a)}}
n.oa=function(a){var b=this.g[a];if(b){var c=this.h[b];0!=this.l?(this.j.push(a),this.g[a+1]=function(){}):(c&&eb(c,a),delete this.g[a],delete this.g[a+1],delete this.g[a+2])}return!!b};
n.ea=function(a,b){var c=this.h[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.B)for(e=0;e<c.length;e++){var g=c[e];yg(this.g[g+1],this.g[g+2],d)}else{this.l++;try{for(e=0,f=c.length;e<f&&!this.i;e++)g=c[e],this.g[g+1].apply(this.g[g+2],d)}finally{if(this.l--,0<this.j.length&&0==this.l)for(;c=this.j.pop();)this.oa(c)}}return 0!=e}return!1};
function yg(a,b,c){of(function(){a.apply(b,c)})}
n.clear=function(a){if(a){var b=this.h[a];b&&(b.forEach(this.oa,this),delete this.h[a])}else this.g.length=0,this.h={}};
n.ca=function(){O.O.ca.call(this);this.clear();this.j.length=0};function zg(a){this.g=a}
zg.prototype.set=function(a,b){void 0===b?this.g.remove(a):this.g.set(a,eg(b))};
zg.prototype.get=function(a){try{var b=this.g.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
zg.prototype.remove=function(a){this.g.remove(a)};function Ag(a){this.g=a}
D(Ag,zg);function Bg(a){this.data=a}
function Cg(a){return void 0===a||a instanceof Bg?a:new Bg(a)}
Ag.prototype.set=function(a,b){Ag.O.set.call(this,a,Cg(b))};
Ag.prototype.h=function(a){a=Ag.O.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Ag.prototype.get=function(a){if(a=this.h(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Dg(a){this.g=a}
D(Dg,Ag);Dg.prototype.set=function(a,b,c){if(b=Cg(b)){if(c){if(c<Date.now()){Dg.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Date.now()}Dg.O.set.call(this,a,b)};
Dg.prototype.h=function(a){var b=Dg.O.h.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Date.now()||c&&c>Date.now())Dg.prototype.remove.call(this,a);else return b}};function Eg(){}
;function Fg(){}
D(Fg,Eg);Fg.prototype[Symbol.iterator]=function(){return zf(this.L(!0)).g()};
Fg.prototype.clear=function(){var a=Array.from(this);a=u(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function Gg(a){this.g=a}
D(Gg,Fg);n=Gg.prototype;n.set=function(a,b){try{this.g.setItem(a,b)}catch(c){if(0==this.g.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
n.get=function(a){a=this.g.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
n.remove=function(a){this.g.removeItem(a)};
n.L=function(a){var b=0,c=this.g,d=new wf;d.next=function(){if(b>=c.length)return xf;var e=c.key(b++);if(a)return yf(e);e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return yf(e)};
return d};
n.clear=function(){this.g.clear()};
n.key=function(a){return this.g.key(a)};function Hg(){var a=null;try{a=window.localStorage||null}catch(b){}this.g=a}
D(Hg,Gg);function Ig(a,b){this.h=a;this.g=null;var c;if(c=cc)c=!(9<=Number(pc));if(c){Jg||(Jg=new Df);this.g=Jg.get(a);this.g||(b?this.g=document.getElementById(b):(this.g=document.createElement("userdata"),this.g.addBehavior("#default#userData"),document.body.appendChild(this.g)),Jg.set(a,this.g));try{this.g.load(this.h)}catch(d){this.g=null}}}
D(Ig,Fg);var Kg={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},Jg=null;function Lg(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return Kg[b]})}
n=Ig.prototype;n.set=function(a,b){this.g.setAttribute(Lg(a),b);Mg(this)};
n.get=function(a){a=this.g.getAttribute(Lg(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
n.remove=function(a){this.g.removeAttribute(Lg(a));Mg(this)};
n.L=function(a){var b=0,c=this.g.XMLDocument.documentElement.attributes,d=new wf;d.next=function(){if(b>=c.length)return xf;var e=c[b++];if(a)return yf(decodeURIComponent(e.nodeName.replace(/\./g,"%")).slice(1));e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return yf(e)};
return d};
n.clear=function(){for(var a=this.g.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);Mg(this)};
function Mg(a){try{a.g.save(a.h)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function Ng(a,b){this.h=a;this.g=b+"::"}
D(Ng,Fg);Ng.prototype.set=function(a,b){this.h.set(this.g+a,b)};
Ng.prototype.get=function(a){return this.h.get(this.g+a)};
Ng.prototype.remove=function(a){this.h.remove(this.g+a)};
Ng.prototype.L=function(a){var b=this.h[Symbol.iterator](),c=this,d=new wf;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.g.length)!=c.g;){e=b.next();if(e.done)return e;e=e.value}return yf(a?e.slice(c.g.length):c.h.get(e))};
return d};function Og(a){L.call(this,a)}
v(Og,L);Og.prototype.getKey=function(){return $c(this,1)};
Og.prototype.U=function(){return jd(this,2===cd(this,Pg)?2:-1)};
var Pg=[2,3,4,5,6];function Qg(a){L.call(this,a)}
v(Qg,L);function Rg(a){L.call(this,a)}
v(Rg,L);function Sg(a){L.call(this,a,-1,Tg)}
v(Sg,L);var Tg=[2];function Ug(a){L.call(this,a,-1,Vg)}
v(Ug,L);Ug.prototype.getPlayerType=function(){return $c(this,36)};
Ug.prototype.setHomeGroupInfo=function(a){return J(this,Sg,81,a)};
var Vg=[9,66,24,32,86,100,101];function Wg(a){L.call(this,a,-1,Xg)}
v(Wg,L);var Xg=[15,26,28];function Yg(a){L.call(this,a)}
v(Yg,L);function Zg(a){L.call(this,a,-1,$g)}
v(Zg,L);Zg.prototype.setSafetyMode=function(a){return I(this,5,a)};
var $g=[12];function ah(a){L.call(this,a,-1,bh)}
v(ah,L);var bh=[12];var ch={ac:"WEB_DISPLAY_MODE_UNKNOWN",Wb:"WEB_DISPLAY_MODE_BROWSER",Yb:"WEB_DISPLAY_MODE_MINIMAL_UI",Zb:"WEB_DISPLAY_MODE_STANDALONE",Xb:"WEB_DISPLAY_MODE_FULLSCREEN"};function dh(a){L.call(this,a,-1,eh)}
v(dh,L);function fh(a){L.call(this,a)}
v(fh,L);fh.prototype.getKey=function(){return kd(this,1)};
fh.prototype.U=function(){return kd(this,2)};
var eh=[4,5];function gh(a){L.call(this,a)}
v(gh,L);function hh(a){L.call(this,a)}
v(hh,L);var ih=[2,3,4];function jh(a){L.call(this,a)}
v(jh,L);function kh(a){L.call(this,a)}
v(kh,L);function lh(a){L.call(this,a)}
v(lh,L);function mh(a){L.call(this,a,-1,nh)}
v(mh,L);var nh=[10,17];function oh(a){L.call(this,a)}
v(oh,L);function ph(a){L.call(this,a)}
v(ph,L);function qh(a){L.call(this,a)}
v(qh,L);function rh(a){L.call(this,a,442)}
v(rh,L);
var sh=[23,24,11,6,7,5,2,3,13,20,21,22,28,32,37,229,241,45,59,225,288,72,73,78,208,156,202,215,74,76,79,80,111,85,91,97,100,102,105,119,126,127,136,146,148,151,157,158,159,163,164,168,176,222,383,177,178,179,411,184,188,189,190,191,193,194,195,196,197,198,199,200,201,402,320,203,204,205,206,258,259,260,261,327,209,219,226,227,232,233,234,240,244,247,248,249,251,256,257,266,254,255,270,272,278,291,293,300,304,308,309,310,311,313,314,319,321,323,324,328,330,331,332,334,337,338,340,344,348,350,351,352,
353,354,355,356,357,358,361,363,364,368,369,370,373,374,375,378,380,381,388,389,403,410,412,429,413,414,415,416,417,418,430,423,424,425,426,427,431,117,439,441];function th(a){L.call(this,a)}
v(th,L);function uh(a){L.call(this,a)}
v(uh,L);uh.prototype.getPlaylistId=function(){return jd(this,2===cd(this,vh)?2:-1)};
var vh=[1,2];function wh(a){L.call(this,a,-1,xh)}
v(wh,L);var xh=[3];var yh=z.window,zh,Ah,Bh=(null==yh?void 0:null==(zh=yh.yt)?void 0:zh.config_)||(null==yh?void 0:null==(Ah=yh.ytcfg)?void 0:Ah.data_)||{};B("yt.config_",Bh);function Ch(){var a=arguments;1<a.length?Bh[a[0]]=a[1]:1===a.length&&Object.assign(Bh,a[0])}
function Q(a,b){return a in Bh?Bh[a]:b}
function Dh(){return Q("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS")}
function Eh(){var a=Bh.EXPERIMENT_FLAGS;return a?a.web_disable_gel_stp_ecatcher_killswitch:void 0}
;var Fh=[];function Gh(a){Fh.forEach(function(b){return b(a)})}
function Hh(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Ih(b)}}:a}
function Ih(a,b,c,d){var e=C("yt.logging.errors.log");e?e(a,"ERROR",b,c,d):(e=Q("ERRORS",[]),e.push([a,"ERROR",b,c,d]),Ch("ERRORS",e));Gh(a)}
function Jh(a,b,c,d){var e=C("yt.logging.errors.log");e?e(a,"WARNING",b,c,d):(e=Q("ERRORS",[]),e.push([a,"WARNING",b,c,d]),Ch("ERRORS",e))}
;var Kh=0;B("ytDomDomGetNextId",C("ytDomDomGetNextId")||function(){return++Kh});var Lh={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function Mh(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in Lh||(this[b]=a[b]);var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==
this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.g=a.pageX;this.h=a.pageY}}catch(e){}}
function Nh(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.g=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.h=a.clientY+b}}
Mh.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Mh.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Mh.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var lb=z.ytEventsEventsListeners||{};B("ytEventsEventsListeners",lb);var Oh=z.ytEventsEventsCounter||{count:0};B("ytEventsEventsCounter",Oh);
function Ph(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return kb(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Pa(e[4])&&Pa(d)&&mb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
function Qh(a){a&&("string"==typeof a&&(a=[a]),E(a,function(b){if(b in lb){var c=lb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?Rh()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete lb[b]}}))}
var Rh=ab(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function Sh(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=Ph(a,b,c,d);if(e)return e;e=++Oh.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new Mh(h);if(!Bd(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new Mh(h);
h.currentTarget=a;return c.call(a,h)};
g=Hh(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),Rh()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);lb[e]=[a,b,c,g,d];return e}
;function Th(a,b){"function"===typeof a&&(a=Hh(a));return window.setTimeout(a,b)}
function Uh(a,b){"function"===typeof a&&(a=Hh(a));return window.setInterval(a,b)}
;var Vh=/^[\w.]*$/,Wh={q:!0,search_query:!0};function Xh(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1==f.length&&f[0]||2==f.length)try{var g=Yh(f[0]||""),h=Yh(f[1]||"");g in c?Array.isArray(c[g])?hb(c[g],h):c[g]=[c[g],h]:c[g]=h}catch(p){var k=p,l=f[0],m=String(Xh);k.args=[{key:l,value:f[1],query:a,method:Zh==m?"unchanged":m}];Wh.hasOwnProperty(l)||Jh(k)}}return c}
var Zh=String(Xh);function $h(a){var b=[];ib(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];E(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function ai(a){"?"==a.charAt(0)&&(a=a.substr(1));return Xh(a,"&")}
function bi(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=ai(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);b=a;a=Xb(e);a?(c=b.indexOf("#"),0>c&&(c=b.length),f=b.indexOf("?"),0>f||f>c?(f=c,e=""):e=b.substring(f+1,c),b=[b.slice(0,f),e,b.slice(c)],c=b[1],b[1]=a?c?c+"&"+a:a:c,a=b[0]+(b[1]?"?"+b[1]:"")+b[2]):a=b;return a+d}
function ci(a){if(!b)var b=window.location.href;var c=a.match(Sb)[1]||null,d=Ub(a);c&&d?(a=a.match(Sb),b=b.match(Sb),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?Ub(b)==d&&(Number(b.match(Sb)[4]||null)||null)==(Number(a.match(Sb)[4]||null)||null):!0;return a}
function Yh(a){return a&&a.match(Vh)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function R(a){a=di(a);return"string"===typeof a&&"false"===a?!1:!!a}
function ei(a,b){a=di(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function di(a){var b=Q("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:Q("EXPERIMENT_FLAGS",{})[a]}
function fi(){var a=[],b=Q("EXPERIMENTS_FORCED_FLAGS",{});for(c in b)a.push({key:c,value:String(b[c])});var c=Q("EXPERIMENT_FLAGS",{});for(var d in c)d.startsWith("force_")&&void 0===b[d]&&a.push({key:d,value:String(c[d])});return a}
;function gi(a){var b=hi;a=void 0===a?C("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=Pd;e.flash="0";a:{try{var f=b.g.top.location.href}catch(W){f=2;break a}f=f?f===b.h.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?qd:g;try{var h=g.history.length}catch(W){h=0}e.u_his=h;var k;e.u_h=null==(k=qd.screen)?void 0:k.height;var l;e.u_w=null==(l=qd.screen)?void 0:l.width;var m;e.u_ah=null==(m=qd.screen)?void 0:m.availHeight;var p;e.u_aw=null==
(p=qd.screen)?void 0:p.availWidth;var t;e.u_cd=null==(t=qd.screen)?void 0:t.colorDepth}catch(W){}h=b.g;try{var q=h.screenX;var x=h.screenY}catch(W){}try{var A=h.outerWidth;var F=h.outerHeight}catch(W){}try{var K=h.innerWidth;var M=h.innerHeight}catch(W){}try{var N=h.screenLeft;var jb=h.screenTop}catch(W){}try{K=h.innerWidth,M=h.innerHeight}catch(W){}try{var jc=h.screen.availWidth;var za=h.screen.availTop}catch(W){}q=[N,jb,q,x,jc,za,A,F,K,M];x=b.g.top;try{var ta=(x||window).document,X="CSS1Compat"==
ta.compatMode?ta.documentElement:ta.body;var ba=(new zd(X.clientWidth,X.clientHeight)).round()}catch(W){ba=new zd(-12245933,-12245933)}ta=ba;ba={};var ca=void 0===ca?z:ca;X=new Je;ca.SVGElement&&ca.document.createElementNS&&X.set(0);x=Gd();x["allow-top-navigation-by-user-activation"]&&X.set(1);x["allow-popups-to-escape-sandbox"]&&X.set(2);ca.crypto&&ca.crypto.subtle&&X.set(3);ca.TextDecoder&&ca.TextEncoder&&X.set(4);ca=Ke(X);ba.bc=ca;ba.bih=ta.height;ba.biw=ta.width;ba.brdim=q.join();b=b.h;b=(ba.vis=
b.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,ba.wgl=!!qd.WebGLRenderingContext,ba);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var hi=new function(){var a=window.document;this.g=window;this.h=a};
B("yt.ads_.signals_.getAdSignalsString",function(a){return $h(gi(a))});Date.now();var ii="XMLHttpRequest"in z?function(){return new XMLHttpRequest}:null;
function ji(){if(!ii)return null;var a=ii();return"open"in a?a:null}
;var ki={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},li="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(ia(Rd)),mi=!1;
function ni(a,b){b=void 0===b?{}:b;var c=ci(a),d=R("web_ajax_ignore_global_headers_if_set"),e;for(e in ki){var f=Q(ki[e]);"X-Goog-Visitor-Id"!==e||f||(f=Q("VISITOR_DATA"));!f||!c&&Ub(a)||d&&void 0!==b[e]||(b[e]=f)}"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in b&&delete b["X-Goog-Visitor-Id"];if(c||!Ub(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!Ub(a)){try{var g=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(h){}g&&(b["X-YouTube-Time-Zone"]=g)}if(c||
!Ub(a))b["X-YouTube-Ad-Signals"]=$h(gi());return b}
function oi(a){var b=window.location.search,c=Ub(a);R("debug_handle_relative_url_for_query_forward_killswitch")||c||!ci(a)||(c=document.location.hostname);var d=Tb(a.match(Sb)[5]||null);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=ai(b),f={};E(li,function(g){e[g]&&(f[g]=e[g])});
return bi(a,f||{},!1)}
function pi(a,b){var c=b.format||"JSON";a=qi(a,b);var d=ri(a,b),e=!1,f=si(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);a:switch(k&&"status"in k?k.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:var l=!0;break a;default:l=!1}var m=null,p=400<=k.status&&500>k.status,t=500<=k.status&&600>k.status;if(l||p||t)m=ti(a,c,k,b.convertToSafeHtml);if(l)a:if(k&&204==k.status)l=!0;else{switch(c){case "XML":l=0==parseInt(m&&m.return_code,10);break a;case "RAW":l=!0;break a}l=
!!m}m=m||{};p=b.context||z;l?b.onSuccess&&b.onSuccess.call(p,k,m):b.onError&&b.onError.call(p,k,m);b.onFinish&&b.onFinish.call(p,k,m)}},b.method,d,b.headers,b.responseType,b.withCredentials);
d=b.timeout||0;if(b.onTimeout&&0<d){var g=b.onTimeout;var h=Th(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||z,f))},d)}}
function qi(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=Q("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=bi(a,b||{},!0);return a}
function ri(a,b){var c=Q("XSRF_FIELD_NAME"),d=Q("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams,g=Q("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||Ub(a)&&!b.withCredentials&&Ub(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);(R("ajax_parse_query_data_only_when_filled")&&f&&0<Object.keys(f).length||f)&&"string"===typeof e&&(e=ai(e),pb(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?
JSON.stringify(e):Xb(e));if(!(a=e)&&(a=f)){a:{for(var k in f){f=!1;break a}f=!0}a=!f}!mi&&a&&"POST"!=b.method&&(mi=!0,Ih(Error("AJAX request with postData should use POST")));return e}
function ti(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,Jh(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?ui(a):null)e={},E(a.getElementsByTagName("*"),function(g){e[g.tagName]=vi(g)})}d&&wi(e);
return e}
function wi(a){if(Pa(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;xb("HTML that is escaped and sanitized server-side and passed through yt.net.ajax");var d=a[b];if(void 0===vb){var e=null;var f=z.trustedTypes;if(f&&f.createPolicy){try{e=f.createPolicy("goog#html",{createHTML:Wa,createScript:Wa,createScriptURL:Wa})}catch(g){z.console&&z.console.error(g.message)}vb=e}else vb=e}d=(e=vb)?e.createHTML(d):d;a[c]=new Nb(d)}else wi(a[b])}}
function ui(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function vi(a){var b="";E(a.childNodes,function(c){b+=c.nodeValue});
return b}
function si(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&Hh(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=ji();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;R("debug_forward_web_query_parameters")&&(a=oi(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=ni(a,e))for(var l in e)k.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;function xi(){if(!z.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return z.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":z.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":z.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":z.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;B("ytglobal.prefsUserPrefsPrefs_",C("ytglobal.prefsUserPrefsPrefs_")||{});var yi={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},zi={CONN_DEFAULT:0,CONN_UNKNOWN:1,CONN_NONE:2,CONN_WIFI:3,CONN_CELLULAR_2G:4,CONN_CELLULAR_3G:5,CONN_CELLULAR_4G:6,CONN_CELLULAR_UNKNOWN:7,CONN_DISCO:8,CONN_CELLULAR_5G:9,CONN_WIFI_METERED:10,CONN_CELLULAR_5G_SA:11,
CONN_CELLULAR_5G_NSA:12,CONN_INVALID:31},Ai={EFFECTIVE_CONNECTION_TYPE_UNKNOWN:0,EFFECTIVE_CONNECTION_TYPE_OFFLINE:1,EFFECTIVE_CONNECTION_TYPE_SLOW_2G:2,EFFECTIVE_CONNECTION_TYPE_2G:3,EFFECTIVE_CONNECTION_TYPE_3G:4,EFFECTIVE_CONNECTION_TYPE_4G:5},Bi={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};function Ci(){var a=z.navigator;return a?a.connection:void 0}
;function Di(){return"INNERTUBE_API_KEY"in Bh&&"INNERTUBE_API_VERSION"in Bh}
function Ei(){return{yb:Q("INNERTUBE_API_KEY"),zb:Q("INNERTUBE_API_VERSION"),Ja:Q("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),Ya:Q("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),Ab:Q("INNERTUBE_CONTEXT_CLIENT_NAME",1),Za:Q("INNERTUBE_CONTEXT_CLIENT_VERSION"),bb:Q("INNERTUBE_CONTEXT_HL"),ab:Q("INNERTUBE_CONTEXT_GL"),Bb:Q("INNERTUBE_HOST_OVERRIDE")||"",Db:!!Q("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),Cb:!!Q("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",!1),appInstallData:Q("SERIALIZED_CLIENT_CONFIG_DATA")}}
function Fi(a){var b={client:{hl:a.bb,gl:a.ab,clientName:a.Ya,clientVersion:a.Za,configInfo:a.Ja}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=z.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=Q("EXPERIMENTS_TOKEN","");""!==c&&(b.client.experimentsToken=c);c=fi();0<c.length&&(b.request={internalExperimentFlags:c});Gi(a,void 0,b);Hi(void 0,b);Ii(a,void 0,b);Ji(void 0,b);Q("DELEGATED_SESSION_ID")&&!R("pageid_as_header_web")&&(b.user={onBehalfOfUser:Q("DELEGATED_SESSION_ID")});
a=Object;c=a.assign;for(var d=b.client,e={},f=u(Object.entries(ai(Q("DEVICE","")))),g=f.next();!g.done;g=f.next()){var h=u(g.value);g=h.next().value;h=h.next().value;"cbrand"===g?e.deviceMake=h:"cmodel"===g?e.deviceModel=h:"cbr"===g?e.browserName=h:"cbrver"===g?e.browserVersion=h:"cos"===g?e.osName=h:"cosver"===g?e.osVersion=h:"cplatform"===g&&(e.platform=h)}b.client=c.call(a,d,e);return b}
function Ki(a){var b=new ah,c=new Ug;I(c,1,a.bb);I(c,2,a.ab);I(c,16,a.Ab);I(c,17,a.Za);if(a.Ja){var d=a.Ja,e=new Qg;d.coldConfigData&&I(e,1,d.coldConfigData);d.appInstallData&&I(e,6,d.appInstallData);d.coldHashData&&I(e,3,d.coldHashData);d.hotHashData&&I(e,5,d.hotHashData);J(c,Qg,62,e)}(d=z.devicePixelRatio)&&1!=d&&I(c,65,d);d=Q("EXPERIMENTS_TOKEN","");""!==d&&I(c,54,d);d=fi();if(0<d.length){e=new Wg;for(var f=0;f<d.length;f++){var g=new Og;I(g,1,d[f].key);bd(g,2,Pg,d[f].value);id(e,15,Og,g)}J(b,
Wg,5,e)}Gi(a,c);Hi(c);Ii(a,c);Ji(c);Q("DELEGATED_SESSION_ID")&&!R("pageid_as_header_web")&&(a=new Zg,I(a,3,Q("DELEGATED_SESSION_ID")));a=u(Object.entries(ai(Q("DEVICE",""))));for(d=a.next();!d.done;d=a.next())e=u(d.value),d=e.next().value,e=e.next().value,"cbrand"===d?I(c,12,e):"cmodel"===d?I(c,13,e):"cbr"===d?I(c,87,e):"cbrver"===d?I(c,88,e):"cos"===d?I(c,18,e):"cosver"===d?I(c,19,e):"cplatform"===d&&I(c,42,e);J(b,Ug,1,c);return b}
function Gi(a,b,c){a=a.Ya;if("WEB"===a||"MWEB"===a||1===a||2===a)if(b){c=dd(b,Rg,96)||new Rg;var d=xi();d=Object.keys(ch).indexOf(d);d=-1===d?null:d;null!==d&&I(c,3,d);J(b,Rg,96,c)}else c&&(c.client.mainAppWebInfo=null!=(d=c.client.mainAppWebInfo)?d:{},c.client.mainAppWebInfo.webDisplayMode=xi())}
function Hi(a,b){var c;if(R("web_log_memory_total_kbytes")&&(null==(c=z.navigator)?0:c.deviceMemory)){var d;c=null==(d=z.navigator)?void 0:d.deviceMemory;a?I(a,95,1E6*c):b&&(b.client.memoryTotalKbytes=""+1E6*c)}}
function Ii(a,b,c){if(a.appInstallData)if(b){var d;c=null!=(d=dd(b,Qg,62))?d:new Qg;I(c,6,a.appInstallData);J(b,Qg,62,c)}else c&&(c.client.configInfo=c.client.configInfo||{},c.client.configInfo.appInstallData=a.appInstallData)}
function Ji(a,b){a:{var c=Ci();if(c){var d=yi[c.type||"unknown"]||"CONN_UNKNOWN";c=yi[c.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===d&&"CONN_UNKNOWN"!==c&&(d=c);if("CONN_UNKNOWN"!==d)break a;if("CONN_UNKNOWN"!==c){d=c;break a}}d=void 0}d&&(a?I(a,61,zi[d]):b&&(b.client.connectionType=d));R("web_log_effective_connection_type")&&(d=Ci(),d=null!=d&&d.effectiveType?Bi.hasOwnProperty(d.effectiveType)?Bi[d.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN":void 0,d&&(a?I(a,94,Ai[d]):
b&&(b.client.effectiveConnectionType=d)))}
function Li(a,b,c){c=void 0===c?{}:c;var d={};Q("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":Q("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||Q("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.dc||Q("AUTHORIZATION"))||(a?b="Bearer "+C("gapi.auth.getToken")().cc:b=ae([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=Q("SESSION_INDEX",0),R("pageid_as_header_web")&&(d["X-Goog-PageId"]=Q("DELEGATED_SESSION_ID")));return d}
;function Mi(a){a=Object.assign({},a);delete a.Authorization;var b=ae();if(b){var c=new uf;c.update(Q("INNERTUBE_API_KEY"));c.update(b);a.hash=vc(c.digest(),3)}return a}
;function Ni(a){var b=new Hg;if(b.g)try{b.g.setItem("__sak","1");b.g.removeItem("__sak");var c=!0}catch(d){c=!1}else c=!1;(b=c?a?new Ng(b,a):b:null)||(a=new Ig(a||"UserDataSharedStore"),b=a.g?a:null);this.g=(a=b)?new Dg(a):null;this.h=document.domain||window.location.hostname}
Ni.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.g)try{this.g.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(eg(b))}catch(f){return}else e=escape(b);b=this.h;Yd.set(""+a,e,{Ka:c,path:"/",domain:void 0===b?"youtube.com":b,secure:!1})};
Ni.prototype.get=function(a,b){var c=void 0,d=!this.g;if(!d)try{c=this.g.get(a)}catch(e){d=!0}if(d&&(c=Yd.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
Ni.prototype.remove=function(a){this.g&&this.g.remove(a);var b=this.h;Yd.remove(""+a,"/",void 0===b?"youtube.com":b)};var Oi=window,T=Oi.ytcsi&&Oi.ytcsi.now?Oi.ytcsi.now:Oi.performance&&Oi.performance.timing&&Oi.performance.now&&Oi.performance.timing.navigationStart?function(){return Oi.performance.timing.navigationStart+Oi.performance.now()}:function(){return(new Date).getTime()};var Pi;function Qi(){Pi||(Pi=new Ni("yt.innertube"));return Pi}
function Ri(a,b,c,d){if(d)return null;d=Qi().get("nextId",!0)||1;var e=Qi().get("requests",!0)||{};e[d]={method:a,request:b,authState:Mi(c),requestTime:Math.round(T())};Qi().set("nextId",d+1,86400,!0);Qi().set("requests",e,86400,!0);return d}
function Si(a){var b=Qi().get("requests",!0)||{};delete b[a];Qi().set("requests",b,86400,!0)}
function Ti(a){var b=Qi().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(T())-d.requestTime)){var e=d.authState,f=Mi(Li(!1));mb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(T())),Ui(a,d.method,e,{}));delete b[c]}}Qi().set("requests",b,86400,!0)}}
;function Vi(){}
function Wi(a,b){return Xi(a,0,b)}
Vi.prototype.R=function(a,b){return Xi(a,1,b)};
function Yi(a,b){Xi(a,2,b)}
;function Zi(){Vi.apply(this,arguments)}
v(Zi,Vi);function $i(){Zi.g||(Zi.g=new Zi);return Zi.g}
function Xi(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=C("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):Th(a,c||0)}
Zi.prototype.ga=function(a){if(void 0===a||!Number.isNaN(Number(a))){var b=C("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}};
Zi.prototype.start=function(){var a=C("yt.scheduler.instance.start");a&&a()};var Ie=$i();var aj=qc||rc;var bj=function(){var a;return function(){a||(a=new Ni("ytidb"));return a}}();
function cj(){var a;return null==(a=bj())?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var dj=[],ej=!1;function fj(a){ej||(dj.push({type:"ERROR",payload:a}),10<dj.length&&dj.shift())}
function gj(a,b){ej||(dj.push({type:"EVENT",eventType:a,payload:b}),10<dj.length&&dj.shift())}
;function hj(a){var b=Ia.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(ia(b))}
v(hj,Error);function ij(){try{return jj(),!0}catch(a){return!1}}
function jj(){if(void 0!==Q("DATASYNC_ID"))return Q("DATASYNC_ID");throw new hj("Datasync ID not set","unknown");}
;function kj(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function lj(a){return a.substr(0,a.indexOf(":"))||a}
;var mj={},nj=(mj.AUTH_INVALID="No user identifier specified.",mj.EXPLICIT_ABORT="Transaction was explicitly aborted.",mj.IDB_NOT_SUPPORTED="IndexedDB is not supported.",mj.MISSING_INDEX="Index not created.",mj.MISSING_OBJECT_STORES="Object stores not created.",mj.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",mj.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",mj.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
mj.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",mj.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",mj.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",mj.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",mj),oj={},pj=(oj.AUTH_INVALID="ERROR",oj.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",oj.EXPLICIT_ABORT="IGNORED",oj.IDB_NOT_SUPPORTED="ERROR",oj.MISSING_INDEX=
"WARNING",oj.MISSING_OBJECT_STORES="ERROR",oj.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",oj.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",oj.QUOTA_EXCEEDED="WARNING",oj.QUOTA_MAYBE_EXCEEDED="WARNING",oj.UNKNOWN_ABORT="WARNING",oj.INCOMPATIBLE_DB_VERSION="WARNING",oj),qj={},rj=(qj.AUTH_INVALID=!1,qj.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,qj.EXPLICIT_ABORT=!1,qj.IDB_NOT_SUPPORTED=!1,qj.MISSING_INDEX=!1,qj.MISSING_OBJECT_STORES=!1,qj.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,qj.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,qj.QUOTA_EXCEEDED=!1,qj.QUOTA_MAYBE_EXCEEDED=!0,qj.UNKNOWN_ABORT=!0,qj.INCOMPATIBLE_DB_VERSION=!1,qj);function U(a,b,c,d,e){b=void 0===b?{}:b;c=void 0===c?nj[a]:c;d=void 0===d?pj[a]:d;e=void 0===e?rj[a]:e;hj.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.g=e;Object.setPrototypeOf(this,U.prototype)}
v(U,hj);function sj(a,b){U.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},nj.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,sj.prototype)}
v(sj,U);function tj(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,tj.prototype)}
v(tj,Error);var uj=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function jk(a,b,c,d){b=lj(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof U)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if("QuotaExceededError"===e.name)return new U("QUOTA_EXCEEDED",a);if(sc&&"UnknownError"===e.name)return new U("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof tj)return new U("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if("InvalidStateError"===e.name&&uj.some(function(f){return e.message.includes(f)}))return new U("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if("AbortError"===e.name)return new U("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",lc:e.name})];e.level="WARNING";return e}
function kk(a,b,c){var d=cj();return new U("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:null==d?void 0:d.hasSucceededOnce}})}
;function lk(a){if(!a)throw Error();throw a;}
function mk(a){return a}
function nk(a){this.g=a}
function ok(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=u(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=u(d.g);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.g=[];this.h=[];a=a.g;try{a(c,b)}catch(e){b(e)}}
ok.resolve=function(a){return new ok(new nk(function(b,c){a instanceof ok?a.then(b,c):b(a)}))};
ok.reject=function(a){return new ok(new nk(function(b,c){c(a)}))};
ok.prototype.then=function(a,b){var c=this,d=null!=a?a:mk,e=null!=b?b:lk;return new ok(new nk(function(f,g){"PENDING"===c.state.status?(c.g.push(function(){pk(c,c,d,f,g)}),c.h.push(function(){qk(c,c,e,f,g)})):"FULFILLED"===c.state.status?pk(c,c,d,f,g):"REJECTED"===c.state.status&&qk(c,c,e,f,g)}))};
function rk(a,b){a.then(void 0,b)}
function pk(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof ok?sk(a,b,f,d,e):d(f)}catch(g){e(g)}}
function qk(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof ok?sk(a,b,f,d,e):d(f)}catch(g){e(g)}}
function sk(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof ok?sk(a,b,f,d,e):d(f)},function(f){e(f)})}
;function tk(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function uk(a){return new Promise(function(b,c){tk(a,b,c)})}
function vk(a){return new ok(new nk(function(b,c){tk(a,b,c)}))}
;function wk(a,b){return new ok(new nk(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;function xk(a,b){this.g=a;this.options=b;this.transactionCount=0;this.i=Math.round(T());this.h=!1}
n=xk.prototype;n.add=function(a,b,c){return yk(this,[a],{mode:"readwrite",I:!0},function(d){return d.objectStore(a).add(b,c)})};
n.clear=function(a){return yk(this,[a],{mode:"readwrite",I:!0},function(b){return b.objectStore(a).clear()})};
n.close=function(){this.g.close();var a;(null==(a=this.options)?0:a.closed)&&this.options.closed()};
function zk(a,b,c){a=a.g.createObjectStore(b,c);return new Ak(a)}
n.delete=function(a,b){return yk(this,[a],{mode:"readwrite",I:!0},function(c){return c.objectStore(a).delete(b)})};
n.get=function(a,b){return yk(this,[a],{mode:"readonly",I:!0},function(c){return c.objectStore(a).get(b)})};
function Bk(a,b){return yk(a,["LogsRequestsStore"],{mode:"readwrite",I:!0},function(c){c=c.objectStore("LogsRequestsStore");return vk(c.g.put(b,void 0))})}
n.objectStoreNames=function(){return Array.from(this.g.objectStoreNames)};
function yk(a,b,c,d){var e,f,g,h,k,l,m,p,t,q,x,A;return y(function(F){switch(F.g){case 1:var K={mode:"readonly",I:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};"string"===typeof c?K.mode=c:Object.assign(K,c);e=K;a.transactionCount++;f=e.I?3:1;g=0;case 2:if(h){F.v(3);break}g++;k=Math.round(T());wa(F,4);l=a.g.transaction(b,e.mode);K=new Ck(l);K=Dk(K,d);return w(F,K,6);case 6:return m=F.h,p=Math.round(T()),Ek(a,k,p,g,void 0,b.join(),e),F.return(m);case 4:t=ya(F);q=Math.round(T());x=jk(t,a.g.name,b.join(),a.g.version);
if((A=x instanceof U&&!x.g)||g>=f)Ek(a,k,q,g,x,b.join(),e),h=x;F.v(2);break;case 3:return F.return(Promise.reject(h))}})}
function Ek(a,b,c,d,e,f,g){b=c-b;e?(e instanceof U&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&gj("QUOTA_EXCEEDED",{dbName:lj(a.g.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof U&&"UNKNOWN_ABORT"===e.type&&(c-=a.i,0>c&&c>=Math.pow(2,31)&&(c=0),gj("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.h=!0),Fk(a,!1,d,f,b,g.tag),fj(e)):Fk(a,!0,d,f,b,g.tag)}
function Fk(a,b,c,d,e,f){gj("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.h,duration:e,isSuccessful:b,tryCount:c,tag:void 0===f?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
n.getName=function(){return this.g.name};
function Ak(a){this.g=a}
n=Ak.prototype;n.add=function(a,b){return vk(this.g.add(a,b))};
n.autoIncrement=function(){return this.g.autoIncrement};
n.clear=function(){return vk(this.g.clear()).then(function(){})};
function Gk(a,b){return Hk(a,{query:b},function(c){return c.delete().then(function(){return c.continue()})}).then(function(){})}
n.delete=function(a){return a instanceof IDBKeyRange?Gk(this,a):vk(this.g.delete(a))};
n.get=function(a){return vk(this.g.get(a))};
n.index=function(a){try{return new Ik(this.g.index(a))}catch(b){if(b instanceof Error&&"NotFoundError"===b.name)throw new tj(a,this.g.name);throw b;}};
n.getName=function(){return this.g.name};
n.keyPath=function(){return this.g.keyPath};
function Hk(a,b,c){a=a.g.openCursor(b.query,b.direction);return Jk(a).then(function(d){return wk(d,c)})}
function Ck(a){var b=this;this.g=a;this.i=new Map;this.h=!1;this.done=new Promise(function(c,d){b.g.addEventListener("complete",function(){c()});
b.g.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.g.error)});
b.g.addEventListener("abort",function(){var e=b.g.error;if(e)d(e);else if(!b.h){e=U;for(var f=b.g.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.g.db.name,mode:b.g.mode});d(e)}})})}
function Dk(a,b){var c=new Promise(function(d,e){try{rk(b(a).then(function(f){d(f)}),e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return u(d).next().value})}
Ck.prototype.abort=function(){this.g.abort();this.h=!0;throw new U("EXPLICIT_ABORT");};
Ck.prototype.objectStore=function(a){a=this.g.objectStore(a);var b=this.i.get(a);b||(b=new Ak(a),this.i.set(a,b));return b};
function Ik(a){this.g=a}
n=Ik.prototype;n.delete=function(a){return Kk(this,{query:a},function(b){return b.delete().then(function(){return b.continue()})})};
n.get=function(a){return vk(this.g.get(a))};
n.getKey=function(a){return vk(this.g.getKey(a))};
n.keyPath=function(){return this.g.keyPath};
n.unique=function(){return this.g.unique};
function Kk(a,b,c){a=a.g.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return Jk(a).then(function(d){return wk(d,c)})}
function Lk(a,b){this.request=a;this.cursor=b}
function Jk(a){return vk(a).then(function(b){return b?new Lk(a,b):null})}
n=Lk.prototype;n.advance=function(a){this.cursor.advance(a);return Jk(this.request)};
n.continue=function(a){this.cursor.continue(a);return Jk(this.request)};
n.delete=function(){return vk(this.cursor.delete()).then(function(){})};
n.getKey=function(){return this.cursor.key};
n.U=function(){return this.cursor.value};
n.update=function(a){return vk(this.cursor.update(a))};function Mk(a,b,c){return new Promise(function(d,e){function f(){t||(t=new xk(g.result,{closed:p}));return t}
var g=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.pb,k=c.qb,l=c.Jb,m=c.upgrade,p=c.closed,t;g.addEventListener("upgradeneeded",function(q){try{if(null===q.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===g.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");q.dataLoss&&"none"!==q.dataLoss&&gj("IDB_DATA_CORRUPTED",{reason:q.dataLossMessage||"unknown reason",dbName:lj(a)});var x=f(),A=new Ck(g.transaction);m&&
m(x,function(F){return q.oldVersion<F&&q.newVersion>=F},A);
A.done.catch(function(F){e(F)})}catch(F){e(F)}});
g.addEventListener("success",function(){var q=g.result;k&&q.addEventListener("versionchange",function(){k(f())});
q.addEventListener("close",function(){gj("IDB_UNEXPECTEDLY_CLOSED",{dbName:lj(a),dbVersion:q.version});l&&l()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function Nk(a,b,c){c=void 0===c?{}:c;return Mk(a,b,c)}
function Ok(a,b){b=void 0===b?{}:b;var c,d,e,f;return y(function(g){if(1==g.g)return wa(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.pb)&&c.addEventListener("blocked",function(){e()}),w(g,uk(c),4);
if(2!=g.g)return xa(g,0);f=ya(g);throw jk(f,a,"",-1);})}
;function Pk(a){return new Promise(function(b){Yi(function(){b()},a)})}
function Qk(a,b){this.name=a;this.options=b;this.j=!0;this.l=this.m=0;this.h=500}
Qk.prototype.i=function(a,b,c){c=void 0===c?{}:c;return Nk(a,b,c)};
Qk.prototype.delete=function(a){a=void 0===a?{}:a;return Ok(this.name,a)};
function Rk(a,b){return new U("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function Sk(a,b){if(!b)throw kk("openWithToken",lj(a.name));return Tk(a)}
function Tk(a){function b(){var f,g,h,k,l,m,p,t,q,x;return y(function(A){switch(A.g){case 1:return g=null!=(f=Error().stack)?f:"",wa(A,2),w(A,a.i(a.name,a.options.version,d),4);case 4:h=A.h;for(var F=a.options,K=[],M=u(Object.keys(F.ka)),N=M.next();!N.done;N=M.next()){N=N.value;var jb=F.ka[N],jc=void 0===jb.Hb?Number.MAX_VALUE:jb.Hb;!(h.g.version>=jb.Ha)||h.g.version>=jc||h.g.objectStoreNames.contains(N)||K.push(N)}k=K;if(0===k.length){A.v(5);break}l=Object.keys(a.options.ka);m=h.objectStoreNames();
if(a.l<ei("ytidb_reopen_db_retries",0))return a.l++,h.close(),fj(new U("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:l,foundObjectStores:m})),A.return(b());if(!(a.m<ei("ytidb_remake_db_retries",1))){A.v(6);break}a.m++;if(!R("ytidb_remake_db_enable_backoff_delay")){A.v(7);break}return w(A,Pk(a.h),8);case 8:a.h*=2;case 7:return w(A,a.delete(),9);case 9:return fj(new U("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:l,foundObjectStores:m})),A.return(b());
case 6:throw new sj(m,l);case 5:return A.return(h);case 2:p=ya(A);if(p instanceof DOMException?"VersionError"!==p.name:"DOMError"in self&&p instanceof DOMError?"VersionError"!==p.name:!(p instanceof Object&&"message"in p)||"An attempt was made to open a database using a lower version than the existing version."!==p.message){A.v(10);break}return w(A,a.i(a.name,void 0,Object.assign({},d,{upgrade:void 0})),11);case 11:t=A.h;q=t.g.version;if(void 0!==a.options.version&&q>a.options.version+1)throw t.close(),
a.j=!1,Rk(a,q);return A.return(t);case 10:throw c(),p instanceof Error&&!R("ytidb_async_stack_killswitch")&&(p.stack=p.stack+"\n"+g.substring(g.indexOf("\n")+1)),jk(p,a.name,"",null!=(x=a.options.version)?x:-1);}})}
function c(){a.g===e&&(a.g=void 0)}
if(!a.j)throw Rk(a);if(a.g)return a.g;var d={qb:function(f){f.close()},
closed:c,Jb:c,upgrade:a.options.upgrade};var e=b();a.g=e;return a.g}
;var Uk=new Qk("YtIdbMeta",{ka:{databases:{Ha:1}},upgrade:function(a,b){b(1)&&zk(a,"databases",{keyPath:"actualName"})}});
function Vk(a,b){var c;return y(function(d){if(1==d.g)return w(d,Sk(Uk,b),2);c=d.h;return d.return(yk(c,["databases"],{I:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return vk(f.g.put(a,void 0)).then(function(){})})}))})}
function Wk(a,b){var c;return y(function(d){if(1==d.g)return a?w(d,Sk(Uk,b),2):d.return();c=d.h;return d.return(c.delete("databases",a))})}
function Xk(a,b){var c,d;return y(function(e){return 1==e.g?(c=[],w(e,Sk(Uk,b),2)):3!=e.g?(d=e.h,w(e,yk(d,["databases"],{I:!0,mode:"readonly"},function(f){c.length=0;return Hk(f.objectStore("databases"),{},function(g){a(g.U())&&c.push(g.U());return g.continue()})}),3)):e.return(c)})}
function Yk(a){return Xk(function(b){return"LogsDatabaseV2"===b.publicName&&void 0!==b.userIdentifier},a)}
;var Zk,$k=new function(){}(new function(){});
function al(){var a,b,c,d;return y(function(e){switch(e.g){case 1:a=cj();if(null==(b=a)?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=aj)f=/WebKit\/([0-9]+)/.exec(Kb()),f=!!(f&&600<=parseInt(f[1],10));f&&(f=/WebKit\/([0-9]+)/.exec(Kb()),f=!(f&&602<=parseInt(f[1],10)));if(f||dc)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
wa(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return w(e,Vk(d,$k),4);case 4:return w(e,Wk("yt-idb-test-do-not-use",$k),5);case 5:return e.return(!0);case 2:return ya(e),e.return(!1)}})}
function bl(){if(void 0!==Zk)return Zk;ej=!0;return Zk=al().then(function(a){ej=!1;var b;if(null!=(b=bj())&&b.g){var c;b={hasSucceededOnce:(null==(c=cj())?void 0:c.hasSucceededOnce)||a};var d;null==(d=bj())||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function cl(){var a=C("ytglobal.idbToken_")||void 0;return a?Promise.resolve(a):bl().then(function(b){(b=b?$k:void 0)&&B("ytglobal.idbToken_",b);return b})}
;new fg;function dl(a){if(!ij())throw a=new U("AUTH_INVALID",{dbName:a}),fj(a),a;var b=jj();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function el(a,b,c,d){var e,f,g,h,k,l;return y(function(m){switch(m.g){case 1:return f=null!=(e=Error().stack)?e:"",w(m,cl(),2);case 2:g=m.h;if(!g)throw h=kk("openDbImpl",a,b),R("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),fj(h),h;kj(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:dl(a);wa(m,3);return w(m,Vk(k,g),5);case 5:return w(m,Nk(k.actualName,b,d),6);case 6:return m.return(m.h);case 3:return l=ya(m),wa(m,7),w(m,Wk(k.actualName,g),9);case 9:xa(m,
8);break;case 7:ya(m);case 8:throw l;}})}
function fl(a,b,c){c=void 0===c?{}:c;return el(a,b,!1,c)}
function gl(a,b,c){c=void 0===c?{}:c;return el(a,b,!0,c)}
function hl(a,b){b=void 0===b?{}:b;var c,d;return y(function(e){if(1==e.g)return w(e,cl(),2);if(3!=e.g){c=e.h;if(!c)return e.return();kj(a);d=dl(a);return w(e,Ok(d.actualName,b),3)}return w(e,Wk(d.actualName,c),0)})}
function il(a,b,c){a=a.map(function(d){return y(function(e){return 1==e.g?w(e,Ok(d.actualName,b),2):w(e,Wk(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function jl(){var a=void 0===a?{}:a;var b,c;return y(function(d){if(1==d.g)return w(d,cl(),2);if(3!=d.g){b=d.h;if(!b)return d.return();kj("LogsDatabaseV2");return w(d,Yk(b),3)}c=d.h;return w(d,il(c,a,b),0)})}
function kl(a,b){b=void 0===b?{}:b;var c;return y(function(d){if(1==d.g)return w(d,cl(),2);if(3!=d.g){c=d.h;if(!c)return d.return();kj(a);return w(d,Ok(a,b),3)}return w(d,Wk(a,c),0)})}
;function ll(a){this.sa=this.g=!1;this.potentialEsfErrorCounter=this.h=0;this.handleError=function(){};
this.da=function(){};
this.now=Date.now;this.ia=!1;var b;this.lb=null!=(b=a.lb)?b:100;var c;this.kb=null!=(c=a.kb)?c:1;var d;this.ib=null!=(d=a.ib)?d:2592E6;var e;this.hb=null!=(e=a.hb)?e:12E4;var f;this.jb=null!=(f=a.jb)?f:5E3;var g;this.u=null!=(g=a.u)?g:void 0;this.xa=!!a.xa;var h;this.wa=null!=(h=a.wa)?h:.1;var k;this.Ba=null!=(k=a.Ba)?k:10;a.handleError&&(this.handleError=a.handleError);a.da&&(this.da=a.da);a.ia&&(this.ia=a.ia);a.sa&&(this.sa=a.sa);this.A=a.A;this.K=a.K;this.C=a.C;this.F=a.F;this.P=a.P;this.Oa=a.Oa;
this.Na=a.Na;ml(this)&&(!this.A||this.A("networkless_logging"))&&nl(this)}
function nl(a){ml(a)&&!a.ia&&(a.g=!0,a.xa&&Math.random()<=a.wa&&a.C.sb(a.u),ol(a),a.F.J()&&a.na(),a.F.Y(a.Oa,a.na.bind(a)),a.F.Y(a.Na,a.Ta.bind(a)))}
n=ll.prototype;n.writeThenSend=function(a,b){var c=this;b=void 0===b?{}:b;if(ml(this)&&this.g){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.C.set(d,this.u).then(function(e){d.id=e;c.F.J()&&pl(c,d)}).catch(function(e){pl(c,d);
ql(c,e)})}else this.P(a,b)};
n.sendThenWrite=function(a,b,c){var d=this;b=void 0===b?{}:b;if(ml(this)&&this.g){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.A&&this.A("nwl_skip_retry")&&(e.skipRetry=c);if(this.F.J()||this.A&&this.A("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return y(function(k){if(1==k.g)return w(k,d.C.set(e,d.u).catch(function(l){ql(d,l)}),2);
f(g,h);k.g=0})}}this.P(a,b,e.skipRetry)}else this.C.set(e,this.u).catch(function(g){d.P(a,b,e.skipRetry);
ql(d,g)})}else this.P(a,b,this.A&&this.A("nwl_skip_retry")&&c)};
n.sendAndWrite=function(a,b){var c=this;b=void 0===b?{}:b;if(ml(this)&&this.g){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){void 0!==d.id?c.C.ba(d.id,c.u):e=!0;c.F.Z&&c.A&&c.A("vss_network_hint")&&c.F.Z(!0);f(g,h)};
this.P(d.url,d.options);this.C.set(d,this.u).then(function(g){d.id=g;e&&c.C.ba(d.id,c.u)}).catch(function(g){ql(c,g)})}else this.P(a,b)};
n.na=function(){var a=this;if(!ml(this))throw kk("throttleSend");this.h||(this.h=this.K.R(function(){var b;return y(function(c){if(1==c.g)return w(c,a.C.Xa("NEW",a.u),2);if(3!=c.g)return b=c.h,b?w(c,pl(a,b),3):(a.Ta(),c.return());a.h&&(a.h=0,a.na());c.g=0})},this.lb))};
n.Ta=function(){this.K.ga(this.h);this.h=0};
function pl(a,b){var c,d;return y(function(e){switch(e.g){case 1:if(!ml(a))throw c=kk("immediateSend"),c;if(void 0===b.id){e.v(2);break}return w(e,a.C.Fb(b.id,a.u),3);case 3:(d=e.h)?b=d:a.da(Error("The request cannot be found in the database."));case 2:if(rl(a,b,a.ib)){e.v(4);break}a.da(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===b.id){e.v(5);break}return w(e,a.C.ba(b.id,a.u),5);case 5:return e.return();case 4:b.skipRetry||(b=sl(a,b));if(!b){e.v(0);break}if(!b.skipRetry||
void 0===b.id){e.v(8);break}return w(e,a.C.ba(b.id,a.u),8);case 8:a.P(b.url,b.options,!!b.skipRetry),e.g=0}})}
function sl(a,b){if(!ml(a))throw kk("updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,k;return y(function(l){switch(l.g){case 1:g=tl(f);if(!(a.A&&a.A("nwl_consider_error_code")&&g||a.A&&!a.A("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.Ba)){l.v(2);break}if(!a.F.Da){l.v(3);break}return w(l,a.F.Da(),3);case 3:if(a.F.J()){l.v(2);break}c(e,f);if(!a.A||!a.A("nwl_consider_error_code")||void 0===(null==(h=b)?void 0:h.id)){l.v(6);break}return w(l,a.C.Pa(b.id,a.u,!1),6);case 6:return l.return();case 2:if(a.A&&a.A("nwl_consider_error_code")&&
!g&&a.potentialEsfErrorCounter>a.Ba)return l.return();a.potentialEsfErrorCounter++;if(void 0===(null==(k=b)?void 0:k.id)){l.v(8);break}return b.sendCount<a.kb?w(l,a.C.Pa(b.id,a.u),12):w(l,a.C.ba(b.id,a.u),8);case 12:a.K.R(function(){a.F.J()&&a.na()},a.jb);
case 8:c(e,f),l.g=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return y(function(h){if(1==h.g)return void 0===(null==(g=b)?void 0:g.id)?h.v(2):w(h,a.C.ba(b.id,a.u),2);a.F.Z&&a.A&&a.A("vss_network_hint")&&a.F.Z(!0);d(e,f);h.g=0})};
return b}
function rl(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function ol(a){if(!ml(a))throw kk("retryQueuedRequests");a.C.Xa("QUEUED",a.u).then(function(b){b&&!rl(a,b,a.hb)?a.K.R(function(){return y(function(c){if(1==c.g)return void 0===b.id?c.v(2):w(c,a.C.Pa(b.id,a.u),2);ol(a);c.g=0})}):a.F.J()&&a.na()})}
function ql(a,b){a.mb&&!a.F.J()?a.mb(b):a.handleError(b)}
function ml(a){return!!a.u||a.sa}
function tl(a){var b;return(a=null==a?void 0:null==(b=a.error)?void 0:b.code)&&400<=a&&599>=a?!1:!0}
;var ul=C("ytPubsub2Pubsub2Instance")||new O;O.prototype.subscribe=O.prototype.subscribe;O.prototype.unsubscribeByKey=O.prototype.oa;O.prototype.publish=O.prototype.ea;O.prototype.clear=O.prototype.clear;B("ytPubsub2Pubsub2Instance",ul);B("ytPubsub2Pubsub2SubscribedKeys",C("ytPubsub2Pubsub2SubscribedKeys")||{});B("ytPubsub2Pubsub2TopicToKeys",C("ytPubsub2Pubsub2TopicToKeys")||{});B("ytPubsub2Pubsub2IsAsync",C("ytPubsub2Pubsub2IsAsync")||{});B("ytPubsub2Pubsub2SkipSubKey",null);function vl(a,b){Qk.call(this,a,b);this.options=b;kj(a)}
v(vl,Qk);function wl(a,b){var c;return function(){c||(c=new vl(a,b));return c}}
vl.prototype.i=function(a,b,c){c=void 0===c?{}:c;return(this.options.Qa?gl:fl)(a,b,Object.assign({},c))};
vl.prototype.delete=function(a){a=void 0===a?{}:a;return(this.options.Qa?kl:hl)(this.name,a)};
function xl(a,b){return wl(a,b)}
;var yl;
function zl(){if(yl)return yl();var a={};yl=xl("LogsDatabaseV2",{ka:(a.LogsRequestsStore={Ha:2},a),Qa:!1,upgrade:function(b,c,d){c(2)&&zk(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.g.indexNames.contains("newRequest")&&d.g.deleteIndex("newRequest"),d.g.createIndex("newRequestV2",["status","interface","timestamp"],{unique:!1}));c(7)&&b.g.objectStoreNames.contains("sapisid")&&b.g.deleteObjectStore("sapisid");c(9)&&b.g.objectStoreNames.contains("SWHealthLog")&&b.g.deleteObjectStore("SWHealthLog")},
version:9});return yl()}
;function Al(a){return Sk(zl(),a)}
function Bl(a,b){var c,d,e,f;return y(function(g){if(1==g.g)return c={startTime:T(),transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},w(g,Al(b),2);if(3!=g.g)return d=g.h,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:Q("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),w(g,Bk(d,e),3);f=g.h;c.Kb=T();Cl(c);return g.return(f)})}
function Dl(a,b){var c,d,e,f,g,h,k;return y(function(l){if(1==l.g)return c={startTime:T(),transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},w(l,Al(b),2);if(3!=l.g)return d=l.h,e=Q("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,T()],h=IDBKeyRange.bound(f,g),k=void 0,w(l,yk(d,["LogsRequestsStore"],{mode:"readwrite",I:!0},function(m){return Kk(m.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:"prev"},function(p){p.U()&&(k=p.U(),"NEW"===a&&(k.status="QUEUED",p.update(k)))})}),
3);
c.Kb=T();Cl(c);return l.return(k)})}
function El(a,b){var c;return y(function(d){if(1==d.g)return w(d,Al(b),2);c=d.h;return d.return(yk(c,["LogsRequestsStore"],{mode:"readwrite",I:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",vk(f.g.put(g,void 0)).then(function(){return g})})}))})}
function Fl(a,b,c){c=void 0===c?!0:c;var d;return y(function(e){if(1==e.g)return w(e,Al(b),2);d=e.h;return e.return(yk(d,["LogsRequestsStore"],{mode:"readwrite",I:!0},function(f){var g=f.objectStore("LogsRequestsStore");return g.get(a).then(function(h){return h?(h.status="NEW",c&&(h.sendCount+=1),vk(g.g.put(h,void 0)).then(function(){return h})):ok.resolve(void 0)})}))})}
function Gl(a,b){var c;return y(function(d){if(1==d.g)return w(d,Al(b),2);c=d.h;return d.return(c.delete("LogsRequestsStore",a))})}
function Hl(a){var b,c;return y(function(d){if(1==d.g)return w(d,Al(a),2);b=d.h;c=T()-2592E6;return w(d,yk(b,["LogsRequestsStore"],{mode:"readwrite",I:!0},function(e){return Hk(e.objectStore("LogsRequestsStore"),{},function(f){if(f.U().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function Il(){y(function(a){return w(a,jl(),0)})}
function Cl(a){if(!R("nwl_csi_killswitch")&&.01>=Math.random()){var b=C("ytPubsub2Pubsub2Instance");b&&b.publish.call(b,"nwl_transaction_latency_payload".toString(),"nwl_transaction_latency_payload",a)}}
;var Jl={},Kl=xl("ServiceWorkerLogsDatabase",{ka:(Jl.SWHealthLog={Ha:1},Jl),Qa:!0,upgrade:function(a,b){b(1)&&zk(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}).g.createIndex("swHealthNewRequest",["interface","timestamp"],{unique:!1})},
version:1});function Ll(a){return Sk(Kl(),a)}
function Ml(a){var b,c;y(function(d){if(1==d.g)return w(d,Ll(a),2);b=d.h;c=T()-2592E6;return w(d,yk(b,["SWHealthLog"],{mode:"readwrite",I:!0},function(e){return Hk(e.objectStore("SWHealthLog"),{},function(f){if(f.U().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function Nl(a){var b;return y(function(c){if(1==c.g)return w(c,Ll(a),2);b=c.h;return w(c,b.clear("SWHealthLog"),0)})}
;var Ol={},Pl=0;function Ql(a){var b=new Image,c=""+Pl++;Ol[c]=b;b.onload=b.onerror=function(){delete Ol[c]};
b.src=a}
;function V(){this.g=new Map;this.h=!1}
function Rl(){if(!V.g){var a=C("yt.networkRequestMonitor.instance")||new V;B("yt.networkRequestMonitor.instance",a);V.g=a}return V.g}
V.prototype.requestComplete=function(a,b){b&&(this.h=!0);a=this.removeParams(a);this.g.get(a)||this.g.set(a,b)};
V.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.g.get(a))?!1:!1===a&&this.h?!0:null};
V.prototype.removeParams=function(a){return a.split("?")[0]};
V.prototype.removeParams=V.prototype.removeParams;V.prototype.isEndpointCFR=V.prototype.isEndpointCFR;V.prototype.requestComplete=V.prototype.requestComplete;V.getInstance=Rl;var Sl;function Tl(){Sl||(Sl=new Ni("yt.offline"));return Sl}
function Ul(a){if(R("offline_error_handling")){var b=Tl().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);Tl().set("errors",b,2592E3,!0)}}
;function Y(){Be.call(this);var a=this;this.j=!1;this.h=He();this.h.Y("networkstatus-online",function(){if(a.j&&R("offline_error_handling")){var b=Tl().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new hj(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;d.level=b[c].level;Ih(d)}Tl().set("errors",{},2592E3,!0)}}})}
v(Y,Be);function Vl(){if(!Y.g){var a=C("yt.networkStatusManager.instance")||new Y;B("yt.networkStatusManager.instance",a);Y.g=a}return Y.g}
n=Y.prototype;n.J=function(){return this.h.J()};
n.Z=function(a){this.h.h=a};
n.xb=function(){var a=window.navigator.onLine;return void 0===a?!0:a};
n.ub=function(){this.j=!0};
n.Y=function(a,b){return this.h.Y(a,b)};
n.Da=function(a){a=Fe(this.h,a);a.then(function(b){R("use_cfr_monitor")&&Rl().requestComplete("generate_204",b)});
return a};
Y.prototype.sendNetworkCheckRequest=Y.prototype.Da;Y.prototype.listen=Y.prototype.Y;Y.prototype.enableErrorFlushing=Y.prototype.ub;Y.prototype.getWindowStatus=Y.prototype.xb;Y.prototype.networkStatusHint=Y.prototype.Z;Y.prototype.isNetworkAvailable=Y.prototype.J;Y.getInstance=Vl;function Wl(a){a=void 0===a?{}:a;Be.call(this);var b=this;this.h=this.s=0;this.j=Vl();var c=C("yt.networkStatusManager.instance.listen").bind(this.j);c&&(a.Ca?(this.Ca=a.Ca,c("networkstatus-online",function(){Xl(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){Xl(b,"publicytnetworkstatus-offline")})):(c("networkstatus-online",function(){Ce(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){Ce(b,"publicytnetworkstatus-offline")})))}
v(Wl,Be);Wl.prototype.J=function(){var a=C("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.j)():!0};
Wl.prototype.Z=function(a){var b=C("yt.networkStatusManager.instance.networkStatusHint").bind(this.j);b&&b(a)};
Wl.prototype.Da=function(a){var b=this,c;return y(function(d){c=C("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.j);return R("skip_network_check_if_cfr")&&Rl().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.Z((null==(f=window.navigator)?void 0:f.onLine)||!0);e(b.J())})):c?d.return(c(a)):d.return(!0)})};
function Xl(a,b){a.Ca?a.h?(Ie.ga(a.s),a.s=Ie.R(function(){a.l!==b&&(Ce(a,b),a.l=b,a.h=T())},a.Ca-(T()-a.h))):(Ce(a,b),a.l=b,a.h=T()):Ce(a,b)}
;var Yl;function Zl(){var a=ll.call;Yl||(Yl=new Wl({ic:!0,hc:!0}));a.call(ll,this,{C:{sb:Hl,ba:Gl,Xa:Dl,Fb:El,Pa:Fl,set:Bl},F:Yl,handleError:Ih,da:Jh,P:$l,now:T,mb:Ul,K:$i(),Oa:"publicytnetworkstatus-online",Na:"publicytnetworkstatus-offline",xa:!0,wa:.1,Ba:ei("potential_esf_error_limit",10),A:R,ia:!(ij()&&"www.youtube-nocookie.com"!==Ub(document.location.toString()))});this.i=new fg;R("networkless_immediately_drop_all_requests")&&Il();kl("LogsDatabaseV2")}
v(Zl,ll);function am(){var a=C("yt.networklessRequestController.instance");a||(a=new Zl,B("yt.networklessRequestController.instance",a),R("networkless_logging")&&cl().then(function(b){a.u=b;nl(a);a.i.resolve();a.xa&&Math.random()<=a.wa&&a.u&&Ml(a.u);R("networkless_immediately_drop_sw_health_store")&&bm(a)}));
return a}
Zl.prototype.writeThenSend=function(a,b){b||(b={});ij()||(this.g=!1);ll.prototype.writeThenSend.call(this,a,b)};
Zl.prototype.sendThenWrite=function(a,b,c){b||(b={});ij()||(this.g=!1);ll.prototype.sendThenWrite.call(this,a,b,c)};
Zl.prototype.sendAndWrite=function(a,b){b||(b={});ij()||(this.g=!1);ll.prototype.sendAndWrite.call(this,a,b)};
Zl.prototype.awaitInitialization=function(){return this.i.promise};
function bm(a){var b;y(function(c){if(!a.u)throw b=kk("clearSWHealthLogsDb"),b;return c.return(Nl(a.u).catch(function(d){a.handleError(d)}))})}
function $l(a,b,c){R("use_cfr_monitor")&&cm(a,b);if(R("use_request_time_ms_header"))b.headers&&(b.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(T())));else{var d;if(null==(d=b.postParams)?0:d.requestTimeMs)b.postParams.requestTimeMs=Math.round(T())}if(c&&0===Object.keys(b).length){var e=void 0===e?"":e;var f=void 0===f?!1:f;if(a)if(e)si(a,void 0,"POST",e);else if(Q("USE_NET_AJAX_FOR_PING_TRANSPORT",!1))si(a,void 0,"GET","",void 0,void 0,f);else{b:{try{var g=new Za({url:a});if(g.i&&g.h||
g.j){var h=Tb(a.match(Sb)[5]||null);var k=!(!h||!h.endsWith("/aclk")||"1"!==Zb(a,"ri"));break b}}catch(m){}k=!1}if(k){b:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var l=!0;break b}}catch(m){}l=!1}c=l?!0:!1}else c=!1;c||Ql(a)}}else pi(a,b)}
function cm(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){Rl().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){Rl().requestComplete(a,!0);d(e,f)}}
;var dm=z.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:!1};B("ytNetworklessLoggingInitializationOptions",dm);function em(a){var b=this;this.config_=null;a?this.config_=a:Di()&&(this.config_=Ei());Wi(function(){Ti(b)},5E3)}
em.prototype.isReady=function(){!this.config_&&Di()&&(this.config_=Ei());return!!this.config_};
function Ui(a,b,c,d){function e(x){x=void 0===x?!1:x;var A;if(d.retry&&"www.youtube-nocookie.com"!=h&&(x||R("skip_ls_gel_retry")||"application/json"!==g.headers["Content-Type"]||(A=Ri(b,c,l,k)),A)){var F=g.onSuccess,K=g.onFetchSuccess;g.onSuccess=function(M,N){Si(A);F(M,N)};
c.onFetchSuccess=function(M,N){Si(A);K(M,N)}}try{x&&d.retry&&!d.fb.bypassNetworkless?(g.method="POST",d.fb.writeThenSend?am().writeThenSend(q,g):am().sendAndWrite(q,g)):R("web_all_payloads_via_jspb")?pi(q,g):(g.method="POST",g.postParams||(g.postParams={}),pi(q,g))}catch(M){if("InvalidAccessError"==M.name)A&&(Si(A),A=0),Jh(Error("An extension is blocking network request."));
else throw M;}A&&Wi(function(){Ti(a)},5E3)}
!Q("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&Jh(new hj("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new hj("innertube xhrclient not ready",b,c,d);Ih(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(x,A){if(d.onSuccess)d.onSuccess(A)},
onFetchSuccess:function(x){if(d.onSuccess)d.onSuccess(x)},
onError:function(x,A){if(d.onError)d.onError(A)},
onFetchError:function(x){if(d.onError)d.onError(x)},
timeout:d.timeout,withCredentials:!0};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.Bb)&&(h=f);var k=a.config_.Db||!1,l=Li(k,h,d);Object.assign(g.headers,l);(f=g.headers.Authorization)&&!h&&(g.headers["x-origin"]=window.location.origin);var m="/youtubei/"+a.config_.zb+"/"+b,p={alt:"json"},t=a.config_.Cb&&f;t=t&&f.startsWith("Bearer");t||(p.key=a.config_.yb);var q=bi(""+h+m,p||{},!0);C("ytNetworklessLoggingInitializationOptions")&&dm.isNwlInitialized?
bl().then(function(x){e(x)}):e(!1)}
;var fm=window.ytcsi&&window.ytcsi.now?window.ytcsi.now:window.performance&&window.performance.timing&&window.performance.now&&window.performance.timing.navigationStart?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};function gm(a){this.H=a;this.g=null;this.l=0;this.B=null;this.s=0;this.h=[];for(a=0;4>a;a++)this.h.push(0);this.j=0;this.Ea=Sh(window,"mousemove",Va(this.Fa,this));this.Ga=Uh(Va(this.aa,this),25)}
D(gm,be);gm.prototype.Fa=function(a){void 0===a.g&&Nh(a);var b=a.g;void 0===a.h&&Nh(a);this.g=new yd(b,a.h)};
gm.prototype.aa=function(){if(this.g){var a=fm();if(0!=this.l){var b=this.B,c=this.g,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.l);this.h[this.j]=.5<Math.abs((d-this.s)/this.s)?1:0;for(c=b=0;4>c;c++)b+=this.h[c]||0;3<=b&&this.H();this.s=d}this.l=a;this.B=this.g;this.j=(this.j+1)%4}};
gm.prototype.ca=function(){window.clearInterval(this.Ga);Qh(this.Ea)};var hm={};
function im(){var a={},b=void 0===a.Gb?!1:a.Gb;a=void 0===a.vb?!0:a.vb;if(null==C("_lact",window)){var c=parseInt(Q("LACT"),10);c=isFinite(c)?Date.now()-Math.max(c,0):-1;B("_lact",c,window);B("_fact",c,window);-1==c&&jm();Sh(document,"keydown",jm);Sh(document,"keyup",jm);Sh(document,"mousedown",jm);Sh(document,"mouseup",jm);b?Sh(window,"touchmove",function(){km("touchmove",200)},{passive:!0}):(Sh(window,"resize",function(){km("resize",200)}),a&&Sh(window,"scroll",function(){km("scroll",200)}));
new gm(function(){km("mouse",100)});
Sh(document,"touchstart",jm,{passive:!0});Sh(document,"touchend",jm,{passive:!0})}}
function km(a,b){hm[a]||(hm[a]=!0,Ie.R(function(){jm();hm[a]=!1},b))}
function jm(){null==C("_lact",window)&&im();var a=Date.now();B("_lact",a,window);-1==C("_fact",window)&&B("_fact",a,window);(a=C("ytglobal.ytUtilActivityCallback_"))&&a()}
function lm(){var a=C("_lact",window);return null==a?-1:Math.max(Date.now()-a,0)}
;var mm=z.ytPubsubPubsubInstance||new O,nm=z.ytPubsubPubsubSubscribedKeys||{},om=z.ytPubsubPubsubTopicToKeys||{},pm=z.ytPubsubPubsubIsSynchronous||{};O.prototype.subscribe=O.prototype.subscribe;O.prototype.unsubscribeByKey=O.prototype.oa;O.prototype.publish=O.prototype.ea;O.prototype.clear=O.prototype.clear;B("ytPubsubPubsubInstance",mm);B("ytPubsubPubsubTopicToKeys",om);B("ytPubsubPubsubIsSynchronous",pm);B("ytPubsubPubsubSubscribedKeys",nm);function qm(){this.store=[];this.g={}}
qm.prototype.storePayload=function(a,b){this.store.push({payload:b,keys:a});a=rm(a);this.g[a]?this.g[a]++:this.g[a]=1;return a};
qm.prototype.extractMatchingEntries=function(a){for(var b=[],c=[],d=u(this.store),e=d.next();!e.done;e=d.next()){e=e.value;a:{var f=a;var g=Object.keys(f);g=u(g);for(var h=g.next();!h.done;h=g.next())if(h=h.value,e.keys[h]!==f[h]){f=!1;break a}f=!0}f?(b.push(e.payload),this.g[rm(e.keys)]--):c.push(e)}this.store=c;a=sm(this,a);a=u(a);for(c=a.next();!c.done;c=a.next())c=c.value,0<this.g[c]&&Jh(new hj("Transport IMS did not fully extract entries for key:",{sequence:c,mc:b.length,kc:this.g[c]}));return b};
qm.prototype.getSequenceCount=function(a){var b=sm(this,a);a=0;b=u(b);for(var c=b.next();!c.done;c=b.next())a+=this.g[c.value];return a};
function sm(a,b){var c=Object.keys(b),d="THIS_KEY_FIELD_NOT_FILLED",e="THIS_KEY_FIELD_NOT_FILLED",f="THIS_KEY_FIELD_NOT_FILLED";c=u(c);for(var g=c.next();!g.done;g=c.next())g=g.value,"auth"===g?d=tm(b.auth):"isJspb"===g?(e=b.isJspb,e=void 0===e?"undefined":e?"true":"false"):"cttAuthInfo"===g&&(f=tm(b.cttAuthInfo));b=[];d=[d,e,f];a=u(Object.keys(a.g));for(f=a.next();!f.done;f=a.next()){f=f.value;e=f.split("/");c=!0;for(g=0;g<d.length;g++)if("THIS_KEY_FIELD_NOT_FILLED"!==d[g]&&d[g]!==e[g]){c=!1;break}c&&
b.push(f)}return b}
qm.prototype.getSequenceCount=qm.prototype.getSequenceCount;qm.prototype.extractMatchingEntries=qm.prototype.extractMatchingEntries;qm.prototype.storePayload=qm.prototype.storePayload;function rm(a){return[void 0===a.auth?"undefined":a.auth,void 0===a.isJspb?"undefined":a.isJspb,void 0===a.cttAuthInfo?"undefined":a.cttAuthInfo].join("/")}
function tm(a){return void 0===a?"undefined":a}
;var um=ei("initial_gel_batch_timeout",2E3),vm=Math.pow(2,16)-1,wm=void 0;function xm(){this.i=this.g=this.h=0}
var ym=new xm,zm=new xm,Am,Bm=!0,Cm=z.ytLoggingTransportGELQueue_||new Map;B("ytLoggingTransportGELQueue_",Cm);var Dm=z.ytLoggingTransportGELProtoQueue_||new Map;B("ytLoggingTransportGELProtoQueue_",Dm);var Em=z.ytLoggingTransportTokensToCttTargetIds_||{};B("ytLoggingTransportTokensToCttTargetIds_",Em);var Fm=z.ytLoggingTransportTokensToJspbCttTargetIds_||{};B("ytLoggingTransportTokensToJspbCttTargetIds_",Fm);var Gm={};function Hm(){var a=C("yt.logging.ims");a||(a=new qm,B("yt.logging.ims",a));return a}
function Im(a,b){R("web_all_payloads_via_jspb")&&Jh(new hj("transport.log called for JSON in JSPB only experiment"));if("log_event"===a.endpoint){Jm(a);var c=Km(a);if(R("use_new_in_memory_storage")){Gm[c]=!0;var d={cttAuthInfo:c,isJspb:!1};Hm().storePayload(d,a.payload);Lm(b,[],c,!1,d)}else d=Cm.get(c)||[],Cm.set(c,d),d.push(a.payload),Lm(b,d,c)}}
function Mm(a,b){if("log_event"===a.endpoint){Jm(void 0,a);var c=Km(a,!0);if(R("use_new_in_memory_storage")){Gm[c]=!0;var d={cttAuthInfo:c,isJspb:!0};Hm().storePayload(d,a.payload.toJSON());Lm(b,[],c,!0,d)}else d=Dm.get(c)||[],Dm.set(c,d),a=a.payload.toJSON(),d.push(a),Lm(b,d,c,!0)}}
function Lm(a,b,c,d,e){d=void 0===d?!1:d;a&&(wm=new a);a=ei("tvhtml5_logging_max_batch")||ei("web_logging_max_batch")||100;var f=T(),g=d?zm.i:ym.i;b=b.length;e&&(b=Hm().getSequenceCount(e));b>=a?R("background_thread_flush_logs_due_to_batch_limit")?Am||(Am=Nm(function(){Om({writeThenSend:!0},R("flush_only_full_queue")?c:void 0,d);Am=void 0},0)):Om({writeThenSend:!0},R("flush_only_full_queue")?c:void 0,d):10<=f-g&&(Pm(d),d?zm.i=f:ym.i=f)}
function Qm(a,b){R("web_all_payloads_via_jspb")&&Jh(new hj("transport.logIsolatedGelPayload called in JSPB only experiment"));if("log_event"===a.endpoint){Jm(a);var c=Km(a),d=new Map;d.set(c,[a.payload]);b&&(wm=new b);return new gg(function(e,f){wm&&wm.isReady()?Rm(d,wm,e,f,{bypassNetworkless:!0},!0):e()})}}
function Sm(a,b){if("log_event"===a.endpoint){Jm(void 0,a);var c=Km(a,!0),d=new Map;d.set(c,[a.payload.toJSON()]);b&&(wm=new b);return new gg(function(e){wm&&wm.isReady()?Tm(d,wm,e,{bypassNetworkless:!0},!0):e()})}}
function Km(a,b){var c="";if(a.ha)c="visitorOnlyApprovedKey";else if(a.cttAuthInfo){if(void 0===b?0:b){b=a.cttAuthInfo.token;c=a.cttAuthInfo;var d=new uh;c.videoId?bd(d,1,vh,c.videoId):c.playlistId&&bd(d,2,vh,c.playlistId);Fm[b]=d}else b=a.cttAuthInfo,c={},b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId),Em[a.cttAuthInfo.token]=c;c=a.cttAuthInfo.token}return c}
function Om(a,b,c){a=void 0===a?{}:a;c=void 0===c?!1:c;!c&&R("web_all_payloads_via_jspb")&&Jh(new hj("transport.flushLogs called for JSON in JSPB only experiment"));new gg(function(d,e){c?(window.clearTimeout(zm.h),window.clearTimeout(zm.g),zm.g=0):(window.clearTimeout(ym.h),window.clearTimeout(ym.g),ym.g=0);if(wm&&wm.isReady())if(R("use_new_in_memory_storage")){var f=a,g=c,h=wm;f=void 0===f?{}:f;g=void 0===g?!1:g;var k=new Map,l=new Map;if(void 0!==b)g?(e=Hm().extractMatchingEntries({isJspb:g,cttAuthInfo:b}),
k.set(b,e),Tm(k,h,d,f)):(k=Hm().extractMatchingEntries({isJspb:g,cttAuthInfo:b}),l.set(b,k),Rm(l,h,d,e,f));else if(g){e=u(Object.keys(Gm));for(g=e.next();!g.done;g=e.next())l=g.value,g=Hm().extractMatchingEntries({isJspb:!0,cttAuthInfo:l}),0<g.length&&k.set(l,g),delete Gm[l];Tm(k,h,d,f)}else{k=u(Object.keys(Gm));for(g=k.next();!g.done;g=k.next()){g=g.value;var m=Hm().extractMatchingEntries({isJspb:!1,cttAuthInfo:g});0<m.length&&l.set(g,m);delete Gm[g]}Rm(l,h,d,e,f)}}else f=a,k=c,h=wm,f=void 0===f?
{}:f,k=void 0===k?!1:k,void 0!==b?k?(e=new Map,k=Dm.get(b)||[],e.set(b,k),Tm(e,h,d,f),Dm.delete(b)):(k=new Map,l=Cm.get(b)||[],k.set(b,l),Rm(k,h,d,e,f),Cm.delete(b)):k?(Tm(Dm,h,d,f),Dm.clear()):(Rm(Cm,h,d,e,f),Cm.clear());else Pm(c),d()})}
function Pm(a){a=void 0===a?!1:a;if(R("web_gel_timeout_cap")&&(!a&&!ym.g||a&&!zm.g)){var b=Nm(function(){Om({writeThenSend:!0},void 0,a)},6E4);
a?zm.g=b:ym.g=b}window.clearTimeout(a?zm.h:ym.h);b=Q("LOGGING_BATCH_TIMEOUT",ei("web_gel_debounce_ms",1E4));R("shorten_initial_gel_batch_timeout")&&Bm&&(b=um);b=Nm(function(){Om({writeThenSend:!0},void 0,a)},b);
a?zm.h=b:ym.h=b}
function Rm(a,b,c,d,e,f){e=void 0===e?{}:e;var g=Math.round(T()),h=a.size,k={};a=u(a);for(var l=a.next();!l.done;k={pa:k.pa,X:k.X,fa:k.fa,ra:k.ra,qa:k.qa},l=a.next()){var m=u(l.value);l=m.next().value;m=m.next().value;k.X=nb({context:Fi(b.config_||Ei())});if(!Oa(m)&&!R("throw_err_when_logevent_malformed_killswitch")){d();break}k.X.events=m;(m=Em[l])&&Um(k.X,l,m);delete Em[l];k.fa="visitorOnlyApprovedKey"===l;Vm(k.X,g,k.fa);Wm(e);k.ra=function(){h--;h||c()};
k.pa=0;k.qa=function(p){return function(){p.pa++;if(e.bypassNetworkless&&R("log_errors_through_nwl_on_retry")&&1===p.pa)try{Ui(b,"log_event",p.X,Xm({writeThenSend:!0},p.fa,p.ra,p.qa,f)),Bm=!1}catch(t){Ih(t),d()}h--;h||c()}}(k);
try{Ui(b,"log_event",k.X,Xm(e,k.fa,k.ra,k.qa,f)),Bm=!1}catch(p){Ih(p),d()}}}
function Tm(a,b,c,d,e){d=void 0===d?{}:d;var f=Math.round(T()),g=a.size,h=new Map([].concat(ia(a)));h=u(h);for(var k=h.next();!k.done;k=h.next()){var l=u(k.value).next().value,m=a.get(l);k=new wh;var p=Ki(b.config_||Ei());J(k,ah,1,p);m=m?Ym(m):[];m=u(m);for(p=m.next();!p.done;p=m.next())id(k,3,rh,p.value);(m=Fm[l])&&Zm(k,l,m);delete Fm[l];l="visitorOnlyApprovedKey"===l;$m(k,f,l);Wm(d);k=nd(k);l=Xm(d,l,function(){g--;g||c()},function(){g--;
g||c()},e);
l.headers["Content-Type"]="application/json+protobuf";l.postBodyFormat="JSPB";l.postBody=k;Ui(b,"log_event","",l);Bm=!1}}
function Wm(a){R("always_send_and_write")&&(a.writeThenSend=!1)}
function Xm(a,b,c,d,e){a={retry:!0,onSuccess:c,onError:d,fb:a,ha:b,fc:!!e,headers:{},postBodyFormat:"",postBody:""};an()&&(a.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(T())));return a}
function Vm(a,b,c){an()||(a.requestTimeMs=String(b));R("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=Q("EVENT_ID"))&&(c=bn(),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function $m(a,b,c){an()||I(a,2,b);if(!c&&(b=Q("EVENT_ID"))){c=bn();var d=new th;I(d,1,b);I(d,2,c);J(a,th,5,d)}}
function bn(){var a=Q("BATCH_CLIENT_COUNTER")||0;a||(a=Math.floor(Math.random()*vm/2));a++;a>vm&&(a=1);Ch("BATCH_CLIENT_COUNTER",a);return a}
function Um(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function Zm(a,b,c){if(jd(c,1===cd(c,vh)?1:-1))var d=1;else if(c.getPlaylistId())d=2;else return;J(a,uh,4,c);a=dd(a,ah,1)||new ah;c=dd(a,Zg,3)||new Zg;var e=new Yg;I(e,2,b);I(e,1,d);id(c,12,Yg,e);J(a,Zg,3,c)}
function Ym(a){for(var b=[],c=0;c<a.length;c++)try{b.push(new rh(a[c]))}catch(d){Ih(new hj("Transport failed to deserialize "+String(a[c])))}return b}
function Jm(a,b){if(C("yt.logging.transport.enableScrapingForTest")){var c=C("yt.logging.transport.scrapedPayloadsForTesting"),d=C("yt.logging.transport.payloadToScrape","");b&&(b=C("yt.logging.transport.getScrapedPayloadFromClientEventsFunction").bind(b.payload)())&&c.push(b);a&&a.payload[d]&&c.push((null==a?void 0:a.payload)[d]);B("yt.logging.transport.scrapedPayloadsForTesting",c)}}
function an(){return R("use_request_time_ms_header")||R("lr_use_request_time_ms_header")}
function Nm(a,b){return R("transport_use_scheduler")?Wi(a,b):Th(a,b)}
;var cn=z.ytLoggingGelSequenceIdObj_||{};B("ytLoggingGelSequenceIdObj_",cn);
function dn(a,b,c,d){d=void 0===d?{}:d;var e={},f=Math.round(d.timestamp||T());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;R("enable_unknown_lact_fix_on_html5")&&im();a=lm();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};R("log_sequence_info_on_gel_web")&&d.ma&&(a=e.context,b=d.ma,b={index:en(b),groupKey:b},a.sequence=b,d.wb&&delete cn[d.ma]);(d.Ib?Qm:Im)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,ha:d.ha},c)}
function fn(a){Om(void 0,void 0,void 0===a?!1:a)}
function en(a){cn[a]=a in cn?cn[a]+1:0;return cn[a]}
;var gn=z.ytLoggingGelSequenceIdObj_||{};B("ytLoggingGelSequenceIdObj_",gn);function hn(a){var b=void 0;b=void 0===b?{}:b;var c=!1;Q("ytLoggingEventsDefaultDisabled",!1)&&(c=!0);c=c?null:em;b=void 0===b?{}:b;var d=Math.round(b.timestamp||T());I(a,1,d<Number.MAX_SAFE_INTEGER?d:0);var e=lm();d=new qh;I(d,1,b.timestamp||!isFinite(e)?-1:e);if(R("log_sequence_info_on_gel_web")&&b.ma){e=b.ma;var f=en(e),g=new ph;I(g,2,f);I(g,1,e);J(d,ph,3,g);b.wb&&delete gn[b.ma]}J(a,qh,33,d);(b.Ib?Sm:Mm)({endpoint:"log_event",payload:a,cttAuthInfo:b.cttAuthInfo,ha:b.ha},c)}
;function jn(a,b){var c=void 0===c?{}:c;if(R("migrate_events_to_ts")){c=void 0===c?{}:c;var d=em;Q("ytLoggingEventsDefaultDisabled",!1)&&em===em&&(d=null);R("web_all_payloads_via_jspb")&&Jh(new hj("Logs should be translated to JSPB but are sent as JSON instead",a));dn(a,b,d,c)}else d=em,Q("ytLoggingEventsDefaultDisabled",!1)&&em==em&&(d=null),dn(a,b,d,c)}
;var kn=[{La:function(a){return"Cannot read property '"+a.key+"'"},
Aa:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{La:function(a){return"Cannot call '"+a.key+"'"},
Aa:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{La:function(a){return a.key+" is not defined"},
Aa:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var mn={V:[],T:[{rb:ln,weight:500}]};function ln(a){if("JavaException"===a.name)return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function nn(){this.T=[];this.V=[]}
var on;function pn(){if(!on){var a=on=new nn;a.V.length=0;a.T.length=0;mn.V&&a.V.push.apply(a.V,mn.V);mn.T&&a.T.push.apply(a.T,mn.T)}return on}
;var qn=new O;function rn(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=sn(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=sn(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=sn(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function sn(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function tn(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=un(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=a[e];var g=b;var h=c;g="string"!==typeof f||"clickTrackingParams"!==e&&"trackingParams"!==e?0:(f=rn(atob(f.replace(/-/g,"+").replace(/_/g,"/"))))?un(e+".ve",f,g,h):0;d+=g;d+=un(e,a[e],b,c);if(500<d)break}}else c[b]=vn(a),d+=c[b].length;else c[b]=vn(a),d+=c[b].length;return d}
function un(a,b,c,d){c+="."+a;a=vn(b);d[c]=a;return c.length+a.length}
function vn(a){try{return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;var wn=new Set,xn=0,yn=0,zn=0,An=[],Bn=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function Cn(){for(var a=u(Bn),b=a.next();!b.done;b=a.next()){var c=Kb();if(c&&0<=c.toLowerCase().indexOf(b.value.toLowerCase()))return!0}return!1}
;function Dn(){var a;return y(function(b){return(a=bf())?b.return(a.then(function(c){c=nd(c);for(var d=[],e=0,f=0;f<c.length;f++){var g=c.charCodeAt(f);255<g&&(d[e++]=g&255,g>>=8);d[e++]=g}return vc(d,3)})):b.return(Promise.resolve(null))})}
;var En={};function Fn(a){return En[a]||(En[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var Gn={},Hn=[],xg=new O,In={};function Jn(){for(var a=u(Hn),b=a.next();!b.done;b=a.next())b=b.value,b()}
function Kn(a,b){var c;"yt:"===a.tagName.toLowerCase().substr(0,3)?c=a.getAttribute(b):c=a?a.dataset?a.dataset[Fn(b)]:a.getAttribute("data-"+b):null;return c}
function Ln(a){xg.ea.apply(xg,arguments)}
;function Mn(a){this.g=a||{};a=[this.g,window.YTConfig||{}];for(var b=0;b<a.length;b++)a[b].host&&(a[b].host=a[b].host.toString().replace("http://","https://"))}
function Z(a,b){a=[a.g,window.YTConfig||{}];for(var c=0;c<a.length;c++){var d=a[c][b];if(void 0!==d)return d}return null}
function Nn(a,b,c){On||(On={},Sh(window,"message",function(d){a:{if(d.origin===Z(a,"host")){try{var e=JSON.parse(d.data)}catch(f){e=void 0;break a}if(d=On[e.id])d.s=!0,d.s&&(E(d.l,d.sendMessage,d),d.l.length=0),d.Sa(e)}e=void 0}return e}));
On[c]=b}
var On=null;var Pn=window;
function Qn(a,b,c){this.m=this.g=this.h=null;this.i=0;this.s=!1;this.l=[];this.j=null;this.H={};if(!a)throw Error("YouTube player element ID required.");this.id=Qa(this);this.B=c;c=document;if(a="string"===typeof a?c.getElementById(a):a)if(c="iframe"===a.tagName.toLowerCase(),b.host||(b.host=c?Vb(a.src):"https://www.youtube.com"),this.h=new Mn(b),c||(b=Rn(this,a),this.m=a,(c=a.parentNode)&&c.replaceChild(b,a),a=b),this.g=a,this.g.id||(this.g.id="widget"+Qa(this.g)),Gn[this.g.id]=this,window.postMessage){this.j=
new O;Sn(this);b=Z(this.h,"events");for(var d in b)b.hasOwnProperty(d)&&this.addEventListener(d,b[d]);for(var e in In)In.hasOwnProperty(e)&&Tn(this,e)}}
n=Qn.prototype;n.setSize=function(a,b){this.g.width=a.toString();this.g.height=b.toString();return this};
n.getIframe=function(){return this.g};
n.Sa=function(a){Un(this,a.event,a)};
n.addEventListener=function(a,b){var c=b;"string"===typeof b&&(c=function(){window[b].apply(window,arguments)});
if(!c)return this;this.j.subscribe(a,c);Vn(this,a);return this};
function Tn(a,b){b=b.split(".");if(2===b.length){var c=b[1];a.B===b[0]&&Vn(a,c)}}
n.destroy=function(){this.g&&this.g.id&&(Gn[this.g.id]=null);var a=this.j;a&&"function"==typeof a.dispose&&a.dispose();if(this.m){a=this.g;var b=a.parentNode;b&&b.replaceChild(this.m,a)}else(a=this.g)&&a.parentNode&&a.parentNode.removeChild(a);On&&(On[this.id]=null);this.h=null;a=this.g;for(var c in lb)lb[c][0]==a&&Qh(c);this.m=this.g=null};
n.Va=function(){return{}};
function Wn(a,b,c){c=c||[];c=Array.prototype.slice.call(c);b={event:"command",func:b,args:c};a.s?a.sendMessage(b):a.l.push(b)}
function Un(a,b,c){a.j.i||(c={target:a,data:c},a.j.ea(b,c),Ln(a.B+"."+b,c))}
function Rn(a,b){var c=document.createElement("iframe");b=b.attributes;for(var d=0,e=b.length;d<e;d++){var f=b[d].value;null!=f&&""!==f&&"null"!==f&&c.setAttribute(b[d].name,f)}c.setAttribute("frameBorder","0");c.setAttribute("allowfullscreen","1");c.setAttribute("allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");c.setAttribute("title","YouTube "+Z(a.h,"title"));(b=Z(a.h,"width"))&&c.setAttribute("width",b.toString());(b=Z(a.h,"height"))&&c.setAttribute("height",
b.toString());var g=a.Va();g.enablejsapi=window.postMessage?1:0;window.location.host&&(g.origin=window.location.protocol+"//"+window.location.host);g.widgetid=a.id;window.location.href&&E(["debugjs","debugcss"],function(k){var l=Zb(window.location.href,k);null!==l&&(g[k]=l)});
var h=""+Z(a.h,"host")+("/embed/"+Z(a.h,"videoId"))+"?"+Xb(g);Pn.yt_embedsEnableUaChProbe?Dn().then(function(k){var l=new URL(h),m=Number(l.searchParams.get("reloads"));isNaN(m)&&(m=0);l.searchParams.set("reloads",(m+1).toString());k&&l.searchParams.set("uach",k);l.searchParams.set("uats",Math.floor(window.performance.timeOrigin).toString());k=Nd(l.href).toString();xd(c,Od(k));return k}):Pn.yt_embedsEnableIframeSrcWithIntent?xd(c,Od(h)):c.src=h;
return c}
n.gb=function(){this.g&&this.g.contentWindow?this.sendMessage({event:"listening"}):window.clearInterval(this.i)};
function Sn(a){Nn(a.h,a,a.id);a.i=Uh(a.gb.bind(a),250);Sh(a.g,"load",function(){window.clearInterval(a.i);a.i=Uh(a.gb.bind(a),250)})}
function Vn(a,b){a.H[b]||(a.H[b]=!0,Wn(a,"addEventListener",[b]))}
n.sendMessage=function(a){a.id=this.id;a.channel="widget";var b=JSON.stringify(a),c=[Vb(this.g.src||"").replace("http:","https:")];if(this.g.contentWindow)for(var d=0;d<c.length;d++)try{this.g.contentWindow.postMessage(b,c[d])}catch(Ob){if(Ob.name&&"SyntaxError"===Ob.name){if(!(Ob.message&&0<Ob.message.indexOf("target origin ''"))){var e=void 0,f=Ob;e=void 0===e?{}:e;e.name=Q("INNERTUBE_CONTEXT_CLIENT_NAME",1);e.version=Q("INNERTUBE_CONTEXT_CLIENT_VERSION");var g=e||{},h="WARNING";h=void 0===h?"ERROR":
h;if(f){f.hasOwnProperty("level")&&f.level&&(h=f.level);if(R("console_log_js_exceptions")){var k=f,l=[];l.push("Name: "+k.name);l.push("Message: "+k.message);k.hasOwnProperty("params")&&l.push("Error Params: "+JSON.stringify(k.params));k.hasOwnProperty("args")&&l.push("Error args: "+JSON.stringify(k.args));l.push("File name: "+k.fileName);l.push("Stacktrace: "+k.stack);window.console.log(l.join("\n"),k)}if(!(5<=xn)){var m=void 0,p=void 0,t=f,q=g,x=rd(t),A=x.message||"Unknown Error",F=x.name||"UnknownError",
K=x.stack||t.h||"Not available";if(K.startsWith(F+": "+A)){var M=K.split("\n");M.shift();K=M.join("\n")}var N=x.lineNumber||"Not available",jb=x.fileName||"Not available",jc=K,za=0;if(t.hasOwnProperty("args")&&t.args&&t.args.length)for(var ta=0;ta<t.args.length&&!(za=tn(t.args[ta],"params."+ta,q,za),500<=za);ta++);else if(t.hasOwnProperty("params")&&t.params){var X=t.params;if("object"===typeof t.params)for(p in X){if(X[p]){var ba="params."+p,ca=vn(X[p]);q[ba]=ca;za+=ba.length+ca.length;if(500<za)break}}else q.params=
vn(X)}if(An.length)for(var W=0;W<An.length&&!(za=tn(An[W],"params.context."+W,q,za),500<=za);W++);navigator.vendor&&!q.hasOwnProperty("vendor")&&(q["device.vendor"]=navigator.vendor);var S={message:A,name:F,lineNumber:N,fileName:jb,stack:jc,params:q,sampleWeight:1},vj=Number(t.columnNumber);isNaN(vj)||(S.lineNumber=S.lineNumber+":"+vj);if("IGNORED"===t.level)m=0;else a:{for(var wj=pn(),xj=u(wj.V),If=xj.next();!If.done;If=xj.next()){var yj=If.value;if(S.message&&S.message.match(yj.jc)){m=yj.weight;
break a}}for(var zj=u(wj.T),Jf=zj.next();!Jf.done;Jf=zj.next()){var Aj=Jf.value;if(Aj.rb(S)){m=Aj.weight;break a}}m=1}S.sampleWeight=m;for(var Bj=u(kn),Kf=Bj.next();!Kf.done;Kf=Bj.next()){var Lf=Kf.value;if(Lf.Aa[S.name])for(var Cj=u(Lf.Aa[S.name]),Mf=Cj.next();!Mf.done;Mf=Cj.next()){var Dj=Mf.value,Ld=S.message.match(Dj.regexp);if(Ld){S.params["params.error.original"]=Ld[0];for(var Nf=Dj.groups,Ej={},Pb=0;Pb<Nf.length;Pb++)Ej[Nf[Pb]]=Ld[Pb+1],S.params["params.error."+Nf[Pb]]=Ld[Pb+1];S.message=Lf.La(Ej);
break}}}S.params||(S.params={});var Fj=pn();S.params["params.errorServiceSignature"]="msg="+Fj.V.length+"&cb="+Fj.T.length;S.params["params.serviceWorker"]="false";z.document&&z.document.querySelectorAll&&(S.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));xb("sample").constructor!==wb&&(S.params["params.fconst"]="true");var va=S;window.yterr&&"function"===typeof window.yterr&&window.yterr(va);if(0!==va.sampleWeight&&!wn.has(va.message)){if("ERROR"===h){qn.ea("handleError",
va);if(R("record_app_crashed_web")&&0===zn&&1===va.sampleWeight)if(zn++,R("errors_via_jspb")){var Of=new oh;I(Of,1,1);if(!R("report_client_error_with_app_crash_ks")){var Gj=new jh;I(Gj,1,va.message);var Hj=new kh;J(Hj,jh,3,Gj);var Ij=new lh;J(Ij,kh,5,Hj);var Jj=new mh;J(Jj,lh,9,Ij);J(Of,mh,4,Jj)}var bo=Of,Kj=new rh;gd(Kj,oh,20,sh,bo);hn(Kj)}else{var Lj={appCrashType:"APP_CRASH_TYPE_BREAKPAD"};R("report_client_error_with_app_crash_ks")||(Lj.systemHealth={crashData:{clientError:{logMessage:{message:va.message}}}});
jn("appCrashed",Lj)}yn++}else"WARNING"===h&&qn.ea("handleWarning",va);if(R("kevlar_gel_error_routing"))a:{var Pf=void 0,Qf=void 0,Bc=h,P=va;if(R("errors_via_jspb")){if(Cn())Qf=void 0;else{var Qb=new gh;I(Qb,1,P.stack);P.fileName&&I(Qb,4,P.fileName);var Ja=P.lineNumber&&P.lineNumber.split?P.lineNumber.split(":"):[];0!==Ja.length&&(1!==Ja.length||isNaN(Number(Ja[0]))?2!==Ja.length||isNaN(Number(Ja[0]))||isNaN(Number(Ja[1]))||(I(Qb,2,Number(Ja[0])),I(Qb,3,Number(Ja[1]))):I(Qb,2,Number(Ja[0])));var qb=
new jh;I(qb,1,P.message);I(qb,3,P.name);I(qb,6,P.sampleWeight);"ERROR"===Bc?I(qb,2,2):"WARNING"===Bc?I(qb,2,1):I(qb,2,0);var Rf=new hh;I(Rf,1,!0);gd(Rf,gh,3,ih,Qb);var rb=new dh;I(rb,3,window.location.href);for(var Mj=Q("FEXP_EXPERIMENTS",[]),Sf=0;Sf<Mj.length;Sf++){var Nj=rb,co=Mj[Sf];Rc(Nj);ad(Nj,5,2,!1).push(co)}var Tf=Dh();if(!Eh()&&Tf)for(var Oj=u(Object.keys(Tf)),sb=Oj.next();!sb.done;sb=Oj.next()){var Pj=sb.value,Uf=new fh;I(Uf,1,Pj);I(Uf,2,String(Tf[Pj]));id(rb,4,fh,Uf)}var Vf=P.params;if(Vf){var Qj=
u(Object.keys(Vf));for(sb=Qj.next();!sb.done;sb=Qj.next()){var Rj=sb.value,Wf=new fh;I(Wf,1,"client."+Rj);I(Wf,2,String(Vf[Rj]));id(rb,4,fh,Wf)}}var Sj=Q("SERVER_NAME"),Tj=Q("SERVER_VERSION");if(Sj&&Tj){var Xf=new fh;I(Xf,1,"server.name");I(Xf,2,Sj);id(rb,4,fh,Xf);var Yf=new fh;I(Yf,1,"server.version");I(Yf,2,Tj);id(rb,4,fh,Yf)}var Md=new kh;J(Md,dh,1,rb);J(Md,hh,2,Rf);J(Md,jh,3,qb);Qf=Md}var Uj=Qf;if(!Uj)break a;var Vj=new rh;gd(Vj,kh,163,sh,Uj);hn(Vj)}else{if(Cn())Pf=void 0;else{var Cc={stackTrace:P.stack};
P.fileName&&(Cc.filename=P.fileName);var Ka=P.lineNumber&&P.lineNumber.split?P.lineNumber.split(":"):[];0!==Ka.length&&(1!==Ka.length||isNaN(Number(Ka[0]))?2!==Ka.length||isNaN(Number(Ka[0]))||isNaN(Number(Ka[1]))||(Cc.lineNumber=Number(Ka[0]),Cc.columnNumber=Number(Ka[1])):Cc.lineNumber=Number(Ka[0]));var Zf={level:"ERROR_LEVEL_UNKNOWN",message:P.message,errorClassName:P.name,sampleWeight:P.sampleWeight};"ERROR"===Bc?Zf.level="ERROR_LEVEL_ERROR":"WARNING"===Bc&&(Zf.level="ERROR_LEVEL_WARNNING");
var eo={isObfuscated:!0,browserStackInfo:Cc},Rb={pageUrl:window.location.href,kvPairs:[]};Q("FEXP_EXPERIMENTS")&&(Rb.experimentIds=Q("FEXP_EXPERIMENTS"));var $f=Dh();if(!Eh()&&$f)for(var Wj=u(Object.keys($f)),tb=Wj.next();!tb.done;tb=Wj.next()){var Xj=tb.value;Rb.kvPairs.push({key:Xj,value:String($f[Xj])})}var ag=P.params;if(ag){var Yj=u(Object.keys(ag));for(tb=Yj.next();!tb.done;tb=Yj.next()){var Zj=tb.value;Rb.kvPairs.push({key:"client."+Zj,value:String(ag[Zj])})}}var ak=Q("SERVER_NAME"),bk=Q("SERVER_VERSION");
ak&&bk&&(Rb.kvPairs.push({key:"server.name",value:ak}),Rb.kvPairs.push({key:"server.version",value:bk}));Pf={errorMetadata:Rb,stackTrace:eo,logMessage:Zf}}var ck=Pf;if(!ck)break a;jn("clientError",ck)}if("ERROR"===Bc||R("errors_flush_gel_always_killswitch"))b:if(R("migrate_events_to_ts"))c:{if(R("web_fp_via_jspb")&&(fn(!0),!R("web_fp_via_jspb_and_json")))break c;fn()}else{if(R("web_fp_via_jspb")&&(fn(!0),!R("web_fp_via_jspb_and_json")))break b;fn()}}if(!R("suppress_error_204_logging")){var ub=va,
Dc=ub.params||{},Xa={urlParams:{a:"logerror",t:"jserror",type:ub.name,msg:ub.message.substr(0,250),line:ub.lineNumber,level:h,"client.name":Dc.name},postParams:{url:Q("PAGE_NAME",window.location.href),file:ub.fileName},method:"POST"};Dc.version&&(Xa["client.version"]=Dc.version);if(Xa.postParams){ub.stack&&(Xa.postParams.stack=ub.stack);for(var dk=u(Object.keys(Dc)),bg=dk.next();!bg.done;bg=dk.next()){var ek=bg.value;Xa.postParams["client."+ek]=Dc[ek]}var cg=Dh();if(cg)for(var fk=u(Object.keys(cg)),
dg=fk.next();!dg.done;dg=fk.next()){var gk=dg.value;Xa.postParams[gk]=cg[gk]}var hk=Q("SERVER_NAME"),ik=Q("SERVER_VERSION");hk&&ik&&(Xa.postParams["server.name"]=hk,Xa.postParams["server.version"]=ik)}pi(Q("ECATCHER_REPORT_HOST","")+"/error_204",Xa)}try{wn.add(va.message)}catch(jo){}xn++}}}}}else throw Ob;}else console&&console.warn&&console.warn("The YouTube player is not attached to the DOM. API calls should be made after the onReady event. See more: https://developers.google.com/youtube/iframe_api_reference#Events")};function Xn(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function Yn(a){return 0===a.search("get")||0===a.search("is")}
;function Zn(a,b){Qn.call(this,a,Object.assign({title:"video player",videoId:"",width:640,height:360},b||{}),"player");this.N={};this.playerInfo={};this.videoTitle=""}
v(Zn,Qn);n=Zn.prototype;n.Va=function(){var a=Z(this.h,"playerVars");if(a){var b={},c;for(c in a)b[c]=a[c];a=b}else a={};window!==window.top&&document.referrer&&(a.widget_referrer=document.referrer.substring(0,256));if(c=Z(this.h,"embedConfig")){if(Pa(c))try{c=JSON.stringify(c)}catch(d){console.error("Invalid embed config JSON",d)}a.embed_config=c}return a};
n.Sa=function(a){var b=a.event;a=a.info;switch(b){case "apiInfoDelivery":if(Pa(a))for(var c in a)a.hasOwnProperty(c)&&(this.N[c]=a[c]);break;case "infoDelivery":$n(this,a);break;case "initialDelivery":Pa(a)&&(window.clearInterval(this.i),this.playerInfo={},this.N={},ao(this,a.apiInterface),$n(this,a));break;default:Un(this,b,a)}};
function $n(a,b){if(Pa(b)){for(var c in b)b.hasOwnProperty(c)&&(a.playerInfo[c]=b[c]);a.playerInfo.hasOwnProperty("videoData")&&(b=a.playerInfo.videoData,b.hasOwnProperty("title")&&b.title?(b=b.title,b!==a.videoTitle&&(a.videoTitle=b,a.g.setAttribute("title",b))):(a.videoTitle="",a.g.setAttribute("title","YouTube "+Z(a.h,"title"))))}}
function ao(a,b){E(b,function(c){this[c]||("getCurrentTime"===c?this[c]=function(){var d=this.playerInfo.currentTime;if(1===this.playerInfo.playerState){var e=(Date.now()/1E3-this.playerInfo.currentTimeLastUpdated_)*this.playerInfo.playbackRate;0<e&&(d+=Math.min(e,1))}return d}:Xn(c)?this[c]=function(){this.playerInfo={};
this.N={};Wn(this,c,arguments);return this}:Yn(c)?this[c]=function(){var d=0;
0===c.search("get")?d=3:0===c.search("is")&&(d=2);return this.playerInfo[c.charAt(d).toLowerCase()+c.substr(d+1)]}:this[c]=function(){Wn(this,c,arguments);
return this})},a)}
n.getVideoEmbedCode=function(){var a=Z(this.h,"host")+("/embed/"+Z(this.h,"videoId")),b=Number(Z(this.h,"width")),c=Number(Z(this.h,"height"));if(isNaN(b)||isNaN(c))throw Error("Invalid width or height property");b=Math.floor(b);c=Math.floor(c);var d=this.videoTitle;Gb.test(a)&&(-1!=a.indexOf("&")&&(a=a.replace(Ab,"&amp;")),-1!=a.indexOf("<")&&(a=a.replace(Bb,"&lt;")),-1!=a.indexOf(">")&&(a=a.replace(Cb,"&gt;")),-1!=a.indexOf('"')&&(a=a.replace(Db,"&quot;")),-1!=a.indexOf("'")&&(a=a.replace(Eb,"&#39;")),
-1!=a.indexOf("\x00")&&(a=a.replace(Fb,"&#0;")));return'<iframe width="'+b+'" height="'+c+'" src="'+a+'" title="'+((null!=d?d:"YouTube video player")+'" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')};
n.getOptions=function(a){return this.N.namespaces?a?this.N[a]?this.N[a].options||[]:[]:this.N.namespaces||[]:[]};
n.getOption=function(a,b){if(this.N.namespaces&&a&&b&&this.N[a])return this.N[a][b]};
function fo(a){if("iframe"!==a.tagName.toLowerCase()){var b=Kn(a,"videoid");b&&(b={videoId:b,width:Kn(a,"width"),height:Kn(a,"height")},new Zn(a,b))}}
;B("YT.PlayerState.UNSTARTED",-1);B("YT.PlayerState.ENDED",0);B("YT.PlayerState.PLAYING",1);B("YT.PlayerState.PAUSED",2);B("YT.PlayerState.BUFFERING",3);B("YT.PlayerState.CUED",5);B("YT.get",function(a){return Gn[a]});
B("YT.scan",Jn);B("YT.subscribe",function(a,b,c){xg.subscribe(a,b,c);In[a]=!0;for(var d in Gn)Gn.hasOwnProperty(d)&&Tn(Gn[d],a)});
B("YT.unsubscribe",function(a,b,c){wg(a,b,c)});
B("YT.Player",Zn);Qn.prototype.destroy=Qn.prototype.destroy;Qn.prototype.setSize=Qn.prototype.setSize;Qn.prototype.getIframe=Qn.prototype.getIframe;Qn.prototype.addEventListener=Qn.prototype.addEventListener;Zn.prototype.getVideoEmbedCode=Zn.prototype.getVideoEmbedCode;Zn.prototype.getOptions=Zn.prototype.getOptions;Zn.prototype.getOption=Zn.prototype.getOption;
Hn.push(function(a){var b=a;b||(b=document);a=gb(b.getElementsByTagName("yt:player"));var c=b||document;if(c.querySelectorAll&&c.querySelector)b=c.querySelectorAll(".yt-player");else{var d;c=document;b=b||c;if(b.querySelectorAll&&b.querySelector)b=b.querySelectorAll(".yt-player");else if(b.getElementsByClassName){var e=b.getElementsByClassName("yt-player");b=e}else{e=b.getElementsByTagName("*");var f={};for(c=d=0;b=e[c];c++){var g=b.className,h;if(h="function"==typeof g.split)h=0<=bb(g.split(/\s+/),
"yt-player");h&&(f[d++]=b)}f.length=d;b=f}}b=gb(b);E(fb(a,b),fo)});
"undefined"!=typeof YTConfig&&YTConfig.parsetags&&"onload"!=YTConfig.parsetags||Jn();var go=z.onYTReady;go&&go();var ho=z.onYouTubeIframeAPIReady;ho&&ho();var io=z.onYouTubePlayerAPIReady;io&&io();}).call(this);
