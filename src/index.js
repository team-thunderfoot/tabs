import Tabs from "./Tabs";

class Page {
  constructor() {
    this.init();
    this.events();
  }
  init() {
    const tabs = new Tabs();
  }
  events() {}
}
export default Page;
new Page();
