var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const data = require('../database.json');
const mysql = require('mysql');

var studentRouter = require('./routes/students')
var classRouter = require('./routes/classes')
var teacherRouter = require('./routes/teachers')
var schoolRouter = require('./routes/schools')

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/teacher', teacherRouter);
app.use('/school', schoolRouter);
app.use('/student', studentRouter);
app.use('/class', classRouter);


module.exports = app;
