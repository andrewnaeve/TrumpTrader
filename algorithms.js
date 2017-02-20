const sorted = require('./ticker_lists/sorted').sorted;
const relevance = .34;
// set relevance to return matching phrases that are a certain percentage of the company description
// what happens when word matches are of equal length?
// maybe every time a word is matched, the ticker symbol could be added to it.
// then if reduced, would best match be found? 
// 
module.exports.longestPhrase = function(twee) {
  
  let tweet = twee.split(' ');
  let consec = [{Longest: '', Symbol: '', Description: ''}];
  let collect = [];

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

        if(consec[0].Longest.length < t.length && (matchObject.Longest.split(' ').length / companyString.split(' ').length) > relevance) {
          consec[0] = matchObject;
        } else if (consec[0].Longest.length === t.length) {
          if ((consec[0].Longest.split(' ').length / consec[0].Description.split(' ').length) < (matchObject.Longest.split(' ').length / matchObject.Description.split(' ').length)) {
            consec[0] = matchObject;
          };
        };
      };
    };
  };
  
  if (consec.length > 0) { return consec }
  else { return 'no matches from longest phrase' };

};


