## More than one group of tabs

If you have two or more groups of tabs, you can instantiate the JS class in the following way:

```sh
import Tabs from "@teamthunderfoot/tabs";
import { breakpoints } from "@teamthunderfoot/breakpoints";

class Page {
  constructor() {
    this.tabsA = null;
    this.tabsB = null;

    this.init();
    this.events();
  }

  init() {
    const bk = breakpoints.reduce(
      (target, inner) => Object.assign(target, inner),
      {}
    );

    document.querySelectorAll(".js--tabs-a").forEach((el) => {
      this.tabsA = new Tabs({
        tabContainer: "tf-ds-container",
        tabActive: "tf-ds-tab-a-active",
        tabActiveClass: "b--tabs-a__bd__item--is-active",
        tabBodyActiveClass: "b--tabs-a__hd__list-item__link--is-active",
        tabTrigger: "tf-ds-tab-to-open-a",
        tabParent: "tf-ds-tab-parent",
        tabBody: "tf-ds-tab-body-a",
        externalTrigger: "tf-ds-tab-external-open-a",
        selectClass: "js--select-item-a",
        mediaQuerySelect: bk.tablets, // 810
        onChange: () => {
          // do something
        },
      });
    });

    document
      .querySelector(".js--tabs-destroy")
      .addEventListener("click", (e) => {
        e.preventDefault();
        this.destroyTabs();
      });
  }

  events() {
  }

  destroyTabs() {
    if (this.tabsA) {
      this.tabsA.destroy();
      this.tabsA = null;
    }

    if (this.tabsB) {
      this.tabsB.destroy();
      this.tabsB = null;
    }
  }
}

export default Page;

new Page();

```
