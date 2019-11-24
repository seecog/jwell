var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var hbs = require('hbs')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var adminRouter = require("./routes/admin/index");
//require('./routes/admin/product');


var app = express();

//mongodb start
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/jwelshop",function(err){
if(err){
  throw new Error(err);
}
})
//mongo db end

//import models start
var CategoryModel=require("./models/category.model");
//import models end

//layout start
var hbs = require( 'express-handlebars');
app.set('view engine', 'hbs');
app.engine( 'hbs', hbs( {
  extname: 'hbs',
  defaultView: 'default',
  layoutsDir: __dirname + '/views/admin/layouts/',
  partialsDir: __dirname + '/views/admin/partials/'
}));
//layout end

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/admin', adminRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
