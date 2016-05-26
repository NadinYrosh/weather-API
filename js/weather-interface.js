var gMapsKey = require('./../.env').gMapsKey;
var Weather = require('./../js/weather.js').Weather;

var displayHumidity = function(city, humidityData) {
  $('.showWeather').text("The humidity in " + city + " is " + humidityData + "%");
}

$(document).ready(function() {
  var currentWeatherObject = new Weather();
  $('#weatherLocation').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    // $('.showWeather').text("The city you have chosen is " + city + ".");
    currentWeatherObject.getWeather(city, displayHumidity);
  });
});
