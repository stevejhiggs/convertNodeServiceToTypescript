import 'mocha';
import { expect } from 'chai';
import { getFortune } from '../../../src/endpoints/fortune/store';

describe('endpoints -> fortune -> store -> getFortune', () => {
  it('returns a fortune when given a valid starsign ', () => {
    const fortune = getFortune('aries');
    expect(fortune).to.exist;
  });

  it('returns null for an invalid starsign', () => {
    const fortune = getFortune('fish');
    expect(fortune).to.be.null;
  });

  it('returns null if no starsign is passed', () => {
    const fortune = getFortune('');
    expect(fortune).to.be.null;
  });
});
