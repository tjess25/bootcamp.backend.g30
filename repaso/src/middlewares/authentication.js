const jwt = require('jsonwebtoken')
const JWT_SIGN = process.env.JWT_SIGN
const User = require('../models/users')

function createJWT(data) {
    return jwt.sign(data, JWT_SIGN, { expiresIn: '1h' })
}

function verifyJWT(req, res, next) {

    let token = req.headers.authorization
    const dateNow = new Date()

    if (!token) {
        res.status(401).send({ msg: "login is required" })
    }

    token = token.split(" ")[1]
    jwt.verify(token, JWT_SIGN, async (err, decode) => {
        if (err) {
            res.status(401).send({ msg: "token invalid" })
        }
        if (decode.exp < dateNow.getDate() / 1000) {
            res.status(401).send({ msg: "session expired" })
        } else {
            req.user = await User.findById(decode._id)
            next()
        }
        
    })
}

module.exports = {
    createJWT,
    verifyJWT
}