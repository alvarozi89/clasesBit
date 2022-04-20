const {Router} = require('express');
const router = Router();
const empleadoCtrl = require('../controller/empleado.controller');

router.post('/crearEmpleado',empleadoCtrl.crearEmpleado);



module.exports= router