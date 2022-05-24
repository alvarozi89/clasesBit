const mongoose = require('mongoose');
const {Schema} = mongoose

const clienteSchema = new Schema({
    nombres: String,
    nDocumento: String,
    correo: String,
    activo: {type: Boolean, default:true},
    date:{type:Date,default:Date.now}


})

module.exports = mongoose.model('cliente',clienteSchema)