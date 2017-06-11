import 'mocha';
import * as supertest from 'supertest';
import createServer from '../../src/server';

// if any of these tests fail you have broken the public contract and every client
describe('endpoints -> health', () => {

  let request: supertest.SuperTest<supertest.Test>;

  before(() => {
    // set up a local, in process version of express
    const app = createServer();
    // bind supertest to this app instance, allowing us to make
    // what looks like http requests
    request = supertest(app);
  });

  it('responds with a 200 for a GET to /health', (done) => {
    request
      .get('/health')
      .expect(200, done);
  });
});
