import { r as registerInstance, g as getElement } from './index-c63dd5fd.js';
import { i as isDefined } from './index-8cd97cf2.js';
import { u as uniAdkWatermark } from './watermark-665d7c49.js';

function setNodesHidden(nodes, isHidden) {
    nodes.forEach((node) => {
        node.hidden = isHidden;
    });
}
function uniCheckNodes(nodes, state, start, end) {
    nodes.forEach((node) => {
        if (node.hasChildNodes()) {
            if (node.nodeType === 1) {
                checkAttributesNodes(node, state, start, end);
            }
            uniCheckNodes(node.childNodes, state, start, end);
        }
        else {
            switch (node.nodeType) {
                case 1:
                    checkAttributesNodes(node, state, start, end);
                    break;
                case 3:
                    checkTextNodes(node, state, start, end);
                    break;
            }
        }
    });
}
function checkAttributesNodes(node, state, start, end) {
    const attributes = node.attributes;
    if (attributes && attributes.length > 0) {
        for (let i = 0; i < attributes.length; ++i) {
            if (!isDefined(node.originalAttributes)) {
                node.originalAttributes = new Map();
            }
            const attrName = attributes[i].name;
            const originalValue = node.originalAttributes.get(attrName) || attributes[i].value;
            if (originalValue.trim() !== '') {
                node.originalAttributes.set(attrName, originalValue);
                attributes[i].value = getTranslation(state, originalValue, start, end);
            }
        }
    }
}
function checkTextNodes(node, state, start, end) {
    const content = getNodeContent(node);
    const trimmedContent = content.trim();
    let originalText;
    if (trimmedContent.length) {
        // we want to use the content as a key, not the translation value
        if (trimmedContent !== node.currentValue) {
            originalText = trimmedContent;
            // the content was changed from the user, we'll use it as a reference if needed
            node.originalContent = getNodeContent(node);
        }
        else if (node.originalContent) { // the content seems ok, but the lang has changed
            node.lastKey = null;
            // the current content is the translation, not the key, use the last real content as key
            originalText = node.originalContent.trim();
        }
    }
    if (originalText) {
        updateNodeText(node, state, originalText, start, end);
    }
}
function updateNodeText(node, state, originalText, start, end) {
    if (node.lastKey !== originalText) {
        const translation = getTranslation(state, originalText, start, end);
        if (translation !== originalText) {
            node.lastKey = originalText;
        }
        if (!node.originalContent) {
            node.originalContent = getNodeContent(node);
        }
        node.currentValue = isDefined(translation) ? translation : (node.originalContent || originalText);
        // we replace in the original content to preserve spaces that we might have trimmed
        setNodeContent(node, node.originalContent.replace(originalText, node.currentValue));
    }
}
function getNodeContent(node) {
    return node.textContent || node.data;
}
function setNodeContent(node, content) {
    if (isDefined(node.textContent)) {
        node.textContent = content;
    }
    else {
        node.data = content;
    }
}
function getTranslation(state, originalText, start, end) {
    return getBindingsOrText(state, translate(state, originalText) || originalText, start, end);
}
function translate(state, text) {
    var _a;
    return state && ((_a = state[text.trim()]) === null || _a === void 0 ? void 0 : _a.toString());
}
function getBindingsOrText(state, text, start, end) {
    return text.includes(start) && text.includes(end) ? getBindingsTranslation(state, text, start, end) : text;
}
function getBindingsTranslation(state, text, start, end) {
    getMatchedBindings(text, start, end, [])
        .forEach((item) => {
        const str = start + item + end;
        const txt = getBindingsOrText(state, translate(state, item) || item, start, end);
        text = text.replace(str, txt !== item ? txt : str);
    });
    return text;
}
function getMatchedBindings(text, start, end, matched) {
    const match = text.match(/([{]{2}(?!.+[{]{2}.+)(.+)[}]{2})/g);
    if (match && match.length) {
        matched.push(match[0].replace(start, '').replace(end, ''));
        getMatchedBindings(text.replace(match[0], ''), start, end, matched);
    }
    return matched;
}

const UniReplaceTextComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.start = '{{ ';
        this.end = ' }}';
    }
    handleState(newValue, oldValue) {
        if (JSON.stringify(newValue) !== JSON.stringify(oldValue)) {
            uniCheckNodes(this.el.childNodes, newValue, this.start, this.end);
            setNodesHidden(this.el.childNodes, false);
        }
    }
    connectedCallback() {
        const { el } = this;
        uniAdkWatermark(el, { strict: { el, packages: ['loc'] } });
    }
    componentDidLoad() {
        if (this.state) {
            uniCheckNodes(this.el.childNodes, this.state, this.start, this.end);
            setNodesHidden(this.el.childNodes, false);
        }
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "state": ["handleState"]
    }; }
};

export { UniReplaceTextComponent as U };
