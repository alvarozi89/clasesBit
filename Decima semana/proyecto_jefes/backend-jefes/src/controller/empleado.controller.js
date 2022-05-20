const empleadoCtrl = {}
const empleadoModels= require('../models/empleados.models')

empleadoCtrl.crearEmpleado = async(req,res)=>{
    const{nombres,apellidos,cedula,cargo,correo,tipoContrato,jefe}= req.body
    const nuevoEmpleado = new empleadoModels({
        nombres,
        apellidos,
        cedula,
        cargo,
        correo,
        tipoContrato,
        jefe
    })
    const respuesta = await nuevoEmpleado.save()
    res.json({
        mensaje: 'Empleado creado',
        respuesta
    })
}

empleadoCtrl.listar = async(req,res)=>{
    const respuesta = await empleadoModels.find()
    res.json(respuesta)
}

empleadoCtrl.listarId = async(req,res)=>{
    const id = req.params.id
    const respuesta =await empleadoModels.findById({_id:id})
    res.json(respuesta)
}

empleadoCtrl.listarCedula = async(req,res)=>{
    const cedula = req.params.cedula 
    const respuesta = await empleadoModels.findOne({cedula:cedula})
    res.json(respuesta)
}

empleadoCtrl.empleadosDeUnJefe = async(req,res)=>{
    const id = req.params.id
    const respuesta = await empleadoModels.find({jefe:id})
    res.json(respuesta)
}

empleadoCtrl.empleadosDeUnJefeBuscar = async(req,res)=>{
    const id = req.params.id
    const {nombres} = req.params;
    const respuesta = await empleadoModels.find({jefe:id,nombres:{$regex:"^"+ nombres,$options:'i'}})
    res.json(respuesta)
}

//Esta consulta aplica para otro contexto
// empleadoCtrl.buscarPorCoincidencia = async (req,res)=>{
//     const {nombres,id} = req.params;
//     const respuesta = await empleadoModels.find({nombres:{$regex:".*"+ nombres +".*"}
//     ,jefe:id})
//     res.json(respuesta)
// }

//tarea aplicar coincidencia por mayusculas/minusculas

empleadoCtrl.buscarPorCoincidencia = async (req,res)=>{
    const {nombres} = req.params;
    const respuesta = await empleadoModels.find({nombres:{$regex:".*"+ nombres}})
    res.json(respuesta)
}

empleadoCtrl.buscarPorCoincidenciaMayusculas = async (req,res)=>{
    const {nombres} = req.params;
    const respuesta = await empleadoModels.find({nombres:{$regex:"^"+ nombres,$options:'i'}})
    res.json(respuesta)
}

//eliminar

empleadoCtrl.elimarEmpleado = async(req,res)=>{
    const id = req.params.id
    await empleadoModels.findByIdAndRemove({_id:id})
    res.json({
        mensaje: 'Empleado eliminado'
    })
}


//actualizar

empleadoCtrl.actualizarEmpleado= async(req,res)=>{
    const id = req.params.id 
    await empleadoModels.findByIdAndUpdate({_id:id},req.body)
    const respuesta =await empleadoModels.findById({_id:id})
    res.json({
        mensaje: 'Empleado actualizado',
        respuesta
    })
} 


module.exports= empleadoCtrl
