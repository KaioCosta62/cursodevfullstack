const btn = document.querySelector('button')

function transformarEmJson(response){
  return response.json()
}

function exibirNaTela(dados){
  return dados
}

function exibirErro(){
  console.log('Ops, houve um erro na requisição. Tente novamente mais tarde')
}

async function api(){
  const dados = await fetch('https://jsonplaceholder.typicode.com/photos')
    .then(transformarEmJson)
    .then(exibirNaTela)
    .catch(exibirErro)
  console.log(dados) 
}


btn.addEventListener('click', api)