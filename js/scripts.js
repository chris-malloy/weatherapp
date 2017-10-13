$(document).ready(() => {
    $('#weather-form').submit((event) => {
        event.preventDefault();
        var zipCode = $('#zip-code').val();
        var zipCodeString = zipCode.toString();
        var weatherUrl = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&units=imperial&appid=${apiKey}`
        if (zipCodeString.length < 5) {
            console.log('blopp')
        } else {
            $.getJSON(weatherUrl, (weatherData) => {
                var currTemp = weatherData.main.temp;
                var temps = {
                    curr: weatherData.main.temp,
                    max: weatherData.main.temp_max,
                    min: weatherData.main.temp_min,
                };
                var name = weatherData.name;
                var icon = weatherData.weather[0].icon;
                var newHTML = `<div><img src="http://openweathermap.org/img/w/${icon}.png">The temperature in ${name} is currently ${currTemp}&deg.</div>`
                newHTML += `<div>The daily high is ${temps.max}&deg.`
                newHTML += `<div>The daily low is ${temps.min}&deg.`
                $('#temp-info').html(newHTML);
            });
        }
        x
    });
});