const aluno = {
  nome: 'Maria',
  sobrenome: 'da Silva',
  notas: [7, 10, 8, 5, 7, 9],
};

const totalBimestres = aluno.notas.length

function calcularNotas(obj){

  let somaDasNotas = obj.notas.reduce((acc, curr) => acc + curr, 0)

  return somaDasNotas

}


function calcularMedia(){

  const somaDasNotas = calcularNotas(aluno)
  const calcularMedia = Math.round(somaDasNotas / totalBimestres)

  return calcularMedia

}

function mensagemAluno(){

  const media = calcularMedia()
  const mensagem = `A média da ${aluno.nome} foi ${media} para um total de ${totalBimestres} bimestres`

  return mensagem

}

console.log(mensagemAluno())



