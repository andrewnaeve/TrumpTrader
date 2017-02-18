const sorted = require('./ticker_lists/sorted').sorted;

module.exports.longestPhrase = function(twee) {
  
  let tweet = twee.split(' ');
  let consec = [];

  for(var k = 0; k < sorted.length; k++) {
    let companyString = sorted[k]["Description"];
    for (var i=0; i < tweet.length; i++) {
      if (companyString.includes(tweet[i]) && tweet[i][0] === tweet[i][0].toUpperCase()) {
        var t = tweet[i];
        for (var j=i+1; j < tweet.length; j++) {
          if (companyString.includes(t + ' ' + tweet[j])) {
            t += ' ' + tweet[j];
          } else {
            consec.push(t)
            break;
          }
        }
      }
    }
  }
  if (consec.length > 0) {return(consec.reduce((a,b) => a.length > b.length ? a : b))}
  else {return ''}
}



