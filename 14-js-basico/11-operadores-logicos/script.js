let inputNota1 = prompt('Digite a primeira nota')
let inputNota2 = prompt('Digite a segunda nota')

let nota1 = parseInt(inputNota1)
let nota2 = parseInt(inputNota2)


if(nota1 > 10 || nota2 > 10){
  alert('Notas inválidas, digite sua nota de 0 à 10!')
  inputNota1 = prompt('Digite a primeira nota')
  inputNota2 = prompt('Digite a segunda nota')
  nota1 = parseInt(inputNota1)
  nota2 = parseInt(inputNota2)
}

let mediaMinima = 7

let media = (nota1 + nota2) / 2

if(media >= mediaMinima){
  document.write('Parabéns, você foi aprovado!')
}else{
  document.write('Ops, você foi reprovado!')
}

document.write('<br>')
document.write('<br>')


if(media >= mediaMinima && media === 10){
  document.write('Incrível, você tirou 10 de média, continue assim!')
}else if(media >= mediaMinima && media === 9){
  document.write('Parabéns, Você tirou 9 de média, vamos em busca do 10?')
}else if (media === mediaMinima){
  document.write('Você passou exatamente com a média mínima, se esforce mais!')
}else if (media < mediaMinima && media <= 5){
  document.write('Você foi reprovado e sua média está muito baixa! Vamos estudar mais pra melhorar?')
}else if (media < mediaMinima && media >= 6.9){
  document.write('Você foi reprovado mas sua média está próxima da média mínima.')
}