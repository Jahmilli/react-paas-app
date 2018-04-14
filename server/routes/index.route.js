var express = require('express')
var adminRoutes = require('./adminRoutes')

const router = express.Router()

router.use('/admin', adminRoutes)

module.exports = router
