var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'client')));



app.get('/navigation', (req, res) => {
  console.log("HAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
  console.log(req.query);
  res.sendFile(path.join(__dirname, 'client', 'index.html'));
});


app.get('/', (req, res) => {
  console.log("Hccccccccc");
  console.log(req.query);
  res.sendFile(path.join(__dirname, 'client', 'index.html'));
});



// catch 404 and forward to error handle
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
