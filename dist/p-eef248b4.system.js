System.register(["./p-af2b77e8.system.js","./p-a821f331.system.js","./p-224ad635.system.js","./p-a8668d1b.system.js"],(function(t){"use strict";var n,e,a,i,s,r,u;return{setters:[function(t){n=t.r;e=t.h},function(t){a=t.u},function(t){i=t.U},function(t){s=t.u;r=t.U;u=t.a}],execute:function(){var o=".uni-lang-menu .mdc-button{min-width:0;padding-right:2px}.uni-lang-menu .mdc-deprecated-list-item__graphic{margin-right:5px}.uni-lang-menu .mdc-button__icon{margin-left:0 !important;margin-right:0 !important;width:auto !important}.uni-lang-menu .mdc-button__icon svg{width:auto !important}.uni-lang-menu .uni-space{margin-left:.5em}";var l=t("U",function(){function t(t){n(this,t);this.mini=false;this.round=false;this.routing=false;this.route="lang";this.top=false;this.shadow=false;this.frame=false;this.type="memory";this.feature="uni.store";this.separator=".";this.activePath="app.loc.active";this.translatePath="app.loc.translate";this.only=false;this.languages=[]}t.prototype.onList=function(t){var n=this;this.languages=[];s(t).then((function(t){if(t===void 0){t=[]}setTimeout((function(){n.languages=t;n.lang=t.filter((function(t){return t.lang===n.select}))[0]||t[0]}),100)}))};t.prototype.render=function(){var t=this,n=t.top,a=t.shadow,s=t.frame,o=t.type,l=t.feature,h=t.separator,g=t.mini,f=t.round,c=t.routing,m=t.route,p=t.activePath,d=t.translatePath,y=t.languages,v=t.lang;var w={"uni-lang-menu":true};var b;if(this.languages.length){b=r({top:n,shadow:true,frame:s,type:o,feature:l,separator:h,activePath:p,mini:g,round:f,routing:c,route:m,languages:y,lang:v})}return this.only?i({classes:w},e("slot",null)):u({top:n,shadow:a,frame:s,type:o,feature:l,separator:h,activePath:p,translatePath:d},b)};t.prototype.componentWillLoad=function(){a("uni-lang-menu-shadow","input");if(!this.languages.length){this.onList(this.list)}};Object.defineProperty(t,"watchers",{get:function(){return{list:["onList"]}},enumerable:false,configurable:true});return t}());l.style=o}}}));