var weatherKey = require('./../.env').weatherKey;

exports.Weather = function() {

}

var convertToCelcius = function(kelvin) {
  return kelvin - 273.15;
}

exports.Weather.prototype.getWeather = function(city, displayFunction) {
  debugger;
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + weatherKey).then(function(response)  {
    console.log(response);
    displayFunction(city, response.main.humidity);
  }).fail(function(error) {
    $('.showWeather').text(error.responseJSON.message);
  });
}


//   $(".showWeather").text("The humidity in " + city + " is " + response.main.humidity +
// "%");
  // $(".showWeather2").text("The temperature (in Celcius) in " + city + " is " + convertToCelcius(response.main.temp) + " degrees");
