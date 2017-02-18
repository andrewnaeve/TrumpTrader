const targetedTweets = require('./targeted_tweets').targetedTweets;
const getSentiment = require('../algorithms').getSentiment;
const longestPhrase = require('../algorithms').longestPhrase;


var tweet = 'the General Motors is great'
let p1 = getSentiment(tweet)
let p2 = isTraded(tweet)

function test() {
  Promise.all([p1, p2]).then(values => {
    console.log('Promise Values', values[0].score, values[1][0]["Symbol"])
  })
}