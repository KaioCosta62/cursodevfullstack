let count = 0

const boxCount = document.querySelector('.contador')
const btnIncremento = document.querySelector('.incremento')
const btnDecremento = document.querySelector('.decremento')

function incrementoContador(){
  count++

  boxCount.innerText = count
}

function decrementoContador(){
  count--

  if(count < 0){
    count = 0
  }

  boxCount.innerText = count
}

btnIncremento.addEventListener('click', incrementoContador)
btnDecremento.addEventListener('click', decrementoContador)