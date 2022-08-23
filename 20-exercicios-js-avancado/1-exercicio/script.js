const alunos = [

  {

    nome: 'Maria',

    sobrenome: 'da Silva',

  },

  {

    nome: 'José',

    sobrenome: 'Moreira',

  },

  {

    nome: 'Paulo',

    sobrenome: 'Henrique',

  },

  {

    nome: 'Pedro',

    sobrenome: 'Souza',

  },

]

function concatenarNomeSobrenome(arr){
  const nomeESobrenomeConcatenados = arr.map(aluno => `${aluno.nome} ${aluno.sobrenome}`)
  return nomeESobrenomeConcatenados
}
console.log(concatenarNomeSobrenome(alunos))