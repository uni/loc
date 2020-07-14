import { r as registerInstance, g as getElement, f as createEvent } from './index-c63dd5fd.js';
import './event.component-acccadec.js';
import { u as uniLoadWrap } from './load.component-20f790c2.js';
import './replace.component-d506d33c.js';
import './index-7dac8b44.js';

const displayCss = "uni-display{display:none}uni-display[active]{display:block}pre uni-display[active]{display:flex}";

const UniDisplayComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
};
UniDisplayComponent.style = displayCss;

const UniHtmlPlaces = {
    before: 'beforebegin',
    start: 'afterebegin',
    end: 'beforeend',
    after: 'afterend'
};

function uniHtmlReplace(el, data, place, isText) {
    if (data) {
        el.innerHTML = '';
        if (isText) {
            el.insertAdjacentText(UniHtmlPlaces[place], data);
        }
        else {
            el.insertAdjacentHTML(UniHtmlPlaces[place], data);
        }
    }
}

const htmlCss = "pre uni-html{display:flex !important;font-family:Roboto Mono, monospace;color:green;font-size:14px;line-height:20px;overflow-x:auto;white-space:-moz-pre-wrap;white-space:-o-pre-wrap;white-space:pre-wrap;word-wrap:break-word}";

const UniHTMLComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.place = 'end';
    }
    templateHandler(newValue) {
        uniHtmlReplace(this.el, newValue, this.place, this.text);
    }
    uniLoadCompleted(event) {
        event.stopPropagation();
        const el = this.el.querySelector('uni-load') || this.el;
        uniHtmlReplace(el, event.detail, this.place, this.text);
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "template": ["templateHandler"]
    }; }
};
UniHTMLComponent.style = htmlCss;

const UniLoadWrapComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.uniLoadSuccess = createEvent(this, "uniLoadSuccess", 7);
        this.type = 'json';
        this.mode = 'cors';
        this.credentials = 'same-origin';
    }
    disabledHandler(newValue) {
        if (newValue) {
            uniLoadWrap(this.el, this.type)
                .then((data) => this.uniLoadSuccess.emit(data));
        }
    }
    componentDidLoad() {
        if (this.active) {
            uniLoadWrap(this.el, this.type)
                .then((data) => this.uniLoadSuccess.emit(data));
        }
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "active": ["disabledHandler"]
    }; }
};

// import '@uni/common';
