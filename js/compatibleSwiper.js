const compatibleSwiper = new Swiper('.compatible-swiper', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    breakpoints: {
        320: {
            navigation: false,
            slidesPerView: 1,
        },
        451: {
            navigation: {
                nextEl: '.compatible-button-next',
                prevEl: '.compatible-button-prev'
            },
            slidesPerView: 4,
            spaceBetween: 26
        }
    }
})