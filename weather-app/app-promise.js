const yargs = require('yargs');
//supports promises API
const axios = require('axios');

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

var encodedAddress = encodeURIComponent(argv.a);
var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

//method to do HTTP GET Request
//returns a promise
axios.get(geocodeUrl).then((response) => {
  if(response.data.status === 'ZERO_RESULTS') {
    throw new Error('Unable to find that address')
  }

  var results = response.data.results[0];
  var lat = results.geometry.location.lat;
  var long  = results.geometry.location.lng;
  var apiKey = 'ae49893c60b3593de44a5230ef0535a2';

  var weatherUrl = `https://api.darksky.net/forecast/${apiKey}/${lat},${long}`;
  console.log(results.formatted_address);
  return axios.get(weatherUrl);
}).then((response) => {
  var results = response.data.currently;
  var temperature = results.temperature;
  var apparentTemperature = results.apparentTemperature;
  console.log(`It's currently ${temperature}. It feels like ${apparentTemperature}`);
}).catch((e) => {
  if(e.code === 'ENOTFOUND') {
    console.log('Unable to connect to API server.');
  } else {
    console.log(e.message);
  }
});
