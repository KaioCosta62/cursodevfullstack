function yearsInvestiments(){
  let htmlYearsInvestiments
  const selectYears = document.querySelector('.timeYears')

  for(let i = 1; i <= 10; i++){ 

    if(i > 1){
      htmlYearsInvestiments = `
      <option value="${i}">${i} anos</option>
    `
    }else{
      htmlYearsInvestiments = `
      <option value="${i}">${i} ano</option>
    `
    }

    selectYears.innerHTML += htmlYearsInvestiments
  }
}

function simulateInvesitments(){
  const form = document.querySelector('#simulator')
  const firstPage = document.querySelector('.first-page')
  const secondPage = document.querySelector('.second-page')
  const spinner = document.querySelector('.spinner')

  form.addEventListener('submit', function(e){
    e.preventDefault()
    let verifyError = false

    const inputName = document.forms['simulator']['name']
    const regexName = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/
    const verifyName = regexName.test(inputName.value)

    if(!verifyName){
      verifyError = true
      inputName.classList.add('error-input')
      let span = inputName.nextElementSibling
      span.innerHTML = 'Por favor, insira seu nome'
    }else{
      inputName.classList.remove('error-input')
      let span = inputName.nextElementSibling
      span.innerHTML = ''
    }

    const inputMensality = document.forms['simulator']['mensality']
    const mensalityNumber = Number(inputMensality.value.replace(',','.'))

    if(!inputMensality.value){
      verifyError = true
      inputMensality.classList.add('error-input')
      let span = inputMensality.nextElementSibling
      span.innerHTML = 'Por favor, insira um valor de mensalidade'
    }else{
      inputMensality.classList.remove('error-input')
      let span = inputMensality.nextElementSibling
      span.innerHTML = ''
    }

    const inputInterestRate = document.forms['simulator']['rate']
    const interestRateNumber = Number(inputInterestRate.value.replace(',','.'))

    if(!inputInterestRate.value){
      verifyError = true
      inputInterestRate.classList.add('error-input')
      let span = inputInterestRate.nextElementSibling
      span.innerHTML = 'Por favor, insira uma taxa de juros'
    }else{
      inputInterestRate.classList.remove('error-input')
      let span = inputInterestRate.nextElementSibling
      span.innerHTML = ''
    }

    const inputTimeInvestiment = document.forms['simulator']['timeYears']
    const timeInvestimentNumber = Number(inputTimeInvestiment.value)

    const configApi = {
      header: {
        "content-type": "application/json"
      },
      method: "POST",
      body: `{ "expr": "${mensalityNumber} * (((1 + ${interestRateNumber / 100}) ^ ${timeInvestimentNumber * 12} - 1) / ${interestRateNumber / 100})" }`
    }

    function transformedJson(response){
      return response.json()
    }

    function apiData(data){
  
        if(!verifyError){
          firstPage.style.display = 'none'
          spinner.style.display = 'block'
          
          setTimeout(function(){
            spinner.style.display = 'none'
            let returnInvestiment = Number(data.result)
            let estructureHTMLSecondPage = `
            <h3>Money Investiments</h3>
            <p>
              Olá ${inputName.value}, investindo R$ ${mensalityNumber} reais todo mês, você terá R$ ${returnInvestiment.toFixed(2).replace('.',',')} em ${timeInvestimentNumber} anos</p>
            <button>Simular novamente</button>
          `
          secondPage.innerHTML = estructureHTMLSecondPage
          secondPage.style.display = 'flex'
  
          const btnSimulateAgain = document.querySelector('.second-page button')
  
          btnSimulateAgain.addEventListener('click', function(){
            firstPage.style.display = 'flex'
            secondPage.style.display = 'none'

            inputName.value = ''
            inputMensality.value = ''
            inputInterestRate.value = ''
          })

        }, 800)
          
        }   
    }

    fetch('https://api.mathjs.org/v4/', configApi).then(transformedJson).then(apiData)
  })
}

function onlyNumber() {
  const theEvent = window.event;
  let key = theEvent.keyCode;
  key = String.fromCharCode( key );

  const regex = /^[0-9.,]+$/;
  if( !regex.test(key) ) {
     if(theEvent.preventDefault) theEvent.preventDefault();
  }
}

yearsInvestiments()
simulateInvesitments()

