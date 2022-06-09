const { model, Schema } = require('mongoose')

const restaurantsSchema = new Schema({

    address: String,
    country: {
    type: String,
    enum: ["Germany", "Italy"]
},
    name: String,
    city: {
       type: String,
       enum: ["Dresden", "Florence", "Freiburg", "Hambourg", "Luebeck", "Munich", "Neapel", "Roma", "Turin", "Venice"] 
    },
    picture: String,
    description: String,
    price: String,
    autor: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
}, {
    timestamps: true
})

const restaurantModel = model('Restaurant', restaurantsSchema)

module.exports = restaurantModel