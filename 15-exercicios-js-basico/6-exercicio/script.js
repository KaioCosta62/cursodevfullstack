let listaAtores = [

  {

    nome: 'Keanu Reeves',

    personagem: 'Neo',

    filme: 'The Matrix',

  },

  {

    nome: 'David Prowse',

    personagem: 'Darth Vader',

    filme: 'Star Wars Episódios IV-VI',

  },

  {

    nome: 'Bruce Wayne',

    personagem: 'Batman',

    filme: 'Batman - O Início'

  },

]

let boxContainer = ''

for(let lista of listaAtores){
  boxContainer += `
    <div class = 'box'>
      <h1> ${lista.nome}</h1>
      <p> Interpreta o personagem ${lista.personagem} no filme ${lista.filme}</p>
    </div>
  `
}

document.querySelector('#container').innerHTML = boxContainer