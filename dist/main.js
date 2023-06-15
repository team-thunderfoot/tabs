(()=>{var e={226:(e,t,s)=>{e.exports=s(687)},687:(e,t,s)=>{"use strict";s.d(t,{default:()=>a});const a=class{_getElements(e){return"object"==typeof e?[e]:document.querySelectorAll(e)}hide(e){this._hideElements(this._getElements(e))}_hideElements(e){var t,s=e.length;for(t=0;t<s;t++)this._hideElement(e[t])}_hideElement(e){this._styleElement(e,"display","none")}show(e,t){var s=this._getElements(e);t&&this._hideElements(s),this._showElements(s)}_showElements(e){var t,s=e.length;for(t=0;t<s;t++)this._showElement(e[t])}_showElement(e){this._styleElement(e,"display","block")}addStyle(e,t,s){this._styleElements(this._getElements(e),t,s)}_styleElements(e,t,s){var a,i=e.length;for(a=0;a<i;a++)this._styleElement(e[a],t,s)}_styleElement(e,t,s){e.style.setProperty(t,s)}toggleShow(e){var t,s=this._getElements(e),a=s.length;for(t=0;t<a;t++)"none"==s[t].style.display?this._styleElement(s[t],"display","block"):this._styleElement(s[t],"display","none")}addClass(e,t){this._addClassElements(this._getElements(e),t)}_addClassElements(e,t){var s,a=e.length;for(s=0;s<a;s++)this._addClassElement(e[s],t)}_addClassElement(e,t){var s,a,i;for(a=e.className.split(" "),i=t.split(" "),s=0;s<i.length;s++)-1==a.indexOf(i[s])&&(e.className+=" "+i[s])}removeClass(e,t){this._removeClassElements(this._getElements(e),t)}_removeClassElements(e,t){var s,a=e.length;for(s=0;s<a;s++)this._removeClassElement(e[s],t)}_removeClassElement(e,t){var s,a,i;for(a=e.className.split(" "),i=t.split(" "),s=0;s<i.length;s++)for(;a.indexOf(i[s])>-1;)a.splice(a.indexOf(i[s]),1);e.className=a.join(" ")}toggleClass(e,t,s){this._toggleClassElements(this._getElements(e),t,s)}_toggleClassElements(e,t,s){var a,i=e.length;for(a=0;a<i;a++)this._toggleClassElement(e[a],t,s)}_toggleClassElement(e,t,s){var a,i,l,n,r,o,c;if(i=s||"",l=(a=t||"").split(" "),n=i.split(" "),o=e.className.split(" "),0==n.length){for(c=!0,r=0;r<l.length;r++)-1==o.indexOf(l[r])&&(c=!1);c?this._removeClassElement(e,a):this._addClassElement(e,a)}else{for(c=!0,r=0;r<l.length;r++)-1==o.indexOf(l[r])&&(c=!1);c?(this._removeClassElement(e,a),this._addClassElement(e,i)):(this._removeClassElement(e,i),this._addClassElement(e,a))}}getBrowser(e){switch(e){case"chrome":return-1!=navigator.userAgent.indexOf("Chrome")&&!navigator.userAgent.match(/edg/i)||navigator.userAgent.indexOf("CriOS")>=0;case"safari":return/^((?!chrome|android).)*safari/i.test(navigator.userAgent)&&!(navigator.userAgent.indexOf("CriOS")>=0);case"firefox":return"undefined"!=typeof InstallTrigger;case"ie":return!!document.documentMode;case"edge":return!(!navigator.userAgent.match(/edg/i)&&-1==navigator.userAgent.indexOf("Edge/"));default:return null}}getTypeDevice(e){var t=navigator.userAgent||navigator.vendor||window.opera;switch(e){case"touch":return"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0;case"android":return/android/i.test(t);case"ios":return"boolean"==typeof navigator.standalone;default:return null}}}}},t={};function s(a){var i=t[a];if(void 0!==i)return i.exports;var l=t[a]={exports:{}};return e[a](l,l.exports,s),l.exports}s.d=(e,t)=>{for(var a in t)s.o(t,a)&&!s.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";var e=s(226);const t=class{constructor(t){this.tabContainer=t.tabContainer,this.tabActive=t.tabActive,this.tabActiveClass=t.tabActiveClass,this.tabBodyActiveClass=t.tabBodyActiveClass,this.tabTrigger=t.tabTrigger,this.tabParent=t.tabParent,this.tabBody=t.tabBody,this.externalTrigger=t.externalTrigger,this.selectClass=t.selectClass,this.mediaQuerySelect=t.mediaQuerySelect,this.onChange=t.onChange,this.JSUTIL=new e.default,this.init(),this.events(),this.selectEvent=null,this.clickEvent=null}init(){this.selectEvent=this.setDefaultActiveTab()}events(){this.clickEvent=this.toggleTabs()}toggleTabs=()=>{document.querySelectorAll(`[${this.tabTrigger}]`).forEach((e=>{const t=e.getAttribute(this.tabTrigger),s=e.getAttribute(this.tabContainer);e.addEventListener("click",(e=>{this.handleClick(e,t,s)}))})),document.querySelectorAll(`[${this.externalTrigger}]`).forEach((e=>{const t=e.getAttribute(this.externalTrigger),s=e.getAttribute(this.tabContainer);e.addEventListener("click",(e=>{this.handleClick(e,t,s)}))})),this.onChange&&this.onChange(),window.addEventListener("resize",function(e,t){let s;return(...t)=>{const a=this;clearTimeout(s),s=setTimeout((()=>e.apply(a,t)),100)}}((e=>{window.innerWidth<this.mediaQuerySelect&&this.selectOnMobile()})))};setDefaultActiveTab(){document.querySelectorAll(`[${this.tabActive}]`).forEach((e=>{this.JSUTIL.addClass(e,this.tabActiveClass),this.JSUTIL.addClass(document.querySelector(`[${this.tabTrigger}="${e.id}"]`),this.tabBodyActiveClass)}))}handleClick(e,t,s){e.preventDefault(),this.hideTab(s),this.chageSelectValue(s,t);const a=document.getElementById(t),i=document.querySelector(`[${this.tabParent}='${t}']`);a&&i&&(this.JSUTIL.addClass(a,this.tabActiveClass),this.JSUTIL.addClass(i,this.tabBodyActiveClass))}hideTab(e){const t=document.getElementById(e);t.querySelectorAll(`[${this.tabBody}]`).forEach((e=>{this.JSUTIL.removeClass(e,this.tabActiveClass)})),t.querySelectorAll(`[${this.tabTrigger}]`).forEach((e=>{this.JSUTIL.removeClass(e,this.tabBodyActiveClass)}))}selectOnMobile(){const e=document.querySelectorAll(`.${this.selectClass}`);e&&e.forEach((e=>{e.addEventListener("change",(t=>{t.preventDefault();const s=document.querySelector(`[${this.tabBody}='${e.value}']`),a=document.querySelector(`[${this.tabParent}='${e.value}']`),i=e.getAttribute(this.tabContainer);this.hideTab(i),this.JSUTIL.addClass(s,this.tabActiveClass),this.JSUTIL.addClass(a,this.tabBodyActiveClass)}))}))}chageSelectValue(e,t){document.getElementById(e).querySelector("select").value=t}destroy(){document.querySelectorAll(`[${this.tabTrigger}]`).forEach((t=>{const s=t.getAttribute(this.tabTrigger);t.getAttribute(this.tabContainer),t.removeEventListener("click",this.clickEvent);const a=document.getElementById(s),i=document.querySelector(`[${this.tabParent}='${s}']`);if(a&&i){const t=new e.default;t.removeClass(a,this.tabActiveClass),t.removeClass(i,this.tabBodyActiveClass)}})),document.querySelectorAll(`[${this.externalTrigger}]`).forEach((e=>{e.removeEventListener("click",this.clickEvent)})),document.querySelectorAll(`.${this.selectClass}`).forEach((e=>{e.removeEventListener("change",this.selectEvent)})),this.clickEvent=null,this.selectEvent=null}},a=[{mobile:580},{tablets:810},{tabletm:1024},{tabletl:1300},{laptop:1570},{desktop:1700}];new class{constructor(){this.tabsA=null,this.tabsB=null,this.init(),this.events()}init(){const e=a.reduce(((e,t)=>Object.assign(e,t)),{});document.querySelectorAll(".js--tabs-a").forEach((s=>{this.tabsA=new t({tabContainer:"tf-ds-container",tabActive:"tf-ds-tab-a-active",tabActiveClass:"c--tabs-a__bd__item--is-active",tabBodyActiveClass:"c--tabs-a__hd__list-item__link--is-active",tabTrigger:"tf-ds-tab-to-open-a",tabParent:"tf-ds-tab-parent",tabBody:"tf-ds-tab-body-a",externalTrigger:"tf-ds-tab-external-open-a",selectClass:"js--select-item-a",mediaQuerySelect:e.tablets,onChange:()=>{}})})),document.querySelectorAll(".js--tabs-b").forEach((s=>{this.tabsB=new t({tabContainer:"tf-ds-container",tabActive:"tf-ds-tab-b-active",tabActiveClass:"c--tabs-b__bd__item--is-active",tabBodyActiveClass:"c--tabs-b__hd__list-item__link--is-active",tabTrigger:"tf-ds-tab-to-open-b",tabParent:"tf-ds-tab-parent",tabBody:"tf-ds-tab-body-b",externalTrigger:"tf-ds-tab-external-open-b",selectClass:"js--select-item-b",mediaQuerySelect:e.tabletm,onChange:()=>{}})})),document.querySelector(".js--tabs-destroy").addEventListener("click",(e=>{e.preventDefault(),this.destroyTabs()}))}events(){}destroyTabs(){this.tabsA&&(this.tabsA.destroy(),this.tabsA=null),this.tabsB&&(this.tabsB.destroy(),this.tabsB=null)}}})()})();