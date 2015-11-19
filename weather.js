$(function() {
  var handleWeatherResponse = function(data) {
    console.log(data);
    console.log(JSON.stringify(data));
    
    // Put your code here. Don't change any other code in this file. You will be sad.
    var markup = "The current temperature is " + data.currently.apparentTemperature  + " F " +  "</br> " + 
        " Forecast for next few days: " + data.daily.summary + "</br>" + 
      	" Tommorow will be a high of  " + data.daily.data[0].temperatureMax + " F " + " and a low of " + data.daily.data[0].temperatureMin + " F " +  "</br> " + 
				 " The day after will be a high  " + data.daily.data[1].temperatureMax + " F " + " and a low of " + data.daily.data[1].temperatureMin + " F " +  "</br> " +
				 " Day 3's high is forecasted at  " + data.daily.data[2].temperatureMax + " F " + " with a low of " + data.daily.data[2].temperatureMin + " F " +  "</br> " ;
    // End of your code

    $('.weather-report').html(markup);
  }
  $('a.get-the-weather').on('click', function(event) {
    event.preventDefault();
    $.ajax({
      type: 'GET',
      url: 'https://api.forecast.io/forecast/6dbe98374cc5b8f9ea63d5ec73de9c04/42.056459,-87.675267?callback=?',
      dataType: 'jsonp',
      contentType: "application/json",
      success: handleWeatherResponse
    });
  });
});