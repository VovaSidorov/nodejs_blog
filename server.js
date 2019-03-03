const express = require('express');
const mysql = require('mysql');

const app = express();

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '123456789root',
    database : 'blog',
    multipleStatements: true
});

connection.connect();

connection.query('CREATE TABLE IF NOT EXISTS users(' +
    'id INT NOT NULL AUTO_INCREMENT,' +
    'PRIMARY KEY(id),' +
    'name VARCHAR(20),' +
    'email VARCHAR(30),'+
    'password VARCHAR(20)'+
    ')');

app.get('/users',(req,res)=>{

    const {query} = req;
    let limitRow = 4;
    let offset = 0;
    let page = 1;

    console.log(query);
    if ('page' in query && Number.isInteger(parseInt(query.page))&& parseInt(query.page)>0){
        page = parseInt(query.page);
             offset = limitRow*(query.page-1)
    }

    const query1 = `select * from users LIMIT ${limitRow} OFFSET ${offset};`;
    const query2 = `select count(*) as count from users;`;

    connection.query(`${query1} ${query2}`, (err, result) => {
        if(err){}
        console.log(result);
        res.send({
            data: result[0],
            page: 1,
            total: result[1][0].count,
            status: "ok"
        });
    })
});

app.get('/users/:id',(req, res) => {

    const {params: {id}} = req;
    console.log(id);

    if(Number.isInteger(parseInt(id)) && parseInt(id) > 0){
        const query1 = `select * from users WHERE id = ${id};`;
        connection.query(query1, (err, result) => {
            if(err){}
            console.log(result);
            res.send({
                data: result,
                status: "ok"
            });
        })
    }else {
        res.send({
            status: "error",
            error: "Error get data"
        });
    }
});

app.listen("3000", err => {
    if(err){

    }
    console.log("Server was start...");
});