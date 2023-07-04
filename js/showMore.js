const showMore = () => {
    const triggerBtn = document.querySelector('.catalog-more-img'),
        block = document.querySelector('.product-cards')

    triggerBtn.addEventListener('click', () => {
        block.classList.toggle('product-cards-more')
        triggerBtn.classList.toggle('catalog-more-img-active')
    })
}

showMore()