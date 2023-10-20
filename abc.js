const http = require('http');

const server = http.createserver({req, res} => {
    res.writeHead(200, { 'content-type': 'text/plain'});
     res.end('hello world');
    });
     
    server.listen(3000);
    console.log('server listening on port 3000');