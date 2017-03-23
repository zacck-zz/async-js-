var request = require('request');
const key = 'b3c17071c6f0bf5ed04f42571244404a';
var baseUrl = `http://api.openweathermap.org/data/2.5/weather?`
module.exports = function(callback) {
  console.log('Got Weather!');
  var authU = `${baseUrl}APPID=${key}`;

  //console.log(authU);

  var city = 'capetown'

  var cityUrl = `${authU}&q=${city}`

  var units = 'metric'

  var unitUrl = `${cityUrl}&units=${units}`

  //console.log(cityUrl);

  return request({url: unitUrl, json: true}, function(error, response, body ) {
    if(error) {
      console.log(error.message, 'occured')
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
