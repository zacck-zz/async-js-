var request = require('request');
const key = 'b3c17071c6f0bf5ed04f42571244404a';
var loc = require('./location.js');
var baseUrl = `http://api.openweathermap.org/data/2.5/weather?`
module.exports = (location = '') => {
  var authU = `${baseUrl}APPID=${key}`;
  var units = 'metric'
  var unitUrl = `${authU}&units=${units}`
  var city;
  var cityUrl;

  //console.log(cityUrl);

  const weatherGetter =  () => {
    return new Promise(function(resolve, reject) {
       request({url: cityUrl, json: true}, function(error, response, body ) {
       if(error) {
         reject(`error.message, occured`)
       } else {
         const name  = body.name;
         const weather = body.weather[0].main;
         const high = body.main.temp_max;
         const low = body.main.temp_min;
         //console.log(JSON.stringify(body, null, 4))
         resolve(`${name} weather today is ${weather} with highs of ${high} celcius and lows of ${low} celcius`)
       }
     });
    });

  }

  if(location.length > 0) {
    console.log(`Checking Weather for ${location} >>>`);
    city = location
    cityUrl = `${unitUrl}&q=${city}`;
    weatherGetter();
  } else {
    console.log('Finding Location >>')
    //lets call location
    loc().then((data) => {
      console.log(`Checking Weather for ${data.city} >>>`);
      city = data.city;
      cityUrl = `${unitUrl}&q=${city}`;
      weatherGetter().then((data) => {
        console.log(data);
      })
    }, (locationErr) => {
      //incase our promise rejects
      console.log(`Error ${locationErr} occured`)
    })
  }
}
