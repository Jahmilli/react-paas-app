var express = require('express')
var airtableMembers = require('../controllers/airtableMembers')

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
  res.send('found');
})

router.get('/csv', (req, res) => {
  airtableMembers.readCSV()
})

module.exports = router
