const database = require('../models');

class PessoasController{
    static async pegaTodasAsPessoas(req, res){
        try {
            const todasAsPessoas = await database.Pessoas.findAll();
            return res.status(200).json(todasAsPessoas);
        } catch (error) {
            console.log(error);
            res.status(500).send(error);
        }
    }
    static async pegaUmaPessoa(req, res){
        const { id } = req.params
        try {
            console.log(id);
            const umaPessoa = await database.Pessoas.findOne({ where: { id: Number(id) } });
            res.status(200).json(umaPessoa);
        } catch (error) {
            console.log(error);
            res.status(500).send(error);
        }
    }
    static async pegaUmaMatricula(req, res){
        const { estudanteId, matriculaId } = req.params
        try {
            console.log(id);
            const umaMatricula = await database.Matriculas.findOne(
                { 
                    where: { 
                        id: Number(matriculaId), 
                        estudante_id : Number(estudanteId)
                    } 
                });
            res.status(200).json(umaPessoa);
        } catch (error) {
            console.log(error);
            res.status(500).send(error);
        }
    }
    static async criaPessoa(req, res){
        const novaPessoa = req.body;

        try {
            console.log(novaPessoa);
            const novaPessoaCriada = await database.Pessoas.create(novaPessoa);
            return res.status(200).json(novaPessoaCriada);
        } catch (error) {
            console.log(error);
            res.status(500).send(error);
        }
    }
    static async criaMatricula(req, res){
        const {estudanteId} = req.params;
        const novaMatricula = { ...req.body, estudante_id: Number(estudanteId) }

        try {
            console.log(novaMatricula);
            const novaMatriculaCriada = await database.Matriculas.create(novaMatricula);
            return res.status(200).json(novaMatriculaCriada);
        } catch (error) {
            console.log(error);
            res.status(500).send(error);
        }
    }
    static async atualizaPessoa(req, res){
        const novosDados = req.body;
        const {id} = req.params
        try {
            await database.Pessoas.update(novosDados, {
                where: {
                    id: Number(id)
                }
            })
            const pessoaAtualizada = await database.Pessoas.findOne({
                where: {
                    id: id
                }
            })
            res.status(200).json(pessoaAtualizada);
        } catch (error) {
            console.log(error);
            res.status(500).send(error);
        }
    }
    static async atualizaPessoa(req, res){
        const novosDados = req.body;
        const {estudanteId, matriculaId} = req.params
        try {
            await database.Matriculas.update(novosDados, {
                where: {
                    id: Number(matriculaId),
                    estudante_id : Number(estudanteId)
                }
            })
            const matriculaAtualizada = await database.Matriculas.findOne({
                where: {
                    id: matriculaId
                }
            })
            res.status(200).json(pessoaAtualizada);
        } catch (error) {
            console.log(error);
            res.status(500).send(error);
        }
    }
    static async removePessoa(req, res){
        const { id } = req.params;
        console.log(id);
        try {
            await database.Pessoas.destroy({
                where: {
                    id: Number(id)
                }
            })
        } catch (error) {
            console.log(error);
            res.status(500).send(error)
        }
    }
    static async removeMatricula(req, res){
        const { matriculaId, estudanteId } = req.params;
        try {
            await database.Matriculas.destroy({
                where: {
                    id: Number(matriculaId),
                    estudante_id: Number(estudanteId)
                }
            })
        } catch (error) {
            console.log(error);
            res.status(500).send(error)
        }
    }
    static async restauraPessoa(req, res){
        const { id } = req.params;
        try {
            await database.Pessoas.restore( { where: { id : Number(id)}} );
            res.status(200).send(`id ${id} restaurado`);
        } catch (error) {
            console.log(error);
            res.status(500).send(error);
        }
    }
}



module.exports = PessoasController