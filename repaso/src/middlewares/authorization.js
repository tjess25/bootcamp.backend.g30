function isAdmin(req, res, next) {
    if (req.user.role == "admin") {
      next()  
    } else {
        res.status(401).send({msg: "insufficient privileges"})
    }
}

function isSeller(req, res, next) {
    if (req.user.role == "seller") {
      next()  
    } else {
        res.status(401).send({msg: "insufficient privileges"})
    }
}

module.exports = {
    isAdmin,
    isSeller
}