const dropDownMenu = () => {
    const menuBtn = document.querySelector('.sorting-button'),
        menuBlock = document.querySelector('.sorting-items-block')

    menuBtn.addEventListener('click', () => {
        menuBlock.classList.toggle('sorting-items-block-active')
        menuBtn.classList.toggle('sorting-button-active')
    })
}

const selectDropItem = () => {
    const menuItems = document.querySelectorAll('.sorting-items-block .sorting-item'),
        menuItemActiveUp = document.querySelector('.sorting-up-block .sorting-item-active')


    menuItems.forEach(item => {
        item.addEventListener('click', e => {
            menuItems.forEach(item => {
                item.classList.remove('sorting-item-active')
            })
            e.target.classList.add('sorting-item-active')

            let activeText = e.target.textContent
            menuItemActiveUp.textContent = activeText
        })
    })
}

const showMore = () => {
    const triggerBtn = document.querySelector('.catalog-more-img'),
        block = document.querySelector('.product-cards')

    triggerBtn.addEventListener('click', () => {
        block.classList.toggle('product-cards-more')
        triggerBtn.classList.toggle('catalog-more-img-active')
    })
}

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

const changePrice = () => {
    const filterLine = document.querySelector('.filter-line'),
        filterPriceMax = document.getElementById('filterPriceMax')

    filterLine.oninput = function() {
        filterPriceMax.value = filterLine.value
    }
}

dropDownMenu()
selectDropItem()
showMore()
catalogTabs()
changePrice()

// const certSwiper = new Swiper('.cert-swiper', {
//     navigation: {
//         nextEl: '.cert-button-next',
//         prevEl: '.cert-button-prev'
//     },
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true
//     },
//     slidesPerView: 3,
//     spaceBetween: 30
// });
