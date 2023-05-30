import Tabs from "./Tabs";

class Page {
  constructor() {
    this.init();
    this.events();
  }
  init() {
    const tabs = new Tabs({
      tabActive: "tab-a-1",
      tabActiveClass: "b--tabs-a__bd__item--is-active",
      tabBodyActiveClass: "b--tabs-a__hd__list-item__link--is-active",
      tabTrigger: "tf-ds-tab-to-open-a",
      tabParent: "tf-ds-tab-parent",
      tabBody: "tf-ds-tab-body-a",
      externalTrigger: "tf-ds-tab-external-open-a",
      onChange: () => {
        // do something
      },
    });

    const tabs2 = new Tabs({
      tabActive: "tab-b-1",
      tabActiveClass: "b--tabs-b__bd__item--is-active",
      tabBodyActiveClass: "b--tabs-b__hd__list-item__link--is-active",
      tabTrigger: "tf-ds-tab-to-open-b",
      tabParent: "tf-ds-tab-parent",
      tabBody: "tf-ds-tab-body-b",
      externalTrigger: "tf-ds-tab-external-open-b",
      onChange: () => {
        // do something
      },
    });
  }
  events() {}
}
export default Page;
new Page();
