const bodyParser = require('body-parser');
const fs = require('fs');
const request = require('request');
const logger = require('morgan');
const twitter = require('twitter');
const client = require('./secrets/twitter_keys').twit;
const et = require('./secrets/etrade').et;
const {key, secret} = require('./secrets/etrade').et;
const sentiment = require('sentiment');


// stock lists
const nasdaq = require('./ticker_lists/nasdaq').nasdaq;
const nyse = require('./ticker_lists/nyse').nyse;
const sorted = require('./ticker_lists/sorted').sorted;

// functions and algorithms
const longestPhrase = require('./algorithms').longestPhrase;
const getSentiment = require('./algorithms').getSentiment;
const findSymbol = require('./algorithms').findSymbol;
const isTraded = require('./functions').isTraded;

// // server setup
const express = require('express')
const app = express();
const port = 3000;
app.use('/public', express.static('./public'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));

app.listen(port, function() {
  console.log('listening on ' + port);
});

// // twitter stream grab
let params = {with: 'followings'};
let stream = client.stream('user', params );

// stream.on('data', function(event) {
//   let tweet = event.text;
//   console.log('the tweet: ', tweet);
//   isTraded(tweet);
// })

// et.getRequestToken(
//   function(authorizationUrl) {
//     console.log(authorizationUrl)
//   }, function(error) {
//     console.log('error ', error)
//   }
// );

// et.getAccessToken('J7CXG',
// function() {

// }, function(error) {
//   console.log(error)
// });