const {Router} = require('express');
const router = Router();
const empleadoCtrl = require('../controller/empleado.controller');

router.post('/crearEmpleado',empleadoCtrl.crearEmpleado);
router.get('/listarEmpleados',empleadoCtrl.listar)
router.get('/listarEmpleadoId/:id',empleadoCtrl.listarId)
router.get('/listarEmpleadoCedula/:cedula',empleadoCtrl.listarCedula)
router.get('/listarEmpleadoPorJefe/:id',empleadoCtrl.empleadosDeUnJefe)
router.get('/buscarPorCoincidenciaEmpleado/:nombres',empleadoCtrl.buscarPorCoincidencia)


module.exports= router