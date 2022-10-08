const fs = require('fs')

fs.readFile('./clientes.json', function(error, content){
  if(error){
    console.log("Ops. ocorreu um erro na leitura do arquivo", error)
  }else{
    console.log(JSON.parse(content))
  }
})