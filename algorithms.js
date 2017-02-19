const sorted = require('./ticker_lists/sorted').sorted;
const sentiment = require('sentiment');

module.exports.longestPhrase = function(twee) {
  
  let tweet = twee.split(' ');
  let consec = [];

  for(var k = 0; k < sorted.length; k++) {
    let companyString = sorted[k]["Description"];
    for (var i=0; i < tweet.length; i++) {
      if (companyString.includes(tweet[i]) && tweet[i][0] === tweet[i][0].toUpperCase()) {
        var t = tweet[i];
        consec.push(t);
        if(tweet[i+1] !== undefined) {
          console.log('ting')
          for (var j=i+1; j < tweet.length; j++) {
            if (companyString.includes(t + ' ' + tweet[j])) {
              t += ' ' + tweet[j];
              consec.push(t);
              console.log('in loop', t)
            } else {
              break;
            };
          };
        }; 
      };
    };
  };
  console.log(consec)
  // if (consec.length > 0) {return(consec.reduce((a,b) => a.length > b.length ? a : b))}
  // else {return 'no matches from longest phrase'}
};
// bug = algo checks one after, but fails if one after doesn't exist

 module.exports.findSymbol = function(longest) {

  let narrow = sorted.filter(x => x["Description"].includes(longest) && longest.length / x["Description"].length > .30)
  .sort((a,b) => (longest.length / b["Description"].length) - (longest.length / a["Description"].length))
  
  // sorting makes it more relevant, but if multiple matches, do you really wanna?
  return narrow

}
  
