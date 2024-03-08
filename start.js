// hello.js

// Import the 'http' module
const http = require('http');

// Create a server that responds with "Hello, World!" for all requests
const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello, World!\n');
});

// Listen on port 3000 and IP address 127.0.0.1
server.listen(3000, '127.0.0.1', () => {
  console.log('Server running at http://127.0.0.1:3000/');
});
