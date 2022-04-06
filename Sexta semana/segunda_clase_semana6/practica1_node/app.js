const express = require('express')
const app = express()
const port = 3000

//aqui usamos la carpeta public que creamos para que tenga acceso al archivo index.html
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Saludos desde node.js!')
})

//aqui hacemos el envio del formulario
app.post('/prueba', (req, res) => {
    res.send('Datos Enviados!')
  })

//aqui inventamos una ruta para hacer prueba
  app.get('/bit', (req, res) => {
    res.send('Bienvenido a la pagina BIT!')
  })

//aqui va escuchar el puerto que hemos designado para que establezca la comunicación.
app.listen(port, () => {
  console.log(`Estoy escuchando el puerto:  ${port}`)
})