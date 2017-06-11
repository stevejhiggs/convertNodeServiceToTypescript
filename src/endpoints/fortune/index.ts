import { RequestHandler, Router } from 'express';
import { getFortune } from './store';

const handler: RequestHandler = (req, res) => {
  const fortune = getFortune(req.params.starSign);
  if (!fortune) {
    return res.status(406).send('unknown star sign');
  }

  return res.send(fortune);
};

export default function(router: Router) {
  router.get('/fortune/:starSign', handler);
}
