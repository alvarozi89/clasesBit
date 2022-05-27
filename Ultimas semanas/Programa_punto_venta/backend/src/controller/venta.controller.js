const ventaCtrl = {};
const ventaModel = require('../models/venta.models')
const productoModel = require('../models/producto.models')
const detalleModel= require('../models/detalleventa')


ventaCtrl.GenerarVenta = async(req,res)=>{
    let data = req.body;
    const {idcliente,iduser}= req.body 
    const nuevaVenta= new ventaModel({
        idcliente,
        iduser
    })
        await nuevaVenta.save((err,venta_save)=>{
            if(venta_save){
                let detalles = data.detalles;
                detalles.forEach((element,index) => {
                    var detalleventa = new detalleModel();
                    detalleventa.idproducto = element.idproducto;
                    detalleventa.cantidad = element.cantidad;
                    detalleventa.venta = venta_save._id;
    
                    detalleventa.save((err,detalle_save)=>{
                        if(detalle_save){
                            productoModel.findById({_id:element.idproducto},(err,producto_data)=>{
                                if(producto_data){
                                    productoModel.findByIdAndUpdate({_id:producto_data._id},{stock: parseInt(producto_data.stock) - parseInt(element.cantidad)},(err,producto_edit)=>{
                                        res.json({
                                            mensaje: 'Venta realizada'
                                        })
                                    })
                                }else{
                                    res.send(err);
                                }
                            });
                        }else{
                            res.send(err);
                        }
                    });
                 
                });
    
            }else{
                res.send(err);
            }

        })


}

ventaCtrl.listar = async(req,res)=>{
      ventaModel.find().populate('idcliente').populate('iduser').exec((err,data_ventas)=>{
        if(data_ventas){
       
            res.json({
                listar:data_ventas
            })
        }else{
            res.status(404).send({message: "No hay ningun registro de venta"});
        }
     
    });
}


ventaCtrl.listarDetalle = async(req,res)=>{
    var id = req.params['id'];
    detalleModel.find({venta: id}).populate('idproducto').exec((err,data_detalles)=>{
        if(data_detalles){
            res.status(200).send({detalles:data_detalles});
        }else{
            res.status(404).send({message: "No hay ningun registro de venta"});
        }
    });
}

ventaCtrl.listarId = async(req,res)=>{
    const id = req.params.id
    ventaModel.findById(id).populate('idcliente').populate('iduser').exec((err,data_venta)=>{
        if(data_venta){
            detalleModel.find({venta:data_venta._id}).populate('idproducto').exec({idventa:id},(err,data_detalle)=>{
                if(data_detalle){
                    res.status(200).send(
                        {
                            data : {
                                venta: data_venta,
                                detalles: data_detalle,

                            }
                        }
                    );
                }
            });
        }
    });
}



module.exports = ventaCtrl
