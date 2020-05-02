
const mongoose = require('mongoose')

const DB_USER = 'Devmar'
const DB_PASSWORD = 'Tripulacion3.4'
const DB_HOST = 'mar-kodemia-woog9.mongodb.net'
const DB_NAME = 'mar-kodeDB'
// 'mongodb+srv://Devmar:Tripulacion3.4@mar-kodemia-woog9.mongodb.net/test?retryWrites=true&w=majority'

const url = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`

function connect () {
  mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
}

module.exports = {
  connect
}
