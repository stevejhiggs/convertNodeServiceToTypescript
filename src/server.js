const bodyParser = require('body-parser');
const config = require('config');
const cors = require('cors');
const express = require('express');
const pinoHttp = require('pino-http');
const registerEndpoints = require('./endpoints/routes');

const pino = pinoHttp({
  level: config.get('logLevel')
});

/**
 * Configure the express server
 */
module.exports = function createServer() {
  const app = express();
  app.set('x-powered-by', false);
  app.use(bodyParser.json());
  app.use(cors());
  app.use(pino); // instead of winston logger

  const router = express.Router({
    caseSensitive: true
  });
  app.use(router);

  registerEndpoints(router);
  return app;
}
