import livros from "../models/Livro.js";

class LivroController {
    
    static listarLivros = async (req, res) => {

        const editora = req.query.editora

        if (editora) {
            const response = await livros.find({'editora': editora})
            return res.status(200).json(response)
        }

        const response = await livros.find().populate('autor')
        
        return res.status(200).json(response)
    }

    static detalharLivro = async (req, res) => {
        try {
            const id = req.params.id

            const livroEncontrado = await livros.findById(id).populate('autor', 'nome')
            res.status(200).json(livroEncontrado)
        }
        catch (err) {
            console.error(err);
            res.status(404).json({ error: `${err.message} - Falha ao tentar encontrar livro` });
        }

    }

    static cadastrarLivro = async (req, res) => {
        try {
            const novoLivro = req.body;
            const livroCriado = await livros.create(novoLivro);
        
            res.status(201).json(livroCriado);
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: `${err.message} - Falha ao cadastrar livro` });
        }
    
    }

    static atualizarLivro = async (req, res) => {
        
        try {
            const id = req.params.id
            const dadosAtualizados = req.body
            const livroAtualizado = await livros.findByIdAndUpdate(id, dadosAtualizados, {new: true});
            res.status(200).json(livroAtualizado);
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: `${err.message} - Falha ao atualizar livro` });
        }

    }
     static deletarLivro = async (req, res) => {
        
        try {
            const id = req.params.id
            await livros.findByIdAndDelete(id);
            res.status(204).json({});
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: `${err.message} - Falha ao deletar livro` });
        }

    }

    // static livroPorEditora = async (req, res) => {
    //     const editora = req.query.editora

    //     const response = await livros.find({'editora': editora})

    //     return res.status(200).json(response)
    // }
}

export default LivroController

