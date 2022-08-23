const clientes = [
  {name: 'Kaio', lastName: 'Henrique'},
  {name: 'Júlia', lastName: 'Guimarães'},
  {name: 'Karla', lastName: 'Costa'}
]

// Monte um array para mostrar o nome e o sobrenome em um elemento: ['Kaio Henrique', 'Julia Guimarães'...]

/*

let clientesFinal = []
clientes.forEach(cliente => clientesFinal.push(`${cliente.name} ${cliente.lastName}`))
console.log(clientesFinal)

*/

let clientesFinal = clientes.map(cliente => `${cliente.name} ${cliente.lastName}`) // return implícito

console.log(clientesFinal)


let numeros = [0,5,10,15,20]

let numerosMap = numeros.map((numero, index, arr) => {
  console.log(numero)
  console.log(index)
  console.log(arr)
})