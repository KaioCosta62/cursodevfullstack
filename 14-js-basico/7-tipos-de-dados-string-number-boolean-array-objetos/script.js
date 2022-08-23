// string
let nome = 'Kaio'
console.log(nome)

// string concatenada

let sobrenome = 'Henrique';
//console.log(nome + " " + sobrenome)

// string literal
console.log(`${nome} ${sobrenome} templete literal`)


//number
let idade = 21
console.log(idade + 10)

//number float
let porcentagemDesconto = 10.2
console.log(porcentagemDesconto)
console.log(`${porcentagemDesconto}%`)


// boolean

let maiorDeIdade = true
console.log(maiorDeIdade)

let possuiMestrado = false
console.log(possuiMestrado)


//array

let habilidades = ['JavaScript', 'React', 'HTML', 'CSS']
console.log(habilidades)
console.log(habilidades[2])
console.log(habilidades.length)
console.log(habilidades[4])



// object


let pessoa = {
  nome: 'Kaio',
  sobrenome: 'Henrique',
  idade: 21,
  profissao: 'Programador',
  habilidades: ['JS', 'HTML', 'CSS', 'React', 'Node'],
  nomeCompleto: `${nome} ${sobrenome}`
}
console.log(pessoa)
console.log(pessoa.nome)
console.log(pessoa.idade)
console.log(pessoa.habilidades)
console.log(pessoa.habilidades[0])
console.log(pessoa.nomeCompleto)


// Undefined

let endereco
console.log(endereco)

// Null

let cidade = null
console.log(cidade)