const express = require('express')
const router = express.Router()
//const readFile = require('../utils/readFile')
const { auth } = require('../middlewares/authorization')
const User = require('../models/users')
const UserController = require('../controllers/users')
const { createJWT } = require('../middlewares/authentication')

//router.get('/', auth, UserController.getAll)

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
})

router.post('/login', async (req, res) => {
    try {
        const credential = req.body
        const user = await User.findOne({email: credential.email})
        if (!user) {
            res.status(401).send({msg: "user not found"})
        }
        if (user.password != credential.password) {
            res.status(401).send({msg: "invalid password"})
        } else {
            const token = createJWT({_id: user._id, role: user.role})
            res.send({msg: "login user", data: token})
        }
        
    } catch (error) {
        res.status(400).send({msg: "login ivalid", error: error})
    }
    
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