const express = require('express')
const router = express.Router()
const fs = require('fs')

// router = { get(), post(), delete(), .... get: ['/users'], post: ['/users']}

router.get('/', (req, res) => {
     const users = new Promise((resolve, reject) => {
        fs.readFile('./src/lib/db.json', 'utf8', (err, data) => {
            if (err) reject(err)
            resolve(JSON.parse(data))
        })
    })

    users.then((data) => {
        res.send(data)
    }).catch((err) => {
        res.status(400).send(err)
    })
})

router.post('/login', (req, res) => {
    // TODO Save User 
    res.status(201).send('usuario creado')
})

router.post('/', (req, res) => {
    // TODO Save User 
    res.status(201).send('usuario creado')
})

router.put('/', (req, res) => {
    // TODO Save User 
    res.status(200).send('usuario creado')
})

router.delete('/', (req, res) => {
    // TODO Save User 
    res.status(200).send('usuario creado')
})

module.exports = router
