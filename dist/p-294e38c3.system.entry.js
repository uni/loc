System.register(["./p-af2b77e8.system.js","./p-a821f331.system.js","./p-2dea2bc9.system.js"],(function(t){"use strict";var e,i,n,s,a;return{setters:[function(t){e=t.r;i=t.h;n=t.g},function(t){s=t.u},function(t){a=t.U}],execute:function(){var r=t("uni_render_load",function(){function t(t){e(this,t);this.activate=false;this.inactive=false;this.multi=false;this.text=false;this.head=false;this.scripts=false;this.templatePart=false;this.propagate=false;this.bindStart="{{";this.bindEnd="}}"}t.prototype.render=function(){return a(i("uni-event",{once:!this.multi,listen:"uniLoadSuccess",prop:"value",stop:!this.propagate,bindStart:this.bindStart,bindEnd:this.bindEnd},i("uni-render",{text:this.text,head:this.head,scripts:this.scripts,templatePart:this.templatePart,insertSelector:"uni-load"},i("uni-load",{activate:this.activate,inactive:this.inactive,inactiveBind:this.inactiveBind,response:"text",url:this.url,bindStart:this.bindStart,bindEnd:this.bindEnd}))))};t.prototype.componentDidLoad=function(){s("uni-render-load","block")};Object.defineProperty(t.prototype,"el",{get:function(){return n(this)},enumerable:false,configurable:true});return t}())}}}));