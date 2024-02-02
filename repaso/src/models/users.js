const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email: {
        type: String
    },
    password: {
        type: String
    },
    role: {
        type: String,
        enum: ['admin', 'seller', 'buyer']
    }
})

const User = mongoose.model('users', userSchema)

module.exports = User


