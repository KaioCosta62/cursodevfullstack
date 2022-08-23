const clientes = [
  {name: 'Kaio', lastName: 'Henrique', age: 21},
  {name: 'Júlia', lastName: 'Guimarães', age: 18},
  {name: 'Karla', lastName: 'Costa', age: 13}
]

const clientesMaiorDeIdade = clientes.filter((cliente) => {
  /*
  let maiorDeIdade = false
  
  if(cliente.age >= 18){
    maiorDeIdade = true
  }
  */

  //return maiorDeIdade

  //return cliente.age >= 18 ? true : false

  return cliente.age >= 18
})

console.log(clientesMaiorDeIdade)
