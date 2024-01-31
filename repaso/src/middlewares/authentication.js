function auth(req, res, next) {
    const auth = req.headers.authorization

    if (auth != undefined) {
        next()
    } else {
        res.status(401).send({ msg: "login is required"})
    }
}

function getRole(req, res, next) {
    const role = req.headers.role

    req.user = {
        role: role
    }
    next()
}

module.exports = {
    auth,
    getRole
}