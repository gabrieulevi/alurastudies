const database = require("../models");

class TurmaController {
  static async pegaTodasAsTurmas(req, res) {
    try {
      const todasAsTurmas = await database.Turmas.findAll();
      return res.status(200).json(todasAsTurmas);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }
  static async pegaUmaTurma(req, res) {
    const { id } = req.params;
    try {
      console.log(id);
      const umaTurma = await database.Turmas.findOne({
        where: { id: Number(id) },
      });
      res.status(200).json(umaTurma);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }
  static async criaTurma(req, res) {
    const novaTurma = req.body;

    try {
      console.log(novaTurma);
      const novaTurmaCriada = await database.Turmas.create(novaTurma);
      return res.status(200).json(novaTurmaCriada);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }
  static async atualizaTurma(req, res) {
    const novosDados = req.body;
    const { id } = req.params;
    try {
      await database.Turmas.update(novosDados, {
        where: {
          id: Number(id),
        },
      });
      const TurmaAtualizada = await database.Turmas.findOne({
        where: {
          id: id,
        },
      });
      res.status(200).json(TurmaAtualizada);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }
  static async removeTurma(req, res) {
    const { id } = req.params;
    try {
      await database.Turmas.destroy({
        where: {
          id: Number(id),
        },
      });
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }
  static async restauraTurma(req, res) {
    const { id } = req.params;
    try {
      await database.Turmas.restore({ where: { id: Number(id) } });
      res.status(200).send(`id ${id} restaurado`);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }
}

module.exports = TurmaController;
