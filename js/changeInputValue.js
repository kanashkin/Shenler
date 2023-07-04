const changeInputValue = () => {
    const inputPlus = document.querySelector('.input-plus'),
        inputMinus = document.querySelector('.input-minus'),
        input = document.querySelector('.input-block input')

    inputPlus.addEventListener('click', () => {
        input.value ++
    })

    inputMinus.addEventListener('click', () => {
        if (input.value >= 2) {
            input.value --
        }
    })
}