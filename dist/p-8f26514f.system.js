var __awaiter=this&&this.__awaiter||function(t,e,n,r){function i(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,a){function o(t){try{c(r.next(t))}catch(e){a(e)}}function u(t){try{c(r["throw"](t))}catch(e){a(e)}}function c(t){t.done?n(t.value):i(t.value).then(o,u)}c((r=r.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var n={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},r,i,a,o;return o={next:u(0),throw:u(1),return:u(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function u(t){return function(e){return c([t,e])}}function c(o){if(r)throw new TypeError("Generator is already executing.");while(n)try{if(r=1,i&&(a=o[0]&2?i["return"]:o[0]?i["throw"]||((a=i["return"])&&a.call(i),0):i.next)&&!(a=a.call(i,o[1])).done)return a;if(i=0,a)o=[o[0]&2,a.value];switch(o[0]){case 0:case 1:a=o;break;case 4:n.label++;return{value:o[1],done:false};case 5:n.label++;i=o[1];o=[0];continue;case 7:o=n.ops.pop();n.trys.pop();continue;default:if(!(a=n.trys,a=a.length>0&&a[a.length-1])&&(o[0]===6||o[0]===2)){n=0;continue}if(o[0]===3&&(!a||o[1]>a[0]&&o[1]<a[3])){n.label=o[1];break}if(o[0]===6&&n.label<a[1]){n.label=a[1];a=o;break}if(a&&n.label<a[2]){n.label=a[2];n.ops.push(o);break}if(a[2])n.ops.pop();n.trys.pop();continue}o=e.call(t,n)}catch(u){o=[6,u];i=0}finally{r=a=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};System.register([],(function(t){"use strict";return{execute:function(){t({a:e,u:n});function e(t,e,n){return __awaiter(this,void 0,void 0,(function(){var r;return __generator(this,(function(i){switch(i.label){case 0:return[4,fetch(t,n)];case 1:r=i.sent();return[4,r[e]()];case 2:return[2,i.sent()]}}))}))}function n(t,n,r){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(i){switch(i.label){case 0:return[4,e(t,n,r)];case 1:return[2,i.sent()]}}))}))}}}}));