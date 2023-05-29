class Tabs {
  constructor() {
    this.events();
  }

  events() {
    this.clickEvent = this.tabs();
  }

  tabs = () => {};

  destroy() {
    this.clickEvent = {};
  }
}
export default Tabs;
