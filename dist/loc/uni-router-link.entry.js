import { r as registerInstance, g as getElement } from './index-c63dd5fd.js';
import { i as isDefined, e as isEmpty } from './index-8cd97cf2.js';

const UniRouterLinkComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    async paramsHandler() {
        const { params } = this;
        uniRouterLinkParamValueHandler({ params });
    }
    componentDidLoad() {
        this.el.addEventListener('click', () => {
            this.paramsHandler();
        });
    }
    get el() { return getElement(this); }
};
function uniRouterLinkParamValueHandler(props) {
    const { params } = props;
    const urlParams = new URLSearchParams(window.location.search);
    const propParams = new URLSearchParams(params);
    if (isDefined(params) && !isEmpty(params)) {
        propParams.forEach((value, key) => {
            urlParams.set(key, value);
        });
    }
    const url = window.location;
    window.history.pushState({}, '', `${url.protocol}//${url.host}${url.pathname}?${urlParams.toString()}`);
    window.dispatchEvent(new PopStateEvent('popstate', { state: { params } }));
}

export { UniRouterLinkComponent as uni_router_link };
