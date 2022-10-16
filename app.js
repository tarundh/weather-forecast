const express = require("express");
const app = express();
const https = require("https");

app.get("/", function(req, res){

    const url = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=21dd93ec0cdcd8c9cdc0f2aad0ebf425&units=metric"
    https.get(url, function(response){
        console.log(response.statusCode);

        response.on("data", function(data){
            const weatherData = JSON.parse(data)
            const temp = weatherData.main.temp
            const weather = weatherData.weather[0].description

            const icon = weatherData.weather[0].icon
            const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png"

            res.write("<p>The weather is currently " + weather + " </p>")
            res.write("<h1>The temperature in london is " + temp + " degree celsius</h1>")
            res.write("<img src=" + imageURL + ">");

            
            res.send();
        })

    })

});

app.listen(3000, function(){
    console.log("server is running on port 3000")
});