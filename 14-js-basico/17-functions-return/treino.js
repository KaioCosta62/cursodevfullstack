let alunosEscola = [
  {nome: 'Kaio', nota: 7.5},
  {nome: 'Bianca', nota: 10},
  {nome: 'Diego', nota: 4},
  {nome: 'Karla', nota: 5},
  {nome: 'José', nota: 8},
  {nome: 'Talia', nota: 3.5},
  {nome: 'Príscila', nota: 9},
  {nome: 'Antônio', nota: 8},
  {nome: 'Joseph', nota: 2},
  {nome: 'Cristiano', nota: 7}
]

let mediaMinima = 6

function alunosAprovados(alunos){
  let aprovado = ''

  for(let aluno of alunos){
     if(aluno.nota >= mediaMinima){
        aprovado += `<li> ${aluno.nome} - ${aluno.nota} </li>`
     }
  }

  return aprovado
}

function alunosReprovados(alunos){
  let reprovado = ''

  for(let aluno of alunos){
    if(aluno.nota < mediaMinima){
      reprovado += `<li> ${aluno.nome} - ${aluno.nota} </li>`
    }
  }

  return reprovado
}


let aprovados = alunosAprovados(alunosEscola)
let reprovados = alunosReprovados(alunosEscola)

document.querySelector('#aprovados').innerHTML = aprovados
document.querySelector('#reprovados').innerHTML = reprovados

