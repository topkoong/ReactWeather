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
        var temp = res.data.main.temp;
        var pressure = res.data.main.pressure;
        var weather = [temp, pressure];
        var humidity = res.data.main.humidity;
        var wind_speed = res.data.wind.speed
        var geo_corrds_lon = res.data.coord.lon;
        var geo_corrds_lat = res.data.coord.lat;
        var weather = [temp, pressure, humidity, wind_speed, geo_corrds_lon, geo_corrds_lat];
        // return res.data.main.temp;
        return weather;
      }
    }, function (res) {
      // error case
      throw new Error(res.data.message);
    });
  }
}
