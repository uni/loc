import{r as i,c as t,h as n,F as o,g as e}from"./p-e1afa34d.js";import{u as a}from"./p-78249524.js";import{U as r}from"./p-3ab2be91.js";import{_ as c,a as s,M as d,c as l,b as m}from"./p-acecdfb5.js";import{F as g}from"./p-209fada4.js";import{m as h,c as u}from"./p-506dd586.js";import{M as f}from"./p-238c1d1d.js";var p={CLOSING:"mdc-dialog--closing",OPEN:"mdc-dialog--open",OPENING:"mdc-dialog--opening",SCROLLABLE:"mdc-dialog--scrollable",SCROLL_LOCK:"mdc-dialog-scroll-lock",STACKED:"mdc-dialog--stacked"},b={ACTION_ATTRIBUTE:"data-mdc-dialog-action",BUTTON_DEFAULT_ATTRIBUTE:"data-mdc-dialog-button-default",BUTTON_SELECTOR:".mdc-dialog__button",CLOSED_EVENT:"MDCDialog:closed",CLOSE_ACTION:"close",CLOSING_EVENT:"MDCDialog:closing",CONTAINER_SELECTOR:".mdc-dialog__container",CONTENT_SELECTOR:".mdc-dialog__content",DESTROY_ACTION:"destroy",INITIAL_FOCUS_ATTRIBUTE:"data-mdc-dialog-initial-focus",OPENED_EVENT:"MDCDialog:opened",OPENING_EVENT:"MDCDialog:opening",SCRIM_SELECTOR:".mdc-dialog__scrim",SUPPRESS_DEFAULT_PRESS_SELECTOR:["textarea",".mdc-menu .mdc-list-item"].join(", "),SURFACE_SELECTOR:".mdc-dialog__surface"},x={DIALOG_ANIMATION_CLOSE_TIME_MS:75,DIALOG_ANIMATION_OPEN_TIME_MS:150},_=function(i){function t(n){var o=i.call(this,s(s({},t.defaultAdapter),n))||this;return o.isOpen_=!1,o.animationFrame_=0,o.animationTimer_=0,o.layoutFrame_=0,o.escapeKeyAction_=b.CLOSE_ACTION,o.scrimClickAction_=b.CLOSE_ACTION,o.autoStackButtons_=!0,o.areButtonsStacked_=!1,o}return c(t,i),Object.defineProperty(t,"cssClasses",{get:function(){return p},enumerable:!0,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return b},enumerable:!0,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return x},enumerable:!0,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addBodyClass:function(){},addClass:function(){},areButtonsStacked:function(){return!1},clickDefaultButton:function(){},eventTargetMatches:function(){return!1},getActionFromEvent:function(){return""},getInitialFocusEl:function(){return null},hasClass:function(){return!1},isContentScrollable:function(){return!1},notifyClosed:function(){},notifyClosing:function(){},notifyOpened:function(){},notifyOpening:function(){},releaseFocus:function(){},removeBodyClass:function(){},removeClass:function(){},reverseButtons:function(){},trapFocus:function(){}}},enumerable:!0,configurable:!0}),t.prototype.init=function(){this.adapter.hasClass(p.STACKED)&&this.setAutoStackButtons(!1)},t.prototype.destroy=function(){this.isOpen_&&this.close(b.DESTROY_ACTION),this.animationTimer_&&(clearTimeout(this.animationTimer_),this.handleAnimationTimerEnd_()),this.layoutFrame_&&(cancelAnimationFrame(this.layoutFrame_),this.layoutFrame_=0)},t.prototype.open=function(){var i=this;this.isOpen_=!0,this.adapter.notifyOpening(),this.adapter.addClass(p.OPENING),this.runNextAnimationFrame_((function(){i.adapter.addClass(p.OPEN),i.adapter.addBodyClass(p.SCROLL_LOCK),i.layout(),i.animationTimer_=setTimeout((function(){i.handleAnimationTimerEnd_(),i.adapter.trapFocus(i.adapter.getInitialFocusEl()),i.adapter.notifyOpened()}),x.DIALOG_ANIMATION_OPEN_TIME_MS)}))},t.prototype.close=function(i){var t=this;void 0===i&&(i=""),this.isOpen_&&(this.isOpen_=!1,this.adapter.notifyClosing(i),this.adapter.addClass(p.CLOSING),this.adapter.removeClass(p.OPEN),this.adapter.removeBodyClass(p.SCROLL_LOCK),cancelAnimationFrame(this.animationFrame_),this.animationFrame_=0,clearTimeout(this.animationTimer_),this.animationTimer_=setTimeout((function(){t.adapter.releaseFocus(),t.handleAnimationTimerEnd_(),t.adapter.notifyClosed(i)}),x.DIALOG_ANIMATION_CLOSE_TIME_MS))},t.prototype.isOpen=function(){return this.isOpen_},t.prototype.getEscapeKeyAction=function(){return this.escapeKeyAction_},t.prototype.setEscapeKeyAction=function(i){this.escapeKeyAction_=i},t.prototype.getScrimClickAction=function(){return this.scrimClickAction_},t.prototype.setScrimClickAction=function(i){this.scrimClickAction_=i},t.prototype.getAutoStackButtons=function(){return this.autoStackButtons_},t.prototype.setAutoStackButtons=function(i){this.autoStackButtons_=i},t.prototype.layout=function(){var i=this;this.layoutFrame_&&cancelAnimationFrame(this.layoutFrame_),this.layoutFrame_=requestAnimationFrame((function(){i.layoutInternal_(),i.layoutFrame_=0}))},t.prototype.handleClick=function(i){if(this.adapter.eventTargetMatches(i.target,b.SCRIM_SELECTOR)&&""!==this.scrimClickAction_)this.close(this.scrimClickAction_);else{var t=this.adapter.getActionFromEvent(i);t&&this.close(t)}},t.prototype.handleKeydown=function(i){var t="Enter"===i.key||13===i.keyCode;if(t&&!this.adapter.getActionFromEvent(i)){var n=!this.adapter.eventTargetMatches(i.target,b.SUPPRESS_DEFAULT_PRESS_SELECTOR);t&&n&&this.adapter.clickDefaultButton()}},t.prototype.handleDocumentKeydown=function(i){("Escape"===i.key||27===i.keyCode)&&""!==this.escapeKeyAction_&&this.close(this.escapeKeyAction_)},t.prototype.layoutInternal_=function(){this.autoStackButtons_&&this.detectStackedButtons_(),this.detectScrollableContent_()},t.prototype.handleAnimationTimerEnd_=function(){this.animationTimer_=0,this.adapter.removeClass(p.OPENING),this.adapter.removeClass(p.CLOSING)},t.prototype.runNextAnimationFrame_=function(i){var t=this;cancelAnimationFrame(this.animationFrame_),this.animationFrame_=requestAnimationFrame((function(){t.animationFrame_=0,clearTimeout(t.animationTimer_),t.animationTimer_=setTimeout(i,0)}))},t.prototype.detectStackedButtons_=function(){this.adapter.removeClass(p.STACKED);var i=this.adapter.areButtonsStacked();i&&this.adapter.addClass(p.STACKED),i!==this.areButtonsStacked_&&(this.adapter.reverseButtons(),this.areButtonsStacked_=i)},t.prototype.detectScrollableContent_=function(){this.adapter.removeClass(p.SCROLLABLE),this.adapter.isContentScrollable()&&this.adapter.addClass(p.SCROLLABLE)},t}(d),y=_.strings,v=function(i){function t(){return null!==i&&i.apply(this,arguments)||this}return c(t,i),Object.defineProperty(t.prototype,"isOpen",{get:function(){return this.foundation.isOpen()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"escapeKeyAction",{get:function(){return this.foundation.getEscapeKeyAction()},set:function(i){this.foundation.setEscapeKeyAction(i)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"scrimClickAction",{get:function(){return this.foundation.getScrimClickAction()},set:function(i){this.foundation.setScrimClickAction(i)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"autoStackButtons",{get:function(){return this.foundation.getAutoStackButtons()},set:function(i){this.foundation.setAutoStackButtons(i)},enumerable:!0,configurable:!0}),t.attachTo=function(i){return new t(i)},t.prototype.initialize=function(i){var t,n;void 0===i&&(i=function(i,t){return new g(i,t)});var o=this.root.querySelector(y.CONTAINER_SELECTOR);if(!o)throw new Error("Dialog component requires a "+y.CONTAINER_SELECTOR+" container element");this.container_=o,this.content_=this.root.querySelector(y.CONTENT_SELECTOR),this.buttons_=[].slice.call(this.root.querySelectorAll(y.BUTTON_SELECTOR)),this.defaultButton_=this.root.querySelector("["+y.BUTTON_DEFAULT_ATTRIBUTE+"]"),this.focusTrapFactory_=i,this.buttonRipples_=[];try{for(var e=l(this.buttons_),a=e.next();!a.done;a=e.next())this.buttonRipples_.push(new f(a.value))}catch(r){t={error:r}}finally{try{a&&!a.done&&(n=e.return)&&n.call(e)}finally{if(t)throw t.error}}},t.prototype.initialSyncWithDOM=function(){var i=this;this.focusTrap_=(0,this.focusTrapFactory_)(this.container_,{initialFocusEl:this.getInitialFocusEl_()||void 0}),this.handleClick_=this.foundation.handleClick.bind(this.foundation),this.handleKeydown_=this.foundation.handleKeydown.bind(this.foundation),this.handleDocumentKeydown_=this.foundation.handleDocumentKeydown.bind(this.foundation),this.handleLayout_=this.layout.bind(this);var t=["resize","orientationchange"];this.handleOpening_=function(){t.forEach((function(t){return window.addEventListener(t,i.handleLayout_)})),document.addEventListener("keydown",i.handleDocumentKeydown_)},this.handleClosing_=function(){t.forEach((function(t){return window.removeEventListener(t,i.handleLayout_)})),document.removeEventListener("keydown",i.handleDocumentKeydown_)},this.listen("click",this.handleClick_),this.listen("keydown",this.handleKeydown_),this.listen(y.OPENING_EVENT,this.handleOpening_),this.listen(y.CLOSING_EVENT,this.handleClosing_)},t.prototype.destroy=function(){this.unlisten("click",this.handleClick_),this.unlisten("keydown",this.handleKeydown_),this.unlisten(y.OPENING_EVENT,this.handleOpening_),this.unlisten(y.CLOSING_EVENT,this.handleClosing_),this.handleClosing_(),this.buttonRipples_.forEach((function(i){return i.destroy()})),i.prototype.destroy.call(this)},t.prototype.layout=function(){this.foundation.layout()},t.prototype.open=function(){this.foundation.open()},t.prototype.close=function(i){void 0===i&&(i=""),this.foundation.close(i)},t.prototype.getDefaultFoundation=function(){var i=this;return new _({addBodyClass:function(i){return document.body.classList.add(i)},addClass:function(t){return i.root.classList.add(t)},areButtonsStacked:function(){return t=i.buttons_,n=new Set,[].forEach.call(t,(function(i){return n.add(i.offsetTop)})),n.size>1;var t,n},clickDefaultButton:function(){return i.defaultButton_&&i.defaultButton_.click()},eventTargetMatches:function(i,t){return!!i&&h(i,t)},getActionFromEvent:function(i){if(!i.target)return"";var t=u(i.target,"["+y.ACTION_ATTRIBUTE+"]");return t&&t.getAttribute(y.ACTION_ATTRIBUTE)},getInitialFocusEl:function(){return i.getInitialFocusEl_()},hasClass:function(t){return i.root.classList.contains(t)},isContentScrollable:function(){return!!(t=i.content_)&&t.scrollHeight>t.offsetHeight;var t},notifyClosed:function(t){return i.emit(y.CLOSED_EVENT,t?{action:t}:{})},notifyClosing:function(t){return i.emit(y.CLOSING_EVENT,t?{action:t}:{})},notifyOpened:function(){return i.emit(y.OPENED_EVENT,{})},notifyOpening:function(){return i.emit(y.OPENING_EVENT,{})},releaseFocus:function(){return i.focusTrap_.releaseFocus()},removeBodyClass:function(i){return document.body.classList.remove(i)},removeClass:function(t){return i.root.classList.remove(t)},reverseButtons:function(){i.buttons_.reverse(),i.buttons_.forEach((function(i){i.parentElement.appendChild(i)}))},trapFocus:function(){return i.focusTrap_.trapFocus()}})},t.prototype.getInitialFocusEl_=function(){return document.querySelector("["+y.INITIAL_FOCUS_ATTRIBUTE+"]")},t}(m);const w=class{constructor(n){i(this,n),this.uniDialogMatClosing=t(this,"uniDialogMatClosing",7),this.active=!1,this.role="dialog",this.modal="true",this.labelled="uni-dialog-title",this.described="uni-dialog-content"}activeHandler(i){i?this.dialog.open():!1===i&&this.dialog.close()}onUniDialogContainerMatInitialized(){this.dialog=new v(this.el),this.activeHandler(this.active),this.dialog.listen("MDCDialog:opened",(()=>{document.body.setAttribute("aria-hidden","true")})),this.dialog.listen("MDCDialog:closing",(()=>{document.body.removeAttribute("aria-hidden"),this.uniDialogMatClosing.emit(this.dialog)}))}render(){const{role:i,modal:t,labelled:e,described:a}=this;return r({classes:{"mdc-dialog":!0}},n(o,null,n("uni-dialog-container-mat",null,n("uni-dialog-surface-mat",Object.assign({},{role:i,modal:t,labelled:e,described:a}),n("slot",null))),n("uni-dialog-scrim-mat",null)))}componentDidLoad(){a("uni-dialog-mat","open")}get el(){return e(this)}static get watchers(){return{active:["activeHandler"]}}};w.style='.mdc-elevation-overlay{position:absolute;border-radius:inherit;opacity:0;pointer-events:none;-webkit-transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1);background-color:#fff}.mdc-dialog,.mdc-dialog__scrim{position:fixed;top:0;left:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;height:100%}.mdc-dialog{display:none;z-index:7}.mdc-dialog .mdc-dialog__surface{background-color:#fff;background-color:var(--mdc-theme-surface, #fff)}.mdc-dialog .mdc-dialog__scrim{background-color:rgba(0, 0, 0, 0.32)}.mdc-dialog .mdc-dialog__title{color:rgba(0, 0, 0, 0.87)}.mdc-dialog .mdc-dialog__content{color:rgba(0, 0, 0, 0.6)}.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__title,.mdc-dialog.mdc-dialog--scrollable .mdc-dialog__actions{border-color:rgba(0, 0, 0, 0.12)}.mdc-dialog .mdc-dialog__content{padding:20px 24px 20px 24px}.mdc-dialog .mdc-dialog__surface{min-width:280px}@media (max-width: 592px){.mdc-dialog .mdc-dialog__surface{max-width:calc(100vw - 32px)}}@media (min-width: 592px){.mdc-dialog .mdc-dialog__surface{max-width:560px}}.mdc-dialog .mdc-dialog__surface{max-height:calc(100% - 32px)}@media all and (-ms-high-contrast: none), (-ms-high-contrast: active){.mdc-dialog .mdc-dialog__container{}}.mdc-dialog .mdc-dialog__surface{border-radius:4px;border-radius:var(--mdc-shape-medium, 4px)}.mdc-dialog__scrim{opacity:0;z-index:-1}.mdc-dialog__container{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-pack:distribute;justify-content:space-around;-webkit-box-sizing:border-box;box-sizing:border-box;height:100%;-webkit-transform:scale(0.8);transform:scale(0.8);opacity:0;pointer-events:none}.mdc-dialog__surface{position:relative;-webkit-box-shadow:0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12);box-shadow:0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12);display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-positive:0;flex-grow:0;-ms-flex-negative:0;flex-shrink:0;-webkit-box-sizing:border-box;box-sizing:border-box;max-width:100%;max-height:100%;pointer-events:auto;overflow-y:auto}.mdc-dialog__surface .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-dialog[dir=rtl] .mdc-dialog__surface,[dir=rtl] .mdc-dialog .mdc-dialog__surface{text-align:right}.mdc-dialog__title{display:block;margin-top:0;line-height:normal;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-headline6-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1.25rem;font-size:var(--mdc-typography-headline6-font-size, 1.25rem);line-height:2rem;line-height:var(--mdc-typography-headline6-line-height, 2rem);font-weight:500;font-weight:var(--mdc-typography-headline6-font-weight, 500);letter-spacing:0.0125em;letter-spacing:var(--mdc-typography-headline6-letter-spacing, 0.0125em);text-decoration:inherit;-webkit-text-decoration:var(--mdc-typography-headline6-text-decoration, inherit);text-decoration:var(--mdc-typography-headline6-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-headline6-text-transform, inherit);position:relative;-ms-flex-negative:0;flex-shrink:0;-webkit-box-sizing:border-box;box-sizing:border-box;margin:0;padding:0 24px 9px;border-bottom:1px solid transparent}.mdc-dialog__title::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}.mdc-dialog[dir=rtl] .mdc-dialog__title,[dir=rtl] .mdc-dialog .mdc-dialog__title{text-align:right}.mdc-dialog--scrollable .mdc-dialog__title{padding-bottom:15px}.mdc-dialog__content{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-body1-font-size, 1rem);line-height:1.5rem;line-height:var(--mdc-typography-body1-line-height, 1.5rem);font-weight:400;font-weight:var(--mdc-typography-body1-font-weight, 400);letter-spacing:0.03125em;letter-spacing:var(--mdc-typography-body1-letter-spacing, 0.03125em);text-decoration:inherit;-webkit-text-decoration:var(--mdc-typography-body1-text-decoration, inherit);text-decoration:var(--mdc-typography-body1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body1-text-transform, inherit);-ms-flex-positive:1;flex-grow:1;-webkit-box-sizing:border-box;box-sizing:border-box;margin:0;overflow:auto;-webkit-overflow-scrolling:touch}.mdc-dialog__content>:first-child{margin-top:0}.mdc-dialog__content>:last-child{margin-bottom:0}.mdc-dialog__title+.mdc-dialog__content{padding-top:0}.mdc-dialog--scrollable .mdc-dialog__title+.mdc-dialog__content{padding-top:8px;padding-bottom:8px}.mdc-dialog__content .mdc-list:first-child:last-child{padding:6px 0 0}.mdc-dialog--scrollable .mdc-dialog__content .mdc-list:first-child:last-child{padding:0}.mdc-dialog__actions{display:-ms-flexbox;display:flex;position:relative;-ms-flex-negative:0;flex-shrink:0;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:center;align-items:center;-ms-flex-pack:end;justify-content:flex-end;-webkit-box-sizing:border-box;box-sizing:border-box;min-height:52px;margin:0;padding:8px;border-top:1px solid transparent}.mdc-dialog--stacked .mdc-dialog__actions{-ms-flex-direction:column;flex-direction:column;-ms-flex-align:end;align-items:flex-end}.mdc-dialog__button{margin-left:8px;margin-right:0;max-width:100%;text-align:right}[dir=rtl] .mdc-dialog__button,.mdc-dialog__button[dir=rtl]{margin-left:0;margin-right:8px}.mdc-dialog__button:first-child{margin-left:0;margin-right:0}[dir=rtl] .mdc-dialog__button:first-child,.mdc-dialog__button:first-child[dir=rtl]{margin-left:0;margin-right:0}.mdc-dialog[dir=rtl] .mdc-dialog__button,[dir=rtl] .mdc-dialog .mdc-dialog__button{text-align:left}.mdc-dialog--stacked .mdc-dialog__button:not(:first-child){margin-top:12px}.mdc-dialog--open,.mdc-dialog--opening,.mdc-dialog--closing{display:-ms-flexbox;display:flex}.mdc-dialog--opening .mdc-dialog__scrim{-webkit-transition:opacity 150ms linear;transition:opacity 150ms linear}.mdc-dialog--opening .mdc-dialog__container{-webkit-transition:opacity 75ms linear, -webkit-transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1);transition:opacity 75ms linear, -webkit-transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1);transition:opacity 75ms linear, transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1);transition:opacity 75ms linear, transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-dialog--closing .mdc-dialog__scrim,.mdc-dialog--closing .mdc-dialog__container{-webkit-transition:opacity 75ms linear;transition:opacity 75ms linear}.mdc-dialog--closing .mdc-dialog__container{-webkit-transform:none;transform:none}.mdc-dialog--open .mdc-dialog__scrim{opacity:1}.mdc-dialog--open .mdc-dialog__container{-webkit-transform:none;transform:none;opacity:1}.mdc-dialog-scroll-lock{overflow:hidden}';export{w as U}