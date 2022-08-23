let box = document.querySelector('.box')
let btn = document.querySelector('button')

function funcaoTeste(evento){
  console.log('testando evento')
  console.log(evento)
  console.log(evento.target.nextElementSibling)
}

function cliqueBtn(evento){
  console.log(evento.target.innerText)
  evento.target.innerText = 'Outro título'
}

function funcaoTeste2(evento){
  console.log(evento.key)

  if(evento.key === 'k'){
    console.log('você acertou a letra!')
  }
}

box.addEventListener('click', funcaoTeste) // clique no elemento
btn.addEventListener('click', cliqueBtn)


//box.addEventListener('mousemove', funcaoTeste) // mover o mouse no elemento

//box.addEventListener('mouseenter', funcaoTeste) // quando o mouse entrar no elemento

//box.addEventListener('mouseout', funcaoTeste) // quando o mouse sai do elemento

//window.addEventListener('resize', funcaoTeste2)

window.addEventListener('keypress', funcaoTeste2)

const ancoras = document.querySelectorAll('a')

function exibirTextoAncora(evento){
  evento.preventDefault()
  console.log(evento.target.innerText)
}

ancoras.forEach(function(ancora){
  ancora.addEventListener('click', exibirTextoAncora)
})