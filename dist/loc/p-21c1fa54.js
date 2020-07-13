import{h as t,a as n,r as i,g as o}from"./p-1f59172b.js";import{U as e}from"./p-4fbe91b2.js";import{_ as r,a as c,M as a,b as s,c as l}from"./p-9dc32dc7.js";import{u as d,a as u}from"./p-489b84ee.js";
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
 */var p={ICON_BUTTON_ON:"mdc-icon-button--on",ROOT:"mdc-icon-button"},f={ARIA_LABEL:"aria-label",ARIA_PRESSED:"aria-pressed",DATA_ARIA_LABEL_OFF:"data-aria-label-off",DATA_ARIA_LABEL_ON:"data-aria-label-on",CHANGE_EVENT:"MDCIconButtonToggle:change"},m=function(t){function n(i){var o=t.call(this,c(c({},n.defaultAdapter),i))||this;return o.hasToggledAriaLabel=!1,o}return r(n,t),Object.defineProperty(n,"cssClasses",{get:function(){return p},enumerable:!0,configurable:!0}),Object.defineProperty(n,"strings",{get:function(){return f},enumerable:!0,configurable:!0}),Object.defineProperty(n,"defaultAdapter",{get:function(){return{addClass:function(){},hasClass:function(){return!1},notifyChange:function(){},removeClass:function(){},getAttr:function(){return null},setAttr:function(){}}},enumerable:!0,configurable:!0}),n.prototype.init=function(){var t=this.adapter.getAttr(f.DATA_ARIA_LABEL_ON),n=this.adapter.getAttr(f.DATA_ARIA_LABEL_OFF);if(t&&n){if(null!==this.adapter.getAttr(f.ARIA_PRESSED))throw new Error("MDCIconButtonToggleFoundation: Button should not set `aria-pressed` if it has a toggled aria label.");this.hasToggledAriaLabel=!0}else this.adapter.setAttr(f.ARIA_PRESSED,String(this.isOn()))},n.prototype.handleClick=function(){this.toggle(),this.adapter.notifyChange({isOn:this.isOn()})},n.prototype.isOn=function(){return this.adapter.hasClass(p.ICON_BUTTON_ON)},n.prototype.toggle=function(t){if(void 0===t&&(t=!this.isOn()),t?this.adapter.addClass(p.ICON_BUTTON_ON):this.adapter.removeClass(p.ICON_BUTTON_ON),this.hasToggledAriaLabel){var n=this.adapter.getAttr(t?f.DATA_ARIA_LABEL_ON:f.DATA_ARIA_LABEL_OFF);this.adapter.setAttr(f.ARIA_LABEL,n||"")}else this.adapter.setAttr(f.ARIA_PRESSED,""+t)},n}(a),b=m.strings,g=function(t){function n(){var n=null!==t&&t.apply(this,arguments)||this;return n.rippleComponent=n.createRipple(),n}return r(n,t),n.attachTo=function(t){return new n(t)},n.prototype.initialSyncWithDOM=function(){var t=this;this.handleClick=function(){t.foundation.handleClick()},this.listen("click",this.handleClick)},n.prototype.destroy=function(){this.unlisten("click",this.handleClick),this.ripple.destroy(),t.prototype.destroy.call(this)},n.prototype.getDefaultFoundation=function(){var t=this;return new m({addClass:function(n){return t.root.classList.add(n)},hasClass:function(n){return t.root.classList.contains(n)},notifyChange:function(n){t.emit(b.CHANGE_EVENT,n)},removeClass:function(n){return t.root.classList.remove(n)},getAttr:function(n){return t.root.getAttribute(n)},setAttr:function(n,i){return t.root.setAttribute(n,i)}})},Object.defineProperty(n.prototype,"ripple",{get:function(){return this.rippleComponent},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"on",{get:function(){return this.foundation.isOn()},set:function(t){this.foundation.toggle(t)},enumerable:!0,configurable:!0}),n.prototype.createRipple=function(){var t=new s(this.root);return t.unbounded=!0,t},n}(l);function h(t){return new g(t)}const v=Object.assign(Object.assign({},{toggle:"mdc-icon-button__icon",on:"mdc-icon-button__icon--on"}),{button:"mdc-icon-button",on:"mdc-icon-button--on"}),y=class{constructor(t){i(this,t),this.disabled=!1,this.toggle=!1,this.on=!1}onHandler(){h(this.el.querySelector("button"))}connectedCallback(){u(this.el)}componentDidLoad(){var t;t=this.el.querySelector("button"),d(t,!0),h(t)}render(){const{disabled:i}=this;return(({props:i,classes:o},e)=>t(n,{"aria-disabled":i.disabled?"true":null},t("button",Object.assign({},i,{class:o}),e)))({props:{disabled:i},classes:{[v.button]:!0,[v.on]:this.on}},t("uni-icon-mat",null,t("slot",null)))}get el(){return o(this)}static get watchers(){return{on:["onHandler"]}}};y.style='.mdc-icon-button{display:inline-block;position:relative;box-sizing:border-box;border:none;outline:none;background-color:transparent;fill:currentColor;color:inherit;font-size:24px;text-decoration:none;cursor:pointer;user-select:none;width:48px;height:48px;padding:12px}.mdc-icon-button svg,.mdc-icon-button img{width:24px;height:24px}.mdc-icon-button:disabled{color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-disabled-on-light, rgba(0, 0, 0, 0.38))}.mdc-icon-button:disabled{cursor:default;pointer-events:none}.mdc-icon-button__icon{display:inline-block}.mdc-icon-button__icon.mdc-icon-button__icon--on{display:none}.mdc-icon-button--on .mdc-icon-button__icon{display:none}.mdc-icon-button--on .mdc-icon-button__icon.mdc-icon-button__icon--on{display:inline-block}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-icon-button{--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;-webkit-tap-highlight-color:rgba(0, 0, 0, 0)}.mdc-icon-button::before,.mdc-icon-button::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-icon-button::before{transition:opacity 15ms linear, background-color 15ms linear;z-index:1}.mdc-icon-button.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-icon-button.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-icon-button.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-icon-button.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards}.mdc-icon-button.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-icon-button::before,.mdc-icon-button::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-icon-button.mdc-ripple-upgraded::before,.mdc-icon-button.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-icon-button.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-icon-button::before,.mdc-icon-button::after{background-color:#000}.mdc-icon-button:hover::before{opacity:0.04}.mdc-icon-button.mdc-ripple-upgraded--background-focused::before,.mdc-icon-button:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12}.mdc-icon-button:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-icon-button:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12}.mdc-icon-button.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.12}';const _=class{constructor(t){i(this,t)}};_.style='@font-face{font-family:"Material Icons";font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/s/materialicons/v50/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2) format("woff2")}';const w=class{constructor(t){i(this,t)}render(){return e({classes:{"material-icons":!0}},t("slot",null))}};w.style='.material-icons{font-family:"Material Icons";font-weight:normal;font-style:normal;font-size:24px;font-size:var(--uni-icon-mat-size, 24px);display:inline-block;line-height:1;text-transform:none;letter-spacing:normal;word-wrap:normal;white-space:nowrap;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}';export{y as U,w as a,_ as b}