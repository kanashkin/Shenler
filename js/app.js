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
        menuBlock = document.querySelector('.sorting-items-block'),
        menuItemActiveUp = document.querySelector('.sorting-up-block .sorting-item-active')


    menuItems.forEach(item => {
        item.addEventListener('click', e => {

            if (menuBlock.classList.contains('sorting-items-block-active')) {
                menuItems.forEach(item => {
                    item.classList.remove('sorting-item-active')
                })
                e.target.classList.add('sorting-item-active')
                let activeText = e.target.textContent
                menuItemActiveUp.textContent = activeText
            }
            
        })
    })
}

dropDownMenu()
selectDropItem()

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
