const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Ingresa un correo valido: ejemplo juan.perez@gmail.com']
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['admin', 'seller', 'buyer']
    }
}, 
{
   timestamps: true,
   statics: {
    encryptPassword: async (password) => {
        const salt = await bcrypt.genSalt(15);
        return await bcrypt.hash(password, salt)
    },
    isValidPassword: async (password, hash) => {
        return await bcrypt.compare(password, hash)
    }
   }
})

const User = mongoose.model('users', userSchema)

module.exports = User


