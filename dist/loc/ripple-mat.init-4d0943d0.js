import { u as uniWatermark } from './index-8cd97cf2.js';
import { M as MDCRipple } from './index-5d610ddc.js';

function uniMatWatermark(el, exclusions) {
    el['package'] = 'mat';
    uniWatermark('mat', exclusions);
}

function uniRippleMatInit(el, unbounded = false) {
    const ripple = new MDCRipple(el);
    ripple.unbounded = unbounded;
    return ripple;
}

export { uniMatWatermark as a, uniRippleMatInit as u };
