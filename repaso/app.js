const express = require('express')
const app = express()
const port = 3000

//import paths
const usersRoute = require('./src/routes/users')

//import middlewares
const { getRole } = require('./src/middlewares/authentication')

app.use(express.json())

app.get('/', (req, res) => {
   res.send({ msg: 'API Rest Kodemia gen 30' }) 
})

app.use(getRole)
app.use('/users', usersRoute)

app.listen(port, () => {
    console.log('Server is ready')
})

