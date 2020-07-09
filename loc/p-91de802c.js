import{h as r,H as n}from"./p-4fe2924d.js";const t=({props:t,classes:o},e)=>r(n,Object.assign({},t,{class:o}),e);
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var o=function(r,n){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,n){r.__proto__=n}||function(r,n){for(var t in n)n.hasOwnProperty(t)&&(r[t]=n[t])})(r,n)};function e(r,n){function t(){this.constructor=r}o(r,n),r.prototype=null===n?Object.create(n):(t.prototype=n.prototype,new t)}var i=function(){return(i=Object.assign||function(r){for(var n,t=1,o=arguments.length;t<o;t++)for(var e in n=arguments[t])Object.prototype.hasOwnProperty.call(n,e)&&(r[e]=n[e]);return r}).apply(this,arguments)};function f(r){var n="function"==typeof Symbol&&Symbol.iterator,t=n&&r[n],o=0;if(t)return t.call(r);if(r&&"number"==typeof r.length)return{next:function(){return r&&o>=r.length&&(r=void 0),{value:r&&r[o++],done:!r}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}function a(r,n){var t="function"==typeof Symbol&&r[Symbol.iterator];if(!t)return r;var o,e,i=t.call(r),f=[];try{for(;(void 0===n||n-- >0)&&!(o=i.next()).done;)f.push(o.value)}catch(r){e={error:r}}finally{try{o&&!o.done&&(t=i.return)&&t.call(i)}finally{if(e)throw e.error}}return f}function c(){for(var r=[],n=0;n<arguments.length;n++)r=r.concat(a(arguments[n]));return r}export{t as U,c as _,e as a,i as b,f as c}