const request = require('request');



var getWeather = (lat, long, callback) => {
  //in order to use the weather API from forecast.io
  var apiKey = 'ae49893c60b3593de44a5230ef0535a2';

  request({
    url: `https://api.darksky.net/forecast/${apiKey}/${lat},${long}`,
    json: true
  }, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      callback(null, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    } else if (response !== undefined) {
      callback(body.error);
    } else if(error) {
      callback('Unable to connect to forecast.io server.');
    }
  });

};

module.exports.getWeather = getWeather;
