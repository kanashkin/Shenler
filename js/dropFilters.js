const dropFilters = () => {
    const filterPuncts = document.querySelectorAll('.filters-puncts'),
        triggerBtn = document.querySelectorAll('.filters-name-img')

    triggerBtn.forEach(item => {
        item.addEventListener('click', () => {
            let tabId = item.getAttribute('data-puncts')
            let currentContent = document.querySelector(tabId)

            currentContent.classList.toggle('filters-puncts-active')
        })
    })
}

dropFilters()