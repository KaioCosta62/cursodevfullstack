

const alunos = [
  {
    nome: 'Maria',

    sobrenome: 'da Silva',

    nota: 10,
  },

  {
    nome: 'José',

    sobrenome: 'Moreira',

    nota: 4,
  },

  {
    nome: 'Paulo',

    sobrenome: 'Henrique',

    nota: 7,
  },

  {
    nome: 'Pedro',

    sobrenome: 'Souza',

    nota: 5,
  },
];

const media = 7;

function verificarAlunosAprovados(arr){
  const aprovados = arr.filter(aluno => aluno.nota >= media)
  return aprovados  
}

function verificarAlunosReprovados(arr){
  const reprovados = arr.filter(aluno => aluno.nota < media)
  return reprovados
}

const alunosAprovados = verificarAlunosAprovados(alunos)
const alunosReprovados = verificarAlunosReprovados(alunos)

console.log(alunosAprovados)
console.log(alunosReprovados)
