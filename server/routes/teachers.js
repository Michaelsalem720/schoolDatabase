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
    let sql = `INSERT INTO teacher (name, password, email)
  VALUES ("${req.body.name}","${req.body.password}","${req.body.email}")`
    con.query(sql, (err, result, fields) => {
      if (err) throw err;
      console.log(result);
    })
    con.query('SELECT * FROM teacher', (err, result, fields) => {
      if (err) throw err;
      res.json(result);
    })
  });

})

module.exports = router;


// "teacher": {
//   "id": "INT AUTO_INCREMENT PRIMARY KEY",
//   "name": "VARCHAR(255)",
//   "password": "VARCHAR(255)",
//   "email": "VARCHAR(255)"
// },