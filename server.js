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

// function isTraded(tweet) {
//   let twee = tweet.trim().toUpperCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").replace(/\s{2,}/g," ").split(' ')

//   // let twee = r.



//   for (var i=0; i < sorted.length; i++) {
//     for (var j=0; j < twee.length; j++) {
//       sorted[i]["Description"].split(' ').map(function(x) {
//         if (x.toUpperCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").replace(/\s{2,}/g," ") === twee[j]) {
//           console.log(twee[j], sorted[i])
//         }
//       })
//     }
//   };
// };

function isTraded(tweet) {
  let twee = tweet.trim().toUpperCase().replace(/[.,\/#!@$%\^&\*;:{}=\-_`~()]/g,"").replace(/\s{2,}/g," ").split(' ');
  let match = [];
  for (var i = 0; i < twee.length; i++) {
     match.push(sorted
     .filter(x => x["Description"]
     .toUpperCase()
     .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
     .replace(/\s{2,}/g," ")
     .indexOf(twee[i]) > -1));
  }
  console.log(match)

}
isTraded('@Nordstrom')
// doesn't return if 2 things are listed, bc map is combining into indexof
// function faster(tweet) {
  
//   let twee = tweet.trim().toUpperCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").replace(/\s{2,}/g," ").split(' ').filter(function(x) { return nlp.noun(x) });


//     for (var j=0; j < twee.length; j++) {
//       sorted.map(function(x, i) {
//         if (x.split(' ').toUpperCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").replace(/\s{2,}/g," ") === twee[j]) {
//           console.log(twee[j], sorted[i])
//         }
//       })
//     }

// };
// sort by frequncy


// isTraded('the lamp from Apple, is really cool. Nordstrom.');
// console.log(nlp.sentence('my the Nordstrom Sally help Capital One').terms.filter((x) => x.pos.Noun))`