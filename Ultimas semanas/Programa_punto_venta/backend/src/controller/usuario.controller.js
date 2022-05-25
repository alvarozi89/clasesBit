const usuarioCtrl = {};
const usuarioModel = require('../models/usuario.models')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

usuarioCtrl.crearUsuario = async(req,res)=>{
    const { nombres,apellidos,correo,contrasena,rol}= req.body 
    const nuevoUsuario = new usuarioModel({
        nombres,
        apellidos,
        correo,
        contrasena,
        rol
    })

    const correoUsuario = await usuarioModel.findOne({correo:correo})
    if(correoUsuario) {
        res.json({
            mensaje: 'El usuario ya existe'
        })
    }
    else {
        nuevoUsuario.contrasena = await bcrypt.hash(contrasena,10)
        const token = jwt.sign({_id:nuevoUsuario._id}, 'Secreta')
        await nuevoUsuario.save()
        res.json({
            mensaje: 'Bienvenido',
            id: nuevoUsuario._id,
            nombre: nuevoUsuario.nombre,
            token
        })
    }
}

usuarioCtrl.login = async(req,res)=>{
    const {correo,contrasena}= req.body
    const usuario = await usuarioModel.findOne({correo:correo})
    if(!usuario){
        return res.json({
            mensaje: 'correo incorrecto'
        })
    }

    const match = await bcrypt.compare(contrasena,usuario.contrasena)
    if(match){

        const token = jwt.sign({_id: usuario._id}, 'Secreta')
        res.json({
            mensaje: 'Bienvenido',
            id: usuario.id,
            nombres: usuario.nombres,
            rol: usuario.rol,
            token
        })
        
    }

    else {
        res.json({
            mensaje:'Contraseña incorrecta'
        })
    }

}

usuarioCtrl.listar = async(req,res)=>{
    const respuesta = await usuarioModel.find()
    res.json(respuesta)
}

usuarioCtrl.listarId = async(req,res)=>{
    const id = req.params.id
    const respuesta =await usuarioModel.findById({_id:id})
    res.json(respuesta)
}

usuarioCtrl.listarNombre = async (req,res)=>{
    const {nombres} = req.params;
    const respuesta = await usuarioModel.find({nombres:{$regex:"^"+ nombres,$options:'i'}})
    res.json(respuesta)
}

usuarioCtrl.actualizarUsuario= async(req,res)=>{
    const id = req.params.id 
    await usuarioModel.findByIdAndUpdate({_id:id},req.body)
    const respuesta =await usuarioModel.findById({_id:id})
    res.json({
        mensaje: 'Producto actualizado',
        respuesta
    })
} 

usuarioCtrl.listarId = async(req,res)=>{
    const id = req.params.id
    const respuesta =await usuarioModel.findById({_id:id})
    res.json(respuesta)
}

usuarioCtrl.elimarUsuario = async(req,res)=>{
    const id = req.params.id
    await usuarioModel.findByIdAndRemove({_id:id})
    res.json({
        mensaje: 'Producto eliminado'
    })
}

module.exports= usuarioCtrl