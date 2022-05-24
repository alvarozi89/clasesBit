const {Router} = require('express');
const router = Router();
const categoriaCtrl = require('../controller/categoria.controller');

router.post('/crearCategoria',categoriaCtrl.crearCategoria);
router.get('/listarCategoria',categoriaCtrl.listar);



module.exports= router