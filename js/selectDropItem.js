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

selectDropItem()