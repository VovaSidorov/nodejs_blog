const express = require('express');
const mysql = require('mysql');

const app = express();

const connection = mysql.createConnection({
   host: 'localhost',
   user: 'root',
   password: '123456789root',
   database: 'blog'
});

connection.connect();

connection.query('CREATE TABLE IF NOT EXISTS users(' +
    'id INT NOT NULL AUTO_INCREMENT,' +
    'PRIMARY KEY(id),' +
    'name VARCHAR(20),' +
    'email VARCHAR(30),'+
    'password VARCHAR(20)'+
    ')');

app.listen("3000", err => {
    if(err){

    }
    console.log("Server was start...");
});