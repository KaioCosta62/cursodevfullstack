let nome = prompt("Digite seu nome")
let idade = parseInt(prompt("Digite sua idade"))
let mensagem = ''

if(idade < 0){
  alert('Idade incorreta, tente novamente!')
  idade = parseInt(prompt("Digite sua idade"))
}

if(idade >= 18){
  mensagem = `Olá ${nome}, você é maior de idade!`
}else{
  mensagem = `Olá ${nome}, você é menor de idade!`
}

document.write(mensagem)