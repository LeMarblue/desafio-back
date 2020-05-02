
const bcrypt = require('bcrypt')

const jwt = require('../lib/jwt')

const User = require('../models/user')

function getAll () {
  return User.find()
}

function create (userData) {
  return User.create(userData)
}

function updatedById (id, newUserData) {
  return User.findByIdAndUpdate(id, newUserData)
}

function deletedById (id) {
  return User.findByIdAndRemove(id)
}

async function signup (newUserData) {
  const { email, password } = newUserData
  if (!email) throw new Error('Email is required')
  if (!password) throw new Error('password is required')

  const userAlreadyExists = await User.findOne({ email })

  if (userAlreadyExists) throw new Error('Email is already registered')
  if (password < 6) throw new Error('Password must be 6 characers minimum')

  const hash = await bcrypt.hash(password, 10)

  return User.create({ ...newUserData, password: hash })
}

async function login (email, password) {
  const user = await User.findOne({ email })
  if (!user) throw new Error('Invalid data')

  const isPasswordCorrect = await bcrypt.compare(password, user.password)
  if (!isPasswordCorrect) throw new Error('Invalid data')

  return jwt.sign({ id: user._id })
}

module.exports = {
  getAll,
  create,
  updatedById,
  deletedById,
  signup,
  login
}
