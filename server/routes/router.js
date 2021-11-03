const express = require('express');
const route = express.Router()
const controller = require('../controller/controller')

const services = require('../services/render')

route.get('/',services.homeRoutes)
route.get('/dashboard', services.authMiddleware, services.dashboard)
// API
route.post('/api/users',controller.signUp)
route.post('/api/users/login',controller.login)
 

module.exports = route