import { r as registerInstance, h, g as getElement } from './index-c63dd5fd.js';
import './index-8cd97cf2.js';
import { u as uniLocWatermark } from './watermark-1f72ed7e.js';

const UniTranslateComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.type = 'session';
        this.state = 'loc.translate';
        this.start = '{{ ';
        this.end = ' }}';
    }
    connectedCallback() {
        uniLocWatermark(this.el);
    }
    render() {
        const { type, state, start, end } = this;
        const props = { type, state };
        const replaceProps = { start, end };
        return (h("uni-store", Object.assign({ active: true }, props, { target: "uni-replace", prop: "state" }), h("uni-replace", Object.assign({}, replaceProps), h("slot", null))));
    }
    get el() { return getElement(this); }
};

export { UniTranslateComponent as uni_translate };
