var weather = require('./weather.js')
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
var command= argv._[0];

if(command === 'get') {
  weather(argv.location)
}
