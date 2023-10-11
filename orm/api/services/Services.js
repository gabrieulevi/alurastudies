const database = require('../models');

class Services {
    constructor(nomeDoModelo){
        this.nomeDoModelo = nomeDoModelo;
    }

    async pegaTodosOsRegistros(){
        return database[this.nomeDoModelo].findAll()
    }

    async pegaUmRegistro(id){

    }

    async atualizaRegistro(dadosRegistro, where, transacao = {}){
        return database[this.nomeDoModelo].update(dadosRegistro, {where: {...where}}, transacao)
    }

    async removeRegistro(id){

    }
}

module.exports = Services;