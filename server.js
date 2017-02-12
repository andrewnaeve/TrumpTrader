const express = require('express')
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const logger = require('morgan');
const twitter = require('twitter');
const client = require('./secrets/twitter_keys').twit;
const sentiment = require('sentiment');
const tickermap = require('./tickermap').symbols;
const nlp = require('nlp_compromise');

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

function isTraded(tweet) {
  
  let twee = tweet.split(' ');
  let searchField = "Description";

  for (var i=0; i < tickermap.length; i++) {
    for (var j=0; j < twee.length; j++) {
      tickermap[i]["Description"].split(' ').map(function(x) {
        if (x.toUpperCase() === twee[j].toUpperCase()) {
          console.log(twee[j], tickermap[i])
        }
      })
    }
  };
};

console.log(nlp.noun('Nordstroms').is_organization())
isTraded('hello my friend Mercury');
