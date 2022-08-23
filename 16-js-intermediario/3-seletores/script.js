
// SELETOR POR ID
const titulo = document.querySelector('#titulo')
console.log(titulo)
titulo.innerHTML = '<i>Título alterado</i>'


// SELETOR POR TAG E SELECIONANDO VÁRIOS ELEMENTOS
const ancoras = document.querySelectorAll('a')
const links = ['https://www.google.com', 'https://www.youtube.com']


ancoras.forEach(function(ancora, index){ // função anônima / callback
  console.log(ancora)
  console.log(index)
  ancora.innerText = '<b>Conteúdo alterado via JS</b>'
  ancora.setAttribute('href', `${links[index]}`)
  ancora.setAttribute('target', '_blank')
  ancora.style.color = 'red'
})


// Posso fazer a mesma coisa de formas diferentes, nesse exemplo utilizei o for

/*
for(let i = 0; i < ancoras.length; i++){
  ancoras[i].innerHTML = 'Conteúdo alterado via JS'
  ancoras[i].setAttribute('href', `${links[i]}`)
}
*/


// SELETOR POR CLASSE


let boxes = document.querySelectorAll('.box')


boxes.forEach(function(box, index){
  box.innerHTML = `box - ${index + 1}`
  box.style.width = '200px'
  box.style.height = '400px'
  box.style.backgroundColor = '#ededed'
  box.style.textAlign = 'center'
  box.style.lineHeight = '400px'
})

