const request = require('request')
const axios = require('axios')


const url =
    'https://api.darksky.net/forecast/7067693762e51eb685b7001b0540e361/-6.17833,106.63194?units=si&lang=id';

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

// geocoding service

// const urlMap =
//     'https://api.mapbox.com/geocoding/v5/mapbox.places/Tangerang.json?access_token=pk.eyJ1IjoiYWRpdHByYXlvZ28iLCJhIjoiY2s2YmMzbGNzMHpwNDNtb2R1bnQ3dTZvcyJ9.UQGhmj_qtpn8cnn0QE7Zrg&limit=1';

// axios.get(urlMap)
//     .then((res) => {

//         const latitude = res.data.features[0].center[1]
//         const longitude = res.data.features[0].center[0]

//         console.log(latitude + ',' + longitude)

//     })
//     .catch((err) => {
//         console.log(err.response.data);
//         console.log(err.response.status);
//         console.log(err.response.headers);
//     })


const geocode = (address, callback) => {

    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiYWRpdHByYXlvZ28iLCJhIjoiY2s2YmMzbGNzMHpwNDNtb2R1bnQ3dTZvcyJ9.UQGhmj_qtpn8cnn0QE7Zrg&limit=1';

    axios.get(url)
        .then((res) => {
            if (res.data.features.length === 0) {
                callback('unable to find the location, try another search', undefined)
            }
        })
        .catch((err) => {
            callback('unable to connect to location', undefined)
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.headers)
        })

}

geocode('jakarta', (err, data) => {
    console.log('Error', err)
    console.log('Data', data)
})