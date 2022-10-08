const express = require('express')
const path = require('path')
const app = express()


// Definindo os arquivos estáticos
app.use(express.static(path.join(__dirname, 'views')))

/*
const staticFolder = path.join(__dirname, 'views')
const expressStatic = express.static(staticFolder)
app.use(expressStatic)
*/


// Definindo os arquivos públicos
app.use(express.static(path.join(__dirname, 'public')))

/*
const publicFolder = path.join(__dirname, 'public')
const expressPublic = express.static(publicFolder)
app.use(expressPublic)
*/

// rotas
app.get('/', (req,res) => {
  res.render('views/index.html')
})
app.get('/sobre', (req, res) => {
  res.send('Estamos na página sobre')
})




// 404 Error Not Found Middleware

app.use((req, res) => {
  res.send('404 Error')
})


// Executando o servidor

const port = process.env.PORT || 5500
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})