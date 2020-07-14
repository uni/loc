import { r as registerInstance, h } from './index-c63dd5fd.js';
import './index-096b896d.js';
import { b as uniButtonIconMatClass } from './button-mat.component-b0695fe9.js';
import { UniTemplate } from '@uni/common';

const UniButtonIconComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        const classes = uniButtonIconMatClass();
        return UniTemplate(h("uni-icon-mat", { class: classes }, h("slot", null)));
    }
};

export { UniButtonIconComponent as U };
