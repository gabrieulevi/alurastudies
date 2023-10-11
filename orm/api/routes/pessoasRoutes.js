const { Router } = require("express");
const PessoasController = require("../controllers/PessoasController.js");
const routes = require("./index.js");

const router = Router();

router.get("/pessoas", PessoasController.pegaTodasAsPessoasAtivas);
router.get("/pessoas/todos", PessoasController.pegaTodasAsPessoas);
router.get("/pessoas/:id", PessoasController.pegaUmaPessoa);
router.post("/pessoas", PessoasController.criaPessoa);
router.put("/pessoas/:id", PessoasController.atualizaPessoa);
router.delete("/pessoas/:id", PessoasController.removePessoa);
router.get(
  "/pessoas/:estudanteId/matricula/:matriculaId",
  PessoasController.pegaUmaMatricula
);
router.post("/pessoas/:estudanteId/matricula", PessoasController.criaMatricula);
router.post(
  "/pessoas/:estudanteId/matricula/:matriculaId",
  PessoasController.atualizaPessoa
);
router.post("/pessoas/:id/restaura", PessoasController.restauraPessoa);
router.post(
  "/pessoas/:estudanteId/matricla/:matriculaId",
  PessoasController.restauraMatricula
);
router.get("/pessoas/:estudanteId/matricula", PessoasController.pegaMatriculas);
router.get("/pessoas/matricula/:turmaId/confirmadas", PessoasController.pegaMatriculasPorTurma);
router.get("/pessoas/matricula/lotada", PessoasController.pegaTurmasLotadas);
router.post("/pessoas/:estudanteId/cancela", PessoasController.cancelaPessoa);
module.exports = router;
