let inputTabuada = prompt('Digite o número que você deseja ver a tabuada');
let numeroTabuada = parseInt(inputTabuada);

for (let contador = 1; contador <= 10; contador++) {
  let resultadoTabuada = numeroTabuada * contador
  let mensagemFinal = `${numeroTabuada} x ${contador} = ${resultadoTabuada} <br>`
  console.log(mensagemFinal)
  document.write(mensagemFinal)
}

