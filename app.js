const express = require("express");
const app = express();
const https = require("https");

app.get("/", function(req, res){

    const url = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=21dd93ec0cdcd8c9cdc0f2aad0ebf425&units=metric"
    https.get(url, function(response){
        console.log(response.statusCode);

        response.on("data", function(data){
            const weatherData = JSON.parse(data)
            const temp = weatherData.weather[0].description
            console.log(temp);
        })

    })

    res.send("server is up and running")
});

app.listen(3000, function(){
    console.log("server is running on port 3000")
});