import { r as registerInstance, g as getElement } from './index-c63dd5fd.js';
import { i as isDefined, e as isEmpty } from './index-8cd97cf2.js';
import './watermark-665d7c49.js';
import { u as uniAddProp } from './store.component-ef4137fc.js';
import './index-7dac8b44.js';

const UniRouteComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    componentDidLoad() {
        const { el, params } = this;
        const props = { el, params };
        uniSetActivePropParam(props);
        window.addEventListener('popstate', () => uniSetActivePropParam(props));
    }
    get el() { return getElement(this); }
};
function uniSetActivePropParam(props) {
    const { el, params } = props;
    const urlParams = new URLSearchParams(window.location.search);
    const propParams = new URLSearchParams(params);
    if (isDefined(params) && !isEmpty(params)) {
        uniAddProp(el.children, 'active', [...propParams.keys()]
            .every((key) => urlParams.has(key) && urlParams.get(key) === propParams.get(key)));
    }
}

export { UniRouteComponent as uni_route };
