const jefeCtrl = {};
const jefeModel = require('../models/jefe.models')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

jefeCtrl.crearJefe = async(req,res)=>{
    const {nombre,correo,contrasena}= req.body 
    const nuevoJefe = new jefeModel({
        nombre,
        correo,
        contrasena
    })

    const correoJefe = await jefeModel.findOne({correo:correo})
    if(correoJefe) {
        res.json({
            mensaje: 'El jefe ya existe'
        })
    }
    else {
        nuevoJefe.contrasena = await bcrypt.hash(contrasena,10)
        const token = jwt.sign({_id:nuevoJefe._id}, 'Secreta')
        await nuevoJefe.save()
        res.json({
            mensaje: 'Bienvenido',
            id: nuevoJefe._id,
            nombre: nuevoJefe.nombre,
            token
        })
    }
}

jefeCtrl.login = async(req,res)=>{
    const {correo,contrasena}= req.body
    const jefe = await jefeModel.findOne({correo:correo})
    if(!jefe){
        return res.json({
            mensaje: 'correo incorrecto'
        })
    }

    const match = await bcrypt.compare(contrasena,jefe.contrasena)
    if(match){

        const token = jwt.sign({_id: jefe._id}, 'Secreta')
        res.json({
            mensaje: 'Bienvenido',
            id: jefe.id,
            nombre: jefe.nombre,
            token
        })
        
    }

    else {
        res.json({
            mensaje:'Contraseña incorrecta'
        })
    }

}


module.exports= jefeCtrl