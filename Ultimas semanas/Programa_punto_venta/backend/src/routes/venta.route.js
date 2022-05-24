const {Router} = require('express');
const router = Router();
const ventaCtrl = require('../controller/venta.controller');

//router.post('/crearVenta2',ventaCtrl.registrar);
router.post('/crearVenta',ventaCtrl.GenerarVenta);
router.get('/listar',ventaCtrl.listar);
router.get('/listarDetalles/:id',ventaCtrl.listarDetalle);
router.get('/listarId/:id',ventaCtrl.listarId)
//router.get('/venta/data/:id',ventaCtrl.crearventa);


module.exports= router