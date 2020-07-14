import { r as registerInstance, g as getElement } from './index-c63dd5fd.js';
import { c as isObject, i as isDefined, g as getStringValue, d as isJSON } from './index-8cd97cf2.js';
import { u as uniAdkWatermark } from './watermark-665d7c49.js';

const uniStore = {
    get: ({ type, feature, separator, state }) => {
        switch (type) {
            case 'memory':
                return uniGetNestedValue(feature + separator + state);
            case 'local':
                const localVal = JSON.parse(localStorage.getItem(feature));
                return state ? uniGetNestedValue(state, localVal, separator) : localVal;
            case 'session':
                const sessionVal = JSON.parse(sessionStorage.getItem(feature));
                return state ? uniGetNestedValue(state, sessionVal, separator) : sessionVal;
            default:
                return uniGetNestedValue(feature + separator + state);
        }
    },
    set: (data, value, isInit, isClean) => {
        const valueObj = data.state ? setObjectValueByPath(data.state.split(data.separator), value) : value;
        switch (data.type) {
            case 'memory':
                test(data, valueObj, isInit, isClean, value);
                break;
            case 'local':
                const localVal = JSON.parse(localStorage.getItem(data.feature)) || {};
                localStorage.setItem(data.feature, JSON.stringify(isInit
                    ? uniPatchDeep(localVal, valueObj)
                    : uniMergeDeep(localVal, valueObj, isClean, value)));
                break;
            case 'session':
                let sessionVal = JSON.parse(sessionStorage.getItem(data.feature)) || {};
                sessionStorage.setItem(data.feature, JSON.stringify(isInit
                    ? uniPatchDeep(sessionVal, valueObj)
                    : uniMergeDeep(sessionVal, valueObj, isClean, value)));
                break;
            default:
                test(data, valueObj, isInit, isClean, value);
                break;
        }
    }
};
function test(data, valueObj, isInit, isClean, value) {
    // const featurePaths = data.feature.split(data.separator);
    mutateObjectByPath(data.feature.split(data.separator), window);
    const storeVal = getObjectValueByPath(data.feature.split(data.separator), window);
    mutateObjectByPath(data.feature.split(data.separator), window, isInit
        ? uniPatchDeep(storeVal, valueObj)
        : uniMergeDeep(storeVal, valueObj, isClean, value));
}
function mutateObjectByPath(keys, obj, value) {
    const key = keys.shift();
    obj[key] = obj[key] || {};
    if (keys.length > 0) {
        mutateObjectByPath(keys, obj[key], value);
    }
    else {
        obj[key] = value || obj[key];
    }
}
function getObjectValueByPath(keys, value) {
    const key = keys.shift();
    return keys.length > 0 ? getObjectValueByPath(keys, value[key]) : value[key];
}
function setObjectValueByPath(keys, value) {
    const key = keys.shift();
    return keys.length > 0 ? { [key]: setObjectValueByPath(keys, value) } : { [key]: value };
}
function uniPatchDeep(target, source) {
    const output = Object.assign({}, target);
    Object.keys(source).forEach((key) => {
        output[key] = (key in target)
            ? isObject(target[key]) && isObject(source[key])
                ? uniPatchDeep(target[key], source[key])
                : target[key]
            : source[key];
    });
    return output;
}
function uniMergeDeep(target, source, clean, value) {
    const output = Object.assign({}, target);
    Object.keys(source).forEach((key) => {
        output[key] = (key in target) && isObject(source[key]) && !(clean && source[key] === value)
            ? uniMergeDeep(target[key], source[key], clean, value)
            : source[key];
    });
    return output;
}
function uniGetNestedValue(path, obj = window, separator = '.') {
    const keys = Array.isArray(path) ? path : path.split(separator);
    return keys.reduce((acc, key) => acc && acc[key], obj);
}
function uniGetTargetElements(el, target, all) {
    return target
        ? all
            ? el.querySelectorAll(target)
            : [el.querySelector(target)]
        : null;
}
function uniEmitNestedEvents(path, data, val) {
    for (let [key, value] of Object.entries(val)) {
        const nestedPath = path + data.separator + key;
        if (isObject(value)) {
            uniEmitNestedEvents(nestedPath, data, value);
        }
        document.body.dispatchEvent(new CustomEvent(nestedPath, { detail: Object.assign(Object.assign({}, data), { value }) }));
    }
}
const UniStoreActions = {
    toggle: (eventData) => {
        const { feature, separator, state, type } = eventData;
        return !uniStore.get({ type, feature, separator, state });
    },
    getLink: (eventData) => {
        return eventData.$event.target['pathname'] || getPathLink(eventData.$event.path);
    }
};
function getPathLink(elements) {
    let pathname = '';
    [].some.call(elements, (element) => {
        pathname = element.pathname || '';
        return !!element.pathname;
    });
    return pathname;
}
function uniStoreSetElementProp({ type, feature, separator, state, equal, noEqual, value, prop, elements, el, $event }) {
    if (prop) {
        const storeVal = uniStore.get({ type, feature, separator, state });
        const isEqual = (isDefined(equal) && storeVal === getStringValue(equal))
            || (isDefined(noEqual) && storeVal !== getStringValue(noEqual));
        const val = isDefined(value)
            ? isDefined(equal) || isDefined(noEqual)
                ? isEqual
                    ? uniParseValue(value)
                    : undefined
                : uniParseValue(value)
            : isDefined(equal) || isDefined(noEqual)
                ? isEqual
                : storeVal;
        const debug = JSON.parse(localStorage.getItem('uniStoreDebug'));
        if (debug && debug[type] && debug[type].includes('listen')) {
            console.log('%cSTORE LISTEN:', 'color: darkorange; font-weight: bold', {
                type,
                feature,
                state,
                prop,
                val,
                element: el,
                $event
            });
        }
        uniAddProp(elements, prop, val);
    }
}
function uniParseValue(value) {
    return isJSON(value) ? JSON.parse(value) : value;
}
function uniAddProp(elements, prop, value) {
    [].forEach.call(elements, (element) => {
        element[prop] = value;
    });
}
function uniGetStorePath(data) {
    return data.feature + (data.state ? data.separator + data.state : '');
}
function uniHandleStore(path, data, value, isInit, isClean) {
    uniStore.set(data, value, isInit, isClean);
    const debug = JSON.parse(localStorage.getItem('uniStoreDebug'));
    if (debug && debug[data.type] && debug[data.type].includes('set')) {
        uniStoreLog(data);
    }
    document.body.dispatchEvent(new CustomEvent(path, { detail: Object.assign(Object.assign({}, data), { value }) }));
    if (isObject(value)) {
        uniEmitNestedEvents(path, data, value);
    }
}
function uniStoreLog(data, $event) {
    const value = uniStore.get(data);
    console.log('%cSTORE SET:', 'color: darkred; font-weight: bold', Object.assign(Object.assign({}, data), { value, $event }));
}

const UniStoreComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.active = false;
        this.type = 'memory';
        this.feature = 'uni.store';
        this.separator = '.';
        this.state = '';
        this.init = false;
        this.clean = false;
        this.all = false;
    }
    get data() {
        const { type, feature, separator, state } = this;
        return { type, feature, separator, state };
    }
    get props() {
        const { el, active, value, event, equal, noEqual, action, target, prop, init, clean, all } = this;
        return { el, active, value, event, equal, noEqual, action, target, prop, init, clean, all };
    }
    get elements() {
        return uniGetTargetElements(this.el, this.target, this.all);
    }
    get propData() {
        const { data, elements, equal, noEqual, value, prop, el } = this;
        return Object.assign(Object.assign({}, data), { elements, equal, noEqual, value, prop, el });
    }
    activeHandler() {
        uniStoreHandler(this.data, this.props, this.propData);
    }
    valueHandler() {
        uniStoreHandler(this.data, this.props, this.propData);
    }
    connectedCallback() {
        const { el } = this;
        uniAdkWatermark(el, { strict: { el, packages: ['loc'] } });
    }
    componentDidLoad() {
        uniStoreHandler(this.data, this.props, this.propData);
    }
    disconnectedCallback() {
        if (this.active) {
            if (this.prop) {
                // document.body.removeEventListener(uniGetStorePath(this.data), this.test);
            }
        }
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "active": ["activeHandler"],
        "value": ["valueHandler"]
    }; }
};
function uniStoreHandler(data, props, propData) {
    if (props.active) {
        if (props.prop) {
            uniStoreSetElementProp(propData);
            document.body.addEventListener(uniGetStorePath(data), {
                handleEvent($event) {
                    uniStoreSetElementProp(Object.assign(Object.assign({}, propData), { $event }));
                }
            });
        }
        else if (props.event) {
            props.el.addEventListener(props.event, ($event) => {
                const eventData = Object.assign(Object.assign({}, data), { $event, value: getStringValue(props.value || $event.detail) });
                const value = props.action ? UniStoreActions[props.action](eventData) : eventData.value;
                uniHandleStore(uniGetStorePath(data), data, value, props.init, props.clean);
            });
        }
        else if (props.value) {
            const value = getStringValue(props.value);
            uniHandleStore(uniGetStorePath(data), data, value, props.init, props.clean);
        }
    }
}

export { UniStoreComponent as U, uniAddProp as u };
