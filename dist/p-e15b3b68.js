import{r as t,c as e,h as a,g as i}from"./p-e1afa34d.js";import{u as r}from"./p-78249524.js";import{b as n,c as o}from"./p-58167c11.js";import{U as c}from"./p-7b9c35dc.js";const p=class{constructor(a){t(this,a),this.uniTabMatInitialized=e(this,"uniTabMatInitialized",7),this.active=!1}activeWatcher(t){t&&this.entity.activate()}tabMatIndicatorListen(){this.entity=n(this.el),this.active&&this.entity.activate(),this.uniTabMatInitialized.emit(this.entity)}render(){const{active:t}=this,e={active:t},i=o(t);return c({props:e,classes:i},a("slot",null))}componentDidLoad(){r("uni-tab-mat","enter")}get el(){return i(this)}static get watchers(){return{active:["activeWatcher"]}}};p.style='.mdc-tab{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-button-font-size, 0.875rem);line-height:2.25rem;line-height:var(--mdc-typography-button-line-height, 2.25rem);font-weight:500;font-weight:var(--mdc-typography-button-font-weight, 500);letter-spacing:0.0892857143em;letter-spacing:var(--mdc-typography-button-letter-spacing, 0.0892857143em);text-decoration:none;-webkit-text-decoration:var(--mdc-typography-button-text-decoration, none);text-decoration:var(--mdc-typography-button-text-decoration, none);text-transform:uppercase;text-transform:var(--mdc-typography-button-text-transform, uppercase);padding-right:24px;padding-left:24px;position:relative;display:-ms-flexbox;display:flex;-ms-flex:1 0 auto;flex:1 0 auto;-ms-flex-pack:center;justify-content:center;-webkit-box-sizing:border-box;box-sizing:border-box;margin:0;padding-top:0;padding-bottom:0;border:none;outline:none;background:none;text-align:center;white-space:nowrap;cursor:pointer;-webkit-appearance:none;z-index:1}.mdc-tab .mdc-tab__text-label{color:rgba(0, 0, 0, 0.6)}.mdc-tab .mdc-tab__icon{color:rgba(0, 0, 0, 0.54);fill:currentColor}.mdc-tab::-moz-focus-inner{padding:0;border:0}.mdc-tab--min-width{-ms-flex:0 1 auto;flex:0 1 auto}.mdc-tab__content{position:relative;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:inherit;pointer-events:none}.mdc-tab__text-label{-webkit-transition:150ms color linear;transition:150ms color linear;display:inline-block;line-height:1;z-index:2}.mdc-tab__icon{-webkit-transition:150ms color linear;transition:150ms color linear;width:24px;height:24px;font-size:24px;z-index:2}.mdc-tab--stacked .mdc-tab__content{-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.mdc-tab--stacked .mdc-tab__text-label{padding-top:6px;padding-bottom:4px}.mdc-tab--active .mdc-tab__text-label{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}.mdc-tab--active .mdc-tab__icon{color:#6200ee;color:var(--mdc-theme-primary, #6200ee);fill:currentColor}.mdc-tab--active .mdc-tab__text-label,.mdc-tab--active .mdc-tab__icon{-webkit-transition-delay:100ms;transition-delay:100ms}.mdc-tab:not(.mdc-tab--stacked) .mdc-tab__icon+.mdc-tab__text-label{padding-left:8px;padding-right:0}[dir=rtl] .mdc-tab:not(.mdc-tab--stacked) .mdc-tab__icon+.mdc-tab__text-label,.mdc-tab:not(.mdc-tab--stacked) .mdc-tab__icon+.mdc-tab__text-label[dir=rtl]{padding-left:0;padding-right:8px}@-webkit-keyframes mdc-ripple-fg-radius-in{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{-webkit-transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-radius-in{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{-webkit-transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@-webkit-keyframes mdc-ripple-fg-opacity-in{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-in{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@-webkit-keyframes mdc-ripple-fg-opacity-out{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}@keyframes mdc-ripple-fg-opacity-out{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-tab__ripple{--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;-webkit-tap-highlight-color:rgba(0, 0, 0, 0);position:absolute;top:0;left:0;width:100%;height:100%;overflow:hidden}.mdc-tab__ripple::before,.mdc-tab__ripple::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-tab__ripple::before{-webkit-transition:opacity 15ms linear, background-color 15ms linear;transition:opacity 15ms linear, background-color 15ms linear;z-index:1}.mdc-tab__ripple.mdc-ripple-upgraded::before{-webkit-transform:scale(var(--mdc-ripple-fg-scale, 1));transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-tab__ripple.mdc-ripple-upgraded::after{top:0;left:0;-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:center center;transform-origin:center center}.mdc-tab__ripple.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-tab__ripple.mdc-ripple-upgraded--foreground-activation::after{-webkit-animation:mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards;animation:mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards}.mdc-tab__ripple.mdc-ripple-upgraded--foreground-deactivation::after{-webkit-animation:mdc-ripple-fg-opacity-out 150ms;animation:mdc-ripple-fg-opacity-out 150ms;-webkit-transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-tab__ripple::before,.mdc-tab__ripple::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-tab__ripple.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-tab__ripple::before,.mdc-tab__ripple::after{background-color:#6200ee;background-color:var(--mdc-theme-primary, #6200ee)}.mdc-tab__ripple:hover::before{opacity:0.04}.mdc-tab__ripple.mdc-ripple-upgraded--background-focused::before,.mdc-tab__ripple:not(.mdc-ripple-upgraded):focus::before{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:0.12}.mdc-tab__ripple:not(.mdc-ripple-upgraded)::after{-webkit-transition:opacity 150ms linear;transition:opacity 150ms linear}.mdc-tab__ripple:not(.mdc-ripple-upgraded):active::after{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:0.12}.mdc-tab__ripple.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.12}';export{p as U}