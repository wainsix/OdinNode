// hello.js

// Import the 'http' module
const http = require('http');
const fs = require('fs');

// Create a server that responds with "Hello, World!" for all requests
const server = http.createServer((req, res) => {
// Jos pyydetään juuripolkua, palautetaan index.html
if (req.url === '/') {
  fs.readFile('index.html', 'utf8', (err, data) => {
    if (err) {
      res.writeHead(500, {'Content-Type': 'text/plain'});
      res.end('Internal Server Error\n');
    } else {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(data);
    }
  });
} else {
  // Muussa tapauksessa vastataan "Hello, World!"-viestillä
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello, World!\n');
}
});

// Listen on port 3000 and IP address 127.0.0.1
server.listen(3000, '127.0.0.1', () => {
  console.log('Server running at http://127.0.0.1:3000/');
});
