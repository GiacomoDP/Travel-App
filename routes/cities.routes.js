const router = require("express").Router()
const restaurantModel = require('../models/restaurantModel')
const uploader = require("../config/cloudinary.config")
const isLogIn = require("../middleware/isLogIn")



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

router.get('/italian/venice', async(req, res, next) => {
    try {
        const veniceRestaurants = await restaurantModel.find({ city: 'Venice' })
        //console.log('this is HH_Restaurant', hambourgRestaurants[0])
        res.render("restaurantsByCity/veniceRestaurants", {veniceRestaurants} )
    } catch (error) {
        console.log('This is an error in the venice Restaurants', error)
    }

})

router.get('/italian/roma', async(req, res, next) => {
    try {
        const romaRestaurants = await restaurantModel.find({ city: 'Roma' })
        //console.log('this is HH_Restaurant', hambourgRestaurants[0])
        res.render("restaurantsByCity/romaRestaurants", {romaRestaurants} )
    } catch (error) {
        console.log('This is an error in the Roma Restaurants', error)
    }

})

router.get('/italian/florence', async(req, res, next) => {
    try {
        const florenceRestaurants = await restaurantModel.find({ city: 'Florence' })
        //console.log('this is HH_Restaurant', hambourgRestaurants[0])
        res.render("restaurantsByCity/florenceRestaurants", {florenceRestaurants} )
    } catch (error) {
        console.log('This is an error in the Florence Restaurants', error)
    }

})

router.get('/italian/turin', async(req, res, next) => {
    try {
        const turinRestaurants = await restaurantModel.find({ city: 'Turin' })
        //console.log('this is HH_Restaurant', hambourgRestaurants[0])
        res.render("restaurantsByCity/turinRestaurants", {turinRestaurants} )
    } catch (error) {
        console.log('This is an error in the Turin Restaurants', error)
    }

})

router.get('/italian/neapel', async(req, res, next) => {
    try {
        const neapelRestaurants = await restaurantModel.find({ city: 'Neapel' })
        //console.log('this is HH_Restaurant', hambourgRestaurants[0])
        res.render("restaurantsByCity/neapelRestaurants", {neapelRestaurants} )
    } catch (error) {
        console.log('This is an error in the Neapel Restaurants', error)
    }

})








//getting german cities
router.get("/german", (req, res, next) => {
    res.render("germanCities.ejs")
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

router.get('/german/dresden', async(req, res, next) => {
    try {
        const dresdenRestaurants = await restaurantModel.find({ city: 'Dresden' })
        //console.log('this is HH_Restaurant', hambourgRestaurants[0])
        res.render("restaurantsByCity/dresdenRestaurants", {dresdenRestaurants} )
    } catch (error) {
        console.log('This is an error in the Dresden Restaurants', error)
    }

})

router.get('/german/munich', async(req, res, next) => {
    try {
        const munichRestaurants = await restaurantModel.find({ city: 'Munich' })
        //console.log('this is HH_Restaurant', hambourgRestaurants[0])
        res.render("restaurantsByCity/munichRestaurants", {munichRestaurants} )
    } catch (error) {
        console.log('This is an error in the Munich Restaurants', error)
    }

})

router.get('/german/luebeck', async(req, res, next) => {
    try {
        const luebeckRestaurants = await restaurantModel.find({ city: 'Luebeck' })
        //console.log('this is HH_Restaurant', hambourgRestaurants[0])
        res.render("restaurantsByCity/luebeckRestaurants", {luebeckRestaurants} )
    } catch (error) {
        console.log('This is an error in the Luebeck Restaurants', error)
    }

})

router.get('/german/freiburg', async(req, res, next) => {
    try {
        const freiburgRestaurants = await restaurantModel.find({ city: 'Freiburg' })
        //console.log('this is HH_Restaurant', hambourgRestaurants[0])
        res.render("restaurantsByCity/freiburgRestaurants", {freiburgRestaurants} )
    } catch (error) {
        console.log('This is an error in the Freiburg Restaurants', error)
    }

})




// Add a new city
router.get('/create-form', async(req, res, next) => {
    res.render('create-form')

})

router.post('/create-form', uploader.single("restaurantsImage"), async(req, res, next) => {
    try {
        const {name, city, country, address, description, price} = req.body
        const autor = req.session.currentUser._id
       // console.log(req.session.currentUser, "Users detected")
       const newRestaurant = await  restaurantModel.create({
           picture: req.file.path,
           name,
           country,
           city,
           description,
           price,
           address,
           autor
})
        res.redirect('/profile')
        console.log('Restaurant was created', newRestaurant)
    } catch (error) {
        console.log('Error occured while creating restaurant', error)
    }
})

// Delete Restaurnts

router.post("/profile/:id/delete", isLogIn, async(req, res, next) => {
    try{
        const {id} = req.params
        await restaurantModel.findByIdAndDelete(id)
        res.redirect("/profile")
    } catch(error){
 next(error)
    }
})
 // Update Restaurants

 router.get("/profile/:id/update", async(req, res, next) => {
    try{
        const {id} = req.params
        const updatedRestaurant = await restaurantModel.findById(id)
        res.render("restaurant-update", {updatedRestaurant})

    }catch(error){
next(error)
    }
})


router.post('/profile/:id/update', uploader.single("restaurantsImage"), async(req, res, next) => {
    try {
        const {name, city, description, price} = req.body
        const {id} = req.params
        const changedRestaurant = await restaurantModel.findByIdAndUpdate(id, {
            name, 
            picture: req.file.path, 
            city, 
            description, 
            price
        })
        console.log(changedRestaurant, "new restaurants!!")
        //res.redirect(`/profile/${changedRestaurant._id}/update`)
        res.redirect("/profile")
    } catch (error) {
        console.log('Error occured while updating the restaurant', error)
    }
})



module.exports = router;