const express = require('express')
const router = express.Router()
//const readFile = require('../utils/readFile')
const { auth } = require('../middlewares/authentication')
const User = require('../models/users')

router.get('/', async (req, res) => {
    try {
        const users = await User.find()
        res.send({ msg: "All users", data: users })
    } catch (error) {
        res.status(400).send({ msg: "can't get users", error: error }) 
    }  
})

router.get('/:id', async (req, res) => {
    const { id } = req.params
    try {
        const user = await User.findById(id)
        res.send({ msg: "user", data: user })
    } catch (error) {
        res.status(400).send({ msg: "can't get user", error: error })
    }
})

router.post('/', async (req, res) => {
    res.send({ msg: "user created", data: {} })
})

router.put('/:id', auth, async (req, res) => {
    res.send({ msg: "user updated", data: {} })
})

router.delete('/:id', auth, async (req, res) => {
    if (req.user.role != "admin") {
        res.status(401).send( {msg: "You do not have the privileges to perform this action"} ) 
    } else {
        res.send({ msg: "user deleted", data: {} })
    }    
})


module.exports = router