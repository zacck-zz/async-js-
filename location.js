//guestimate the users location
var url = 'http://ipinfo.io/';
var request = require('request');
module.exports =  () => {
  return new Promise((resolve, reject) => {
    //lets use request to fetch  a guestimate of the location using ip
    request({url: url, json: true}, (error, response, body ) =>{
      if(error) {
        reject(`${error.message} occured`)
      } else {
        //lets resolve our promise with the data
        resolve(body);
      }
    });
  });
}
