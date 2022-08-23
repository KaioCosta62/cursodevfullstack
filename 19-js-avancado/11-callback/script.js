
const botaoCarregar = document.querySelector('#carregarFotos')



function carregarFotos(callback){
  const xhttp = new XMLHttpRequest()
  xhttp.onreadystatechange = function(){
    if(this.readyState === 4 && this.status === 200){
      const response = JSON.parse(this.responseText)

      if(callback){
        exibirNaTela(response)
      }
      
    }
  }
  
  xhttp.open('GET', 'https://jsonplaceholder.typicode.com/photos', true)
  xhttp.send()
}

function exibirNaTela(dadosApi){
  let box = ''

  for(let dado of dadosApi){
    box += `
      <div class = 'box'>
        <h1> ${dado.title}</h1>
        <img src = '${dado.url}'> </img>
      </div>
    `
  }

  return document.querySelector('.container').innerHTML = box
}


botaoCarregar.addEventListener('click', () => {
  carregarFotos(exibirNaTela)
})