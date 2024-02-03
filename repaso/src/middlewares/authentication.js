const jwt = require('jsonwebtoken')
const JWT_SIGN = process.env.JWT_SIGN

function createJWT(data) {
    return jwt.sign(data, JWT_SIGN, {expiresIn: '1h'})
}

function verifyJWT(req, res, next) {

    try {
        const token = req.headers['bearerauth']
        const dateNow = new Date()

        if (!token) {
            res.status(401).send({msg: "login is required"})
        }

        jwt.verify(token, JWT_SIGN, (err, decode) => {
            if (err) {
                res.status(401).send({msg: "token invalid"})
            }
            if (decode.exp < dateNow.getDate() / 1000) {
                res.status(401).send({msg: "session expired"})
            }
            req.user = decode
            next()
        })
    } catch (error) {
        res.status(400).send({msg: "token invalid", error: error})
    }   
}

module.exports = {
    createJWT,
    verifyJWT
}