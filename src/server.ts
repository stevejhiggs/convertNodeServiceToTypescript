import bodyParser from 'body-parser';
import config from 'config';
import cors from 'cors';
import express from 'express';
import pinoHttp from 'pino-http';
import registerEndpoints from './endpoints/routes';

const pino = pinoHttp({
  level: config.get('logLevel')
});

/**
 * Configure the express server
 */
export default function createServer(): express.Application {
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
