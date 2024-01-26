const express = require('express')
const server = express()
const port = 3000

// import routes
const usersRoutes = require('./src/routes/users')

// server = {listen() get(), post(), delete(), use(), json() ....}

server.use(express.json())

server.get('/', (req, res) => {
    res.send('Home!')
})
// server = {listen(), get(), post(), delete(), use() .... get: ['/'] ....}

server.use('/users', usersRoutes)

// server = {listen(), get(), post(), delete(), use() .... get: ['/', '/users'], post: ['/users'] ....}

server.listen(port, () => {
    console.log(`Example server listening on port ${port}`)
})