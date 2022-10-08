const express = require('express')
const path = require('path')
const app = express()

// Definindo o template engine
app.set('view engine', 'ejs')

// Definindo os arquivos estáticos
//app.use(express.static(path.join(__dirname, 'views')))


// Definindo os arquivos públicos
app.use(express.static(path.join(__dirname, 'public')))


// rotas
app.get('/', (req, res) => {
  res.render('index', {
    title: 'Home'
  })
})

app.get('/participantes', (req, res) => {
  res.render('participantes', {
    title: 'Participantes'
  })
})

app.get('/curiosidades', (req, res) => {
  res.render('curiosidades', {
    title: 'Curiosidades'
  })
})

app.get('/favorito', (req, res) => {
  res.render('favoritos', {
    title: 'Favoritos'
  })
})

app.get('/contato', (req,res) => {
  res.render('contato', {
    title: 'Contato'
  })
})


// 404 Error Not Found - Middleware
app.use((req, res) => { 
  res.render('error', {
    title: 'Página não encontrada'
  })
})


// executando o servidor
const port = process.env.PORT || 5500
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
})