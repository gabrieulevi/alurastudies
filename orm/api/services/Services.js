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

    async atualizaRegistro(dadosRegistro, id){

    }

    async removeRegistro(id){
        
    }
}

module.exports = Services;