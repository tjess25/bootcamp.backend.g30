const http = require('node:http');

const hostname = '192.168.68.130'; // servidor name: localhost
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end("{msg: 'Hello, Koders!'}");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});