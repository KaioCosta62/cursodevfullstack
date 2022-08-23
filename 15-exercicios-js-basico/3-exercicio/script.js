function entradaDados(){
  let nome = prompt("Digite seu nome")
  let idade = parseInt(prompt("Digite sua idade"))
  let mensagem = ''
  let mensagemPersonalizada = ''

  if(idade < 0){
    alert('Idade incorreta! Tente novamente!')
    idade =  parseInt(prompt("Digite sua idade"))
  }

  if(idade >= 18){
    mensagem = `Olá ${nome}, você é maior de idade`
  }else{
    mensagem = ` Olá ${nome}, você é menor de idade`
  }

  if(nome === 'Thomas Anderson' || nome === 'thomas anderson'){
    mensagemPersonalizada = 'Você é personagem do filme The Matrix'
  }

  document.querySelector('#saudacao').innerHTML = mensagem
  document.querySelector('#mensagemPersonalizada').innerHTML = mensagemPersonalizada
}



