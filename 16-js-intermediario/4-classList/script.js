
const menu = document.querySelector('.menu')
const btn = document.querySelector('.btnMenu')
let controle = false // flag


function abrirOuFecharMenu(){
  if(controle === false){
    controle = true
    menu.classList.add('menuAtivo')
    btn.innerHTML = 'Fechar menu'
    console.log(controle)
  }else if (controle === true){
    controle = false
    menu.classList.remove('menuAtivo')
    btn.innerHTML = 'Abrir menu'
    console.log(controle)
  }
}
