import autores from "../models/Autor.js";

class AutorController {
    
    static listarAutores = async (req, res) => {
        const response = await autores.find()
        return res.status(200).json(response)
    }

    static detalharAutor = async (req, res) => {
        try {
            const id = req.params.id

            const autorEncontrado = await autores.findById(id)
            res.status(200).json(autorEncontrado)
        }
        catch (err) {
            console.error(err);
            res.status(404).json({ error: `${err.message} - Falha ao tentar encontrar autor` });
        }

    }

    static cadastrarAutor = async (req, res) => {
        try {
            const novoAutor = req.body;
            const autorCriado = await autores.create(novoAutor);
        
            res.status(201).json(autorCriado);
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: `${err.message} - Falha ao cadastrar autor` });
        }
    
    }

    static atualizarAutor = async (req, res) => {
        
        try {
            const id = req.params.id
            const dadosAtualizados = req.body
            const autorAtualizado = await autores.findByIdAndUpdate(id, dadosAtualizados, {new: true});
            res.status(200).json(autorAtualizado);
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: `${err.message} - Falha ao atualizar autor` });
        }

    }
    
    static deletarAutor = async (req, res) => {
        
        try {
            const id = req.params.id
            await autores.findByIdAndDelete(id);
            res.status(204).json({});
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: `${err.message} - Falha ao deletar autor` });
        }

    }
}

export default AutorController