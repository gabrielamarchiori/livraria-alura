const http = require('http')
const port = 3000

// const server = http.createServer((req, res) => {
//     res.writeHead(200, {'Content-Type': 'text/plain'})
//     res.end('Curso de Node')
// })

// server.listen(port, () => {
//     console.log(`Servidor escutando em http://localhost:${port}`)
// })

const rotas = {
    '/' : 'Curso de Node',
    '/livros': 'Entrei na pagina de livros',
    '/autores': 'Listagem de autores',
    '/editora': 'Pagina da editora',
    '/sobre': 'Informacoes sobre o projeto'
}

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(rotas[req.url]);
  })

  server.listen(port, () => {
    console.log(`Servidor escutando em http://localhost:${port}`)
})