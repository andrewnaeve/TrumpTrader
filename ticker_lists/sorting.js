var sorted = require('./sorted').sorted
var fs = require('fs')

fs.appendFile("sanitized.txt", sort(), function(error) {
  if(error) {
    console.log(error);
  }
});

function sort() {
  return  Object.values(sorted, i)[i].replace(/[.,\/#!@$%\^&\*;=\-_`~]/g,"").replace(/\s{2,}/g," ")
}      