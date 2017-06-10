const handler = (req, res) => {
  res.send('healthy');
};

module.exports = (router) => {
  router.get('/health', handler);
};
