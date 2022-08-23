const formulario = document.querySelector('#exercicio');

const selectEstado = document.querySelector('#estados');

const cidades = {
  sp: ['Jundiaí', 'Campinas', 'Limeira', 'Atibaia'],

  rj: ['Teresópolis', 'Resende', 'Maricá', 'Macaé'],
};

function selecionarEstado(evento) {
  const estadoSelecionado = evento.target.value;
  let htmlCidades = `<option value = ''> -- Selecione a cidade -- </option>`;

  if (estadoSelecionado === 'São Paulo') {
    for (let cidade of cidades.sp) {
      htmlCidades += `
        <option value = '${cidade}'> ${cidade}</option>
      `;
    }
  } else if (estadoSelecionado === 'Rio de Janeiro') {
    for (let cidade of cidades.rj) {
      htmlCidades += `
        <option value = '${cidade}'> ${cidade}</option>
      `;
    }
  }

  document.querySelector('#selecionarCidade').style.display = 'block';
  document.querySelector('#cidades').innerHTML = htmlCidades;

}

function validarFormulario(evento){
  evento.preventDefault()

  let verificarErro = false

  const selectEstado = document.forms['exercicio']['estados']

  if(!selectEstado.value){
    verificarErro = true
    selectEstado.classList.add('selectError')
    let span = selectEstado.nextElementSibling
    span.innerText = 'Campo vazio, selecione seu estado!'
  }else{
    selectEstado.classList.remove('selectError')
    let span = selectEstado.nextElementSibling
    span.innerText = ''
  }

  const selectCidade = document.forms['exercicio']['cidades']

  if(!selectCidade.value){
    verificarErro = true
    selectCidade.classList.add('selectError')
    let span = selectCidade.nextElementSibling
    span.innerText = 'Campo vazio, selecione sua cidade!'
  }else{
    selectCidade.classList.remove('selectError')
    let span = selectCidade.nextElementSibling
    span.innerText = ''
  }

  if(!verificarErro){
    formulario.submit()
  }
}

selectEstado.addEventListener('change', selecionarEstado);
formulario.addEventListener('submit', validarFormulario)


