const express = require('express');

const router = express.Router();

const controller = require('../controller/contatoController');

router.get('/', controller.listar);

router.get('/:id', controller.consultarPeloId);

router.post('/', controller.criar);

router.put('/:id', controller.atualizar);

router.delete('/:id',controller.remover);

module.exports = router