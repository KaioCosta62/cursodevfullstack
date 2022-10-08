const express = require('express')
const path = require('path')
const fs = require('fs')
const jsonData = require('./posts.json')

const app = express()


// Chamando o template engine
app.set('view engine', 'ejs')


// Definindo os arquivos estáticos
//app.use(express.static(path.join(__dirname, 'views')))

// Definindo os arquivos públicos
app.use(express.static(path.join(__dirname, 'public')))

// Habilitar meu servidor para receber dados do formulário
app.use(express.urlencoded({extended: true}))

//Rotas
app.get('/', (req,res) => {
  res.render('index', {
    title: 'Home'
  })
})

app.get('/participantes', (req,res) => {
  res.render('participantes', {
    title: 'Participantes'
  })
})

app.get('/curiosidades', (req, res) => {
  res.render('curiosidades', {
    title: 'Curiosidades'
  })
})

app.get('/favoritos', (req, res) => {
  res.render('favoritos', {
    title: 'Favoritos'
  })
})

app.get('/contato', (req, res) => {
  res.render('contato', {
    title: 'Contato'
  })
})

app.get('/posts', (req, res) => {
  res.render('posts', {
    title: 'Posts',
    posts: jsonData
  })
})


// Rota para cadastrar novos posts
app.get('/cadastrar-posts', (req, res) => {
  const {c} = req.query

  res.render('cadastrar-posts', {
    title: 'Cadastrar Posts',
    cadastro: c
  })
})

// Rota para receber os posts cadastrados

app.post('/salvar-posts', (req, res) => {
  const {titulo, texto} = req.body
  const jsonNoticias = fs.readFileSync('./store/posts-cadastrados.json')
  const jsonNoticiasArr = JSON.parse(jsonNoticias)

  jsonNoticiasArr.push({
    titulo,
    texto
  })

  const dataJson = JSON.stringify(jsonNoticiasArr)

  fs.writeFileSync('./store/posts-cadastrados.json', dataJson)

  res.redirect('/cadastrar-posts?c=1')
})

// Middleware 404 Not Found
app.use((req,res) => {
  res.render('error', {
    title: 'Error'
  })
})

// Inicializar o servidor
const port = process.env.PORT || 5500
app.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`)
})

