System.register(["./p-af2b77e8.system.js","./p-a821f331.system.js","./p-2dea2bc9.system.js"],(function(t){"use strict";var e,i,n,s,r;return{setters:[function(t){e=t.r;i=t.h;n=t.g},function(t){s=t.u},function(t){r=t.U}],execute:function(){var o=t("uni_event_load",function(){function t(t){e(this,t);this.activate=false;this.inactive=false;this.multi=false;this.response="json";this.propagate=false;this.bindStart="{{";this.bindEnd="}}"}t.prototype.render=function(){return r(i("uni-event",{once:!this.multi,listen:"uniLoadSuccess",selector:this.selector,prop:this.prop,bindStart:this.bindStart,bindEnd:this.bindEnd,stop:!this.propagate},i("uni-load",{inactive:this.inactive,activate:this.activate,response:this.response,url:this.url,bindStart:this.bindStart,bindEnd:this.bindEnd},i("slot",null))))};t.prototype.componentDidLoad=function(){s("uni-event-load","some")};Object.defineProperty(t.prototype,"el",{get:function(){return n(this)},enumerable:false,configurable:true});return t}())}}}));