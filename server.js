const express = require('express')
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const logger = require('morgan');
const twitter = require('twitter');
const client = require('./secrets/twitter_keys').twit;

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

var params = {with: 'followings'};

var stream = client.stream('user', params );
stream.on('data', function(event) {

  console.log('pure event ', event)

})
