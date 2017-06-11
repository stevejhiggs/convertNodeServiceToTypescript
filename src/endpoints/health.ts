import { RequestHandler } from 'express';

const handler: RequestHandler = (req, res) => {
  res.send('healthy');
};

module.exports = (router) => {
  router.get('/health', handler);
};
