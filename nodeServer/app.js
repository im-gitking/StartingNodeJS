// Creating a Server using Node.JS:
const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    // Sending response after visit request took place:
    // set default header for a html page
    res.setHeader('Content-Type', 'text/html');
    // adding html
    res.write('<html>');
    
    if(url === '/home') {
        res.write('<head><title>Home Page</title></head>');
        res.write('<body><h1>Welcome home</h1></body>');
    }
    else if(url === '/about') {
        res.write('<head><title>About Page</title></head>');
        res.write('<body><h1>Welcome to About Us page</h1></body>');
    }
    else if(url === '/node') {
        res.write('<head><title>Node Project</title></head>');
        res.write('<body><h1> Welcome to my Node Js project</h1></body>');
    }

    res.write('</html>');
    res.end();
});

server.listen(5000);