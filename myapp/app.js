const express = require('express')
const server = express()
const port = 3000

// import routes
const usersRoutes = require('./src/routes/users')

// server = {listen() get(), post(), delete(), use(), json() ....}

server.use(express.json()) // res.setHeader('Content-Type', 'application/json');

function auth(req, res, next) {
    const auth = req.headers.authorization

    if (auth != null) {
        next()
    } else {
        res.status(401).send("Se requiere autorizacion")
    }
    
}



server.get('/', (req, res) => {
    res.send('Home!')
})
// server = {listen(), get(), post(), delete(), use() .... get: ['/'] ....}

server.use(auth)
server.use('/users', usersRoutes)

// server = {listen(), get(), post(), delete(), use() .... get: ['/', '/users'], post: ['/users'] ....}

server.listen(port, () => {
    console.log(`Example server listening on port ${port}`)
})