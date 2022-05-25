//requerir las dependencias necesarias

const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const bodyParser= require('body-parser');
require('./database')

//configurar el puerto

app.set('Port', process.env.PORT || 3000);
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors({origen:'*'}));

//const venta_routes = require('./routes/venta.route');

app.use('/usuario',require('./routes/usuario.route'))
app.use('/categoria',require('./routes/categoria.route'))
app.use('/producto',require('./routes/producto.route'))
app.use('/cliente',require('./routes/cliente.route'))
app.use('/venta',require('./routes/venta.route'))
//app.use('/venta',venta_routes);


//Otra manera de utilizar los headers
// app.use((req,res,next)=>{
//     res.header('Content-Type: application/json');
//     res.header('Access-Control-Allow-Origin','*'); 
//     res.header('Access-Control-Allow-Headers','Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Access-Control-Allow-Request-Method');
//     res.header('Access-Control-Allow-Methods','GET, PUT, POST, DELETE, OPTIONS');
//     res.header('Allow','GET, PUT, POST, DELETE, OPTIONS');
//     next();
// });



app.listen(app.get('Port'),()=>{
    console.log("Escuchando al servidor: primer ejercicio", app.get('Port'));
})
