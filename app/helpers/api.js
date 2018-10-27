var axios = require('axios');

var _baseUrl = 'http://api.openweathermap.org/data/2.5/';
var _apiKey = '&APPID=2e193fa8f7008682017fd9501e2c9d98';

function getCityWeather(city) {
  return axios.get(_baseUrl + 'weather?q=' + city + _apiKey)
    .then(function(info) {
      return info.data
    }).catch(function(err) {
      console.warn('Error in getCityWeather: ', err)
    })
};

function getCityForecast(city) {
  return axios.get(_baseUrl + 'forecast/daily?q=' + city + _apiKey + '&cnt=5')
  .then(function(info) {
      return info.data
    }).catch(function(err) {
      console.warn('Error in getCityForecast: ', err)
    })
};

module.exports = {
  getCityWeather: getCityWeather,
  getCityForecast: getCityForecast
};