var weather = require('./weather.js')
var location = require('./location.js')

weather(function(currentWeather) {
  console.log(currentWeather);
});

location(function(location) {
  console.log(`city: ${location.city}, long/lat: ${location.loc}`)
})
