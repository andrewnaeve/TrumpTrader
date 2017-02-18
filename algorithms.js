module.exports.longestPhrase = function(x, y) {
  
  let tweet = y.split(' ');
  let stocks = x;
  let final = [];

  for (var p = 0; p < stocks.length; p++) {
    let semiFinal = [];
    let companyString = stocks[p]["Description"].replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").replace(/\s{2,}/g," ");
    for (var i=0; i < tweet.length; i++) {
      let matches = [];
      if (companyString.includes(tweet[i])) {
        matches.push(tweet[i]);
        for (var j=i+1; j < tweet.length; j++) {
          if (companyString.includes(String(matches) + ' ' + tweet[j])) {
            matches.push(tweet[j]);
          }
        }
      if(matches.length !== 0) { semiFinal.push(matches.join(' ')) }
      }
    }

    if (semiFinal.length !== 0) { final.push(semiFinal); }
  // at the end, semiFinal contains the best matched phrase
  // for the single stocks
}

   console.log(final.reduce((a,b) => a.length > b.length ? a : b));
  // now final contains the longest of all matches
}

module.exports.narrowMatches = function(x, y) {

}