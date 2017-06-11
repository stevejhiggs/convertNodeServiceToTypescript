import createServer from './server';

const server = createServer();
const listener = server.listen(10000, () => {
  // tslint:disable-next-line:no-console
  console.log(`Server started on port ${listener.address().port}`);
});
