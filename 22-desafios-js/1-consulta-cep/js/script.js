
const Main = {
  init: function(){
    this.cacheSelector()
    this.bindEvents()
  },

  cacheSelector: function(){
    this.$inputPesquisa = document.querySelector('.inputCep')
  },

  apiDados: async function(cep){
    const dados = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(this.transformarEmJson)
    .then(this.exibirNaTela)
    .catch(this.erroRequisicao)
    return dados
  },

  transformarEmJson: function(response){
    return response.json()
  },

  exibirNaTela: function(dados){
    const $inputs = document.querySelectorAll('input')

    const $inputBairro = document.querySelector('.inputBairro')
    $inputBairro.value = dados.bairro

    const $inputRua = document.querySelector('.inputRua')
    $inputRua.value = dados.logradouro

    const $inputCidade = document.querySelector('.inputCidade')
    $inputCidade.value = dados.localidade

    const $inputEstado = document.querySelector('.inputEstado')
    $inputEstado.value = dados.uf

    const $inputIbge = document.querySelector('.inputIbge')
    $inputIbge.value = dados.ibge

    $inputs.forEach((input) => {
      if(input.value === 'undefined'){
        input.classList.add('erroPesquisa')
        input.value = 'Não encontramos esse dado, tente novamente!'
      }else{
        input.classList.remove('erroPesquisa')
      }
    })
  },

  erroRequisicao: function(){
    alert('Ocorreu um erro na requisição, tente novamente')
  },

  bindEvents: function(){
    const self = this
    this.$inputPesquisa.addEventListener('blur', self.Events.pesquisarCep_blur.bind(self))
  },

  Events: {
    pesquisarCep_blur: function(event){
      const inputCepValue = event.target.value
      this.apiDados(inputCepValue)
    }
  }
}

Main.init()

