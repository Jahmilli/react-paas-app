var express = require('express')
var airtableMembers = require('../controllers/airtableMembers')
var email = require('../controllers/email')

const router = express.Router()

router.get('/members', (req, res) => {
    res.send("Hello")
    console.log(airtableMembers.listAllMembers())
  })

router.get('/updates', (req, res) => {
    console.log(airtableMembers.checkIsUpdated)
    res.send(airtableMembers.checkIsUpdated())
})

router.get('/search', (req, res) => {
  airtableMembers.searchMember('Jason', 'Ho')
  res.send('found')
})

router.get('/csv', (req, res) => {
  airtableMembers.readCSV()
})

router.post('/contact', (req, res) => {
  var email = req.body.email;
  var first = req.body.firstName;
  var last = req.body.lastName;
  var message = req.body.message;
  email.sendEmail(email, first, last, message)
})

module.exports = router
