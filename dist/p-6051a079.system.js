var __spreadArray=this&&this.__spreadArray||function(e,r){for(var t=0,n=r.length,l=e.length;t<n;t++,l++)e[l]=r[t];return e};System.register(["./p-a5f2118c.system.js"],(function(e){"use strict";var r,t;return{setters:[function(e){r=e.b;t=e.a}],execute:function(){e({a:s,u:i});function n(e,r){return r?r==="Host"||!!e.querySelector(r):!!e.firstElementChild}function l(e,t,n,l){if(!r(t)){if(e.selector){if(e.selector==="Host"){n([e.el],t)}else{var i=e.all?e.el.querySelectorAll(e.selector):[e.el.querySelector(e.selector)];if(i[0]){n(i,t);l===null||l===void 0?void 0:l.disconnect()}}}else{var s=e.all?__spreadArray([],e.el.children):[e.el.firstElementChild];if(s&&s[0]){n(s,t);l===null||l===void 0?void 0:l.disconnect()}}}}function i(e,i,s){if(t(i)&&!r(i)){if(n(e.el,e.selector)){l(e,i,s)}else{var o=new MutationObserver((function(){l(e,i,s,o)}));o.observe(e.el,{childList:true,subtree:true})}}}function s(e,r){var t=function(r,t){e.forEach((function(e){e.style[r]=t}))};for(var n=0,l=Object.entries(r);n<l.length;n++){var i=l[n],s=i[0],o=i[1];t(s,o)}}}}}));