
let anoNascimento = ''

for(let contador = 1900; contador <= 2022; contador++){
  anoNascimento += `<option>${contador}</option>`
}

document.querySelector('#anoNascimento').innerHTML = anoNascimento


let cliente = ''
let clientes = ['Kaio', 'Rafael', 'José', 'Miriam', 'Viviane', 'José','Matheus']

for(let contador = 0; contador < clientes.length; contador++){
  cliente += `<li>${clientes[contador]} - ${contador}</li>`
}

document.querySelector('#listaClientes').innerHTML = cliente