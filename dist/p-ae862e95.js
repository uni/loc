import{_ as t,a as i,M as n,b as e}from"./p-d601016f.js";import{m as s,c as r}from"./p-506dd586.js";var u,h,o={LIST_ITEM_ACTIVATED_CLASS:"mdc-list-item--activated",LIST_ITEM_CLASS:"mdc-list-item",LIST_ITEM_DISABLED_CLASS:"mdc-list-item--disabled",LIST_ITEM_SELECTED_CLASS:"mdc-list-item--selected",LIST_ITEM_TEXT_CLASS:"mdc-list-item__text",LIST_ITEM_PRIMARY_TEXT_CLASS:"mdc-list-item__primary-text",ROOT:"mdc-list"},c=((u={})[""+o.LIST_ITEM_ACTIVATED_CLASS]="mdc-list-item--activated",u[""+o.LIST_ITEM_CLASS]="mdc-list-item",u[""+o.LIST_ITEM_DISABLED_CLASS]="mdc-list-item--disabled",u[""+o.LIST_ITEM_SELECTED_CLASS]="mdc-list-item--selected",u[""+o.LIST_ITEM_PRIMARY_TEXT_CLASS]="mdc-list-item__primary-text",u[""+o.ROOT]="mdc-list",u),a=((h={})[""+o.LIST_ITEM_ACTIVATED_CLASS]="mdc-deprecated-list-item--activated",h[""+o.LIST_ITEM_CLASS]="mdc-deprecated-list-item",h[""+o.LIST_ITEM_DISABLED_CLASS]="mdc-deprecated-list-item--disabled",h[""+o.LIST_ITEM_SELECTED_CLASS]="mdc-deprecated-list-item--selected",h[""+o.LIST_ITEM_TEXT_CLASS]="mdc-deprecated-list-item__text",h[""+o.LIST_ITEM_PRIMARY_TEXT_CLASS]="mdc-deprecated-list-item__primary-text",h[""+o.ROOT]="mdc-deprecated-list",h),f={ACTION_EVENT:"MDCList:action",ARIA_CHECKED:"aria-checked",ARIA_CHECKED_CHECKBOX_SELECTOR:'[role="checkbox"][aria-checked="true"]',ARIA_CHECKED_RADIO_SELECTOR:'[role="radio"][aria-checked="true"]',ARIA_CURRENT:"aria-current",ARIA_DISABLED:"aria-disabled",ARIA_ORIENTATION:"aria-orientation",ARIA_ORIENTATION_HORIZONTAL:"horizontal",ARIA_ROLE_CHECKBOX_SELECTOR:'[role="checkbox"]',ARIA_SELECTED:"aria-selected",ARIA_INTERACTIVE_ROLES_SELECTOR:'[role="listbox"], [role="menu"]',ARIA_MULTI_SELECTABLE_SELECTOR:'[aria-multiselectable="true"]',CHECKBOX_RADIO_SELECTOR:'input[type="checkbox"], input[type="radio"]',CHECKBOX_SELECTOR:'input[type="checkbox"]',CHILD_ELEMENTS_TO_TOGGLE_TABINDEX:"\n    ."+o.LIST_ITEM_CLASS+" button:not(:disabled),\n    ."+o.LIST_ITEM_CLASS+" a,\n    ."+a[o.LIST_ITEM_CLASS]+" button:not(:disabled),\n    ."+a[o.LIST_ITEM_CLASS]+" a\n  ",DEPRECATED_SELECTOR:".mdc-deprecated-list",FOCUSABLE_CHILD_ELEMENTS:"\n    ."+o.LIST_ITEM_CLASS+" button:not(:disabled),\n    ."+o.LIST_ITEM_CLASS+" a,\n    ."+o.LIST_ITEM_CLASS+' input[type="radio"]:not(:disabled),\n    .'+o.LIST_ITEM_CLASS+' input[type="checkbox"]:not(:disabled),\n    .'+a[o.LIST_ITEM_CLASS]+" button:not(:disabled),\n    ."+a[o.LIST_ITEM_CLASS]+" a,\n    ."+a[o.LIST_ITEM_CLASS]+' input[type="radio"]:not(:disabled),\n    .'+a[o.LIST_ITEM_CLASS]+' input[type="checkbox"]:not(:disabled)\n  ',RADIO_SELECTOR:'input[type="radio"]',SELECTED_ITEM_SELECTOR:'[aria-selected="true"], [aria-current="true"]'},d={UNSET_INDEX:-1,TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS:300},l={UNKNOWN:"Unknown",BACKSPACE:"Backspace",ENTER:"Enter",SPACEBAR:"Spacebar",PAGE_UP:"PageUp",PAGE_DOWN:"PageDown",END:"End",HOME:"Home",ARROW_LEFT:"ArrowLeft",ARROW_UP:"ArrowUp",ARROW_RIGHT:"ArrowRight",ARROW_DOWN:"ArrowDown",DELETE:"Delete",ESCAPE:"Escape",TAB:"Tab"},I=new Set;I.add(l.BACKSPACE),I.add(l.ENTER),I.add(l.SPACEBAR),I.add(l.PAGE_UP),I.add(l.PAGE_DOWN),I.add(l.END),I.add(l.HOME),I.add(l.ARROW_LEFT),I.add(l.ARROW_UP),I.add(l.ARROW_RIGHT),I.add(l.ARROW_DOWN),I.add(l.DELETE),I.add(l.ESCAPE),I.add(l.TAB);var E=new Map;E.set(8,l.BACKSPACE),E.set(13,l.ENTER),E.set(32,l.SPACEBAR),E.set(33,l.PAGE_UP),E.set(34,l.PAGE_DOWN),E.set(35,l.END),E.set(36,l.HOME),E.set(37,l.ARROW_LEFT),E.set(38,l.ARROW_UP),E.set(39,l.ARROW_RIGHT),E.set(40,l.ARROW_DOWN),E.set(46,l.DELETE),E.set(27,l.ESCAPE),E.set(9,l.TAB);var m=new Set;function A(t){var i=t.key;return I.has(i)?i:E.get(t.keyCode)||l.UNKNOWN}m.add(l.PAGE_UP),m.add(l.PAGE_DOWN),m.add(l.END),m.add(l.HOME),m.add(l.ARROW_LEFT),m.add(l.ARROW_UP),m.add(l.ARROW_RIGHT),m.add(l.ARROW_DOWN);var b=["input","button","textarea","select"],x=function(t){var i=t.target;if(i){var n=(""+i.tagName).toLowerCase();-1===b.indexOf(n)&&t.preventDefault()}};function v(t,i){var n,e=t.nextChar,s=t.focusItemAtIndex,r=t.sortedIndexByFirstChar,u=t.focusedItemIndex,h=t.skipFocus,o=t.isItemAtIndexDisabled;return clearTimeout(i.bufferClearTimeout),i.bufferClearTimeout=setTimeout((function(){_(i)}),d.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS),i.typeaheadBuffer=i.typeaheadBuffer+e,-1===(n=1===i.typeaheadBuffer.length?function(t,i,n,e){var s=e.typeaheadBuffer[0],r=t.get(s);if(!r)return-1;if(s===e.currentFirstChar&&r[e.sortedIndexCursor].index===i){e.sortedIndexCursor=(e.sortedIndexCursor+1)%r.length;var u=r[e.sortedIndexCursor].index;if(!n(u))return u}e.currentFirstChar=s;var h,o=-1;for(h=0;h<r.length;h++)if(!n(r[h].index)){o=h;break}for(;h<r.length;h++)if(r[h].index>i&&!n(r[h].index)){o=h;break}return-1!==o?(e.sortedIndexCursor=o,r[e.sortedIndexCursor].index):-1}(r,u,o,i):function(t,i,n){var e=t.get(n.typeaheadBuffer[0]);if(!e)return-1;var s=e[n.sortedIndexCursor];if(0===s.text.lastIndexOf(n.typeaheadBuffer,0)&&!i(s.index))return s.index;for(var r=(n.sortedIndexCursor+1)%e.length,u=-1;r!==n.sortedIndexCursor;){var h=e[r],o=0===h.text.lastIndexOf(n.typeaheadBuffer,0),c=!i(h.index);if(o&&c){u=r;break}r=(r+1)%e.length}return-1!==u?(n.sortedIndexCursor=u,e[n.sortedIndexCursor].index):-1}(r,o,i))||h||s(n),n}function C(t){return t.typeaheadBuffer.length>0}function _(t){t.typeaheadBuffer=""}function T(t,i){var n=t.event,e=t.isTargetListItem,s=t.focusedItemIndex,r=t.focusItemAtIndex,u=t.sortedIndexByFirstChar,h=t.isItemAtIndexDisabled,o="ArrowLeft"===A(n),c="ArrowUp"===A(n),a="ArrowRight"===A(n),f="ArrowDown"===A(n),d="Home"===A(n),l="End"===A(n),I="Enter"===A(n),E="Spacebar"===A(n);return n.ctrlKey||n.metaKey||o||c||a||f||d||l||I?-1:E||1!==n.key.length?E?(e&&x(n),e&&C(i)?v({focusItemAtIndex:r,focusedItemIndex:s,nextChar:" ",sortedIndexByFirstChar:u,skipFocus:!1,isItemAtIndexDisabled:h},i):-1):-1:(x(n),v({focusItemAtIndex:r,focusedItemIndex:s,nextChar:n.key.toLowerCase(),sortedIndexByFirstChar:u,skipFocus:!1,isItemAtIndexDisabled:h},i))}var p=function(n){function e(t){var s=n.call(this,i(i({},e.defaultAdapter),t))||this;return s.wrapFocus_=!1,s.isVertical_=!0,s.isSingleSelectionList_=!1,s.selectedIndex_=d.UNSET_INDEX,s.focusedItemIndex=d.UNSET_INDEX,s.useActivatedClass_=!1,s.useSelectedAttr_=!1,s.ariaCurrentAttrValue_=null,s.isCheckboxList_=!1,s.isRadioList_=!1,s.hasTypeahead=!1,s.typeaheadState={bufferClearTimeout:0,currentFirstChar:"",sortedIndexCursor:0,typeaheadBuffer:""},s.sortedIndexByFirstChar=new Map,s}return t(e,n),Object.defineProperty(e,"strings",{get:function(){return f},enumerable:!1,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return o},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return d},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClassForElementIndex:function(){},focusItemAtIndex:function(){},getAttributeForElementIndex:function(){return null},getFocusedElementIndex:function(){return 0},getListItemCount:function(){return 0},hasCheckboxAtIndex:function(){return!1},hasRadioAtIndex:function(){return!1},isCheckboxCheckedAtIndex:function(){return!1},isFocusInsideList:function(){return!1},isRootFocused:function(){return!1},listItemAtIndexHasClass:function(){return!1},notifyAction:function(){},removeClassForElementIndex:function(){},setAttributeForElementIndex:function(){},setCheckedCheckboxOrRadioAtIndex:function(){},setTabIndexForListItemChildren:function(){},getPrimaryTextAtIndex:function(){return""}}},enumerable:!1,configurable:!0}),e.prototype.layout=function(){0!==this.adapter.getListItemCount()&&(this.adapter.hasCheckboxAtIndex(0)?this.isCheckboxList_=!0:this.adapter.hasRadioAtIndex(0)?this.isRadioList_=!0:this.maybeInitializeSingleSelection(),this.hasTypeahead&&(this.sortedIndexByFirstChar=this.typeaheadInitSortedIndex()))},e.prototype.setWrapFocus=function(t){this.wrapFocus_=t},e.prototype.setVerticalOrientation=function(t){this.isVertical_=t},e.prototype.setSingleSelection=function(t){this.isSingleSelectionList_=t,t&&this.maybeInitializeSingleSelection()},e.prototype.maybeInitializeSingleSelection=function(){for(var t=this.adapter.getListItemCount(),i=0;i<t;i++){var n=this.adapter.listItemAtIndexHasClass(i,o.LIST_ITEM_SELECTED_CLASS),e=this.adapter.listItemAtIndexHasClass(i,o.LIST_ITEM_ACTIVATED_CLASS);if(n||e)return e&&this.setUseActivatedClass(!0),this.isSingleSelectionList_=!0,void(this.selectedIndex_=i)}},e.prototype.setHasTypeahead=function(t){this.hasTypeahead=t,t&&(this.sortedIndexByFirstChar=this.typeaheadInitSortedIndex())},e.prototype.isTypeaheadInProgress=function(){return this.hasTypeahead&&C(this.typeaheadState)},e.prototype.setUseActivatedClass=function(t){this.useActivatedClass_=t},e.prototype.setUseSelectedAttribute=function(t){this.useSelectedAttr_=t},e.prototype.getSelectedIndex=function(){return this.selectedIndex_},e.prototype.setSelectedIndex=function(t){this.isIndexValid_(t)&&(this.isCheckboxList_?this.setCheckboxAtIndex_(t):this.isRadioList_?this.setRadioAtIndex_(t):this.setSingleSelectionAtIndex_(t))},e.prototype.handleFocusIn=function(t,i){i>=0&&(this.focusedItemIndex=i,this.adapter.setAttributeForElementIndex(i,"tabindex","0"),this.adapter.setTabIndexForListItemChildren(i,"0"))},e.prototype.handleFocusOut=function(t,i){var n=this;i>=0&&(this.adapter.setAttributeForElementIndex(i,"tabindex","-1"),this.adapter.setTabIndexForListItemChildren(i,"-1")),setTimeout((function(){n.adapter.isFocusInsideList()||n.setTabindexToFirstSelectedOrFocusedItem()}),0)},e.prototype.handleKeydown=function(t,i,n){var e=this,s="ArrowLeft"===A(t),r="ArrowUp"===A(t),u="ArrowRight"===A(t),h="ArrowDown"===A(t),c="Home"===A(t),a="End"===A(t),f="Enter"===A(t),l="Spacebar"===A(t),I="A"===t.key||"a"===t.key;if(this.adapter.isRootFocused())r||a?(t.preventDefault(),this.focusLastElement()):(h||c)&&(t.preventDefault(),this.focusFirstElement()),this.hasTypeahead&&T({event:t,focusItemAtIndex:function(t){e.focusItemAtIndex(t)},focusedItemIndex:-1,isTargetListItem:i,sortedIndexByFirstChar:this.sortedIndexByFirstChar,isItemAtIndexDisabled:function(t){return e.adapter.listItemAtIndexHasClass(t,o.LIST_ITEM_DISABLED_CLASS)}},this.typeaheadState);else{var E=this.adapter.getFocusedElementIndex();if(!(-1===E&&(E=n)<0)){if(this.isVertical_&&h||!this.isVertical_&&u)x(t),this.focusNextElement(E);else if(this.isVertical_&&r||!this.isVertical_&&s)x(t),this.focusPrevElement(E);else if(c)x(t),this.focusFirstElement();else if(a)x(t),this.focusLastElement();else if(I&&t.ctrlKey&&this.isCheckboxList_)t.preventDefault(),this.toggleAll(this.selectedIndex_===d.UNSET_INDEX?[]:this.selectedIndex_);else if((f||l)&&i){var m=t.target;if(m&&"A"===m.tagName&&f)return;if(x(t),this.adapter.listItemAtIndexHasClass(E,o.LIST_ITEM_DISABLED_CLASS))return;this.isTypeaheadInProgress()||(this.isSelectableList_()&&this.setSelectedIndexOnAction_(E),this.adapter.notifyAction(E))}this.hasTypeahead&&T({event:t,focusItemAtIndex:function(t){e.focusItemAtIndex(t)},focusedItemIndex:this.focusedItemIndex,isTargetListItem:i,sortedIndexByFirstChar:this.sortedIndexByFirstChar,isItemAtIndexDisabled:function(t){return e.adapter.listItemAtIndexHasClass(t,o.LIST_ITEM_DISABLED_CLASS)}},this.typeaheadState)}}},e.prototype.handleClick=function(t,i){t!==d.UNSET_INDEX&&(this.adapter.listItemAtIndexHasClass(t,o.LIST_ITEM_DISABLED_CLASS)||(this.isSelectableList_()&&this.setSelectedIndexOnAction_(t,i),this.adapter.notifyAction(t)))},e.prototype.focusNextElement=function(t){var i=t+1;if(i>=this.adapter.getListItemCount()){if(!this.wrapFocus_)return t;i=0}return this.focusItemAtIndex(i),i},e.prototype.focusPrevElement=function(t){var i=t-1;if(i<0){if(!this.wrapFocus_)return t;i=this.adapter.getListItemCount()-1}return this.focusItemAtIndex(i),i},e.prototype.focusFirstElement=function(){return this.focusItemAtIndex(0),0},e.prototype.focusLastElement=function(){var t=this.adapter.getListItemCount()-1;return this.focusItemAtIndex(t),t},e.prototype.focusInitialElement=function(){var t=this.getFirstSelectedOrFocusedItemIndex();return this.focusItemAtIndex(t),t},e.prototype.setEnabled=function(t,i){this.isIndexValid_(t)&&(i?(this.adapter.removeClassForElementIndex(t,o.LIST_ITEM_DISABLED_CLASS),this.adapter.setAttributeForElementIndex(t,f.ARIA_DISABLED,"false")):(this.adapter.addClassForElementIndex(t,o.LIST_ITEM_DISABLED_CLASS),this.adapter.setAttributeForElementIndex(t,f.ARIA_DISABLED,"true")))},e.prototype.setSingleSelectionAtIndex_=function(t){if(this.selectedIndex_!==t){var i=o.LIST_ITEM_SELECTED_CLASS;this.useActivatedClass_&&(i=o.LIST_ITEM_ACTIVATED_CLASS),this.selectedIndex_!==d.UNSET_INDEX&&this.adapter.removeClassForElementIndex(this.selectedIndex_,i),this.setAriaForSingleSelectionAtIndex_(t),this.setTabindexAtIndex(t),t!==d.UNSET_INDEX&&this.adapter.addClassForElementIndex(t,i),this.selectedIndex_=t}},e.prototype.setAriaForSingleSelectionAtIndex_=function(t){this.selectedIndex_===d.UNSET_INDEX&&(this.ariaCurrentAttrValue_=this.adapter.getAttributeForElementIndex(t,f.ARIA_CURRENT));var i=null!==this.ariaCurrentAttrValue_,n=i?f.ARIA_CURRENT:f.ARIA_SELECTED;this.selectedIndex_!==d.UNSET_INDEX&&this.adapter.setAttributeForElementIndex(this.selectedIndex_,n,"false"),t!==d.UNSET_INDEX&&this.adapter.setAttributeForElementIndex(t,n,i?this.ariaCurrentAttrValue_:"true")},e.prototype.getSelectionAttribute=function(){return this.useSelectedAttr_?f.ARIA_SELECTED:f.ARIA_CHECKED},e.prototype.setRadioAtIndex_=function(t){var i=this.getSelectionAttribute();this.adapter.setCheckedCheckboxOrRadioAtIndex(t,!0),this.selectedIndex_!==d.UNSET_INDEX&&this.adapter.setAttributeForElementIndex(this.selectedIndex_,i,"false"),this.adapter.setAttributeForElementIndex(t,i,"true"),this.selectedIndex_=t},e.prototype.setCheckboxAtIndex_=function(t){for(var i=this.getSelectionAttribute(),n=0;n<this.adapter.getListItemCount();n++){var e=!1;t.indexOf(n)>=0&&(e=!0),this.adapter.setCheckedCheckboxOrRadioAtIndex(n,e),this.adapter.setAttributeForElementIndex(n,i,e?"true":"false")}this.selectedIndex_=t},e.prototype.setTabindexAtIndex=function(t){this.focusedItemIndex===d.UNSET_INDEX&&0!==t?this.adapter.setAttributeForElementIndex(0,"tabindex","-1"):this.focusedItemIndex>=0&&this.focusedItemIndex!==t&&this.adapter.setAttributeForElementIndex(this.focusedItemIndex,"tabindex","-1"),this.selectedIndex_ instanceof Array||this.selectedIndex_===t||this.adapter.setAttributeForElementIndex(this.selectedIndex_,"tabindex","-1"),t!==d.UNSET_INDEX&&this.adapter.setAttributeForElementIndex(t,"tabindex","0")},e.prototype.isSelectableList_=function(){return this.isSingleSelectionList_||this.isCheckboxList_||this.isRadioList_},e.prototype.setTabindexToFirstSelectedOrFocusedItem=function(){var t=this.getFirstSelectedOrFocusedItemIndex();this.setTabindexAtIndex(t)},e.prototype.getFirstSelectedOrFocusedItemIndex=function(){var t=this.focusedItemIndex>=0?this.focusedItemIndex:0;return this.isSelectableList_()&&("number"==typeof this.selectedIndex_&&this.selectedIndex_!==d.UNSET_INDEX?t=this.selectedIndex_:this.selectedIndex_ instanceof Array&&this.selectedIndex_.length>0&&(t=this.selectedIndex_.reduce((function(t,i){return Math.min(t,i)})))),t},e.prototype.isIndexValid_=function(t){var i=this;if(t instanceof Array){if(!this.isCheckboxList_)throw new Error("MDCListFoundation: Array of index is only supported for checkbox based list");return 0===t.length||t.some((function(t){return i.isIndexInRange_(t)}))}if("number"==typeof t){if(this.isCheckboxList_)throw new Error("MDCListFoundation: Expected array of index for checkbox based list but got number: "+t);return this.isIndexInRange_(t)||this.isSingleSelectionList_&&t===d.UNSET_INDEX}return!1},e.prototype.isIndexInRange_=function(t){var i=this.adapter.getListItemCount();return t>=0&&t<i},e.prototype.setSelectedIndexOnAction_=function(t,i){void 0===i&&(i=!0),this.isCheckboxList_?this.toggleCheckboxAtIndex_(t,i):this.setSelectedIndex(t)},e.prototype.toggleCheckboxAtIndex_=function(t,i){var n=this.getSelectionAttribute(),e=this.adapter.isCheckboxCheckedAtIndex(t);i&&this.adapter.setCheckedCheckboxOrRadioAtIndex(t,e=!e),this.adapter.setAttributeForElementIndex(t,n,e?"true":"false");var s=this.selectedIndex_===d.UNSET_INDEX?[]:this.selectedIndex_.slice();e?s.push(t):s=s.filter((function(i){return i!==t})),this.selectedIndex_=s},e.prototype.focusItemAtIndex=function(t){this.adapter.focusItemAtIndex(t),this.focusedItemIndex=t},e.prototype.toggleAll=function(t){var i=this.adapter.getListItemCount();if(t.length===i)this.setCheckboxAtIndex_([]);else{for(var n=[],e=0;e<i;e++)(!this.adapter.listItemAtIndexHasClass(e,o.LIST_ITEM_DISABLED_CLASS)||t.indexOf(e)>-1)&&n.push(e);this.setCheckboxAtIndex_(n)}},e.prototype.typeaheadMatchItem=function(t,i,n){var e=this;return void 0===n&&(n=!1),v({focusItemAtIndex:function(t){e.focusItemAtIndex(t)},focusedItemIndex:i||this.focusedItemIndex,nextChar:t,sortedIndexByFirstChar:this.sortedIndexByFirstChar,skipFocus:n,isItemAtIndexDisabled:function(t){return e.adapter.listItemAtIndexHasClass(t,o.LIST_ITEM_DISABLED_CLASS)}},this.typeaheadState)},e.prototype.typeaheadInitSortedIndex=function(){return function(t,i){for(var n=new Map,e=0;e<t;e++){var s=i(e).trim();if(s){var r=s[0].toLowerCase();n.has(r)||n.set(r,[]),n.get(r).push({text:s.toLowerCase(),index:e})}}return n.forEach((function(t){t.sort((function(t,i){return t.index-i.index}))})),n}(this.adapter.getListItemCount(),this.adapter.getPrimaryTextAtIndex)},e.prototype.clearTypeaheadBuffer=function(){_(this.typeaheadState)},e}(n),R=function(i){function n(){return null!==i&&i.apply(this,arguments)||this}return t(n,i),Object.defineProperty(n.prototype,"vertical",{set:function(t){this.foundation.setVerticalOrientation(t)},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"listElements",{get:function(){return Array.from(this.root.querySelectorAll("."+this.classNameMap[o.LIST_ITEM_CLASS]))},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"wrapFocus",{set:function(t){this.foundation.setWrapFocus(t)},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"typeaheadInProgress",{get:function(){return this.foundation.isTypeaheadInProgress()},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"hasTypeahead",{set:function(t){this.foundation.setHasTypeahead(t)},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"singleSelection",{set:function(t){this.foundation.setSingleSelection(t)},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"selectedIndex",{get:function(){return this.foundation.getSelectedIndex()},set:function(t){this.foundation.setSelectedIndex(t)},enumerable:!1,configurable:!0}),n.attachTo=function(t){return new n(t)},n.prototype.initialSyncWithDOM=function(){this.isEvolutionEnabled="evolution"in this.root.dataset,this.classNameMap=this.isEvolutionEnabled?c:s(this.root,f.DEPRECATED_SELECTOR)?a:Object.values(o).reduce((function(t,i){return t[i]=i,t}),{}),this.handleClick=this.handleClickEvent.bind(this),this.handleKeydown=this.handleKeydownEvent.bind(this),this.focusInEventListener=this.handleFocusInEvent.bind(this),this.focusOutEventListener=this.handleFocusOutEvent.bind(this),this.listen("keydown",this.handleKeydown),this.listen("click",this.handleClick),this.listen("focusin",this.focusInEventListener),this.listen("focusout",this.focusOutEventListener),this.layout(),this.initializeListType(),this.ensureFocusable()},n.prototype.destroy=function(){this.unlisten("keydown",this.handleKeydown),this.unlisten("click",this.handleClick),this.unlisten("focusin",this.focusInEventListener),this.unlisten("focusout",this.focusOutEventListener)},n.prototype.layout=function(){var t=this.root.getAttribute(f.ARIA_ORIENTATION);this.vertical=t!==f.ARIA_ORIENTATION_HORIZONTAL;var i=f.FOCUSABLE_CHILD_ELEMENTS,n=this.root.querySelectorAll("."+this.classNameMap[o.LIST_ITEM_CLASS]+":not([tabindex])");n.length&&Array.prototype.forEach.call(n,(function(t){t.setAttribute("tabindex","-1")}));var e=this.root.querySelectorAll(i);e.length&&Array.prototype.forEach.call(e,(function(t){t.setAttribute("tabindex","-1")})),this.isEvolutionEnabled&&this.foundation.setUseSelectedAttribute(!0),this.foundation.layout()},n.prototype.getPrimaryText=function(t){var i,n=t.querySelector("."+this.classNameMap[o.LIST_ITEM_PRIMARY_TEXT_CLASS]);if(this.isEvolutionEnabled||n)return null!==(i=null==n?void 0:n.textContent)&&void 0!==i?i:"";var e=t.querySelector("."+this.classNameMap[o.LIST_ITEM_TEXT_CLASS]);return e&&e.textContent||""},n.prototype.initializeListType=function(){var t=this;if(this.isInteractive=s(this.root,f.ARIA_INTERACTIVE_ROLES_SELECTOR),this.isEvolutionEnabled&&this.isInteractive){var i=Array.from(this.root.querySelectorAll(f.SELECTED_ITEM_SELECTOR),(function(i){return t.listElements.indexOf(i)}));s(this.root,f.ARIA_MULTI_SELECTABLE_SELECTOR)?this.selectedIndex=i:i.length>0&&(this.selectedIndex=i[0])}else{var n=this.root.querySelectorAll(f.ARIA_ROLE_CHECKBOX_SELECTOR),e=this.root.querySelector(f.ARIA_CHECKED_RADIO_SELECTOR);if(n.length){var r=this.root.querySelectorAll(f.ARIA_CHECKED_CHECKBOX_SELECTOR);this.selectedIndex=Array.from(r,(function(i){return t.listElements.indexOf(i)}))}else e&&(this.selectedIndex=this.listElements.indexOf(e))}},n.prototype.setEnabled=function(t,i){this.foundation.setEnabled(t,i)},n.prototype.typeaheadMatchItem=function(t,i){return this.foundation.typeaheadMatchItem(t,i,!0)},n.prototype.getDefaultFoundation=function(){var t=this;return new p({addClassForElementIndex:function(i,n){var e=t.listElements[i];e&&e.classList.add(t.classNameMap[n])},focusItemAtIndex:function(i){var n=t.listElements[i];n&&n.focus()},getAttributeForElementIndex:function(i,n){return t.listElements[i].getAttribute(n)},getFocusedElementIndex:function(){return t.listElements.indexOf(document.activeElement)},getListItemCount:function(){return t.listElements.length},getPrimaryTextAtIndex:function(i){return t.getPrimaryText(t.listElements[i])},hasCheckboxAtIndex:function(i){return!!t.listElements[i].querySelector(f.CHECKBOX_SELECTOR)},hasRadioAtIndex:function(i){return!!t.listElements[i].querySelector(f.RADIO_SELECTOR)},isCheckboxCheckedAtIndex:function(i){return t.listElements[i].querySelector(f.CHECKBOX_SELECTOR).checked},isFocusInsideList:function(){return t.root!==document.activeElement&&t.root.contains(document.activeElement)},isRootFocused:function(){return document.activeElement===t.root},listItemAtIndexHasClass:function(i,n){return t.listElements[i].classList.contains(t.classNameMap[n])},notifyAction:function(i){t.emit(f.ACTION_EVENT,{index:i},!0)},removeClassForElementIndex:function(i,n){var e=t.listElements[i];e&&e.classList.remove(t.classNameMap[n])},setAttributeForElementIndex:function(i,n,e){var s=t.listElements[i];s&&s.setAttribute(n,e)},setCheckedCheckboxOrRadioAtIndex:function(i,n){var e=t.listElements[i].querySelector(f.CHECKBOX_RADIO_SELECTOR);e.checked=n;var s=document.createEvent("Event");s.initEvent("change",!0,!0),e.dispatchEvent(s)},setTabIndexForListItemChildren:function(i,n){Array.prototype.forEach.call(t.listElements[i].querySelectorAll(f.CHILD_ELEMENTS_TO_TOGGLE_TABINDEX),(function(t){t.setAttribute("tabindex",n)}))}})},n.prototype.ensureFocusable=function(){if(this.isEvolutionEnabled&&this.isInteractive&&!this.root.querySelector("."+this.classNameMap[o.LIST_ITEM_CLASS]+'[tabindex="0"]')){var t=this.initialFocusIndex();-1!==t&&(this.listElements[t].tabIndex=0)}},n.prototype.initialFocusIndex=function(){if(this.selectedIndex instanceof Array&&this.selectedIndex.length>0)return this.selectedIndex[0];if("number"==typeof this.selectedIndex&&this.selectedIndex!==d.UNSET_INDEX)return this.selectedIndex;var t=this.root.querySelector("."+this.classNameMap[o.LIST_ITEM_CLASS]+":not(."+this.classNameMap[o.LIST_ITEM_DISABLED_CLASS]+")");return null===t?-1:this.getListItemIndex(t)},n.prototype.getListItemIndex=function(t){var i=r(t,"."+this.classNameMap[o.LIST_ITEM_CLASS]+", ."+this.classNameMap[o.ROOT]);return i&&s(i,"."+this.classNameMap[o.LIST_ITEM_CLASS])?this.listElements.indexOf(i):-1},n.prototype.handleFocusInEvent=function(t){var i=this.getListItemIndex(t.target);this.foundation.handleFocusIn(t,i)},n.prototype.handleFocusOutEvent=function(t){var i=this.getListItemIndex(t.target);this.foundation.handleFocusOut(t,i)},n.prototype.handleKeydownEvent=function(t){var i=this.getListItemIndex(t.target);this.foundation.handleKeydown(t,t.target.classList.contains(this.classNameMap[o.LIST_ITEM_CLASS]),i)},n.prototype.handleClickEvent=function(t){var i=this.getListItemIndex(t.target),n=!s(t.target,f.CHECKBOX_RADIO_SELECTOR);this.foundation.handleClick(i,n)},n}(e);export{l as K,R as M,p as a,d as b,o as c,A as n}