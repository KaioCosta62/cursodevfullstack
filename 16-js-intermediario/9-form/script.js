let formulario = document.querySelector('#formCadastro')

formulario.addEventListener('submit', function(evento){

  evento.preventDefault()

  let verificarErro = false

  const inputNome = document.forms['formCadastro']['nome']
  if(!inputNome.value){
    verificarErro = true
    inputNome.classList.add('inputError')
    let span = inputNome.nextElementSibling
    span.innerHTML = 'Campo de nome vazio, tente novamente'
  }else{
    inputNome.classList.remove('inputError')
    let span = inputNome.nextElementSibling
    span.innerHTML = ''
  }


  const inputEmail = document.forms['formCadastro']['email']
  if(!inputEmail.value){
    verificarErro = true
    inputEmail.classList.add('inputError')
    let span = inputEmail.nextElementSibling
    span.innerHTML = 'Campo de e-mail vazio, tente novamente'
  }else{
    inputEmail.classList.remove('inputError')
    let span =  inputEmail.nextElementSibling
    span.innerHTML = ''
  }


  const inputOptions = document.forms['formCadastro']['cidade']
  if(!inputOptions.value){
    verificarErro = true
    inputOptions.classList.add('inputError')
    let span = inputOptions.nextElementSibling
    span.innerHTML = 'Campo de cidade vazio, tente novamente'
  }else{
    inputOptions.classList.remove('inputError')
    let span = inputOptions.nextElementSibling
    span.innerHTML = ''
  }

  if(!verificarErro){
    formulario.submit()
  }
  
})