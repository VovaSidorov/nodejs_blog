const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const users = require('./routes/users')(jsonParser);
app.use('/users', users);

app.listen("3000", err => {
    if(err){

    }
    console.log("Server was start...");
});