# Tabs

The `tabs` package provides a tabbed interface functionality that allows for easy navigation between different content sections. It enables customization of the active tab class and the tab body class, providing a seamless user experience.

[Here's an example](https://team-thunderfoot.github.io/tabs/dist/index.html)

## Installation

```sh
npm install @teamthunderfoot/tabs
```

## Usage

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

In your HTML file, add the necessary elements for the tabs. Each tab group should have a unique identifier (e.g., `tab-a-1` or `tab-a-2`). Use the provided CSS classes and data attributes to specify the tab triggers, tab bodies, and select elements.

- **Container:** The tab container element should have an ID attribute. Example: `id="tab-a-1"`.

- **Triggers:** The tab triggers should have the following attributes:

  - An attribute with a value equal to the ID of the tab body it should open. Example: `tf-ds-tab-to-open-a="tab-a-1-1"`.
  - An attribute that specifies which container it belongs to. Example: `tf-ds-container="tab-a-1"`.
  - If it's a tab and not a link, it should have an attribute that identifies it as a tab (not a link) with a value equal to the ID of the body it should open. Example: `tf-ds-tab-parent="tab-a-1-1"`.

- **Bodies:** The tab body should have:

  - An ID attribute. Example: `id="tab-a-1-1"`.
  - An attribute with a value equal to the same ID as the body. Example: `tf-ds-tab-body-a="tab-a-1-1"`.
  - For each container, only one body should have an attribute specifying that it should be open by default. Example: `tf-ds-tab-a-active="true"`.

- **External Links:** The external links should have:

  - An attribute with a value equal to the ID of the body it should open. Example: `tf-ds-tab-external-open-a="tab-a-1-1"`.
  - An attribute specifying the ID of the container that contains the body it is opening. Example: `tf-ds-container="tab-a-1"`.

- **Selects:** The select element should have:
  - An ID attribute. Example: `id="select-01"`.
  - A class to identify it. Example: `class="js--select-item-a"`.
  - An attribute with a value equal to the ID of the container it belongs to. Example: `tf-ds-container="tab-a-1"`.
  - The value of the options should be the ID of the body it should open. Example: `<option value="tab-a-1-1">...</option>`.

```sh
<div class="b--tabs-a js--tabs-a" id="tab-a-1">

    <div class="c--form-group-a">
        <div class="c--form-select-a">
            <select id="select-01" class="c--form-select-a__item js--select-item-a" tf-ds-container="tab-a-1">
                <option value="tab-a-1-1">Item1</option>
                <option value="tab-a-1-2">Item2</option>
            </select>
        </div>
    </div>

    <ul class="b--tabs-a__hd">
        <li class="b--tabs-a__hd__list-item">
            <a href="#" class="b--tabs-a__hd__list-item__link" tf-ds-tab-to-open-a="tab-a-1-1" tf-ds-tab-parent="tab-a-1-1" tf-ds-container="tab-a-1">Item1</a>
        </li>
        <li class="b--tabs-a__hd__list-item">
            <a href="#" class="b--tabs-a__hd__list-item__link" tf-ds-tab-to-open-a="tab-a-1-2"  tf-ds-tab-parent="tab-a-1-2" tf-ds-container="tab-a-1">Item2</a>
        </li>
    </ul>

    <div class="b--tabs-a__bd">
        <div class="b--tabs-a__bd__item" id="tab-a-1-1" tf-ds-tab-body-a="tab-a-1-1" tf-ds-tab-a-active="true">
            <p>Content item 1 item 1 item 1 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, commodi
            illum nihil maxime quaerat eos sequi error natus neque, debitis ducimus veniam minus animi iure
            suscipit at acc <a href='#' tf-ds-tab-to-open-a="tab-a-1-2" tf-ds-container="tab-a-1">TAB 2</a> usamus, laborum fuga! Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Debitis blanditiis, eveniet consequatur omnis voluptatum,
            possimus qui itaque doloremque laudantium, veniam error ab perspiciatis tempora labore aperiam ratione
            eum non ipsum.</p>
        </div>
        <div class="b--tabs-a__bd__item" id="tab-a-1-2" tf-ds-tab-body-a="tab-a-1-2">
            <p>Content item 2 item 2 item 2 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, commodi
            illum nihil maxime quaerat eos sequi error natus neque, debitis ducimus veniam minus animi iure
            suscipit at accusamus, laborum fuga! Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Debitis blanditiis, eveniet consequatur omnis voluptatum,
            possimus qui itaque doloremque laudantium, veniam error ab perspiciatis tempora labore aperiam ratione
            eum non ipsum.</p>
        </div>
    </div>
</div>

<p>Open Item 2 on tab 1 by clicking <a href="#" tf-ds-tab-external-open-b="tab-a-1-2" tf-ds-container="tab-a-1">here</a></p>
```

## Customization

You can customize the CSS classes and data attributes used by the tabs package to match your project's styles and structure. Modify the class names and data attributes in both the JavaScript and HTML sections accordingly.

## Options

• `tabContainer:` Specifies the ID selector for the main container of the tabs.

• `tabActive:` Specifies the active tab.

• `tabActiveClass:` Specifies the CSS class for the active tab content.

• `tabBodyActiveClass:` Specifies the CSS class for the active tab link.

• `tabTrigger:` Specifies the attribute value to identify which tab to open.

• `tabParent:` Specifies the attribute value to identify the tab link.

• `tabBody:` Specifies the attribute value to identify the tab content element.

• `externalTrigger:` Specifies the attribute value for an external trigger to open the tab.

• `selectClass:` Specifies the CSS class for a select item.

• `onChange():` Specifies a callback function to be executed when the tab changes.

• `mediaQuerySelect:` Specifies the breakpoint at which to activate mobile selection behavior. When the window width is less than the specified value, the tabs are replaced with a select element for better mobile user experience

## Destroy

Destroys the `Tabs` instance by removing event listeners and resetting the state. This method should be called when you want to completely remove the tab functionality from the page.

```sh
const tabs = new Tabs(options);
tabs.destroy();
```
