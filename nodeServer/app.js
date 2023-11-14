// Creating a Server using Node.JS:
const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);
    // process.exit();
});

server.listen(5000);