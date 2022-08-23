let count = 0

const btnIncremento = document.querySelector('.incremento')
const btnDecremento = document.querySelector('.decremento')
const boxCount = document.querySelector('.contador')

let incrementarCount
let decrementarCount

function incrementar(){
  clearInterval(decrementarCount)

  btnDecremento.classList.remove('colorRed')
  btnIncremento.classList.add('colorGreen')

  incrementarCount = setInterval(function(){
    count++
    boxCount.innerText = count
  }, 100)

}

function decrementar(){
  clearInterval(incrementarCount)
  
  btnIncremento.classList.remove('colorGreen')
  btnDecremento.classList.add('colorRed')

  decrementarCount = setInterval(function(){
    count--
    boxCount.innerText = count
  }, 100)
  
}


btnIncremento.addEventListener('click', incrementar)
btnDecremento.addEventListener('click', decrementar)