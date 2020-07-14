import { r as registerInstance, h, e as Host, g as getElement, f as createEvent } from './index-c63dd5fd.js';
import './index-a1c9cb4f.js';
import './index-8cd97cf2.js';
import './watermark-665d7c49.js';
import './event.component-acccadec.js';
import './load.component-20f790c2.js';
import './replace.component-d506d33c.js';
import './store.component-ef4137fc.js';
import './index-7dac8b44.js';
import './index-096b896d.js';
import './ponyfill-128fdc74.js';
import './component-fab1c424.js';
import { u as uniRippleMatInit } from './ripple-mat.init-4d0943d0.js';
import './index-5d610ddc.js';
import { u as uniButtonRippleMatClass, a as uniButtonMatInit } from './button-mat.component-b0695fe9.js';
import './icon-button-mat.component-0bcf42a2.js';
import './icons-mat.component-fe373913.js';
import './icon-mat.component-067b7dd8.js';
import './list-mat.component-00bb5626.js';
import './list-mat.classes-0498e9f3.js';
import './list-item-mat.component-022651f9.js';
import './menu-surface-mat.component-0ea08532.js';
import { UniTemplate, UniHostTemplate, UniColorClasses, uniColorClass, getElementIndex } from '@uni/common';
import { u as uniButtonClass } from './button.component-4e1f9f30.js';
import './button-icon.component-4e32f40e.js';
import './button-label.component-4d4b79ce.js';

const UniActionContentComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.name = 'index.html';
    }
    render() {
        const classes = 'd-flex';
        const props = { style: { 'justify-content': 'flex-end' } };
        return (h(Host, Object.assign({}, props, { class: classes }), h("uni-action-download", { url: this.url, name: this.name }, h("uni-icon-button-wrap", null, h("uni-icon-file-download", null))), h("uni-action-copy", { selector: this.selector }, h("uni-icon-button-wrap", null, h("uni-icon-copy", null)))));
    }
};

const UniActionCopyComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    componentDidLoad() {
        this.el.addEventListener('click', () => {
            const input = document.createElement('input');
            document.body.appendChild(input);
            input.value = document.querySelector(this.selector).textContent;
            input.select();
            input.setSelectionRange(0, 99999);
            document.execCommand('copy');
            input.remove();
        });
    }
    get el() { return getElement(this); }
};

const UniActionDownloadComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.name = 'index.html';
    }
    render() {
        return (h("uni-link", null, h("a", { href: this.url, download: this.name }, h("slot", null))));
    }
};

const asideCss = "uni-aside .mdc-drawer--dismissible{left:48px}uni-aside-header{display:flex;box-shadow:0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0,0,0,.12)}uni-aside-content{overflow-y:auto}";

const UniAsideComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.mode = 'static';
    }
    render() {
        const { opened, mode } = this;
        const props = { opened, mode };
        const classes = 'uni-header--fixed-adjust';
        return UniTemplate(h("uni-aside-mat", Object.assign({}, props, { class: classes }), h("slot", null)));
    }
};
UniAsideComponent.style = asideCss;

const asideBarCss = "uni-aside-bar{display:flex;flex-direction:column;flex-shrink:0;width:48px;border-right:1px solid #DFE4E9;background-color:#FFFFFF;z-index:7}";

const UniAsideBarComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return UniTemplate(h("slot", null));
    }
};
UniAsideBarComponent.style = asideBarCss;

const UniAsideContentComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return UniTemplate(h("uni-aside-content-mat", null, h("slot", null)));
    }
};

const UniAsideHeaderComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return UniTemplate(h("uni-aside-header-mat", { extended: true }, h("slot", null)));
    }
};

const UniAsideSubTitleComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return UniTemplate(h("uni-aside-subtitle-mat", null, h("slot", null)));
    }
};

const UniButtonLayoutComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        const classes = uniButtonRippleMatClass();
        return UniHostTemplate({ classes }, null);
    }
};

const buttonCss = ".uni-button .mdc-button{font-family:Roboto, \"Helvetica Neue\", sans-serif;text-transform:none}.uni-button .mdc-button:not(:disabled){color:#000;color:var(--uni-color-default, #000)}.uni-button .mdc-button .mdc-button__ripple::before,.uni-button .mdc-button .mdc-button__ripple::after{background-color:#000;background-color:var(--uni-color-default, #000)}@supports not (-ms-ime-align: auto){.uni-button .mdc-button::before,.uni-button .mdc-button::after{background-color:#000;background-color:var(--uni-color-default, #000)}}@supports not (-ms-ime-align: auto){.uni-button .mdc-button--raised:not(:disabled),.uni-button .mdc-button--unelevated:not(:disabled){background-color:#fff;background-color:var(--uni-color-default-on, #fff)}}.uni-color-primary .mdc-button:not(:disabled){color:#3f51b5;color:var(--uni-color-primary, #3f51b5)}.uni-color-secondary .mdc-button:not(:disabled){color:#018786;color:var(--uni-color-secondary, #018786)}.uni-color-accent .mdc-button:not(:disabled){color:#ff4081;color:var(--uni-color-accent, #ff4081)}.uni-color-warn .mdc-button:not(:disabled){color:#f44336;color:var(--uni-color-warn, #f44336)}.uni-color-primary .mdc-button--raised:not(:disabled),.uni-color-primary .mdc-button--unelevated:not(:disabled){background-color:#3f51b5;background-color:var(--uni-color-primary, #3f51b5)}.uni-color-secondary .mdc-button--raised:not(:disabled),.uni-color-secondary .mdc-button--unelevated:not(:disabled){background-color:#018786;background-color:var(--uni-color-secondary, #018786)}.uni-color-accent .mdc-button--raised:not(:disabled),.uni-color-accent .mdc-button--unelevated:not(:disabled){background-color:#ff4081;background-color:var(--uni-color-accent, #ff4081)}.uni-color-warn .mdc-button--raised:not(:disabled),.uni-color-warn .mdc-button--unelevated:not(:disabled){background-color:#f44336;background-color:var(--uni-color-warn, #f44336)}@supports not (-ms-ime-align: auto){.uni-color-primary .mdc-button--raised:not(:disabled),.uni-color-primary .mdc-button--unelevated:not(:disabled){background-color:var(--uni-color-primary, #3f51b5)}}@supports not (-ms-ime-align: auto){.uni-color-secondary .mdc-button--raised:not(:disabled),.uni-color-secondary .mdc-button--unelevated:not(:disabled){background-color:var(--uni-color-secondary, #018786)}}@supports not (-ms-ime-align: auto){.uni-color-accent .mdc-button--raised:not(:disabled),.uni-color-accent .mdc-button--unelevated:not(:disabled){background-color:var(--uni-color-accent, #ff4081)}}@supports not (-ms-ime-align: auto){.uni-color-warn .mdc-button--raised:not(:disabled),.uni-color-warn .mdc-button--unelevated:not(:disabled){background-color:var(--uni-color-warn, #f44336)}}.uni-color-primary .mdc-button--raised:not(:disabled),.uni-color-primary .mdc-button--unelevated:not(:disabled){color:#fff;color:var(--uni-color-primary-on, #fff)}.uni-color-secondary .mdc-button--raised:not(:disabled),.uni-color-secondary .mdc-button--unelevated:not(:disabled){color:#fff;color:var(--uni-color-secondary-on, #fff)}.uni-color-accent .mdc-button--raised:not(:disabled),.uni-color-accent .mdc-button--unelevated:not(:disabled){color:#fff;color:var(--uni-color-accent-on, #fff)}.uni-color-warn .mdc-button--raised:not(:disabled),.uni-color-warn .mdc-button--unelevated:not(:disabled){color:#fff;color:var(--uni-color-warn-on, #fff)}.uni-color-primary .mdc-button .mdc-button__ripple::before,.uni-color-primary .mdc-button .mdc-button__ripple::after{background-color:#3f51b5;background-color:var(--uni-color-primary, #3f51b5)}.uni-color-secondary .mdc-button .mdc-button__ripple::before,.uni-color-secondary .mdc-button .mdc-button__ripple::after{background-color:#018786;background-color:var(--uni-color-secondary, #018786)}.uni-color-accent .mdc-button .mdc-button__ripple::before,.uni-color-accent .mdc-button .mdc-button__ripple::after{background-color:#ff4081;background-color:var(--uni-color-accent, #ff4081)}.uni-color-warn .mdc-button .mdc-button__ripple::before,.uni-color-warn .mdc-button .mdc-button__ripple::after{background-color:#f44336;background-color:var(--uni-color-warn, #f44336)}.uni-color-primary .mdc-button--raised .mdc-button__ripple::before,.uni-color-primary .mdc-button--raised .mdc-button__ripple::after,.uni-color-primary .mdc-button--unelevated .mdc-button__ripple::before,.uni-color-primary .mdc-button--unelevated .mdc-button__ripple::after{background-color:#fff;background-color:var(--uni-color-primary-on, #fff)}.uni-color-secondary .mdc-button--raised .mdc-button__ripple::before,.uni-color-secondary .mdc-button--raised .mdc-button__ripple::after,.uni-color-secondary .mdc-button--unelevated .mdc-button__ripple::before,.uni-color-secondary .mdc-button--unelevated .mdc-button__ripple::after{background-color:#fff;background-color:var(--uni-color-secondary-on, #fff)}.uni-color-accent .mdc-button--raised .mdc-button__ripple::before,.uni-color-accent .mdc-button--raised .mdc-button__ripple::after,.uni-color-accent .mdc-button--unelevated .mdc-button__ripple::before,.uni-color-accent .mdc-button--unelevated .mdc-button__ripple::after{background-color:#fff;background-color:var(--uni-color-accent-on, #fff)}.uni-color-warn .mdc-button--raised .mdc-button__ripple::before,.uni-color-warn .mdc-button--raised .mdc-button__ripple::after,.uni-color-warn .mdc-button--unelevated .mdc-button__ripple::before,.uni-color-warn .mdc-button--unelevated .mdc-button__ripple::after{background-color:#fff;background-color:var(--uni-color-warn-on, #fff)}";

const UniButtonShadowComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.type = 'button';
        /**
         * If `true`, the user cannot interact with the button.
         */
        this.disabled = false;
        /**
         * If `true`, there is no ripple effect.
         */
        this.noRipple = false;
    }
    componentDidLoad() {
        uniButtonMatInit(this.el.shadowRoot, !this.noRipple);
    }
    render() {
        const { type, disabled, noRipple, kind } = this;
        const props = { type, disabled, noRipple, kind };
        const classes = uniButtonClass(this.color);
        return UniTemplate(h("uni-button-mat", Object.assign({}, props, { class: classes }), h("slot", null)));
    }
    get el() { return getElement(this); }
};
UniButtonShadowComponent.style = buttonCss;

