const express = require('express')

//controller functions
const { signUpUser, loginUser } = require('../controllers/userController')

const router = express.Router()

//login route
router.post('/login', loginUser)

//sign-up route
router.post('/signup', signUpUser)

module.exports = router