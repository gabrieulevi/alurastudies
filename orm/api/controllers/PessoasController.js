const database = require('../models');

class PessoasController{
    static async pegaTodasAsPessoas(req, res){
        try {
            const todasAsPessoas = await database.Pessoas.findAll();
            return res.status(200).json(todasAsPessoas);
        } catch (error) {
            console.log(error);
        }
    }
    static async pegaUmaPessoa(req, res){
        const {id} = req.params
        try {
            console.log(id);
            const umaPessoa = await database.Pessoas.findOne({ where: { id: Number(id) } });
            res.status(200).json({umaPessoa});
        } catch (error) {
            console.log(error);
        }
    }
}



module.exports = PessoasController