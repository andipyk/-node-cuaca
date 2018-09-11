const request = require('request');

let apiKey = 'dda52694541cb6b35bd3eb802145b9e6';
let city = 'Jakarta';
let url = 'http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+apiKey;


request(url, function(error, response, body){
    if(error){
        console.log('error : ', error);
        console.log('statusCode:', response);
    }
    else{

        let weather = JSON.parse(body);
        let message = 'Cuaranya '+weather.main.temp+' derajat pada kota '+weather.name+' !';
        console.log(message);
    }
});