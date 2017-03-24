var weather = require('./weather.js')
var location = require('./location.js')

weather(function(currentWeather) {
  console.log(currentWeather);
});

location(function(location) {
  if(!location) {
    //take care of issue
    console.log('unable for find location');
    return;
  }
  console.log(`city: ${location.city}, long/lat: ${location.loc}`)
})
