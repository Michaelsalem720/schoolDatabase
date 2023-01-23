var express = require('express');
var router = express.Router();
var mysql = require('mysql');

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "z10mz10m",
  database: 'schools'
});

con.connect( (err) => {
  if (err) throw err;
  router.post('/', (req, res, next) => {
    let bool;
     con.query(`SELECT EXISTS (SELECT 1 FROM admin WHERE name ="${req.body.admin_name}" AND password ="${req.body.admin_password}") AS "a"`, async (err, result, fields) => {
      if (err) throw err;
      bool =await result[0].a;


    if (bool) {
      let schoolCode = isNaN(req.body.school_code) ? null : req.body.school_code;
      let sql = `INSERT INTO school (name, school_code)
      VALUES ("${req.body.name}","${schoolCode}")`
      con.query(sql, (err, result, fields) => {
        if (err) throw err;
        console.log(result);
      })
      con.query('SELECT * FROM school', (err, result, fields) => {
        if (err) throw err;
        res.json(result);
      })
    }

    else {
      res.json("duck you");
    }
    });

  })

  router.get('/', (req, res) => {
    let sql = 'SELECT admin.name AS Principal, school_code, school.name AS School FROM admin JOIN school ON admin.school_id = school.id'
    con.query(sql, (err, result, fields) => {
      if (err) throw err;
      let arr = [];
      for (let i = 0; i < result.length; i++){
        arr.push(`The School - ${result[i].School}, School Code - ${result[i].school_code}, Principal - ${result[i].Principal}`);
      }
      res.json(arr);
    })
  })

})



module.exports = router;

