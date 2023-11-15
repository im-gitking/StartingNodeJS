const http = require('http');

// importing usermade new module
const routes = require('./routes');

const server = http.createServer(routes);

server.listen(3000);