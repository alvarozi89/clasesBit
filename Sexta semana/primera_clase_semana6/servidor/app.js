const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hola, soy el servidor, es mi primera vez!');
});

server.listen(port, hostname, () => {
  console.log(`Hola, me estoy conectando a traves de la siguiente dirección: http://${hostname}:${port}/`);
});