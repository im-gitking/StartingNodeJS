const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    res.setHeader('Content-Type', 'text/html');

    if (url === '/') {
        const fileData = fs.readFileSync('message.txt', 'utf8');
        console.log(fileData);
        res.write('<html><head><title>Read Write Project</title></head><body><p>'+ fileData + '</p><form action="/message" method="POST"><input type="text" name="message"><input type="submit"></form></body></html>');
        return res.end();
    }
    if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedMessage = Buffer.concat(body).toString();
            const message = parsedMessage.split('=')[1];
            fs.appendFile('message.txt', `+${message}`, err => {
                res.statusCode = 302;
                res.setHeader('location', '/');
                return res.end();
            });
        });
    }
    res.write('<html><head><title>Read Write Project</title></head><body><form method="POST" action="/message"><input type="text" name="message"><input type="submit"></form></body></html>');
    res.end();
});

server.listen(2000);