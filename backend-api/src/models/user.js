
const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 2
  },
  email: {
    type: String,
    required: true,
    minLength: 3
  },
  password: {
    type: String,
    required: true,
    minLength: 6
  }
})

module.exports = mongoose.model('User', userSchema)
