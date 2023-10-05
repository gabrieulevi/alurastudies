const { Router } = require("express");
const PessoasController = require('../controllers/PessoasController.js');

const router = Router();

router.get('/pessoas', PessoasController.pegaTodasAsPessoas);
router.get('/pessoas/:id', PessoasController.pegaUmaPessoa);

module.exports = router;