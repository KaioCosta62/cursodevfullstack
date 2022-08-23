

function mensagem(){
  return new Promise((resolve, reject) => {
    setTimeout(function(){
      const mensagem = 'Ok, promise resolvida!'
      resolve(mensagem)
    },10000)
  })
}

function exibirMensagem(mensagem){
  console.log(mensagem)
}


mensagem().then(exibirMensagem)




