const accordion = () => {
    triggerBtns = document.querySelectorAll('.accordion-item-open')

    triggerBtns.forEach(item => {
        item.addEventListener('click', e => {
            let accordionBlock = item.parentNode.parentNode
            accordionBlock.classList.toggle('accordion-item-active')
        })
    });
}

accordion()