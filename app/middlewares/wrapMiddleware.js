import { boomify } from 'boom';

/**
 * call a middleware
 * @method tryCatch
 * @param  {Function} fn
 * @return {Promise}
 */
const tryCatch = fn => {
  try {
    return Promise.resolve(fn());
  } catch (e) {
    return Promise.reject(e);
  }
};

/**
 * @method sendError
 * @param  {ResponseRestify}  res response instance
 * @param  {Error}            e
 */
const sendError = (res, e) => {
  const { output } = boomify(e);
  res.send(output.statusCode, output);
};

/**
 * @method wrapMiddleware
 * @param  {Function}       middleware route middleware
 * @return {Function}
 */
const wrapMiddleware = middleware => (req, res) => {
  const handler = () => middleware(req, res);
  tryCatch(handler)
    .then(result => {
      res.json(result);
    })
    .catch(sendError);
};

export default wrapMiddleware;
