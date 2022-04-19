const personaCtrl ={};
const persona = require('../models/personas.models');
/*aqui estamos realizando nuestra primera petición: POST 
la cual se va encargar de enviar la información que requerimos */
personaCtrl.crear= async(req,res)=>{
    const{nombres,primerApellido,segundoApellido,cedula,edad,nota}=req.body
    const nuevaPersona = new persona({
        nombres,
        primerApellido,
        segundoApellido,
        cedula,
        edad,
        nota,
    }) 
    //aqui evaluarmos la respuesta, si es ok: nos va retornar un mensaje positivo
    const respuesta = await nuevaPersona.save()
    res.json({
        mensaje: 'Persona creada',
        respuesta
    })
}

personaCtrl.listar= async(req,res)=>{
    const respuesta = await persona.find()
    res.json(respuesta)
}

personaCtrl.eliminar= async(req,res)=>{
    const id = req.params.id 
    await persona.findByIdAndRemove({_id:id})
    res.json({
        mensaje: "Persona eliminada"
    })
}

personaCtrl.actualizar= async (req,res)=>{
    const id = req.params.id 
    await persona.findByIdAndUpdate({_id:id},req.body)
    res.json({
        mensaje: "Persona actualizada"
    })
}

module.exports=personaCtrl

