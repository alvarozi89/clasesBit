const {Router} = require('express');
const router = Router();
const usuarioCtrl = require('../controller/usuario.controller');
const auth = require('../helper/auth');

router.post('/crearUsuario',usuarioCtrl.crearUsuario);
router.post('/login',usuarioCtrl.login);


router.get('/listar',usuarioCtrl.listar);
router.get('/listarNombre/:nombres',usuarioCtrl.listarNombre);



router.put('/actualizarUsuario/:id' ,usuarioCtrl.actualizarUsuario)

router.get('/listarUsuario/:id',usuarioCtrl.listarId)


router.delete('/eliminarUsuario/:id',usuarioCtrl.elimarUsuario)



module.exports= router