System.register(["./p-af2b77e8.system.js","./p-a821f331.system.js","./p-2dea2bc9.system.js","./p-629002e1.system.js","./p-bb00a26f.system.js"],(function(t){"use strict";var e,i,s,r,n,a;return{setters:[function(t){e=t.r;i=t.h;s=t.g},function(t){r=t.u},function(t){n=t.U},function(t){a=t.u},function(){}],execute:function(){var o=t("uni_store_display",function(){function t(t){e(this,t);this.inactive=false;this.once=false;this.top=false;this.type="memory";this.feature="uni.store";this.separator="."}t.prototype.render=function(){var t=this,e=t.type,s=t.feature,r=t.separator,o=t.path;return n(i("uni-event",{inactive:this.inactive,once:this.once,capture:true,listen:a({type:e,feature:s,separator:r,path:o}),prop:"activate",value:true},i("uni-store-get",{top:this.top,type:this.type,feature:this.feature,separator:this.separator,path:this.path,invert:true,equal:this.equal,noEqual:this.noEqual,selector:"uni-display",prop:"inactive"},i("uni-display",{inactive:true},i("slot",null)))))};t.prototype.componentDidLoad=function(){r("uni-store-display","prop")};Object.defineProperty(t.prototype,"el",{get:function(){return s(this)},enumerable:false,configurable:true});return t}())}}}));