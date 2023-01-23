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
    let teacher = isNaN(req.body.teacher_id) ? null : req.body.teacher_id;
    let grade = isNaN(req.body.grade) ? null : req.body.grade;
    let sql = `INSERT INTO classroom (grade, class_index, teacher_id)
  VALUES ("${grade}","${req.body.class_index}",${teacher})`
    con.query(sql, (err, result, fields) => {
      if (err) throw err;
      console.log(result);
    })
    con.query('SELECT * FROM classroom', (err, result, fields) => {
      if (err) throw err;
      res.json(result);
    })
  });

})

module.exports = router;
