const http = require('http');

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.end(`Hello Developers`);
    } else {
        res.end(`Hello World`);
    }
});

server.listen('3000');

