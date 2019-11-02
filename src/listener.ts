import createServer from './server';
import { AddressInfo } from 'net';

const server = createServer();
const listener = server.listen(10000, () => {
  console.log(`Server started on port ${(listener.address() as AddressInfo).port}`);
});
