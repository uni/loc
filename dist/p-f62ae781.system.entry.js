var __spreadArray=this&&this.__spreadArray||function(t,e){for(var i=0,s=e.length,a=t.length;i<s;i++,a++)t[a]=e[i];return t};System.register(["./p-af2b77e8.system.js","./p-bb00a26f.system.js","./p-59b126bc.system.js","./p-7bf2f29c.system.js","./p-a821f331.system.js","./p-7caf6de2.system.js"],(function(t){"use strict";var e,i,s,a,n,r,c;return{setters:[function(t){e=t.r;i=t.g},function(t){s=t.i;a=t.e},function(t){n=t.u},function(t){r=t.u},function(t){c=t.u},function(){}],execute:function(){var o=t("uni_modify",function(){function t(t){e(this,t);this.inactive=false;this.activate=false;this.activateNext=false;this.all=false;this.bindStart="{{";this.bindEnd="}}"}t.prototype.componentDidRender=function(){var t=this;var e=this,i=e.el,c=e.inactive,o=e.activate,f=e.state,u=e.action,d=e.all,b=e.selector,h=e.prop;var p;if(!c||o){if(s(f)){switch(u){case"currency":p=n(f).toFixed(2);break;case"decrement":p=(n(f)*100-(n(this.value)||1)*100)/100;break;case"increment":p=(n(f)*100+(n(this.value)||1)*100)/100;break;case"isBind":p=a(f,this.bindStart,this.bindEnd);break;case"isNotBind":p=!a(f,this.bindStart,this.bindEnd);break;case"push":p=__spreadArray(__spreadArray([],n(f)||[]),[n(this.value)]);break;case"stringify":p=JSON.stringify(f);break;case"toggle":p=!n(f);break;case"toUpperCase":p=f===null||f===void 0?void 0:f.toUpperCase();break;case"unbind":p=!a(f,this.bindStart,this.bindEnd)?f:undefined;break}if(s(p)){r(i,h,p,d,b);if(this.activateNext){r(i,"activate",true,d,b)}}}setTimeout((function(){return t.activate=false}))}};t.prototype.componentDidLoad=function(){c("uni-modify","flex")};Object.defineProperty(t.prototype,"el",{get:function(){return i(this)},enumerable:false,configurable:true});return t}())}}}));