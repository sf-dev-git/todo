const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const createError = require('http-errors');
const path = require('path');
const indexRouter = require('./routes/index.js');
const livereload = require('livereload');
const connectLiveReload = require('connect-livereload');

const logger = morgan;
const app = express();

// development setup
const env = process.env.NODE_ENV || "development";

if (env === "development") {
  const liveReloadServer = livereload.createServer();
  liveReloadServer.server.once("connection", () => {
    setTimeout(() => {
      liveReloadServer.refresh("/");
    }, 100);
  });
  app.use(connectLiveReload());
}

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
// error handler
app.use(function(err, req, res , next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('global/error');
});

module.exports = app;
