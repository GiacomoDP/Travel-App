const router = require("express").Router()
const cityModel = require('../models/citiesModel')



//List the cities
router.get('/', async(req, res, next) => {
    try {
        const city = await cityModel.find()
        console.log('My cities')
        res.render('/citiesList', { city })
    } catch (error) {
        console.log('Error in your city list', error)
    }
})









module.exports = router;