const catalogTabs = (tabSelector, contentSelector, tabActiveSelector, contentActiveSelector) => {
    const tabBtns = document.querySelectorAll(tabSelector),
        tabsContent = document.querySelectorAll(contentSelector)

    tabBtns.forEach(item => {
        item.addEventListener('click', () => {
            let currentBtn = item
            let tabId = currentBtn.getAttribute('data-tab')
            let currentContent = document.querySelector(tabId)

            tabBtns.forEach(item => {
                item.classList.remove(tabActiveSelector)
            })
            tabsContent.forEach(item => {
                item.classList.remove(contentActiveSelector)
            })

            currentBtn.classList.add(tabActiveSelector)
            currentContent.classList.add(contentActiveSelector)
        })
    })
}

catalogTabs('.catalog-tab-item', '.product-cards', 'catalog-tab-item-active', 'product-cards-active')
catalogTabs('.catalog-tabs-mobile-list .catalog-tab-mobile', '.product-cards', 'active', 'product-cards-active')