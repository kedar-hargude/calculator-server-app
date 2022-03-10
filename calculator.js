const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

const port = 3000;

app.get('/', function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post('/', function(req, res){
    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);
    res.send(`Their addition is ${num1+num2}`);
});

app.listen(port, function(){
    console.log(`Ye app port ${port} pe chalu ho gaya na bhidu!!!`);
});