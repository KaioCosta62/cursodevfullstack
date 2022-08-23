
const btn = document.querySelector('button')
const inputMensagem = document.querySelector('input')
const img = document.querySelector('img')
const formulario = document.querySelector('#exercicio')
const divMsg = document.querySelector('.mensagem')

function exercicio(mensagem){
  return new Promise((resolve, reject) => {
    setTimeout(function(){
      resolve(mensagem)
    }, 10000)
  })
}

function mostrarMensagem(mensagem){
  divMsg.innerHTML = mensagem
  formulario.style.display = 'none'
}

formulario.addEventListener('submit', (event) => {
  event.preventDefault()
  const mensagem = inputMensagem.value 
  img.style.display = 'inline-block'
  btn.style.display = 'none'

  exercicio(mensagem).then(mostrarMensagem)
})
