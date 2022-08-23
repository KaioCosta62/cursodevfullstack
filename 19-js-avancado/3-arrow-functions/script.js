const soma = (num1, num2) => {
  return num1 + num2;
};

const resultado = soma(10, 30);

console.log(resultado);

const calcularMedia = (nota1, nota2, nota3) => {
  return (nota1 + nota2 + nota3) / 3;
};

const resultadoMedia = calcularMedia(8, 7, 6.5);

console.log(resultadoMedia);

// Retorno implícito
const declararNome = (nome) => nome;
const exibirNome = declararNome('Kaio');
console.log(exibirNome);

// Quando tem apenas 1 parâmetro, posso esconder os parênteses
const numeroSorte = (numero) => numero;
const exibirNumero = numeroSorte(20);
console.log(exibirNumero);

const btn = document.querySelector('.btn');
/*
btn.addEventListener('click', function(){
  console.log(this) // Nesse caso, o this é o elemento button
})
*/

btn.addEventListener('click', () => {
  console.log(this); // Nesse caso, o elemento this faz referência ao window
});
