const {Router} = require('express');
const router = Router();
const clienteCtrl = require('../controller/cliente.controller');

router.post('/crearCliente',clienteCtrl.crearCliente);
router.get('/listar',clienteCtrl.listar);



module.exports= router