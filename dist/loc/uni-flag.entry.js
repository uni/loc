import { r as registerInstance, h, g as getElement } from './index-c63dd5fd.js';
import { U as UniHostTemplate } from './index-8cd97cf2.js';
import { u as uniLocWatermark } from './watermark-1f72ed7e.js';

const flagCss = "@charset \"UTF-8\";.uni-flag img{margin-right:5px;margin-bottom:-2px;border:1px solid #888;border-radius:2px}.uni-flag.square img{height:1em;width:1em}";

const UniFlagComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.alt = 'flag';
    }
    connectedCallback() {
        uniLocWatermark(this.el);
    }
    render() {
        const { src, alt, square } = this;
        const classes = {
            'uni-flag': true,
            square
        };
        return UniHostTemplate({ classes }, src ? h("img", { src: src, alt: alt }) : h("i", null));
    }
    get el() { return getElement(this); }
};
UniFlagComponent.style = flagCss;

export { UniFlagComponent as uni_flag };
