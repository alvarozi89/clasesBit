const mongoose = require('mongoose');
const {Schema} = mongoose

const empleadoSchema = new Schema({
    nombres: String,
    apellidos: String,
    cedula: String,
    cargo: String,
    correo: String,
    tipoContrato: String,
    jefe: String,
    date:{type:Date,default:Date.now}
})

module.exports = mongoose.model('empleado',empleadoSchema)