var apiKey = "20f42e4921da42b173b8342f97d4e8dd";

var convertToCelcius = function(kelvin) {
  return kelvin - 273.15;
}

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    $('.showWeather').text("The city you have chosen is " + city + ".");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response)  {
      $(".showWeather").text("The humidity in " + city + " is " + response.main.humidity +
    "%");
      $(".showWeather2").text("The temperature (in Celcius) in " + city + " is " + convertToCelcius(response.main.temp) + " degrees");
    });
  });
});
