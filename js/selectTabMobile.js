const selectTabMobile = () => {
    const tabsItems = document.querySelectorAll('.catalog-tabs-mobile-list .catalog-tab-mobile'),
        activeUpTab = document.querySelector('.catalog-tabs-mobile .up-block .catalog-tab-mobile')

    tabsItems.forEach(item => {
        item.addEventListener('click', e => {
            let activeItemText = e.target.textContent
            activeUpTab.textContent = activeItemText
        })
    })
}

selectTabMobile()