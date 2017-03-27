var weather = require('./weather.js')
var location = require('./location.js')
//set up arguments we want
var argv =  require('yargs')
  .command('get', 'get the weather', (yargs) => {
    yargs.options ({
      location: {
        alias: 'l',
        description: 'provide your current location e.g Paris, Nairobi',
        type: 'string'
      }
    })
    .help('help') //enable --help
  })
  .help('help')
  .argv;



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
