
let nomePessoa = prompt('Digite seu nome')
let idade = prompt('Digite sua idade')

/*
console.log(typeof idade)
if(idade >= 18){
  document.write(`Olá ${nomePessoa}! Você tem ${idade} anos, logo você é maior de idade`)
}else{
  document.write(`Olá ${nomePessoa}! Você tem ${idade} anos, logo você é menor de idade`)
}
*/

if(idade >= 18){
  document.write(`Olá ${nomePessoa}! Você tem ${idade} anos, logo você é maior de idade, boa festa`)
}else if (idade >= 16 && idade < 18){
  document.write(`Olá ${nomePessoa}! Você tem ${idade} anos, logo você é menor de idade, precisa de declaração dos pais para entrar na festa`)
}else{
  document.write(`Olá ${nomePessoa}! Você tem ${idade} anos, logo você é menor de idade, não pode entrar na festa`)
}