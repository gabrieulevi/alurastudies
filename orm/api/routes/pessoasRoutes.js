const { Router } = require("express");
const PessoasController = require('../controllers/PessoasController.js');

const router = Router();

router.get('/pessoas', PessoasController.pegaTodasAsPessoas);
router.get('/pessoas/:id', PessoasController.pegaUmaPessoa);
router.post('/pessoas', PessoasController.criaPessoa);
router.put('/pessoas/:id', PessoasController.atualizaPessoa);
router.delete('/pessoas/:id', PessoasController.removePessoa);
router.get('/pessoas/:estudanteId/matricula/:matriculaId', PessoasController.pegaUmaMatricula);
router.post('/pessoas/:estudanteId/matricula', PessoasController.criaMatricula);

module.exports = router;