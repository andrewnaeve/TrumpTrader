const expect = require('chai').expect;
const isTraded = require('../functions').isTraded;

// Search function tests

// these tests should find ticker symbols
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

// these should not find ticker symbols

describe('search algorithm', function () {
  let traded = isTraded("company");
  it('should not find a ticker symbol', function() {
    expect(traded).to.deep.equal('');
  });
});
describe('search algorithm', function () {
  let traded = isTraded("Getting ready to leave for Melbourne, Florida. See you all soon!");
  it('should not find a ticker symbol', function() {
    expect(traded).to.deep.equal('');
  });
});
describe('search algorithm', function () {
  let traded = isTraded("Don't believe the main stream (fake news) media.The White House is running VERY WELL. I inherited a MESS and am in the process of fixing it.");
  it('should not find a ticker symbol', function() {
    expect(traded).to.deep.equal('');
  });
});
describe('search algorithm', function () {
  let traded = isTraded("One of the most effective press conferences I've ever seen! says Rush Limbaugh. Many agree.Yet FAKE MEDIA  calls it differently! Dishonest");
  it('should not find a ticker symbol', function() {
    expect(traded).to.deep.equal('');
  });
});
describe('search algorithm', function () {
  let traded = isTraded("The FAKE NEWS media (failing @nytimes, @NBCNews, @ABC, @CBS, @CNN) is not my enemy, it is the enemy of the American People!");
  it('should not find a ticker symbol', function() {
    expect(traded).to.deep.equal('');
  });
});



