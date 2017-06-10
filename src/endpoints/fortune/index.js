const store = require('./store');

const handler = (req, res) => {
  const fortune = store.getFortune(req.params.starSign);
  if (!fortune) {
    return res.status(406).send('unknown star sign');
  }

  return res.send(fortune);
};

module.exports = (router) => {
  router.get('/fortune/:starSign', handler);
};
