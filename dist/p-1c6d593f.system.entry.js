System.register(["./p-62a049dd.system.js","./p-a821f331.system.js","./p-2dea2bc9.system.js"],(function(t){"use strict";var e,i,s,n;return{setters:[function(t){e=t.r;i=t.h},function(t){s=t.u},function(t){n=t.U}],execute:function(){var o=t("uni_text_load",function(){function t(t){e(this,t);this.active=false;this.once=false;this.propagate=false;this.getBody=true;this.removeScript=true;this.place="end"}t.prototype.render=function(){var t=this,e=t.active,s=t.once,o=t.url,r=t.propagate;var u=this.suf?"uni-event-"+this.suf:"uni-event";var a=this.suf?"uni-template-"+this.suf:"uni-template";var c=this.suf?"uni-load-"+this.suf:"uni-load";return n(i(u,{active:e,once:s,listen:"uniLoadSuccess",prop:"content",stop:!r},i(a,{target:"uni-load",text:true,getBody:this.getBody,removeScript:this.removeScript},i(c,{active:e,url:o,response:"text"}))))};t.prototype.componentDidLoad=function(){s("uni-text-load","height")};return t}())}}}));