const yargs = require('yargs');

const geocode = require('./geocode/geocode.js');
const weather = require('./weather/weather.js');

//configure top level options
const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to get weather for',
      string: true //tells yargs to always parse the argument.
    }
  })
  .help()
  .alias('help','h')
  .argv;

geocode.geocodeAddress(argv.a, (errorMessage, results) => {
  if(errorMessage) {
    console.log(errorMessage);
  } else {
    console.log(`Address: ${results.address}`);
    weather.getWeather(results.latitude, results.longitude, (errorMessage, weatherResults) => {
      if(errorMessage) {
        console.log(errorMessage);
      } else {
        console.log(`It's currently ${weatherResults.temperature}. It feels like ${weatherResults.apparentTemperature}.`);
      }
    });
  }
});
