import { r as registerInstance, h, e as Host, g as getElement } from './index-c63dd5fd.js';
import './index-a1c9cb4f.js';
import './index-8cd97cf2.js';
import './watermark-665d7c49.js';
import './event.component-acccadec.js';
import { a as uniLoad } from './load.component-20f790c2.js';
import './replace.component-d506d33c.js';
import './store.component-ef4137fc.js';
import './index-7dac8b44.js';
import { u as uniLocWatermark } from './watermark-1f72ed7e.js';

const UniLangMenuComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.menuState = 'app.loc.menu.opened';
        this.activeState = 'app.loc.menu.active';
        this.translateState = 'app.loc.translate';
        this.list = [];
    }
    connectedCallback() {
        uniLocWatermark(this.el);
    }
    componentDidLoad() {
        if (this.languages) {
            uniLoad(this.languages, 'json')
                .then((data = []) => {
                this.list = data;
                this.lang = data.filter((item) => item.lang === this.init)[0] || data[0];
            });
        }
    }
    render() {
        const { routing, activeState, list, lang } = this;
        return lang ? (h(Host, null, h("uni-store", { active: true, init: true, type: "session", state: activeState, value: lang }), h("uni-store", { active: true, event: "click", state: this.menuState }, h("uni-store", { active: true, state: this.menuState, target: "uni-menu-surface-mat", prop: "opened" }, h("div", { class: "mdc-menu-surface--anchor" }, h("uni-button", { kind: "outlined" }, h("uni-store", { active: true, type: "session", state: `${activeState}.flag`, target: "uni-flag", prop: "src" }, h("uni-flag", null)), h("uni-button-label", null, h("uni-store", { active: true, type: "session", state: activeState, target: "uni-replace", prop: "state" }, h("uni-replace", null, "name"))), h("uni-button-icon", null, "arrow_drop_down")), h("uni-menu-surface-mat", null, h("uni-list-mat", null, list.map((item) => h("uni-store", { active: !routing, type: "session", event: "click", state: activeState, value: item }, h("uni-router-link", { params: routing ? `lang=${item.lang}` : '' }, h("uni-list-item-mat", null, item.flag ? h("uni-flag", { src: item.flag }) : h("i", null), item.name), h("uni-route", { params: routing ? `lang=${item.lang}` : '' }, h("uni-store", { type: "session", state: activeState, value: item })))))))))), h("uni-event", { stop: true, name: "uniLoadSuccess" }, h("uni-store", { active: true, clean: true, type: "session", event: "uniLoadSuccess", state: this.translateState }, h("uni-store", { active: true, type: "session", state: `${activeState}.translation`, target: "uni-load", prop: "url" }, h("uni-load", { active: true }))))))
            : '';
    }
    get el() { return getElement(this); }
};

export { UniLangMenuComponent as uni_lang_menu };
