// const express = require('express');
const data = require('./database.json');
const mysql = require('mysql');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "z10mz10m",
    database: 'schools'
});

// con.connect((err) => {
//     if (err) throw err;
//     console.log('connected');
//     for (const key in data) {
//         let titles = '';
//         for (const k in data[key]) {
//             titles += `${k} ${data[key][k]},`
//         }
//         titles = titles.slice(0, titles.length - 1)
//         let sql = `CREATE TABLE ${key} (${titles});`

//         con.query(sql, (err, result, fields) => {
//             if (err) throw err;
//             console.log(result);
//         })
//     }
// });

// con.connect((err) => {
//     if (err) throw err;
//     console.log('connected');
//     let sql = `INSERT INTO admin (id, name, password, school_id) 
//     VALUES (1,'koren','123',1),
//     (2,'michael','222',2);`
//     con.query(sql, (err, result, fields) => {
//         if (err) throw err;
//         console.log(result);
//     })
// });


con.connect((err) => {
    if (err) throw err;
    console.log('connected');
    let sql = `DROP TABLE student;`
    con.query(sql, (err, result, fields) => {
        if (err) throw err;
        console.log(result);
    })
    sql = `DROP TABLE admin;`
    con.query(sql, (err, result, fields) => {
        if (err) throw err;
        console.log(result);
    })
    sql = `DROP TABLE classroom;`
    con.query(sql, (err, result, fields) => {
        if (err) throw err;
        console.log(result);
    })
    sql = `DROP TABLE teacher;`
    con.query(sql, (err, result, fields) => {
        if (err) throw err;
        console.log(result);
    })
    sql = `DROP TABLE school;`
    con.query(sql, (err, result, fields) => {
        if (err) throw err;
        console.log(result);
    })
});

