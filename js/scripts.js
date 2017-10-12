$(document).ready(() => {
    $('#weather-form').submit((event) => {
        event.preventDefault();
        var zipCode = $('#zip-code').val();
        console.log(zipCode)
        var weatherUrl = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&units=imperial&appid=${apiKey}`
        console.log(weatherUrl)
    });
});