import { r as registerInstance, g as getElement } from './index-c63dd5fd.js';
import { u as uniAdkWatermark } from './watermark-665d7c49.js';

const UniEventComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    connectedCallback() {
        const { el } = this;
        uniAdkWatermark(el, { strict: { el, packages: ['loc'] } });
    }
    componentDidLoad() {
        this.el.addEventListener(this.name, (event) => {
            if (this.prevent) {
                event.preventDefault();
            }
            if (this.stop) {
                event.stopPropagation();
            }
        });
    }
    get el() { return getElement(this); }
};

export { UniEventComponent as U };
