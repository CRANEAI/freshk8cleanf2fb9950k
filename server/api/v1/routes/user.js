const User = require('../models/User');
const { db } = require('../../../utils');
const router = require("express").Router();



 /* 
 * 
 * postSignup 
 * network operation postSignup
 * accepts params req,res,next
 * postSignup checks Email is not valid
 * postSignup checks Password must be at least 4 characters long
 * postSignup checks Passwords do not match
 * if errors then
 * redirect /signup
 * findOne User
 * where
 * email is req.body.email
 * it uses vars errors,user
 * it requires email to be passed in 
 */
router.post('/postSignup', (req, res, next) => {
            req.assert("email","Email is not valid").isEmail()
  
          req.assert("password","Password must be at least 4 characters long").len()
  
          req.assert("confirmPassword","Passwords do not match").equals()
  
          req.sanitize("email").normalizeEmail()
  
          if (errors) {
              return res.redirect('/signup')
            }User.findOne({email: req.body.email}){
                  
                  }
        })
module.exports = router;