var request = require('request');
const key = 'b3c17071c6f0bf5ed04f42571244404a';
var loc = require('./location.js');
var baseUrl = `http://api.openweathermap.org/data/2.5/weather?`
module.exports = function(location = '', callback) {
  var authU = `${baseUrl}APPID=${key}`;
  var units = 'metric'
  var unitUrl = `${authU}&units=${units}`
  var city;
  var cityUrl;

  //console.log(cityUrl);

  const weatherGetter =  () => {
    return request({url: cityUrl, json: true}, function(error, response, body ) {
      if(error) {
        console.log(error.message, ' occured')
      } else {
        const name  = body.name;
        const weather = body.weather[0].main;
        const high = body.main.temp_max;
        const low = body.main.temp_min;
        //console.log(JSON.stringify(body, null, 4))
        callback(`${name} weather today is ${weather} with highs of ${high} celcius and lows of ${low} celcius`)
      }
    });
  }

  if(location.length > 0) {
    console.log(`Checking Weather for ${location} >>>`);
    city = location
    cityUrl = `${unitUrl}&q=${city}`;
    weatherGetter();
  } else {
    console.log('Finding Location >>')
    loc((location) => {
      console.log(`Checking Weather for ${location.city} >>>`)
      city = location.city;
      cityUrl = `${unitUrl}&q=${city}`;
      weatherGetter();
    })
  }
}
