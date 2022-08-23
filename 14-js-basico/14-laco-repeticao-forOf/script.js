let clientes = [
  {
    nome: 'Kaio',
    idade: 21,
    linguagens: ['JavaScript', 'PHP', 'Python']
  },
  {
    nome: 'Vivian',
    idade: 29,
    linguagens: ['C++', 'C#', 'C']
  },
  {
    nome: 'César',
    idade: 40,
    linguagens: ['JavaScript', 'Ruby', 'PHP', 'Go', 'C']
  }
]

let htmlClientes = ''

for(let cliente of clientes){

  let htmlLinguagens = ''

  for(let linguagem of cliente.linguagens){
    htmlLinguagens += `<li> ${linguagem}</li>`
  }

  htmlClientes += `
    <li>
    <h3>Nome:  <span>${cliente.nome}</span> </h3>
    <h3>Idade: <span>${cliente.idade}</span></h3>
    <h3>Linguagens: </h3>
    <ul>
      ${htmlLinguagens}
    </ul>
    </li>
  `
}

document.querySelector('#listaClientes').innerHTML = htmlClientes