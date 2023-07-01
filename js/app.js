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
    spaceBetween: 30
});