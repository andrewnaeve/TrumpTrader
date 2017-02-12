fs.appendFile("sorted.txt", sort(), function(error) {
  if(error) {
    console.log(error);
  }
});

function sort() {
  return  JSON.stringify(nasdaq.concat(nyse).sort())
}      