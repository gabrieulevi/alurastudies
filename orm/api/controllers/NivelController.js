const database = require("../models");

class NiveisController {
  static async pegaTodasAsNiveis(req, res) {
    try {
      const todasAsNiveis = await database.Niveis.findAll();
      return res.status(200).json(todasAsNiveis);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }
  static async pegaUmaNivel(req, res) {
    const { id } = req.params;
    try {
      console.log(id);
      const umaNivel = await database.Niveis.findOne({
        where: { id: Number(id) },
      });
      res.status(200).json(umaNivel);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }
  static async criaNivel(req, res) {
    const novaNivel = req.body;

    try {
      console.log(novaNivel);
      const novaNivelCriada = await database.Niveis.create(novaNivel);
      return res.status(200).json(novaNivelCriada);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }
  static async atualizaNivel(req, res) {
    const novosDados = req.body;
    const { id } = req.params;
    try {
      await database.Niveis.update(novosDados, {
        where: {
          id: Number(id),
        },
      });
      const NivelAtualizada = await database.Niveis.findOne({
        where: {
          id: id,
        },
      });
      res.status(200).json(NivelAtualizada);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }
  static async removeNivel(req, res) {
    const { id } = req.params;
    try {
      await database.Niveis.destroy({
        where: {
          id: Number(id),
        },
      });
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }
  static async restauraNivel(req, res) {
    const { id } = req.params;
    try {
      await database.Niveis.restore({ where: { id: Number(id) } });
      res.status(200).send(`id ${id} restaurado`);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }
}

module.exports = NiveisController;
