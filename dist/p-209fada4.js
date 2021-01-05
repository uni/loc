var t=function(){function t(t,n){void 0===n&&(n={}),this.root=t,this.options=n,this.elFocusedBeforeTrapFocus=null}return t.prototype.trapFocus=function(){var t=this.getFocusableElements(this.root);if(0===t.length)throw new Error("FocusTrap: Element must have at least one focusable child.");this.elFocusedBeforeTrapFocus=document.activeElement instanceof HTMLElement?document.activeElement:null,this.wrapTabFocus(this.root,t),this.options.skipInitialFocus||this.focusInitialElement(t,this.options.initialFocusEl)},t.prototype.releaseFocus=function(){[].slice.call(this.root.querySelectorAll(".mdc-dom-focus-sentinel")).forEach((function(t){t.parentElement.removeChild(t)})),this.elFocusedBeforeTrapFocus&&this.elFocusedBeforeTrapFocus.focus()},t.prototype.wrapTabFocus=function(t,n){var i=this.createSentinel(),e=this.createSentinel();i.addEventListener("focus",(function(){n.length>0&&n[n.length-1].focus()})),e.addEventListener("focus",(function(){n.length>0&&n[0].focus()})),t.insertBefore(i,t.children[0]),t.appendChild(e)},t.prototype.focusInitialElement=function(t,n){var i=0;n&&(i=Math.max(t.indexOf(n),0)),t[i].focus()},t.prototype.getFocusableElements=function(t){return[].slice.call(t.querySelectorAll("[autofocus], [tabindex], a, input, textarea, select, button")).filter((function(t){var n="true"===t.getAttribute("aria-disabled")||null!=t.getAttribute("disabled")||null!=t.getAttribute("hidden")||"true"===t.getAttribute("aria-hidden"),i=t.tabIndex>=0&&t.getBoundingClientRect().width>0&&!t.classList.contains("mdc-dom-focus-sentinel")&&!n,e=!1;if(i){var u=getComputedStyle(t);e="none"===u.display||"hidden"===u.visibility}return i&&!e}))},t.prototype.createSentinel=function(){var t=document.createElement("div");return t.setAttribute("tabindex","0"),t.setAttribute("aria-hidden","true"),t.classList.add("mdc-dom-focus-sentinel"),t},t}();export{t as F}