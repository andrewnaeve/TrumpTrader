const expect = require('chai').expect;
const isTraded = require('../functions').isTraded;

// Search function tests
describe('search algorithm', function () {
  let traded = isTraded("General Motors is sending Mexican made model of Chevy Cruze to U.S. car dealers-tax free across border. Make in U.S.A.or pay big border tax!");
  it('should find the correct stock symbol', function() {
    expect(traded).to.deep.equal('GM');
  });
});

describe('search algorithm', function () {
  let traded = isTraded("Rexnord of Indiana is moving to Mexico and rather viciously firing all of its 300 workers. This is happening all over our country. No more!");
  it('should find the correct stock symbol', function() {
    expect(traded).to.deep.equal('RXN');
  });
});

describe('search algorithm', function () {
  let traded = isTraded("Boeing is building a brand new 747 Air Force One for future presidents, but costs are out of control, more than $4 billion. Cancel order!");
  it('should find the correct stock symbol', function() {
    expect(traded).to.deep.equal('BA');
  });
});

describe('search algorithm', function () {
  let traded = isTraded("Toyota Motor said will build a new plant in Baja, Mexico, to build Corolla cars for U.S. NO WAY! Build plant in U.S. or pay big border tax.");
  it('should find the correct stock symbol', function() {
    expect(traded).to.deep.equal('TM');
  });
});

describe('search algorithm', function () {
  let traded = isTraded("asdffdsa");
  it('should find the correct stock symbol', function() {
    expect(traded).to.deep.equal('Error 1');
  });
});

