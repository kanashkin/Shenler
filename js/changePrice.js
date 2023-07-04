const changePrice = () => {
    const filterLine = document.querySelector('.filter-line'),
        filterPriceMax = document.getElementById('filterPriceMax')

    filterLine.oninput = function() {
        filterPriceMax.value = filterLine.value
    }
}

changePrice()