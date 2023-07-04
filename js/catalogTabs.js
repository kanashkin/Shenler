const catalogTabs = () => {
    const tabBtns = document.querySelectorAll('.catalog-tab-item'),
        tabsContent = document.querySelectorAll('.product-cards')

    tabBtns.forEach(item => {
        item.addEventListener('click', () => {
            let currentBtn = item
            let tabId = currentBtn.getAttribute('data-tab')
            let currentContent = document.querySelector(tabId)

            tabBtns.forEach(item => {
                item.classList.remove('catalog-tab-item-active')
            })
            tabsContent.forEach(item => {
                item.classList.remove('product-cards-active')
            })

            currentBtn.classList.add('catalog-tab-item-active')
            currentContent.classList.add('product-cards-active')
        })
    })
}

catalogTabs()