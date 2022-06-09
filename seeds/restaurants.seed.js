//
const restaurants = [{
        city: 'Hambourg',
        country: 'Germany',
        name: 'ourFavo',
        address: 'knowing',
        picture: 'nice',
        description: 'later',
        price: 'cheap',
        autor: "629e4113c32349617d0d3a0f"

    },
    {
        city: 'Hambourg',
        country: 'Germany',
        name: 'Second favorite',
        address: 'Viaxx',
        picture: 'really nice',
        description: 'later',
        price: 'cheap',
        autor: "629e4113c32349617d0d3a0f"


    },
    {
        city: 'Venice',
        country: 'Italy',
        name: 'Al Squero',
        address:  'Boh',
        picture: 'Yes',
        description: 'later',
        price: 'cheap',
        autor: "629e4113c32349617d0d3a0f"


    },
    {
        city: 'Dresden',
        country: 'Germany',
        name: 'Nextone',
        address: 'knowing',
        picture: 'nice',
        description: 'later',
        price: 'cheap',
        autor: "629e4113c32349617d0d3a0f"

    },
    {
        city: 'Roma',
        country: 'Italy',
        name: 'Nieffe',
        address: 'knowing',
        picture: 'nice',
        description: 'later',
        price: 'cheap',
        autor: "629e4113c32349617d0d3a0f"

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