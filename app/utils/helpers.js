const et = require('../../secrets/etrade').et;

let helpers = {
  getRequest: function() {
    et.getRequestToken(
    function(authorizationUrl) {
      console.log(authorizationUrl)

    }, function(error) {
      console.log('error ', error)
    })
  }
}