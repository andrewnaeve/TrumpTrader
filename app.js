const express = require('express')
const app = express();
const port = 3000;
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

app.use('/public', express.static('./public'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));

app.listen(port, function() {
  console.log('listening on ' + port);
});

// twitter stream grab

// var params = {with: 'followings'};

// var stream = client.stream('user', params );
// stream.on('data', function(event) {

//   console.log('the tweet: ', event.text)

// })

function analyzeSentiment(tweet) {
  let result = sentiment(tweet, {
    'mexico': -5
  });
};


function isExact(x,y) {
  let s = x.split(' ');
  for (var i = 0; i < s.length; i++) {
    return s[i] == y;
  };
};

function isTraded(tweet) {
  
  let sanitized = tweet.trim().replace(/[.,\/#!@$%\^&\*;:{}=\-_`~()]/g,"").replace(/\s{2,}/g," ")
  let twee = nlp(sanitized).nouns().out('text').trim().toUpperCase().split(' ');

  let twee1 = tweet.trim().toUpperCase().replace(/[.,\/#!@$%\^&\*;:{}=\-_`~()]/g,"").replace(/\s{2,}/g," ").split(' ');
  console.log('twee ', twee)
  console.log('twee1 ', twee1)

  let match = [];
  for (var i = 0; i < twee.length; i++) {
    let temp = sorted
      .filter(x => isExact(x["Description"]
      .toUpperCase()
      .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
      .replace(/\s{2,}/g," ")
      , twee[i]
      ))
      
    if (temp.length !== 0) {
      match.push(temp)
    };

  };

console.log(match)

}


isTraded('the opera about richard nixon visiting nordstrom')
// doesn't return if 2 things are listed, bc map is combining into indexof

// sort by frequncy


// isTraded('the lamp from Apple, is really cool. Nordstrom.');
// console.log(nlp.sentence('my the Nordstrom Sally help Capital One').terms.filter((x) => x.pos.Noun))`