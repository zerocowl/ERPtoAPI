import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import registerRoutesByPath from './helpers/registerRoutes';

const app = express();
const { PORT = 3000 } = process.env;

app.disable('x-powered-by');

app.use(
  logger('dev', {
    skip: () => app.get('env') === 'test'
  })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
registerRoutesByPath(app, 'modules');

// Catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Error handler
// eslint-disable-line no-unused-vars
app.use((err, req, res) => {
  res.status(err.status || 500).render('error', {
    message: err.message
  });
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
