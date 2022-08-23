let contador = 1
let numeroAleatorio = Math.floor(Math.random() * 10 + 1)
let tabuada = ''

while(contador <= 10){
  tabuada+= `<li> ${numeroAleatorio} x ${contador} = ${numeroAleatorio * contador}</li>`
  contador++
}

document.querySelector('#tabuada').innerHTML = tabuada