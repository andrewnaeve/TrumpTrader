const bodyParser = require('body-parser');
const fs = require('fs');
const logger = require('morgan');
const twitter = require('twitter');
const client = require('./secrets/twitter_keys').twit;
const sentiment = require('sentiment');
const request = require('request');

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

const router = require('./router')

router(app)

app.use('/public', express.static('./public'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));
app.use(express.static('./public'));


app.listen(port, function() {
  console.log('listening on ' + port);
});

// // twitter stream grab
let params = {with: 'followings'};
// let stream = client.stream('user', params );

// stream.on('data', function(event) {
//   let tweet = event.text;
//   console.log('the tweet: ', tweet);
//   // isTraded(tweet);
// })

// let options = {
// Authorization: OAuth realm="",
// oauth_callback="oob",oauth_signature="FjoSQaFDKEDK1FJazlY3xArNflk%3D", 
// oauth_nonce="LTg2ODUzOTQ5MTEzMTY3MzQwMzE%3D",
// oauth_signature_method="HMAC-SHA1",
// oauth_consumer_key="282683cc9e4b8fc81dea6bc687d46758",
// moauth_timestamp="1273254425"
// }



