const express = require('express');
const app = express();
const port = 3000;

app.get('/', function(req, res){
    res.send('<h1>Server is live my boiii</h1>');
});

app.listen(port, function(){
    console.log(`Example of bhidu app listening on port ${port}`);
});