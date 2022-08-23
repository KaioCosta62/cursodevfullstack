  function entradaDeDados(){
    let nome = prompt('Digite seu nome')
    let idade = parseInt(prompt('Digite sua idade'))

    let saudacao = ''
    let mensagemPersonalizada = ''
    
    if(nome === '' || idade === NaN){
      alert('Preencha os dados corretamente!')
      return
    }

    if(idade >= 18){
      saudacao = `Olá ${nome}, você é maior de idade`
    }else if (idade < 18){
      saudacao = `Olá ${nome}, você é menor de idade`
    }

    if(nome === 'Thomas Anderson' || nome === 'thomas anderson'){
      mensagemPersonalizada = 'Você é personagem do filme The Matrix'
    }

    document.querySelector('#saudacao').innerHTML = saudacao
    document.querySelector('#mensagemPersonalizada').innerHTML = mensagemPersonalizada
    
  }