import{r as t,c as r,h as e,g as s}from"./p-ac3aee25.js";import{u as l}from"./p-8bc8fc2e.js";import{g as o,h as c}from"./p-6e73b092.js";import{a}from"./p-987221ae.js";const i=class{constructor(e){t(this,e),this.uniTabsScrollerInitialized=r(this,"uniTabsScrollerInitialized",7)}tabListen(){this.initialized||(this.initialized=!0,setTimeout((()=>{this.entity=o(this.el),this.uniTabsScrollerInitialized.emit(this.entity)}),300))}render(){const t=c();return a({classes:t},e("slot",null))}componentDidLoad(){l("uni-tabs-scroller","extend")}get el(){return s(this)}};i.style=".mdc-tab-scroller{overflow-y:hidden}.mdc-tab-scroller.mdc-tab-scroller--animating .mdc-tab-scroller__scroll-content{-webkit-transition:250ms -webkit-transform cubic-bezier(0.4, 0, 0.2, 1);transition:250ms -webkit-transform cubic-bezier(0.4, 0, 0.2, 1);transition:250ms transform cubic-bezier(0.4, 0, 0.2, 1);transition:250ms transform cubic-bezier(0.4, 0, 0.2, 1), 250ms -webkit-transform cubic-bezier(0.4, 0, 0.2, 1)}.mdc-tab-scroller__test{position:absolute;top:-9999px;width:100px;height:100px;overflow-x:scroll}.mdc-tab-scroller__scroll-area{-webkit-overflow-scrolling:touch;display:-ms-flexbox;display:flex;overflow-x:hidden}.mdc-tab-scroller__scroll-area::-webkit-scrollbar,.mdc-tab-scroller__test::-webkit-scrollbar{display:none}.mdc-tab-scroller__scroll-area--scroll{overflow-x:scroll}.mdc-tab-scroller__scroll-content{position:relative;display:-ms-flexbox;display:flex;-ms-flex:1 0 auto;flex:1 0 auto;-webkit-transform:none;transform:none;will-change:transform}.mdc-tab-scroller--align-start .mdc-tab-scroller__scroll-content{-ms-flex-pack:start;justify-content:flex-start}.mdc-tab-scroller--align-end .mdc-tab-scroller__scroll-content{-ms-flex-pack:end;justify-content:flex-end}.mdc-tab-scroller--align-center .mdc-tab-scroller__scroll-content{-ms-flex-pack:center;justify-content:center}.mdc-tab-scroller--animating .mdc-tab-scroller__scroll-area{-webkit-overflow-scrolling:auto}";export{i as U}