import { RequestHandler, Router } from 'express';

const handler: RequestHandler = (req, res) => {
  res.send('healthy');
};

export default function(router: Router) {
  router.get('/health', handler);
}
