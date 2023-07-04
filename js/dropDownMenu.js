const dropDownMenu = () => {
    const menuBtn = document.querySelector('.sorting-button'),
        menuBlock = document.querySelector('.sorting-items-block')

    menuBtn.addEventListener('click', () => {
        menuBlock.classList.toggle('sorting-items-block-active')
        menuBtn.classList.toggle('sorting-button-active')
    })
}

dropDownMenu()