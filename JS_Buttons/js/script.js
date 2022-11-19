const redBtn = document.querySelector('#red')
const greenBtn = document.querySelector('#green')
const blueBtn = document.querySelector('#blue')
const imgBtn = document.querySelector('#img')

const buttons = document.querySelectorAll('.item')

const buttonsArr = Array.from(buttons)

buttonsArr.map((button) => {
   button.addEventListener('click', () => {
      const idAtr = button.getAttribute('id')
      document.body.style.background = idAtr
   })
})

const randomBtn = document.querySelector('#random')
let getColorNumb = () => Math.round(Math.random() * 255)

randomBtn.addEventListener('click', () => {
   document.body.style.background = `rgb(${getColorNumb()}, ${getColorNumb()}, ${getColorNumb()})`
})
