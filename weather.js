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

  const getDir = (angle) => {
    //easy to customize by changing the number of directions you have
        var directions = 8;

        var degree = 360 / directions;
        angle = angle + degree/2;

        if (angle >= 0 * degree && angle < 1 * degree)
            return "N";
        if (angle >= 1 * degree && angle < 2 * degree)
            return "NE";
        if (angle >= 2 * degree && angle < 3 * degree)
            return "E";
        if (angle >= 3 * degree && angle < 4 * degree)
            return "SE";
        if (angle >= 4 * degree && angle < 5 * degree)
            return "S";
        if (angle >= 5 * degree && angle < 6 * degree)
            return "SW";
        if (angle >= 6 * degree && angle < 7 * degree)
            return "W";
        if (angle >= 7 * degree && angle < 8 * degree)
            return "NW";
        //Should never happen:
        return "N";
  }

  //console.log(cityUrl);

  const weatherGetter =  () => {
    return new Promise(function(resolve, reject) {
       request({url: cityUrl, json: true}, function(error, response, body ) {
       if(error) {
         reject(`error.message, occured`)
       } else {
         const name  = body.name;
         const weather = body.weather[0].description;
         const high = body.main.temp_max;
         const low = body.main.temp_min;
         //console.log(JSON.stringify(body, null, 4))
         const windKms = body.wind.speed * 3.6;
         const dir = getDir(body.wind.deg);
         if(windKms < 34) {
           console.log(` Winds are ok for Surfing`);
         }
         resolve(`\n ${name} weather today is ${weather}  \n Highs of ${high} celcius and lows of ${low} celcius  \n Wind \n speed -> ${windKms} km/h, Direction: -> ${dir} \n`)
       }
     });
    });

  }

  if(location.length > 0) {
    console.log(`Checking Weather for ${location} >>>`);
    city = location
    cityUrl = `${unitUrl}&q=${city}`;
    weatherGetter().then((data) => {
      console.log(data);
    });
  } else {
    console.log('Finding Location >>')
    //lets call location
    loc().then((data) => {
      console.log(`Checking Weather for ${data.city} >>>`);
      city = data.city;
      cityUrl = `${unitUrl}&q=${city}`;
      weatherGetter().then((data) => {
        console.log(data);
      },(err) => {
        console.log(err);
      })
    }, (locationErr) => {
      //incase our promise rejects
      console.log(`Error ${locationErr} occured`)
    })
  }
}
