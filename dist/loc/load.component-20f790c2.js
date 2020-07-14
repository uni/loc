import { r as registerInstance, f as createEvent, g as getElement } from './index-c63dd5fd.js';
import { u as uniAdkWatermark } from './watermark-665d7c49.js';

function uniGetFirstChildUrl(el) {
    const firstChild = el.children[0];
    return firstChild && firstChild['href'];
}
async function uniFetch(url, type, options) {
    const response = await fetch(url, options);
    return await response[type]();
}
async function uniLoad(url, type, options) {
    return await uniFetch(url, type, options);
}
function uniEventLoad(url, type, event, options) {
    uniLoad(url, type, options).then((data) => event.emit(data));
}
async function uniLoadWrap(el, type, options) {
    const url = uniGetFirstChildUrl(el);
    return url ? await uniFetch(url, type, options) : null;
}
function uniEventLoadWrap(el, type, event, options) {
    uniLoadWrap(el, type, options).then((data) => event.emit(data));
}

const UniLoadComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.uniLoadSuccess = createEvent(this, "uniLoadSuccess", 7);
        this.type = 'json';
        this.mode = 'cors';
        this.credentials = 'same-origin';
        this.active = false;
    }
    urlHandler(newValue) {
        if (this.active && newValue) {
            uniEventLoad(newValue, this.type, this.uniLoadSuccess);
        }
    }
    activeHandler(newValue) {
        if (newValue && this.url) {
            uniEventLoad(this.url, this.type, this.uniLoadSuccess);
        }
    }
    connectedCallback() {
        const { el } = this;
        uniAdkWatermark(this.el, { strict: { el, packages: ['loc'] } });
    }
    componentDidLoad() {
        if (this.active && this.url) {
            uniEventLoad(this.url, this.type, this.uniLoadSuccess);
        }
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "url": ["urlHandler"],
        "active": ["activeHandler"]
    }; }
};

export { UniLoadComponent as U, uniLoad as a, uniLoadWrap as u };
