(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.gMapsKey = "AIzaSyD_fKxH_0hDUX4D4Lxlm6QZYYhHPUGwMxM";
exports.weatherKey = "8da60a479bcae513b3cbef9aaf80a876";

},{}],2:[function(require,module,exports){
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

},{"./../.env":1,"./../js/weather.js":3}],3:[function(require,module,exports){
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

},{"./../.env":1}]},{},[2]);
