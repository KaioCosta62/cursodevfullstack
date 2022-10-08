const http = require('http')
const fs = require('fs')

const server = http.createServer(function(request, response){
  console.log(request.url)
  const url = request.url
  
  if(url === '/'){
    fs.readFile('../cliente/index.html', function(error, content){
      response.end(content)
    })
  }

  if(url === '/teste'){
    response.end('Estamos na url /teste')
  }

})

server.listen(5500)