const buttonCss$1 = ".uni-button .mdc-button{font-family:Roboto, \"Helvetica Neue\", sans-serif;text-transform:none}.uni-button .mdc-button:not(:disabled){color:#000;color:var(--uni-color-default, #000)}.uni-button .mdc-button .mdc-button__ripple::before,.uni-button .mdc-button .mdc-button__ripple::after{background-color:#000;background-color:var(--uni-color-default, #000)}@supports not (-ms-ime-align: auto){.uni-button .mdc-button::before,.uni-button .mdc-button::after{background-color:#000;background-color:var(--uni-color-default, #000)}}@supports not (-ms-ime-align: auto){.uni-button .mdc-button--raised:not(:disabled),.uni-button .mdc-button--unelevated:not(:disabled){background-color:#fff;background-color:var(--uni-color-default-on, #fff)}}.uni-color-primary .mdc-button:not(:disabled){color:#3f51b5;color:var(--uni-color-primary, #3f51b5)}.uni-color-secondary .mdc-button:not(:disabled){color:#018786;color:var(--uni-color-secondary, #018786)}.uni-color-accent .mdc-button:not(:disabled){color:#ff4081;color:var(--uni-color-accent, #ff4081)}.uni-color-warn .mdc-button:not(:disabled){color:#f44336;color:var(--uni-color-warn, #f44336)}.uni-color-primary .mdc-button--raised:not(:disabled),.uni-color-primary .mdc-button--unelevated:not(:disabled){background-color:#3f51b5;background-color:var(--uni-color-primary, #3f51b5)}.uni-color-secondary .mdc-button--raised:not(:disabled),.uni-color-secondary .mdc-button--unelevated:not(:disabled){background-color:#018786;background-color:var(--uni-color-secondary, #018786)}.uni-color-accent .mdc-button--raised:not(:disabled),.uni-color-accent .mdc-button--unelevated:not(:disabled){background-color:#ff4081;background-color:var(--uni-color-accent, #ff4081)}.uni-color-warn .mdc-button--raised:not(:disabled),.uni-color-warn .mdc-button--unelevated:not(:disabled){background-color:#f44336;background-color:var(--uni-color-warn, #f44336)}@supports not (-ms-ime-align: auto){.uni-color-primary .mdc-button--raised:not(:disabled),.uni-color-primary .mdc-button--unelevated:not(:disabled){background-color:var(--uni-color-primary, #3f51b5)}}@supports not (-ms-ime-align: auto){.uni-color-secondary .mdc-button--raised:not(:disabled),.uni-color-secondary .mdc-button--unelevated:not(:disabled){background-color:var(--uni-color-secondary, #018786)}}@supports not (-ms-ime-align: auto){.uni-color-accent .mdc-button--raised:not(:disabled),.uni-color-accent .mdc-button--unelevated:not(:disabled){background-color:var(--uni-color-accent, #ff4081)}}@supports not (-ms-ime-align: auto){.uni-color-warn .mdc-button--raised:not(:disabled),.uni-color-warn .mdc-button--unelevated:not(:disabled){background-color:var(--uni-color-warn, #f44336)}}.uni-color-primary .mdc-button--raised:not(:disabled),.uni-color-primary .mdc-button--unelevated:not(:disabled){color:#fff;color:var(--uni-color-primary-on, #fff)}.uni-color-secondary .mdc-button--raised:not(:disabled),.uni-color-secondary .mdc-button--unelevated:not(:disabled){color:#fff;color:var(--uni-color-secondary-on, #fff)}.uni-color-accent .mdc-button--raised:not(:disabled),.uni-color-accent .mdc-button--unelevated:not(:disabled){color:#fff;color:var(--uni-color-accent-on, #fff)}.uni-color-warn .mdc-button--raised:not(:disabled),.uni-color-warn .mdc-button--unelevated:not(:disabled){color:#fff;color:var(--uni-color-warn-on, #fff)}.uni-color-primary .mdc-button .mdc-button__ripple::before,.uni-color-primary .mdc-button .mdc-button__ripple::after{background-color:#3f51b5;background-color:var(--uni-color-primary, #3f51b5)}.uni-color-secondary .mdc-button .mdc-button__ripple::before,.uni-color-secondary .mdc-button .mdc-button__ripple::after{background-color:#018786;background-color:var(--uni-color-secondary, #018786)}.uni-color-accent .mdc-button .mdc-button__ripple::before,.uni-color-accent .mdc-button .mdc-button__ripple::after{background-color:#ff4081;background-color:var(--uni-color-accent, #ff4081)}.uni-color-warn .mdc-button .mdc-button__ripple::before,.uni-color-warn .mdc-button .mdc-button__ripple::after{background-color:#f44336;background-color:var(--uni-color-warn, #f44336)}.uni-color-primary .mdc-button--raised .mdc-button__ripple::before,.uni-color-primary .mdc-button--raised .mdc-button__ripple::after,.uni-color-primary .mdc-button--unelevated .mdc-button__ripple::before,.uni-color-primary .mdc-button--unelevated .mdc-button__ripple::after{background-color:#fff;background-color:var(--uni-color-primary-on, #fff)}.uni-color-secondary .mdc-button--raised .mdc-button__ripple::before,.uni-color-secondary .mdc-button--raised .mdc-button__ripple::after,.uni-color-secondary .mdc-button--unelevated .mdc-button__ripple::before,.uni-color-secondary .mdc-button--unelevated .mdc-button__ripple::after{background-color:#fff;background-color:var(--uni-color-secondary-on, #fff)}.uni-color-accent .mdc-button--raised .mdc-button__ripple::before,.uni-color-accent .mdc-button--raised .mdc-button__ripple::after,.uni-color-accent .mdc-button--unelevated .mdc-button__ripple::before,.uni-color-accent .mdc-button--unelevated .mdc-button__ripple::after{background-color:#fff;background-color:var(--uni-color-accent-on, #fff)}.uni-color-warn .mdc-button--raised .mdc-button__ripple::before,.uni-color-warn .mdc-button--raised .mdc-button__ripple::after,.uni-color-warn .mdc-button--unelevated .mdc-button__ripple::before,.uni-color-warn .mdc-button--unelevated .mdc-button__ripple::after{background-color:#fff;background-color:var(--uni-color-warn-on, #fff)}";

const UniButtonWrapperComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * If `true`, there is no ripple effect.
         */
        this.noRipple = false;
    }
    render() {
        const { noRipple, kind } = this;
        const props = { noRipple, kind };
        const classes = uniButtonClass(this.color);
        return UniTemplate(h("uni-button-mat-wrap", Object.assign({}, props, { class: classes }), h("slot", null)));
    }
    get el() { return getElement(this); }
};
UniButtonWrapperComponent.style = buttonCss$1;

const UniCardComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        const { outlined } = this;
        const props = { outlined };
        return UniTemplate(h("uni-card-mat", Object.assign({}, props), h("slot", null)));
    }
};

const UniContentClasses = {
    drawerContent: 'mdc-drawer-app-content',
    adjustStart: 'uni-content-adjust-start'
};

function uniContentClass(adjustStart) {
    return {
        [UniContentClasses.drawerContent]: true,
        [UniContentClasses.adjustStart]: adjustStart
    };
}

const contentCss = ".uni-content-adjust-start{margin-left:256px !important;margin-right:0 !important}";

const UniContentComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        const classes = uniContentClass(this.adjustStart);
        return UniHostTemplate({ classes }, h("slot", null));
    }
    get el() { return getElement(this); }
};
UniContentComponent.style = contentCss;

function uniFABColorClass(color) {
    return {
        [UniColorClasses[color]]: true
    };
}
function uniFABClass(color) {
    return Object.assign({ 'uni-fab': true }, uniFABColorClass(color));
}

const fabCss = ".uni-fab .mdc-fab{font-family:Roboto, \"Helvetica Neue\", sans-serif;text-transform:none;color:#000;color:var(--uni-color-default, #000);background-color:#fff;background-color:var(--uni-color-default-on, #fff)}.uni-fab .mdc-fab .mdc-fab__ripple::before,.uni-fab .mdc-fab .mdc-fab__ripple::after{background-color:#000;background-color:var(--uni-color-default, #000)}.uni-color-primary .mdc-fab{color:#fff;color:var(--uni-color-default-on, #fff);background-color:#3f51b5;background-color:var(--uni-color-primary, #3f51b5)}.uni-color-primary .mdc-fab .mdc-fab__ripple::before,.uni-color-primary .mdc-fab .mdc-fab__ripple::after{background-color:#fff;background-color:var(--uni-color-primary-on, #fff)}.uni-color-secondary .mdc-fab{color:#fff;color:var(--uni-color-default-on, #fff);background-color:#018786;background-color:var(--uni-color-secondary, #018786)}.uni-color-secondary .mdc-fab .mdc-fab__ripple::before,.uni-color-secondary .mdc-fab .mdc-fab__ripple::after{background-color:#fff;background-color:var(--uni-color-primary-on, #fff)}.uni-color-accent .mdc-fab{color:#fff;color:var(--uni-color-default-on, #fff);background-color:#ff4081;background-color:var(--uni-color-accent, #ff4081)}.uni-color-accent .mdc-fab .mdc-fab__ripple::before,.uni-color-accent .mdc-fab .mdc-fab__ripple::after{background-color:#fff;background-color:var(--uni-color-accent-on, #fff)}.uni-color-warn .mdc-fab{color:#fff;color:var(--uni-color-default-on, #fff);background-color:#f44336;background-color:var(--uni-color-warn, #f44336)}.uni-color-warn .mdc-fab .mdc-fab__ripple::before,.uni-color-warn .mdc-fab .mdc-fab__ripple::after{background-color:#fff;background-color:var(--uni-color-warn-on, #fff)}";

const UniFABComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.noRipple = false;
        this.exited = false;
    }
    render() {
        const { size, exited, noRipple } = this;
        const props = { size, exited, noRipple };
        const classes = uniFABClass(this.color);
        return UniTemplate(h("uni-fab-mat", Object.assign({}, props, { class: classes }), h("slot", null)));
    }
    get el() { return getElement(this); }
};
UniFABComponent.style = fabCss;

const UniFABIconComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return UniTemplate(h("uni-fab-icon-mat", null));
    }
};

const UniFABLabelComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return UniTemplate(h("uni-fab-label-mat", null));
    }
};

const UniFABLayoutComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return UniTemplate(h("uni-fab-layout-mat", null));
    }
};

const fabCss$1 = ".uni-fab .mdc-fab{font-family:Roboto, \"Helvetica Neue\", sans-serif;text-transform:none;color:#000;color:var(--uni-color-default, #000);background-color:#fff;background-color:var(--uni-color-default-on, #fff)}.uni-fab .mdc-fab .mdc-fab__ripple::before,.uni-fab .mdc-fab .mdc-fab__ripple::after{background-color:#000;background-color:var(--uni-color-default, #000)}.uni-color-primary .mdc-fab{color:#fff;color:var(--uni-color-default-on, #fff);background-color:#3f51b5;background-color:var(--uni-color-primary, #3f51b5)}.uni-color-primary .mdc-fab .mdc-fab__ripple::before,.uni-color-primary .mdc-fab .mdc-fab__ripple::after{background-color:#fff;background-color:var(--uni-color-primary-on, #fff)}.uni-color-secondary .mdc-fab{color:#fff;color:var(--uni-color-default-on, #fff);background-color:#018786;background-color:var(--uni-color-secondary, #018786)}.uni-color-secondary .mdc-fab .mdc-fab__ripple::before,.uni-color-secondary .mdc-fab .mdc-fab__ripple::after{background-color:#fff;background-color:var(--uni-color-primary-on, #fff)}.uni-color-accent .mdc-fab{color:#fff;color:var(--uni-color-default-on, #fff);background-color:#ff4081;background-color:var(--uni-color-accent, #ff4081)}.uni-color-accent .mdc-fab .mdc-fab__ripple::before,.uni-color-accent .mdc-fab .mdc-fab__ripple::after{background-color:#fff;background-color:var(--uni-color-accent-on, #fff)}.uni-color-warn .mdc-fab{color:#fff;color:var(--uni-color-default-on, #fff);background-color:#f44336;background-color:var(--uni-color-warn, #f44336)}.uni-color-warn .mdc-fab .mdc-fab__ripple::before,.uni-color-warn .mdc-fab .mdc-fab__ripple::after{background-color:#fff;background-color:var(--uni-color-warn-on, #fff)}";

const UniFABShadowComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.noRipple = false;
        this.exited = false;
    }
    render() {
        const { size, exited, noRipple, color } = this;
        const props = { size, exited, noRipple, color };
        const classes = uniFABClass(this.color);
        return UniTemplate(h("uni-fab-mat", Object.assign({}, props, { class: classes }), h("uni-fab-icon", null, h("slot", null))));
    }
    get el() { return getElement(this); }
};
UniFABShadowComponent.style = fabCss$1;

const fabCss$2 = ".uni-fab .mdc-fab{font-family:Roboto, \"Helvetica Neue\", sans-serif;text-transform:none;color:#000;color:var(--uni-color-default, #000);background-color:#fff;background-color:var(--uni-color-default-on, #fff)}.uni-fab .mdc-fab .mdc-fab__ripple::before,.uni-fab .mdc-fab .mdc-fab__ripple::after{background-color:#000;background-color:var(--uni-color-default, #000)}.uni-color-primary .mdc-fab{color:#fff;color:var(--uni-color-default-on, #fff);background-color:#3f51b5;background-color:var(--uni-color-primary, #3f51b5)}.uni-color-primary .mdc-fab .mdc-fab__ripple::before,.uni-color-primary .mdc-fab .mdc-fab__ripple::after{background-color:#fff;background-color:var(--uni-color-primary-on, #fff)}.uni-color-secondary .mdc-fab{color:#fff;color:var(--uni-color-default-on, #fff);background-color:#018786;background-color:var(--uni-color-secondary, #018786)}.uni-color-secondary .mdc-fab .mdc-fab__ripple::before,.uni-color-secondary .mdc-fab .mdc-fab__ripple::after{background-color:#fff;background-color:var(--uni-color-primary-on, #fff)}.uni-color-accent .mdc-fab{color:#fff;color:var(--uni-color-default-on, #fff);background-color:#ff4081;background-color:var(--uni-color-accent, #ff4081)}.uni-color-accent .mdc-fab .mdc-fab__ripple::before,.uni-color-accent .mdc-fab .mdc-fab__ripple::after{background-color:#fff;background-color:var(--uni-color-accent-on, #fff)}.uni-color-warn .mdc-fab{color:#fff;color:var(--uni-color-default-on, #fff);background-color:#f44336;background-color:var(--uni-color-warn, #f44336)}.uni-color-warn .mdc-fab .mdc-fab__ripple::before,.uni-color-warn .mdc-fab .mdc-fab__ripple::after{background-color:#fff;background-color:var(--uni-color-warn-on, #fff)}";

const UniFABWrapComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.noRipple = false;
        this.exited = false;
    }
    render() {
        const { size, exited, noRipple, color } = this;
        const props = { size, exited, noRipple, color };
        const classes = uniFABClass(this.color);
        return UniTemplate(h("uni-fab-mat-wrap", Object.assign({}, props, { class: classes }), h("slot", null)));
    }
    get el() { return getElement(this); }
};
UniFABWrapComponent.style = fabCss$2;

const headerCss = "uni-header .mdc-top-app-bar{background:linear-gradient(90deg, #185079 0%, #0ACDB7 100%);z-index:9}uni-header .mdc-top-app-bar__navigation-icon .mdc-icon-button{background-color:#154468}uni-header .mdc-top-app-bar__section--align-start{padding:0!important}";

const UniHeaderComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        const { kind } = this;
        const props = { kind };
        return UniTemplate(h("uni-header-mat", Object.assign({}, props), h("slot", null)));
    }
    get el() { return getElement(this); }
};
UniHeaderComponent.style = headerCss;

const UniIconDefault = {
    size: '24',
    color: '#333'
};

const UniIconCopyComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.size = UniIconDefault.size;
        this.color = UniIconDefault.color;
    }
    render() {
        const { size, color } = this;
        const props = { style: { color, fill: 'currentColor', width: size, height: size } };
        return UniHostTemplate({ props }, h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", width: size, height: size }, h("path", { d: "M433.941 65.941l-51.882-51.882A48 48 0 0 0 348.118 0H176c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48\n          21.49-48 48v320c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48v-48h80c26.51 0 48-21.49 48-48V99.882a48\n          48 0 0 0-14.059-33.941zM266 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h74v224c0 26.51 21.49 48 48 48h96v42a6 6 0\n          0 1-6 6zm128-96H182a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h106v88c0 13.255 10.745 24 24 24h88v202a6 6 0 0 1-6\n          6zm6-256h-64V48h9.632c1.591 0 3.117.632 4.243 1.757l48.368 48.368a6 6 0 0 1 1.757 4.243V112z" })));
    }
};

const UniIconDownloadComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.size = UniIconDefault.size;
        this.color = UniIconDefault.color;
    }
    render() {
        const { size, color } = this;
        const props = { style: { color, fill: 'currentColor' } };
        return UniHostTemplate({ props }, h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", width: size, height: size }, h("path", { d: "M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3\n        0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24\n        24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24\n        10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20\n        20 20-9 20-20z" })));
    }
};

const UniIconFileDownloadComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.size = UniIconDefault.size;
        this.color = UniIconDefault.color;
    }
    render() {
        const { size, color } = this;
        const props = { style: { color, fill: 'currentColor', width: size, height: size } };
        return UniHostTemplate({ props }, h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 384 512", width: size, height: size }, h("path", { d: "M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2\n        0-24-10.8-24-24zm76.45 211.36l-96.42 95.7c-6.65 6.61-17.39 6.61-24.04 0l-96.42-95.7C73.42 337.29 80.54 320\n        94.82 320H160v-80c0-8.84 7.16-16 16-16h32c8.84 0 16 7.16 16 16v80h65.18c14.28 0 21.4 17.29 11.27 27.36zM377\n        105L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1c0-6.3-2.5-12.4-7-16.9z" })));
    }
};

function uniIconButtonColorClass(color) {
    return { [UniColorClasses[color]]: true };
}
function uniIconButtonClass(color) {
    return uniIconButtonColorClass(color);
}
function uniIconToggleClass(color) {
    return uniIconButtonColorClass(color);
}

const iconButtonCss = ".uni-color-primary .material-icons{color:#3f51b5;color:var(--uni-color-primary, #3f51b5)}.uni-color-primary .mdc-icon-button::before,.uni-color-primary .mdc-icon-button::after{background-color:#3f51b5;background-color:var(--uni-color-primary, #3f51b5)}.uni-color-secondary .material-icons{color:#018786;color:var(--uni-color-secondary, #018786)}.uni-color-secondary .mdc-icon-button::before,.uni-color-secondary .mdc-icon-button::after{background-color:#018786;background-color:var(--uni-color-secondary, #018786)}.uni-color-accent .material-icons{color:#ff4081;color:var(--uni-color-accent, #ff4081)}.uni-color-accent .mdc-icon-button::before,.uni-color-accent .mdc-icon-button::after{background-color:#ff4081;background-color:var(--uni-color-accent, #ff4081)}.uni-color-warn .material-icons{color:#f44336;color:var(--uni-color-warn, #f44336)}.uni-color-warn .mdc-icon-button::before,.uni-color-warn .mdc-icon-button::after{background-color:#f44336;background-color:var(--uni-color-warn, #f44336)}";

const UniIconButtonComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.disabled = false;
        this.toggle = false;
        this.on = false;
    }
    render() {
        const { disabled, toggle, on } = this;
        const props = { disabled, on, toggle };
        const classes = uniIconButtonClass(this.color);
        return UniTemplate(h("uni-icon-button-mat", Object.assign({}, props, { class: classes }), h("slot", null)));
    }
    get el() { return getElement(this); }
};
UniIconButtonComponent.style = iconButtonCss;

const iconButtonCss$1 = ".uni-color-primary .material-icons{color:#3f51b5;color:var(--uni-color-primary, #3f51b5)}.uni-color-primary .mdc-icon-button::before,.uni-color-primary .mdc-icon-button::after{background-color:#3f51b5;background-color:var(--uni-color-primary, #3f51b5)}.uni-color-secondary .material-icons{color:#018786;color:var(--uni-color-secondary, #018786)}.uni-color-secondary .mdc-icon-button::before,.uni-color-secondary .mdc-icon-button::after{background-color:#018786;background-color:var(--uni-color-secondary, #018786)}.uni-color-accent .material-icons{color:#ff4081;color:var(--uni-color-accent, #ff4081)}.uni-color-accent .mdc-icon-button::before,.uni-color-accent .mdc-icon-button::after{background-color:#ff4081;background-color:var(--uni-color-accent, #ff4081)}.uni-color-warn .material-icons{color:#f44336;color:var(--uni-color-warn, #f44336)}.uni-color-warn .mdc-icon-button::before,.uni-color-warn .mdc-icon-button::after{background-color:#f44336;background-color:var(--uni-color-warn, #f44336)}";

const UniIconButtonShadowComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.disabled = false;
    }
    componentDidLoad() {
        uniRippleMatInit(this.el.shadowRoot.querySelector('button'), true);
    }
    render() {
        const { disabled, color } = this;
        const props = { disabled, color };
        const classes = uniIconButtonColorClass(color);
        return UniTemplate(h("uni-icon-button-mat-shadow", Object.assign({}, props, { class: classes }), h("slot", null)));
    }
    get el() { return getElement(this); }
};
UniIconButtonShadowComponent.style = iconButtonCss$1;

const iconButtonToggleCss = ".uni-color-primary.mdc-icon-button__icon{color:#3f51b5;color:var(--uni-color-primary, #3f51b5)}.uni-color-secondary.mdc-icon-button__icon{color:#018786;color:var(--uni-color-secondary, #018786)}.uni-color-accent.mdc-icon-button__icon{color:#ff4081;color:var(--uni-color-accent, #ff4081)}.uni-color-warn.mdc-icon-button__icon{color:#f44336;color:var(--uni-color-warn, #f44336)}";

const UniIconToggleComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.on = false;
    }
    render() {
        const { on } = this;
        const props = { on };
        const classes = uniIconToggleClass(this.color);
        return UniTemplate(h("uni-icon-toggle-mat", Object.assign({}, props, { class: classes }), h("slot", null)));
    }
};
UniIconToggleComponent.style = iconButtonToggleCss;

const UniIconButtonWrapperComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.toggle = false;
        this.on = false;
    }
    render() {
        const classes = uniIconButtonClass(this.color);
        return UniTemplate(h("uni-icon-button-mat-wrap", { class: classes }, h("slot", null)));
    }
    get el() { return getElement(this); }
};

const UniIconsComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return UniTemplate(h("uni-icons-mat", null));
    }
};

function uniIconClass(color = '') {
    return {
        [UniColorClasses[color]]: true
    };
}

const iconCss = ".material-icons.uni-color-primary{color:#3f51b5;color:var(--uni-color-primary, #3f51b5)}.material-icons.uni-color-secondary{color:#018786;color:var(--uni-color-secondary, #018786)}.material-icons.uni-color-accent{color:#ff4081;color:var(--uni-color-accent, #ff4081)}.material-icons.uni-color-warn{color:#f44336;color:var(--uni-color-warn, #f44336)}";

const UniIconComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        const classes = uniIconClass(this.color);
        return UniTemplate(h("uni-icon-mat", { class: classes }, h("slot", null)));
    }
};
UniIconComponent.style = iconCss;

const iconCss$1 = ".material-icons.uni-color-primary{color:#3f51b5;color:var(--uni-color-primary, #3f51b5)}.material-icons.uni-color-secondary{color:#018786;color:var(--uni-color-secondary, #018786)}.material-icons.uni-color-accent{color:#ff4081;color:var(--uni-color-accent, #ff4081)}.material-icons.uni-color-warn{color:#f44336;color:var(--uni-color-warn, #f44336)}";

const UniIconShadowComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        const classes = uniIconClass(this.color);
        return UniTemplate(h("uni-icon-mat", { class: classes }, h("slot", null)));
    }
};
UniIconShadowComponent.style = iconCss$1;

