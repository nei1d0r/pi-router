const express = require('express')
const routes = express.Router()
const bodyParser = require('body-parser')

routes.use(bodyParser.json())
routes.use('/users', require('./users'))
routes.use('/myfood', require('./myfood'))
routes.use('/recipes', require('./recipes'))

module.exports = routes