const dados = {
  nome: 'Kaio',
  idade: 21,
  profissao: 'Programador',
  cargo: 'Front-End',
  dadosAdicionais: {
    endereco: 'Rua Teste',
    phone: '34 9999-99999',
  }
}

const {nome:inputNome,idade,profissao, cargo} = dados

console.log(inputNome,idade,profissao, cargo)

const {endereco,phone} = dados.dadosAdicionais

console.log(endereco, phone)

console.log(dados)


const numeros = [0,5,10,20,30]

const [primeiroValor, segundoValor]  = numeros

console.log(primeiroValor, segundoValor)


const btn = document.querySelector('button')

function transformarEmJson(dados){
  return dados.json()
}

function exibirDados(dados){
  return dados
}

async function api(){
  const dados = await fetch('https://jsonplaceholder.typicode.com/users/1')
  .then(transformarEmJson)
  .then(exibirDados)

  const {name, phone, email} = dados

  console.log(name,phone, email)

  const {street,city} = dados.address

  console.log(street, city)
}

btn.addEventListener('click', api)



