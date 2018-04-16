var express = require('express')
var adminRoutes = require('./adminRoutes')
var emailController = require('../controllers/email')

const router = express.Router()

router.use('/admin', adminRoutes)

router.post('/contact', (req, res) => {
  console.log('called with params: ' + JSON.stringify(req.body))
  var email = req.body.email;
  var first = req.body.firstName;
  var last = req.body.lastName;
  var message = req.body.message;
  emailController.sendEmail(email, first, last, message)
})

module.exports = router
