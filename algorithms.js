const sorted = require('./ticker_lists/cleaned').sorted;
const blocked = require('./ticker_lists/blocked').blocked;
const relevance = .32;
// set relevance to return matching phrases that are a certain percentage of the company description
// possible overal character length more relevant than word chunks
module.exports.longestPhrase = function(twee) {
  
// this block finds the longest consecutive phrase from a tweet that is contained by a company description 
  let tweet = twee.split(' ');
  let consec = [{Longest: '', Symbol: '', Description: ''}];
 for(var k = 0; k < sorted.length; k++) {
    let companyString = sorted[k].Description;
    for (var i=0; i < tweet.length; i++) {
      let pat1 = new RegExp('\\b('+tweet[i]+')\\b');
      if (pat1.test(companyString) && tweet[i][0] === tweet[i][0].toUpperCase()) {
        var t = tweet[i];
        for (var j=i+1; j < tweet.length-1; j++) {
          let pat2 = new RegExp('\\b('+tweet[i] + ' ' + tweet[j]+')\\b');
          if (pat2.test(companyString)) {
            t += ' ' + tweet[j];
          } else {
            break;
          };
        };
      
        let matchObject = { Longest: t, Symbol: sorted[k].Symbol, Description: sorted[k].Description};

// this block adds the more relevant match to consec, as measured by percentage of company name
        if(consec[0].Longest.length < t.length && (matchObject.Longest.length / companyString.length) > relevance) {
          consec[0] = matchObject;
        } else if (consec[0].Longest.length === t.length) {
          if ((consec[0].Longest.split(' ').length / consec[0].Description.split(' ').length) < (matchObject.Longest.split(' ').length / matchObject.Description.split(' ').length)) {
            consec[0] = matchObject;
          };
        };
      };
    };
  };

// this block checks against a word block list  
  for(var d = 0; d < blocked.length; d++) {
    let forbidden = new RegExp(blocked[d]);
    if (forbidden.test(consec[0].Description)) {
      return 'blocked';
    };
  };
  return consec;

};





