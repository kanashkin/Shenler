const changeMeta = () => {
    window.addEventListener('resize', () => {
        let metaTag = document.querySelector('.meta-viewport')
        if (window.outerWidth <= 450) {
            metaTag.setAttribute('content', 'width=device-width, initial-scale=1.0')
        } else if (window.outerWidth > 450) {
            metaTag.setAttribute('content', 'width=1920')
        }
    })
}

changeMeta()