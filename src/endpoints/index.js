const fortune = require('./fortune');
const health = require('./health');

const registerEndpoints = (router) => {
  fortune(router);
  health(router);
};

module.exports = registerEndpoints;
