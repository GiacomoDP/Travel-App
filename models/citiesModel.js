const { model, Schema } = require('mongoose')
    // const celebrityModel = require('./Celebrity.model')

const citiesSchema = new Schema({

    cityName: String,

}, {
    timestamps: true
})

const cityModel = model('City', citiesSchema)

module.exports = cityModel