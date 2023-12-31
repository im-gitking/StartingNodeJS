const fs = require('fs');

const requestHandeler = (req, res) => {
    const url = req.url;
    const method = req.method;
    // for localhost:5000 url visit
    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    // if there is a 'POST' request on 'localhost:5000/message' 
    if (url === '/message' && method === "POST") {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        // lets put rest code in callback function by returning from here
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt', message, err => {
                res.statusCode = 302;
                res.setHeader('location', '/');
                return res.end();
            });
        });
    }

    // for localhost:5000/anyother.. url visit
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Node Project</title></head>');
    res.write('<body><h1> Welcome to my Node Js project</h1></body>');
    res.write('</html>');
    res.end();
};

// exporting usermade new module
module.exports = requestHandeler;