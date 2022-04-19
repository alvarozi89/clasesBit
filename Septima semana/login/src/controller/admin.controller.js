const adminCtrl = {};

const adminModel = require('../models/admin.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

adminCtrl.crear = async(req,res)=>{
    const {nombre,correo,contrasena}= req.body 
    const nuevoAdmin = new adminModel({
        nombre,
        correo,
        contrasena
    })

    const correoAdmin= await adminModel.findOne({correo:correo})
    if(correoAdmin){
        res.json({
            mensaje: 'El correo ya existe, trata con un nuevo correo'
        })

    }

    else {
        nuevoAdmin.contrasena= await bcrypt.hash(contrasena,10);
        const token = jwt.sign({_id:nuevoAdmin._id},'Secreta');
        await nuevoAdmin.save();
        res.json({
            mensaje:'bienvenido, tu si haces parte',
            id: nuevoAdmin._id,
            nombre: nuevoAdmin.nombre,
            token
        })

    }

}

module.exports= adminCtrl;