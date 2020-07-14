import { r as registerInstance, h } from './index-c63dd5fd.js';
import { U as UniHostTemplate } from './index-8cd97cf2.js';
import { b as uniListItemMatClass } from './list-mat.classes-0498e9f3.js';

const UniListItemMatComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        const classes = uniListItemMatClass();
        return UniHostTemplate({ classes }, h("slot", null));
    }
};

export { UniListItemMatComponent as U };
