const getSentiment = require('../functions').getSentiment;
const assert = require('chai').assert;

// set this number for how negative a tweet should be to pass
let score = -.1;

// Sentiment Analysis Tests
describe('sentiment analysis', function () {
  let sentiment = getSentiment("General Motors is sending Mexican made model of Chevy Cruze to U.S. car dealers-tax free across border. Make in U.S.A.or pay big border tax!").comparative;
  it(`should have a minimum sentiment of ${score}`, function() {
    assert.isAtMost(sentiment, score, 'tweet 1');
  });
});

describe('sentiment analysis', function () {
  let sentiment = getSentiment("Rexnord of Indiana is moving to Mexico and rather viciously firing all of its 300 workers. This is happening all over our country. No more!").comparative;
  it(`should have a minimum sentiment of ${score}`, function() {
    assert.isAtMost(sentiment, score, 'tweet 2');
  });
});

describe('sentiment analysis', function () {
  let sentiment = getSentiment("Boeing is building a brand new 747 Air Force One for future presidents, but costs are out of control, more than $4 billion. Cancel order!").comparative;
  it(`should have a minimum sentiment of ${score}`, function() {
    assert.isAtMost(sentiment, score, 'tweet 3');
  });
});

describe('sentiment analysis', function () {
  let sentiment = getSentiment("Toyota Motor said will build a new plant in Baja, Mexico, to build Corolla cars for U.S. NO WAY! Build plant in U.S. or pay big border tax.").comparative;
  it(`should have a minimum sentiment of ${score}`, function() {
    assert.isAtMost(sentiment, score, 'tweet 4');
  });
});

describe('sentiment analysis', function () {
  let sentiment = getSentiment("asdffdsa").comparative;
  it('should not be negative', function() {
    assert.isAtLeast(sentiment, 0, 'tweet 5');
  });
});