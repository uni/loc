import{r as t,c as i,h as n,g as o}from"./p-e1afa34d.js";import{u as a}from"./p-78249524.js";import{U as e}from"./p-3ab2be91.js";import{d as r,e as c,f as d}from"./p-58167c11.js";const s=class{constructor(n){t(this,n),this.uniTabIndicatorMatInitialized=i(this,"uniTabIndicatorMatInitialized",7)}componentDidLoad(){a("uni-tab-indicator-mat","exist"),this.entity=r(this.el),this.uniTabIndicatorMatInitialized.emit(this.entity)}render(){const t=c(this.active);return e({classes:t},n("span",{class:d()}))}get el(){return o(this)}};s.style=".mdc-tab-indicator{display:-ms-flexbox;display:flex;position:absolute;top:0;left:0;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;pointer-events:none;z-index:1}.mdc-tab-indicator .mdc-tab-indicator__content--underline{border-color:#6200ee;border-color:var(--mdc-theme-primary, #6200ee)}.mdc-tab-indicator .mdc-tab-indicator__content--icon{color:#018786;color:var(--mdc-theme-secondary, #018786)}.mdc-tab-indicator .mdc-tab-indicator__content--underline{border-top-width:2px}.mdc-tab-indicator .mdc-tab-indicator__content--icon{height:34px;font-size:34px}.mdc-tab-indicator__content{-webkit-transform-origin:left;transform-origin:left;opacity:0}.mdc-tab-indicator__content--underline{-ms-flex-item-align:end;align-self:flex-end;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;border-top-style:solid}.mdc-tab-indicator__content--icon{-ms-flex-item-align:center;align-self:center;margin:0 auto}.mdc-tab-indicator--active .mdc-tab-indicator__content{opacity:1}.mdc-tab-indicator .mdc-tab-indicator__content{-webkit-transition:250ms -webkit-transform cubic-bezier(0.4, 0, 0.2, 1);transition:250ms -webkit-transform cubic-bezier(0.4, 0, 0.2, 1);transition:250ms transform cubic-bezier(0.4, 0, 0.2, 1);transition:250ms transform cubic-bezier(0.4, 0, 0.2, 1), 250ms -webkit-transform cubic-bezier(0.4, 0, 0.2, 1)}.mdc-tab-indicator--no-transition .mdc-tab-indicator__content{-webkit-transition:none;transition:none}.mdc-tab-indicator--fade .mdc-tab-indicator__content{-webkit-transition:150ms opacity linear;transition:150ms opacity linear}.mdc-tab-indicator--active.mdc-tab-indicator--fade .mdc-tab-indicator__content{-webkit-transition-delay:100ms;transition-delay:100ms}";export{s as U}