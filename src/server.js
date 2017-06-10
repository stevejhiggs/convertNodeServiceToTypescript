const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('config');
const registerEndpoints = require('./endpoints');
const pinoHttp = require('pino-http');

const pino = pinoHttp({
  extreme: true,
  level: config.get('logLevel')
}); // https://github.com/mcollina/pino#pinoopts-stream

/**
 * Configure the express server
 */
const createServer = () => {
  const app = express();
  app.set('x-powered-by', false);
  app.use(bodyParser.json());
  app.use(cors());
  app.use(pino); // instead of winston logger

  const router = express.Router({ // eslint-disable-line new-cap
    caseSensitive: true
  });
  app.use(router);

  registerEndpoints(router);
  return app;
};

module.exports = createServer;