const layoutCss = "/*!\n * Bootstrap Grid v4.5.0 (https://getbootstrap.com/)\n * Copyright 2011-2020 The Bootstrap Authors\n * Copyright 2011-2020 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n */html{box-sizing:border-box;-ms-overflow-style:scrollbar}*,::after,::before{box-sizing:inherit}.container{width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}@media (min-width:576px){.container{max-width:540px}}@media (min-width:768px){.container{max-width:720px}}@media (min-width:992px){.container{max-width:960px}}@media (min-width:1200px){.container{max-width:1140px}}.container-fluid,.container-lg,.container-md,.container-sm,.container-xl{width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}@media (min-width:576px){.container,.container-sm{max-width:540px}}@media (min-width:768px){.container,.container-md,.container-sm{max-width:720px}}@media (min-width:992px){.container,.container-lg,.container-md,.container-sm{max-width:960px}}@media (min-width:1200px){.container,.container-lg,.container-md,.container-sm,.container-xl{max-width:1140px}}.row{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-right:-15px;margin-left:-15px}.no-gutters{margin-right:0;margin-left:0}.no-gutters>.col,.no-gutters>[class*=col-]{padding-right:0;padding-left:0}.col,.col-1,.col-10,.col-11,.col-12,.col-2,.col-3,.col-4,.col-5,.col-6,.col-7,.col-8,.col-9,.col-auto,.col-lg,.col-lg-1,.col-lg-10,.col-lg-11,.col-lg-12,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9,.col-lg-auto,.col-md,.col-md-1,.col-md-10,.col-md-11,.col-md-12,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-md-auto,.col-sm,.col-sm-1,.col-sm-10,.col-sm-11,.col-sm-12,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9,.col-sm-auto,.col-xl,.col-xl-1,.col-xl-10,.col-xl-11,.col-xl-12,.col-xl-2,.col-xl-3,.col-xl-4,.col-xl-5,.col-xl-6,.col-xl-7,.col-xl-8,.col-xl-9,.col-xl-auto{position:relative;width:100%;padding-right:15px;padding-left:15px}.col{-ms-flex-preferred-size:0;flex-basis:0;-ms-flex-positive:1;flex-grow:1;min-width:0;max-width:100%}.row-cols-1>*{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.row-cols-2>*{-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.row-cols-3>*{-ms-flex:0 0 33.333333%;flex:0 0 33.333333%;max-width:33.333333%}.row-cols-4>*{-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.row-cols-5>*{-ms-flex:0 0 20%;flex:0 0 20%;max-width:20%}.row-cols-6>*{-ms-flex:0 0 16.666667%;flex:0 0 16.666667%;max-width:16.666667%}.col-auto{-ms-flex:0 0 auto;flex:0 0 auto;width:auto;max-width:100%}.col-1{-ms-flex:0 0 8.333333%;flex:0 0 8.333333%;max-width:8.333333%}.col-2{-ms-flex:0 0 16.666667%;flex:0 0 16.666667%;max-width:16.666667%}.col-3{-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.col-4{-ms-flex:0 0 33.333333%;flex:0 0 33.333333%;max-width:33.333333%}.col-5{-ms-flex:0 0 41.666667%;flex:0 0 41.666667%;max-width:41.666667%}.col-6{-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.col-7{-ms-flex:0 0 58.333333%;flex:0 0 58.333333%;max-width:58.333333%}.col-8{-ms-flex:0 0 66.666667%;flex:0 0 66.666667%;max-width:66.666667%}.col-9{-ms-flex:0 0 75%;flex:0 0 75%;max-width:75%}.col-10{-ms-flex:0 0 83.333333%;flex:0 0 83.333333%;max-width:83.333333%}.col-11{-ms-flex:0 0 91.666667%;flex:0 0 91.666667%;max-width:91.666667%}.col-12{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.order-first{-ms-flex-order:-1;order:-1}.order-last{-ms-flex-order:13;order:13}.order-0{-ms-flex-order:0;order:0}.order-1{-ms-flex-order:1;order:1}.order-2{-ms-flex-order:2;order:2}.order-3{-ms-flex-order:3;order:3}.order-4{-ms-flex-order:4;order:4}.order-5{-ms-flex-order:5;order:5}.order-6{-ms-flex-order:6;order:6}.order-7{-ms-flex-order:7;order:7}.order-8{-ms-flex-order:8;order:8}.order-9{-ms-flex-order:9;order:9}.order-10{-ms-flex-order:10;order:10}.order-11{-ms-flex-order:11;order:11}.order-12{-ms-flex-order:12;order:12}.offset-1{margin-left:8.333333%}.offset-2{margin-left:16.666667%}.offset-3{margin-left:25%}.offset-4{margin-left:33.333333%}.offset-5{margin-left:41.666667%}.offset-6{margin-left:50%}.offset-7{margin-left:58.333333%}.offset-8{margin-left:66.666667%}.offset-9{margin-left:75%}.offset-10{margin-left:83.333333%}.offset-11{margin-left:91.666667%}@media (min-width:576px){.col-sm{-ms-flex-preferred-size:0;flex-basis:0;-ms-flex-positive:1;flex-grow:1;min-width:0;max-width:100%}.row-cols-sm-1>*{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.row-cols-sm-2>*{-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.row-cols-sm-3>*{-ms-flex:0 0 33.333333%;flex:0 0 33.333333%;max-width:33.333333%}.row-cols-sm-4>*{-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.row-cols-sm-5>*{-ms-flex:0 0 20%;flex:0 0 20%;max-width:20%}.row-cols-sm-6>*{-ms-flex:0 0 16.666667%;flex:0 0 16.666667%;max-width:16.666667%}.col-sm-auto{-ms-flex:0 0 auto;flex:0 0 auto;width:auto;max-width:100%}.col-sm-1{-ms-flex:0 0 8.333333%;flex:0 0 8.333333%;max-width:8.333333%}.col-sm-2{-ms-flex:0 0 16.666667%;flex:0 0 16.666667%;max-width:16.666667%}.col-sm-3{-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.col-sm-4{-ms-flex:0 0 33.333333%;flex:0 0 33.333333%;max-width:33.333333%}.col-sm-5{-ms-flex:0 0 41.666667%;flex:0 0 41.666667%;max-width:41.666667%}.col-sm-6{-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.col-sm-7{-ms-flex:0 0 58.333333%;flex:0 0 58.333333%;max-width:58.333333%}.col-sm-8{-ms-flex:0 0 66.666667%;flex:0 0 66.666667%;max-width:66.666667%}.col-sm-9{-ms-flex:0 0 75%;flex:0 0 75%;max-width:75%}.col-sm-10{-ms-flex:0 0 83.333333%;flex:0 0 83.333333%;max-width:83.333333%}.col-sm-11{-ms-flex:0 0 91.666667%;flex:0 0 91.666667%;max-width:91.666667%}.col-sm-12{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.order-sm-first{-ms-flex-order:-1;order:-1}.order-sm-last{-ms-flex-order:13;order:13}.order-sm-0{-ms-flex-order:0;order:0}.order-sm-1{-ms-flex-order:1;order:1}.order-sm-2{-ms-flex-order:2;order:2}.order-sm-3{-ms-flex-order:3;order:3}.order-sm-4{-ms-flex-order:4;order:4}.order-sm-5{-ms-flex-order:5;order:5}.order-sm-6{-ms-flex-order:6;order:6}.order-sm-7{-ms-flex-order:7;order:7}.order-sm-8{-ms-flex-order:8;order:8}.order-sm-9{-ms-flex-order:9;order:9}.order-sm-10{-ms-flex-order:10;order:10}.order-sm-11{-ms-flex-order:11;order:11}.order-sm-12{-ms-flex-order:12;order:12}.offset-sm-0{margin-left:0}.offset-sm-1{margin-left:8.333333%}.offset-sm-2{margin-left:16.666667%}.offset-sm-3{margin-left:25%}.offset-sm-4{margin-left:33.333333%}.offset-sm-5{margin-left:41.666667%}.offset-sm-6{margin-left:50%}.offset-sm-7{margin-left:58.333333%}.offset-sm-8{margin-left:66.666667%}.offset-sm-9{margin-left:75%}.offset-sm-10{margin-left:83.333333%}.offset-sm-11{margin-left:91.666667%}}@media (min-width:768px){.col-md{-ms-flex-preferred-size:0;flex-basis:0;-ms-flex-positive:1;flex-grow:1;min-width:0;max-width:100%}.row-cols-md-1>*{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.row-cols-md-2>*{-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.row-cols-md-3>*{-ms-flex:0 0 33.333333%;flex:0 0 33.333333%;max-width:33.333333%}.row-cols-md-4>*{-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.row-cols-md-5>*{-ms-flex:0 0 20%;flex:0 0 20%;max-width:20%}.row-cols-md-6>*{-ms-flex:0 0 16.666667%;flex:0 0 16.666667%;max-width:16.666667%}.col-md-auto{-ms-flex:0 0 auto;flex:0 0 auto;width:auto;max-width:100%}.col-md-1{-ms-flex:0 0 8.333333%;flex:0 0 8.333333%;max-width:8.333333%}.col-md-2{-ms-flex:0 0 16.666667%;flex:0 0 16.666667%;max-width:16.666667%}.col-md-3{-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.col-md-4{-ms-flex:0 0 33.333333%;flex:0 0 33.333333%;max-width:33.333333%}.col-md-5{-ms-flex:0 0 41.666667%;flex:0 0 41.666667%;max-width:41.666667%}.col-md-6{-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.col-md-7{-ms-flex:0 0 58.333333%;flex:0 0 58.333333%;max-width:58.333333%}.col-md-8{-ms-flex:0 0 66.666667%;flex:0 0 66.666667%;max-width:66.666667%}.col-md-9{-ms-flex:0 0 75%;flex:0 0 75%;max-width:75%}.col-md-10{-ms-flex:0 0 83.333333%;flex:0 0 83.333333%;max-width:83.333333%}.col-md-11{-ms-flex:0 0 91.666667%;flex:0 0 91.666667%;max-width:91.666667%}.col-md-12{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.order-md-first{-ms-flex-order:-1;order:-1}.order-md-last{-ms-flex-order:13;order:13}.order-md-0{-ms-flex-order:0;order:0}.order-md-1{-ms-flex-order:1;order:1}.order-md-2{-ms-flex-order:2;order:2}.order-md-3{-ms-flex-order:3;order:3}.order-md-4{-ms-flex-order:4;order:4}.order-md-5{-ms-flex-order:5;order:5}.order-md-6{-ms-flex-order:6;order:6}.order-md-7{-ms-flex-order:7;order:7}.order-md-8{-ms-flex-order:8;order:8}.order-md-9{-ms-flex-order:9;order:9}.order-md-10{-ms-flex-order:10;order:10}.order-md-11{-ms-flex-order:11;order:11}.order-md-12{-ms-flex-order:12;order:12}.offset-md-0{margin-left:0}.offset-md-1{margin-left:8.333333%}.offset-md-2{margin-left:16.666667%}.offset-md-3{margin-left:25%}.offset-md-4{margin-left:33.333333%}.offset-md-5{margin-left:41.666667%}.offset-md-6{margin-left:50%}.offset-md-7{margin-left:58.333333%}.offset-md-8{margin-left:66.666667%}.offset-md-9{margin-left:75%}.offset-md-10{margin-left:83.333333%}.offset-md-11{margin-left:91.666667%}}@media (min-width:992px){.col-lg{-ms-flex-preferred-size:0;flex-basis:0;-ms-flex-positive:1;flex-grow:1;min-width:0;max-width:100%}.row-cols-lg-1>*{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.row-cols-lg-2>*{-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.row-cols-lg-3>*{-ms-flex:0 0 33.333333%;flex:0 0 33.333333%;max-width:33.333333%}.row-cols-lg-4>*{-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.row-cols-lg-5>*{-ms-flex:0 0 20%;flex:0 0 20%;max-width:20%}.row-cols-lg-6>*{-ms-flex:0 0 16.666667%;flex:0 0 16.666667%;max-width:16.666667%}.col-lg-auto{-ms-flex:0 0 auto;flex:0 0 auto;width:auto;max-width:100%}.col-lg-1{-ms-flex:0 0 8.333333%;flex:0 0 8.333333%;max-width:8.333333%}.col-lg-2{-ms-flex:0 0 16.666667%;flex:0 0 16.666667%;max-width:16.666667%}.col-lg-3{-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.col-lg-4{-ms-flex:0 0 33.333333%;flex:0 0 33.333333%;max-width:33.333333%}.col-lg-5{-ms-flex:0 0 41.666667%;flex:0 0 41.666667%;max-width:41.666667%}.col-lg-6{-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.col-lg-7{-ms-flex:0 0 58.333333%;flex:0 0 58.333333%;max-width:58.333333%}.col-lg-8{-ms-flex:0 0 66.666667%;flex:0 0 66.666667%;max-width:66.666667%}.col-lg-9{-ms-flex:0 0 75%;flex:0 0 75%;max-width:75%}.col-lg-10{-ms-flex:0 0 83.333333%;flex:0 0 83.333333%;max-width:83.333333%}.col-lg-11{-ms-flex:0 0 91.666667%;flex:0 0 91.666667%;max-width:91.666667%}.col-lg-12{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.order-lg-first{-ms-flex-order:-1;order:-1}.order-lg-last{-ms-flex-order:13;order:13}.order-lg-0{-ms-flex-order:0;order:0}.order-lg-1{-ms-flex-order:1;order:1}.order-lg-2{-ms-flex-order:2;order:2}.order-lg-3{-ms-flex-order:3;order:3}.order-lg-4{-ms-flex-order:4;order:4}.order-lg-5{-ms-flex-order:5;order:5}.order-lg-6{-ms-flex-order:6;order:6}.order-lg-7{-ms-flex-order:7;order:7}.order-lg-8{-ms-flex-order:8;order:8}.order-lg-9{-ms-flex-order:9;order:9}.order-lg-10{-ms-flex-order:10;order:10}.order-lg-11{-ms-flex-order:11;order:11}.order-lg-12{-ms-flex-order:12;order:12}.offset-lg-0{margin-left:0}.offset-lg-1{margin-left:8.333333%}.offset-lg-2{margin-left:16.666667%}.offset-lg-3{margin-left:25%}.offset-lg-4{margin-left:33.333333%}.offset-lg-5{margin-left:41.666667%}.offset-lg-6{margin-left:50%}.offset-lg-7{margin-left:58.333333%}.offset-lg-8{margin-left:66.666667%}.offset-lg-9{margin-left:75%}.offset-lg-10{margin-left:83.333333%}.offset-lg-11{margin-left:91.666667%}}@media (min-width:1200px){.col-xl{-ms-flex-preferred-size:0;flex-basis:0;-ms-flex-positive:1;flex-grow:1;min-width:0;max-width:100%}.row-cols-xl-1>*{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.row-cols-xl-2>*{-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.row-cols-xl-3>*{-ms-flex:0 0 33.333333%;flex:0 0 33.333333%;max-width:33.333333%}.row-cols-xl-4>*{-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.row-cols-xl-5>*{-ms-flex:0 0 20%;flex:0 0 20%;max-width:20%}.row-cols-xl-6>*{-ms-flex:0 0 16.666667%;flex:0 0 16.666667%;max-width:16.666667%}.col-xl-auto{-ms-flex:0 0 auto;flex:0 0 auto;width:auto;max-width:100%}.col-xl-1{-ms-flex:0 0 8.333333%;flex:0 0 8.333333%;max-width:8.333333%}.col-xl-2{-ms-flex:0 0 16.666667%;flex:0 0 16.666667%;max-width:16.666667%}.col-xl-3{-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.col-xl-4{-ms-flex:0 0 33.333333%;flex:0 0 33.333333%;max-width:33.333333%}.col-xl-5{-ms-flex:0 0 41.666667%;flex:0 0 41.666667%;max-width:41.666667%}.col-xl-6{-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.col-xl-7{-ms-flex:0 0 58.333333%;flex:0 0 58.333333%;max-width:58.333333%}.col-xl-8{-ms-flex:0 0 66.666667%;flex:0 0 66.666667%;max-width:66.666667%}.col-xl-9{-ms-flex:0 0 75%;flex:0 0 75%;max-width:75%}.col-xl-10{-ms-flex:0 0 83.333333%;flex:0 0 83.333333%;max-width:83.333333%}.col-xl-11{-ms-flex:0 0 91.666667%;flex:0 0 91.666667%;max-width:91.666667%}.col-xl-12{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.order-xl-first{-ms-flex-order:-1;order:-1}.order-xl-last{-ms-flex-order:13;order:13}.order-xl-0{-ms-flex-order:0;order:0}.order-xl-1{-ms-flex-order:1;order:1}.order-xl-2{-ms-flex-order:2;order:2}.order-xl-3{-ms-flex-order:3;order:3}.order-xl-4{-ms-flex-order:4;order:4}.order-xl-5{-ms-flex-order:5;order:5}.order-xl-6{-ms-flex-order:6;order:6}.order-xl-7{-ms-flex-order:7;order:7}.order-xl-8{-ms-flex-order:8;order:8}.order-xl-9{-ms-flex-order:9;order:9}.order-xl-10{-ms-flex-order:10;order:10}.order-xl-11{-ms-flex-order:11;order:11}.order-xl-12{-ms-flex-order:12;order:12}.offset-xl-0{margin-left:0}.offset-xl-1{margin-left:8.333333%}.offset-xl-2{margin-left:16.666667%}.offset-xl-3{margin-left:25%}.offset-xl-4{margin-left:33.333333%}.offset-xl-5{margin-left:41.666667%}.offset-xl-6{margin-left:50%}.offset-xl-7{margin-left:58.333333%}.offset-xl-8{margin-left:66.666667%}.offset-xl-9{margin-left:75%}.offset-xl-10{margin-left:83.333333%}.offset-xl-11{margin-left:91.666667%}}.d-none{display:none!important}.d-inline{display:inline!important}.d-inline-block{display:inline-block!important}.d-block{display:block!important}.d-table{display:table!important}.d-table-row{display:table-row!important}.d-table-cell{display:table-cell!important}.d-flex{display:-ms-flexbox!important;display:flex!important}.d-inline-flex{display:-ms-inline-flexbox!important;display:inline-flex!important}@media (min-width:576px){.d-sm-none{display:none!important}.d-sm-inline{display:inline!important}.d-sm-inline-block{display:inline-block!important}.d-sm-block{display:block!important}.d-sm-table{display:table!important}.d-sm-table-row{display:table-row!important}.d-sm-table-cell{display:table-cell!important}.d-sm-flex{display:-ms-flexbox!important;display:flex!important}.d-sm-inline-flex{display:-ms-inline-flexbox!important;display:inline-flex!important}}@media (min-width:768px){.d-md-none{display:none!important}.d-md-inline{display:inline!important}.d-md-inline-block{display:inline-block!important}.d-md-block{display:block!important}.d-md-table{display:table!important}.d-md-table-row{display:table-row!important}.d-md-table-cell{display:table-cell!important}.d-md-flex{display:-ms-flexbox!important;display:flex!important}.d-md-inline-flex{display:-ms-inline-flexbox!important;display:inline-flex!important}}@media (min-width:992px){.d-lg-none{display:none!important}.d-lg-inline{display:inline!important}.d-lg-inline-block{display:inline-block!important}.d-lg-block{display:block!important}.d-lg-table{display:table!important}.d-lg-table-row{display:table-row!important}.d-lg-table-cell{display:table-cell!important}.d-lg-flex{display:-ms-flexbox!important;display:flex!important}.d-lg-inline-flex{display:-ms-inline-flexbox!important;display:inline-flex!important}}@media (min-width:1200px){.d-xl-none{display:none!important}.d-xl-inline{display:inline!important}.d-xl-inline-block{display:inline-block!important}.d-xl-block{display:block!important}.d-xl-table{display:table!important}.d-xl-table-row{display:table-row!important}.d-xl-table-cell{display:table-cell!important}.d-xl-flex{display:-ms-flexbox!important;display:flex!important}.d-xl-inline-flex{display:-ms-inline-flexbox!important;display:inline-flex!important}}@media print{.d-print-none{display:none!important}.d-print-inline{display:inline!important}.d-print-inline-block{display:inline-block!important}.d-print-block{display:block!important}.d-print-table{display:table!important}.d-print-table-row{display:table-row!important}.d-print-table-cell{display:table-cell!important}.d-print-flex{display:-ms-flexbox!important;display:flex!important}.d-print-inline-flex{display:-ms-inline-flexbox!important;display:inline-flex!important}}.flex-row{-ms-flex-direction:row!important;flex-direction:row!important}.flex-column{-ms-flex-direction:column!important;flex-direction:column!important}.flex-row-reverse{-ms-flex-direction:row-reverse!important;flex-direction:row-reverse!important}.flex-column-reverse{-ms-flex-direction:column-reverse!important;flex-direction:column-reverse!important}.flex-wrap{-ms-flex-wrap:wrap!important;flex-wrap:wrap!important}.flex-nowrap{-ms-flex-wrap:nowrap!important;flex-wrap:nowrap!important}.flex-wrap-reverse{-ms-flex-wrap:wrap-reverse!important;flex-wrap:wrap-reverse!important}.flex-fill{-ms-flex:1 1 auto!important;flex:1 1 auto!important}.flex-grow-0{-ms-flex-positive:0!important;flex-grow:0!important}.flex-grow-1{-ms-flex-positive:1!important;flex-grow:1!important}.flex-shrink-0{-ms-flex-negative:0!important;flex-shrink:0!important}.flex-shrink-1{-ms-flex-negative:1!important;flex-shrink:1!important}.justify-content-start{-ms-flex-pack:start!important;justify-content:flex-start!important}.justify-content-end{-ms-flex-pack:end!important;justify-content:flex-end!important}.justify-content-center{-ms-flex-pack:center!important;justify-content:center!important}.justify-content-between{-ms-flex-pack:justify!important;justify-content:space-between!important}.justify-content-around{-ms-flex-pack:distribute!important;justify-content:space-around!important}.align-items-start{-ms-flex-align:start!important;align-items:flex-start!important}.align-items-end{-ms-flex-align:end!important;align-items:flex-end!important}.align-items-center{-ms-flex-align:center!important;align-items:center!important}.align-items-baseline{-ms-flex-align:baseline!important;align-items:baseline!important}.align-items-stretch{-ms-flex-align:stretch!important;align-items:stretch!important}.align-content-start{-ms-flex-line-pack:start!important;align-content:flex-start!important}.align-content-end{-ms-flex-line-pack:end!important;align-content:flex-end!important}.align-content-center{-ms-flex-line-pack:center!important;align-content:center!important}.align-content-between{-ms-flex-line-pack:justify!important;align-content:space-between!important}.align-content-around{-ms-flex-line-pack:distribute!important;align-content:space-around!important}.align-content-stretch{-ms-flex-line-pack:stretch!important;align-content:stretch!important}.align-self-auto{-ms-flex-item-align:auto!important;align-self:auto!important}.align-self-start{-ms-flex-item-align:start!important;align-self:flex-start!important}.align-self-end{-ms-flex-item-align:end!important;align-self:flex-end!important}.align-self-center{-ms-flex-item-align:center!important;align-self:center!important}.align-self-baseline{-ms-flex-item-align:baseline!important;align-self:baseline!important}.align-self-stretch{-ms-flex-item-align:stretch!important;align-self:stretch!important}@media (min-width:576px){.flex-sm-row{-ms-flex-direction:row!important;flex-direction:row!important}.flex-sm-column{-ms-flex-direction:column!important;flex-direction:column!important}.flex-sm-row-reverse{-ms-flex-direction:row-reverse!important;flex-direction:row-reverse!important}.flex-sm-column-reverse{-ms-flex-direction:column-reverse!important;flex-direction:column-reverse!important}.flex-sm-wrap{-ms-flex-wrap:wrap!important;flex-wrap:wrap!important}.flex-sm-nowrap{-ms-flex-wrap:nowrap!important;flex-wrap:nowrap!important}.flex-sm-wrap-reverse{-ms-flex-wrap:wrap-reverse!important;flex-wrap:wrap-reverse!important}.flex-sm-fill{-ms-flex:1 1 auto!important;flex:1 1 auto!important}.flex-sm-grow-0{-ms-flex-positive:0!important;flex-grow:0!important}.flex-sm-grow-1{-ms-flex-positive:1!important;flex-grow:1!important}.flex-sm-shrink-0{-ms-flex-negative:0!important;flex-shrink:0!important}.flex-sm-shrink-1{-ms-flex-negative:1!important;flex-shrink:1!important}.justify-content-sm-start{-ms-flex-pack:start!important;justify-content:flex-start!important}.justify-content-sm-end{-ms-flex-pack:end!important;justify-content:flex-end!important}.justify-content-sm-center{-ms-flex-pack:center!important;justify-content:center!important}.justify-content-sm-between{-ms-flex-pack:justify!important;justify-content:space-between!important}.justify-content-sm-around{-ms-flex-pack:distribute!important;justify-content:space-around!important}.align-items-sm-start{-ms-flex-align:start!important;align-items:flex-start!important}.align-items-sm-end{-ms-flex-align:end!important;align-items:flex-end!important}.align-items-sm-center{-ms-flex-align:center!important;align-items:center!important}.align-items-sm-baseline{-ms-flex-align:baseline!important;align-items:baseline!important}.align-items-sm-stretch{-ms-flex-align:stretch!important;align-items:stretch!important}.align-content-sm-start{-ms-flex-line-pack:start!important;align-content:flex-start!important}.align-content-sm-end{-ms-flex-line-pack:end!important;align-content:flex-end!important}.align-content-sm-center{-ms-flex-line-pack:center!important;align-content:center!important}.align-content-sm-between{-ms-flex-line-pack:justify!important;align-content:space-between!important}.align-content-sm-around{-ms-flex-line-pack:distribute!important;align-content:space-around!important}.align-content-sm-stretch{-ms-flex-line-pack:stretch!important;align-content:stretch!important}.align-self-sm-auto{-ms-flex-item-align:auto!important;align-self:auto!important}.align-self-sm-start{-ms-flex-item-align:start!important;align-self:flex-start!important}.align-self-sm-end{-ms-flex-item-align:end!important;align-self:flex-end!important}.align-self-sm-center{-ms-flex-item-align:center!important;align-self:center!important}.align-self-sm-baseline{-ms-flex-item-align:baseline!important;align-self:baseline!important}.align-self-sm-stretch{-ms-flex-item-align:stretch!important;align-self:stretch!important}}@media (min-width:768px){.flex-md-row{-ms-flex-direction:row!important;flex-direction:row!important}.flex-md-column{-ms-flex-direction:column!important;flex-direction:column!important}.flex-md-row-reverse{-ms-flex-direction:row-reverse!important;flex-direction:row-reverse!important}.flex-md-column-reverse{-ms-flex-direction:column-reverse!important;flex-direction:column-reverse!important}.flex-md-wrap{-ms-flex-wrap:wrap!important;flex-wrap:wrap!important}.flex-md-nowrap{-ms-flex-wrap:nowrap!important;flex-wrap:nowrap!important}.flex-md-wrap-reverse{-ms-flex-wrap:wrap-reverse!important;flex-wrap:wrap-reverse!important}.flex-md-fill{-ms-flex:1 1 auto!important;flex:1 1 auto!important}.flex-md-grow-0{-ms-flex-positive:0!important;flex-grow:0!important}.flex-md-grow-1{-ms-flex-positive:1!important;flex-grow:1!important}.flex-md-shrink-0{-ms-flex-negative:0!important;flex-shrink:0!important}.flex-md-shrink-1{-ms-flex-negative:1!important;flex-shrink:1!important}.justify-content-md-start{-ms-flex-pack:start!important;justify-content:flex-start!important}.justify-content-md-end{-ms-flex-pack:end!important;justify-content:flex-end!important}.justify-content-md-center{-ms-flex-pack:center!important;justify-content:center!important}.justify-content-md-between{-ms-flex-pack:justify!important;justify-content:space-between!important}.justify-content-md-around{-ms-flex-pack:distribute!important;justify-content:space-around!important}.align-items-md-start{-ms-flex-align:start!important;align-items:flex-start!important}.align-items-md-end{-ms-flex-align:end!important;align-items:flex-end!important}.align-items-md-center{-ms-flex-align:center!important;align-items:center!important}.align-items-md-baseline{-ms-flex-align:baseline!important;align-items:baseline!important}.align-items-md-stretch{-ms-flex-align:stretch!important;align-items:stretch!important}.align-content-md-start{-ms-flex-line-pack:start!important;align-content:flex-start!important}.align-content-md-end{-ms-flex-line-pack:end!important;align-content:flex-end!important}.align-content-md-center{-ms-flex-line-pack:center!important;align-content:center!important}.align-content-md-between{-ms-flex-line-pack:justify!important;align-content:space-between!important}.align-content-md-around{-ms-flex-line-pack:distribute!important;align-content:space-around!important}.align-content-md-stretch{-ms-flex-line-pack:stretch!important;align-content:stretch!important}.align-self-md-auto{-ms-flex-item-align:auto!important;align-self:auto!important}.align-self-md-start{-ms-flex-item-align:start!important;align-self:flex-start!important}.align-self-md-end{-ms-flex-item-align:end!important;align-self:flex-end!important}.align-self-md-center{-ms-flex-item-align:center!important;align-self:center!important}.align-self-md-baseline{-ms-flex-item-align:baseline!important;align-self:baseline!important}.align-self-md-stretch{-ms-flex-item-align:stretch!important;align-self:stretch!important}}@media (min-width:992px){.flex-lg-row{-ms-flex-direction:row!important;flex-direction:row!important}.flex-lg-column{-ms-flex-direction:column!important;flex-direction:column!important}.flex-lg-row-reverse{-ms-flex-direction:row-reverse!important;flex-direction:row-reverse!important}.flex-lg-column-reverse{-ms-flex-direction:column-reverse!important;flex-direction:column-reverse!important}.flex-lg-wrap{-ms-flex-wrap:wrap!important;flex-wrap:wrap!important}.flex-lg-nowrap{-ms-flex-wrap:nowrap!important;flex-wrap:nowrap!important}.flex-lg-wrap-reverse{-ms-flex-wrap:wrap-reverse!important;flex-wrap:wrap-reverse!important}.flex-lg-fill{-ms-flex:1 1 auto!important;flex:1 1 auto!important}.flex-lg-grow-0{-ms-flex-positive:0!important;flex-grow:0!important}.flex-lg-grow-1{-ms-flex-positive:1!important;flex-grow:1!important}.flex-lg-shrink-0{-ms-flex-negative:0!important;flex-shrink:0!important}.flex-lg-shrink-1{-ms-flex-negative:1!important;flex-shrink:1!important}.justify-content-lg-start{-ms-flex-pack:start!important;justify-content:flex-start!important}.justify-content-lg-end{-ms-flex-pack:end!important;justify-content:flex-end!important}.justify-content-lg-center{-ms-flex-pack:center!important;justify-content:center!important}.justify-content-lg-between{-ms-flex-pack:justify!important;justify-content:space-between!important}.justify-content-lg-around{-ms-flex-pack:distribute!important;justify-content:space-around!important}.align-items-lg-start{-ms-flex-align:start!important;align-items:flex-start!important}.align-items-lg-end{-ms-flex-align:end!important;align-items:flex-end!important}.align-items-lg-center{-ms-flex-align:center!important;align-items:center!important}.align-items-lg-baseline{-ms-flex-align:baseline!important;align-items:baseline!important}.align-items-lg-stretch{-ms-flex-align:stretch!important;align-items:stretch!important}.align-content-lg-start{-ms-flex-line-pack:start!important;align-content:flex-start!important}.align-content-lg-end{-ms-flex-line-pack:end!important;align-content:flex-end!important}.align-content-lg-center{-ms-flex-line-pack:center!important;align-content:center!important}.align-content-lg-between{-ms-flex-line-pack:justify!important;align-content:space-between!important}.align-content-lg-around{-ms-flex-line-pack:distribute!important;align-content:space-around!important}.align-content-lg-stretch{-ms-flex-line-pack:stretch!important;align-content:stretch!important}.align-self-lg-auto{-ms-flex-item-align:auto!important;align-self:auto!important}.align-self-lg-start{-ms-flex-item-align:start!important;align-self:flex-start!important}.align-self-lg-end{-ms-flex-item-align:end!important;align-self:flex-end!important}.align-self-lg-center{-ms-flex-item-align:center!important;align-self:center!important}.align-self-lg-baseline{-ms-flex-item-align:baseline!important;align-self:baseline!important}.align-self-lg-stretch{-ms-flex-item-align:stretch!important;align-self:stretch!important}}@media (min-width:1200px){.flex-xl-row{-ms-flex-direction:row!important;flex-direction:row!important}.flex-xl-column{-ms-flex-direction:column!important;flex-direction:column!important}.flex-xl-row-reverse{-ms-flex-direction:row-reverse!important;flex-direction:row-reverse!important}.flex-xl-column-reverse{-ms-flex-direction:column-reverse!important;flex-direction:column-reverse!important}.flex-xl-wrap{-ms-flex-wrap:wrap!important;flex-wrap:wrap!important}.flex-xl-nowrap{-ms-flex-wrap:nowrap!important;flex-wrap:nowrap!important}.flex-xl-wrap-reverse{-ms-flex-wrap:wrap-reverse!important;flex-wrap:wrap-reverse!important}.flex-xl-fill{-ms-flex:1 1 auto!important;flex:1 1 auto!important}.flex-xl-grow-0{-ms-flex-positive:0!important;flex-grow:0!important}.flex-xl-grow-1{-ms-flex-positive:1!important;flex-grow:1!important}.flex-xl-shrink-0{-ms-flex-negative:0!important;flex-shrink:0!important}.flex-xl-shrink-1{-ms-flex-negative:1!important;flex-shrink:1!important}.justify-content-xl-start{-ms-flex-pack:start!important;justify-content:flex-start!important}.justify-content-xl-end{-ms-flex-pack:end!important;justify-content:flex-end!important}.justify-content-xl-center{-ms-flex-pack:center!important;justify-content:center!important}.justify-content-xl-between{-ms-flex-pack:justify!important;justify-content:space-between!important}.justify-content-xl-around{-ms-flex-pack:distribute!important;justify-content:space-around!important}.align-items-xl-start{-ms-flex-align:start!important;align-items:flex-start!important}.align-items-xl-end{-ms-flex-align:end!important;align-items:flex-end!important}.align-items-xl-center{-ms-flex-align:center!important;align-items:center!important}.align-items-xl-baseline{-ms-flex-align:baseline!important;align-items:baseline!important}.align-items-xl-stretch{-ms-flex-align:stretch!important;align-items:stretch!important}.align-content-xl-start{-ms-flex-line-pack:start!important;align-content:flex-start!important}.align-content-xl-end{-ms-flex-line-pack:end!important;align-content:flex-end!important}.align-content-xl-center{-ms-flex-line-pack:center!important;align-content:center!important}.align-content-xl-between{-ms-flex-line-pack:justify!important;align-content:space-between!important}.align-content-xl-around{-ms-flex-line-pack:distribute!important;align-content:space-around!important}.align-content-xl-stretch{-ms-flex-line-pack:stretch!important;align-content:stretch!important}.align-self-xl-auto{-ms-flex-item-align:auto!important;align-self:auto!important}.align-self-xl-start{-ms-flex-item-align:start!important;align-self:flex-start!important}.align-self-xl-end{-ms-flex-item-align:end!important;align-self:flex-end!important}.align-self-xl-center{-ms-flex-item-align:center!important;align-self:center!important}.align-self-xl-baseline{-ms-flex-item-align:baseline!important;align-self:baseline!important}.align-self-xl-stretch{-ms-flex-item-align:stretch!important;align-self:stretch!important}}.m-0{margin:0!important}.mt-0,.my-0{margin-top:0!important}.mr-0,.mx-0{margin-right:0!important}.mb-0,.my-0{margin-bottom:0!important}.ml-0,.mx-0{margin-left:0!important}.m-1{margin:.25rem!important}.mt-1,.my-1{margin-top:.25rem!important}.mr-1,.mx-1{margin-right:.25rem!important}.mb-1,.my-1{margin-bottom:.25rem!important}.ml-1,.mx-1{margin-left:.25rem!important}.m-2{margin:.5rem!important}.mt-2,.my-2{margin-top:.5rem!important}.mr-2,.mx-2{margin-right:.5rem!important}.mb-2,.my-2{margin-bottom:.5rem!important}.ml-2,.mx-2{margin-left:.5rem!important}.m-3{margin:1rem!important}.mt-3,.my-3{margin-top:1rem!important}.mr-3,.mx-3{margin-right:1rem!important}.mb-3,.my-3{margin-bottom:1rem!important}.ml-3,.mx-3{margin-left:1rem!important}.m-4{margin:1.5rem!important}.mt-4,.my-4{margin-top:1.5rem!important}.mr-4,.mx-4{margin-right:1.5rem!important}.mb-4,.my-4{margin-bottom:1.5rem!important}.ml-4,.mx-4{margin-left:1.5rem!important}.m-5{margin:3rem!important}.mt-5,.my-5{margin-top:3rem!important}.mr-5,.mx-5{margin-right:3rem!important}.mb-5,.my-5{margin-bottom:3rem!important}.ml-5,.mx-5{margin-left:3rem!important}.p-0{padding:0!important}.pt-0,.py-0{padding-top:0!important}.pr-0,.px-0{padding-right:0!important}.pb-0,.py-0{padding-bottom:0!important}.pl-0,.px-0{padding-left:0!important}.p-1{padding:.25rem!important}.pt-1,.py-1{padding-top:.25rem!important}.pr-1,.px-1{padding-right:.25rem!important}.pb-1,.py-1{padding-bottom:.25rem!important}.pl-1,.px-1{padding-left:.25rem!important}.p-2{padding:.5rem!important}.pt-2,.py-2{padding-top:.5rem!important}.pr-2,.px-2{padding-right:.5rem!important}.pb-2,.py-2{padding-bottom:.5rem!important}.pl-2,.px-2{padding-left:.5rem!important}.p-3{padding:1rem!important}.pt-3,.py-3{padding-top:1rem!important}.pr-3,.px-3{padding-right:1rem!important}.pb-3,.py-3{padding-bottom:1rem!important}.pl-3,.px-3{padding-left:1rem!important}.p-4{padding:1.5rem!important}.pt-4,.py-4{padding-top:1.5rem!important}.pr-4,.px-4{padding-right:1.5rem!important}.pb-4,.py-4{padding-bottom:1.5rem!important}.pl-4,.px-4{padding-left:1.5rem!important}.p-5{padding:3rem!important}.pt-5,.py-5{padding-top:3rem!important}.pr-5,.px-5{padding-right:3rem!important}.pb-5,.py-5{padding-bottom:3rem!important}.pl-5,.px-5{padding-left:3rem!important}.m-n1{margin:-.25rem!important}.mt-n1,.my-n1{margin-top:-.25rem!important}.mr-n1,.mx-n1{margin-right:-.25rem!important}.mb-n1,.my-n1{margin-bottom:-.25rem!important}.ml-n1,.mx-n1{margin-left:-.25rem!important}.m-n2{margin:-.5rem!important}.mt-n2,.my-n2{margin-top:-.5rem!important}.mr-n2,.mx-n2{margin-right:-.5rem!important}.mb-n2,.my-n2{margin-bottom:-.5rem!important}.ml-n2,.mx-n2{margin-left:-.5rem!important}.m-n3{margin:-1rem!important}.mt-n3,.my-n3{margin-top:-1rem!important}.mr-n3,.mx-n3{margin-right:-1rem!important}.mb-n3,.my-n3{margin-bottom:-1rem!important}.ml-n3,.mx-n3{margin-left:-1rem!important}.m-n4{margin:-1.5rem!important}.mt-n4,.my-n4{margin-top:-1.5rem!important}.mr-n4,.mx-n4{margin-right:-1.5rem!important}.mb-n4,.my-n4{margin-bottom:-1.5rem!important}.ml-n4,.mx-n4{margin-left:-1.5rem!important}.m-n5{margin:-3rem!important}.mt-n5,.my-n5{margin-top:-3rem!important}.mr-n5,.mx-n5{margin-right:-3rem!important}.mb-n5,.my-n5{margin-bottom:-3rem!important}.ml-n5,.mx-n5{margin-left:-3rem!important}.m-auto{margin:auto!important}.mt-auto,.my-auto{margin-top:auto!important}.mr-auto,.mx-auto{margin-right:auto!important}.mb-auto,.my-auto{margin-bottom:auto!important}.ml-auto,.mx-auto{margin-left:auto!important}@media (min-width:576px){.m-sm-0{margin:0!important}.mt-sm-0,.my-sm-0{margin-top:0!important}.mr-sm-0,.mx-sm-0{margin-right:0!important}.mb-sm-0,.my-sm-0{margin-bottom:0!important}.ml-sm-0,.mx-sm-0{margin-left:0!important}.m-sm-1{margin:.25rem!important}.mt-sm-1,.my-sm-1{margin-top:.25rem!important}.mr-sm-1,.mx-sm-1{margin-right:.25rem!important}.mb-sm-1,.my-sm-1{margin-bottom:.25rem!important}.ml-sm-1,.mx-sm-1{margin-left:.25rem!important}.m-sm-2{margin:.5rem!important}.mt-sm-2,.my-sm-2{margin-top:.5rem!important}.mr-sm-2,.mx-sm-2{margin-right:.5rem!important}.mb-sm-2,.my-sm-2{margin-bottom:.5rem!important}.ml-sm-2,.mx-sm-2{margin-left:.5rem!important}.m-sm-3{margin:1rem!important}.mt-sm-3,.my-sm-3{margin-top:1rem!important}.mr-sm-3,.mx-sm-3{margin-right:1rem!important}.mb-sm-3,.my-sm-3{margin-bottom:1rem!important}.ml-sm-3,.mx-sm-3{margin-left:1rem!important}.m-sm-4{margin:1.5rem!important}.mt-sm-4,.my-sm-4{margin-top:1.5rem!important}.mr-sm-4,.mx-sm-4{margin-right:1.5rem!important}.mb-sm-4,.my-sm-4{margin-bottom:1.5rem!important}.ml-sm-4,.mx-sm-4{margin-left:1.5rem!important}.m-sm-5{margin:3rem!important}.mt-sm-5,.my-sm-5{margin-top:3rem!important}.mr-sm-5,.mx-sm-5{margin-right:3rem!important}.mb-sm-5,.my-sm-5{margin-bottom:3rem!important}.ml-sm-5,.mx-sm-5{margin-left:3rem!important}.p-sm-0{padding:0!important}.pt-sm-0,.py-sm-0{padding-top:0!important}.pr-sm-0,.px-sm-0{padding-right:0!important}.pb-sm-0,.py-sm-0{padding-bottom:0!important}.pl-sm-0,.px-sm-0{padding-left:0!important}.p-sm-1{padding:.25rem!important}.pt-sm-1,.py-sm-1{padding-top:.25rem!important}.pr-sm-1,.px-sm-1{padding-right:.25rem!important}.pb-sm-1,.py-sm-1{padding-bottom:.25rem!important}.pl-sm-1,.px-sm-1{padding-left:.25rem!important}.p-sm-2{padding:.5rem!important}.pt-sm-2,.py-sm-2{padding-top:.5rem!important}.pr-sm-2,.px-sm-2{padding-right:.5rem!important}.pb-sm-2,.py-sm-2{padding-bottom:.5rem!important}.pl-sm-2,.px-sm-2{padding-left:.5rem!important}.p-sm-3{padding:1rem!important}.pt-sm-3,.py-sm-3{padding-top:1rem!important}.pr-sm-3,.px-sm-3{padding-right:1rem!important}.pb-sm-3,.py-sm-3{padding-bottom:1rem!important}.pl-sm-3,.px-sm-3{padding-left:1rem!important}.p-sm-4{padding:1.5rem!important}.pt-sm-4,.py-sm-4{padding-top:1.5rem!important}.pr-sm-4,.px-sm-4{padding-right:1.5rem!important}.pb-sm-4,.py-sm-4{padding-bottom:1.5rem!important}.pl-sm-4,.px-sm-4{padding-left:1.5rem!important}.p-sm-5{padding:3rem!important}.pt-sm-5,.py-sm-5{padding-top:3rem!important}.pr-sm-5,.px-sm-5{padding-right:3rem!important}.pb-sm-5,.py-sm-5{padding-bottom:3rem!important}.pl-sm-5,.px-sm-5{padding-left:3rem!important}.m-sm-n1{margin:-.25rem!important}.mt-sm-n1,.my-sm-n1{margin-top:-.25rem!important}.mr-sm-n1,.mx-sm-n1{margin-right:-.25rem!important}.mb-sm-n1,.my-sm-n1{margin-bottom:-.25rem!important}.ml-sm-n1,.mx-sm-n1{margin-left:-.25rem!important}.m-sm-n2{margin:-.5rem!important}.mt-sm-n2,.my-sm-n2{margin-top:-.5rem!important}.mr-sm-n2,.mx-sm-n2{margin-right:-.5rem!important}.mb-sm-n2,.my-sm-n2{margin-bottom:-.5rem!important}.ml-sm-n2,.mx-sm-n2{margin-left:-.5rem!important}.m-sm-n3{margin:-1rem!important}.mt-sm-n3,.my-sm-n3{margin-top:-1rem!important}.mr-sm-n3,.mx-sm-n3{margin-right:-1rem!important}.mb-sm-n3,.my-sm-n3{margin-bottom:-1rem!important}.ml-sm-n3,.mx-sm-n3{margin-left:-1rem!important}.m-sm-n4{margin:-1.5rem!important}.mt-sm-n4,.my-sm-n4{margin-top:-1.5rem!important}.mr-sm-n4,.mx-sm-n4{margin-right:-1.5rem!important}.mb-sm-n4,.my-sm-n4{margin-bottom:-1.5rem!important}.ml-sm-n4,.mx-sm-n4{margin-left:-1.5rem!important}.m-sm-n5{margin:-3rem!important}.mt-sm-n5,.my-sm-n5{margin-top:-3rem!important}.mr-sm-n5,.mx-sm-n5{margin-right:-3rem!important}.mb-sm-n5,.my-sm-n5{margin-bottom:-3rem!important}.ml-sm-n5,.mx-sm-n5{margin-left:-3rem!important}.m-sm-auto{margin:auto!important}.mt-sm-auto,.my-sm-auto{margin-top:auto!important}.mr-sm-auto,.mx-sm-auto{margin-right:auto!important}.mb-sm-auto,.my-sm-auto{margin-bottom:auto!important}.ml-sm-auto,.mx-sm-auto{margin-left:auto!important}}@media (min-width:768px){.m-md-0{margin:0!important}.mt-md-0,.my-md-0{margin-top:0!important}.mr-md-0,.mx-md-0{margin-right:0!important}.mb-md-0,.my-md-0{margin-bottom:0!important}.ml-md-0,.mx-md-0{margin-left:0!important}.m-md-1{margin:.25rem!important}.mt-md-1,.my-md-1{margin-top:.25rem!important}.mr-md-1,.mx-md-1{margin-right:.25rem!important}.mb-md-1,.my-md-1{margin-bottom:.25rem!important}.ml-md-1,.mx-md-1{margin-left:.25rem!important}.m-md-2{margin:.5rem!important}.mt-md-2,.my-md-2{margin-top:.5rem!important}.mr-md-2,.mx-md-2{margin-right:.5rem!important}.mb-md-2,.my-md-2{margin-bottom:.5rem!important}.ml-md-2,.mx-md-2{margin-left:.5rem!important}.m-md-3{margin:1rem!important}.mt-md-3,.my-md-3{margin-top:1rem!important}.mr-md-3,.mx-md-3{margin-right:1rem!important}.mb-md-3,.my-md-3{margin-bottom:1rem!important}.ml-md-3,.mx-md-3{margin-left:1rem!important}.m-md-4{margin:1.5rem!important}.mt-md-4,.my-md-4{margin-top:1.5rem!important}.mr-md-4,.mx-md-4{margin-right:1.5rem!important}.mb-md-4,.my-md-4{margin-bottom:1.5rem!important}.ml-md-4,.mx-md-4{margin-left:1.5rem!important}.m-md-5{margin:3rem!important}.mt-md-5,.my-md-5{margin-top:3rem!important}.mr-md-5,.mx-md-5{margin-right:3rem!important}.mb-md-5,.my-md-5{margin-bottom:3rem!important}.ml-md-5,.mx-md-5{margin-left:3rem!important}.p-md-0{padding:0!important}.pt-md-0,.py-md-0{padding-top:0!important}.pr-md-0,.px-md-0{padding-right:0!important}.pb-md-0,.py-md-0{padding-bottom:0!important}.pl-md-0,.px-md-0{padding-left:0!important}.p-md-1{padding:.25rem!important}.pt-md-1,.py-md-1{padding-top:.25rem!important}.pr-md-1,.px-md-1{padding-right:.25rem!important}.pb-md-1,.py-md-1{padding-bottom:.25rem!important}.pl-md-1,.px-md-1{padding-left:.25rem!important}.p-md-2{padding:.5rem!important}.pt-md-2,.py-md-2{padding-top:.5rem!important}.pr-md-2,.px-md-2{padding-right:.5rem!important}.pb-md-2,.py-md-2{padding-bottom:.5rem!important}.pl-md-2,.px-md-2{padding-left:.5rem!important}.p-md-3{padding:1rem!important}.pt-md-3,.py-md-3{padding-top:1rem!important}.pr-md-3,.px-md-3{padding-right:1rem!important}.pb-md-3,.py-md-3{padding-bottom:1rem!important}.pl-md-3,.px-md-3{padding-left:1rem!important}.p-md-4{padding:1.5rem!important}.pt-md-4,.py-md-4{padding-top:1.5rem!important}.pr-md-4,.px-md-4{padding-right:1.5rem!important}.pb-md-4,.py-md-4{padding-bottom:1.5rem!important}.pl-md-4,.px-md-4{padding-left:1.5rem!important}.p-md-5{padding:3rem!important}.pt-md-5,.py-md-5{padding-top:3rem!important}.pr-md-5,.px-md-5{padding-right:3rem!important}.pb-md-5,.py-md-5{padding-bottom:3rem!important}.pl-md-5,.px-md-5{padding-left:3rem!important}.m-md-n1{margin:-.25rem!important}.mt-md-n1,.my-md-n1{margin-top:-.25rem!important}.mr-md-n1,.mx-md-n1{margin-right:-.25rem!important}.mb-md-n1,.my-md-n1{margin-bottom:-.25rem!important}.ml-md-n1,.mx-md-n1{margin-left:-.25rem!important}.m-md-n2{margin:-.5rem!important}.mt-md-n2,.my-md-n2{margin-top:-.5rem!important}.mr-md-n2,.mx-md-n2{margin-right:-.5rem!important}.mb-md-n2,.my-md-n2{margin-bottom:-.5rem!important}.ml-md-n2,.mx-md-n2{margin-left:-.5rem!important}.m-md-n3{margin:-1rem!important}.mt-md-n3,.my-md-n3{margin-top:-1rem!important}.mr-md-n3,.mx-md-n3{margin-right:-1rem!important}.mb-md-n3,.my-md-n3{margin-bottom:-1rem!important}.ml-md-n3,.mx-md-n3{margin-left:-1rem!important}.m-md-n4{margin:-1.5rem!important}.mt-md-n4,.my-md-n4{margin-top:-1.5rem!important}.mr-md-n4,.mx-md-n4{margin-right:-1.5rem!important}.mb-md-n4,.my-md-n4{margin-bottom:-1.5rem!important}.ml-md-n4,.mx-md-n4{margin-left:-1.5rem!important}.m-md-n5{margin:-3rem!important}.mt-md-n5,.my-md-n5{margin-top:-3rem!important}.mr-md-n5,.mx-md-n5{margin-right:-3rem!important}.mb-md-n5,.my-md-n5{margin-bottom:-3rem!important}.ml-md-n5,.mx-md-n5{margin-left:-3rem!important}.m-md-auto{margin:auto!important}.mt-md-auto,.my-md-auto{margin-top:auto!important}.mr-md-auto,.mx-md-auto{margin-right:auto!important}.mb-md-auto,.my-md-auto{margin-bottom:auto!important}.ml-md-auto,.mx-md-auto{margin-left:auto!important}}@media (min-width:992px){.m-lg-0{margin:0!important}.mt-lg-0,.my-lg-0{margin-top:0!important}.mr-lg-0,.mx-lg-0{margin-right:0!important}.mb-lg-0,.my-lg-0{margin-bottom:0!important}.ml-lg-0,.mx-lg-0{margin-left:0!important}.m-lg-1{margin:.25rem!important}.mt-lg-1,.my-lg-1{margin-top:.25rem!important}.mr-lg-1,.mx-lg-1{margin-right:.25rem!important}.mb-lg-1,.my-lg-1{margin-bottom:.25rem!important}.ml-lg-1,.mx-lg-1{margin-left:.25rem!important}.m-lg-2{margin:.5rem!important}.mt-lg-2,.my-lg-2{margin-top:.5rem!important}.mr-lg-2,.mx-lg-2{margin-right:.5rem!important}.mb-lg-2,.my-lg-2{margin-bottom:.5rem!important}.ml-lg-2,.mx-lg-2{margin-left:.5rem!important}.m-lg-3{margin:1rem!important}.mt-lg-3,.my-lg-3{margin-top:1rem!important}.mr-lg-3,.mx-lg-3{margin-right:1rem!important}.mb-lg-3,.my-lg-3{margin-bottom:1rem!important}.ml-lg-3,.mx-lg-3{margin-left:1rem!important}.m-lg-4{margin:1.5rem!important}.mt-lg-4,.my-lg-4{margin-top:1.5rem!important}.mr-lg-4,.mx-lg-4{margin-right:1.5rem!important}.mb-lg-4,.my-lg-4{margin-bottom:1.5rem!important}.ml-lg-4,.mx-lg-4{margin-left:1.5rem!important}.m-lg-5{margin:3rem!important}.mt-lg-5,.my-lg-5{margin-top:3rem!important}.mr-lg-5,.mx-lg-5{margin-right:3rem!important}.mb-lg-5,.my-lg-5{margin-bottom:3rem!important}.ml-lg-5,.mx-lg-5{margin-left:3rem!important}.p-lg-0{padding:0!important}.pt-lg-0,.py-lg-0{padding-top:0!important}.pr-lg-0,.px-lg-0{padding-right:0!important}.pb-lg-0,.py-lg-0{padding-bottom:0!important}.pl-lg-0,.px-lg-0{padding-left:0!important}.p-lg-1{padding:.25rem!important}.pt-lg-1,.py-lg-1{padding-top:.25rem!important}.pr-lg-1,.px-lg-1{padding-right:.25rem!important}.pb-lg-1,.py-lg-1{padding-bottom:.25rem!important}.pl-lg-1,.px-lg-1{padding-left:.25rem!important}.p-lg-2{padding:.5rem!important}.pt-lg-2,.py-lg-2{padding-top:.5rem!important}.pr-lg-2,.px-lg-2{padding-right:.5rem!important}.pb-lg-2,.py-lg-2{padding-bottom:.5rem!important}.pl-lg-2,.px-lg-2{padding-left:.5rem!important}.p-lg-3{padding:1rem!important}.pt-lg-3,.py-lg-3{padding-top:1rem!important}.pr-lg-3,.px-lg-3{padding-right:1rem!important}.pb-lg-3,.py-lg-3{padding-bottom:1rem!important}.pl-lg-3,.px-lg-3{padding-left:1rem!important}.p-lg-4{padding:1.5rem!important}.pt-lg-4,.py-lg-4{padding-top:1.5rem!important}.pr-lg-4,.px-lg-4{padding-right:1.5rem!important}.pb-lg-4,.py-lg-4{padding-bottom:1.5rem!important}.pl-lg-4,.px-lg-4{padding-left:1.5rem!important}.p-lg-5{padding:3rem!important}.pt-lg-5,.py-lg-5{padding-top:3rem!important}.pr-lg-5,.px-lg-5{padding-right:3rem!important}.pb-lg-5,.py-lg-5{padding-bottom:3rem!important}.pl-lg-5,.px-lg-5{padding-left:3rem!important}.m-lg-n1{margin:-.25rem!important}.mt-lg-n1,.my-lg-n1{margin-top:-.25rem!important}.mr-lg-n1,.mx-lg-n1{margin-right:-.25rem!important}.mb-lg-n1,.my-lg-n1{margin-bottom:-.25rem!important}.ml-lg-n1,.mx-lg-n1{margin-left:-.25rem!important}.m-lg-n2{margin:-.5rem!important}.mt-lg-n2,.my-lg-n2{margin-top:-.5rem!important}.mr-lg-n2,.mx-lg-n2{margin-right:-.5rem!important}.mb-lg-n2,.my-lg-n2{margin-bottom:-.5rem!important}.ml-lg-n2,.mx-lg-n2{margin-left:-.5rem!important}.m-lg-n3{margin:-1rem!important}.mt-lg-n3,.my-lg-n3{margin-top:-1rem!important}.mr-lg-n3,.mx-lg-n3{margin-right:-1rem!important}.mb-lg-n3,.my-lg-n3{margin-bottom:-1rem!important}.ml-lg-n3,.mx-lg-n3{margin-left:-1rem!important}.m-lg-n4{margin:-1.5rem!important}.mt-lg-n4,.my-lg-n4{margin-top:-1.5rem!important}.mr-lg-n4,.mx-lg-n4{margin-right:-1.5rem!important}.mb-lg-n4,.my-lg-n4{margin-bottom:-1.5rem!important}.ml-lg-n4,.mx-lg-n4{margin-left:-1.5rem!important}.m-lg-n5{margin:-3rem!important}.mt-lg-n5,.my-lg-n5{margin-top:-3rem!important}.mr-lg-n5,.mx-lg-n5{margin-right:-3rem!important}.mb-lg-n5,.my-lg-n5{margin-bottom:-3rem!important}.ml-lg-n5,.mx-lg-n5{margin-left:-3rem!important}.m-lg-auto{margin:auto!important}.mt-lg-auto,.my-lg-auto{margin-top:auto!important}.mr-lg-auto,.mx-lg-auto{margin-right:auto!important}.mb-lg-auto,.my-lg-auto{margin-bottom:auto!important}.ml-lg-auto,.mx-lg-auto{margin-left:auto!important}}@media (min-width:1200px){.m-xl-0{margin:0!important}.mt-xl-0,.my-xl-0{margin-top:0!important}.mr-xl-0,.mx-xl-0{margin-right:0!important}.mb-xl-0,.my-xl-0{margin-bottom:0!important}.ml-xl-0,.mx-xl-0{margin-left:0!important}.m-xl-1{margin:.25rem!important}.mt-xl-1,.my-xl-1{margin-top:.25rem!important}.mr-xl-1,.mx-xl-1{margin-right:.25rem!important}.mb-xl-1,.my-xl-1{margin-bottom:.25rem!important}.ml-xl-1,.mx-xl-1{margin-left:.25rem!important}.m-xl-2{margin:.5rem!important}.mt-xl-2,.my-xl-2{margin-top:.5rem!important}.mr-xl-2,.mx-xl-2{margin-right:.5rem!important}.mb-xl-2,.my-xl-2{margin-bottom:.5rem!important}.ml-xl-2,.mx-xl-2{margin-left:.5rem!important}.m-xl-3{margin:1rem!important}.mt-xl-3,.my-xl-3{margin-top:1rem!important}.mr-xl-3,.mx-xl-3{margin-right:1rem!important}.mb-xl-3,.my-xl-3{margin-bottom:1rem!important}.ml-xl-3,.mx-xl-3{margin-left:1rem!important}.m-xl-4{margin:1.5rem!important}.mt-xl-4,.my-xl-4{margin-top:1.5rem!important}.mr-xl-4,.mx-xl-4{margin-right:1.5rem!important}.mb-xl-4,.my-xl-4{margin-bottom:1.5rem!important}.ml-xl-4,.mx-xl-4{margin-left:1.5rem!important}.m-xl-5{margin:3rem!important}.mt-xl-5,.my-xl-5{margin-top:3rem!important}.mr-xl-5,.mx-xl-5{margin-right:3rem!important}.mb-xl-5,.my-xl-5{margin-bottom:3rem!important}.ml-xl-5,.mx-xl-5{margin-left:3rem!important}.p-xl-0{padding:0!important}.pt-xl-0,.py-xl-0{padding-top:0!important}.pr-xl-0,.px-xl-0{padding-right:0!important}.pb-xl-0,.py-xl-0{padding-bottom:0!important}.pl-xl-0,.px-xl-0{padding-left:0!important}.p-xl-1{padding:.25rem!important}.pt-xl-1,.py-xl-1{padding-top:.25rem!important}.pr-xl-1,.px-xl-1{padding-right:.25rem!important}.pb-xl-1,.py-xl-1{padding-bottom:.25rem!important}.pl-xl-1,.px-xl-1{padding-left:.25rem!important}.p-xl-2{padding:.5rem!important}.pt-xl-2,.py-xl-2{padding-top:.5rem!important}.pr-xl-2,.px-xl-2{padding-right:.5rem!important}.pb-xl-2,.py-xl-2{padding-bottom:.5rem!important}.pl-xl-2,.px-xl-2{padding-left:.5rem!important}.p-xl-3{padding:1rem!important}.pt-xl-3,.py-xl-3{padding-top:1rem!important}.pr-xl-3,.px-xl-3{padding-right:1rem!important}.pb-xl-3,.py-xl-3{padding-bottom:1rem!important}.pl-xl-3,.px-xl-3{padding-left:1rem!important}.p-xl-4{padding:1.5rem!important}.pt-xl-4,.py-xl-4{padding-top:1.5rem!important}.pr-xl-4,.px-xl-4{padding-right:1.5rem!important}.pb-xl-4,.py-xl-4{padding-bottom:1.5rem!important}.pl-xl-4,.px-xl-4{padding-left:1.5rem!important}.p-xl-5{padding:3rem!important}.pt-xl-5,.py-xl-5{padding-top:3rem!important}.pr-xl-5,.px-xl-5{padding-right:3rem!important}.pb-xl-5,.py-xl-5{padding-bottom:3rem!important}.pl-xl-5,.px-xl-5{padding-left:3rem!important}.m-xl-n1{margin:-.25rem!important}.mt-xl-n1,.my-xl-n1{margin-top:-.25rem!important}.mr-xl-n1,.mx-xl-n1{margin-right:-.25rem!important}.mb-xl-n1,.my-xl-n1{margin-bottom:-.25rem!important}.ml-xl-n1,.mx-xl-n1{margin-left:-.25rem!important}.m-xl-n2{margin:-.5rem!important}.mt-xl-n2,.my-xl-n2{margin-top:-.5rem!important}.mr-xl-n2,.mx-xl-n2{margin-right:-.5rem!important}.mb-xl-n2,.my-xl-n2{margin-bottom:-.5rem!important}.ml-xl-n2,.mx-xl-n2{margin-left:-.5rem!important}.m-xl-n3{margin:-1rem!important}.mt-xl-n3,.my-xl-n3{margin-top:-1rem!important}.mr-xl-n3,.mx-xl-n3{margin-right:-1rem!important}.mb-xl-n3,.my-xl-n3{margin-bottom:-1rem!important}.ml-xl-n3,.mx-xl-n3{margin-left:-1rem!important}.m-xl-n4{margin:-1.5rem!important}.mt-xl-n4,.my-xl-n4{margin-top:-1.5rem!important}.mr-xl-n4,.mx-xl-n4{margin-right:-1.5rem!important}.mb-xl-n4,.my-xl-n4{margin-bottom:-1.5rem!important}.ml-xl-n4,.mx-xl-n4{margin-left:-1.5rem!important}.m-xl-n5{margin:-3rem!important}.mt-xl-n5,.my-xl-n5{margin-top:-3rem!important}.mr-xl-n5,.mx-xl-n5{margin-right:-3rem!important}.mb-xl-n5,.my-xl-n5{margin-bottom:-3rem!important}.ml-xl-n5,.mx-xl-n5{margin-left:-3rem!important}.m-xl-auto{margin:auto!important}.mt-xl-auto,.my-xl-auto{margin-top:auto!important}.mr-xl-auto,.mx-xl-auto{margin-right:auto!important}.mb-xl-auto,.my-xl-auto{margin-bottom:auto!important}.ml-xl-auto,.mx-xl-auto{margin-left:auto!important}}";

const UniLayoutComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        const classes = { [`container${this.fluid ? '-fluid' : ''}`]: true };
        return UniHostTemplate({ classes }, h("slot", null));
    }
};
UniLayoutComponent.style = layoutCss;

const UniLayoutColComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        const classes = { 'col-sm': true };
        return UniHostTemplate({ classes }, h("slot", null));
    }
};

const UniLayoutRowComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        const classes = { 'row': true };
        return UniHostTemplate({ classes }, h("slot", null));
    }
};

const linkCss = "uni-link a{text-decoration:none;color:inherit}";

const UniLinkComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.open = false;
    }
    componentDidLoad() {
        if (this.open) {
            this.el.addEventListener('click', ($event) => {
                window.location.pathname = $event.target['pathname'] || getPathLink($event.path);
            });
        }
    }
    get el() { return getElement(this); }
};
function getPathLink(elements) {
    let pathname = '';
    [].some.call(elements, (element) => {
        pathname = element.pathname || '';
        return !!element.pathname;
    });
    return pathname;
}
UniLinkComponent.style = linkCss;

const UniRadioTemplate = ({ props }, children) => {
    return (h(Host, { class: "uni-radio-selection" },
        h("uni-radio-mat", Object.assign({}, props)),
        children));
};

const radioCss = ".uni-radio-selection .mdc-radio{position:absolute;z-index:999}";

const UniRadioComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        const { checked } = this;
        const props = { checked };
        return UniRadioTemplate({ props }, h("slot", null), null);
    }
    get el() { return getElement(this); }
};
UniRadioComponent.style = radioCss;

const rippleCss = ".mdc-ripple-surface.uni-color-primary::before,.mdc-ripple-surface.uni-color-primary::after{background-color:#3f51b5;background-color:var(--uni-color-primary, #3f51b5)}.mdc-ripple-surface.uni-color-secondary::before,.mdc-ripple-surface.uni-color-secondary::after{background-color:#018786;background-color:var(--uni-color-secondary, #018786)}.mdc-ripple-surface.uni-color-accent::before,.mdc-ripple-surface.uni-color-accent::after{background-color:#ff4081;background-color:var(--uni-color-accent, #ff4081)}.mdc-ripple-surface.uni-color-warn::before,.mdc-ripple-surface.uni-color-warn::after{background-color:#f44336;background-color:var(--uni-color-warn, #f44336)}";

const UniRippleComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.unbounded = false;
    }
    render() {
        const { unbounded, color } = this;
        const props = { unbounded, color };
        const classes = uniColorClass(this.color);
        return UniTemplate(h("uni-ripple-mat", Object.assign({}, props, { class: classes }), h("slot", null)));
    }
};
UniRippleComponent.style = rippleCss;

