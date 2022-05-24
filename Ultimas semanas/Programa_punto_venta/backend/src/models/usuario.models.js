const mongoose = require('mongoose');
const {Schema} = mongoose

const usuarioSchema = new Schema({
    nombres: String,
    apellidos: String,
    correo: String,
    contrasena: String,
    rol: String,
    activo: {type: Boolean, default:true},
    date:{type:Date,default:Date.now}


})

module.exports = mongoose.model('usuario',usuarioSchema)