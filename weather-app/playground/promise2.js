const request = require('request');

var geocodeAddress = (address) => {
  return new Promise((resolve, reject) => {
    //encode strings so that it will look just like what the URL shows.
    var encodedAddress = encodeURIComponent(address);

    request({
      url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
      json: true //tells request that the return data is in JSON format
    }, (error, response, body) => {
      //pretty print objects
      // console.log(JSON.stringify(body, undefined, 2));
      //Handling Errors
      if(error) {
        reject('Unable to connect to Google servers.');
      } else if (body.status === 'ZERO_RESULTS') {
        //body.status is only for Google geocode API every API is different.
        reject('Unable to find that address.');
      } else if (body.status === 'OK') {
        var result = body.results[0];
        resolve({
          address: result.formatted_address,
          latitude: result.geometry.location.lat,
          longitude: result.geometry.location.lng
        });
      }
    });
  });
};

geocodeAddress('82007').then((location) => {
  console.log(JSON.stringify(location, null, 2));
}, (errorMessage) => {
  console.log(errorMessage);
});
