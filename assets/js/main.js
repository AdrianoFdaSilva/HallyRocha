

const input = document.querySelector('#check')
const ul = document.querySelector('ul')
const label = document.querySelector('.checkbtn')

ul.addEventListener('click', () => {
    input.checked = false
    console.log(input)
})