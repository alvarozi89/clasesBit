const mongoose = require('mongoose');
//la dirección 127.0.0.1 es el mismo localhost
//URL=('mongodb://127.0.0.1/login');

URL=('mongodb://localhost/login');

mongoose.connect(URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(db=>console.log('Conexión exitosa a la bd: ',db.connection.name))
.catch(error=>console.log(error))

module.exports= mongoose
