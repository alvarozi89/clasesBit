const clienteCtrl = {};
const clienteModel = require('../models/cliente.models')



clienteCtrl.crearCliente = async(req,res)=>{
    const { nombres,nDocumento,correo}= req.body 
    const nuevoCliente = new clienteModel({
        nombres,
        nDocumento,
        correo
    })

    const documentoCliente = await clienteModel.findOne({nDocumento:nDocumento})
    if(documentoCliente) {
        res.json({
            mensaje: 'el cliente ya existe'
        })
    }
    else {
    
        await nuevoCliente.save()
        res.json({
            mensaje: 'Creado',
            nombres: nombres
        })
    }
}

clienteCtrl.listar = async(req,res)=>{
    const respuesta = await clienteModel.find()
    res.json(respuesta)
}

clienteCtrl.listarId = async(req,res)=>{
    const id = req.params.id
    const respuesta =await clienteModel.findById({_id:id})
    res.json(respuesta)
}

module.exports= clienteCtrl