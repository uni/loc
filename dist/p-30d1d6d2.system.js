var __spreadArray=this&&this.__spreadArray||function(e,r){for(var t=0,l=r.length,i=e.length;t<l;t++,i++)e[i]=r[t];return e};System.register(["./p-0db4adc1.system.js"],(function(e){"use strict";var r,t;return{setters:[function(e){r=e.b;t=e.a}],execute:function(){e("u",n);function l(e,r){return r?r==="Host"||!!e.querySelector(r):!!e.firstElementChild}function i(e,t,l,i){if(!r(t)){if(e.selector){if(e.selector==="Host"){l([e.el],t)}else{var n=e.all?e.el.querySelectorAll(e.selector):[e.el.querySelector(e.selector)];if(n[0]){l(n,t);i===null||i===void 0?void 0:i.disconnect()}}}else{var s=e.all?__spreadArray([],e.el.children):[e.el.firstElementChild];if(s&&s[0]){l(s,t);i===null||i===void 0?void 0:i.disconnect()}}}}function n(e,n,s){if(t(n)&&!r(n)){if(l(e.el,e.selector)){i(e,n,s)}else{var o=new MutationObserver((function(){i(e,n,s,o)}));o.observe(e.el,{childList:true,subtree:true})}}}}}}));