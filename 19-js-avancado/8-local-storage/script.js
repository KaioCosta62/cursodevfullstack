const tarefas = [
  {tarefa: 'Estudar js'},
  {tarefa: 'Estudar node.js'},
  {tarefa: 'Estudar react.js'}
]

const tarefasJson = JSON.stringify(tarefas)

localStorage.setItem('tarefas', tarefasJson)

const listaDeTarefasSalvas = localStorage.getItem('tarefas')

const listaTarefasObj = JSON.parse(listaDeTarefasSalvas)

console.log(listaTarefasObj)

const inputName = document.querySelector('input')



document.querySelector('button').addEventListener('click', function(){
  localStorage.setItem('nome', inputName.value)
  const valorDigitado = localStorage.getItem('nome')
  console.log(valorDigitado)
})