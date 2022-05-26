var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ventaSchema = Schema({
    idcliente: {type: Schema.Types.ObjectId, ref: 'cliente'},
    iduser:    {type: Schema.Types.ObjectId, ref: 'usuario'},
    fecha: {type: Date, default: Date.now},
  
});

module.exports = mongoose.model('venta',ventaSchema);