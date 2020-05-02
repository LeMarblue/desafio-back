
const express = require('express')
const cors = require('cors')

const enrtyRouter = require('./routes/entry')
const UserRouter = require('./routes/user')
const authRouter = require('./routes/auth')

const server = express()

server.use(express.json())
server.use(cors())

server.use('/entries', enrtyRouter)
server.use('/user', UserRouter)
server.use('/auth', authRouter)

module.exports = server
