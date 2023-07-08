const certSwiper = new Swiper('.cert-swiper', {
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
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 0,
            navigation: false
        }
    }
});