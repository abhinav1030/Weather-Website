const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/4275f8f0bc416de54b2ba9c2abf54ddf/' + latitude + ',' + longitude + '?units=si'
    
    request({url, json: true}, (error, {body}) => {
        if(error) {
            callback('Unable to connect to weather service.', undefined)
        } else if (body.error) {
            callback('Unable to find location.', undefined)
        } else {
            callback(undefined,`${body.daily.data[0].summary} It is currently ${body.currently.temperature} degrees outside. There is ${body.currently.precipProbability}% chance of rain.`)
        }
    })
    

}

module.exports = forecast