require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
const { connect } = require('./src/utils/db')
const { verifyJWT } = require('./src/middlewares/authentication')

//import paths
const usersRoute = require('./src/routes/users')

//conectar la base de datos
connect()

app.use(express.json())

app.get('/', (req, res) => {
   res.send({ msg: 'API Rest Kodemia gen 30' }) 
})

app.use(verifyJWT)
app.use('/users', usersRoute)

app.listen(port, () => {
    console.log('Server is ready')
})

