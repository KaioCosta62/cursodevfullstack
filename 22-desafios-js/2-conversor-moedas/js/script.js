
const dollarToRealConverter = {
  init: function(){
    this.cacheSelector()
    this.bindEvents()
  },

  cacheSelector: function(){
    this.$buttonCalculate = document.querySelector('.btnCalcular')
  },

  bindEvents: function(){
    const self = this
    this.$buttonCalculate.addEventListener('click', self.Events.convertDolarToReal_click.bind(self))
  },

  apiCoins: async function(){
    const apiData = await fetch(' https://economia.awesomeapi.com.br/last/USD-BRL')
    .then(this.convertToJson)
    .then(this.formatData)
    return apiData
  },

  convertToJson: function(response){
    return response.json()
  },

  formatData: function(data){

    const inputDolar = document.querySelector('.inputDolar')

    const inputDolarValue = Number(inputDolar.value)

    const valueDollarNow = data.USDBRL.bid

    const convertCoinToReal= (inputDolarValue * valueDollarNow).toFixed(2)

    const resultConversion = document.querySelector('.resultado')

    const message = `${inputDolarValue} dólares equivale a ${convertCoinToReal} reais, na cotação atual`

    resultConversion.innerHTML = message
    
    inputDolar.value = ''
  },


  Events: {
    convertDolarToReal_click: function(){
      this.apiCoins()
    }
  }
}

dollarToRealConverter.init()