const express = require('express')
const router = express.Router()
const fs = require('fs')
const readFile = require('../helpers/readFile') 

/*

1) Los admin pueden realizar cualquier accion
2) Los seller pueden editar su propio usuario
3) Los buyer pueden editar su propio usuario
4) Los buyer no pueden borrar usuarios
...

*/
function getRol(req, res, next) {
    
    const role = req.headers.role

    req.user = {
        role: role
    }
    next()
}


function isAdmin(req, res, next) {
    
    const auth = req.user.role
    if (auth == "admin") {
        next()
    } else {
        res.status(401).send("No cuentas con los privilegios para esta accion")
    } 
    
}

function isSeller(req, res, next) {
    
    const auth = req.user.role
    if (auth == "seller") {
        next()
    } else {
        res.status(401).send("No cuentas con los privilegios para esta accion")
    } 
    
}
// router = { get(), post(), delete(), .... get: ['/users'], post: ['/users']}
// put localhost:3000/users

router.use(getRol)
router.get('/', async (req, res) => {
     /*const users = new Promise((resolve, reject) => {
        fs.readFile('./src/lib/db.json', 'utf8', (err, data) => {
            if (err) reject(err)
            resolve(JSON.parse(data))
        })
    })

    users.then((data) => {
        res.send(data)
    }).catch((err) => {
        res.status(400).send(err)
    })*/

    try {
        const users = await readFile()
        res.send(users)
    } catch (error) {
       res.status(401).send(error)
    }
})

router.get('/:id', (req, res) => {
    const { id } = req.params
})

router.put('/:id', (req, res) => {
    const { id } = req.params
})

router.delete('/:id', (req, res) => {
    const { id } = req.params
})

router.post('/', isAdmin, (req, res) => {

    console.log(req)
    // TODO Save User 
    const user = req.body
    const users = new Promise((resolve, reject) => {
        fs.readFile('./src/lib/db.json', 'utf8', (err, data) => {
            if (err) reject(err)
            resolve(JSON.parse(data))
        })
    })
    users.then((data) => {
        data.push(user)
        fs.writeFile('./src/lib/db.json', JSON.stringify(data, null, 4), (err) => {
            if (err) res.status(400).send('usuario no creado')
            res.status(201).send('usuario creado')
        })
    }).catch((err) => {
        res.status(400).send('usuario no creado')
    })  
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
