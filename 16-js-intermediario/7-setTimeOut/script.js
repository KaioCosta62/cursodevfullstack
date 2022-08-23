const btn = document.querySelector('#botaoCadastrar')
const toast = document.querySelector('.toast')
const tarefa = document.querySelector('input[name = tarefa]')

function removeToast(){
  toast.classList.remove('visible')
}

btn.addEventListener('click', function(){
  toast.innerHTML = `Tarefa [${tarefa.value}] cadastrada com sucesso!`
  toast.classList.add('visible')
  setTimeout(removeToast, 5000)
})

