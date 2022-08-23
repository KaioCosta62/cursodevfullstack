const clientes = [
  {name: 'Kaio',score: 50},
  {name: 'Cintia', score: 35},
  {name: 'Carlos', score: 85},
  {name: 'Vivian', score: 49},
  {name: 'Erick', score: 22},
  {name: 'José',score: 44},
  {name: 'Paulo', score: 70},
  {name: 'Bianca', score: 22},
  {name: 'Tadeu', score: 90},
  {name: 'Kesya', score: 85}
]

/*
let clientesAprovados = clientes.filter(cliente => cliente.score >= 50)


let clientesReprovados = clientes.filter(cliente => cliente.score < 50)

const verificarClientes = {
  pass: clientesAprovados,
  fail: clientesReprovados
}

console.log(verificarClientes)

*/

// acc = acumulador
// curr = current

const clientesFinal = clientes.reduce((acc,curr) => {
  if(curr.score >= 50){
    acc.pass.push(curr)
  }else{
    acc.fail.push(curr)
  }

  return acc
}, {
  pass: [],
  fail: []
})

console.log(clientesFinal)


const numeros = [10,20,50,30,5,20]
const somaNumeros = numeros.reduce((acc,valorAtual) => {
  return acc + valorAtual
}, 0)

console.log(somaNumeros)

const numeros2 = [10,15,3,9,3,12,6]
const stringNumeros = numeros2.reduce((acc, valorAtual) => {
  
  let tracinho = ' - '
  let ultimoElementoArray = numeros2[numeros2.length - 1]

  if(valorAtual === ultimoElementoArray){
    tracinho = ''
  }

  return acc += `${valorAtual + 1}${tracinho}`
}, '')

console.log(stringNumeros)

const alunos = [
  {name: 'Kaio',nota: 8},
  {name: 'Cintia', nota: 7},
  {name: 'Carlos', nota: 6},
  {name: 'Vivian', nota: 3},
  {name: 'Erick', nota: 2.5},
  {name: 'José',nota: 6.3},
  {name: 'Paulo', nota: 9},
  {name: 'Bianca', nota: 10},
  {name: 'Tadeu', nota: 2},
  {name: 'Kesya', nota: 10},
  {name: 'João Victor', nota: 7}
]

const mapeamentoAlunos = alunos.reduce((acc, elementoAtual) => {

  if(elementoAtual.nota >= 7){
    acc.aprovados.push(elementoAtual.name)
  }else{
    acc.reprovados.push(elementoAtual.name)
  }

  return acc
}, {
  aprovados: [],
  reprovados: []
})

const aprovados = mapeamentoAlunos.aprovados
const reprovados = mapeamentoAlunos.reprovados

let listaAprovados = ''
let listaReprovados = ''

aprovados.forEach((aprovado) => {
  listaAprovados += `<li> ${aprovado} </li>`
})

reprovados.forEach((reprovado) => {
  listaReprovados += `<li> ${reprovado} </li>`
})

document.querySelector('.aprovados').innerHTML = listaAprovados
document.querySelector('.reprovados').innerHTML = listaReprovados


