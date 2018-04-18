var express = require('express')
var airtableMembers = require('../controllers/airtableMembers')
const request = require('request-promise'); //Can look at other alternatives later on...


const router = express.Router()

router.get('/members', (req, res) => {
  airtableMembers.listAllMembers().then(function(myResolve) {
    console.log(myResolve)
    res.send(myResolve)
  }).catch(function(err) {
    console.log(err)
  })
})

router.get('/updates', (req, res) => {
    res.send(airtableMembers.checkIsUpdated())
})

router.post('/search', (req, res) => {
  airtableMembers.searchMember(req.body.firstName, req.body.lastName).then(function(resolve) {
    console.log(JSON.stringify(req.body))
    console.log(resolve)
    res.send(resolve)
  }).catch(function(err) {
    console.log(err)
    res.send(err)
  })
})

router.get('/csv', (req, res) => {
  airtableMembers.readCSV().then(function(myResolve) {
    console.log(myResolve)
    res.send(myResolve)
  }).catch(function(err) {
    console.log(err)
    res.send(err)
  })
})

router.get('/facebook-search/:id?', (req, res) => {
  // you need permission for most of these fields
  const userFieldSet = 'id, name, about, email, accounts, link, is_verified, significant_other, relationship_status, website, picture, photos, feed';
  let id = '1264001986977158'
  console.log(process.env.FB_SECRET)
  const options = {
    method: 'GET',
    uri: `https://graph.facebook.com/v2.8/${id}`,
    qs: {
      access_token: '992873797538356|3NsnpKwCxC9kQDLkkMGY40u3Obs',
      fields: userFieldSet
    }
  };
  request(options)
    .then(fbRes => {
      res.json(fbRes);
    })
})

module.exports = router
