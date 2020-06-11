const express = require('express')
const request = require('request')
const app = express()
const port = 5000

// app.get('/', (req, res) => res.send('Hello World! DUDE'))
// app.get('/newEndpoint', (req, res) => res.send('Awesome App!'))

app.get('/getWeatherIF', (req, res) => {
    request ('http://api.openweathermap.org/data/2.5/weather?q=Ivano-Frankivsk&metric=true&APPID=586674f3866974c6cdd5801216c19af7', 
    function(error, response, body){
        if (!error && response.statusCode ==200){
            var parsedBody = JSON.parse(body);
            // console.log(parsedBody['weather'][0].main);
            var temp_v = parsedBody['weather'][0].main;
            res.send({ temp_v });
        }
    }
    );
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
