/*establecemos la conexión de la bd 
debemos tener en cuenta la dirección; sea local o externar(servidor)
*/
const mongoose = require('mongoose');
URL=('mongodb://localhost/bdBit');

//enviamos la conexión de la bd, establecemos unas configuraciones pretederminadas
mongoose.connect(URL,{
useNewUrlParser:true,
useUnifiedTopology:true,
}).then(db => console.log('Base de datos conectada: ',db.connection.name))
.catch(error=> console.log(error))

//exportamos nuestro modulo de la bd
module.exports= mongoose

