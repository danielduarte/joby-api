import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import mongoose from 'mongoose';

import indexRouter from './routes/index';
import jobSearchesRouter from './routes/job-searches';
import applicationsRouter from './routes/applications';
import applicationUpdatesRouter from './routes/application-updates';

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
app.use(function(err: Error, req: any, res: any, next: any) { // eslint-disable-line @typescript-eslint/no-unused-vars
  // `next` param must be present even when it's not used, so the middleware is taken as an error handler by express
  res.status(400).json({ message: err.message });
});

mongoose.connect('mongodb://localhost/joby', { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = app;
