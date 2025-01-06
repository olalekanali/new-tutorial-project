const http = require('http');
const express = require('express');

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.end(`Hello Developers`);
        console.log('Hello world');
        
    } else {
        res.end(`Hello World`);
    }
});

server.listen('3000');

