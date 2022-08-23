const alunos = [
  {
    nome: 'Kaio',
    sobrenome: 'Henrique',
    nota: 9
  },
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
    nome: 'Sara',

    sobrenome: 'Souza',

    nota: 5,
  },

  {
    nome: 'Clara',

    sobrenome: 'Barbosa',

    nota: 9,
  },

  {
    nome: 'Rodrigo',

    sobrenome: 'Barros',

    nota: 4,
  },

  {
    nome: 'Renato',

    sobrenome: 'Barros',

    nota: 7,
  },

  {
    nome: 'Andrea',

    sobrenome: 'Batista',

    nota: 6,
  },

  {
    nome: 'Carla',

    sobrenome: 'Campos',

    nota: 3,
  },
];

const formulario = document.querySelector('.filtrarAlunos')

let notaInput = () => {
  const inputNota = document.querySelector('.notaAluno')
  const inputNotaValue = parseInt(inputNota.value)
  return inputNotaValue
}

let procurarNotaAlunos = (alunos) => {
  const lista = document.querySelector('.listaAlunos')
  const span = document.querySelector('.erroPesquisa')

  let htmlList = ''
  const notaPesquisada = notaInput()

  for(let aluno of alunos){
    if(notaPesquisada === aluno.nota){
      htmlList += `<li>${aluno.nome} ${aluno.sobrenome} | Nota: ${aluno.nota}</li>`
      lista.innerHTML = htmlList
    }
  }

  if(htmlList){
    span.innerHTML = ''
  }else{
    span.innerHTML = 'Não encontramos nenhum aluno com essa nota'
    lista.innerHTML = ''
  }

}

formulario.addEventListener('submit', function(event){
  event.preventDefault()

  let verificaErro = false
  let inputNota = document.forms['filtrarAlunos']['nota']

  if(!inputNota.value){
    verificaErro = true
    alert('Insira uma nota válida')
  }

  if(!verificaErro){
    procurarNotaAlunos(alunos)
  }

})
