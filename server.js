const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
//body-parser
const bodyParser = require('body-parser');

//mongo
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://admin:a123456@ds223019.mlab.com:23019/coins');

//render หน้าRouter
const CoinRouter = require('./routers/CoinRouter');


app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/coins', CoinRouter);

app.get('/', function(req,res){
    res.sendFile(path.join(_dirname,'public','index.html'));
});

app.listen(port, function(){
    console.log('Node js Express js Tutorial at port ', port)
});

