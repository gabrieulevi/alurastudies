// const database = require("../models");
// const Sequelize = require("sequelize");

const { PessoasServices } = require('../services/index')
const pessoasServices = new PessoasServices();

class PessoasController {
  static async pegaTodasAsPessoasAtivas(req, res) {
    try {
      const pessoasAtivas = await pessoasServices.pegaRegistrosAtivos();
      return res.status(200).json(pessoasAtivas);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }
  static async pegaTodasAsPessoas(req, res) {
    try {
      const todasAsPessoas = await pessoasServices.pegaTodosOsRegistros();
      return res.status(200).json(todasAsPessoas);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }
  static async pegaUmaPessoa(req, res) {
    const { id } = req.params;
    try {
      console.log(id);
      const umaPessoa = await database.Pessoas.findOne({
        where: { id: Number(id) },
      });
      res.status(200).json(umaPessoa);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }
  static async pegaUmaMatricula(req, res) {
    const { estudanteId, matriculaId } = req.params;
    try {
      console.log(id);
      const umaMatricula = await database.Matriculas.findOne({
        where: {
          id: Number(matriculaId),
          estudante_id: Number(estudanteId),
        },
      });
      res.status(200).json(umaPessoa);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }
  static async pegaMatriculas(req, res) {
    const { estudanteId } = req.params;
    try {
      console.log(estudanteId);
      const pessoa = await database.Pessoas.findOne({
        where: {
            id: Number(estudanteId)
        }
      })
      const matriculas = await pessoa.getAulasMatriculadas();
      res.status(200).json(matriculas);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }
  static async criaPessoa(req, res) {
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
  static async criaMatricula(req, res) {
    const { estudanteId } = req.params;
    const novaMatricula = { ...req.body, estudante_id: Number(estudanteId) };

    try {
      console.log(novaMatricula);
      const novaMatriculaCriada = await database.Matriculas.create(
        novaMatricula
      );
      return res.status(200).json(novaMatriculaCriada);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }
  static async atualizaPessoa(req, res) {
    const novosDados = req.body;
    const { id } = req.params;
    try {
      await database.Pessoas.update(novosDados, {
        where: {
          id: Number(id),
        },
      });
      const pessoaAtualizada = await database.Pessoas.findOne({
        where: {
          id: id,
        },
      });
      res.status(200).json(pessoaAtualizada);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }

//   static async atualizaPessoa(req, res) {
//     const novosDados = req.body;
//     const { estudanteId, matriculaId } = req.params;
//     try {
//       await database.Matriculas.update(novosDados, {
//         where: {
//           id: Number(matriculaId),
//           estudante_id: Number(estudanteId),
//         },
//       });
//       const matriculaAtualizada = await database.Matriculas.findOne({
//         where: {
//           id: matriculaId,
//         },
//       });
//       res.status(200).json(pessoaAtualizada);
//     } catch (error) {
//       console.log(error);
//       res.status(500).send(error);
//     }
//   }
  static async removePessoa(req, res) {
    const { id } = req.params;
    console.log(id);
    try {
      await database.Pessoas.destroy({
        where: {
          id: Number(id),
        },
      });
      res.status(200).send("Pessoa deletada");
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }
  static async removeMatricula(req, res) {
    const { matriculaId, estudanteId } = req.params;
    try {
      await database.Matriculas.destroy({
        where: {
          id: Number(matriculaId),
          estudante_id: Number(estudanteId),
        },
      });
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }
  static async restauraPessoa(req, res) {
    const { id } = req.params;
    try {
      await database.Pessoas.restore({ where: { id: Number(id) } });
      res.status(200).send(`id ${id} restaurado`);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }
  static async restauraMatricula(req, res) {
    const { estudanteId, matriculaId } = req.params;
    try {
      await database.Matriculas.restore({
        where: { id: Number(matriculaId), estudante_id: Number(estudanteId) },
      });
      res.status(200).send(`id ${id} restaurado`);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }
  static async pegaMatriculasPorTurma(req, res) {
    const { turmaId } = req.params;
    try {
      const todasAsMatriculas = await database.Matriculas.findAndCountAll({
        where: {
            turma_id: Number(turmaId),
            status: true
        }, limit: 20,
        order: [['estudante_id', 'DESC']]
      })
      res.status(200).json(todasAsMatriculas);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }
  static async pegaTurmasLotadas(req, res) {
    const lotacaoTurma = 2;
    try {
      const turmasLotadas = await database.Matriculas.findAndCountAll({
        where: {
            status: true
        }, limit: 20,
        attributes: ['turma_id'],
        group: ['turma_id'],
        having: Sequelize.literal(`count(turma_id) >= ${lotacaoTurma}`)
      })
      res.status(200).json(turmasLotadas);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }
  static async cancelaPessoa(req, res) {
    const {estudanteId} = req.params;
    try {
      database.Sequelize.transaction(async t => {
        await database.Pessoas.update({ ativo: false }, {where: {id: Number(estudanteId)}}, {transaction: t})
        await database.Matriculas.update({ status: false }, {where: {estudante_id: Number(estudanteId)}}, {transaction: t})
        res.status(200).send("matriculas canceladas");
      })
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }
  
}

module.exports = PessoasController;
