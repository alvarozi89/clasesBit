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

module.exports= empleadoCtrl
