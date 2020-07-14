import { r as registerInstance, h } from './index-c63dd5fd.js';
import './index-096b896d.js';
import { c as uniButtonLabelMatClass } from './button-mat.component-b0695fe9.js';
import { UniHostTemplate } from '@uni/common';

const UniButtonLabelComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        const classes = uniButtonLabelMatClass();
        return UniHostTemplate({ classes }, h("slot", null));
    }
};

export { UniButtonLabelComponent as U };
