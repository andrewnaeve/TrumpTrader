const bodyParser = require('body-parser');
const fs = require('fs');
const logger = require('morgan');
const twitter = require('twitter');
const client = require('./secrets/twitter_keys').twit;
const sentiment = require('sentiment');
const nasdaq = require('./ticker_lists/nasdaq').nasdaq;
const nyse = require('./ticker_lists/nyse').nyse;
const sorted = require('./ticker_lists/sorted').sorted;
const nlp = require('compromise');
const longestPhrase = require('./algorithms').longestPhrase;

// const express = require('express')
// const app = express();
// const port = 3000;
// app.use('/public', express.static('./public'));
// app.use(logger('dev'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.text());
// app.use(bodyParser.json({type: 'application/vnd.api+json'}));

// app.listen(port, function() {
//   console.log('listening on ' + port);
// });

// twitter stream grab

// var params = {with: 'followings'};

// var stream = client.stream('user', params );
// stream.on('data', function(event) {

//   console.log('the tweet: ', event.text)

// })

function getSentiment(tweet) {
  return result = sentiment(tweet, {
    'mexico': -5
  });
};


var tweet = 'the Company is great';

function isTraded(tweet) {
  
  let tweets = tweet.trim().replace(/[.,\/#!@$%\^&\*;:{}=\-_`~()]/g,"").replace(/\s{2,}/g," ");
  let longest = longestPhrase(tweets)

  let narrow = sorted.filter(x => x["Description"].includes(longest) && longest.length / x["Description"].length > .4)
  let hi = narrow.sort((a,b) => (longest.length / b["Description"].length) - (longest.length / a["Description"].length))
  // sorting makes it more relevant, but if multiple matches, do you really wanna?
  console.log(hi)

  if (narrow.length > 1) {
    for (var i = 0; i < narrow.length; i++) {
      for (var k = 1; k < narrow.lengh -i; k++) {

      }
    }
  }

  // also toss out
  // console.log(narrow)
  
}

isTraded(tweet);

// // var tweet = 'Ford Motor Company'
// // let p1 = getSentiment(tweet)
// let p2 = isTraded(tweet)

// function test() {
//   Promise.all([p1, p2]).then(values => {
//     console.log('Promise Values', values[0].score, values[1])
//   })
// }


