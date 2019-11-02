const fortune = require('./fortune');
const health = require('./health');

module.exports = function(router) {
  router.get('/fortune/:starSign', fortune);
  router.get('/health', health);
}
