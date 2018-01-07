/**
 * Create an express router and serve the api under that
 * Pulling in extra routes can be done as follows:
 *
 * @example
 *  const contentfulApi = require('./contentful');
 *  api.use('/contentful', contentfulApi);
 * --------
 *
 * The above assumes that contentfulApi is another express route
 * This can be hit with a GET on /api/contentful/{your routes}
 */
const express = require('express');

const api = express.Router();

api.get('/', (req, res) => {
  res.send('Welcome to API 1.0!');
});

module.exports = api;
