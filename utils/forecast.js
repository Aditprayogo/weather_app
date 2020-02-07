const axios = require('axios')

//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)


const forecast = (latitude, longitude, callback) => {

    // https://api.darksky.net/forecast/7067693762e51eb685b7001b0540e361/-6.17833,106.63194?units=si&lang=id

    const url =
        'https://api.darksky.net/forecast/7067693762e51eb685b7001b0540e361/' + latitude + ',' + longitude + '?units=si&lang=id';


    axios.get(url)
        .then((res) => {

            const data = res.data.currently

            callback(undefined, res.data.daily.data[0].summary + ' It currently ' + data.temperature + ' degrees out. There is a ' + data.precipProbability + '% to rain')

        })
        .catch((err) => {

            callback('unable to connect to location', undefined)
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.headers)

        })
}

module.exports = forecast

