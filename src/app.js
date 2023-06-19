import express from 'express'
import db from './config/dbConnect.js'
import routes from './routes/index.js'

db.on('error', console.log.bind(console, 'Erro de conexão'))
db.once('open', () => {
    console.log('Conexão com o banco feita com Sucesso!')
})

const app = express()

app.use(express.json()) // interpreta o body

routes(app)


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


export default app