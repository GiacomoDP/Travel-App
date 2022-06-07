const router = require("express").Router()
const restaurantModel = require('../models/restaurantModel')



//List the cities
router.get('/', async(req, res, next) => {
    try {
        const city = await restaurantModel.find()
        console.log('My cities and restaurants')
        res.render('restaurantsList', { city })
    } catch (error) {
        console.log('Error in your city list', error)
    }
})


//getting italian cities
router.get("/italian", (req, res, next) => {
    res.render("italianCities.ejs")
})

router.get('/german/hambourg', async(req, res, next) => {
    try {
        const hambourgRestaurants = await restaurantModel.find({ city: 'Hambourg' })
        //console.log('this is HH_Restaurant', hambourgRestaurants[0])
        res.render("restaurantsByCity/hambourgRestaurants", {hambourgRestaurants} )
    } catch (error) {
        console.log('This is an error in the Hambourg Restaurants', error)
    }

})





//getting german cities
router.get("/german", (req, res, next) => {
    res.render("germanCities.ejs")
})


// Add a new city
router.get('/create', async(req, res, next) => {
    res.render('/create-form')

})







module.exports = router;