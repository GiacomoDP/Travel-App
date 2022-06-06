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

// Add a new city
router.get('/create', async(req, res, next) => {
    res.render('/create-form')

})







module.exports = router;