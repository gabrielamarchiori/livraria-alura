import express from 'express'
import db from './config/dbConnect.js'
import livros from './models/Livro.js'

db.on('error', console.log.bind(console, 'Erro de conexão'))
db.once('open', () => {
    console.log('Conexão com o banco feita com Sucesso!')
})

const app = express()

app.use(express.json()) // interpreta o body

// const livros = [
//     {id: 1, titulo: 'Senhor dos anéis'},
//     {id: 2, titulo: 'O Hobbit'}
// ]

app.get('/', (req, res) => {
    res.status(200).send('Curso de Node')
})

// app.get('/livros', (req, res) => {
//     livros.find({})
//     .then(data => {
//         res.status(200).json(data);
//     })
//     .catch(err => {
//         console.error(err);
//         res.status(500).json({ error: 'Erro ao buscar os livros' });
//     });
// });

app.get('/livros', async (req, res) => {
    const response = await livros.find()
    return res.status(200).json(response)
})

// app.get('/livros/:id', (req, res) => {
//     let index = buscaLivro(req.params.id);
//     res.status(200).json(livros[index])
// })

// app.post('/livros', (req, res) => {
//     livros.push(req.body);
//     res.status(201).send('Livro cadastrado com sucesso!')
// })

// app.put('/livros/:id', (req, res) => {
//     let index = buscaLivro(req.params.id);
//     livros[index].titulo = req.body.titulo

//     res.status(200).json(livros)
// })
// app.delete('/livros/:id', (req, res) => {
//     let {id} = req.params // ou req.params.id
//     // let index = buscaLivro(req.params.id);
//     let index = buscaLivro(id)
//     livros.splice(index, 1)

//     res.status(204).send(`Livro ${id} removido com sucesso`)
// })

// function buscaLivro(id) {
//     return livros.findIndex(livro => livro.id == id)
// }

export default app