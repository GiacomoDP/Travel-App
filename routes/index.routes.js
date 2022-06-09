const User = require("../models/User.model");
var bcrypt = require("bcryptjs");
const router = require("express").Router();
const isLogIn = require("../middleware/isLogIn");
const restaurantModel = require("../models/restaurantModel")

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/profile", isLogIn, (req, res, next) => {
const name = req.session.currentUser.username
restaurantModel.find({autor: req.session.currentUser._id})
.then((userRestaurants) => {
  
  res.render("users/profile", {name, userRestaurants});
})
  
});

router.get("/login", (req, res, next) => {
 
  res.render("auth/login");
});

router.post("/login",  (req, res, next) => {
   
 
 
  console.log("REQUEST OBJECt", req.body);
  
  const {username , password} = req.body
 
    User.findOne({ username }).then((data) => {
      console.log(data,"----------ciaone-----------");
      console.log(data.password, "---data.password---")
      
      if (!data) {
         res.status(400).render("/auth/login")
         return 
      }
        //comparing pwd hash
        const pwd_hash_from_db = data.password;
        console.log("WAASDADADAd",pwd_hash_from_db );
        const isPwdMatch = bcrypt.compareSync(password, pwd_hash_from_db)
          if (!isPwdMatch){
            res.status(400).render("/auth/login")
            return
          }
          req.session.currentUser = data 
          res.redirect("/profile")
        });
        /*console.log("-------isPwdMatch-------", isPwdMatch);
        if (isPwdMatch) {
            req.session.currentUser = data;
          res.render("users/profile",{ userInSession: req.session.currentUser });
        } else {
          res.render("auth/login");
        }*/
        //.catch((error) => {
          //console.log(error, "-----error login page-----")
         //})
         
     
    })
   


router.get("/signup", (req, res, next) => {
  res.render("auth/signup");
});

router.post("/signup", async (req, res) => {
  const { username, password } = req.body;

  const salt = await bcrypt.genSalt(10);
  const passwordHash = await bcrypt.hash(password, salt);

  await User.create({ username: username, password: passwordHash });
  // res.send(`Post with ${username} and ${password}`)
  res.redirect("/login");
});

router.post('/logout', (req, res, next) => {
  req.session.destroy(err => {
    if (err) next(err);
    res.redirect('/');
  });
});

module.exports = router;
