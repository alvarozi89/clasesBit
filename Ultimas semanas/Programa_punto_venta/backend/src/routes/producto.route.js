const {Router} = require('express');
const router = Router();
const productoCtrl = require('../controller/producto.controller');
const multipart = require('connect-multiparty');
const path = multipart({uploadDir: 'src/uploads/productos'});

const multer = require('multer');


const upload = multer({ dest: 'src/uploads/productos' })

router.post('/crearProducto',path,productoCtrl.crearProducto);
// router.post('/crearProducto',upload.single('imagen'),productoCtrl.crearProducto);

router.get('/listar',productoCtrl.listar);
router.get('/listarNombre/:titulo',productoCtrl.listarNombre);

router.get('/producto/img/:img',productoCtrl.obtenerImagen)

router.put('/actualizarProducto/:id' ,productoCtrl.actualizarProducto)

router.get('/listarProducto/:id',productoCtrl.listarId)


router.delete('/eliminarProducto/:id',productoCtrl.elimarProducto)

module.exports= router