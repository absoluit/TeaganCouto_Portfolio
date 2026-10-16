// Main imports
import express from 'express';
import throwError from 'http-errors';
import logger from 'morgan';
import cors from 'cors';

// Router imports
import referencesRouter from '../app/routes/referencesRouter.js';
import servicesRouter from '../app/routes/servicesRouter.js';
import indexRouter from '../app/routes/indexRouter.js';
import projectsRouter from '../app/routes/projectsRouter.js';
import usersRouter from '../app/routes/usersRouter.js';

// Express configuring
const app = express();
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routers
app.use('/', indexRouter);
app.use('/api/projects', projectsRouter);
app.use('/api/users', usersRouter);
app.use('/api/references', referencesRouter);
app.use('/api/services', servicesRouter);

// Catch 404 and forward to error handler
app.use(function(req, res, next) {  
  next(throwError(404))
});

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    success: false,
    message: err.message
  });
});

export default app;