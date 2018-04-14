require('dotenv').config()
var express = require('express')
var bodyParser = require('body-parser')
var routes = require('./routes/index.route')
var app = express()

app.use(bodyParser.json())
app.use(routes)

app.listen(3001, function() {
    console.log('Server started on port 3001');
})
