var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=ea07ae9b6e26bb415b57d6970882c9d0&units=metric';

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location); // This's gonna take plaintext string, and it's gonna encode properly for the brouwser.
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`; // when we use the back trick, we can inject variable right inside the string.
    // make a request using Promise
    return axios.get(requestUrl).then(function (res) {
      // error checking
      if (res.data.cod && res.data.message) {
          throw new Error(res.data.message);
      } else {
        // return the temp (success case)
        return res.data.main.temp;
      }
    }, function (res) {
      // error case
      throw new Error(res.data.message);
    });
  }
}
