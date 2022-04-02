const mongoose = require('mongoose')
const passport = require('passport')

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    nickname: { type: String },
    password: { type: String }
})

const User = mongoose.model('User', UserSchema)

module.exports = User