const User = require('../models/userModel')

//log in user
const loginUser = async (req, res) => {
    res.json({mssg: 'log in user'})
}

//sign up user
const signUpUser = async (req, res) => {
    res.json({mssg: 'sign up user'})
}

module.exports = {signUpUser, loginUser}