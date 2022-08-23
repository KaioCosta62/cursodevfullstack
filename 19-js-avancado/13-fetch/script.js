const btnEnviar = document.querySelector('button')


function transformarEmJson(response){
  return response.json()
}

function exibirDados(dados){
  for(let dado of dados){
    console.log(dado.title)
  }
}

function exibirErro(){
  console.log('Ops, houve um erro na requisição')
}


btnEnviar.addEventListener('click', () => {
  fetch('https://jsonplaceholder.typicode.com/photos')
    .then(transformarEmJson)
    .then(exibirDados)
    .catch(exibirErro)
})