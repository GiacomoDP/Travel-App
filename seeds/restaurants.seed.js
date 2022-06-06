//
const restaurants = [{
        city: 'Hamburg',
        country: 'Germany',
        name: 'ourFavo',
        address: 'knowing',
        picture: 'nice',
        description: 'later',
        price: 'cheap',

    },
    {
        city: 'Venice',
        country: 'Italy',
        name: 'ourFavo',
        address: 'knowing',
        picture: 'nice',
        description: 'later',
        price: 'cheap',

    },
    {
        city: 'Dresden',
        country: 'Germany',
        name: 'ourFavo',
        address: 'knowing',
        picture: 'nice',
        description: 'later',
        price: 'cheap',

    },
    {
        city: 'Roma',
        country: 'Italy',
        name: 'ourFavo',
        address: 'knowing',
        picture: 'nice',
        description: 'later',
        price: 'cheap',

    },

]


const mongoose = require("mongoose")

require('../db')

const restaurantsModel = require('../models/restaurantModel')

restaurantsModel.insertMany(restaurants)
    .then((allRestaurantsDB) => {
        console.log('All restaurants are seeded(added) in your DB', allRestaurantsDB)
            // return mongoose.connection.close()
    })
    // .then(() => {
    //     console.log('Your DB was closed')
    // })
    .catch((error) => {
        console.log('There is a problem with your seeding', error)

    })
    .finally(() => {
        console.log('Everything is okay and was closed')
        mongoose.connection.close()
    })