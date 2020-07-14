import { r as registerInstance, h, e as Host, g as getElement } from './index-c63dd5fd.js';
import './index-8cd97cf2.js';
import { u as uniLocWatermark } from './watermark-1f72ed7e.js';

const UniLangMenuWrapComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.menuState = 'loc.menu.opened';
        this.urlState = 'loc.menu.url';
        this.translateState = 'loc.translate';
    }
    connectedCallback() {
        uniLocWatermark(this.el);
    }
    render() {
        return (h(Host, null, h("uni-store", { active: true, type: "session", event: "click", state: this.menuState }, h("uni-store", { active: true, type: "session", state: this.menuState, target: "uni-menu-surface-mat", prop: "opened" }, h("div", { class: "mdc-menu-surface--anchor" }, h("slot", null)))), h("uni-event", { stop: true, name: "uniLoadSuccess" }, h("uni-store", { active: true, clean: true, type: "session", event: "uniLoadSuccess", state: this.translateState }, h("uni-store", { active: true, type: "session", state: this.urlState, target: "uni-load", prop: "url" }, h("uni-load", { active: true }))))));
    }
    get el() { return getElement(this); }
};

export { UniLangMenuWrapComponent as uni_lang_menu_wrap };
