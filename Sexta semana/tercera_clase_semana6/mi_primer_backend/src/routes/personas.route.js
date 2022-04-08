const {Router} = require('express');
const router = Router();
const personaCtrl = require('../controller/personas.controller');

router.post('/crear',personaCtrl.crear);
router.get('/lista',personaCtrl.listar)

module.exports=router