const express = require('express');
const app = express();

const users = require('./routes/users');
app.use('/users', users);

app.listen("3000", err => {
    if(err){

    }
    console.log("Server was start...");
});