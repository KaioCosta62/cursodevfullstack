console.log('Hello World')

//console.log(window,document) // Não são acessíveis ao lado do servidor

function somarNumeros(n1, n2){
  return n1 + n2
}

console.log(somarNumeros(10, 30))

const meusDados = {
  nome: 'Kaio Henrique',
  idade: 22,
  profissao: 'Programador',
  fazFaculdade: true,
  imc: function(){
    return 65 / (1.80 * 1.80)
  }
}

console.log(meusDados.imc().toFixed(2))
