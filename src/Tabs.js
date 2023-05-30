import JSUTIL from "@andresclua/jsutil";

class Tabs {
  constructor(payload) {
    this.tabActive = payload.tabActive; //tab active by default
    this.tabActiveClass = payload.tabActiveClass; //active class on header
    this.tabBodyActiveClass = payload.tabBodyActiveClass; //active class on body
    this.tabTrigger = payload.tabTrigger;
    this.tabParent = payload.tabParent;
    this.tabBody = payload.tabBody;
    this.externalTrigger = payload.externalTrigger;
    this.onChange = payload.onChange;

    this.JSUTIL = new JSUTIL();
    this.init();
    this.events();
  }

  init() {
    this.setDefaultActiveTab();
  }

  events() {
    this.clickEvent = this.toggleTabs();
  }

  toggleTabs = () => {
    const handleClick = (item, tabID) => {
      item.preventDefault();
      // Hides all active classes
      this.hideTab();
      const tabBody = document.getElementById(tabID);
      const parent = document.querySelector(`[${this.tabParent}='${tabID}']`);
      if (tabBody && parent) {
        this.JSUTIL.addClass(tabBody, this.tabActiveClass);
        this.JSUTIL.addClass(parent, this.tabBodyActiveClass);
      }
    };

    const triggers = document.querySelectorAll(`[${this.tabTrigger}]`);
    triggers.forEach((trigger) => {
      const tabID = trigger.getAttribute(this.tabTrigger);
      trigger.addEventListener("click", (item) => {
        handleClick(item, tabID);
      });
    });

    const externalTriggers = document.querySelectorAll(
      `[${this.externalTrigger}]`
    );
    externalTriggers.forEach((externalTrigger) => {
      const tabID = externalTrigger.getAttribute(this.externalTrigger);
      externalTrigger.addEventListener("click", (item) => {
        handleClick(item, tabID);
      });
    });

    if (this.onChange) this.onChange();
  };

  // Shows tab with tabActive
  setDefaultActiveTab() {
    this.JSUTIL.addClass(
      document.getElementById(this.tabActive),
      this.tabActiveClass
    );
    this.JSUTIL.addClass(
      document.querySelector(`[${this.tabTrigger}="${this.tabActive}"]`),
      this.tabBodyActiveClass
    );
  }

  // Hides all active clases
  hideTab() {
    // removes class to body
    document.querySelectorAll(`[${this.tabBody}]`).forEach((el) => {
      this.JSUTIL.removeClass(el, this.tabActiveClass);
    });
    // removes class to trigger
    document.querySelectorAll(`[${this.tabTrigger}]`).forEach((el) => {
      this.JSUTIL.removeClass(el, this.tabBodyActiveClass);
    });
  }

  destroy() {
    this.clickEvent = {};
  }
}
export default Tabs;
