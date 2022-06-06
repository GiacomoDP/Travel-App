const { model, Schema } = require('mongoose')

const restaurantsSchema = new Schema({

    city: { type: String, required: true },
    country: String,
    name: String,
    address: String,
    picture: String,
    description: String,
    price: String,

}, {
    timestamps: true
})

const restaurantModel = model('Restaurant', restaurantsSchema)

module.exports = restaurantModel