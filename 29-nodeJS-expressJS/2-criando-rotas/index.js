const express = require('express')
const app = express()
const fs = require('fs')

// Rotas

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/sobre', (req, res) => {
  res.send('Você está na página sobre')
})

// 404 Error Not Found // Middleware
app.use((req, res) => {
  fs.readFile('./error.html', (error, content) => {
    res.end(content)
  })
})

const port = process.env.PORT || 5500
app.listen(port, () => console.log(`Server is listening on port ${port}`))