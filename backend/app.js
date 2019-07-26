let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');

let indexRouter = require('./routes/index');
let gallerysRouter = require('./routes/gallerys');
let performancesRouter = require('./routes/performances');

let app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/v1/gallerys', gallerysRouter);
app.use('/api/v1/perfs', performancesRouter);

module.exports = app;
