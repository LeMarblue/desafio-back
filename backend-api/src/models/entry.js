
const mongoose = require('mongoose')
const entrySchema = new mongoose.Schema({
  title: {
    type: String,
    minLength: 3,
    required: true
  },
  image: {
    type: String,
    required: true,
    minLength: 1
  },
  description: {
    type: String,
    required: true,
    minLength: 7
  },
  author: {
    type: String,
    minLength: 1,
    required: true
  },
  category: {
    type: String,
    required: true,
    minLength: 1
  },
  estimatedReadTime: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Entry', entrySchema)
