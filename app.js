/**
 * imports
 */
const express = require('express');
const helmet = require('helmet');
const compression = require('compression');
const logger = require('morgan');
const path = require('path');
const api = require('./src/server/routes/index');

/**
 * constants
 */
const app = express();
const pub = path.join(__dirname, 'public');
const index = path.join(pub, 'index.html');

/**
 * middleware setup
 */
app.use(helmet());
app.use(compression());
app.use(logger('dev'));
app.use('/api', api);


// this middleware needs to go last
app.use('*', (req, res) => res.sendFile(index));

module.exports = app;
