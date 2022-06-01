const mongoose = require('mongoose');
//la dirección 127.0.0.1 es el mismo localhost
//URL=('mongodb://127.0.0.1/login');

//URL=('mongodb://localhost/puntoVentaMean');
URL =('mongodb+srv://sistemas2021:sistemas@cluster0.zsev0.mongodb.net/ventas-angular?retryWrites=true&w=majority')
mongoose.connect(URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(db=>console.log('Conexión exitosa a la bd: ',db.connection.name))
.catch(error=>console.log(error))

module.exports= mongoose