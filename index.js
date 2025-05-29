const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World! This is my Node.js demo app.\n');
  } else if (req.url === '/about') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('About page: Node.js demo app example..\n');
  } else {
    res.statusCode = 404;
    res.end('Page not found\n');
  }
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
