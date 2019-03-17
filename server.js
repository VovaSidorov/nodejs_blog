const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

app.use((req,res, next) => {
    res.header("Access-Control-Allow-Origin","*");
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.header('Access-Control-Allow-Credentials', true);
    return next();
});

const users = require('./routes/users')(jsonParser);
app.use('/users', users);

const products = require('./routes/products')(jsonParser);
app.use('/products', products);

const carts = require('./routes/carts')(jsonParser);
app.use('/carts', carts);

app.listen("3001", err => {
    if(err){

    }
    console.log("Server was start...");
});