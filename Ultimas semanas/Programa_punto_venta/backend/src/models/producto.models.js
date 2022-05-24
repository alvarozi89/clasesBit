const mongoose = require('mongoose');
const {Schema} = mongoose

const productoSchema = new Schema({
    titulo: String,
    descripcion: String,
    imagen: String,
    precio_compra: Number,
    precio_venta: Number,
    stock: Number,
    idcategoria: {type: Schema.ObjectId, ref: 'categoria'},
    activo: {type: Boolean, default:true},
    date:{type:Date,default:Date.now}


})

module.exports = mongoose.model('producto',productoSchema)