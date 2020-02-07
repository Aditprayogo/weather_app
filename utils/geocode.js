
const axios = require('axios')

const geocode = (address, callback) => {

    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiYWRpdHByYXlvZ28iLCJhIjoiY2s2YmMzbGNzMHpwNDNtb2R1bnQ3dTZvcyJ9.UQGhmj_qtpn8cnn0QE7Zrg&limit=1';

    axios.get(url)
        .then((res) => {
            // data not found
            if (res.data.features.length === 0) {
                callback('unable to find the location, try another search', undefined)
            } else {
                callback(
                    //error gk ada
                    undefined,
                    //data
                    {
                        latitude: res.data.features[0].center[1],
                        longitude: res.data.features[0].center[0],
                        location: res.data.features[0].place_name
                    }
                )
            }
        })
        .catch((err) => {
            callback('unable to connect to location', undefined)
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.headers)
        })

}

module.exports = {
    geocode: geocode
};