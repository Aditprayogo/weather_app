const request = require('request')
const axios = require('axios')

const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

// axios.get(url)
//     .then((res) => {
//         const data = res.data.currently

//         console.log(res.data.daily.data[0].summary + ' It currently ' + data.temperature + ' degrees out. There is a ' + data.precipProbability + '% to rain')
//     })
//     .catch((err) => {

//         console.log(err.response.data)
//         console.log(err.response.status)
//         console.log(err.response.headers)

//     })



//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

forecast(-6.17833, 106.63194, (err, data) => {
    console.log('Error', err)
    console.log('Data', data)
})




geocode.geocode('tangerang', (err, data) => {
    console.log('Error', err)
    console.log('Data', data)
})