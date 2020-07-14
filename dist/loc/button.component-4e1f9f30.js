import { r as registerInstance, h, g as getElement } from './index-c63dd5fd.js';
import { uniWatermark, UniColorClasses, UniTemplate } from '@uni/common';

function uniProWatermark(el, exclusions) {
    el['package'] = 'pro';
    uniWatermark('pro', exclusions);
}

function uniButtonColorClass(color) {
    return {
        [UniColorClasses[color]]: !!UniColorClasses[color]
    };
}
function uniButtonClass(color) {
    return Object.assign(Object.assign({}, uniButtonColorClass(color)), { 'uni-button': true });
}

const buttonCss = ".uni-button .mdc-button{font-family:Roboto, \"Helvetica Neue\", sans-serif;text-transform:none}.uni-button .mdc-button:not(:disabled){color:#000;color:var(--uni-color-default, #000)}.uni-button .mdc-button .mdc-button__ripple::before,.uni-button .mdc-button .mdc-button__ripple::after{background-color:#000;background-color:var(--uni-color-default, #000)}@supports not (-ms-ime-align: auto){.uni-button .mdc-button::before,.uni-button .mdc-button::after{background-color:#000;background-color:var(--uni-color-default, #000)}}@supports not (-ms-ime-align: auto){.uni-button .mdc-button--raised:not(:disabled),.uni-button .mdc-button--unelevated:not(:disabled){background-color:#fff;background-color:var(--uni-color-default-on, #fff)}}.uni-color-primary .mdc-button:not(:disabled){color:#3f51b5;color:var(--uni-color-primary, #3f51b5)}.uni-color-secondary .mdc-button:not(:disabled){color:#018786;color:var(--uni-color-secondary, #018786)}.uni-color-accent .mdc-button:not(:disabled){color:#ff4081;color:var(--uni-color-accent, #ff4081)}.uni-color-warn .mdc-button:not(:disabled){color:#f44336;color:var(--uni-color-warn, #f44336)}.uni-color-primary .mdc-button--raised:not(:disabled),.uni-color-primary .mdc-button--unelevated:not(:disabled){background-color:#3f51b5;background-color:var(--uni-color-primary, #3f51b5)}.uni-color-secondary .mdc-button--raised:not(:disabled),.uni-color-secondary .mdc-button--unelevated:not(:disabled){background-color:#018786;background-color:var(--uni-color-secondary, #018786)}.uni-color-accent .mdc-button--raised:not(:disabled),.uni-color-accent .mdc-button--unelevated:not(:disabled){background-color:#ff4081;background-color:var(--uni-color-accent, #ff4081)}.uni-color-warn .mdc-button--raised:not(:disabled),.uni-color-warn .mdc-button--unelevated:not(:disabled){background-color:#f44336;background-color:var(--uni-color-warn, #f44336)}@supports not (-ms-ime-align: auto){.uni-color-primary .mdc-button--raised:not(:disabled),.uni-color-primary .mdc-button--unelevated:not(:disabled){background-color:var(--uni-color-primary, #3f51b5)}}@supports not (-ms-ime-align: auto){.uni-color-secondary .mdc-button--raised:not(:disabled),.uni-color-secondary .mdc-button--unelevated:not(:disabled){background-color:var(--uni-color-secondary, #018786)}}@supports not (-ms-ime-align: auto){.uni-color-accent .mdc-button--raised:not(:disabled),.uni-color-accent .mdc-button--unelevated:not(:disabled){background-color:var(--uni-color-accent, #ff4081)}}@supports not (-ms-ime-align: auto){.uni-color-warn .mdc-button--raised:not(:disabled),.uni-color-warn .mdc-button--unelevated:not(:disabled){background-color:var(--uni-color-warn, #f44336)}}.uni-color-primary .mdc-button--raised:not(:disabled),.uni-color-primary .mdc-button--unelevated:not(:disabled){color:#fff;color:var(--uni-color-primary-on, #fff)}.uni-color-secondary .mdc-button--raised:not(:disabled),.uni-color-secondary .mdc-button--unelevated:not(:disabled){color:#fff;color:var(--uni-color-secondary-on, #fff)}.uni-color-accent .mdc-button--raised:not(:disabled),.uni-color-accent .mdc-button--unelevated:not(:disabled){color:#fff;color:var(--uni-color-accent-on, #fff)}.uni-color-warn .mdc-button--raised:not(:disabled),.uni-color-warn .mdc-button--unelevated:not(:disabled){color:#fff;color:var(--uni-color-warn-on, #fff)}.uni-color-primary .mdc-button .mdc-button__ripple::before,.uni-color-primary .mdc-button .mdc-button__ripple::after{background-color:#3f51b5;background-color:var(--uni-color-primary, #3f51b5)}.uni-color-secondary .mdc-button .mdc-button__ripple::before,.uni-color-secondary .mdc-button .mdc-button__ripple::after{background-color:#018786;background-color:var(--uni-color-secondary, #018786)}.uni-color-accent .mdc-button .mdc-button__ripple::before,.uni-color-accent .mdc-button .mdc-button__ripple::after{background-color:#ff4081;background-color:var(--uni-color-accent, #ff4081)}.uni-color-warn .mdc-button .mdc-button__ripple::before,.uni-color-warn .mdc-button .mdc-button__ripple::after{background-color:#f44336;background-color:var(--uni-color-warn, #f44336)}.uni-color-primary .mdc-button--raised .mdc-button__ripple::before,.uni-color-primary .mdc-button--raised .mdc-button__ripple::after,.uni-color-primary .mdc-button--unelevated .mdc-button__ripple::before,.uni-color-primary .mdc-button--unelevated .mdc-button__ripple::after{background-color:#fff;background-color:var(--uni-color-primary-on, #fff)}.uni-color-secondary .mdc-button--raised .mdc-button__ripple::before,.uni-color-secondary .mdc-button--raised .mdc-button__ripple::after,.uni-color-secondary .mdc-button--unelevated .mdc-button__ripple::before,.uni-color-secondary .mdc-button--unelevated .mdc-button__ripple::after{background-color:#fff;background-color:var(--uni-color-secondary-on, #fff)}.uni-color-accent .mdc-button--raised .mdc-button__ripple::before,.uni-color-accent .mdc-button--raised .mdc-button__ripple::after,.uni-color-accent .mdc-button--unelevated .mdc-button__ripple::before,.uni-color-accent .mdc-button--unelevated .mdc-button__ripple::after{background-color:#fff;background-color:var(--uni-color-accent-on, #fff)}.uni-color-warn .mdc-button--raised .mdc-button__ripple::before,.uni-color-warn .mdc-button--raised .mdc-button__ripple::after,.uni-color-warn .mdc-button--unelevated .mdc-button__ripple::before,.uni-color-warn .mdc-button--unelevated .mdc-button__ripple::after{background-color:#fff;background-color:var(--uni-color-warn-on, #fff)}";

const UniButtonComponent = class {
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
    connectedCallback() {
        const { el } = this;
        uniProWatermark(el, { strict: { el, packages: ['loc'] } });
    }
    render() {
        const { type, disabled, kind, noRipple } = this;
        const props = { type, disabled, noRipple, kind };
        const classes = uniButtonClass(this.color);
        return UniTemplate(h("uni-button-mat", Object.assign({}, props, { class: classes }), h("slot", null)));
    }
    get el() { return getElement(this); }
};
UniButtonComponent.style = buttonCss;

export { UniButtonComponent as U, uniButtonClass as u };
