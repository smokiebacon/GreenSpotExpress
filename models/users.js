const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = mongoose.Schema({
    username: String,
    email: String,
    password: String,
    googleId: String,
    token: String
})

const User = mongoose.model('User', userSchema)

module.exports = User