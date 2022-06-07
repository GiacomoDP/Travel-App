const User = require("../models/User.model");
var bcrypt = require("bcryptjs");
const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
    res.render("index");
});

router.get("/profile", (req, res, next) => {
    res.render("users/profile");
});

router.get("/login", (req, res, next) => {

    res.render("auth/login");
});

router.post("/authenticate", (req, res, next) => {
    console.log('SESSION =====> ', req.session);

    console.log("REQUEST OBJECT", req.body);
    const u_name = req.body.username;
    const pwd = req.body.password;
    User.find({ username: u_name }).then(function(data) {
        console.log(data);

        if (data.length != 0) {
            //comparing pwd hash
            const pwd_hash_from_db = data[0].password;
            console.log("WAASDADADAd", pwd_hash_from_db);
            const isPwdMatch = bcrypt.compareSync(pwd, pwd_hash_from_db);
            console.log("-------isPwdMatch-------", isPwdMatch);
            if (isPwdMatch) {
                req.session.currentUser = u_name;
                res.render("users/profile", { userInSession: req.session.currentUser });
            } else {
                res.render("auth/login");
            }
        } else {
            res.render("auth/login");
        }
    })

});

router.get("/signup", (req, res, next) => {
    res.render("auth/signup")
})

router.post("/signup", async(req, res, next) => {
    const { username, password } = req.body

    const salt = await bcrypt.genSalt(10)
    const passwordHash = await bcrypt.hash(password, salt)

    // router.post("/signup", async(req, res) => {
    //     const { username, password } = req.body;

    //     const salt = await bcrypt.genSalt(10);
    //     const passwordHash = await bcrypt.hash(password, salt);

    await User.create({ username: username, password: passwordHash });
    // res.send(`Post with ${username} and ${password}`)
    res.redirect("/login");
})



// })
module.exports = router;