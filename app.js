const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');

const indexRouter = require('./routes/index');
const jobSearchesRouter = require('./routes/job-searches');
const applicationsRouter = require('./routes/applications');
const applicationUpdatesRouter = require('./routes/application-updates');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/job-searches', jobSearchesRouter);
app.use('/job-searches/:jsId/applications', applicationsRouter);
app.use('/job-searches/:jsId/applications/:appId/updates', applicationUpdatesRouter);

// Custom error handler
app.use(function(err, req, res, next) {
  res.status(400).json({ message: err.message });
});

mongoose.connect('mongodb://localhost/joby', { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = app;
