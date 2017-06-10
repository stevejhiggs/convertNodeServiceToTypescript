const expect = require('chai').expect;
const store = require('../../../src/endpoints/fortune/store');

describe('endpoints -> fortune -> store -> getFortune', () => {
  it('returns a fortune when given a valid starsign ', () => {
    const fortune = store.getFortune('aries');
    expect(fortune).to.exist;
  });

  it('returns null for an invalid starsign', () => {
    const fortune = store.getFortune('fish');
    expect(fortune).to.be.null;
  });

  it('returns null if no starsign is passed', () => {
    const fortune = store.getFortune();
    expect(fortune).to.be.null;
  });
});
