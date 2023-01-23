var express = require('express');
var router = express.Router();
var mysql = require('mysql');

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "z10mz10m",
  database: 'schools'
});
con.connect((err) => {
  if (err) throw err;
  router.post('/', (req, res, next) => {
    console.log("hi");
    let classroom = isNaN(req.body.classroom_id) ? null : req.body.classroom_id;
    let sql = `INSERT INTO student (name, password, classroom_id)
  VALUES ("${req.body.name}","${req.body.password}",${classroom})`
    con.query(sql, (err, result, fields) => {
      if (err) throw err;
      console.log(result);
    })
    con.query('SELECT * FROM student', (err, result, fields) => {
      if (err) throw err;
      res.json(result);
    })
  });
  router.get('/', (req, res) => {
    let sql
    if (!req.query.teacher) sql = 'SELECT name FROM student'
    else sql = `SELECT student.name FROM student JOIN classroom ON student.classroom_id=classroom.id JOIN teacher ON teacher.id=classroom.teacher_id WHERE teacher.name= "${req.query.teacher}"`;
    
    // WHERE teacher.name = ${req.query.teacher}

    con.query(sql, (err, result, fields) => {
      if (err) throw err;
      // let arr = [];
      // for (let i = 0; i < result.length; i++) {
      //   arr.push(result[i].name);
      // }
      res.json(result);
    })
  })
})


module.exports = router;


// "id": "INT PRIMARY KEY",
// "name": "VARCHAR(255)",
// "password": "VARCHAR(255)",
// "classroom_id": "INT"