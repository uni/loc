import { r as registerInstance, h } from './index-c63dd5fd.js';
import { U as UniHostTemplate } from './index-8cd97cf2.js';

function uniIconMatClass() {
    return {
        'material-icons': true
    };
}

const iconMatCss = ".material-icons{font-family:\"Material Icons\";font-weight:normal;font-style:normal;font-size:24px;font-size:var(--uni-icon-mat-size, 24px);display:inline-block;line-height:1;text-transform:none;letter-spacing:normal;word-wrap:normal;white-space:nowrap;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:\"liga\"}";

const UniIconMatComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        const classes = uniIconMatClass();
        return UniHostTemplate({ classes }, h("slot", null));
    }
};
UniIconMatComponent.style = iconMatCss;

export { UniIconMatComponent as U, uniIconMatClass as u };
