const {Router} = require('express');
const router = Router();
const empleadoCtrl = require('../controller/empleado.controller');
const auth = require('../helper/auth');

router.post('/crearEmpleado', auth.verificarToken,empleadoCtrl.crearEmpleado);

router.get('/listarEmpleados',empleadoCtrl.listar)
router.get('/listarEmpleadoId/:id',empleadoCtrl.listarId)
router.get('/listarEmpleadoCedula/:cedula',empleadoCtrl.listarCedula)
router.get('/listarEmpleadoPorJefe/:id',auth.verificarToken,empleadoCtrl.empleadosDeUnJefe)

router.get('/listarEmpleadoPorJefeFiltro/:id/:nombres',empleadoCtrl.empleadosDeUnJefeBuscar)



router.get('/buscarPorCoincidenciaEmpleado/:nombres',empleadoCtrl.buscarPorCoincidencia)
router.get('/buscarPorCoincidenciaEmpleadoMayusculas/:nombres',empleadoCtrl.buscarPorCoincidenciaMayusculas)

router.delete('/eliminarEmpleado/:id',auth.verificarToken,empleadoCtrl.elimarEmpleado)

router.put('/actualizarEmpleado/:id' ,auth.verificarToken,empleadoCtrl.actualizarEmpleado)

module.exports= router