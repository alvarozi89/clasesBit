const {Router} = require('express');
const router = Router();
const adminCtrl = require('../controller/admin.controller');

router.post('/crear',adminCtrl.crear);
router.post('/login',adminCtrl.login);

module.exports= router