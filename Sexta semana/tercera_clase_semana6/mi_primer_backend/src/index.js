//Requerimos los modulos necesarios
const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
//aqui vamos a requerir la bd
require('./database');

//vamos a configurar el puerto que vamos a escuchar
//process.env.PORT sirve para obtener el puerto del servidor externo
app.set('Port', process.env.PORT || 3000 );
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors({origen: '*'}));

//aqui vamos a utilizar las rutas 
app.use('/personas', require('./routes/personas.route'));

//aqui vamos a escuchar nuestro puerto
app.listen(app.get('Port'),()=> {
    console.log("El servidor esta escuchando por el puerto: " , app.get('Port'));
})