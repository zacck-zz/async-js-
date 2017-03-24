//guestimate the users location
var url = 'http://ipinfo.io/';
var request = require('request');
module.exports =  function(cb) {
  return request({url: url, json: true}, function(error, response, body ) {
    if(error) {
      console.log(error.message, 'occured')
    } else {
      //console.log(JSON.stringify(body, null, 4))
      cb(body);
    }
  });

}
