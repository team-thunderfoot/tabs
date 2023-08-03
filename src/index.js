import Tabs from "./Tabs"
import { breakpoints } from "@teamthunderfoot/breakpoints"

class Page {
    constructor() {
        this.tabsA = null
        this.tabsB = null

        this.init()
        this.events()
    }

    init() {
        const bk = breakpoints.reduce((target, inner) => Object.assign(target, inner), {})

        document.querySelectorAll(".js--tabs-a").forEach((element) => {
            this.tabsA = new Tabs({
                element: element,
                tabActive: "tf-ds-tab-a-active",
                tabActiveClass: "c--tabs-a__bd__item--is-active",
                tabBodyActiveClass: "c--tabs-a__hd__list-item__link--is-active",
                tabTrigger: "tf-ds-tab-to-open-a",
                tabBody: "tf-ds-tab-body-a",
                externalTrigger: "tf-ds-tab-external-open-a",
                selectClass: "js--select-item-a",
                mediaQuerySelect:  bk.tabletm,// 810
                onHide: () => {
                    // do something
                },
                onShow: () => {
                    // do something
                },
            })
        })

        document.querySelectorAll(".js--tabs-b").forEach((element) => {
            this.tabsB = new Tabs({
                element: element,
                tabActive: "tf-ds-tab-b-active",
                tabActiveClass: "c--tabs-b__bd__item--is-active",
                tabBodyActiveClass: "c--tabs-b__hd__list-item__link--is-active",
                tabTrigger: "tf-ds-tab-to-open-b",
                tabBody: "tf-ds-tab-body-b",
                externalTrigger: "tf-ds-tab-external-open-b",
                selectClass: "js--select-item-b",
                mediaQuerySelect: bk.tabletm,
                onHide: () => {
                    // do something
                },
                onShow: () => {
                    // do something
                },
            })
        })

        document.querySelector(".js--tabs-destroy").addEventListener("click", (e) => {
            e.preventDefault()
            this.destroyTabs()
        })
    }

    events() {
        // Otros eventos de la página...
    }

    destroyTabs() {
        if (this.tabsA) {
            this.tabsA.destroy()
            this.tabsA = null
        }

        if (this.tabsB) {
            this.tabsB.destroy()
            this.tabsB = null
        }
    }
}

export default Page

new Page()
