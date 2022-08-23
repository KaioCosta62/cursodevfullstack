
const contador = document.querySelector('.contador')
const btnIniciar = document.querySelector('.iniciarContador')
const btnPausar = document.querySelector('.pausarContador')
const btnParar = document.querySelector('.pararContador')


let count = 0
let intervalo;

function iniciarContador(){
  intervalo = setInterval(function(){
    count++
    contador.innerHTML = count
  }, 500)
}

function pausarContador(){
  clearInterval(intervalo)
}

function pararContador(){
  contador.innerHTML = 0
  count = 0
  clearInterval(intervalo)
}

btnIniciar.addEventListener('click', iniciarContador)
btnPausar.addEventListener('click', pausarContador)
btnParar.addEventListener('click', pararContador)