const User = require('../models/users')

module.exports = {
    getAll: async(req, res) => {
        try {
            const users = await User.find()
            res.send({ msg: "All users", data: users })
        } catch (error) {
            res.status(400).send({ msg: "can't get users", error: error }) 
        }
    },
    getById: async(req, res) => {
        const { id } = req.params
    try {
        const user = await User.findById(id)
        res.send({ msg: "user", data: user })
    } catch (error) {
        res.status(400).send({ msg: "can't get user", error: error })
    }
    },
    post: async(req, res) => {
        try {
            const newUser = req.body
            let user = await User.create(newUser)
            await user.save()
            res.status(201).send({ msg: "user created", data: user})
        } catch (error) {
            if (error.code) {
                switch (error.code) {
                    case 11000:
                        res.status(400).send({ msg: "user not created", error: "Email ya registrado"})
                        break;
                
                    default:
                        res.status(400).send({ msg: "user not created", error: error})
                        break;
                }
                
            }
        }
    },
    put: async(req, res) => {
        res.send({ msg: "user updated", data: {} })
    },
    delete: async(req, res) => {
        if (req.user.role != "admin") {
            res.status(401).send( {msg: "You do not have the privileges to perform this action"} ) 
        } else {
            res.send({ msg: "user deleted", data: {} })
        } 
    }
}