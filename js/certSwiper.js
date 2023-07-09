const certSwiper = new Swiper('.cert-swiper', {
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 0,
            navigation: false
        },
        451: {
            navigation: {
                nextEl: '.cert-button-next',
                prevEl: '.cert-button-prev'
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
            slidesPerView: 3,
            spaceBetween: 30,
        }
    }
});