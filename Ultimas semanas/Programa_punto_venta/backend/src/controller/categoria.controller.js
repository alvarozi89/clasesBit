const categoriaCtrl = {};
const categoriaModel = require('../models/categoria.models')

categoriaCtrl.crearCategoria = async(req,res)=>{
    const { titulo,descripcion}= req.body 
    const nuevaCategoria = new categoriaModel({
        titulo,
        descripcion
    })

    const categoriaProducto = await categoriaModel.findOne({titulo:titulo})
    if(categoriaProducto) {
        res.json({
            mensaje: 'La categoria ya existe'
        })
    }
    else {
    
        await nuevaCategoria.save()
        res.json({
            mensaje: 'Creado',
            titulo: titulo
        })
    }
}


categoriaCtrl.listar = async(req,res)=>{
    const respuesta = await categoriaModel.find()
    res.json(respuesta)
}

module.exports= categoriaCtrl