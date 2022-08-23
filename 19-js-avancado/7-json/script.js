const objeto = {
  nome: 'Kaio',
  idade: 21,
  profissao: 'Programador',
  fazFaculdade: true
}

const objetoJson = JSON.stringify(objeto)

console.log(objetoJson)

const objetoParseado = JSON.parse(objetoJson)

console.log(objetoParseado.profissao)