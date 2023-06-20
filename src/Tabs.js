import JSUTIL from "@andresclua/jsutil"
import { tf_debounce } from "@andresclua/debounce-throttle"

class Tabs {
    constructor(payload) {
        this.tabContainer = payload.tabContainer
        this.tabActive = payload.tabActive
        this.tabActiveClass = payload.tabActiveClass
        this.tabBodyActiveClass = payload.tabBodyActiveClass
        this.tabTrigger = payload.tabTrigger
        this.tabParent = payload.tabParent
        this.tabBody = payload.tabBody
        this.externalTrigger = payload.externalTrigger
        this.selectClass = payload.selectClass
        this.mediaQuerySelect = payload.mediaQuerySelect
        this.onChange = payload.onChange

        this.JSUTIL = new JSUTIL()
        this.init()
        this.events()
    }

    init() {
        this.setDefaultActiveTab()
    }

    events() {
        this.toggleTabs()
    }

    // Sets up click event for tab toggling
    toggleTabs = () => {
        // Toggles the tabs when clicked
        const triggers = this.tabContainer.querySelectorAll(`[${this.tabTrigger}]`)
        triggers.forEach((trigger) => {
            const tabID = trigger.getAttribute(this.tabTrigger)

            trigger.addEventListener("click", (item) => {
                this.handleClick(item, tabID)
            })
        })

        // Toggles the tabs when external triggers are clicked
        const externalTriggers = document.querySelectorAll(`[${this.externalTrigger}]`)
        externalTriggers.forEach((externalTrigger) => {
            const tabID = externalTrigger.getAttribute(this.externalTrigger)

            externalTrigger.addEventListener("click", (item) => {
                this.handleClick(item, tabID)
            })
        })

        if (this.onChange) this.onChange()

        if (window.innerWidth < this.mediaQuerySelect) {
            this.selectOnMobile()
        }

        window.addEventListener(
            "resize",
            tf_debounce((e) => {
                if (window.innerWidth < this.mediaQuerySelect) {
                    this.selectOnMobile()
                }
            }, 100)
        )
    }

    // Sets the default active tab
    setDefaultActiveTab() {
        // Shows tab with tabActive class
        const body = this.tabContainer.querySelector(`[${this.tabActive}]`)
        this.JSUTIL.addClass(body, this.tabActiveClass)
        this.JSUTIL.addClass(this.tabContainer.querySelector(`[${this.tabTrigger}="${body.id}"]`), this.tabBodyActiveClass)

        this.chageSelectValue(body.id)
    }

    handleClick(item, tabID) {
        item.preventDefault()
        // Hides all active classes
        this.hideTab()
        this.chageSelectValue(tabID)

        const tabBody = this.tabContainer.querySelector(`#${tabID}`)
        const parent = this.tabContainer.querySelector(`[${this.tabParent}='${tabID}']`)

        if (tabBody && parent) {
            this.JSUTIL.addClass(tabBody, this.tabActiveClass)
            this.JSUTIL.addClass(parent, this.tabBodyActiveClass)
        }
    }

    // Hides all active clases
    hideTab() {
        // removes class to body
        this.tabContainer.querySelectorAll(`[${this.tabBody}]`).forEach((el) => {
            this.JSUTIL.removeClass(el, this.tabActiveClass)
        })
        // removes class to trigger
        this.tabContainer.querySelectorAll(`[${this.tabTrigger}]`).forEach((el) => {
            this.JSUTIL.removeClass(el, this.tabBodyActiveClass)
        })
    }

    // Changes tabs on mobile when select option is changed
    selectOnMobile() {
        const selectItems = this.tabContainer.querySelectorAll(`.${this.selectClass}`)
        selectItems.forEach((select) => {
            select.addEventListener("change", () => {
                const tabBody = this.tabContainer.querySelector(`[${this.tabBody}='${select.value}']`)
                const parent = document.querySelector(`[${this.tabParent}='${select.value}']`)

                this.hideTab()

                this.JSUTIL.addClass(tabBody, this.tabActiveClass)
                this.JSUTIL.addClass(parent, this.tabBodyActiveClass)
            })
        })
    }

    // Changes the value of the select element
    chageSelectValue(value) {
        const select = this.tabContainer.querySelector("select")
        select.value = value
    }

    // Clears the click event and removes all added classes
    destroy() {
        const triggers = document.querySelectorAll(`[${this.tabTrigger}]`)
        triggers.forEach((trigger) => {
            trigger.className = ""

            let elClone = trigger.cloneNode(true)
            trigger.parentNode.replaceChild(elClone, trigger)

            const tabID = trigger.getAttribute(this.tabTrigger)
            const tabBody = document.getElementById(tabID)

            tabBody.className = ""
        })

        const externalTriggers = document.querySelectorAll(`[${this.externalTrigger}]`)
        externalTriggers.forEach((externalTrigger) => {
            let elClone = externalTrigger.cloneNode(true)
            externalTrigger.parentNode.replaceChild(elClone, externalTrigger)
        })

        const selectItems = document.querySelectorAll(`.${this.selectClass}`)
        selectItems.forEach((select) => {
            select.className = ""
            let elClone = select.cloneNode(true)
            select.parentNode.replaceChild(elClone, select)
        })
    }
}
export default Tabs
