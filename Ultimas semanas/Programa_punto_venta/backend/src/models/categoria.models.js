const mongoose = require('mongoose');
const {Schema} = mongoose

const categoriaSchema = new Schema({
    titulo: String,
    descripcion: String,
    date:{type:Date,default:Date.now}


})

module.exports = mongoose.model('categoria',categoriaSchema)