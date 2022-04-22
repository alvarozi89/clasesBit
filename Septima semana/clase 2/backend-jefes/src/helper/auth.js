const auth={}
const jwt = require('jsonwebtoken')

auth.verificarToken= (req, res, next) =>{
    if(!req.headers.autorizacion){
        return res.json({
            mensaje: 'Espera, tu no estas autorizado'
        })
    }
    const token = req.headers.autorizacion
    if(token==='null'){
        return res.json({
            mensaje:'No estas autorizado, detente!'
        })
    }

    jwt.verify(token,'Secreta',(error,resultado)=>{
        if(error){
            return res.json({
                mensaje:'No esta autorizado'
            })
        }
        next();
    })
}

module.exports=auth