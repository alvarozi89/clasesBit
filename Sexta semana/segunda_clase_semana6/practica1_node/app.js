const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Saludos desde node.js!')
})

app.listen(port, () => {
  console.log(`Estoy escuchando el puerto:  ${port}`)
})