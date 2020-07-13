/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var t=function(n,i){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var i in n)n.hasOwnProperty(i)&&(t[i]=n[i])})(n,i)};function n(n,i){function e(){this.constructor=n}t(n,i),n.prototype=null===i?Object.create(i):(e.prototype=i.prototype,new e)}var i=function(){return(i=Object.assign||function(t){for(var n,i=1,e=arguments.length;i<e;i++)for(var r in n=arguments[i])Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r]);return t}).apply(this,arguments)};function e(t){var n="function"==typeof Symbol&&Symbol.iterator,i=n&&t[n],e=0;if(i)return i.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&e>=t.length&&(t=void 0),{value:t&&t[e++],done:!t}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}function r(t,n){var i="function"==typeof Symbol&&t[Symbol.iterator];if(!i)return t;var e,r,o=i.call(t),u=[];try{for(;(void 0===n||n-- >0)&&!(e=o.next()).done;)u.push(e.value)}catch(t){r={error:t}}finally{try{e&&!e.done&&(i=o.return)&&i.call(o)}finally{if(r)throw r.error}}return u}function o(){for(var t=[],n=0;n<arguments.length;n++)t=t.concat(r(arguments[n]));return t}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var u,s=function(){function t(t){void 0===t&&(t={}),this.adapter=t}return Object.defineProperty(t,"cssClasses",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{}},enumerable:!0,configurable:!0}),t.prototype.init=function(){},t.prototype.destroy=function(){},t}(),c=function(){function t(t,n){for(var i=[],e=2;e<arguments.length;e++)i[e-2]=arguments[e];this.root=t,this.initialize.apply(this,o(i)),this.foundation=void 0===n?this.getDefaultFoundation():n,this.foundation.init(),this.initialSyncWithDOM()}return t.attachTo=function(n){return new t(n,new s({}))},t.prototype.initialize=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n]},t.prototype.getDefaultFoundation=function(){throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class")},t.prototype.initialSyncWithDOM=function(){},t.prototype.destroy=function(){this.foundation.destroy()},t.prototype.listen=function(t,n,i){this.root.addEventListener(t,n,i)},t.prototype.unlisten=function(t,n,i){this.root.removeEventListener(t,n,i)},t.prototype.emit=function(t,n,i){var e;void 0===i&&(i=!1),"function"==typeof CustomEvent?e=new CustomEvent(t,{bubbles:i,detail:n}):(e=document.createEvent("CustomEvent")).initCustomEvent(t,i,!1,n),this.root.dispatchEvent(e)},t}();
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
function a(t,n){if(t.closest)return t.closest(n);for(var i=t;i;){if(f(i,n))return i;i=i.parentElement}return null}function f(t,n){return(t.matches||t.webkitMatchesSelector||t.msMatchesSelector).call(t,n)}
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
function h(t){return void 0===t&&(t=window),!!function(t){void 0===t&&(t=window);var n=!1;try{var i={get passive(){return n=!0,!1}},e=function(){};t.document.addEventListener("test",e,i),t.document.removeEventListener("test",e,i)}catch(t){n=!1}return n}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */(t)&&{passive:!0}}var d={BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation",ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded"},l={VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top"},v={DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,INITIAL_ORIGIN_SCALE:.6,PADDING:10,TAP_DELAY_MS:300},m=["touchstart","pointerdown","mousedown","keydown"],p=["touchend","pointerup","mouseup","contextmenu"],b=[],g=function(t){function e(n){var r=t.call(this,i(i({},e.defaultAdapter),n))||this;return r.activationAnimationHasEnded_=!1,r.activationTimer_=0,r.fgDeactivationRemovalTimer_=0,r.fgScale_="0",r.frame_={width:0,height:0},r.initialSize_=0,r.layoutFrame_=0,r.maxRadius_=0,r.unboundedCoords_={left:0,top:0},r.activationState_=r.defaultActivationState_(),r.activationTimerCallback_=function(){r.activationAnimationHasEnded_=!0,r.runDeactivationUXLogicIfReady_()},r.activateHandler_=function(t){return r.activate_(t)},r.deactivateHandler_=function(){return r.deactivate_()},r.focusHandler_=function(){return r.handleFocus()},r.blurHandler_=function(){return r.handleBlur()},r.resizeHandler_=function(){return r.layout()},r}return n(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return d},enumerable:!0,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return l},enumerable:!0,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return v},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},browserSupportsCssVars:function(){return!0},computeBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},containsEventTarget:function(){return!0},deregisterDocumentInteractionHandler:function(){},deregisterInteractionHandler:function(){},deregisterResizeHandler:function(){},getWindowPageOffset:function(){return{x:0,y:0}},isSurfaceActive:function(){return!0},isSurfaceDisabled:function(){return!0},isUnbounded:function(){return!0},registerDocumentInteractionHandler:function(){},registerInteractionHandler:function(){},registerResizeHandler:function(){},removeClass:function(){},updateCssVariable:function(){}}},enumerable:!0,configurable:!0}),e.prototype.init=function(){var t=this,n=this.supportsPressRipple_();if(this.registerRootHandlers_(n),n){var i=e.cssClasses,r=i.ROOT,o=i.UNBOUNDED;requestAnimationFrame((function(){t.adapter.addClass(r),t.adapter.isUnbounded()&&(t.adapter.addClass(o),t.layoutInternal_())}))}},e.prototype.destroy=function(){var t=this;if(this.supportsPressRipple_()){this.activationTimer_&&(clearTimeout(this.activationTimer_),this.activationTimer_=0,this.adapter.removeClass(e.cssClasses.FG_ACTIVATION)),this.fgDeactivationRemovalTimer_&&(clearTimeout(this.fgDeactivationRemovalTimer_),this.fgDeactivationRemovalTimer_=0,this.adapter.removeClass(e.cssClasses.FG_DEACTIVATION));var n=e.cssClasses,i=n.ROOT,r=n.UNBOUNDED;requestAnimationFrame((function(){t.adapter.removeClass(i),t.adapter.removeClass(r),t.removeCssVars_()}))}this.deregisterRootHandlers_(),this.deregisterDeactivationHandlers_()},e.prototype.activate=function(t){this.activate_(t)},e.prototype.deactivate=function(){this.deactivate_()},e.prototype.layout=function(){var t=this;this.layoutFrame_&&cancelAnimationFrame(this.layoutFrame_),this.layoutFrame_=requestAnimationFrame((function(){t.layoutInternal_(),t.layoutFrame_=0}))},e.prototype.setUnbounded=function(t){var n=e.cssClasses.UNBOUNDED;t?this.adapter.addClass(n):this.adapter.removeClass(n)},e.prototype.handleFocus=function(){var t=this;requestAnimationFrame((function(){return t.adapter.addClass(e.cssClasses.BG_FOCUSED)}))},e.prototype.handleBlur=function(){var t=this;requestAnimationFrame((function(){return t.adapter.removeClass(e.cssClasses.BG_FOCUSED)}))},e.prototype.supportsPressRipple_=function(){return this.adapter.browserSupportsCssVars()},e.prototype.defaultActivationState_=function(){return{activationEvent:void 0,hasDeactivationUXRun:!1,isActivated:!1,isProgrammatic:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1}},e.prototype.registerRootHandlers_=function(t){var n=this;t&&(m.forEach((function(t){n.adapter.registerInteractionHandler(t,n.activateHandler_)})),this.adapter.isUnbounded()&&this.adapter.registerResizeHandler(this.resizeHandler_)),this.adapter.registerInteractionHandler("focus",this.focusHandler_),this.adapter.registerInteractionHandler("blur",this.blurHandler_)},e.prototype.registerDeactivationHandlers_=function(t){var n=this;"keydown"===t.type?this.adapter.registerInteractionHandler("keyup",this.deactivateHandler_):p.forEach((function(t){n.adapter.registerDocumentInteractionHandler(t,n.deactivateHandler_)}))},e.prototype.deregisterRootHandlers_=function(){var t=this;m.forEach((function(n){t.adapter.deregisterInteractionHandler(n,t.activateHandler_)})),this.adapter.deregisterInteractionHandler("focus",this.focusHandler_),this.adapter.deregisterInteractionHandler("blur",this.blurHandler_),this.adapter.isUnbounded()&&this.adapter.deregisterResizeHandler(this.resizeHandler_)},e.prototype.deregisterDeactivationHandlers_=function(){var t=this;this.adapter.deregisterInteractionHandler("keyup",this.deactivateHandler_),p.forEach((function(n){t.adapter.deregisterDocumentInteractionHandler(n,t.deactivateHandler_)}))},e.prototype.removeCssVars_=function(){var t=this,n=e.strings;Object.keys(n).forEach((function(i){0===i.indexOf("VAR_")&&t.adapter.updateCssVariable(n[i],null)}))},e.prototype.activate_=function(t){var n=this;if(!this.adapter.isSurfaceDisabled()){var i=this.activationState_;if(!i.isActivated){var e=this.previousActivationEvent_;e&&void 0!==t&&e.type!==t.type||(i.isActivated=!0,i.isProgrammatic=void 0===t,i.activationEvent=t,i.wasActivatedByPointer=!i.isProgrammatic&&void 0!==t&&("mousedown"===t.type||"touchstart"===t.type||"pointerdown"===t.type),void 0!==t&&b.length>0&&b.some((function(t){return n.adapter.containsEventTarget(t)}))?this.resetActivationState_():(void 0!==t&&(b.push(t.target),this.registerDeactivationHandlers_(t)),i.wasElementMadeActive=this.checkElementMadeActive_(t),i.wasElementMadeActive&&this.animateActivation_(),requestAnimationFrame((function(){b=[],i.wasElementMadeActive||void 0===t||" "!==t.key&&32!==t.keyCode||(i.wasElementMadeActive=n.checkElementMadeActive_(t),i.wasElementMadeActive&&n.animateActivation_()),i.wasElementMadeActive||(n.activationState_=n.defaultActivationState_())}))))}}},e.prototype.checkElementMadeActive_=function(t){return void 0===t||"keydown"!==t.type||this.adapter.isSurfaceActive()},e.prototype.animateActivation_=function(){var t=this,n=e.strings,i=n.VAR_FG_TRANSLATE_START,r=n.VAR_FG_TRANSLATE_END,o=e.cssClasses,u=o.FG_DEACTIVATION,s=o.FG_ACTIVATION,c=e.numbers.DEACTIVATION_TIMEOUT_MS;this.layoutInternal_();var a="",f="";if(!this.adapter.isUnbounded()){var h=this.getFgTranslationCoordinates_(),d=h.startPoint,l=h.endPoint;a=d.x+"px, "+d.y+"px",f=l.x+"px, "+l.y+"px"}this.adapter.updateCssVariable(i,a),this.adapter.updateCssVariable(r,f),clearTimeout(this.activationTimer_),clearTimeout(this.fgDeactivationRemovalTimer_),this.rmBoundedActivationClasses_(),this.adapter.removeClass(u),this.adapter.computeBoundingRect(),this.adapter.addClass(s),this.activationTimer_=setTimeout((function(){return t.activationTimerCallback_()}),c)},e.prototype.getFgTranslationCoordinates_=function(){var t,n=this.activationState_;return{startPoint:t={x:(t=n.wasActivatedByPointer?function(t,n,i){if(!t)return{x:0,y:0};var e,r,o=n.x+i.left,u=n.y+i.top;return"touchstart"===t.type?(e=t.changedTouches[0].pageX-o,r=t.changedTouches[0].pageY-u):(e=t.pageX-o,r=t.pageY-u),{x:e,y:r}}(n.activationEvent,this.adapter.getWindowPageOffset(),this.adapter.computeBoundingRect()):{x:this.frame_.width/2,y:this.frame_.height/2}).x-this.initialSize_/2,y:t.y-this.initialSize_/2},endPoint:{x:this.frame_.width/2-this.initialSize_/2,y:this.frame_.height/2-this.initialSize_/2}}},e.prototype.runDeactivationUXLogicIfReady_=function(){var t=this,n=e.cssClasses.FG_DEACTIVATION,i=this.activationState_;(i.hasDeactivationUXRun||!i.isActivated)&&this.activationAnimationHasEnded_&&(this.rmBoundedActivationClasses_(),this.adapter.addClass(n),this.fgDeactivationRemovalTimer_=setTimeout((function(){t.adapter.removeClass(n)}),v.FG_DEACTIVATION_MS))},e.prototype.rmBoundedActivationClasses_=function(){this.adapter.removeClass(e.cssClasses.FG_ACTIVATION),this.activationAnimationHasEnded_=!1,this.adapter.computeBoundingRect()},e.prototype.resetActivationState_=function(){var t=this;this.previousActivationEvent_=this.activationState_.activationEvent,this.activationState_=this.defaultActivationState_(),setTimeout((function(){return t.previousActivationEvent_=void 0}),e.numbers.TAP_DELAY_MS)},e.prototype.deactivate_=function(){var t=this,n=this.activationState_;if(n.isActivated){var e=i({},n);n.isProgrammatic?(requestAnimationFrame((function(){return t.animateDeactivation_(e)})),this.resetActivationState_()):(this.deregisterDeactivationHandlers_(),requestAnimationFrame((function(){t.activationState_.hasDeactivationUXRun=!0,t.animateDeactivation_(e),t.resetActivationState_()})))}},e.prototype.animateDeactivation_=function(t){(t.wasActivatedByPointer||t.wasElementMadeActive)&&this.runDeactivationUXLogicIfReady_()},e.prototype.layoutInternal_=function(){this.frame_=this.adapter.computeBoundingRect();var t=Math.max(this.frame_.height,this.frame_.width);this.maxRadius_=this.adapter.isUnbounded()?t:Math.sqrt(Math.pow(this.frame_.width,2)+Math.pow(this.frame_.height,2))+e.numbers.PADDING;var n=Math.floor(t*e.numbers.INITIAL_ORIGIN_SCALE);this.initialSize_=this.adapter.isUnbounded()&&n%2!=0?n-1:n,this.fgScale_=""+this.maxRadius_/this.initialSize_,this.updateLayoutCssVars_()},e.prototype.updateLayoutCssVars_=function(){var t=e.strings,n=t.VAR_LEFT,i=t.VAR_TOP,r=t.VAR_FG_SCALE;this.adapter.updateCssVariable(t.VAR_FG_SIZE,this.initialSize_+"px"),this.adapter.updateCssVariable(r,this.fgScale_),this.adapter.isUnbounded()&&(this.unboundedCoords_={left:Math.round(this.frame_.width/2-this.initialSize_/2),top:Math.round(this.frame_.height/2-this.initialSize_/2)},this.adapter.updateCssVariable(n,this.unboundedCoords_.left+"px"),this.adapter.updateCssVariable(i,this.unboundedCoords_.top+"px"))},e}(s),A=function(t){function i(){var n=null!==t&&t.apply(this,arguments)||this;return n.disabled=!1,n}return n(i,t),i.attachTo=function(t,n){void 0===n&&(n={isUnbounded:void 0});var e=new i(t);return void 0!==n.isUnbounded&&(e.unbounded=n.isUnbounded),e},i.createAdapter=function(t){return{addClass:function(n){return t.root.classList.add(n)},browserSupportsCssVars:function(){return function(t,n){void 0===n&&(n=!1);var i,e=window.CSS;if("boolean"==typeof u&&!n)return u;if(!e||"function"!=typeof e.supports)return!1;var r=e.supports("--css-vars","yes"),o=e.supports("(--css-vars: yes)")&&e.supports("color","#00000000");return i=r||o,n||(u=i),i}()},computeBoundingRect:function(){return t.root.getBoundingClientRect()},containsEventTarget:function(n){return t.root.contains(n)},deregisterDocumentInteractionHandler:function(t,n){return document.documentElement.removeEventListener(t,n,h())},deregisterInteractionHandler:function(n,i){return t.root.removeEventListener(n,i,h())},deregisterResizeHandler:function(t){return window.removeEventListener("resize",t)},getWindowPageOffset:function(){return{x:window.pageXOffset,y:window.pageYOffset}},isSurfaceActive:function(){return f(t.root,":active")},isSurfaceDisabled:function(){return Boolean(t.disabled)},isUnbounded:function(){return Boolean(t.unbounded)},registerDocumentInteractionHandler:function(t,n){return document.documentElement.addEventListener(t,n,h())},registerInteractionHandler:function(n,i){return t.root.addEventListener(n,i,h())},registerResizeHandler:function(t){return window.addEventListener("resize",t)},removeClass:function(n){return t.root.classList.remove(n)},updateCssVariable:function(n,i){return t.root.style.setProperty(n,i)}}},Object.defineProperty(i.prototype,"unbounded",{get:function(){return Boolean(this.unbounded_)},set:function(t){this.unbounded_=Boolean(t),this.setUnbounded_()},enumerable:!0,configurable:!0}),i.prototype.activate=function(){this.foundation.activate()},i.prototype.deactivate=function(){this.foundation.deactivate()},i.prototype.layout=function(){this.foundation.layout()},i.prototype.getDefaultFoundation=function(){return new g(i.createAdapter(this))},i.prototype.initialSyncWithDOM=function(){this.unbounded="mdcRippleIsUnbounded"in this.root.dataset},i.prototype.setUnbounded_=function(){this.foundation.setUnbounded(Boolean(this.unbounded_))},i}(c);export{s as M,n as _,i as a,A as b,c,e as d,a as e,f as m}