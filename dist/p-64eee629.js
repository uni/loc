import{r as e,c,h as t,F as i,g as n}from"./p-e1afa34d.js";import{u as o}from"./p-78249524.js";import{U as r}from"./p-3ab2be91.js";import{_ as a,a as m,M as d,b}from"./p-acecdfb5.js";import{m as s}from"./p-506dd586.js";import{M as k,a as h,b as u}from"./p-238c1d1d.js";var l={animationend:{cssProperty:"animation",prefixed:"webkitAnimationEnd",standard:"animationend"},animationiteration:{cssProperty:"animation",prefixed:"webkitAnimationIteration",standard:"animationiteration"},animationstart:{cssProperty:"animation",prefixed:"webkitAnimationStart",standard:"animationstart"},transitionend:{cssProperty:"transition",prefixed:"webkitTransitionEnd",standard:"transitionend"}};function f(e,c){if(function(e){return Boolean(e.document)&&"function"==typeof e.document.createElement}(e)&&c in l){var t=e.document.createElement("div"),i=l[c];return i.cssProperty in t.style?i.standard:i.prefixed}return c}var p={ANIM_CHECKED_INDETERMINATE:"mdc-checkbox--anim-checked-indeterminate",ANIM_CHECKED_UNCHECKED:"mdc-checkbox--anim-checked-unchecked",ANIM_INDETERMINATE_CHECKED:"mdc-checkbox--anim-indeterminate-checked",ANIM_INDETERMINATE_UNCHECKED:"mdc-checkbox--anim-indeterminate-unchecked",ANIM_UNCHECKED_CHECKED:"mdc-checkbox--anim-unchecked-checked",ANIM_UNCHECKED_INDETERMINATE:"mdc-checkbox--anim-unchecked-indeterminate",BACKGROUND:"mdc-checkbox__background",CHECKED:"mdc-checkbox--checked",CHECKMARK:"mdc-checkbox__checkmark",CHECKMARK_PATH:"mdc-checkbox__checkmark-path",DISABLED:"mdc-checkbox--disabled",INDETERMINATE:"mdc-checkbox--indeterminate",MIXEDMARK:"mdc-checkbox__mixedmark",NATIVE_CONTROL:"mdc-checkbox__native-control",ROOT:"mdc-checkbox",SELECTED:"mdc-checkbox--selected",UPGRADED:"mdc-checkbox--upgraded"},x={ARIA_CHECKED_ATTR:"aria-checked",ARIA_CHECKED_INDETERMINATE_VALUE:"mixed",DATA_INDETERMINATE_ATTR:"data-indeterminate",NATIVE_CONTROL_SELECTOR:".mdc-checkbox__native-control",TRANSITION_STATE_CHECKED:"checked",TRANSITION_STATE_INDETERMINATE:"indeterminate",TRANSITION_STATE_INIT:"init",TRANSITION_STATE_UNCHECKED:"unchecked"},_={ANIM_END_LATCH_MS:250},g=function(e){function c(t){var i=e.call(this,m(m({},c.defaultAdapter),t))||this;return i.currentCheckState_=x.TRANSITION_STATE_INIT,i.currentAnimationClass_="",i.animEndLatchTimer_=0,i.enableAnimationEndHandler_=!1,i}return a(c,e),Object.defineProperty(c,"cssClasses",{get:function(){return p},enumerable:!0,configurable:!0}),Object.defineProperty(c,"strings",{get:function(){return x},enumerable:!0,configurable:!0}),Object.defineProperty(c,"numbers",{get:function(){return _},enumerable:!0,configurable:!0}),Object.defineProperty(c,"defaultAdapter",{get:function(){return{addClass:function(){},forceLayout:function(){},hasNativeControl:function(){return!1},isAttachedToDOM:function(){return!1},isChecked:function(){return!1},isIndeterminate:function(){return!1},removeClass:function(){},removeNativeControlAttr:function(){},setNativeControlAttr:function(){},setNativeControlDisabled:function(){}}},enumerable:!0,configurable:!0}),c.prototype.init=function(){this.currentCheckState_=this.determineCheckState_(),this.updateAriaChecked_(),this.adapter.addClass(p.UPGRADED)},c.prototype.destroy=function(){clearTimeout(this.animEndLatchTimer_)},c.prototype.setDisabled=function(e){this.adapter.setNativeControlDisabled(e),e?this.adapter.addClass(p.DISABLED):this.adapter.removeClass(p.DISABLED)},c.prototype.handleAnimationEnd=function(){var e=this;this.enableAnimationEndHandler_&&(clearTimeout(this.animEndLatchTimer_),this.animEndLatchTimer_=setTimeout((function(){e.adapter.removeClass(e.currentAnimationClass_),e.enableAnimationEndHandler_=!1}),_.ANIM_END_LATCH_MS))},c.prototype.handleChange=function(){this.transitionCheckState_()},c.prototype.transitionCheckState_=function(){if(this.adapter.hasNativeControl()){var e=this.currentCheckState_,c=this.determineCheckState_();if(e!==c){this.updateAriaChecked_();var t=p.SELECTED;c===x.TRANSITION_STATE_UNCHECKED?this.adapter.removeClass(t):this.adapter.addClass(t),this.currentAnimationClass_.length>0&&(clearTimeout(this.animEndLatchTimer_),this.adapter.forceLayout(),this.adapter.removeClass(this.currentAnimationClass_)),this.currentAnimationClass_=this.getTransitionAnimationClass_(e,c),this.currentCheckState_=c,this.adapter.isAttachedToDOM()&&this.currentAnimationClass_.length>0&&(this.adapter.addClass(this.currentAnimationClass_),this.enableAnimationEndHandler_=!0)}}},c.prototype.determineCheckState_=function(){var e=x.TRANSITION_STATE_INDETERMINATE,c=x.TRANSITION_STATE_CHECKED,t=x.TRANSITION_STATE_UNCHECKED;return this.adapter.isIndeterminate()?e:this.adapter.isChecked()?c:t},c.prototype.getTransitionAnimationClass_=function(e,t){var i=x.TRANSITION_STATE_CHECKED,n=x.TRANSITION_STATE_UNCHECKED,o=c.cssClasses,r=o.ANIM_UNCHECKED_CHECKED,a=o.ANIM_UNCHECKED_INDETERMINATE,m=o.ANIM_CHECKED_UNCHECKED,d=o.ANIM_CHECKED_INDETERMINATE,b=o.ANIM_INDETERMINATE_CHECKED,s=o.ANIM_INDETERMINATE_UNCHECKED;switch(e){case x.TRANSITION_STATE_INIT:return t===n?"":t===i?b:s;case n:return t===i?r:a;case i:return t===n?m:d;default:return t===i?b:s}},c.prototype.updateAriaChecked_=function(){this.adapter.isIndeterminate()?this.adapter.setNativeControlAttr(x.ARIA_CHECKED_ATTR,x.ARIA_CHECKED_INDETERMINATE_VALUE):this.adapter.removeNativeControlAttr(x.ARIA_CHECKED_ATTR)},c}(d),w=["checked","indeterminate"],y=function(e){function c(){var c=null!==e&&e.apply(this,arguments)||this;return c.ripple_=c.createRipple_(),c}return a(c,e),c.attachTo=function(e){return new c(e)},Object.defineProperty(c.prototype,"ripple",{get:function(){return this.ripple_},enumerable:!0,configurable:!0}),Object.defineProperty(c.prototype,"checked",{get:function(){return this.nativeControl_.checked},set:function(e){this.nativeControl_.checked=e},enumerable:!0,configurable:!0}),Object.defineProperty(c.prototype,"indeterminate",{get:function(){return this.nativeControl_.indeterminate},set:function(e){this.nativeControl_.indeterminate=e},enumerable:!0,configurable:!0}),Object.defineProperty(c.prototype,"disabled",{get:function(){return this.nativeControl_.disabled},set:function(e){this.foundation.setDisabled(e)},enumerable:!0,configurable:!0}),Object.defineProperty(c.prototype,"value",{get:function(){return this.nativeControl_.value},set:function(e){this.nativeControl_.value=e},enumerable:!0,configurable:!0}),c.prototype.initialize=function(){var e=x.DATA_INDETERMINATE_ATTR;this.nativeControl_.indeterminate="true"===this.nativeControl_.getAttribute(e),this.nativeControl_.removeAttribute(e)},c.prototype.initialSyncWithDOM=function(){var e=this;this.handleChange_=function(){return e.foundation.handleChange()},this.handleAnimationEnd_=function(){return e.foundation.handleAnimationEnd()},this.nativeControl_.addEventListener("change",this.handleChange_),this.listen(f(window,"animationend"),this.handleAnimationEnd_),this.installPropertyChangeHooks_()},c.prototype.destroy=function(){this.ripple_.destroy(),this.nativeControl_.removeEventListener("change",this.handleChange_),this.unlisten(f(window,"animationend"),this.handleAnimationEnd_),this.uninstallPropertyChangeHooks_(),e.prototype.destroy.call(this)},c.prototype.getDefaultFoundation=function(){var e=this;return new g({addClass:function(c){return e.root.classList.add(c)},forceLayout:function(){return e.root.offsetWidth},hasNativeControl:function(){return!!e.nativeControl_},isAttachedToDOM:function(){return Boolean(e.root.parentNode)},isChecked:function(){return e.checked},isIndeterminate:function(){return e.indeterminate},removeClass:function(c){e.root.classList.remove(c)},removeNativeControlAttr:function(c){e.nativeControl_.removeAttribute(c)},setNativeControlAttr:function(c,t){e.nativeControl_.setAttribute(c,t)},setNativeControlDisabled:function(c){e.nativeControl_.disabled=c}})},c.prototype.createRipple_=function(){var e=this,c=m(m({},k.createAdapter(this)),{deregisterInteractionHandler:function(c,t){return e.nativeControl_.removeEventListener(c,t,h())},isSurfaceActive:function(){return s(e.nativeControl_,":active")},isUnbounded:function(){return!0},registerInteractionHandler:function(c,t){return e.nativeControl_.addEventListener(c,t,h())}});return new k(this.root,new u(c))},c.prototype.installPropertyChangeHooks_=function(){var e=this,c=this.nativeControl_,t=Object.getPrototypeOf(c);w.forEach((function(i){var n=Object.getOwnPropertyDescriptor(t,i);v(n)&&Object.defineProperty(c,i,{configurable:n.configurable,enumerable:n.enumerable,get:n.get,set:function(t){n.set.call(c,t),e.foundation.handleChange()}})}))},c.prototype.uninstallPropertyChangeHooks_=function(){var e=this.nativeControl_,c=Object.getPrototypeOf(e);w.forEach((function(t){var i=Object.getOwnPropertyDescriptor(c,t);v(i)&&Object.defineProperty(e,t,i)}))},Object.defineProperty(c.prototype,"nativeControl_",{get:function(){var e=x.NATIVE_CONTROL_SELECTOR,c=this.root.querySelector(e);if(!c)throw new Error("Checkbox component requires a "+e+" element");return c},enumerable:!0,configurable:!0}),c}(b);function v(e){return!!e&&"function"==typeof e.set}const z=class{constructor(t){e(this,t),this.uniCheckboxMatInitialized=c(this,"uniCheckboxMatInitialized",7),this.uniCheckboxMatChecked=c(this,"uniCheckboxMatChecked",7),this.state="unchecked",this.disabled=!1}onStateChanged(e){switch(e){case"checked":this.uniCheckboxMatChecked.emit(!0);break;default:this.uniCheckboxMatChecked.emit(!1)}}componentWillLoad(){this.dataId=this.dataId||Math.random().toString(9).substring(15)}componentDidLoad(){o("uni-checkbox-mat","checked"),this.onStateChanged(this.state),this.el.firstElementChild.addEventListener("change",(e=>{this.uniCheckboxMatChecked.emit(e.target.checked)})),setTimeout((()=>{this.uniCheckboxMatInitialized.emit(new y(this.el))}),300)}render(){const{disabled:e}=this,c="indeterminate"===this.state,n={checked:"checked"===this.state,indeterminate:c,"data-indeterminate":c.toString(),disabled:e};return r({classes:{"mdc-checkbox":!0}},t(i,null,t("input",Object.assign({type:"checkbox",id:this.dataId},n,{class:"mdc-checkbox__native-control"})),t("div",{class:"mdc-checkbox__background"},t("svg",{class:"mdc-checkbox__checkmark",viewBox:"0 0 24 24"},t("path",{fill:"none",d:"M1.73,12.91 8.1,19.28 22.79,4.59",class:"mdc-checkbox__checkmark-path"})),t("div",{class:"mdc-checkbox__mixedmark"})),t("div",{class:"mdc-checkbox__ripple"})))}get el(){return n(this)}static get watchers(){return{state:["onStateChanged"]}}};z.style='.mdc-touch-target-wrapper{display:inline}@-webkit-keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{-webkit-animation-timing-function:cubic-bezier(0, 0, 0.2, 1);animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{-webkit-animation-timing-function:cubic-bezier(0, 0, 0.2, 1);animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@-webkit-keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{-webkit-transform:scaleX(0);transform:scaleX(0)}68.2%{-webkit-animation-timing-function:cubic-bezier(0, 0, 0, 1);animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{-webkit-transform:scaleX(1);transform:scaleX(1)}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{-webkit-transform:scaleX(0);transform:scaleX(0)}68.2%{-webkit-animation-timing-function:cubic-bezier(0, 0, 0, 1);animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{-webkit-transform:scaleX(1);transform:scaleX(1)}}@-webkit-keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 1, 1);animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 1, 1);animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@-webkit-keyframes mdc-checkbox-checked-indeterminate-checkmark{from{-webkit-animation-timing-function:cubic-bezier(0, 0, 0.2, 1);animation-timing-function:cubic-bezier(0, 0, 0.2, 1);-webkit-transform:rotate(0deg);transform:rotate(0deg);opacity:1}to{-webkit-transform:rotate(45deg);transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{-webkit-animation-timing-function:cubic-bezier(0, 0, 0.2, 1);animation-timing-function:cubic-bezier(0, 0, 0.2, 1);-webkit-transform:rotate(0deg);transform:rotate(0deg);opacity:1}to{-webkit-transform:rotate(45deg);transform:rotate(45deg);opacity:0}}@-webkit-keyframes mdc-checkbox-indeterminate-checked-checkmark{from{-webkit-animation-timing-function:cubic-bezier(0.14, 0, 0, 1);animation-timing-function:cubic-bezier(0.14, 0, 0, 1);-webkit-transform:rotate(45deg);transform:rotate(45deg);opacity:0}to{-webkit-transform:rotate(360deg);transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{-webkit-animation-timing-function:cubic-bezier(0.14, 0, 0, 1);animation-timing-function:cubic-bezier(0.14, 0, 0, 1);-webkit-transform:rotate(45deg);transform:rotate(45deg);opacity:0}to{-webkit-transform:rotate(360deg);transform:rotate(360deg);opacity:1}}@-webkit-keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{-webkit-animation-timing-function:mdc-animation-deceleration-curve-timing-function;animation-timing-function:mdc-animation-deceleration-curve-timing-function;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);opacity:0}to{-webkit-transform:rotate(0deg);transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{-webkit-animation-timing-function:mdc-animation-deceleration-curve-timing-function;animation-timing-function:mdc-animation-deceleration-curve-timing-function;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);opacity:0}to{-webkit-transform:rotate(0deg);transform:rotate(0deg);opacity:1}}@-webkit-keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{-webkit-animation-timing-function:cubic-bezier(0.14, 0, 0, 1);animation-timing-function:cubic-bezier(0.14, 0, 0, 1);-webkit-transform:rotate(0deg);transform:rotate(0deg);opacity:1}to{-webkit-transform:rotate(315deg);transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{-webkit-animation-timing-function:cubic-bezier(0.14, 0, 0, 1);animation-timing-function:cubic-bezier(0.14, 0, 0, 1);-webkit-transform:rotate(0deg);transform:rotate(0deg);opacity:1}to{-webkit-transform:rotate(315deg);transform:rotate(315deg);opacity:0}}@-webkit-keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-transform:scaleX(1);transform:scaleX(1);opacity:1}32.8%,100%{-webkit-transform:scaleX(0);transform:scaleX(0);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-transform:scaleX(1);transform:scaleX(1);opacity:1}32.8%,100%{-webkit-transform:scaleX(0);transform:scaleX(0);opacity:0}}.mdc-checkbox{display:inline-block;position:relative;-ms-flex:0 0 18px;flex:0 0 18px;-webkit-box-sizing:content-box;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom;padding:11px}.mdc-checkbox .mdc-checkbox__native-control:checked~.mdc-checkbox__background::before,.mdc-checkbox .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background::before,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background::before{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-checkbox.mdc-checkbox--selected:hover .mdc-checkbox__ripple::before{opacity:0.04}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:0.12}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{-webkit-transition:opacity 150ms linear;transition:opacity 150ms linear}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:0.12}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.12}.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-checkbox .mdc-checkbox__background{top:11px;left:11px}.mdc-checkbox .mdc-checkbox__background::before{top:-13px;left:-13px;width:40px;height:40px}.mdc-checkbox .mdc-checkbox__native-control{top:0px;right:0px;left:0px;width:40px;height:40px}.mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.54);background-color:transparent}.mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background{border-color:#018786;border-color:var(--mdc-theme-secondary, #018786);background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}@-webkit-keyframes mdc-checkbox-fade-in-background-8A000000secondary00000000secondary{0%{border-color:rgba(0, 0, 0, 0.54);background-color:transparent}50%{border-color:#018786;border-color:var(--mdc-theme-secondary, #018786);background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}}@keyframes mdc-checkbox-fade-in-background-8A000000secondary00000000secondary{0%{border-color:rgba(0, 0, 0, 0.54);background-color:transparent}50%{border-color:#018786;border-color:var(--mdc-theme-secondary, #018786);background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}}@-webkit-keyframes mdc-checkbox-fade-out-background-8A000000secondary00000000secondary{0%,80%{border-color:#018786;border-color:var(--mdc-theme-secondary, #018786);background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}100%{border-color:rgba(0, 0, 0, 0.54);background-color:transparent}}@keyframes mdc-checkbox-fade-out-background-8A000000secondary00000000secondary{0%,80%{border-color:#018786;border-color:var(--mdc-theme-secondary, #018786);background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}100%{border-color:rgba(0, 0, 0, 0.54);background-color:transparent}}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{-webkit-animation-name:mdc-checkbox-fade-in-background-8A000000secondary00000000secondary;animation-name:mdc-checkbox-fade-in-background-8A000000secondary00000000secondary}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{-webkit-animation-name:mdc-checkbox-fade-out-background-8A000000secondary00000000secondary;animation-name:mdc-checkbox-fade-out-background-8A000000secondary00000000secondary}.mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.38);background-color:transparent}.mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:transparent;background-color:rgba(0, 0, 0, 0.38)}.mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff}.mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff}@media screen and (-ms-high-contrast: active){.mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:GrayText;background-color:transparent}.mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:GrayText;background-color:transparent}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:GrayText}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:GrayText}.mdc-checkbox__mixedmark{margin:0 1px}}.mdc-checkbox--disabled{cursor:default;pointer-events:none}.mdc-checkbox__background{display:-ms-inline-flexbox;display:inline-flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;-webkit-box-sizing:border-box;box-sizing:border-box;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;background-color:transparent;pointer-events:none;will-change:background-color, border-color;-webkit-transition:background-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1), border-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1);transition:background-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1), border-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__background .mdc-checkbox__background::before{background-color:#000;background-color:var(--mdc-theme-on-surface, #000)}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;-webkit-transition:opacity 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1);transition:opacity 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--upgraded .mdc-checkbox__checkmark{opacity:1}.mdc-checkbox__checkmark-path{-webkit-transition:stroke-dashoffset 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1);transition:stroke-dashoffset 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-checkbox__mixedmark{width:100%;height:0;-webkit-transform:scaleX(0) rotate(0deg);transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;-webkit-transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1), -webkit-transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1);transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1), -webkit-transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1);transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1);transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1), -webkit-transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--upgraded .mdc-checkbox__background,.mdc-checkbox--upgraded .mdc-checkbox__checkmark,.mdc-checkbox--upgraded .mdc-checkbox__checkmark-path,.mdc-checkbox--upgraded .mdc-checkbox__mixedmark{-webkit-transition:none !important;transition:none !important}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{-webkit-animation-duration:180ms;animation-duration:180ms;-webkit-animation-timing-function:linear;animation-timing-function:linear}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{-webkit-animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear 0s;animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear 0s;-webkit-transition:none;transition:none}.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{-webkit-animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear 0s;animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear 0s;-webkit-transition:none;transition:none}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{-webkit-animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear 0s;animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear 0s;-webkit-transition:none;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{-webkit-animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear 0s;animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear 0s;-webkit-transition:none;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{-webkit-animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear 0s;animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear 0s;-webkit-transition:none;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{-webkit-animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear 0s;animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear 0s;-webkit-transition:none;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{-webkit-animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear 0s;animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear 0s;-webkit-transition:none;transition:none}.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{-webkit-animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear 0s;animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear 0s;-webkit-transition:none;transition:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background{-webkit-transition:border-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1);transition:border-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mdc-checkbox__background::before{position:absolute;-webkit-transform:scale(0, 0);transform:scale(0, 0);border-radius:50%;opacity:0;pointer-events:none;content:"";will-change:opacity, transform;-webkit-transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1), -webkit-transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1);transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1), -webkit-transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1);transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1);transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1), -webkit-transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:focus~.mdc-checkbox__background::before{-webkit-transform:scale(1);transform:scale(1);opacity:0.12;-webkit-transition:opacity 80ms 0ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 80ms 0ms cubic-bezier(0, 0, 0.2, 1);transition:opacity 80ms 0ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 80ms 0ms cubic-bezier(0, 0, 0.2, 1);transition:opacity 80ms 0ms cubic-bezier(0, 0, 0.2, 1), transform 80ms 0ms cubic-bezier(0, 0, 0.2, 1);transition:opacity 80ms 0ms cubic-bezier(0, 0, 0.2, 1), transform 80ms 0ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 80ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit}.mdc-checkbox__native-control:disabled{cursor:default;pointer-events:none}.mdc-checkbox--touch{margin-top:4px;margin-bottom:4px;margin-right:4px;margin-left:4px}.mdc-checkbox--touch .mdc-checkbox__native-control{top:-4px;right:-4px;left:-4px;width:48px;height:48px}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark{-webkit-transition:opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 180ms 0ms cubic-bezier(0, 0, 0.2, 1);transition:opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 180ms 0ms cubic-bezier(0, 0, 0.2, 1);transition:opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1), transform 180ms 0ms cubic-bezier(0, 0, 0.2, 1);transition:opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1), transform 180ms 0ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 180ms 0ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__mixedmark{-webkit-transform:scaleX(1) rotate(-45deg);transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark{-webkit-transform:rotate(45deg);transform:rotate(45deg);opacity:0;-webkit-transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1), -webkit-transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1);transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1), -webkit-transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1);transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1);transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1), -webkit-transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__mixedmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__mixedmark{-webkit-transform:scaleX(1) rotate(0deg);transform:scaleX(1) rotate(0deg);opacity:1}@-webkit-keyframes mdc-ripple-fg-radius-in{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{-webkit-transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-radius-in{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{-webkit-transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@-webkit-keyframes mdc-ripple-fg-opacity-in{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-in{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@-webkit-keyframes mdc-ripple-fg-opacity-out{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}@keyframes mdc-ripple-fg-opacity-out{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-checkbox{--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;-webkit-tap-highlight-color:rgba(0, 0, 0, 0)}.mdc-checkbox .mdc-checkbox__ripple::before,.mdc-checkbox .mdc-checkbox__ripple::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-checkbox .mdc-checkbox__ripple::before{-webkit-transition:opacity 15ms linear, background-color 15ms linear;transition:opacity 15ms linear, background-color 15ms linear;z-index:1}.mdc-checkbox.mdc-ripple-upgraded .mdc-checkbox__ripple::before{-webkit-transform:scale(var(--mdc-ripple-fg-scale, 1));transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-checkbox.mdc-ripple-upgraded .mdc-checkbox__ripple::after{top:0;left:0;-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:center center;transform-origin:center center}.mdc-checkbox.mdc-ripple-upgraded--unbounded .mdc-checkbox__ripple::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-checkbox.mdc-ripple-upgraded--foreground-activation .mdc-checkbox__ripple::after{-webkit-animation:mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards;animation:mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards}.mdc-checkbox.mdc-ripple-upgraded--foreground-deactivation .mdc-checkbox__ripple::after{-webkit-animation:mdc-ripple-fg-opacity-out 150ms;animation:mdc-ripple-fg-opacity-out 150ms;-webkit-transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-checkbox .mdc-checkbox__ripple::before,.mdc-checkbox .mdc-checkbox__ripple::after{background-color:#000;background-color:var(--mdc-theme-on-surface, #000)}.mdc-checkbox:hover .mdc-checkbox__ripple::before{opacity:0.04}.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:0.12}.mdc-checkbox:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{-webkit-transition:opacity 150ms linear;transition:opacity 150ms linear}.mdc-checkbox:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:0.12}.mdc-checkbox.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.12}.mdc-checkbox .mdc-checkbox__ripple::before,.mdc-checkbox .mdc-checkbox__ripple::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-checkbox.mdc-ripple-upgraded .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-upgraded .mdc-checkbox__ripple::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-checkbox.mdc-ripple-upgraded .mdc-checkbox__ripple::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-checkbox__ripple{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}.mdc-ripple-upgraded--background-focused .mdc-checkbox__background::before{content:none}';export{z as U}