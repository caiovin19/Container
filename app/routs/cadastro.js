const { Router } = require("express");
const router = new Router();
const Cadastro = require("../cadastro.js")

router.post("/criarC", Cadastro.adicionarConteiner);
router.post("/criarM", Cadastro.adicionarMovimentacao);
router.get("/consultarC", Cadastro.consultarConteiner);
router.get("/consultarM", Cadastro.consultarMovimentacao);
router.put("/editarC", Cadastro.editarConteiner);
router.put("/editarM", Cadastro.editarMovimentacao);
router.delete("/removerC", Cadastro.removerConteiner);
router.delete("/removerM", Cadastro.removerMovimentacao);

module.exports = router;