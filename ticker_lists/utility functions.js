// sorting and tweet grabbing

// var sorted = require('./sorted').sorted
// var fs = require('fs')

// fs.appendFile("sanitized.txt", sort(), function(error) {
//   if(error) {
//     console.log(error);
//   }
// });

// function sort() {
//   return  Object.values(sorted, i)[i].replace(/[.,\/#!@$%\^&\*;=\-_`~]/g,"").replace(/\s{2,}/g," ")
// }      

// var params = {user_id: 25073877, count: 100};

// client.get('statuses/user_timeline', params, function(error, tweets, response) {
//   var tweetList = []
// 	   if(error) throw error;
// 	   for(var i = 0; i < tweets.length; i++) {
// 	   	tweetList.push('"'+tweets[i].text.replace(/[.,\/#!@$'"%\^&\*;:{}=\-_`~()]/g,"").replace(/\s{2,}/g," ")+'"')
// 	   }
// 		fs.appendFile("log.txt", tweetList, function(error) {
// 			if(error) {
// 				console.log(error);
// 			}
// 		});
// 		console.log(tweetList);
// });