System.register([],(function(t){"use strict";return{execute:function(){t({_:n,c:o,d:u,e:i});var e=function(t,n){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n))t[n]=e[n]};return e(t,n)};function n(t,n){if(typeof n!=="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}var r=t("a",(function(){r=t("a",Object.assign||function t(e){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var i in n)if(Object.prototype.hasOwnProperty.call(n,i))e[i]=n[i]}return e});return r.apply(this,arguments)}));function o(t){var e=typeof Symbol==="function"&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&typeof t.length==="number")return{next:function(){if(t&&r>=t.length)t=void 0;return{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function i(t,e){var n=typeof Symbol==="function"&&t[Symbol.iterator];if(!n)return t;var r=n.call(t),o,i=[],u;try{while((e===void 0||e-- >0)&&!(o=r.next()).done)i.push(o.value)}catch(f){u={error:f}}finally{try{if(o&&!o.done&&(n=r["return"]))n.call(r)}finally{if(u)throw u.error}}return i}function u(t,e,n){if(n||arguments.length===2)for(var r=0,o=e.length,i;r<o;r++){if(i||!(r in e)){if(!i)i=Array.prototype.slice.call(e,0,r);i[r]=e[r]}}return t.concat(i||e)}var f=t("M",function(){function t(t){if(t===void 0){t={}}this.adapter=t}Object.defineProperty(t,"cssClasses",{get:function(){return{}},enumerable:false,configurable:true});Object.defineProperty(t,"strings",{get:function(){return{}},enumerable:false,configurable:true});Object.defineProperty(t,"numbers",{get:function(){return{}},enumerable:false,configurable:true});Object.defineProperty(t,"defaultAdapter",{get:function(){return{}},enumerable:false,configurable:true});t.prototype.init=function(){};t.prototype.destroy=function(){};return t}());var a=t("b",function(){function t(t,e){var n=[];for(var r=2;r<arguments.length;r++){n[r-2]=arguments[r]}this.root=t;this.initialize.apply(this,u([],i(n)));this.foundation=e===undefined?this.getDefaultFoundation():e;this.foundation.init();this.initialSyncWithDOM()}t.attachTo=function(e){return new t(e,new f({}))};t.prototype.initialize=function(){var t=[];for(var e=0;e<arguments.length;e++){t[e]=arguments[e]}};t.prototype.getDefaultFoundation=function(){throw new Error("Subclasses must override getDefaultFoundation to return a properly configured "+"foundation class")};t.prototype.initialSyncWithDOM=function(){};t.prototype.destroy=function(){this.foundation.destroy()};t.prototype.listen=function(t,e,n){this.root.addEventListener(t,e,n)};t.prototype.unlisten=function(t,e,n){this.root.removeEventListener(t,e,n)};t.prototype.emit=function(t,e,n){if(n===void 0){n=false}var r;if(typeof CustomEvent==="function"){r=new CustomEvent(t,{bubbles:n,detail:e})}else{r=document.createEvent("CustomEvent");r.initCustomEvent(t,n,false,e)}this.root.dispatchEvent(r)};return t}())}}}));