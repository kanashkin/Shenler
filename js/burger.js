const burger = () => {
    const openBtn = document.querySelector('.header-burger'),
        closeBtn = document.querySelector('.mobile-menu-close'),
        content = document.querySelector('.mobile-menu')

    openBtn.addEventListener('click', () => {
        content.classList.add('mobile-menu-active')
    })
    closeBtn.addEventListener('click', () => {
        content.classList.remove('mobile-menu-active')
    })
}

burger()