import * as bodyParser from 'body-parser';
import * as config from 'config';
import * as cors from 'cors';
import * as express from 'express';
import * as pinoHttp from 'pino-http';
import registerEndpoints from './endpoints';

const pino = pinoHttp({
  extreme: true,
  level: config.get('logLevel')
}); // https://github.com/mcollina/pino#pinoopts-stream

/**
 * Configure the express server
 */
export default function createServer(): express.Application {
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
}
