const express = require('express');
const {aboutRouter} = require('./routes/about')

const app = express();


app.get('/', (req, res)=>{
    if(req.url === '/'){
        res.end(`Hello Developers`);
        console.log('Hello world');
        
    } else {
        res.end(`Hello World`);
    }
});

aboutRouter.get('/about', (req, res)={
    
})



app.listen('3000', ()=>{
    console.log(`Server is running on port 3000....`);
});

