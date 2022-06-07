const User = require('../models/User.model')
var bcrypt = require('bcryptjs')
const router = require("express").Router()


/* GET home page */
router.get("/", (req, res, next) => {
    res.render("index")
})

router.get("/profile", (req, res, next) => {
    res.render("users/profile")
})

router.get("/login", (req, res, next) => {
    res.render("auth/login")
})

router.get("/signup", (req, res, next) => {
    res.render("auth/signup")
})

router.post("/signup", async(req, res, next) => {
    const { username, password } = req.body

    const salt = await bcrypt.genSalt(10)
    const passwordHash = await bcrypt.hash(password, salt)

    await User.create({ username: username, password: passwordHash })
        // res.send(`Post with ${username} and ${password}`)
    res.redirect('/profile')
})



module.exports = router