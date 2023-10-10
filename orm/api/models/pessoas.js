'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pessoas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Pessoas.hasMany(models.Turmas, {
        foreignKey : 'docente_id'
      });
      Pessoas.hasMany(models.Matriculas, {
        foreignKey : 'estudante_id'
      });
    }
  }
  Pessoas.init({
    nome: {
      type: DataTypes.STRING,
      validate: {
         funcaovalidadora: function(dado){
          if(dado.length < 3) throw new Error('dado com menos de 3 caracteres não aceito')
         }
      }
    },
    ativo: DataTypes.BOOLEAN,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'dado tipo email invalido'
        }
      }
    },
    role: DataTypes.STRING
  }, {
    sequelize,
    paranoid: true,
    modelName: 'Pessoas',
    defaultScope: {
      where: { ativo: true }
    },
    scopes: {
      todos: {
        where: {}
      }
    }
  });
  return Pessoas;
};