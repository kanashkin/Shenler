const dropFiltersBlock = () => {
    const triggerBtn = document.querySelector('.filters-open-button'),
        filtersBlock = document.querySelector('.filters-block')

    triggerBtn.addEventListener('click', () => {
        filtersBlock.classList.toggle('filters-block-active')
        triggerBtn.classList.toggle('filters-open-button-active')
    })
}

dropFiltersBlock()