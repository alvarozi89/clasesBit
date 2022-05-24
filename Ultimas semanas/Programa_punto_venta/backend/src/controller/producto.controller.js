const productoCtrl = {};
const productoModel = require('../models/producto.models')
const fs = require('fs');
const path = require('path');
const multer = require('multer');

productoCtrl.crearProducto = async(req,res)=>{
    const {titulo,descripcion,imagen,precio_compra,precio_venta,stock,idcategoria}= req.body 
    const nuevoproducto = new productoModel({
        titulo,
        descripcion,
        imagen,
        precio_compra,
        precio_venta,
        stock,
        idcategoria
    })
    const documentoproducto = await productoModel.findOne({titulo:titulo})
    if(documentoproducto) {
        res.json({
            mensaje: 'el producto ya existe'
        })
    }

    else if(req.files)
    {
        const imagen_path = req.files.imagen.path;
        const name = imagen_path.split('\\');
        const imagenCargada = name[3];

        const nuevoproducto = new productoModel({
            titulo,
            descripcion,
            imagen:imagenCargada,
            precio_compra,
            precio_venta,
            stock,
            idcategoria
        })
        await nuevoproducto.save()
        res.json({
            mensaje: 'Creado',
            titulo: titulo
        })

    }

    else {
        await nuevoproducto.save()
        res.json({
            mensaje: 'Creado',
            titulo: titulo
        })
    
       
    }
}



productoCtrl.listar = async(req,res)=>{
    const respuesta = await productoModel.find()
    res.json(respuesta)
}

productoCtrl.listarId = async(req,res)=>{
    const id = req.params.id
    const respuesta =await productoModel.findById({_id:id})
    res.json(respuesta)
}

// productoCtrl.listarNombre = async(req,res)=>{
//     const {titulo} = req.params;
//     const respuesta =await productoModel.find({titulo:titulo})
//     res.json(respuesta)
// }

productoCtrl.listarNombre = async (req,res)=>{
    const {titulo} = req.params;
    const respuesta = await productoModel.find({titulo:{$regex:"^"+ titulo,$options:'i'}})
    res.json(respuesta)
}


productoCtrl.obtenerImagen = async (req,res)=>{
    const {img} = req.params;

    if(img!="null"){
        let path_img = 'src/uploads/productos/'+ img;
        res.status(200).sendFile(path.resolve(path_img));

    }

    else{
        let path_img = 'src/uploads/productos/default.jpg';
        res.status(200).sendFile(path.resolve(path_img));
    }

}

productoCtrl.actualizarProducto= async(req,res)=>{
    const id = req.params.id 
    await productoModel.findByIdAndUpdate({_id:id},req.body)
    const respuesta =await productoModel.findById({_id:id})
    res.json({
        mensaje: 'Producto actualizado',
        respuesta
    })
} 

productoCtrl.listarId = async(req,res)=>{
    const id = req.params.id
    const respuesta =await productoModel.findById({_id:id})
    res.json(respuesta)
}

productoCtrl.elimarProducto = async(req,res)=>{
    const id = req.params.id
    await productoModel.findByIdAndRemove({_id:id})
    res.json({
        mensaje: 'Producto eliminado'
    })
}

// function get_img(req,res) {  
//     var img = req.params['img'];

//     if(img != "null"){
//         let path_img = './uploads/productos/'+ img;
//         res.status(200).sendFile(path.resolve(path_img));
//     }else{
//         let path_img = './uploads/productos/default.jpg';
//         res.status(200).sendFile(path.resolve(path_img));
//     }
// }

module.exports= productoCtrl
