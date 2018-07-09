const router = require("express").Router();
const passport = require("passport");

// auth login
router.get('/login', (req, res) => {
   res.render("login");
})

// auth logout
router.get('/logout', (req, res) => {
   // handle with passport
   res.send("logging out");
})

// auth with google
router.get('/google', passport.authenticate('google', { scope:['https://www.googleapis.com/auth/plus.login'] }));

// callback from google consent
router.get('/google/redirect',
   (req, res) => {
      res.render('success');
   }
);

module.exports = router;