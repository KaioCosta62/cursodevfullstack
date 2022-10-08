
const express = require('express')
const path = require('path')
const jsonData = require('./posts.json')
const fs = require('fs')


const app = express()


// Definindo o template engine
app.set('view engine', 'ejs')

// Definindo os arquivos estáticos
//app.use(express.static(path.join(__dirname, 'views')))


// Definindo os arquivos públicos
app.use(express.static(path.join(__dirname, 'public')))

// Habilitando meu servidor para receber os dados do formulário via post
app.use(express.urlencoded({extended: true}))

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

app.get('/posts', (req, res) => {
  res.render('posts', {
    title: 'Posts',
    posts: jsonData
  })
})

// Rota para cadastrar novos posts
app.get('/cadastro-posts', (req, res) => {
  const {c} = req.query
  console.log(c)
  res.render('cadastro-posts', {
    title: 'Cadastrar Posts',
    cadastrado: c
  })
})

// Rota para receber os posts cadastrados
app.post('/salvar-posts', (req, res) => {
  const {titulo, texto} = req.body

  const data = fs.readFileSync('./store/posts-cadastrados.json')
  const posts = JSON.parse(data)

  posts.push({
    titulo,
    texto
  })

  const postsString = JSON.stringify(posts)

  fs.writeFileSync('./store/posts-cadastrados.json', postsString)

  res.redirect('/cadastro-posts?c=1')
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