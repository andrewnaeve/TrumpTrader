const sorted = require('./ticker_lists/sorted').sorted;
const sentiment = require('sentiment');

const longestPhrase = require('./algorithms').longestPhrase;
const findSymbol = require('./algorithms').findSymbol;



exports.isTraded = function(tweet) {

  let tweets = tweet.trim().replace(/[.,\/#!@$%\^&\*;:{}=\-_`~()]/g,"").replace(/\s{2,}/g," ");
  let longest = longestPhrase(tweets);
  let Symbol = findSymbol(longest);

  console.log('longest', longest)
  console.log('symbol', Symbol)

  if (Symbol.length > 0) { return Symbol[0]["Symbol"] }
  else { return "Error 1" }
  // else { return 'Error 1' }

},

exports.getSentiment = function(tweet) {
  return result = sentiment(tweet, {
    'mexico': -5,
    'mexican': -5,
    'big': -2,
    'costs': -3
  });
},

exports.shouldTrade = function(tweet) {

  let p1 = getSentiment(tweet)
  let p2 = isTraded(tweet)

  Promise.all([p1, p2]).then(values => {
    let comparative = values[0].comparative;
    let symbol = values[1];
    console.log('Promise Values', comparative, symbol);
    if(comparative < -.1 && symbol !== "Error") {
      // makeTrade(symbol);
      console.log('hi')
    };
  });
}


