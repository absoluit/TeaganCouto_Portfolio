const express = require('express');
var throwError = require('http-errors');
var logger = require('morgan'); 
var cors = require('cors');
var projectsRouter = require('../app/routes/projectsRouter');
var indexRouter = require('../app/routes/index');

const app = express();
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routers
app.use('/', indexRouter);
app.use('/api/projects', projectsRouter);



app.use(function(req, res, next) {  // catch 404 and forward to error handler
  next(throwError(404))
});

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    success: false,
    message: err.message
  });
});

module.exports = app;



// PROCESS GET/ROUTES AND SEND TO SERVER