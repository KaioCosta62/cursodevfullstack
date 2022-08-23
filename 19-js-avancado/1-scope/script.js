function imprimirNome(){
  let nome = 'Kaio'
  console.log(nome)
}

//console.log(nome) // Não consigo acessar a variável nome fora do escopo da função
imprimirNome()


const nomeComposto = 'Kaio Henrique'

function imprimirNomeComposto(){
  console.log(nomeComposto)
}

imprimirNomeComposto() // Eu consigo ter acesso a constante nomeComposto pois ela foi declarada no escopo global