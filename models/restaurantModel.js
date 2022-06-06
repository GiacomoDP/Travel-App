const { model, Schema } = require('mongoose')

const restaurantsSchema = new Schema({

    restaurantName: String,
    restaurantAdress: String,
    restaurantPicture: String,
    restaurantDescription: String,
    restaurantPrice: String,

}, {
    timestamps: true
})

const restaurantModel = model('Restaurant', restaurantsSchema)

module.exports = restaurantModel