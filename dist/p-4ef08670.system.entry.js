System.register(["./p-af2b77e8.system.js","./p-ebcd8556.system.js","./p-a821f331.system.js","./p-2dea2bc9.system.js","./p-3e355ee7.system.js"],(function(t){"use strict";var e,i,s,n,r,a,u;return{setters:[function(t){e=t.r;i=t.h;s=t.g},function(t){n=t.d},function(t){r=t.u},function(t){a=t.U},function(t){u=t.u}],execute:function(){var o=t("uni_store_display",function(){function t(t){e(this,t);this.inactive=false;this.once=false;this.type="memory";this.feature="uni.store";this.separator=".";this.bindStart="{{";this.bindEnd="}}"}t.prototype.render=function(){var t=this,e=t.type,s=t.feature,r=t.separator,o=t.path;return n([this.type,this.feature,this.separator,this.path],this.bindStart,this.bindEnd)?a(i("uni-event",{inactive:this.inactive,once:this.once,capture:true,listen:u({type:e,feature:s,separator:r,path:o}),prop:"activate",value:true},i("uni-store-get",{type:this.type,feature:this.feature,separator:this.separator,path:this.path,equal:this.noEqual,noEqual:this.equal||true,selector:"uni-display",prop:"inactive"},i("uni-display",{inactive:true},i("slot",null))))):i("slot",null)};t.prototype.componentDidLoad=function(){r("uni-store-display","prop")};Object.defineProperty(t.prototype,"el",{get:function(){return s(this)},enumerable:false,configurable:true});return t}())}}}));