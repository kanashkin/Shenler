const openDropTabs = () => {
    const triggerBtn = document.querySelector('.open-tabs-arrow'),
        tabsBlock = document.querySelector('.catalog-tabs-mobile')
    
    triggerBtn.addEventListener('click', () => {
        tabsBlock.classList.toggle('catalog-tabs-mobile-active')
    })
}

openDropTabs()