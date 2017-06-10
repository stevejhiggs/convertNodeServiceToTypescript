const createServer = require('./src/server');

const server = createServer();
const listener = server.listen(10000, () => {
  console.log(`Server started on port ${listener.address().port}`);
});
