const sorted = require('./ticker_lists/sorted').sorted;


module.exports.longestPhrase = function(twee) {
  
  let tweet = twee.split(' ');
  let consec = [];

  for(var k = 0; k < sorted.length; k++) {
    let companyString = sorted[k]["Description"];
    for (var i=0; i < tweet.length; i++) {
      if (companyString.includes(tweet[i]) && tweet[i][0] === tweet[i][0].toUpperCase()) {
        var t = tweet[i];
        consec.push(t);

          for (var j=i+1; j < tweet.length-1; j++) {
            if (companyString.includes(t + ' ' + tweet[j])) {
              t += ' ' + tweet[j];
              consec.push(t);
            } else {
              break;
            };
          };

      };
    };
  };
  // console.log(consec)
  if (consec.length > 0) {return(consec.reduce((a,b) => a.length > b.length ? a : b))}
  else { return 'no matches from longest phrase' };
};

 module.exports.findSymbol = function(longest) {

  let wordCount = longest.split(' ').length;
  let narrow = sorted.filter(x => x["Description"].includes(longest) && wordCount / x["Description"].split(' ').length > .3)
  .sort((a,b) => (longest.length / b["Description"].length) - (longest.length / a["Description"].length))
  
  return narrow

};
  