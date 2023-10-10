//routes/niveisRoute.js
const { Router } = require("express");
const NivelController = require("../controllers/NivelController.js");

const router = Router();
router.get("/niveis", NivelController.pegaTodasAsNiveis);
router.get("/niveis/:id", NivelController.pegaUmaNivel);
router.post("/niveis", NivelController.criaNivel);
router.put("/niveis/:id", NivelController.atualizaNivel);
router.delete("/niveis/:id", NivelController.removeNivel);
router.post("/niveis/:id", NivelController.restauraNivel);

module.exports = router;
