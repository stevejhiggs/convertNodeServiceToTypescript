const getFortune = require('./store');

const handler = (req, res) => {
  const fortune = getFortune(req.params.starSign);
  if (!fortune) {
    return res.status(406).send('unknown star sign');
  }

  return res.send(fortune);
};

module.exports = handler;
