import { RequestHandler } from 'express';

const handler: RequestHandler = (req, res) => {
  res.send('healthy');
};

export default handler;
