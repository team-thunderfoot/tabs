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

        document.querySelectorAll(".js--tabs-a").forEach((tabContainer) => {
            this.tabsA = new Tabs({
                tabContainer: tabContainer,
                tabActive: "tf-ds-tab-a-active",
                tabActiveClass: "c--tabs-a__bd__item--is-active",
                tabBodyActiveClass: "c--tabs-a__hd__list-item__link--is-active",
                tabTrigger: "tf-ds-tab-to-open-a",
                tabParent: "tf-ds-tab-parent",
                tabBody: "tf-ds-tab-body-a",
                externalTrigger: "tf-ds-tab-external-open-a",
                selectClass: "js--select-item-a",
                mediaQuerySelect: bk.tablets, // 810
                onChange: () => {
                    // do something
                },
            })
        })

        document.querySelectorAll(".js--tabs-b").forEach((tabContainer) => {
            this.tabsB = new Tabs({
                tabContainer: tabContainer,
                tabActive: "tf-ds-tab-b-active",
                tabActiveClass: "c--tabs-b__bd__item--is-active",
                tabBodyActiveClass: "c--tabs-b__hd__list-item__link--is-active",
                tabTrigger: "tf-ds-tab-to-open-b",
                tabParent: "tf-ds-tab-parent",
                tabBody: "tf-ds-tab-body-b",
                externalTrigger: "tf-ds-tab-external-open-b",
                selectClass: "js--select-item-b",
                mediaQuerySelect: bk.tabletm,
                onChange: () => {
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