const UniSelectionTemplate = ({ props, classes }, children) => {
    return (h(Host, null,
        h("input", Object.assign({ class: "uni-selection-input", type: "radio", name: "radios" }, props)),
        h("label", { htmlFor: props.id, class: classes }, children)));
};

const UniSelectionMatClasses = {
    background: 'uni-selection-background',
    outlined: 'uni-selection-outlined'
};
function uniSelectionMatClass(outlined) {
    return {
        [UniSelectionMatClasses.background]: !outlined,
        [UniSelectionMatClasses.outlined]: outlined
    };
}

const selectionCss = ".uni-selection-input{display:none}.uni-selection-input+label{display:inline-flex;padding:10px;border-radius:5px}.uni-selection-input:checked+.uni-selection-background{background-color:#EEE}.uni-selection-input:checked+.uni-selection-outlined{border:1px dashed darkblue}";

const UniSelectionComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        const { checked } = this;
        const props = { id: this.dataId, checked };
        const classes = uniSelectionMatClass(this.outlined);
        return UniSelectionTemplate({ props, classes }, h("slot", null), null);
    }
    get el() { return getElement(this); }
};
UniSelectionComponent.style = selectionCss;

const UniTabGroupComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    tabActivatedHandler($event) {
        const index = $event['detail'] && $event['detail'].index + 1;
        if (this.el.children) {
            if (this.previousIndex >= 0) {
                this.el.children[this.previousIndex]['hidden'] = true;
            }
            if (this.el.children[index]) {
                this.el.children[index]['hidden'] = false;
                this.previousIndex = index;
            }
        }
    }
    connectedCallback() {
        [].forEach.call(this.el.children, (child, index) => {
            if (index > 0) {
                child.hidden = true;
            }
        });
    }
    get el() { return getElement(this); }
};

function uniTabEmitEvent(tab, el, active, uniTabActivated) {
    if (active) {
        tab.activate();
        const index = getElementIndex(el, el.parentElement.children);
        if (index >= 0) {
            uniTabActivated.emit({ index });
        }
    }
}
function uniTabBarEmitEvent(tabBar, uniTabActivated) {
    tabBar.listen('MDCTabBar:activated', event => {
        uniTabActivated.emit(event['detail']);
    });
}

const UniTabComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.uniTabActivated = createEvent(this, "uniTabActivated", 7);
    }
    tabInitialized($event) {
        uniTabEmitEvent($event.detail, this.el, this.active, this.uniTabActivated);
    }
    render() {
        return UniTemplate(h("uni-tab-mat", null, h("slot", null)));
    }
    get el() { return getElement(this); }
};

const UniTabBarComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.uniTabActivated = createEvent(this, "uniTabActivated", 7);
    }
    tabInitialized($event) {
        uniTabBarEmitEvent($event.detail, this.uniTabActivated);
    }
    render() {
        return UniTemplate(h("uni-tab-bar-mat", null, h("slot", null)));
    }
    get el() { return getElement(this); }
};
