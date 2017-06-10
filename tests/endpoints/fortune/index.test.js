const supertest = require('supertest');
const createServer = require('../../../src/server');

// if any of these tests fail you have broken the public contract and every client
describe('endpoints -> fortune', () => {
  let request;

  before(() => {
    // set up a local, in process version of express
    const app = createServer();
    // bind supertest to this app instance, allowing us to make
    // what looks like http requests
    request = supertest(app);
  });

  it('responds with a 200 and a fortune when we make a call to /fortune with a valid starsign', (done) => {
    request
      .get('/fortune/gemini')
      .expect(200, done);
  });

  it('responds with a 406 when we make a call to /fortune with an invalid starsign', (done) => {
    request
      .get('/fortune/fish')
      .expect(406, done);
  });
});
