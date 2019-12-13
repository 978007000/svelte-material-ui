import{S as t,i as e,s as i,r,h as n,J as a,o,K as c,t as s,f as d,V as p,U as u,W as l,a as f,p as m,y as h,c as _,e as g,b as v,d as b,g as y,u as A,j as C,k as T,l as E,m as O,q as S}from"./index.4dabf106.js";import{s as I}from"./style-inject.es.29d15445.js";import{e as w,f as D,u as R}from"./useActions.599db06f.js";import{R as H}from"./bare.c8bf76a6.js";import"./Icon.1a379059.js";I('.mdc-icon-button{width:48px;height:48px;padding:12px;font-size:24px;display:inline-block;position:relative;box-sizing:border-box;border:none;outline:none;background-color:transparent;fill:currentColor;color:inherit;text-decoration:none;cursor:pointer;user-select:none}.mdc-icon-button img,.mdc-icon-button svg{width:24px;height:24px}.mdc-icon-button:disabled{color:rgba(0,0,0,.38);color:var(--mdc-theme-text-disabled-on-light,rgba(0,0,0,.38));cursor:default;pointer-events:none}.mdc-icon-button__icon{display:inline-block}.mdc-icon-button--on .mdc-icon-button__icon,.mdc-icon-button__icon.mdc-icon-button__icon--on{display:none}.mdc-icon-button--on .mdc-icon-button__icon.mdc-icon-button__icon--on{display:inline-block}@keyframes mdc-ripple-fg-radius-in{0%{animation-timing-function:cubic-bezier(.4,0,.2,1);transform:translate(var(--mdc-ripple-fg-translate-start,0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}}@keyframes mdc-ripple-fg-opacity-in{0%{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity,0)}}@keyframes mdc-ripple-fg-opacity-out{0%{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity,0)}to{opacity:0}}.mdc-ripple-surface--test-edge-var-bug{--mdc-ripple-surface-test-edge-var:1px solid #000;visibility:hidden}.mdc-ripple-surface--test-edge-var-bug:before{border:var(--mdc-ripple-surface-test-edge-var)}.mdc-icon-button{--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mdc-icon-button:after,.mdc-icon-button:before{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-icon-button:before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.mdc-icon-button.mdc-ripple-upgraded:before{transform:scale(var(--mdc-ripple-fg-scale,1))}.mdc-icon-button.mdc-ripple-upgraded:after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-icon-button.mdc-ripple-upgraded--unbounded:after{top:var(--mdc-ripple-top,0);left:var(--mdc-ripple-left,0)}.mdc-icon-button.mdc-ripple-upgraded--foreground-activation:after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-icon-button.mdc-ripple-upgraded--foreground-deactivation:after{animation:mdc-ripple-fg-opacity-out .15s;transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}.mdc-icon-button:after,.mdc-icon-button:before{top:0;left:0;width:100%;height:100%}.mdc-icon-button.mdc-ripple-upgraded:after,.mdc-icon-button.mdc-ripple-upgraded:before{top:var(--mdc-ripple-top,0);left:var(--mdc-ripple-left,0);width:var(--mdc-ripple-fg-size,100%);height:var(--mdc-ripple-fg-size,100%)}.mdc-icon-button.mdc-ripple-upgraded:after{width:var(--mdc-ripple-fg-size,100%);height:var(--mdc-ripple-fg-size,100%)}.mdc-icon-button:after,.mdc-icon-button:before{background-color:#000}.mdc-icon-button:hover:before{opacity:.04}.mdc-icon-button.mdc-ripple-upgraded--background-focused:before,.mdc-icon-button:not(.mdc-ripple-upgraded):focus:before{transition-duration:75ms;opacity:.12}.mdc-icon-button:not(.mdc-ripple-upgraded):after{transition:opacity .15s linear}.mdc-icon-button:not(.mdc-ripple-upgraded):active:after{transition-duration:75ms;opacity:.12}.mdc-icon-button.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.12}.mdc-ripple-surface{--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;-webkit-tap-highlight-color:rgba(0,0,0,0);position:relative;outline:none;overflow:hidden}.mdc-ripple-surface:after,.mdc-ripple-surface:before{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-ripple-surface:before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.mdc-ripple-surface.mdc-ripple-upgraded:before{transform:scale(var(--mdc-ripple-fg-scale,1))}.mdc-ripple-surface.mdc-ripple-upgraded:after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded:after{top:var(--mdc-ripple-top,0);left:var(--mdc-ripple-left,0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation:after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation:after{animation:mdc-ripple-fg-opacity-out .15s;transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}.mdc-ripple-surface:after,.mdc-ripple-surface:before{background-color:#000}.mdc-ripple-surface:hover:before{opacity:.04}.mdc-ripple-surface.mdc-ripple-upgraded--background-focused:before,.mdc-ripple-surface:not(.mdc-ripple-upgraded):focus:before{transition-duration:75ms;opacity:.12}.mdc-ripple-surface:not(.mdc-ripple-upgraded):after{transition:opacity .15s linear}.mdc-ripple-surface:not(.mdc-ripple-upgraded):active:after{transition-duration:75ms;opacity:.12}.mdc-ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.12}.mdc-ripple-surface:after,.mdc-ripple-surface:before{top:-50%;left:-50%;width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded:after{width:var(--mdc-ripple-fg-size,100%);height:var(--mdc-ripple-fg-size,100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]{overflow:visible}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]:after,.mdc-ripple-surface[data-mdc-ripple-is-unbounded]:before{top:0;left:0;width:100%;height:100%}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded:after,.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded:before{top:var(--mdc-ripple-top,0);left:var(--mdc-ripple-left,0);width:var(--mdc-ripple-fg-size,100%);height:var(--mdc-ripple-fg-size,100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded:after{width:var(--mdc-ripple-fg-size,100%);height:var(--mdc-ripple-fg-size,100%)}.mdc-ripple-surface--primary:after,.mdc-ripple-surface--primary:before{background-color:#ff3e00}@supports not (-ms-ime-align:auto){.mdc-ripple-surface--primary:after,.mdc-ripple-surface--primary:before{background-color:var(--mdc-theme-primary,#ff3e00)}}.mdc-ripple-surface--primary:hover:before{opacity:.04}.mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused:before,.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):focus:before{transition-duration:75ms;opacity:.12}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):after{transition:opacity .15s linear}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):active:after{transition-duration:75ms;opacity:.12}.mdc-ripple-surface--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.12}.mdc-ripple-surface--accent:after,.mdc-ripple-surface--accent:before{background-color:#676778}@supports not (-ms-ime-align:auto){.mdc-ripple-surface--accent:after,.mdc-ripple-surface--accent:before{background-color:var(--mdc-theme-secondary,#676778)}}.mdc-ripple-surface--accent:hover:before{opacity:.04}.mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused:before,.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):focus:before{transition-duration:75ms;opacity:.12}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):after{transition:opacity .15s linear}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):active:after{transition-duration:75ms;opacity:.12}.mdc-ripple-surface--accent.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.12}');
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var N=function(t,e){return(N=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])})(t,e)};function k(t,e){function i(){this.constructor=t}N(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}var F=function(){return(F=Object.assign||function(t){for(var e,i=1,r=arguments.length;i<r;i++)for(var n in e=arguments[i])Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}).apply(this,arguments)};function P(t,e){var i="function"==typeof Symbol&&t[Symbol.iterator];if(!i)return t;var r,n,a=i.call(t),o=[];try{for(;(void 0===e||e-- >0)&&!(r=a.next()).done;)o.push(r.value)}catch(t){n={error:t}}finally{try{r&&!r.done&&(i=a.return)&&i.call(a)}finally{if(n)throw n.error}}return o}
/**
 * @license
 * Copyright 2016 Google Inc.
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
var V,x=function(){function t(t){void 0===t&&(t={}),this.adapter_=t}return Object.defineProperty(t,"cssClasses",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{}},enumerable:!0,configurable:!0}),t.prototype.init=function(){},t.prototype.destroy=function(){},t}(),U=function(){function t(t,e){for(var i=[],r=2;r<arguments.length;r++)i[r-2]=arguments[r];this.root_=t,this.initialize.apply(this,function(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(P(arguments[e]));return t}(i)),this.foundation_=void 0===e?this.getDefaultFoundation():e,this.foundation_.init(),this.initialSyncWithDOM()}return t.attachTo=function(e){return new t(e,new x({}))},t.prototype.initialize=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e]},t.prototype.getDefaultFoundation=function(){throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class")},t.prototype.initialSyncWithDOM=function(){},t.prototype.destroy=function(){this.foundation_.destroy()},t.prototype.listen=function(t,e,i){this.root_.addEventListener(t,e,i)},t.prototype.unlisten=function(t,e,i){this.root_.removeEventListener(t,e,i)},t.prototype.emit=function(t,e,i){var r;void 0===i&&(i=!1),"function"==typeof CustomEvent?r=new CustomEvent(t,{bubbles:i,detail:e}):(r=document.createEvent("CustomEvent")).initCustomEvent(t,i,!1,e),this.root_.dispatchEvent(r)},t}();
/**
 * @license
 * Copyright 2016 Google Inc.
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
 */function z(t,e){if(void 0===t&&(t=window),void 0===e&&(e=!1),void 0===V||e){var i=!1;try{t.document.addEventListener("test",(function(){}),{get passive(){return i=!0}})}catch(t){}V=i}return!!V&&{passive:!0}}
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
/**
 * @license
 * Copyright 2016 Google Inc.
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
var M,B={BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation",ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded"},L={VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top"},G={DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,INITIAL_ORIGIN_SCALE:.6,PADDING:10,TAP_DELAY_MS:300};
/**
 * @license
 * Copyright 2016 Google Inc.
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
var j=["touchstart","pointerdown","mousedown","keydown"],$=["touchend","pointerup","mouseup","contextmenu"],q=[],X=function(t){function e(i){var r=t.call(this,F({},e.defaultAdapter,i))||this;return r.activationAnimationHasEnded_=!1,r.activationTimer_=0,r.fgDeactivationRemovalTimer_=0,r.fgScale_="0",r.frame_={width:0,height:0},r.initialSize_=0,r.layoutFrame_=0,r.maxRadius_=0,r.unboundedCoords_={left:0,top:0},r.activationState_=r.defaultActivationState_(),r.activationTimerCallback_=function(){r.activationAnimationHasEnded_=!0,r.runDeactivationUXLogicIfReady_()},r.activateHandler_=function(t){return r.activate_(t)},r.deactivateHandler_=function(){return r.deactivate_()},r.focusHandler_=function(){return r.handleFocus()},r.blurHandler_=function(){return r.handleBlur()},r.resizeHandler_=function(){return r.layout()},r}return k(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return B},enumerable:!0,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return L},enumerable:!0,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return G},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},browserSupportsCssVars:function(){return!0},computeBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},containsEventTarget:function(){return!0},deregisterDocumentInteractionHandler:function(){},deregisterInteractionHandler:function(){},deregisterResizeHandler:function(){},getWindowPageOffset:function(){return{x:0,y:0}},isSurfaceActive:function(){return!0},isSurfaceDisabled:function(){return!0},isUnbounded:function(){return!0},registerDocumentInteractionHandler:function(){},registerInteractionHandler:function(){},registerResizeHandler:function(){},removeClass:function(){},updateCssVariable:function(){}}},enumerable:!0,configurable:!0}),e.prototype.init=function(){var t=this,i=this.supportsPressRipple_();if(this.registerRootHandlers_(i),i){var r=e.cssClasses,n=r.ROOT,a=r.UNBOUNDED;requestAnimationFrame((function(){t.adapter_.addClass(n),t.adapter_.isUnbounded()&&(t.adapter_.addClass(a),t.layoutInternal_())}))}},e.prototype.destroy=function(){var t=this;if(this.supportsPressRipple_()){this.activationTimer_&&(clearTimeout(this.activationTimer_),this.activationTimer_=0,this.adapter_.removeClass(e.cssClasses.FG_ACTIVATION)),this.fgDeactivationRemovalTimer_&&(clearTimeout(this.fgDeactivationRemovalTimer_),this.fgDeactivationRemovalTimer_=0,this.adapter_.removeClass(e.cssClasses.FG_DEACTIVATION));var i=e.cssClasses,r=i.ROOT,n=i.UNBOUNDED;requestAnimationFrame((function(){t.adapter_.removeClass(r),t.adapter_.removeClass(n),t.removeCssVars_()}))}this.deregisterRootHandlers_(),this.deregisterDeactivationHandlers_()},e.prototype.activate=function(t){this.activate_(t)},e.prototype.deactivate=function(){this.deactivate_()},e.prototype.layout=function(){var t=this;this.layoutFrame_&&cancelAnimationFrame(this.layoutFrame_),this.layoutFrame_=requestAnimationFrame((function(){t.layoutInternal_(),t.layoutFrame_=0}))},e.prototype.setUnbounded=function(t){var i=e.cssClasses.UNBOUNDED;t?this.adapter_.addClass(i):this.adapter_.removeClass(i)},e.prototype.handleFocus=function(){var t=this;requestAnimationFrame((function(){return t.adapter_.addClass(e.cssClasses.BG_FOCUSED)}))},e.prototype.handleBlur=function(){var t=this;requestAnimationFrame((function(){return t.adapter_.removeClass(e.cssClasses.BG_FOCUSED)}))},e.prototype.supportsPressRipple_=function(){return this.adapter_.browserSupportsCssVars()},e.prototype.defaultActivationState_=function(){return{activationEvent:void 0,hasDeactivationUXRun:!1,isActivated:!1,isProgrammatic:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1}},e.prototype.registerRootHandlers_=function(t){var e=this;t&&(j.forEach((function(t){e.adapter_.registerInteractionHandler(t,e.activateHandler_)})),this.adapter_.isUnbounded()&&this.adapter_.registerResizeHandler(this.resizeHandler_)),this.adapter_.registerInteractionHandler("focus",this.focusHandler_),this.adapter_.registerInteractionHandler("blur",this.blurHandler_)},e.prototype.registerDeactivationHandlers_=function(t){var e=this;"keydown"===t.type?this.adapter_.registerInteractionHandler("keyup",this.deactivateHandler_):$.forEach((function(t){e.adapter_.registerDocumentInteractionHandler(t,e.deactivateHandler_)}))},e.prototype.deregisterRootHandlers_=function(){var t=this;j.forEach((function(e){t.adapter_.deregisterInteractionHandler(e,t.activateHandler_)})),this.adapter_.deregisterInteractionHandler("focus",this.focusHandler_),this.adapter_.deregisterInteractionHandler("blur",this.blurHandler_),this.adapter_.isUnbounded()&&this.adapter_.deregisterResizeHandler(this.resizeHandler_)},e.prototype.deregisterDeactivationHandlers_=function(){var t=this;this.adapter_.deregisterInteractionHandler("keyup",this.deactivateHandler_),$.forEach((function(e){t.adapter_.deregisterDocumentInteractionHandler(e,t.deactivateHandler_)}))},e.prototype.removeCssVars_=function(){var t=this,i=e.strings;Object.keys(i).forEach((function(e){0===e.indexOf("VAR_")&&t.adapter_.updateCssVariable(i[e],null)}))},e.prototype.activate_=function(t){var e=this;if(!this.adapter_.isSurfaceDisabled()){var i=this.activationState_;if(!i.isActivated){var r=this.previousActivationEvent_;if(!(r&&void 0!==t&&r.type!==t.type))i.isActivated=!0,i.isProgrammatic=void 0===t,i.activationEvent=t,i.wasActivatedByPointer=!i.isProgrammatic&&(void 0!==t&&("mousedown"===t.type||"touchstart"===t.type||"pointerdown"===t.type)),void 0!==t&&q.length>0&&q.some((function(t){return e.adapter_.containsEventTarget(t)}))?this.resetActivationState_():(void 0!==t&&(q.push(t.target),this.registerDeactivationHandlers_(t)),i.wasElementMadeActive=this.checkElementMadeActive_(t),i.wasElementMadeActive&&this.animateActivation_(),requestAnimationFrame((function(){q=[],i.wasElementMadeActive||void 0===t||" "!==t.key&&32!==t.keyCode||(i.wasElementMadeActive=e.checkElementMadeActive_(t),i.wasElementMadeActive&&e.animateActivation_()),i.wasElementMadeActive||(e.activationState_=e.defaultActivationState_())})))}}},e.prototype.checkElementMadeActive_=function(t){return void 0===t||"keydown"!==t.type||this.adapter_.isSurfaceActive()},e.prototype.animateActivation_=function(){var t=this,i=e.strings,r=i.VAR_FG_TRANSLATE_START,n=i.VAR_FG_TRANSLATE_END,a=e.cssClasses,o=a.FG_DEACTIVATION,c=a.FG_ACTIVATION,s=e.numbers.DEACTIVATION_TIMEOUT_MS;this.layoutInternal_();var d="",p="";if(!this.adapter_.isUnbounded()){var u=this.getFgTranslationCoordinates_(),l=u.startPoint,f=u.endPoint;d=l.x+"px, "+l.y+"px",p=f.x+"px, "+f.y+"px"}this.adapter_.updateCssVariable(r,d),this.adapter_.updateCssVariable(n,p),clearTimeout(this.activationTimer_),clearTimeout(this.fgDeactivationRemovalTimer_),this.rmBoundedActivationClasses_(),this.adapter_.removeClass(o),this.adapter_.computeBoundingRect(),this.adapter_.addClass(c),this.activationTimer_=setTimeout((function(){return t.activationTimerCallback_()}),s)},e.prototype.getFgTranslationCoordinates_=function(){var t,e=this.activationState_,i=e.activationEvent;return{startPoint:t={x:(t=e.wasActivatedByPointer?function(t,e,i){if(!t)return{x:0,y:0};var r,n,a=e.x,o=e.y,c=a+i.left,s=o+i.top;if("touchstart"===t.type){var d=t;r=d.changedTouches[0].pageX-c,n=d.changedTouches[0].pageY-s}else{var p=t;r=p.pageX-c,n=p.pageY-s}return{x:r,y:n}}(i,this.adapter_.getWindowPageOffset(),this.adapter_.computeBoundingRect()):{x:this.frame_.width/2,y:this.frame_.height/2}).x-this.initialSize_/2,y:t.y-this.initialSize_/2},endPoint:{x:this.frame_.width/2-this.initialSize_/2,y:this.frame_.height/2-this.initialSize_/2}}},e.prototype.runDeactivationUXLogicIfReady_=function(){var t=this,i=e.cssClasses.FG_DEACTIVATION,r=this.activationState_,n=r.hasDeactivationUXRun,a=r.isActivated;(n||!a)&&this.activationAnimationHasEnded_&&(this.rmBoundedActivationClasses_(),this.adapter_.addClass(i),this.fgDeactivationRemovalTimer_=setTimeout((function(){t.adapter_.removeClass(i)}),G.FG_DEACTIVATION_MS))},e.prototype.rmBoundedActivationClasses_=function(){var t=e.cssClasses.FG_ACTIVATION;this.adapter_.removeClass(t),this.activationAnimationHasEnded_=!1,this.adapter_.computeBoundingRect()},e.prototype.resetActivationState_=function(){var t=this;this.previousActivationEvent_=this.activationState_.activationEvent,this.activationState_=this.defaultActivationState_(),setTimeout((function(){return t.previousActivationEvent_=void 0}),e.numbers.TAP_DELAY_MS)},e.prototype.deactivate_=function(){var t=this,e=this.activationState_;if(e.isActivated){var i=F({},e);e.isProgrammatic?(requestAnimationFrame((function(){return t.animateDeactivation_(i)})),this.resetActivationState_()):(this.deregisterDeactivationHandlers_(),requestAnimationFrame((function(){t.activationState_.hasDeactivationUXRun=!0,t.animateDeactivation_(i),t.resetActivationState_()})))}},e.prototype.animateDeactivation_=function(t){var e=t.wasActivatedByPointer,i=t.wasElementMadeActive;(e||i)&&this.runDeactivationUXLogicIfReady_()},e.prototype.layoutInternal_=function(){var t=this;this.frame_=this.adapter_.computeBoundingRect();var i=Math.max(this.frame_.height,this.frame_.width);this.maxRadius_=this.adapter_.isUnbounded()?i:Math.sqrt(Math.pow(t.frame_.width,2)+Math.pow(t.frame_.height,2))+e.numbers.PADDING,this.initialSize_=Math.floor(i*e.numbers.INITIAL_ORIGIN_SCALE),this.fgScale_=""+this.maxRadius_/this.initialSize_,this.updateLayoutCssVars_()},e.prototype.updateLayoutCssVars_=function(){var t=e.strings,i=t.VAR_FG_SIZE,r=t.VAR_LEFT,n=t.VAR_TOP,a=t.VAR_FG_SCALE;this.adapter_.updateCssVariable(i,this.initialSize_+"px"),this.adapter_.updateCssVariable(a,this.fgScale_),this.adapter_.isUnbounded()&&(this.unboundedCoords_={left:Math.round(this.frame_.width/2-this.initialSize_/2),top:Math.round(this.frame_.height/2-this.initialSize_/2)},this.adapter_.updateCssVariable(r,this.unboundedCoords_.left+"px"),this.adapter_.updateCssVariable(n,this.unboundedCoords_.top+"px"))},e}(x),W=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.disabled=!1,e}return k(e,t),e.attachTo=function(t,i){void 0===i&&(i={isUnbounded:void 0});var r=new e(t);return void 0!==i.isUnbounded&&(r.unbounded=i.isUnbounded),r},e.createAdapter=function(t){return{addClass:function(e){return t.root_.classList.add(e)},browserSupportsCssVars:function(){return function(t,e){void 0===e&&(e=!1);var i=t.CSS,r=M;if("boolean"==typeof M&&!e)return M;if(!(i&&"function"==typeof i.supports))return!1;var n=i.supports("--css-vars","yes"),a=i.supports("(--css-vars: yes)")&&i.supports("color","#00000000");return r=!(!n&&!a)&&!function(t){var e=t.document,i=e.createElement("div");i.className="mdc-ripple-surface--test-edge-var-bug",e.head.appendChild(i);var r=t.getComputedStyle(i),n=null!==r&&"solid"===r.borderTopStyle;return i.parentNode&&i.parentNode.removeChild(i),n}(t),e||(M=r),r}(window)},computeBoundingRect:function(){return t.root_.getBoundingClientRect()},containsEventTarget:function(e){return t.root_.contains(e)},deregisterDocumentInteractionHandler:function(t,e){return document.documentElement.removeEventListener(t,e,z())},deregisterInteractionHandler:function(e,i){return t.root_.removeEventListener(e,i,z())},deregisterResizeHandler:function(t){return window.removeEventListener("resize",t)},getWindowPageOffset:function(){return{x:window.pageXOffset,y:window.pageYOffset}},isSurfaceActive:function(){return function(t,e){return(t.matches||t.webkitMatchesSelector||t.msMatchesSelector).call(t,e)}(t.root_,":active")},isSurfaceDisabled:function(){return Boolean(t.disabled)},isUnbounded:function(){return Boolean(t.unbounded)},registerDocumentInteractionHandler:function(t,e){return document.documentElement.addEventListener(t,e,z())},registerInteractionHandler:function(e,i){return t.root_.addEventListener(e,i,z())},registerResizeHandler:function(t){return window.addEventListener("resize",t)},removeClass:function(e){return t.root_.classList.remove(e)},updateCssVariable:function(e,i){return t.root_.style.setProperty(e,i)}}},Object.defineProperty(e.prototype,"unbounded",{get:function(){return Boolean(this.unbounded_)},set:function(t){this.unbounded_=Boolean(t),this.setUnbounded_()},enumerable:!0,configurable:!0}),e.prototype.activate=function(){this.foundation_.activate()},e.prototype.deactivate=function(){this.foundation_.deactivate()},e.prototype.layout=function(){this.foundation_.layout()},e.prototype.getDefaultFoundation=function(){return new X(e.createAdapter(this))},e.prototype.initialSyncWithDOM=function(){var t=this.root_;this.unbounded="mdcRippleIsUnbounded"in t.dataset},e.prototype.setUnbounded_=function(){this.foundation_.setUnbounded(Boolean(this.unbounded_))},e}(U),Y={ICON_BUTTON_ON:"mdc-icon-button--on",ROOT:"mdc-icon-button"},Z={ARIA_PRESSED:"aria-pressed",CHANGE_EVENT:"MDCIconButtonToggle:change"},J=function(t){function e(i){return t.call(this,F({},e.defaultAdapter,i))||this}return k(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return Y},enumerable:!0,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return Z},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},hasClass:function(){return!1},notifyChange:function(){},removeClass:function(){},setAttr:function(){}}},enumerable:!0,configurable:!0}),e.prototype.init=function(){this.adapter_.setAttr(Z.ARIA_PRESSED,""+this.isOn())},e.prototype.handleClick=function(){this.toggle(),this.adapter_.notifyChange({isOn:this.isOn()})},e.prototype.isOn=function(){return this.adapter_.hasClass(Y.ICON_BUTTON_ON)},e.prototype.toggle=function(t){void 0===t&&(t=!this.isOn()),t?this.adapter_.addClass(Y.ICON_BUTTON_ON):this.adapter_.removeClass(Y.ICON_BUTTON_ON),this.adapter_.setAttr(Z.ARIA_PRESSED,""+t)},e}(x),K=J.strings,Q=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.ripple_=e.createRipple_(),e}return k(e,t),e.attachTo=function(t){return new e(t)},e.prototype.initialSyncWithDOM=function(){var t=this;this.handleClick_=function(){return t.foundation_.handleClick()},this.listen("click",this.handleClick_)},e.prototype.destroy=function(){this.unlisten("click",this.handleClick_),this.ripple_.destroy(),t.prototype.destroy.call(this)},e.prototype.getDefaultFoundation=function(){var t=this;return new J({addClass:function(e){return t.root_.classList.add(e)},hasClass:function(e){return t.root_.classList.contains(e)},notifyChange:function(e){return t.emit(K.CHANGE_EVENT,e)},removeClass:function(e){return t.root_.classList.remove(e)},setAttr:function(e,i){return t.root_.setAttribute(e,i)}})},Object.defineProperty(e.prototype,"ripple",{get:function(){return this.ripple_},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"on",{get:function(){return this.foundation_.isOn()},set:function(t){this.foundation_.toggle(t)},enumerable:!0,configurable:!0}),e.prototype.createRipple_=function(){var t=new W(this.root_);return t.unbounded=!0,t},e}(U);function tt(t){let e,i,r,a,c,p;const u=t[16].default,l=_(u,t,t[15],null);let m=[{class:"\n      mdc-icon-button\n      "+t[2]+"\n      "+(t[0]?"mdc-icon-button--on":"")+"\n      "+("card:action"===t[10]?"mdc-card__action":"")+"\n      "+("card:action"===t[10]?"mdc-card__action--icon":"")+"\n      "+("top-app-bar:navigation"===t[10]?"mdc-top-app-bar__navigation-icon":"")+"\n      "+("top-app-bar:action"===t[10]?"mdc-top-app-bar__action-item":"")+"\n      "+("snackbar"===t[10]?"mdc-snackbar__dismiss":"")+"\n    "},{"aria-hidden":"true"},{"aria-pressed":t[0]},t[8]],h={};for(let t=0;t<m.length;t+=1)h=f(h,m[t]);return{c(){e=g("button"),l&&l.c(),this.h()},l(t){e=v(t,"BUTTON",{class:!0,"aria-hidden":!0,"aria-pressed":!0});var i=b(e);l&&l.l(i),i.forEach(d),this.h()},h(){y(e,h),p=A(e,"MDCIconButtonToggle:change",t[11])},m(o,s){n(o,e,s),l&&l.m(e,null),t[18](e),i=R.call(null,e,t[1])||{},r=t[9].call(null,e)||{},a=H.call(null,e,[t[3]&&!t[5],{unbounded:!0,color:t[4]}])||{},c=!0},p(t,r){l&&l.p&&32768&r[0]&&l.p(C(u,t,t[15],null),T(u,t[15],r,null)),y(e,E(m,[1029&r[0]&&{class:"\n      mdc-icon-button\n      "+t[2]+"\n      "+(t[0]?"mdc-icon-button--on":"")+"\n      "+("card:action"===t[10]?"mdc-card__action":"")+"\n      "+("card:action"===t[10]?"mdc-card__action--icon":"")+"\n      "+("top-app-bar:navigation"===t[10]?"mdc-top-app-bar__navigation-icon":"")+"\n      "+("top-app-bar:action"===t[10]?"mdc-top-app-bar__action-item":"")+"\n      "+("snackbar"===t[10]?"mdc-snackbar__dismiss":"")+"\n    "},{"aria-hidden":"true"},1&r[0]&&{"aria-pressed":t[0]},256&r[0]&&t[8]])),O(i.update)&&2&r[0]&&i.update.call(null,t[1]),O(a.update)&&56&r[0]&&a.update.call(null,[t[3]&&!t[5],{unbounded:!0,color:t[4]}])},i(t){c||(s(l,t),c=!0)},o(t){o(l,t),c=!1},d(n){n&&d(e),l&&l.d(n),t[18](null),i&&O(i.destroy)&&i.destroy(),r&&O(r.destroy)&&r.destroy(),a&&O(a.destroy)&&a.destroy(),p()}}}function et(t){let e,i,r,a,c,p;const u=t[16].default,l=_(u,t,t[15],null);let m=[{class:"\n      mdc-icon-button\n      "+t[2]+"\n      "+(t[0]?"mdc-icon-button--on":"")+"\n      "+("card:action"===t[10]?"mdc-card__action":"")+"\n      "+("card:action"===t[10]?"mdc-card__action--icon":"")+"\n      "+("top-app-bar:navigation"===t[10]?"mdc-top-app-bar__navigation-icon":"")+"\n      "+("top-app-bar:action"===t[10]?"mdc-top-app-bar__action-item":"")+"\n      "+("snackbar"===t[10]?"mdc-snackbar__dismiss":"")+"\n    "},{"aria-hidden":"true"},{"aria-pressed":t[0]},{href:t[6]},t[8]],h={};for(let t=0;t<m.length;t+=1)h=f(h,m[t]);return{c(){e=g("a"),l&&l.c(),this.h()},l(t){e=v(t,"A",{class:!0,"aria-hidden":!0,"aria-pressed":!0,href:!0});var i=b(e);l&&l.l(i),i.forEach(d),this.h()},h(){y(e,h),p=A(e,"MDCIconButtonToggle:change",t[11])},m(o,s){n(o,e,s),l&&l.m(e,null),t[17](e),i=R.call(null,e,t[1])||{},r=t[9].call(null,e)||{},a=H.call(null,e,[t[3]&&!t[5],{unbounded:!0,color:t[4]}])||{},c=!0},p(t,r){l&&l.p&&32768&r[0]&&l.p(C(u,t,t[15],null),T(u,t[15],r,null)),y(e,E(m,[1029&r[0]&&{class:"\n      mdc-icon-button\n      "+t[2]+"\n      "+(t[0]?"mdc-icon-button--on":"")+"\n      "+("card:action"===t[10]?"mdc-card__action":"")+"\n      "+("card:action"===t[10]?"mdc-card__action--icon":"")+"\n      "+("top-app-bar:navigation"===t[10]?"mdc-top-app-bar__navigation-icon":"")+"\n      "+("top-app-bar:action"===t[10]?"mdc-top-app-bar__action-item":"")+"\n      "+("snackbar"===t[10]?"mdc-snackbar__dismiss":"")+"\n    "},{"aria-hidden":"true"},1&r[0]&&{"aria-pressed":t[0]},64&r[0]&&{href:t[6]},256&r[0]&&t[8]])),O(i.update)&&2&r[0]&&i.update.call(null,t[1]),O(a.update)&&56&r[0]&&a.update.call(null,[t[3]&&!t[5],{unbounded:!0,color:t[4]}])},i(t){c||(s(l,t),c=!0)},o(t){o(l,t),c=!1},d(n){n&&d(e),l&&l.d(n),t[17](null),i&&O(i.destroy)&&i.destroy(),r&&O(r.destroy)&&r.destroy(),a&&O(a.destroy)&&a.destroy(),p()}}}function it(t){let e,i,p,u;const l=[et,tt],f=[];function m(t,e){return t[6]?0:1}return e=m(t),i=f[e]=l[e](t),{c(){i.c(),p=r()},l(t){i.l(t),p=r()},m(t,i){f[e].m(t,i),n(t,p,i),u=!0},p(t,r){let n=e;e=m(t),e===n?f[e].p(t,r):(a(),o(f[n],1,1,()=>{f[n]=null}),c(),i=f[e],i||(i=f[e]=l[e](t),i.c()),s(i,1),i.m(p.parentNode,p))},i(t){u||(s(i),u=!0)},o(t){o(i),u=!1},d(t){f[e].d(t),t&&d(p)}}}function rt(t,e,i){const r=D(S,["MDCIconButtonToggle:change"]);let n,a,{use:o=[]}=e,{class:c=""}=e,{ripple:s=!0}=e,{color:d=null}=e,{toggle:_=!1}=e,{pressed:g=!1}=e,{href:v=null}=e,b=p("SMUI:icon-button:context");u("SMUI:icon:context","icon-button");let y=null;l(()=>{a&&a.destroy()});let A,{$$slots:C={},$$scope:T}=e;return t.$set=t=>{i(14,e=f(f({},e),m(t))),"use"in t&&i(1,o=t.use),"class"in t&&i(2,c=t.class),"ripple"in t&&i(3,s=t.ripple),"color"in t&&i(4,d=t.color),"toggle"in t&&i(5,_=t.toggle),"pressed"in t&&i(0,g=t.pressed),"href"in t&&i(6,v=t.href),"$$scope"in t&&i(15,T=t.$$scope)},t.$$.update=()=>{i(8,A=w(e,["use","class","ripple","color","toggle","pressed","href"])),12457&t.$$.dirty[0]&&n&&_!==y&&(_?(i(12,a=new Q(n)),s||a.ripple.destroy(),i(12,a.on=g,a)):y&&(a&&a.destroy(),i(12,a=null)),i(13,y=_)),4097&t.$$.dirty[0]&&a&&a.on!==g&&i(12,a.on=g,a)},e=m(e),[g,o,c,s,d,_,v,n,A,r,b,function(t){i(0,g=t.detail.isOn)},a,y,e,T,C,function(t){h[t?"unshift":"push"](()=>{i(7,n=t)})},function(t){h[t?"unshift":"push"](()=>{i(7,n=t)})}]}class nt extends t{constructor(t){super(),e(this,t,rt,it,i,{use:1,class:2,ripple:3,color:4,toggle:5,pressed:0,href:6})}}export{nt as I,nt as a};