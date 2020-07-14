import{r as t,h as n,g as o}from"./p-1f59172b.js";import{U as i}from"./p-4fbe91b2.js";import{_ as e,a as r,d as c,M as u,c as s,e as a}from"./p-9dc32dc7.js";import{c as d,M as l,a as f}from"./p-65803200.js";import{uniWatermark as h,UniColorClasses as m,UniTemplate as b}from"@uni/common";Object.assign(Object.assign({},{mini:"mdc-fab--mini",extended:"mdc-fab--extended"}),{fab:"mdc-fab",exited:"mdc-fab--exited",ripple:"mdc-fab__ripple",label:"mdc-fab__label",icon:"mdc-fab__icon"});
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var p,g,v={ANCHOR:"mdc-menu-surface--anchor",ANIMATING_CLOSED:"mdc-menu-surface--animating-closed",ANIMATING_OPEN:"mdc-menu-surface--animating-open",FIXED:"mdc-menu-surface--fixed",IS_OPEN_BELOW:"mdc-menu-surface--is-open-below",OPEN:"mdc-menu-surface--open",ROOT:"mdc-menu-surface"},_={CLOSED_EVENT:"MDCMenuSurface:closed",OPENED_EVENT:"MDCMenuSurface:opened",FOCUSABLE_ELEMENTS:["button:not(:disabled)",'[href]:not([aria-disabled="true"])',"input:not(:disabled)","select:not(:disabled)","textarea:not(:disabled)",'[tabindex]:not([tabindex="-1"]):not([aria-disabled="true"])'].join(", ")},O={TRANSITION_OPEN_DURATION:120,TRANSITION_CLOSE_DURATION:75,MARGIN_TO_EDGE:32,ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO:.67};!function(t){t[t.BOTTOM=1]="BOTTOM",t[t.CENTER=2]="CENTER",t[t.RIGHT=4]="RIGHT",t[t.FLIP_RTL=8]="FLIP_RTL"}(p||(p={})),function(t){t[t.TOP_LEFT=0]="TOP_LEFT",t[t.TOP_RIGHT=4]="TOP_RIGHT",t[t.BOTTOM_LEFT=1]="BOTTOM_LEFT",t[t.BOTTOM_RIGHT=5]="BOTTOM_RIGHT",t[t.TOP_START=8]="TOP_START",t[t.TOP_END=12]="TOP_END",t[t.BOTTOM_START=9]="BOTTOM_START",t[t.BOTTOM_END=13]="BOTTOM_END"}(g||(g={}));
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var y,T,w=function(t){function n(o){var i=t.call(this,r(r({},n.defaultAdapter),o))||this;return i.isSurfaceOpen=!1,i.isQuickOpen=!1,i.isHoistedElement=!1,i.isFixedPosition=!1,i.openAnimationEndTimerId=0,i.closeAnimationEndTimerId=0,i.animationRequestId=0,i.anchorCorner=g.TOP_START,i.originCorner=g.TOP_START,i.anchorMargin={top:0,right:0,bottom:0,left:0},i.position={x:0,y:0},i}return e(n,t),Object.defineProperty(n,"cssClasses",{get:function(){return v},enumerable:!0,configurable:!0}),Object.defineProperty(n,"strings",{get:function(){return _},enumerable:!0,configurable:!0}),Object.defineProperty(n,"numbers",{get:function(){return O},enumerable:!0,configurable:!0}),Object.defineProperty(n,"Corner",{get:function(){return g},enumerable:!0,configurable:!0}),Object.defineProperty(n,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},hasAnchor:function(){return!1},isElementInContainer:function(){return!1},isFocused:function(){return!1},isRtl:function(){return!1},getInnerDimensions:function(){return{height:0,width:0}},getAnchorDimensions:function(){return null},getWindowDimensions:function(){return{height:0,width:0}},getBodyDimensions:function(){return{height:0,width:0}},getWindowScroll:function(){return{x:0,y:0}},setPosition:function(){},setMaxHeight:function(){},setTransformOrigin:function(){},saveFocus:function(){},restoreFocus:function(){},notifyClose:function(){},notifyOpen:function(){}}},enumerable:!0,configurable:!0}),n.prototype.init=function(){var t=n.cssClasses,o=t.ROOT,i=t.OPEN;if(!this.adapter.hasClass(o))throw new Error(o+" class required in root element.");this.adapter.hasClass(i)&&(this.isSurfaceOpen=!0)},n.prototype.destroy=function(){clearTimeout(this.openAnimationEndTimerId),clearTimeout(this.closeAnimationEndTimerId),cancelAnimationFrame(this.animationRequestId)},n.prototype.setAnchorCorner=function(t){this.anchorCorner=t},n.prototype.flipCornerHorizontally=function(){this.originCorner=this.originCorner^p.RIGHT},n.prototype.setAnchorMargin=function(t){this.anchorMargin.top=t.top||0,this.anchorMargin.right=t.right||0,this.anchorMargin.bottom=t.bottom||0,this.anchorMargin.left=t.left||0},n.prototype.setIsHoisted=function(t){this.isHoistedElement=t},n.prototype.setFixedPosition=function(t){this.isFixedPosition=t},n.prototype.setAbsolutePosition=function(t,n){this.position.x=this.isFinite(t)?t:0,this.position.y=this.isFinite(n)?n:0},n.prototype.setQuickOpen=function(t){this.isQuickOpen=t},n.prototype.isOpen=function(){return this.isSurfaceOpen},n.prototype.open=function(){var t=this;this.isSurfaceOpen||(this.adapter.saveFocus(),this.isQuickOpen?(this.isSurfaceOpen=!0,this.adapter.addClass(n.cssClasses.OPEN),this.dimensions=this.adapter.getInnerDimensions(),this.autoposition(),this.adapter.notifyOpen()):(this.adapter.addClass(n.cssClasses.ANIMATING_OPEN),this.animationRequestId=requestAnimationFrame((function(){t.adapter.addClass(n.cssClasses.OPEN),t.dimensions=t.adapter.getInnerDimensions(),t.autoposition(),t.openAnimationEndTimerId=setTimeout((function(){t.openAnimationEndTimerId=0,t.adapter.removeClass(n.cssClasses.ANIMATING_OPEN),t.adapter.notifyOpen()}),O.TRANSITION_OPEN_DURATION)})),this.isSurfaceOpen=!0))},n.prototype.close=function(t){var o=this;void 0===t&&(t=!1),this.isSurfaceOpen&&(this.isQuickOpen?(this.isSurfaceOpen=!1,t||this.maybeRestoreFocus(),this.adapter.removeClass(n.cssClasses.OPEN),this.adapter.removeClass(n.cssClasses.IS_OPEN_BELOW),this.adapter.notifyClose()):(this.adapter.addClass(n.cssClasses.ANIMATING_CLOSED),requestAnimationFrame((function(){o.adapter.removeClass(n.cssClasses.OPEN),o.adapter.removeClass(n.cssClasses.IS_OPEN_BELOW),o.closeAnimationEndTimerId=setTimeout((function(){o.closeAnimationEndTimerId=0,o.adapter.removeClass(n.cssClasses.ANIMATING_CLOSED),o.adapter.notifyClose()}),O.TRANSITION_CLOSE_DURATION)})),this.isSurfaceOpen=!1,t||this.maybeRestoreFocus()))},n.prototype.handleBodyClick=function(t){this.adapter.isElementInContainer(t.target)||this.close()},n.prototype.handleKeydown=function(t){("Escape"===t.key||27===t.keyCode)&&this.close()},n.prototype.autoposition=function(){var t;this.measurements=this.getAutoLayoutmeasurements();var o=this.getoriginCorner(),i=this.getMenuSurfaceMaxHeight(o),e=this.hasBit(o,p.BOTTOM)?"bottom":"top",r=this.hasBit(o,p.RIGHT)?"right":"left",c=this.getHorizontalOriginOffset(o),u=this.getVerticalOriginOffset(o),s=this.measurements,a=s.anchorSize,d=s.surfaceSize,l=((t={})[r]=c,t[e]=u,t);a.width/d.width>O.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO&&(r="center"),(this.isHoistedElement||this.isFixedPosition)&&this.adjustPositionForHoistedElement(l),this.adapter.setTransformOrigin(r+" "+e),this.adapter.setPosition(l),this.adapter.setMaxHeight(i?i+"px":""),this.hasBit(o,p.BOTTOM)||this.adapter.addClass(n.cssClasses.IS_OPEN_BELOW)},n.prototype.getAutoLayoutmeasurements=function(){var t=this.adapter.getAnchorDimensions(),n=this.adapter.getBodyDimensions(),o=this.adapter.getWindowDimensions(),i=this.adapter.getWindowScroll();return t||(t={top:this.position.y,right:this.position.x,bottom:this.position.y,left:this.position.x,width:0,height:0}),{anchorSize:t,bodySize:n,surfaceSize:this.dimensions,viewportDistance:{top:t.top,right:o.width-t.right,bottom:o.height-t.bottom,left:t.left},viewportSize:o,windowScroll:i}},n.prototype.getoriginCorner=function(){var t,o,i=this.originCorner,e=this.measurements,r=e.viewportDistance,c=e.anchorSize,u=e.surfaceSize,s=n.numbers.MARGIN_TO_EDGE;this.hasBit(this.anchorCorner,p.BOTTOM)?(t=r.top-s+c.height+this.anchorMargin.bottom,o=r.bottom-s-this.anchorMargin.bottom):(t=r.top-s+this.anchorMargin.top,o=r.bottom-s+c.height-this.anchorMargin.top),!(o-u.height>0)&&t>=o&&(i=this.setBit(i,p.BOTTOM));var a,d,l,f=this.adapter.isRtl(),h=this.hasBit(this.anchorCorner,p.FLIP_RTL),m=this.hasBit(this.anchorCorner,p.RIGHT);(l=f&&h?!m:m)?(a=r.left+c.width+this.anchorMargin.right,d=r.right-this.anchorMargin.right):(a=r.left+this.anchorMargin.left,d=r.right+c.width-this.anchorMargin.left);var b=a-u.width>0,g=d-u.width>0,v=this.hasBit(i,p.FLIP_RTL)&&this.hasBit(i,p.RIGHT);return g&&v&&f||!b&&v?i=this.unsetBit(i,p.RIGHT):(b&&l&&f||b&&!l&&m||!g&&a>=d)&&(i=this.setBit(i,p.RIGHT)),i},n.prototype.getMenuSurfaceMaxHeight=function(t){var o=this.measurements.viewportDistance,i=0,e=this.hasBit(t,p.BOTTOM),r=this.hasBit(this.anchorCorner,p.BOTTOM),c=n.numbers.MARGIN_TO_EDGE;return e?(i=o.top+this.anchorMargin.top-c,r||(i+=this.measurements.anchorSize.height)):(i=o.bottom-this.anchorMargin.bottom+this.measurements.anchorSize.height-c,r&&(i-=this.measurements.anchorSize.height)),i},n.prototype.getHorizontalOriginOffset=function(t){var n=this.measurements.anchorSize,o=this.hasBit(t,p.RIGHT),i=this.hasBit(this.anchorCorner,p.RIGHT);if(o){var e=i?n.width-this.anchorMargin.left:this.anchorMargin.right;return this.isHoistedElement||this.isFixedPosition?e-(this.measurements.viewportSize.width-this.measurements.bodySize.width):e}return i?n.width-this.anchorMargin.right:this.anchorMargin.left},n.prototype.getVerticalOriginOffset=function(t){var n=this.measurements.anchorSize,o=this.hasBit(t,p.BOTTOM),i=this.hasBit(this.anchorCorner,p.BOTTOM);return o?i?n.height-this.anchorMargin.top:-this.anchorMargin.bottom:i?n.height+this.anchorMargin.bottom:this.anchorMargin.top},n.prototype.adjustPositionForHoistedElement=function(t){var n,o,i=this.measurements,e=i.windowScroll,r=i.viewportDistance,u=Object.keys(t);try{for(var s=c(u),a=s.next();!a.done;a=s.next()){var d=a.value,l=t[d]||0;l+=r[d],this.isFixedPosition||("top"===d?l+=e.y:"bottom"===d?l-=e.y:"left"===d?l+=e.x:l-=e.x),t[d]=l}}catch(t){n={error:t}}finally{try{a&&!a.done&&(o=s.return)&&o.call(s)}finally{if(n)throw n.error}}},n.prototype.maybeRestoreFocus=function(){var t=this.adapter.isFocused(),n=document.activeElement&&this.adapter.isElementInContainer(document.activeElement);(t||n)&&this.adapter.restoreFocus()},n.prototype.hasBit=function(t,n){return Boolean(t&n)},n.prototype.setBit=function(t,n){return t|n},n.prototype.unsetBit=function(t,n){return t^n},n.prototype.isFinite=function(t){return"number"==typeof t&&isFinite(t)},n}(u),E=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return e(n,t),n.attachTo=function(t){return new n(t)},n.prototype.initialSyncWithDOM=function(){var t=this,n=this.root.parentElement;this.anchorElement=n&&n.classList.contains(v.ANCHOR)?n:null,this.root.classList.contains(v.FIXED)&&this.setFixedPosition(!0),this.handleKeydown=function(n){t.foundation.handleKeydown(n)},this.handleBodyClick=function(n){t.foundation.handleBodyClick(n)},this.registerBodyClickListener=function(){document.body.addEventListener("click",t.handleBodyClick,{capture:!0})},this.deregisterBodyClickListener=function(){document.body.removeEventListener("click",t.handleBodyClick)},this.listen("keydown",this.handleKeydown),this.listen(_.OPENED_EVENT,this.registerBodyClickListener),this.listen(_.CLOSED_EVENT,this.deregisterBodyClickListener)},n.prototype.destroy=function(){this.unlisten("keydown",this.handleKeydown),this.unlisten(_.OPENED_EVENT,this.registerBodyClickListener),this.unlisten(_.CLOSED_EVENT,this.deregisterBodyClickListener),t.prototype.destroy.call(this)},n.prototype.isOpen=function(){return this.foundation.isOpen()},n.prototype.open=function(){this.foundation.open()},n.prototype.close=function(t){void 0===t&&(t=!1),this.foundation.close(t)},Object.defineProperty(n.prototype,"quickOpen",{set:function(t){this.foundation.setQuickOpen(t)},enumerable:!0,configurable:!0}),n.prototype.setIsHoisted=function(t){this.foundation.setIsHoisted(t)},n.prototype.setMenuSurfaceAnchorElement=function(t){this.anchorElement=t},n.prototype.setFixedPosition=function(t){t?this.root.classList.add(v.FIXED):this.root.classList.remove(v.FIXED),this.foundation.setFixedPosition(t)},n.prototype.setAbsolutePosition=function(t,n){this.foundation.setAbsolutePosition(t,n),this.setIsHoisted(!0)},n.prototype.setAnchorCorner=function(t){this.foundation.setAnchorCorner(t)},n.prototype.setAnchorMargin=function(t){this.foundation.setAnchorMargin(t)},n.prototype.getDefaultFoundation=function(){var t=this;return new w({addClass:function(n){return t.root.classList.add(n)},removeClass:function(n){return t.root.classList.remove(n)},hasClass:function(n){return t.root.classList.contains(n)},hasAnchor:function(){return!!t.anchorElement},notifyClose:function(){return t.emit(w.strings.CLOSED_EVENT,{})},notifyOpen:function(){return t.emit(w.strings.OPENED_EVENT,{})},isElementInContainer:function(n){return t.root.contains(n)},isRtl:function(){return"rtl"===getComputedStyle(t.root).getPropertyValue("direction")},setTransformOrigin:function(n){var o=function(t,n){if(void 0===n&&(n=!1),void 0===y||n){var o=t.document.createElement("div");y="transform"in o.style?"transform":"webkitTransform"}return y}
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */(window)+"-origin";t.root.style.setProperty(o,n)},isFocused:function(){return document.activeElement===t.root},saveFocus:function(){t.previousFocus=document.activeElement},restoreFocus:function(){t.root.contains(document.activeElement)&&t.previousFocus&&t.previousFocus.focus&&t.previousFocus.focus()},getInnerDimensions:function(){return{width:t.root.offsetWidth,height:t.root.offsetHeight}},getAnchorDimensions:function(){return t.anchorElement?t.anchorElement.getBoundingClientRect():null},getWindowDimensions:function(){return{width:window.innerWidth,height:window.innerHeight}},getBodyDimensions:function(){return{width:document.body.clientWidth,height:document.body.clientHeight}},getWindowScroll:function(){return{x:window.pageXOffset,y:window.pageYOffset}},setPosition:function(n){var o=t.root;o.style.left="left"in n?n.left+"px":"",o.style.right="right"in n?n.right+"px":"",o.style.top="top"in n?n.top+"px":"",o.style.bottom="bottom"in n?n.bottom+"px":""},setMaxHeight:function(n){t.root.style.maxHeight=n}})},n}(s),x={MENU_SELECTED_LIST_ITEM:"mdc-menu-item--selected",MENU_SELECTION_GROUP:"mdc-menu__selection-group",ROOT:"mdc-menu"},I={ARIA_CHECKED_ATTR:"aria-checked",ARIA_DISABLED_ATTR:"aria-disabled",CHECKBOX_SELECTOR:'input[type="checkbox"]',LIST_SELECTOR:".mdc-list",SELECTED_EVENT:"MDCMenu:selected"},k={FOCUS_ROOT_INDEX:-1};
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */!function(t){t[t.NONE=0]="NONE",t[t.LIST_ROOT=1]="LIST_ROOT",t[t.FIRST_ITEM=2]="FIRST_ITEM",t[t.LAST_ITEM=3]="LAST_ITEM"}(T||(T={}));
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var A=function(t){function n(o){var i=t.call(this,r(r({},n.defaultAdapter),o))||this;return i.closeAnimationEndTimerId_=0,i.defaultFocusState_=T.LIST_ROOT,i}return e(n,t),Object.defineProperty(n,"cssClasses",{get:function(){return x},enumerable:!0,configurable:!0}),Object.defineProperty(n,"strings",{get:function(){return I},enumerable:!0,configurable:!0}),Object.defineProperty(n,"numbers",{get:function(){return k},enumerable:!0,configurable:!0}),Object.defineProperty(n,"defaultAdapter",{get:function(){return{addClassToElementAtIndex:function(){},removeClassFromElementAtIndex:function(){},addAttributeToElementAtIndex:function(){},removeAttributeFromElementAtIndex:function(){},elementContainsClass:function(){return!1},closeSurface:function(){},getElementIndex:function(){return-1},notifySelected:function(){},getMenuItemCount:function(){return 0},focusItemAtIndex:function(){},focusListRoot:function(){},getSelectedSiblingOfItemAtIndex:function(){return-1},isSelectableItemAtIndex:function(){return!1}}},enumerable:!0,configurable:!0}),n.prototype.destroy=function(){this.closeAnimationEndTimerId_&&clearTimeout(this.closeAnimationEndTimerId_),this.adapter.closeSurface()},n.prototype.handleKeydown=function(t){("Tab"===t.key||9===t.keyCode)&&this.adapter.closeSurface(!0)},n.prototype.handleItemAction=function(t){var n=this,o=this.adapter.getElementIndex(t);o<0||(this.adapter.notifySelected({index:o}),this.adapter.closeSurface(),this.closeAnimationEndTimerId_=setTimeout((function(){var o=n.adapter.getElementIndex(t);o>=0&&n.adapter.isSelectableItemAtIndex(o)&&n.setSelectedIndex(o)}),w.numbers.TRANSITION_CLOSE_DURATION))},n.prototype.handleMenuSurfaceOpened=function(){switch(this.defaultFocusState_){case T.FIRST_ITEM:this.adapter.focusItemAtIndex(0);break;case T.LAST_ITEM:this.adapter.focusItemAtIndex(this.adapter.getMenuItemCount()-1);break;case T.NONE:break;default:this.adapter.focusListRoot()}},n.prototype.setDefaultFocusState=function(t){this.defaultFocusState_=t},n.prototype.setSelectedIndex=function(t){if(this.validatedIndex_(t),!this.adapter.isSelectableItemAtIndex(t))throw new Error("MDCMenuFoundation: No selection group at specified index.");var n=this.adapter.getSelectedSiblingOfItemAtIndex(t);n>=0&&(this.adapter.removeAttributeFromElementAtIndex(n,I.ARIA_CHECKED_ATTR),this.adapter.removeClassFromElementAtIndex(n,x.MENU_SELECTED_LIST_ITEM)),this.adapter.addClassToElementAtIndex(t,x.MENU_SELECTED_LIST_ITEM),this.adapter.addAttributeToElementAtIndex(t,I.ARIA_CHECKED_ATTR,"true")},n.prototype.setEnabled=function(t,n){this.validatedIndex_(t),n?(this.adapter.removeClassFromElementAtIndex(t,d.LIST_ITEM_DISABLED_CLASS),this.adapter.addAttributeToElementAtIndex(t,I.ARIA_DISABLED_ATTR,"false")):(this.adapter.addClassToElementAtIndex(t,d.LIST_ITEM_DISABLED_CLASS),this.adapter.addAttributeToElementAtIndex(t,I.ARIA_DISABLED_ATTR,"true"))},n.prototype.validatedIndex_=function(t){var n=this.adapter.getMenuItemCount();if(!(t>=0&&t<n))throw new Error("MDCMenuFoundation: No list item at specified index.")},n}(u),C=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return e(n,t),n.attachTo=function(t){return new n(t)},n.prototype.initialize=function(t,n){void 0===t&&(t=function(t){return new E(t)}),void 0===n&&(n=function(t){return new f(t)}),this.menuSurfaceFactory_=t,this.listFactory_=n},n.prototype.initialSyncWithDOM=function(){var t=this;this.menuSurface_=this.menuSurfaceFactory_(this.root);var n=this.root.querySelector(I.LIST_SELECTOR);n?(this.list_=this.listFactory_(n),this.list_.wrapFocus=!0):this.list_=null,this.handleKeydown_=function(n){return t.foundation.handleKeydown(n)},this.handleItemAction_=function(n){return t.foundation.handleItemAction(t.items[n.detail.index])},this.handleMenuSurfaceOpened_=function(){return t.foundation.handleMenuSurfaceOpened()},this.menuSurface_.listen(w.strings.OPENED_EVENT,this.handleMenuSurfaceOpened_),this.listen("keydown",this.handleKeydown_),this.listen(l.strings.ACTION_EVENT,this.handleItemAction_)},n.prototype.destroy=function(){this.list_&&this.list_.destroy(),this.menuSurface_.destroy(),this.menuSurface_.unlisten(w.strings.OPENED_EVENT,this.handleMenuSurfaceOpened_),this.unlisten("keydown",this.handleKeydown_),this.unlisten(l.strings.ACTION_EVENT,this.handleItemAction_),t.prototype.destroy.call(this)},Object.defineProperty(n.prototype,"open",{get:function(){return this.menuSurface_.isOpen()},set:function(t){t?this.menuSurface_.open():this.menuSurface_.close()},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"wrapFocus",{get:function(){return!!this.list_&&this.list_.wrapFocus},set:function(t){this.list_&&(this.list_.wrapFocus=t)},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"hasTypeahead",{set:function(t){this.list_&&(this.list_.hasTypeahead=t)},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"typeaheadInProgress",{get:function(){return!!this.list_&&this.list_.typeaheadInProgress},enumerable:!0,configurable:!0}),n.prototype.typeaheadMatchItem=function(t,n){return this.list_?this.list_.typeaheadMatchItem(t,n):-1},n.prototype.layout=function(){this.list_&&this.list_.layout()},Object.defineProperty(n.prototype,"items",{get:function(){return this.list_?this.list_.listElements:[]},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"quickOpen",{set:function(t){this.menuSurface_.quickOpen=t},enumerable:!0,configurable:!0}),n.prototype.setDefaultFocusState=function(t){this.foundation.setDefaultFocusState(t)},n.prototype.setAnchorCorner=function(t){this.menuSurface_.setAnchorCorner(t)},n.prototype.setAnchorMargin=function(t){this.menuSurface_.setAnchorMargin(t)},n.prototype.setSelectedIndex=function(t){this.foundation.setSelectedIndex(t)},n.prototype.setEnabled=function(t,n){this.foundation.setEnabled(t,n)},n.prototype.getOptionByIndex=function(t){return t<this.items.length?this.items[t]:null},n.prototype.getPrimaryTextAtIndex=function(t){var n=this.getOptionByIndex(t);return n&&this.list_&&this.list_.getPrimaryText(n)||""},n.prototype.setFixedPosition=function(t){this.menuSurface_.setFixedPosition(t)},n.prototype.setIsHoisted=function(t){this.menuSurface_.setIsHoisted(t)},n.prototype.setAbsolutePosition=function(t,n){this.menuSurface_.setAbsolutePosition(t,n)},n.prototype.setAnchorElement=function(t){this.menuSurface_.anchorElement=t},n.prototype.getDefaultFoundation=function(){var t=this;return new A({addClassToElementAtIndex:function(n,o){t.items[n].classList.add(o)},removeClassFromElementAtIndex:function(n,o){t.items[n].classList.remove(o)},addAttributeToElementAtIndex:function(n,o,i){t.items[n].setAttribute(o,i)},removeAttributeFromElementAtIndex:function(n,o){t.items[n].removeAttribute(o)},elementContainsClass:function(t,n){return t.classList.contains(n)},closeSurface:function(n){return t.menuSurface_.close(n)},getElementIndex:function(n){return t.items.indexOf(n)},notifySelected:function(n){return t.emit(I.SELECTED_EVENT,{index:n.index,item:t.items[n.index]})},getMenuItemCount:function(){return t.items.length},focusItemAtIndex:function(n){return t.items[n].focus()},focusListRoot:function(){return t.root.querySelector(I.LIST_SELECTOR).focus()},isSelectableItemAtIndex:function(n){return!!a(t.items[n],"."+x.MENU_SELECTION_GROUP)},getSelectedSiblingOfItemAtIndex:function(n){var o=a(t.items[n],"."+x.MENU_SELECTION_GROUP).querySelector("."+x.MENU_SELECTED_LIST_ITEM);return o?t.items.indexOf(o):-1}})},n}(s);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */const S=class{constructor(n){t(this,n)}menuSurfaceClosedHandler(){this.opened=!1}componentDidLoad(){this.menu=new C(this.el),function(t){new E(t)}(this.el)}render(){return this.menu&&this.opened&&(this.menu.open=!0),i({classes:{"mdc-menu":!0,"mdc-menu-surface":!0}},n("slot",null))}get el(){return o(this)}};S.style=".mdc-menu-surface{display:none;position:absolute;box-sizing:border-box;max-width:calc(100vw - 32px);max-height:calc(100vh - 32px);margin:0;padding:0;transform:scale(1);transform-origin:top left;opacity:0;overflow:auto;will-change:transform, opacity;z-index:8;transition:opacity 0.03s linear, transform 0.12s cubic-bezier(0, 0, 0.2, 1);box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);background-color:#fff;background-color:var(--mdc-theme-surface, #fff);color:#000;color:var(--mdc-theme-on-surface, #000);border-radius:4px;border-radius:var(--mdc-shape-medium, 4px);transform-origin-left:top left;transform-origin-right:top right}.mdc-menu-surface:focus{outline:none}.mdc-menu-surface--open{display:inline-block;transform:scale(1);opacity:1}.mdc-menu-surface--animating-open{display:inline-block;transform:scale(0.8);opacity:0}.mdc-menu-surface--animating-closed{display:inline-block;opacity:0;transition:opacity 0.075s linear}[dir=rtl] .mdc-menu-surface,.mdc-menu-surface[dir=rtl]{transform-origin-left:top right;transform-origin-right:top left}.mdc-menu-surface--anchor{position:relative;overflow:visible}.mdc-menu-surface--fixed{position:fixed}.mdc-menu-surface--fullwidth{width:100%}";const N=class{constructor(n){t(this,n),this.type="button",this.disabled=!1,this.noRipple=!1}connectedCallback(){const{el:t}=this;!function(t,n){t.package="pro",h("pro",n)}(t,{strict:{el:t,packages:["loc"]}})}render(){const{type:t,disabled:o,kind:i,noRipple:e}=this,r={type:t,disabled:o,noRipple:e,kind:i},c=Object.assign(Object.assign({},function(t){return{[m[t]]:!!m[t]}}(this.color)),{"uni-button":!0});return b(n("uni-button-mat",Object.assign({},r,{class:c}),n("slot",null)))}get el(){return o(this)}};N.style='.uni-button .mdc-button{font-family:Roboto, "Helvetica Neue", sans-serif;text-transform:none}.uni-button .mdc-button:not(:disabled){color:#000;color:var(--uni-color-default, #000)}.uni-button .mdc-button .mdc-button__ripple::before,.uni-button .mdc-button .mdc-button__ripple::after{background-color:#000;background-color:var(--uni-color-default, #000)}@supports not (-ms-ime-align: auto){.uni-button .mdc-button::before,.uni-button .mdc-button::after{background-color:#000;background-color:var(--uni-color-default, #000)}}@supports not (-ms-ime-align: auto){.uni-button .mdc-button--raised:not(:disabled),.uni-button .mdc-button--unelevated:not(:disabled){background-color:#fff;background-color:var(--uni-color-default-on, #fff)}}.uni-color-primary .mdc-button:not(:disabled){color:#3f51b5;color:var(--uni-color-primary, #3f51b5)}.uni-color-secondary .mdc-button:not(:disabled){color:#018786;color:var(--uni-color-secondary, #018786)}.uni-color-accent .mdc-button:not(:disabled){color:#ff4081;color:var(--uni-color-accent, #ff4081)}.uni-color-warn .mdc-button:not(:disabled){color:#f44336;color:var(--uni-color-warn, #f44336)}.uni-color-primary .mdc-button--raised:not(:disabled),.uni-color-primary .mdc-button--unelevated:not(:disabled){background-color:#3f51b5;background-color:var(--uni-color-primary, #3f51b5)}.uni-color-secondary .mdc-button--raised:not(:disabled),.uni-color-secondary .mdc-button--unelevated:not(:disabled){background-color:#018786;background-color:var(--uni-color-secondary, #018786)}.uni-color-accent .mdc-button--raised:not(:disabled),.uni-color-accent .mdc-button--unelevated:not(:disabled){background-color:#ff4081;background-color:var(--uni-color-accent, #ff4081)}.uni-color-warn .mdc-button--raised:not(:disabled),.uni-color-warn .mdc-button--unelevated:not(:disabled){background-color:#f44336;background-color:var(--uni-color-warn, #f44336)}@supports not (-ms-ime-align: auto){.uni-color-primary .mdc-button--raised:not(:disabled),.uni-color-primary .mdc-button--unelevated:not(:disabled){background-color:var(--uni-color-primary, #3f51b5)}}@supports not (-ms-ime-align: auto){.uni-color-secondary .mdc-button--raised:not(:disabled),.uni-color-secondary .mdc-button--unelevated:not(:disabled){background-color:var(--uni-color-secondary, #018786)}}@supports not (-ms-ime-align: auto){.uni-color-accent .mdc-button--raised:not(:disabled),.uni-color-accent .mdc-button--unelevated:not(:disabled){background-color:var(--uni-color-accent, #ff4081)}}@supports not (-ms-ime-align: auto){.uni-color-warn .mdc-button--raised:not(:disabled),.uni-color-warn .mdc-button--unelevated:not(:disabled){background-color:var(--uni-color-warn, #f44336)}}.uni-color-primary .mdc-button--raised:not(:disabled),.uni-color-primary .mdc-button--unelevated:not(:disabled){color:#fff;color:var(--uni-color-primary-on, #fff)}.uni-color-secondary .mdc-button--raised:not(:disabled),.uni-color-secondary .mdc-button--unelevated:not(:disabled){color:#fff;color:var(--uni-color-secondary-on, #fff)}.uni-color-accent .mdc-button--raised:not(:disabled),.uni-color-accent .mdc-button--unelevated:not(:disabled){color:#fff;color:var(--uni-color-accent-on, #fff)}.uni-color-warn .mdc-button--raised:not(:disabled),.uni-color-warn .mdc-button--unelevated:not(:disabled){color:#fff;color:var(--uni-color-warn-on, #fff)}.uni-color-primary .mdc-button .mdc-button__ripple::before,.uni-color-primary .mdc-button .mdc-button__ripple::after{background-color:#3f51b5;background-color:var(--uni-color-primary, #3f51b5)}.uni-color-secondary .mdc-button .mdc-button__ripple::before,.uni-color-secondary .mdc-button .mdc-button__ripple::after{background-color:#018786;background-color:var(--uni-color-secondary, #018786)}.uni-color-accent .mdc-button .mdc-button__ripple::before,.uni-color-accent .mdc-button .mdc-button__ripple::after{background-color:#ff4081;background-color:var(--uni-color-accent, #ff4081)}.uni-color-warn .mdc-button .mdc-button__ripple::before,.uni-color-warn .mdc-button .mdc-button__ripple::after{background-color:#f44336;background-color:var(--uni-color-warn, #f44336)}.uni-color-primary .mdc-button--raised .mdc-button__ripple::before,.uni-color-primary .mdc-button--raised .mdc-button__ripple::after,.uni-color-primary .mdc-button--unelevated .mdc-button__ripple::before,.uni-color-primary .mdc-button--unelevated .mdc-button__ripple::after{background-color:#fff;background-color:var(--uni-color-primary-on, #fff)}.uni-color-secondary .mdc-button--raised .mdc-button__ripple::before,.uni-color-secondary .mdc-button--raised .mdc-button__ripple::after,.uni-color-secondary .mdc-button--unelevated .mdc-button__ripple::before,.uni-color-secondary .mdc-button--unelevated .mdc-button__ripple::after{background-color:#fff;background-color:var(--uni-color-secondary-on, #fff)}.uni-color-accent .mdc-button--raised .mdc-button__ripple::before,.uni-color-accent .mdc-button--raised .mdc-button__ripple::after,.uni-color-accent .mdc-button--unelevated .mdc-button__ripple::before,.uni-color-accent .mdc-button--unelevated .mdc-button__ripple::after{background-color:#fff;background-color:var(--uni-color-accent-on, #fff)}.uni-color-warn .mdc-button--raised .mdc-button__ripple::before,.uni-color-warn .mdc-button--raised .mdc-button__ripple::after,.uni-color-warn .mdc-button--unelevated .mdc-button__ripple::before,.uni-color-warn .mdc-button--unelevated .mdc-button__ripple::after{background-color:#fff;background-color:var(--uni-color-warn-on, #fff)}';export{N as U,S as a}