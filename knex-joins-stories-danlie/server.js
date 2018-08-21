const express = require('express')
const bodyParser = require('body-parser')
const hbs = require('express-handlebars')
var flash = require('express-flash-messages')
const routes = require('./routes')

const server = express()

// Middleware
server.engine('hbs', hbs({
  extname: 'hbs',
  defaultLayout: 'main'
}))
server.set('view engine', 'hbs')
server.use(express.static('public'))
server.use(bodyParser.urlencoded({extended: true}))
server.use(flash());

// Routes
server.use('/', routes)

module.exports = server

