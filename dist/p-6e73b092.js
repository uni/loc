import{_ as t,a as n,e as i,M as r,b as e}from"./p-acecdfb5.js";import{m as u}from"./p-506dd586.js";import{a as o,M as s,b as c}from"./p-238c1d1d.js";var f,h={ANIMATING:"mdc-tab-scroller--animating",SCROLL_AREA_SCROLL:"mdc-tab-scroller__scroll-area--scroll",SCROLL_TEST:"mdc-tab-scroller__test"},a={AREA_SELECTOR:".mdc-tab-scroller__scroll-area",CONTENT_SELECTOR:".mdc-tab-scroller__scroll-content"},l=function(t){this.adapter=t},d=function(n){function i(){return null!==n&&n.apply(this,arguments)||this}return t(i,n),i.prototype.getScrollPositionRTL=function(){var t=this.adapter.getScrollAreaScrollLeft(),n=this.calculateScrollEdges_().right;return Math.round(n-t)},i.prototype.scrollToRTL=function(t){var n=this.calculateScrollEdges_(),i=this.adapter.getScrollAreaScrollLeft(),r=this.clampScrollValue_(n.right-t);return{finalScrollPosition:r,scrollDelta:r-i}},i.prototype.incrementScrollRTL=function(t){var n=this.adapter.getScrollAreaScrollLeft(),i=this.clampScrollValue_(n-t);return{finalScrollPosition:i,scrollDelta:i-n}},i.prototype.getAnimatingScrollPosition=function(t){return t},i.prototype.calculateScrollEdges_=function(){return{left:0,right:this.adapter.getScrollContentOffsetWidth()-this.adapter.getScrollAreaOffsetWidth()}},i.prototype.clampScrollValue_=function(t){var n=this.calculateScrollEdges_();return Math.min(Math.max(n.left,t),n.right)},i}(l),b=function(n){function i(){return null!==n&&n.apply(this,arguments)||this}return t(i,n),i.prototype.getScrollPositionRTL=function(t){var n=this.adapter.getScrollAreaScrollLeft();return Math.round(t-n)},i.prototype.scrollToRTL=function(t){var n=this.adapter.getScrollAreaScrollLeft(),i=this.clampScrollValue_(-t);return{finalScrollPosition:i,scrollDelta:i-n}},i.prototype.incrementScrollRTL=function(t){var n=this.adapter.getScrollAreaScrollLeft(),i=this.clampScrollValue_(n-t);return{finalScrollPosition:i,scrollDelta:i-n}},i.prototype.getAnimatingScrollPosition=function(t,n){return t-n},i.prototype.calculateScrollEdges_=function(){var t=this.adapter.getScrollContentOffsetWidth();return{left:this.adapter.getScrollAreaOffsetWidth()-t,right:0}},i.prototype.clampScrollValue_=function(t){var n=this.calculateScrollEdges_();return Math.max(Math.min(n.right,t),n.left)},i}(l),v=function(n){function i(){return null!==n&&n.apply(this,arguments)||this}return t(i,n),i.prototype.getScrollPositionRTL=function(t){var n=this.adapter.getScrollAreaScrollLeft();return Math.round(n-t)},i.prototype.scrollToRTL=function(t){var n=this.adapter.getScrollAreaScrollLeft(),i=this.clampScrollValue_(t);return{finalScrollPosition:i,scrollDelta:n-i}},i.prototype.incrementScrollRTL=function(t){var n=this.adapter.getScrollAreaScrollLeft(),i=this.clampScrollValue_(n+t);return{finalScrollPosition:i,scrollDelta:n-i}},i.prototype.getAnimatingScrollPosition=function(t,n){return t+n},i.prototype.calculateScrollEdges_=function(){return{left:this.adapter.getScrollContentOffsetWidth()-this.adapter.getScrollAreaOffsetWidth(),right:0}},i.prototype.clampScrollValue_=function(t){var n=this.calculateScrollEdges_();return Math.min(Math.max(n.right,t),n.left)},i}(l),g=function(r){function e(t){var i=r.call(this,n(n({},e.defaultAdapter),t))||this;return i.isAnimating_=!1,i}return t(e,r),Object.defineProperty(e,"cssClasses",{get:function(){return h},enumerable:!0,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return a},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{eventTargetMatchesSelector:function(){return!1},addClass:function(){},removeClass:function(){},addScrollAreaClass:function(){},setScrollAreaStyleProperty:function(){},setScrollContentStyleProperty:function(){},getScrollContentStyleValue:function(){return""},setScrollAreaScrollLeft:function(){},getScrollAreaScrollLeft:function(){return 0},getScrollContentOffsetWidth:function(){return 0},getScrollAreaOffsetWidth:function(){return 0},computeScrollAreaClientRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},computeScrollContentClientRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},computeHorizontalScrollbarHeight:function(){return 0}}},enumerable:!0,configurable:!0}),e.prototype.init=function(){var t=this.adapter.computeHorizontalScrollbarHeight();this.adapter.setScrollAreaStyleProperty("margin-bottom",-t+"px"),this.adapter.addScrollAreaClass(e.cssClasses.SCROLL_AREA_SCROLL)},e.prototype.getScrollPosition=function(){if(this.isRTL_())return this.computeCurrentScrollPositionRTL_();var t=this.calculateCurrentTranslateX_();return this.adapter.getScrollAreaScrollLeft()-t},e.prototype.handleInteraction=function(){this.isAnimating_&&this.stopScrollAnimation_()},e.prototype.handleTransitionEnd=function(t){this.isAnimating_&&this.adapter.eventTargetMatchesSelector(t.target,e.strings.CONTENT_SELECTOR)&&(this.isAnimating_=!1,this.adapter.removeClass(e.cssClasses.ANIMATING))},e.prototype.incrementScroll=function(t){0!==t&&this.animate_(this.getIncrementScrollOperation_(t))},e.prototype.incrementScrollImmediate=function(t){if(0!==t){var n=this.getIncrementScrollOperation_(t);0!==n.scrollDelta&&(this.stopScrollAnimation_(),this.adapter.setScrollAreaScrollLeft(n.finalScrollPosition))}},e.prototype.scrollTo=function(t){if(this.isRTL_())return this.scrollToRTL_(t);this.scrollTo_(t)},e.prototype.getRTLScroller=function(){return this.rtlScrollerInstance_||(this.rtlScrollerInstance_=this.rtlScrollerFactory_()),this.rtlScrollerInstance_},e.prototype.calculateCurrentTranslateX_=function(){var t=this.adapter.getScrollContentStyleValue("transform");if("none"===t)return 0;var n=/\((.+?)\)/.exec(t);if(!n)return 0;var r=i(n[1].split(","),6);return parseFloat(r[4])},e.prototype.clampScrollValue_=function(t){var n=this.calculateScrollEdges_();return Math.min(Math.max(n.left,t),n.right)},e.prototype.computeCurrentScrollPositionRTL_=function(){var t=this.calculateCurrentTranslateX_();return this.getRTLScroller().getScrollPositionRTL(t)},e.prototype.calculateScrollEdges_=function(){return{left:0,right:this.adapter.getScrollContentOffsetWidth()-this.adapter.getScrollAreaOffsetWidth()}},e.prototype.scrollTo_=function(t){var n=this.getScrollPosition(),i=this.clampScrollValue_(t);this.animate_({finalScrollPosition:i,scrollDelta:i-n})},e.prototype.scrollToRTL_=function(t){var n=this.getRTLScroller().scrollToRTL(t);this.animate_(n)},e.prototype.getIncrementScrollOperation_=function(t){if(this.isRTL_())return this.getRTLScroller().incrementScrollRTL(t);var n=this.getScrollPosition(),i=this.clampScrollValue_(t+n);return{finalScrollPosition:i,scrollDelta:i-n}},e.prototype.animate_=function(t){var n=this;0!==t.scrollDelta&&(this.stopScrollAnimation_(),this.adapter.setScrollAreaScrollLeft(t.finalScrollPosition),this.adapter.setScrollContentStyleProperty("transform","translateX("+t.scrollDelta+"px)"),this.adapter.computeScrollAreaClientRect(),requestAnimationFrame((function(){n.adapter.addClass(e.cssClasses.ANIMATING),n.adapter.setScrollContentStyleProperty("transform","none")})),this.isAnimating_=!0)},e.prototype.stopScrollAnimation_=function(){this.isAnimating_=!1;var t=this.getAnimatingScrollPosition_();this.adapter.removeClass(e.cssClasses.ANIMATING),this.adapter.setScrollContentStyleProperty("transform","translateX(0px)"),this.adapter.setScrollAreaScrollLeft(t)},e.prototype.getAnimatingScrollPosition_=function(){var t=this.calculateCurrentTranslateX_(),n=this.adapter.getScrollAreaScrollLeft();return this.isRTL_()?this.getRTLScroller().getAnimatingScrollPosition(n,t):n-t},e.prototype.rtlScrollerFactory_=function(){var t=this.adapter.getScrollAreaScrollLeft();this.adapter.setScrollAreaScrollLeft(t-1);var n=this.adapter.getScrollAreaScrollLeft();if(n<0)return this.adapter.setScrollAreaScrollLeft(t),new b(this.adapter);var i=this.adapter.computeScrollAreaClientRect(),r=this.adapter.computeScrollContentClientRect(),e=Math.round(r.right-i.right);return this.adapter.setScrollAreaScrollLeft(t),e===n?new v(this.adapter):new d(this.adapter)},e.prototype.isRTL_=function(){return"rtl"===this.adapter.getScrollContentStyleValue("direction")},e}(r),m=function(n){function i(){return null!==n&&n.apply(this,arguments)||this}return t(i,n),i.attachTo=function(t){return new i(t)},i.prototype.initialize=function(){this.area_=this.root.querySelector(g.strings.AREA_SELECTOR),this.content_=this.root.querySelector(g.strings.CONTENT_SELECTOR)},i.prototype.initialSyncWithDOM=function(){var t=this;this.handleInteraction_=function(){return t.foundation.handleInteraction()},this.handleTransitionEnd_=function(n){return t.foundation.handleTransitionEnd(n)},this.area_.addEventListener("wheel",this.handleInteraction_,o()),this.area_.addEventListener("touchstart",this.handleInteraction_,o()),this.area_.addEventListener("pointerdown",this.handleInteraction_,o()),this.area_.addEventListener("mousedown",this.handleInteraction_,o()),this.area_.addEventListener("keydown",this.handleInteraction_,o()),this.content_.addEventListener("transitionend",this.handleTransitionEnd_)},i.prototype.destroy=function(){n.prototype.destroy.call(this),this.area_.removeEventListener("wheel",this.handleInteraction_,o()),this.area_.removeEventListener("touchstart",this.handleInteraction_,o()),this.area_.removeEventListener("pointerdown",this.handleInteraction_,o()),this.area_.removeEventListener("mousedown",this.handleInteraction_,o()),this.area_.removeEventListener("keydown",this.handleInteraction_,o()),this.content_.removeEventListener("transitionend",this.handleTransitionEnd_)},i.prototype.getDefaultFoundation=function(){var t=this;return new g({eventTargetMatchesSelector:function(t,n){return u(t,n)},addClass:function(n){return t.root.classList.add(n)},removeClass:function(n){return t.root.classList.remove(n)},addScrollAreaClass:function(n){return t.area_.classList.add(n)},setScrollAreaStyleProperty:function(n,i){return t.area_.style.setProperty(n,i)},setScrollContentStyleProperty:function(n,i){return t.content_.style.setProperty(n,i)},getScrollContentStyleValue:function(n){return window.getComputedStyle(t.content_).getPropertyValue(n)},setScrollAreaScrollLeft:function(n){return t.area_.scrollLeft=n},getScrollAreaScrollLeft:function(){return t.area_.scrollLeft},getScrollContentOffsetWidth:function(){return t.content_.offsetWidth},getScrollAreaOffsetWidth:function(){return t.area_.offsetWidth},computeScrollAreaClientRect:function(){return t.area_.getBoundingClientRect()},computeScrollContentClientRect:function(){return t.content_.getBoundingClientRect()},computeHorizontalScrollbarHeight:function(){return function(t,n){if(void 0===n&&(n=!0),n&&void 0!==f)return f;var i=t.createElement("div");i.classList.add(h.SCROLL_TEST),t.body.appendChild(i);var r=i.offsetHeight-i.clientHeight;return t.body.removeChild(i),n&&(f=r),r}(document)}})},i.prototype.getScrollPosition=function(){return this.foundation.getScrollPosition()},i.prototype.getScrollContentWidth=function(){return this.content_.offsetWidth},i.prototype.incrementScroll=function(t){this.foundation.incrementScroll(t)},i.prototype.scrollTo=function(t){this.foundation.scrollTo(t)},i}(e),C={ACTIVE:"mdc-tab-indicator--active",FADE:"mdc-tab-indicator--fade",NO_TRANSITION:"mdc-tab-indicator--no-transition"},T={CONTENT_SELECTOR:".mdc-tab-indicator__content"},E=function(i){function r(t){return i.call(this,n(n({},r.defaultAdapter),t))||this}return t(r,i),Object.defineProperty(r,"cssClasses",{get:function(){return C},enumerable:!0,configurable:!0}),Object.defineProperty(r,"strings",{get:function(){return T},enumerable:!0,configurable:!0}),Object.defineProperty(r,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},computeContentClientRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},setContentStyleProperty:function(){}}},enumerable:!0,configurable:!0}),r.prototype.computeContentClientRect=function(){return this.adapter.computeContentClientRect()},r}(r),A=function(n){function i(){return null!==n&&n.apply(this,arguments)||this}return t(i,n),i.prototype.activate=function(){this.adapter.addClass(E.cssClasses.ACTIVE)},i.prototype.deactivate=function(){this.adapter.removeClass(E.cssClasses.ACTIVE)},i}(E),S=function(n){function i(){return null!==n&&n.apply(this,arguments)||this}return t(i,n),i.prototype.activate=function(t){if(t){var n=this.computeContentClientRect(),i=t.width/n.width,r=t.left-n.left;this.adapter.addClass(E.cssClasses.NO_TRANSITION),this.adapter.setContentStyleProperty("transform","translateX("+r+"px) scaleX("+i+")"),this.computeContentClientRect(),this.adapter.removeClass(E.cssClasses.NO_TRANSITION),this.adapter.addClass(E.cssClasses.ACTIVE),this.adapter.setContentStyleProperty("transform","")}else this.adapter.addClass(E.cssClasses.ACTIVE)},i.prototype.deactivate=function(){this.adapter.removeClass(E.cssClasses.ACTIVE)},i}(E),O=function(n){function i(){return null!==n&&n.apply(this,arguments)||this}return t(i,n),i.attachTo=function(t){return new i(t)},i.prototype.initialize=function(){this.content_=this.root.querySelector(E.strings.CONTENT_SELECTOR)},i.prototype.computeContentClientRect=function(){return this.foundation.computeContentClientRect()},i.prototype.getDefaultFoundation=function(){var t=this,n={addClass:function(n){return t.root.classList.add(n)},removeClass:function(n){return t.root.classList.remove(n)},computeContentClientRect:function(){return t.content_.getBoundingClientRect()},setContentStyleProperty:function(n,i){return t.content_.style.setProperty(n,i)}};return this.root.classList.contains(E.cssClasses.FADE)?new A(n):new S(n)},i.prototype.activate=function(t){this.foundation.activate(t)},i.prototype.deactivate=function(){this.foundation.deactivate()},i}(e),_={ACTIVE:"mdc-tab--active"},R={ARIA_SELECTED:"aria-selected",CONTENT_SELECTOR:".mdc-tab__content",INTERACTED_EVENT:"MDCTab:interacted",RIPPLE_SELECTOR:".mdc-tab__ripple",TABINDEX:"tabIndex",TAB_INDICATOR_SELECTOR:".mdc-tab-indicator"},p=function(i){function r(t){var e=i.call(this,n(n({},r.defaultAdapter),t))||this;return e.focusOnActivate_=!0,e}return t(r,i),Object.defineProperty(r,"cssClasses",{get:function(){return _},enumerable:!0,configurable:!0}),Object.defineProperty(r,"strings",{get:function(){return R},enumerable:!0,configurable:!0}),Object.defineProperty(r,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setAttr:function(){},activateIndicator:function(){},deactivateIndicator:function(){},notifyInteracted:function(){},getOffsetLeft:function(){return 0},getOffsetWidth:function(){return 0},getContentOffsetLeft:function(){return 0},getContentOffsetWidth:function(){return 0},focus:function(){}}},enumerable:!0,configurable:!0}),r.prototype.handleClick=function(){this.adapter.notifyInteracted()},r.prototype.isActive=function(){return this.adapter.hasClass(_.ACTIVE)},r.prototype.setFocusOnActivate=function(t){this.focusOnActivate_=t},r.prototype.activate=function(t){this.adapter.addClass(_.ACTIVE),this.adapter.setAttr(R.ARIA_SELECTED,"true"),this.adapter.setAttr(R.TABINDEX,"0"),this.adapter.activateIndicator(t),this.focusOnActivate_&&this.adapter.focus()},r.prototype.deactivate=function(){this.isActive()&&(this.adapter.removeClass(_.ACTIVE),this.adapter.setAttr(R.ARIA_SELECTED,"false"),this.adapter.setAttr(R.TABINDEX,"-1"),this.adapter.deactivateIndicator())},r.prototype.computeDimensions=function(){var t=this.adapter.getOffsetWidth(),n=this.adapter.getOffsetLeft(),i=this.adapter.getContentOffsetWidth(),r=this.adapter.getContentOffsetLeft();return{contentLeft:n+r,contentRight:n+r+i,rootLeft:n,rootRight:n+t}},r}(r),w=function(i){function r(){return null!==i&&i.apply(this,arguments)||this}return t(r,i),r.attachTo=function(t){return new r(t)},r.prototype.initialize=function(t,i){void 0===t&&(t=function(t,n){return new s(t,n)}),void 0===i&&(i=function(t){return new O(t)}),this.id=this.root.id;var r=this.root.querySelector(p.strings.RIPPLE_SELECTOR),e=n(n({},s.createAdapter(this)),{addClass:function(t){return r.classList.add(t)},removeClass:function(t){return r.classList.remove(t)},updateCssVariable:function(t,n){return r.style.setProperty(t,n)}}),u=new c(e);this.ripple_=t(this.root,u);var o=this.root.querySelector(p.strings.TAB_INDICATOR_SELECTOR);this.tabIndicator_=i(o),this.content_=this.root.querySelector(p.strings.CONTENT_SELECTOR)},r.prototype.initialSyncWithDOM=function(){var t=this;this.handleClick_=function(){return t.foundation.handleClick()},this.listen("click",this.handleClick_)},r.prototype.destroy=function(){this.unlisten("click",this.handleClick_),this.ripple_.destroy(),i.prototype.destroy.call(this)},r.prototype.getDefaultFoundation=function(){var t=this;return new p({setAttr:function(n,i){return t.root.setAttribute(n,i)},addClass:function(n){return t.root.classList.add(n)},removeClass:function(n){return t.root.classList.remove(n)},hasClass:function(n){return t.root.classList.contains(n)},activateIndicator:function(n){return t.tabIndicator_.activate(n)},deactivateIndicator:function(){return t.tabIndicator_.deactivate()},notifyInteracted:function(){return t.emit(p.strings.INTERACTED_EVENT,{tabId:t.id},!0)},getOffsetLeft:function(){return t.root.offsetLeft},getOffsetWidth:function(){return t.root.offsetWidth},getContentOffsetLeft:function(){return t.content_.offsetLeft},getContentOffsetWidth:function(){return t.content_.offsetWidth},focus:function(){return t.root.focus()}})},Object.defineProperty(r.prototype,"active",{get:function(){return this.foundation.isActive()},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"focusOnActivate",{set:function(t){this.foundation.setFocusOnActivate(t)},enumerable:!0,configurable:!0}),r.prototype.activate=function(t){this.foundation.activate(t)},r.prototype.deactivate=function(){this.foundation.deactivate()},r.prototype.computeIndicatorClientRect=function(){return this.tabIndicator_.computeContentClientRect()},r.prototype.computeDimensions=function(){return this.foundation.computeDimensions()},r.prototype.focus=function(){this.root.focus()},r}(e),I={ARROW_LEFT_KEY:"ArrowLeft",ARROW_RIGHT_KEY:"ArrowRight",END_KEY:"End",ENTER_KEY:"Enter",HOME_KEY:"Home",SPACE_KEY:"Space",TAB_ACTIVATED_EVENT:"MDCTabBar:activated",TAB_SCROLLER_SELECTOR:".mdc-tab-scroller",TAB_SELECTOR:".mdc-tab"},L={ARROW_LEFT_KEYCODE:37,ARROW_RIGHT_KEYCODE:39,END_KEYCODE:35,ENTER_KEYCODE:13,EXTRA_SCROLL_AMOUNT:20,HOME_KEYCODE:36,SPACE_KEYCODE:32},M=new Set;M.add(I.ARROW_LEFT_KEY),M.add(I.ARROW_RIGHT_KEY),M.add(I.END_KEY),M.add(I.HOME_KEY),M.add(I.ENTER_KEY),M.add(I.SPACE_KEY);var D=new Map;D.set(L.ARROW_LEFT_KEYCODE,I.ARROW_LEFT_KEY),D.set(L.ARROW_RIGHT_KEYCODE,I.ARROW_RIGHT_KEY),D.set(L.END_KEYCODE,I.END_KEY),D.set(L.HOME_KEYCODE,I.HOME_KEY),D.set(L.ENTER_KEYCODE,I.ENTER_KEY),D.set(L.SPACE_KEYCODE,I.SPACE_KEY);var y=function(i){function r(t){var e=i.call(this,n(n({},r.defaultAdapter),t))||this;return e.useAutomaticActivation_=!1,e}return t(r,i),Object.defineProperty(r,"strings",{get:function(){return I},enumerable:!0,configurable:!0}),Object.defineProperty(r,"numbers",{get:function(){return L},enumerable:!0,configurable:!0}),Object.defineProperty(r,"defaultAdapter",{get:function(){return{scrollTo:function(){},incrementScroll:function(){},getScrollPosition:function(){return 0},getScrollContentWidth:function(){return 0},getOffsetWidth:function(){return 0},isRTL:function(){return!1},setActiveTab:function(){},activateTabAtIndex:function(){},deactivateTabAtIndex:function(){},focusTabAtIndex:function(){},getTabIndicatorClientRectAtIndex:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},getTabDimensionsAtIndex:function(){return{rootLeft:0,rootRight:0,contentLeft:0,contentRight:0}},getPreviousActiveTabIndex:function(){return-1},getFocusedTabIndex:function(){return-1},getIndexOfTabById:function(){return-1},getTabListLength:function(){return 0},notifyTabActivated:function(){}}},enumerable:!0,configurable:!0}),r.prototype.setUseAutomaticActivation=function(t){this.useAutomaticActivation_=t},r.prototype.activateTab=function(t){var n,i=this.adapter.getPreviousActiveTabIndex();this.indexIsInRange_(t)&&t!==i&&(-1!==i&&(this.adapter.deactivateTabAtIndex(i),n=this.adapter.getTabIndicatorClientRectAtIndex(i)),this.adapter.activateTabAtIndex(t,n),this.scrollIntoView(t),this.adapter.notifyTabActivated(t))},r.prototype.handleKeyDown=function(t){var n=this.getKeyFromEvent_(t);if(void 0!==n)if(this.isActivationKey_(n)||t.preventDefault(),this.useAutomaticActivation_){if(this.isActivationKey_(n))return;var i=this.determineTargetFromKey_(this.adapter.getPreviousActiveTabIndex(),n);this.adapter.setActiveTab(i),this.scrollIntoView(i)}else{var r=this.adapter.getFocusedTabIndex();this.isActivationKey_(n)?this.adapter.setActiveTab(r):(i=this.determineTargetFromKey_(r,n),this.adapter.focusTabAtIndex(i),this.scrollIntoView(i))}},r.prototype.handleTabInteraction=function(t){this.adapter.setActiveTab(this.adapter.getIndexOfTabById(t.detail.tabId))},r.prototype.scrollIntoView=function(t){if(this.indexIsInRange_(t))return 0===t?this.adapter.scrollTo(0):t===this.adapter.getTabListLength()-1?this.adapter.scrollTo(this.adapter.getScrollContentWidth()):this.isRTL_()?this.scrollIntoViewRTL_(t):void this.scrollIntoView_(t)},r.prototype.determineTargetFromKey_=function(t,n){var i=this.isRTL_(),r=this.adapter.getTabListLength()-1,e=t;return n===I.END_KEY?e=r:n===I.ARROW_LEFT_KEY&&!i||n===I.ARROW_RIGHT_KEY&&i?e-=1:n===I.ARROW_RIGHT_KEY&&!i||n===I.ARROW_LEFT_KEY&&i?e+=1:e=0,e<0?e=r:e>r&&(e=0),e},r.prototype.calculateScrollIncrement_=function(t,n,i,r){var e=this.adapter.getTabDimensionsAtIndex(n),u=e.contentLeft-i-r+L.EXTRA_SCROLL_AMOUNT;return n<t?Math.min(e.contentRight-i-L.EXTRA_SCROLL_AMOUNT,0):Math.max(u,0)},r.prototype.calculateScrollIncrementRTL_=function(t,n,i,r,e){var u=this.adapter.getTabDimensionsAtIndex(n),o=e-u.contentLeft-i-L.EXTRA_SCROLL_AMOUNT;return n>t?Math.max(e-u.contentRight-i-r+L.EXTRA_SCROLL_AMOUNT,0):Math.min(o,0)},r.prototype.findAdjacentTabIndexClosestToEdge_=function(t,n,i,r){var e=n.rootLeft-i,u=n.rootRight-i-r,o=e+u;return e<0||o<0?t-1:u>0||o>0?t+1:-1},r.prototype.findAdjacentTabIndexClosestToEdgeRTL_=function(t,n,i,r,e){var u=e-n.rootLeft-r-i,o=e-n.rootRight-i,s=u+o;return u>0||s>0?t+1:o<0||s<0?t-1:-1},r.prototype.getKeyFromEvent_=function(t){return M.has(t.key)?t.key:D.get(t.keyCode)},r.prototype.isActivationKey_=function(t){return t===I.SPACE_KEY||t===I.ENTER_KEY},r.prototype.indexIsInRange_=function(t){return t>=0&&t<this.adapter.getTabListLength()},r.prototype.isRTL_=function(){return this.adapter.isRTL()},r.prototype.scrollIntoView_=function(t){var n=this.adapter.getScrollPosition(),i=this.adapter.getOffsetWidth(),r=this.adapter.getTabDimensionsAtIndex(t),e=this.findAdjacentTabIndexClosestToEdge_(t,r,n,i);if(this.indexIsInRange_(e)){var u=this.calculateScrollIncrement_(t,e,n,i);this.adapter.incrementScroll(u)}},r.prototype.scrollIntoViewRTL_=function(t){var n=this.adapter.getScrollPosition(),i=this.adapter.getOffsetWidth(),r=this.adapter.getTabDimensionsAtIndex(t),e=this.adapter.getScrollContentWidth(),u=this.findAdjacentTabIndexClosestToEdgeRTL_(t,r,n,i,e);if(this.indexIsInRange_(u)){var o=this.calculateScrollIncrementRTL_(t,u,n,i,e);this.adapter.incrementScroll(o)}},r}(r),x=y.strings,P=0,N=function(n){function i(){return null!==n&&n.apply(this,arguments)||this}return t(i,n),i.attachTo=function(t){return new i(t)},Object.defineProperty(i.prototype,"focusOnActivate",{set:function(t){this.tabList_.forEach((function(n){return n.focusOnActivate=t}))},enumerable:!0,configurable:!0}),Object.defineProperty(i.prototype,"useAutomaticActivation",{set:function(t){this.foundation.setUseAutomaticActivation(t)},enumerable:!0,configurable:!0}),i.prototype.initialize=function(t,n){void 0===t&&(t=function(t){return new w(t)}),void 0===n&&(n=function(t){return new m(t)}),this.tabList_=this.instantiateTabs_(t),this.tabScroller_=this.instantiateTabScroller_(n)},i.prototype.initialSyncWithDOM=function(){var t=this;this.handleTabInteraction_=function(n){return t.foundation.handleTabInteraction(n)},this.handleKeyDown_=function(n){return t.foundation.handleKeyDown(n)},this.listen(p.strings.INTERACTED_EVENT,this.handleTabInteraction_),this.listen("keydown",this.handleKeyDown_);for(var n=0;n<this.tabList_.length;n++)if(this.tabList_[n].active){this.scrollIntoView(n);break}},i.prototype.destroy=function(){n.prototype.destroy.call(this),this.unlisten(p.strings.INTERACTED_EVENT,this.handleTabInteraction_),this.unlisten("keydown",this.handleKeyDown_),this.tabList_.forEach((function(t){return t.destroy()})),this.tabScroller_&&this.tabScroller_.destroy()},i.prototype.getDefaultFoundation=function(){var t=this;return new y({scrollTo:function(n){return t.tabScroller_.scrollTo(n)},incrementScroll:function(n){return t.tabScroller_.incrementScroll(n)},getScrollPosition:function(){return t.tabScroller_.getScrollPosition()},getScrollContentWidth:function(){return t.tabScroller_.getScrollContentWidth()},getOffsetWidth:function(){return t.root.offsetWidth},isRTL:function(){return"rtl"===window.getComputedStyle(t.root).getPropertyValue("direction")},setActiveTab:function(n){return t.foundation.activateTab(n)},activateTabAtIndex:function(n,i){return t.tabList_[n].activate(i)},deactivateTabAtIndex:function(n){return t.tabList_[n].deactivate()},focusTabAtIndex:function(n){return t.tabList_[n].focus()},getTabIndicatorClientRectAtIndex:function(n){return t.tabList_[n].computeIndicatorClientRect()},getTabDimensionsAtIndex:function(n){return t.tabList_[n].computeDimensions()},getPreviousActiveTabIndex:function(){for(var n=0;n<t.tabList_.length;n++)if(t.tabList_[n].active)return n;return-1},getFocusedTabIndex:function(){var n=t.getTabElements_(),i=document.activeElement;return n.indexOf(i)},getIndexOfTabById:function(n){for(var i=0;i<t.tabList_.length;i++)if(t.tabList_[i].id===n)return i;return-1},getTabListLength:function(){return t.tabList_.length},notifyTabActivated:function(n){return t.emit(x.TAB_ACTIVATED_EVENT,{index:n},!0)}})},i.prototype.activateTab=function(t){this.foundation.activateTab(t)},i.prototype.scrollIntoView=function(t){this.foundation.scrollIntoView(t)},i.prototype.getTabElements_=function(){return[].slice.call(this.root.querySelectorAll(x.TAB_SELECTOR))},i.prototype.instantiateTabs_=function(t){return this.getTabElements_().map((function(n){return n.id=n.id||"mdc-tab-"+ ++P,t(n)}))},i.prototype.instantiateTabScroller_=function(t){var n=this.root.querySelector(x.TAB_SCROLLER_SELECTOR);return n?t(n):null},i}(e);function j(t){return new N(t)}function W(t){return new m(t)}function K(t){return new w(t)}function Y(t){return new O(t)}function H(){return{"mdc-tab-bar":!0}}function k(){return{"mdc-tab-scroller":!0}}function B(){return{"mdc-tab-scroller__scroll-area":!0}}function V(){return{"mdc-tab-scroller__scroll-content":!0}}function F(t){return{"mdc-tab":!0,"mdc-tab--active":!!t}}function X(){return{"mdc-tab__ripple":!0}}function G(){return{"mdc-tab__content":!0}}function z(t){return{"mdc-tab-indicator":!0,"mdc-tab-indicator--active":!!t}}function q(){return{"mdc-tab-indicator__content":!0,"mdc-tab-indicator__content--underline":!0}}export{H as a,K as b,F as c,Y as d,z as e,q as f,W as g,k as h,X as i,G as j,V as k,B as l,j as u}