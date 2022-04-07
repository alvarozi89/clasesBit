//establecemos el esquema con el que vamos a trabajar, es decir los campos o atributos.

//const { default: mongoose } = require("mongoose");

//!debemos ser cuidadosos de establecer el tipo de dato
const personasSchema = new Schema ({
    nombres:{type: String,required:[true, 'Nombre obligatorio']},
    primerApellido:String,
    segundoApellido:String,
    cedula:String,
    edad:Number,
    nota: Number,
    date:{type: Date,default: Date.now},
    activo: {type: Boolean, default:true}
});

//convertir a modelo

module.exports = mongoose.model('personas',personasSchema)